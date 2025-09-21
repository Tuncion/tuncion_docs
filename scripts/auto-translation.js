const fs = require('fs');
const path = require('path');
const axios = require('axios');
const OpenAI = require("openai");

const AllOtherLanguages = [
    'de', // German
    'fr', // French
    'es', // Spanish
    'it', // Italian
    'pt', // Portuguese
    'tr', // Turkish
    'ar', // Arabic
    'ru', // Russian
    'pl', // Polish
    'nl', // Dutch
    'uk'  // Ukrainian
];

const FilesBlacklist = [
    'config.md'
];

const openai = new OpenAI({
  apiKey: '' // SET KEY HERE!!
});

// Translation Thread
(async () => {
    let TotalTranslatedFiles = 0;

    // Create and get sync data
    if (!fs.existsSync('./i18n/syncData.json')) fs.writeFileSync('./i18n/syncData.json', '{}', 'utf8');
    let SyncData = JSON.parse(fs.readFileSync('./i18n/syncData.json', 'utf8'));

    // Loop and translate all languages
    for (const lang of AllOtherLanguages) {
        console.log(`🔥 Start Translation: ${lang}!`)

        // Create lang folder if not exists
        if (!fs.existsSync(`./i18n/${lang}`)) fs.mkdirSync(`./i18n/${lang}`);
        if (!fs.existsSync(`./i18n/${lang}/docusaurus-plugin-content-docs`)) fs.mkdirSync(`./i18n/${lang}/docusaurus-plugin-content-docs`);
        if (!fs.existsSync(`./i18n/${lang}/docusaurus-plugin-content-docs/current`)) {
            fs.mkdirSync(`./i18n/${lang}/docusaurus-plugin-content-docs/current`);
            fs.cpSync('./docs', `./i18n/${lang}/docusaurus-plugin-content-docs/current`, { recursive: true });
        };

        await TranslateFolder('./docs', `./i18n/${lang}/docusaurus-plugin-content-docs/current`, lang)
            .then(() => console.log(`\n\n\t✅ All Files for ${lang} translated!`))
            .catch(err => console.error(err));
        console.log(`🚀 End Translation: ${lang}!`)
    }

    console.log(`🎉 All Done! Translated ${TotalTranslatedFiles} Files...`);

    // OPENAI Method
    async function TranslateText(lang, text) {
        const systemPrompt = `
        You are a strict translator for Docusaurus Markdown documentation files.  

        🚫 Absolutely forbidden (NEVER translate, NEVER change):  
        - HEADER delimiters: the starting \`---\` and ending \`---\` must remain EXACTLY.  
        - HEADER keys: NEVER translate, rename, remove, or add any keys (e.g. \`title\`, \`slug\`, \`sidebar_position\`).  
        - Block tags: \`:::warning\`, \`:::tip\`, \`:::note\`, \`:::danger\`.  
        - Code fences (\`\`\` ... \`\`\`), inline code (\`code\`), and everything inside them.  
        - DO NOT wrap the entire output in \`\`\`markdown or any other code block fence. Output must be **raw Markdown only**.  

        ✅ Allowed translations:  
        - Only translate **values** of Header keys (but ONLY the value of \`description\`).  
        - Translate all visible Markdown text: headings, paragraphs, list items, blockquotes.  
        - Keep emojis, links, formatting, and symbols unchanged.  
        ${lang === 'de' ? '- In German (\`de\`), always use the **informal "Du"-form**. ' : ''} 

        📌 Rules (must always be respected):  
        1. Preserve Header frontmatter **1:1** with keys and delimiters intact.  
        2. Preserve all Markdown structure exactly.  
        3. Do not add or remove lines.  
        4. Do not output anything except the translated file.  

        ❗IMPORTANT OUTPUT RULE:  
        The translated result must be returned as RAW Markdown text ONLY.  
        DO NOT surround the output with \`\`\`markdown, \`\`\` or any other code fences.
        ⚠️ DO NOT include any reasoning, explanations, or <think> tags.
        `;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `Translate the following content into the language specified by ISO code: ${lang}:\n\n${text}` }
            ],
            temperature: 0
        });

        return response.choices[0].message.content.trim();
    }


