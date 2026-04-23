import React, { useState } from 'react';
import { Code, Server, Book, Play, Copy } from 'lucide-react';

const FunctionalityPage: React.FC = () => {
  // 沙箱环境状态
  const [sandboxCode, setSandboxCode] = useState<string>(`// 示例代码
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`);
  const [sandboxOutput, setSandboxOutput] = useState<string>('运行代码查看输出...');
  const [sandboxLoading, setSandboxLoading] = useState<boolean>(false);

  // 代理测试状态
  const [proxyUrl, setProxyUrl] = useState<string>('https://api.example.com');
  const [proxyMethod, setProxyMethod] = useState<string>('GET');
  const [proxyHeaders, setProxyHeaders] = useState<string>('Content-Type: application/json');
  const [proxyBody, setProxyBody] = useState<string>('{"key": "value"}');
  const [proxyResponse, setProxyResponse] = useState<string>('发送请求查看响应...');
  const [proxyLoading, setProxyLoading] = useState<boolean>(false);

  // 处理沙箱代码运行
  const handleRunSandbox = () => {
    setSandboxLoading(true);
    setSandboxOutput('运行中...');
    
    // 模拟代码执行
    setTimeout(() => {
      setSandboxOutput('{"data": "Sample response", "status": 200, "message": "Success"}');
      setSandboxLoading(false);
    }, 1500);
  };

  // 处理代理测试请求
  const handleProxyTest = () => {
    setProxyLoading(true);
    setProxyResponse('请求中...');
    
    // 模拟API请求
    setTimeout(() => {
      setProxyResponse('{"proxy_response": {"status": 200, "data": {"id": 1, "name": "Test Data", "description": "This is a sample proxy response"}, "headers": {"content-type": "application/json"}}}');
      setProxyLoading(false);
    }, 1500);
  };

  // 复制到剪贴板
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // API文档数据
  const apiDocs = [
    {
      endpoint: '/api/users',
      method: 'GET',
      description: '获取用户列表',
      parameters: [
        { name: 'page', type: 'number', required: false, description: '页码' },
        { name: 'limit', type: 'number', required: false, description: '每页数量' }
      ],
      response: '{"users": [{"id": 1, "name": "User 1"}, {"id": 2, "name": "User 2"}], "total": 2}'
    },
    {
      endpoint: '/api/users',
      method: 'POST',
      description: '创建新用户',
      parameters: [
        { name: 'name', type: 'string', required: true, description: '用户名' },
        { name: 'email', type: 'string', required: true, description: '邮箱' }
      ],
      response: '{"id": 3, "name": "New User", "email": "newuser@example.com"}'
    },
    {
      endpoint: '/api/users/:id',
      method: 'GET',
      description: '获取单个用户信息',
      parameters: [
        { name: 'id', type: 'number', required: true, description: '用户ID' }
      ],
      response: '{"id": 1, "name": "User 1", "email": "user1@example.com"}'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* 页面标题 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">功能中心</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            探索我们的核心功能，包括沙箱环境、代理测试和API文档
          </p>
        </div>
      </section>

      {/* 功能模块 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 沙箱环境 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Code className="h-6 w-6 text-blue-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">沙箱环境</h2>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                在线编写和执行代码，测试API调用
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  代码编辑器
                </label>
                <textarea
                  value={sandboxCode}
                  onChange={(e) => setSandboxCode(e.target.value)}
                  className="w-full h-48 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleRunSandbox}
                  disabled={sandboxLoading}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  <span>{sandboxLoading ? '运行中...' : '运行代码'}</span>
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  输出结果
                </label>
                <div className="relative">
                  <pre className="w-full h-40 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-mono overflow-auto">
                    {sandboxOutput}
                  </pre>
                  {sandboxOutput !== '运行代码查看输出...' && sandboxOutput !== '运行中...' && (
                    <button
                      onClick={() => copyToClipboard(sandboxOutput)}
                      className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 代理测试 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Server className="h-6 w-6 text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">代理测试</h2>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                测试API代理功能，查看请求和响应
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    请求方法
                  </label>
                  <select
                    value={proxyMethod}
                    onChange={(e) => setProxyMethod(e.target.value)}
                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    API URL
                  </label>
                  <input
                    type="text"
                    value={proxyUrl}
                    onChange={(e) => setProxyUrl(e.target.value)}
                    className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  请求头
                </label>
                <textarea
                  value={proxyHeaders}
                  onChange={(e) => setProxyHeaders(e.target.value)}
                  className="w-full h-24 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  请求体
                </label>
                <textarea
                  value={proxyBody}
                  onChange={(e) => setProxyBody(e.target.value)}
                  className="w-full h-24 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleProxyTest}
                  disabled={proxyLoading}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  <span>{proxyLoading ? '请求中...' : '发送请求'}</span>
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  响应结果
                </label>
                <div className="relative">
                  <pre className="w-full h-40 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-mono overflow-auto">
                    {proxyResponse}
                  </pre>
                  {proxyResponse !== '发送请求查看响应...' && proxyResponse !== '请求中...' && (
                    <button
                      onClick={() => copyToClipboard(proxyResponse)}
                      className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* API文档 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Book className="h-6 w-6 text-purple-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">API文档</h2>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                浏览和了解可用的API端点
              </p>
            </div>
            <div className="p-6 max-h-[600px] overflow-y-auto">
              {apiDocs.map((doc, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${doc.method === 'GET' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : doc.method === 'POST' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : doc.method === 'PUT' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                      {doc.method}
                    </span>
                    <span className="font-mono text-sm text-gray-900 dark:text-white">{doc.endpoint}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{doc.description}</p>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">参数</h4>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-3">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr>
                            <th className="text-left font-medium text-gray-500 dark:text-gray-400">参数</th>
                            <th className="text-left font-medium text-gray-500 dark:text-gray-400">类型</th>
                            <th className="text-left font-medium text-gray-500 dark:text-gray-400">必填</th>
                            <th className="text-left font-medium text-gray-500 dark:text-gray-400">描述</th>
                          </tr>
                        </thead>
                        <tbody>
                          {doc.parameters.map((param, paramIndex) => (
                            <tr key={paramIndex} className="border-t border-gray-200 dark:border-gray-700">
                              <td className="py-2 font-mono">{param.name}</td>
                              <td className="py-2">{param.type}</td>
                              <td className="py-2">{param.required ? '是' : '否'}</td>
                              <td className="py-2">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">响应示例</h4>
                    <div className="relative">
                      <pre className="w-full p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-mono overflow-auto">
                        {doc.response}
                      </pre>
                      <button
                        onClick={() => copyToClipboard(doc.response)}
                        className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 功能说明 */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">功能说明</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">沙箱环境</h3>
              <p className="text-gray-600 dark:text-gray-400">
                在线编写和执行代码，测试API调用，无需本地环境配置
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Server className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">代理测试</h3>
              <p className="text-gray-600 dark:text-gray-400">
                测试API代理功能，查看请求和响应，调试API调用
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <Book className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">API文档</h3>
              <p className="text-gray-600 dark:text-gray-400">
                浏览和了解可用的API端点，查看参数和响应示例
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalityPage;