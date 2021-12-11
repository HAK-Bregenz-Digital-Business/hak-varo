import { useEffect, useRef } from 'react';

export interface ReactCommentProps {
  text: string;
}

export const ReactComment: React.FC<ReactCommentProps> = ({
  text,
}: ReactCommentProps) => {
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentRef.current) commentRef.current.outerHTML = `<!-- ${text} -->`;
  }, []);

  return <div ref={commentRef}></div>;
};

export default ReactComment;
