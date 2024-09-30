import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({name, height = 460, onChange, size='basic', className, style }, ref) => {
    const [content, setContent] = useState('');

    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const handleEditorChange = (newContent, editor) => {
        setContent(newContent);
        if (onChange) {
            onChange(newContent, name); 
        }
    };

    useImperativeHandle(ref, () => ({
        getContent: () => content,
        name
    }));

    return (
        <Editor
            className={className}
            style={style}
            initialValue=""
            apiKey="szz838nunq345ia6qdpvrwcbgea53jl242ndmx9huqn1n53t" 
            init={{
                height: height,
                selector: 'textarea#open-source-plugins',
                editimage_cors_hosts: ['picsum.photos'],
                plugins: size === 'adv' 
                    ? 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion'
                    : 'autolink lists code',
                toolbar: size === 'adv' 
                    ? 'undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl'
                    : 'undo redo | blocks fontfamily fontsize | bold italic underline | align numlist bullist | link image | table media | code fullscreen preview',
                menubar: size === 'adv' ? 'file edit view insert format tools table help' : false,
                autosave_ask_before_unload: true,
                autosave_interval: '30s',
                autosave_prefix: '{path}{query}-{id}-',
                autosave_restore_when_empty: false,
                autosave_retention: '2m',
                image_advtab: true,
                link_list: [
                    { title: 'My page 1', value: 'https://www.tiny.cloud' },
                    { title: 'My page 2', value: 'http://www.moxiecode.com' },
                ],
                image_list: [
                    { title: 'My page 1', value: 'https://www.tiny.cloud' },
                    { title: 'My page 2', value: 'http://www.moxiecode.com' },
                ],
                image_class_list: [
                    { title: 'None', value: '' },
                    { title: 'Some class', value: 'class-name' },
                ],
                importcss_append: true,
                file_picker_callback: (callback, value, meta) => {
                    if (meta.filetype === 'file') {
                        callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
                    }

                    if (meta.filetype === 'image') {
                        callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
                    }

                    if (meta.filetype === 'media') {
                        callback('movie.mp4', {
                            source2: 'alt.ogg',
                            poster: 'https://www.google.com/logos/google.jpg',
                        });
                    }
                },
                image_caption: true,
                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                noneditable_class: 'mceNonEditable',
                toolbar_mode: 'sliding',
                contextmenu: 'link image table',
                skin: useDarkMode ? 'oxide-dark' : 'oxide',
                content_css: useDarkMode ? 'dark' : 'default',
                content_style: 'body { font-family:Inter; font-size:16px }',
                fontfamily_formats: 'Inter=Inter',
                fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 40pt',
            }}
            value={content}
            onEditorChange={handleEditorChange}
        />
    );
};

export default forwardRef(TextEditor);
