"use strict";(self.webpackChunkska=self.webpackChunkska||[]).push([[77],{9077:(C,p,n)=>{n.r(p),n.d(p,{ListComponent:()=>v});var c=n(6814),a=n(95),_=n(7506),g=n(7921),m=n(7398),t=n(4946),d=n(2805);function u(s,l){if(1&s){const o=t.EpF();t.TgZ(0,"li",14),t.NdJ("click",function(){const r=t.CHM(o).$implicit,h=t.oxw();return t.KtG(h.goToDetails(r))}),t.TgZ(1,"div",15)(2,"div",16),t._UZ(3,"img",17),t.TgZ(4,"div",18)(5,"h5",19),t._uU(6),t.qZA(),t.TgZ(7,"p",20)(8,"small"),t._uU(9),t.qZA()(),t._uU(10),t.qZA()()()()}if(2&s){const o=l.$implicit;t.xp6(6),t.Oqu(o.name),t.xp6(3),t.Oqu(o.serviceType),t.xp6(1),t.hij(" ",o.description," ")}}let v=(()=>{var s;class l{constructor(e,i){this.router=e,this.googleMapsService=i,this.searchControl=new a.NI}ngOnInit(){this.establishments=this.googleMapsService.establishments,this.initFilter()}initFilter(){this.establishmentsFiltered$=this.searchControl.valueChanges.pipe((0,g.O)(""),(0,m.U)(e=>this._filter(e)))}_filter(e){const i=e.toLowerCase();return this.establishments?.filter(r=>r.name.toLowerCase().includes(i)||r.description.toLowerCase().includes(i)||r.serviceType.toLowerCase().includes(i))}goToDetails(e){if(!e)return console.error("No id provided");this.googleMapsService.establishment=e,this.router.navigate(["/establishment/details",e.id])}applyFilterChange(){}}return(s=l).\u0275fac=function(e){return new(e||s)(t.Y36(_.F0),t.Y36(d.t))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-list"]],standalone:!0,features:[t.jDz],decls:18,vars:5,consts:[[1,"navbar"],[1,"navbar-left"],["routerLink","/sign-in"],[1,"fas","fa-chevron-left","navbar-icon"],[1,"navbar-brand","text-white"],[1,"navbar-right"],[3,"routerLink"],[1,"fas","fa-plus","navbar-icon"],[1,"row","pt-3"],[1,"col"],["for","inputSearch",1,"sr-only"],["type","text","id","inputSearch","placeholder","Pesquisar","required","","autofocus","",1,"form-control",3,"formControl"],[1,"list-unstyled"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"card","my-3"],[1,"media"],["alt","Thumbnail","src","/assets/images/logoCatavento.png",1,"card-img-top",2,"height","150px","width","150px","display","block"],[1,"media-body","p-3"],[1,"mt-0","mb-1"],[1,"text-body-secondary",2,"margin-bottom","0"]],template:function(e,i){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"i",3),t.qZA()(),t.TgZ(4,"label",4),t._uU(5,"Estabelecimentos"),t.qZA(),t.TgZ(6,"div",5)(7,"a",6),t._UZ(8,"i",7),t.qZA()()(),t.TgZ(9,"section")(10,"div",8)(11,"div",9)(12,"label",10),t._uU(13,"Pesquisar"),t.qZA(),t._UZ(14,"input",11),t.qZA()(),t.TgZ(15,"ul",12),t.YNc(16,u,11,3,"li",13),t.ALo(17,"async"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("routerLink","/establishment/create"),t.xp6(7),t.Q6J("formControl",i.searchControl),t.xp6(2),t.Q6J("ngForOf",t.lcZ(17,3,i.establishmentsFiltered$)))},dependencies:[c.ez,c.sg,c.Ov,_.Bz,_.rH,a.u5,a.Fj,a.JJ,a.Q7,a.UX,a.oH],styles:[".media[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.media-body[_ngcontent-%COMP%]{flex:1}.navbar[_ngcontent-%COMP%]{padding:8px 0}.navbar[_ngcontent-%COMP%]   .navbar-left[_ngcontent-%COMP%]{margin-left:10px}.navbar[_ngcontent-%COMP%]   .navbar-right[_ngcontent-%COMP%]{margin-right:10px}.navbar[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%]{font-size:25px;color:#fff;padding:8px 0}"]}),l})()}}]);