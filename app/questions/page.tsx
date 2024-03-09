'use client';
import React, { useState } from 'react';

const Questions = () => {
  // 各質問の回答を管理するステート
  const [githubUrl, setGithubUrl] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  // フォームの送信を扱う関数（今回は例として用意）
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここで回答を処理（例：コンソールに出力）
    setGithubUrl('');
    setProjectName('');
    setProjectDetails('');
    console.log({ githubUrl, projectName, projectDetails });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-32 px-64 pt-32 pb-8">
      <div>
        <label htmlFor="githubUrl" className="block text-xl font-medium text-gray-700">
          GitHubリポジトリのURL
        </label>
        <input
          type="text"
          id="githubUrl"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          className="h-12 text-lg mt-1 block w-full border-0 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none sm:text-xl"
        />
      </div>
      <div>
        <label htmlFor="projectName" className="block text-xl font-medium text-gray-700">
          プロジェクト名
        </label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="h-12 mt-1 block w-full border-0 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none sm:text-xl"
        />
      </div>
      <div>
        <label htmlFor="projectDetails" className="block text-xl font-medium text-gray-700">
          プロジェクトの詳細
        </label>
        <textarea
          id="projectDetails"
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
          className="mt-1 block w-full min-h-32 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500"
      >
        送信
      </button>
    </form>
  );
};

export default Questions;
