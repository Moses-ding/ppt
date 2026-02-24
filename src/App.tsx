/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Folder, CheckCircle, Eye, Layout, Target, Calendar, Zap, Printer, X } from 'lucide-react';

// --- Slides ---

const Slide1 = () => (
  <div className="w-full h-full bg-slate-900 flex flex-col justify-center px-40 relative">
    <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/montessori/1920/1080?blur=2')] bg-cover bg-center mix-blend-overlay" referrerPolicy="no-referrer"></div>
    <div className="relative z-10">
      <h1 className="text-7xl font-semibold text-white mb-8 tracking-tight">DaddyHome 2026 生存与升级</h1>
      <p className="text-3xl text-amber-500 font-light tracking-wide">用“档案化 + 工作流 + 学术化 + AI化”做出不可替代</p>
    </div>
  </div>
);

const Slide2 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-16">上海幼教已经进入“存量淘汰赛”</h1>
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-amber-600"></div>
        <p className="text-3xl text-slate-700">少子化趋势加剧</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-amber-600"></div>
        <p className="text-3xl text-slate-700">公办园学位过剩</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-amber-600"></div>
        <p className="text-3xl text-slate-700">家长选择权空前扩大</p>
      </div>
    </div>
    <div className="absolute bottom-16 right-40 text-slate-400 text-xl">
      数据来源：2024上海学前教育适龄人口预测报告
    </div>
  </div>
);

const Slide3 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-16">家长真正买单的不是“理念”，是“确定性”</h1>
    <div className="grid grid-cols-3 gap-12 mt-12">
      <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
        <Eye className="w-12 h-12 text-amber-600 mb-8" />
        <h3 className="text-3xl font-semibold text-slate-900 mb-4">看得见</h3>
        <p className="text-xl text-slate-500">成长轨迹具象化</p>
      </div>
      <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
        <CheckCircle className="w-12 h-12 text-amber-600 mb-8" />
        <h3 className="text-3xl font-semibold text-slate-900 mb-4">听得懂</h3>
        <p className="text-xl text-slate-500">专业解释通俗化</p>
      </div>
      <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
        <Target className="w-12 h-12 text-amber-600 mb-8" />
        <h3 className="text-3xl font-semibold text-slate-900 mb-4">可对标</h3>
        <p className="text-xl text-slate-500">能力发展标准化</p>
      </div>
    </div>
  </div>
);

const Slide4 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-16">我们像传统园的根源：缺系统</h1>
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        <p className="text-3xl text-slate-700">无统一档案：数据散落在不同教师手中</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        <p className="text-3xl text-slate-700">无证据链：评价依赖主观印象而非记录</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        <p className="text-3xl text-slate-700">无工作流：教研与会议缺乏标准化产出</p>
      </div>
    </div>
  </div>
);

const Slide5 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center px-40 bg-slate-900 text-center">
    <h2 className="text-3xl text-amber-500 mb-12 tracking-widest uppercase">核心战略</h2>
    <h1 className="text-7xl font-semibold text-white leading-tight">把“深水区”产品化</h1>
  </div>
);

