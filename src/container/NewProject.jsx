import React, { useState } from 'react';
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import { SplitPane } from 'react-split-pane';
import {CodeMirror} from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';

const NewProject = () => {
  const[html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");

  const updateOutput = () => {
    const combinedOutput = `
    <html>
      <head>
      <style>${css}</style>
      </head>
      <body>
      ${html}
      <script>${js}</script>
      </body>
    </html>
    `;
  }

  return (
  <>
    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">

      {/* alert section */}

      {/* header section */}

      {/* coding section */}

      <div>

        {/* horizontal */}

        <SplitPane 
          split="horizontal" 
          minSize={100} 
          maxSize={-100} 
          defaultSize={"50%"} 
        >
      
          {/* top coding section */}
          <SplitPane split="vertical" minSize={500}>
            {/* html code */}
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-gray-500">
                  <FaHtml5 className="text-xl text-green-400"/>
                  <p className="text-primaryText font-semibold ">HTML</p>
                </div>
                {/* icons */}
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl"/>
                  <FaChevronDown className="text-xl text-primaryText"/>
                </div>
              </div>
              <div className="w-full px-2">
                <CodeMirror
                value={html}
                height="600px"
                extensions={[javascript({ jsx: true })]}
                theme={"dark"}
                onchange={(value, viewUpdate) => {
                  setHtml(value);
                }}
                />
              </div>
            </div>

            <SplitPane split="vertical" minSize={500}>
              
            {/* css code */}
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-gray-500">
                  <FaCss3 className="text-xl text-sky-400"/>
                  <p className="text-primaryText font-semibold ">CSS</p>
                </div>
                {/* icons */}
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl"/>
                  <FaChevronDown className="text-xl text-primaryText"/>
                </div>
              </div>
              <div className="w-full px-2">
                <CodeMirror
                value={css}
                height="600px"
                extensions={[javascript({ jsx: true })]}
                theme={"dark"}
                onchange={(value, viewUpdate) => {
                  setCss(value);
                }}
                />
              </div>
            </div>

            {/* js code */}
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-gray-500">
                  <FaJs className="text-xl text-yellow-400"/>
                  <p className="text-primaryText font-semibold ">JavaScript</p>
                </div>
                {/* icons */}
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl"/>
                  <FaChevronDown className="text-xl text-primaryText"/>
                </div>
              </div>
              <div className="w-full px-2">
                <CodeMirror
                value={js}
                height="600px"
                extensions={[javascript({ jsx: true })]}
                theme={"dark"}
                onchange={(value, viewUpdate) => {
                  setJs(value);
                }}
                />
              </div>
            </div>
            </SplitPane>
          </SplitPane>

          {/* bottom result section */}
          <div className='bg-white' 
          style={{overflow: "hidden", height:"100%"}}
          >

          </div>
        </SplitPane>
      </div>
    </div>
  </>);
};

export default NewProject;