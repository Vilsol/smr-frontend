import{S as j,i as R,s as N,e as b,k as y,c as M,m as h,b as p,g as c,d as a,t as E,a as v,h as T,X as A,j as q,Z as k,P as C}from"./vendor-2ce7ccec.js";import{p as D}from"./stores-3b01ec45.js";import{b as I}from"./paths-396f020f.js";function d(m){let e,t,r,u,l;return{c(){e=b("meta"),t=y(),r=b("meta"),u=y(),l=b("meta"),this.h()},l(n){e=M(n,"META",{name:!0,content:!0}),t=h(n),r=M(n,"META",{property:!0,content:!0}),u=h(n),l=M(n,"META",{property:!0,content:!0}),this.h()},h(){p(e,"name","description"),p(e,"content",m[0]),p(r,"property","description"),p(r,"content",m[0]),p(l,"property","og:description"),p(l,"content",m[0])},m(n,f){c(n,e,f),c(n,t,f),c(n,r,f),c(n,u,f),c(n,l,f)},p(n,f){f&1&&p(e,"content",n[0]),f&1&&p(r,"content",n[0]),f&1&&p(l,"content",n[0])},d(n){n&&a(e),n&&a(t),n&&a(r),n&&a(u),n&&a(l)}}}function L(m){let e;return{c(){e=b("meta"),this.h()},l(t){e=M(t,"META",{property:!0,content:!0}),this.h()},h(){p(e,"property","og:image"),p(e,"content",""+(I+"/assets/favicon.ico"))},m(t,r){c(t,e,r)},p:k,d(t){t&&a(e)}}}function P(m){let e;return{c(){e=b("meta"),this.h()},l(t){e=M(t,"META",{property:!0,content:!0}),this.h()},h(){p(e,"property","og:image"),p(e,"content",m[1])},m(t,r){c(t,e,r)},p(t,r){r&2&&p(e,"content",t[1])},d(t){t&&a(e)}}}function S(m){let e,t,r,u,l,n;return{c(){e=b("title"),t=E(m[2]),r=E(" - SMR"),u=y(),l=b("meta"),this.h()},l(f){e=M(f,"TITLE",{});var o=v(e);t=T(o,m[2]),r=T(o," - SMR"),o.forEach(a),u=h(f),l=M(f,"META",{property:!0,content:!0}),this.h()},h(){p(l,"property","og:title"),p(l,"content",n=""+(m[2]+" - SMR"))},m(f,o){c(f,e,o),A(e,t),A(e,r),c(f,u,o),c(f,l,o)},p(f,o){o&4&&q(t,f[2]),o&4&&n!==(n=""+(f[2]+" - SMR"))&&p(l,"content",n)},d(f){f&&a(e),f&&a(u),f&&a(l)}}}function U(m){let e,t,r,u,l=m[0]&&d(m);function n(i,_){return i[1]?P:L}let f=n(m),o=f(m),s=m[2]&&S(m);return{c(){l&&l.c(),e=y(),o.c(),t=y(),s&&s.c(),r=y(),u=b("meta"),this.h()},l(i){l&&l.l(i),e=h(i),o.l(i),t=h(i),s&&s.l(i),r=h(i),u=M(i,"META",{property:!0,content:!0}),this.h()},h(){p(u,"property","og:url"),p(u,"content",""+(m[3]+m[4]))},m(i,_){l&&l.m(i,_),c(i,e,_),o.m(i,_),c(i,t,_),s&&s.m(i,_),c(i,r,_),c(i,u,_)},p(i,[_]){i[0]?l?l.p(i,_):(l=d(i),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),f===(f=n(i))&&o?o.p(i,_):(o.d(1),o=f(i),o&&(o.c(),o.m(t.parentNode,t))),i[2]?s?s.p(i,_):(s=S(i),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i:k,o:k,d(i){l&&l.d(i),i&&a(e),o.d(i),i&&a(t),s&&s.d(i),i&&a(r),i&&a(u)}}}function X(m,e,t){let r;C(m,D,s=>t(5,r=s));let u=r.url.host,l=r.url.pathname,{description:n=void 0}=e,{image:f=void 0}=e,{title:o=void 0}=e;return m.$$set=s=>{"description"in s&&t(0,n=s.description),"image"in s&&t(1,f=s.image),"title"in s&&t(2,o=s.title)},[n,f,o,u,l]}class B extends j{constructor(e){super();R(this,e,X,U,N,{description:0,image:1,title:2})}}export{B as M};
//# sourceMappingURL=MetaDescriptors-a70b0a0c.js.map
