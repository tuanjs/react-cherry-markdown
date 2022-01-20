import React, {
  forwardRef,
  useImperativeHandle,
  // useRef, useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import Editor from 'cherry-markdown';
import { CherryOptions } from 'cherry-markdown/types/cherry';
import '../style/index.css';

export type CherryEditorType = Editor;
export interface CherryEditorProps extends Partial<CherryOptions> {
  className?: string;
  style?: React.CSSProperties;
}

const CherryEditor = forwardRef<Editor | undefined, CherryEditorProps>(
  ({ id = 'react-cherry-editor', className, style, ...rest }, ref) => {
    // const editorRef = useRef<Editor>();

    // useEffect(() => {
    //   editorRef.current = new Editor({
    //     id,
    //     ...rest,
    //   });

    //   return () => {
    //     editorRef.current = undefined;
    //   };
    // }, [rest, id]);

    // useImperativeHandle(ref, () => editorRef.current);

    const [editorInstance, setEditorInstance] = useState<Editor>();

    useLayoutEffect(() => {
      setEditorInstance(
        new Editor({
          id,
          ...rest,
        }),
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => editorInstance, [editorInstance]);

    return <div id={id} className={className} style={style} />;
  },
);

CherryEditor.displayName = 'CherryEditor';

export default CherryEditor;
