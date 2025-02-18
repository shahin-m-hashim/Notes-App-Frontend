import{c as d,i as x,q as u,j as e,g as f,a as h,r as m,h as p}from"./index-CV6pWwK4.js";import{A as g,u as j,N,P as v,E as b,a as y}from"./Pagination-BxPW_CEm.js";function w({id:s}){const a=d({mutationFn:()=>x(s),onSuccess:()=>{u.refetchQueries(["archive"])}});return e.jsx("button",{type:"button",onClick:a.mutate,className:"bg-[#0a0806] cursor-pointer size-8 rounded-full flex items-center justify-center",children:e.jsx("img",{alt:"delete note",className:"p-2.5",src:"icons/delete.svg"})})}function A({note:s}){return e.jsxs("li",{style:{backgroundColor:s.color},className:"relative p-4 flex flex-col justify-between h-[250px] border border-gray-200 rounded-lg shadow-md",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h2",{className:"text-xl font-semibold underline underline-offset-4",children:s.title}),e.jsx("p",{children:s.content})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-xs font-semibold",children:s.category}),e.jsx("p",{className:"text-sm",children:new Date(s.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}),e.jsx("div",{className:"absolute top-2 right-2",children:e.jsx(w,{id:s.id})}),e.jsx("div",{className:"absolute bottom-2 right-2",children:e.jsx(g,{id:s.id,isArchived:s.archived})})]})}function P(){const[s]=f(),a=h(r=>r.setArchivedNotes),l=s.get("page")||"1",{isError:o,isFetched:c,isFetching:i,data:t}=j({queryFn:()=>y(l),queryKey:["archive",l]});return m.useEffect(()=>{c&&a(t.notes,t.total)},[t]),i?e.jsx("main",{className:"flex flex-col h-scroll pt-14 overflow-auto",children:e.jsx(p,{color:"#0967d2",ariaLabel:"loading-products",wrapperClass:"h-3/4 flex flex-col items-center justify-center flex-1"})}):o?e.jsx("main",{className:"flex flex-col h-scroll pt-14 overflow-auto",children:e.jsx(N,{})}):e.jsx("main",{className:"flex flex-col h-scroll pt-14 overflow-auto",children:t.notes.length>0?e.jsxs("div",{className:"p-4 flex flex-col gap-4 justify-between flex-1",children:[e.jsx("ul",{className:"grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",children:t.notes.map((r,n)=>e.jsx(A,{note:r},n))}),e.jsx(v,{total:t.total})]}):e.jsx(b,{})})}export{P as default};
