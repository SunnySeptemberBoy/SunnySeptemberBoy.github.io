import{_ as s,c as a,o as n,U as e}from"./chunks/framework.rW1nVq3Q.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/basic/vue/区别.md","filePath":"docs/basic/vue/区别.md","lastUpdated":1704776788000}'),p={name:"docs/basic/vue/区别.md"},i=e(`<h3 id="vue3-新特性" tabindex="-1">vue3 新特性 <a class="header-anchor" href="#vue3-新特性" aria-label="Permalink to &quot;vue3 新特性&quot;">​</a></h3><h2 id="响应式" tabindex="-1">响应式 <a class="header-anchor" href="#响应式" aria-label="Permalink to &quot;响应式&quot;">​</a></h2><h4 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>// vue2</span></span>
<span class="line"><span>const initData = {</span></span>
<span class="line"><span>  value: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const data = {}</span></span>
<span class="line"><span>Object.keys(initData).forEach((key) =&gt; {</span></span>
<span class="line"><span>  Object.defineProperty(data, key, {</span></span>
<span class="line"><span>    get() {</span></span>
<span class="line"><span>      console.log(&#39;当前访问的key:&#39;, key)</span></span>
<span class="line"><span>      return initData[key]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set(v) {</span></span>
<span class="line"><span>      initData[key] = v</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// data.value -&gt; 1</span></span>
<span class="line"><span>// data.value2 = 3</span></span>
<span class="line"><span>// data.value2  -&gt; undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$set(data, value2, 3)</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// set 给对象上添加一个响应式的属性，并触发视图的更新</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 针对数组的操作，splice</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">splice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果是对象 存在此属性  直接更新</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断是不是 响应式__ob__</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不是的话 return val</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是响应式的话进行依赖收集 并触发视图更新</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span></code></pre></div><h3 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h3>`,7),l=[i];function t(c,h,d,o,r,k){return n(),a("div",null,l)}const g=s(p,[["render",t]]);export{v as __pageData,g as default};
