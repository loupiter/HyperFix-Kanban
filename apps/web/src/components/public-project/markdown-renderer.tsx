import CommentEditor from "@/components/activity/comment-editor";

type MarkdownRendererProps = {
  content: string;
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <CommentEditor
      value={content}
      readOnly
      showBubbleMenu={false}
      proseClassName="hyperfix-tiptap-prose"
      contentClassName="hyperfix-tiptap-content"
      className="[&_.hyperfix-tiptap-content_.ProseMirror]:max-h-none [&_.hyperfix-tiptap-content_.ProseMirror]:overflow-visible [&_.hyperfix-tiptap-content_.ProseMirror]:px-0 [&_.hyperfix-tiptap-content_.ProseMirror]:py-0"
    />
  );
}