const Slide6 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-20">三大系统总览</h1>
    
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto space-y-12">
      <div className="w-full bg-slate-900 text-white py-6 px-12 rounded-xl text-center shadow-md">
        <h2 className="text-2xl font-semibold tracking-wide">战略：把“深水区”产品化</h2>
      </div>
      
      <div className="w-px h-12 bg-slate-300"></div>
      
      <div className="grid grid-cols-3 gap-8 w-full">
        <div className="bg-white border-2 border-slate-200 py-8 px-6 rounded-xl text-center flex flex-col items-center">
          <Folder className="w-8 h-8 text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-800">家庭档案</h3>
        </div>
        <div className="bg-white border-2 border-slate-200 py-8 px-6 rounded-xl text-center flex flex-col items-center">
          <Layout className="w-8 h-8 text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-800">学生档案</h3>
        </div>
        <div className="bg-white border-2 border-slate-200 py-8 px-6 rounded-xl text-center flex flex-col items-center">
          <Calendar className="w-8 h-8 text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-800">工作流/会议</h3>
        </div>
      </div>
      
      <div className="flex justify-between w-3/4">
        <div className="w-px h-12 bg-slate-300"></div>
        <div className="w-px h-12 bg-slate-300"></div>
        <div className="w-px h-12 bg-slate-300"></div>
      </div>
      
      <div className="grid grid-cols-3 gap-8 w-full">
        <div className="bg-slate-100 py-6 px-6 rounded-xl text-center">
          <p className="text-lg text-slate-600">证据链与对标</p>
        </div>
        <div className="bg-slate-100 py-6 px-6 rounded-xl text-center">
          <p className="text-lg text-slate-600">月报双版本</p>
        </div>
        <div className="bg-slate-100 py-6 px-6 rounded-xl text-center">
          <p className="text-lg text-slate-600">周会纪要</p>
        </div>
      </div>
    </div>
    
    <p className="text-center text-2xl text-amber-600 mt-20 font-medium">因此我们能：交付可被验证的成长确定性</p>
  </div>
);

const Slide7 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-8">系统A：家庭档案 (Family Profile)</h1>
    <p className="text-2xl text-slate-500 mb-16">目标：精准协作，不靠猜</p>
    
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-wider mb-6">字段 01</h3>
        <p className="text-3xl text-slate-800 font-medium">核心教养人特征</p>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-wider mb-6">字段 02</h3>
        <p className="text-3xl text-slate-800 font-medium">核心焦虑与诉求</p>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-wider mb-6">字段 03</h3>
        <p className="text-3xl text-slate-800 font-medium">家园沟通偏好</p>
      </div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="w-full h-full flex items-center px-40 gap-20">
    <div className="flex-1">
      <h1 className="text-5xl font-semibold text-slate-900 mb-8">系统B：学生统一档案</h1>
      <p className="text-2xl text-slate-500 mb-16">目标：把生命发展做成证据链</p>
      
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-slate-800 mb-8">MVP 5分钟记录法</h3>
        <ul className="space-y-4 text-2xl text-slate-600">
          <li className="flex items-center gap-4"><div className="w-2 h-2 bg-amber-500 rounded-full"></div> 观察时间与情境</li>
          <li className="flex items-center gap-4"><div className="w-2 h-2 bg-amber-500 rounded-full"></div> 客观行为描述</li>
          <li className="flex items-center gap-4"><div className="w-2 h-2 bg-amber-500 rounded-full"></div> 对应能力指标</li>
          <li className="flex items-center gap-4"><div className="w-2 h-2 bg-amber-500 rounded-full"></div> 教师介入方式</li>
          <li className="flex items-center gap-4"><div className="w-2 h-2 bg-amber-500 rounded-full"></div> 下一步支持计划</li>
        </ul>
      </div>
    </div>
    
    <div className="flex-1 bg-white p-12 rounded-2xl shadow-lg border border-slate-100">
      <div className="border-b border-slate-100 pb-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-mono text-slate-400">ID: DH-2026-042</span>
          <span className="text-lg font-mono text-amber-600">2026.10.14</span>
        </div>
        <h4 className="text-2xl font-semibold text-slate-900">粉红塔建构观察</h4>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">客观描述</p>
          <p className="text-xl text-slate-700">独立完成10块粉红塔的垂直建构，在第8块时出现犹豫，通过视觉比对后自我纠正。</p>
        </div>
        <div>
          <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">能力对标</p>
          <div className="inline-block bg-slate-100 px-3 py-1 rounded text-slate-600 text-lg">视觉辨别力</div>
          <div className="inline-block bg-slate-100 px-3 py-1 rounded text-slate-600 text-lg ml-2">错误控制</div>
        </div>
      </div>
    </div>
  </div>
);

