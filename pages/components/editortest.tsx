import React from "react";
import Editor from "@monaco-editor/react";
type Props = {};

function test({}: Props) {
  function handleEditorChange(value: any) {
    console.log(value);
  }
  return (
    <div
      style={{
        all: "unset",
      }}
    >
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        defaultValue={`export default function Example() {
          return (
              <div className="bg-gray-50">
              <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block text-indigo-600">Start your free trial today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="ml-3 inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
              )
          }`}
        onChange={(val) => handleEditorChange(val)}
      />
    </div>
  );
}

export default test;
