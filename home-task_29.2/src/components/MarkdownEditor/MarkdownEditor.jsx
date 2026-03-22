import {useEffect, useRef} from "react";
import {Editor} from "@toast-ui/editor";

const MarkdownEditor = ({ onContentChange }) => {

  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: editorRef.current,
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
    });

    editor.on('change', () => {
      const content = editor.getMarkdown();
      if (onContentChange) {
        onContentChange(content);
      }
    });

    return () => editor.destroy();
  }, [onContentChange]);

  return (
    <div ref={editorRef}></div>
  );
};

export default MarkdownEditor;