const Slide9 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-24">证据链：从每日记录到月度报告</h1>
    
    <div className="relative flex justify-between items-center w-full">
      <div className="absolute left-0 right-0 h-1 bg-slate-200 top-1/2 -translate-y-1/2 z-0"></div>
      
      {[
        { title: '记录', sub: '每日', active: false },
        { title: '清洗', sub: '每周', active: false },
        { title: '复盘', sub: '周会', active: true },
        { title: '报告', sub: '每月', active: false },
        { title: '对标', sub: '学期', active: false },
        { title: '指导', sub: '持续', active: false },
      ].map((node, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center bg-slate-50 px-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm border-4 ${node.active ? 'bg-amber-600 text-white border-amber-200' : 'bg-white text-slate-800 border-slate-100'}`}>
            {i + 1}
          </div>
          <h3 className={`text-2xl font-semibold ${node.active ? 'text-amber-600' : 'text-slate-800'}`}>{node.title}</h3>
          <p className="text-lg text-slate-400 mt-2">{node.sub}</p>
        </div>
      ))}
    </div>
  </div>
);

const Slide10 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-16">标准对标：消灭“衔接焦虑”的核武器</h1>
    
    <div className="flex w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="flex-1 p-12 bg-slate-50 border-r border-slate-200">
        <h3 className="text-2xl font-semibold text-slate-800 mb-10 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-sm">M</div>
          蒙氏工作 (活动)
        </h3>
        <ul className="space-y-8">
          <li className="text-2xl text-slate-700 flex items-center justify-between">
            <span>走线练习</span>
            <div className="w-12 h-px bg-slate-300"></div>
          </li>
          <li className="text-2xl text-slate-700 flex items-center justify-between">
            <span>数棒与数字卡片</span>
            <div className="w-12 h-px bg-slate-300"></div>
          </li>
          <li className="text-2xl text-slate-700 flex items-center justify-between">
            <span>金属嵌板描绘</span>
            <div className="w-12 h-px bg-slate-300"></div>
          </li>
        </ul>
      </div>
      
      <div className="flex-1 p-12">
        <h3 className="text-2xl font-semibold text-slate-800 mb-10 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-amber-100 text-amber-700 flex items-center justify-center text-sm">G</div>
          通用能力 (对标)
        </h3>
        <ul className="space-y-8">
          <li className="text-2xl text-slate-700 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>执行功能：抑制控制与专注力</span>
          </li>
          <li className="text-2xl text-slate-700 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>数学认知：数物对应与十进制</span>
          </li>
          <li className="text-2xl text-slate-700 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>精细动作：书写准备与控笔</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide11 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-8">系统C：主教会议与教研工作流</h1>
    <p className="text-2xl text-slate-500 mb-16">会议不是聊天，是产出机器</p>
    
    <div className="flex gap-12">
      <div className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-semibold text-slate-800 mb-8 border-b border-slate-100 pb-4">标准化议程 (45分钟)</h3>
        <ul className="space-y-6 text-xl text-slate-600">
          <li className="flex gap-4"><span className="font-mono text-amber-600">05'</span> <span>同步本周异常数据与特殊观察</span></li>
          <li className="flex gap-4"><span className="font-mono text-amber-600">15'</span> <span>聚焦 1-2 名重点关注儿童案例</span></li>
          <li className="flex gap-4"><span className="font-mono text-amber-600">10'</span> <span>环境调整与教具轮换决策</span></li>
          <li className="flex gap-4"><span className="font-mono text-amber-600">10'</span> <span>家长沟通策略对齐</span></li>
          <li className="flex gap-4"><span className="font-mono text-amber-600">05'</span> <span>确认 Action Items 与 Owner</span></li>
        </ul>
      </div>
      
      <div className="flex-1 flex flex-col justify-center gap-8">
        <div className="bg-slate-900 text-white p-8 rounded-xl flex items-center gap-6">
          <CheckCircle className="w-10 h-10 text-amber-500" />
          <div>
            <h4 className="text-xl font-semibold mb-1">明确的纪要与 Owner</h4>
            <p className="text-slate-400">责任到人，追踪闭环</p>
          </div>
        </div>
        <div className="bg-slate-900 text-white p-8 rounded-xl flex items-center gap-6">
          <Folder className="w-10 h-10 text-amber-500" />
          <div>
            <h4 className="text-xl font-semibold mb-1">沉淀为证据链接</h4>
            <p className="text-slate-400">直接归档至学生/家庭档案</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide12 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-16 self-start">教师四层模型 (人才金字塔)</h1>
    
    <div className="w-full max-w-4xl flex flex-col items-center gap-4">
      <div className="w-1/3 bg-slate-900 text-white py-6 flex flex-col items-center justify-center rounded-t-xl border-b border-slate-700 relative">
        <span className="absolute left-6 text-slate-500 font-mono text-xl">L4</span>
        <span className="text-2xl font-semibold">系统架构者</span>
        <span className="text-sm text-amber-500 mt-2">标准制定 / 体系迭代</span>
      </div>
      <div className="w-1/2 bg-slate-800 text-white py-6 flex flex-col items-center justify-center border-b border-slate-600 relative">
        <span className="absolute left-6 text-slate-500 font-mono text-xl">L3</span>
        <span className="text-2xl font-semibold">方案解决者</span>
        <span className="text-sm text-amber-500 mt-2">家长指导 / 复杂干预</span>
      </div>
      <div className="w-2/3 bg-slate-700 text-white py-6 flex flex-col items-center justify-center border-b border-slate-500 relative">
        <span className="absolute left-6 text-slate-400 font-mono text-xl">L2</span>
        <span className="text-2xl font-semibold">精准观察者</span>
        <span className="text-sm text-amber-400 mt-2">深度记录 / 归因分析</span>
      </div>
      <div className="w-5/6 bg-slate-600 text-white py-6 flex flex-col items-center justify-center rounded-b-xl relative">
        <span className="absolute left-6 text-slate-300 font-mono text-xl">L1</span>
        <span className="text-2xl font-semibold">合格执行者</span>
        <span className="text-sm text-amber-300 mt-2">环境维护 / 基础带班</span>
      </div>
    </div>
  </div>
);

const Slide13 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <div className="flex items-center gap-6 mb-16">
      <Zap className="w-12 h-12 text-amber-600" />
      <h1 className="text-5xl font-semibold text-slate-900">AI 的位置：把案头时间还给观察</h1>
    </div>
    
    <div className="space-y-10">
      <div className="flex items-start gap-8">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400 shrink-0">1</div>
        <div>
          <h3 className="text-3xl font-semibold text-slate-800 mb-2">数据清洗</h3>
          <p className="text-2xl text-slate-500">将碎片化的口语记录转化为结构化档案</p>
        </div>
      </div>
      <div className="flex items-start gap-8">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400 shrink-0">2</div>
        <div>
          <h3 className="text-3xl font-semibold text-slate-800 mb-2">报告生成</h3>
          <p className="text-2xl text-slate-500">基于月度证据链，自动生成初版家长报告</p>
        </div>
      </div>
      <div className="flex items-start gap-8">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400 shrink-0">3</div>
        <div>
          <h3 className="text-3xl font-semibold text-slate-800 mb-2">策略建议</h3>
          <p className="text-2xl text-slate-500">辅助检索对标标准，提供干预活动灵感</p>
        </div>
      </div>
    </div>
  </div>
);

const Slide14 = () => (
  <div className="w-full h-full flex flex-col justify-center px-40">
    <h1 className="text-5xl font-semibold text-slate-900 mb-16">90天路线图 (落地计划)</h1>
    
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-slate-300">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">0–30 天</h3>
        <p className="text-lg text-slate-400 mb-8 uppercase tracking-wider">基建期</p>
        <ul className="space-y-6 text-xl text-slate-700">
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-slate-400 rounded-full shrink-0"></div> 统一档案模板规范</li>
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-slate-400 rounded-full shrink-0"></div> 跑通 5 分钟记录法</li>
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-slate-400 rounded-full shrink-0"></div> 建立周会标准议程</li>
        </ul>
      </div>
      
      <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-amber-500">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">31–90 天</h3>
        <p className="text-lg text-amber-600 mb-8 uppercase tracking-wider">运行期</p>
        <ul className="space-y-6 text-xl text-slate-700">
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-amber-500 rounded-full shrink-0"></div> 产出首批月度报告</li>
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-amber-500 rounded-full shrink-0"></div> 跑通对标解释话术</li>
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-amber-500 rounded-full shrink-0"></div> 引入 AI 辅助清洗</li>
        </ul>
      </div>
      
      <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-slate-900">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">90–180 天</h3>
        <p className="text-lg text-slate-500 mb-8 uppercase tracking-wider">固化期</p>
        <ul className="space-y-6 text-xl text-slate-700">
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-slate-900 rounded-full shrink-0"></div> 形成园所专属案例库</li>
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-slate-900 rounded-full shrink-0"></div> 教师分层考核落地</li>
          <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-slate-900 rounded-full shrink-0"></div> 召开家长学术发布会</li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide15 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center px-40 bg-slate-900 text-center">
    <h1 className="text-6xl font-semibold text-white mb-12 leading-tight">我们卖的不是课程，<br/>是“成长确定性”</h1>
    <div className="flex items-center gap-6 text-2xl text-amber-500 font-light tracking-widest">
      <span>证据链</span>
      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
      <span>对标</span>
      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
      <span>复盘</span>
      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
      <span>共育</span>
    </div>
  </div>
);

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8,
  Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15
];

// --- Layout Components ---

const SlideWrapper = ({ children, isPrintMode, setIsPrintMode }: { children: React.ReactNode, isPrintMode: boolean, setIsPrintMode: (v: boolean) => void }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isPrintMode) return;
    const handleResize = () => {
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      setScale(Math.min(scaleX, scaleY) * 0.95);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isPrintMode]);

  if (isPrintMode) {
    return (
      <div className="bg-slate-900 min-h-screen font-sans">
        <div className="fixed top-8 right-8 z-50 no-print flex gap-4">
          <button onClick={() => window.print()} className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg font-medium hover:bg-amber-700 flex items-center gap-2 cursor-pointer transition-colors">
            <Printer className="w-5 h-5" />
            打印 / 另存为 PDF
          </button>
          <button onClick={() => setIsPrintMode(false)} className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-900 cursor-pointer transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Screen Preview for Print Mode */}
        <div className="flex flex-col items-center gap-12 py-12 no-print">
           {slides.map((Slide, i) => (
             <div key={i} className="w-[1920px] h-[1080px] bg-slate-50 relative shadow-2xl overflow-hidden" style={{ transform: 'scale(0.4)', transformOrigin: 'top center', marginBottom: '-648px' }}>
               <Slide />
             </div>
           ))}
        </div>

        {/* Actual Print Elements (hidden on screen, visible on print) */}
        <div className="hidden print:block">
           {slides.map((Slide, i) => (
             <div key={i} className="print-slide bg-slate-50">
               <Slide />
             </div>
           ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-950 overflow-hidden font-sans">
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="bg-slate-50 relative shadow-2xl overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrintMode, setIsPrintMode] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (isPrintMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isPrintMode]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <SlideWrapper isPrintMode={isPrintMode} setIsPrintMode={setIsPrintMode}>
      {!isPrintMode && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>

          {/* Footer Controls */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200 z-50">
            <button 
              onClick={() => setIsPrintMode(true)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors mr-2 cursor-pointer text-slate-500 hover:text-amber-600"
              title="打印 / 导出为 PDF"
            >
              <Printer className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-slate-300"></div>
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <span className="text-sm font-medium text-slate-500 min-w-[3rem] text-center">
              {currentSlide + 1} / {slides.length}
            </span>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </>
      )}
    </SlideWrapper>
  );
}