//     async function TranslateText(lang, text) {
//         const response = await axios.post('http://localhost:1234/v1/chat/completions', {
//             model: 'qwen3-14b',
//             messages: [
//                 {
//                     role: 'user', content: `
// You are a strict translator for Docusaurus Markdown documentation files.  

// 🚫 Absolutely forbidden (NEVER translate, NEVER change):  
// - HEADER delimiters: the starting \`---\` and ending \`---\` must remain EXACTLY.  
// - HEADER keys: NEVER translate, rename, remove, or add any keys (e.g. \`title\`, \`slug\`, \`sidebar_position\`).  
// - Block tags: \`:::warning\`, \`:::tip\`, \`:::note\`, \`:::danger\`.  
// - Code fences (\`\`\` ... \`\`\`), inline code (\`code\`), and everything inside them.  
// - DO NOT wrap the entire output in \`\`\`markdown or any other code block fence. Output must be **raw Markdown only**.  

// ✅ Allowed translations:  
// - Only translate **values** of Header keys (but ONLY the value of \`description\`).  
// - Translate all visible Markdown text: headings, paragraphs, list items, blockquotes.  
// - Keep emojis, links, formatting, and symbols unchanged.  
// ${lang == 'de' ? '- In German (\`de\`), always use the **informal "Du"-form**. ' : ''} 

// 📌 Rules (must always be respected):  
// 1. Preserve Header frontmatter **1:1** with keys and delimiters intact.  
//    Example:  
//    ---
//    description: Translated Text
//    sidebar_position: 11
//    ---
//    ❌ DO NOT remove or translate \`title\`, \`sidebar_position\`.  
//    ✅ ONLY translate the text after \`description:\`.  

// 2. Preserve all Markdown structure exactly.  
// 3. Do not add or remove lines.  
// 4. Do not output anything except the translated file.  

// ❗IMPORTANT OUTPUT RULE:  
// The translated result must be returned as RAW Markdown text ONLY.  
// DO NOT surround the output with \`\`\`markdown, \`\`\` or any other code fences.
// ⚠️ DO NOT include any reasoning, explanations, or <think> tags.
// If you add them, the result will break Docusaurus.

// Now translate this content into language code ${lang}:

// ${text}
// ` }
//             ]
//         }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
        
//     let output = response.data.choices[0].message.content.trim();

//     // <think>...</think> komplett entfernen (inklusive mehrzeilig)
//     output = output.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
//     return output;
//     }

    async function TranslateFolder(src, dest, lang) {
        if (!SyncData[lang]) SyncData[lang] = {};

        const FolderContent = fs.readdirSync(src, { withFileTypes: true });
        for (const entry of FolderContent) {
            const FolderSubPath = path.join(src, entry.name);

            if (entry.isDirectory()) {
                await TranslateFolder(FolderSubPath, `${dest}/${entry.name}`, lang);
            } else if (entry.isFile() && entry.name.endsWith('.md')) {
                const FileStats = fs.statSync(FolderSubPath);
                const FileName = path.basename(FolderSubPath);

                if (!FilesBlacklist.includes(FileName)) {
                    if (FileStats.mtime.getTime() > (new Date(SyncData[lang][FolderSubPath]).getTime() || 0)) {
                        try {
                            console.log(`\t✨ Translate ${FolderSubPath}!`)
                            const FileContent = fs.readFileSync(FolderSubPath, 'utf8');
                            const TranslatedContent = await TranslateText(lang, FileContent);
                            fs.writeFileSync(`${dest}/${entry.name}`, TranslatedContent, 'utf8');
                            SyncData[lang][FolderSubPath] = new Date().getTime();
                            fs.writeFileSync('./i18n/syncData.json', JSON.stringify(SyncData, null, 2), 'utf8');
                            TotalTranslatedFiles++;
                        } catch(err) {
                            console.error(`\t❌ Error Translating ${FolderSubPath}: ${err.message}`);
                        }
                    } else {
                        console.log(`\t⏩ Skip Translate ${FolderSubPath} (Reason: Not changed since last translate)!`)
                    }
                } else {
                    console.log(`\t⏩ Skip Translate ${FolderSubPath} (Reason: Blacklisted File)!`)
                }
            }
        }
    }

})();