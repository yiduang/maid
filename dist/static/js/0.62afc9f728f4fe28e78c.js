webpackJsonp([0],{"49iP":function(t,e){},"5czQ":function(t,e){},EqjO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d=a("u+Fy"),o={name:"Printer",computed:i()({},Object(r.b)(["dataPrinter"])),components:{"com-product":d.a},data:function(){return{}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataPrinter}})],1)])},staticRenderFns:[]};var _=a("C7Lr")(o,n,!1,function(t){a("tEHB")},null,null);e.default=_.exports},GRQC:function(t,e){},Wm7D:function(t,e){},Wpnz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d=a("u+Fy"),o={name:"Elevator",computed:i()({},Object(r.b)(["dataElevator"])),components:{"com-product":d.a},data:function(){return{}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataElevator}})],1)])},staticRenderFns:[]};var _=a("C7Lr")(o,n,!1,function(t){a("uUBd")},null,null);e.default=_.exports},XI3R:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d={name:"Fitness",components:{"com-product":a("u+Fy").a},computed:i()({},Object(r.b)(["dataFitness"])),data:function(){return{}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataFitness}})],1)])},staticRenderFns:[]};var n=a("C7Lr")(d,o,!1,function(t){a("anoz")},null,null);e.default=n.exports},YPpn:function(t,e,a){t.exports=a.p+"static/img/hangyeyingyong.d2fc0f1.png"},Yfxb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d=a("u+Fy"),o={name:"Forestry",computed:i()({},Object(r.b)(["dataForestry"])),components:{"com-product":d.a},data:function(){return{}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataForestry}})],1)])])},staticRenderFns:[]};var _=a("C7Lr")(o,n,!1,function(t){a("49iP")},null,null);e.default=_.exports},ZZAx:function(t,e){},aLsg:function(t,e){},anoz:function(t,e){},bNxE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d=a("u+Fy"),o={name:"Agriculture",computed:i()({},Object(r.b)(["dataAgriculture"])),components:{"com-product":d.a},data:function(){return{}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataAgriculture}})],1)])},staticRenderFns:[]};var _=a("C7Lr")(o,n,!1,function(t){a("eCJs")},null,null);e.default=_.exports},bPE5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d=a("u+Fy"),o={name:"Washing",computed:i()({},Object(r.b)(["dataWashing"])),components:{"com-product":d.a},data:function(){return{}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataWashing}})],1)])])},staticRenderFns:[]};var _=a("C7Lr")(o,n,!1,function(t){a("oCyR")},null,null);e.default=_.exports},drgk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=a("2bvH"),d={data:function(){return{data:null,dataTableImg:null,detailImg:null,productName:null,characteristic:null,productMaterial:null,market:null,product_description:null,curvedToothIsShow:!1,STSSuperIsShow:!1,trapezoidalToothIsShow:!1,ribbedBeltIsShow:!1,trimmingVtapeIsShow:!1}},computed:i()({},Object(r.b)(["currentProduct2","machine"])),watch:{},created:function(){var t=this;setTimeout(function(){t.updateShow(t.currentProduct2,t.machine)},600),t.showPdfTable(t.currentProduct2)},updated:function(){var t=this;setTimeout(function(){t.updateShow(t.currentProduct2,t.machine)},600),t.showPdfTable(t.currentProduct2)},methods:{escapeDetail:function(){this.$router.back(-1)},updateShow:function(t,e){var a=this,s=e.length,i=void 0;for(i=0;i<s;i++)t.productId==e[i].productId&&(a.dataTableImg=e[i].dataTableImg,a.detailImg=e[i].detailsImg[0],a.productName=e[i].productName,a.characteristic=e[i].characteristic,a.productMaterial=e[i].productMaterial,a.market=e[i].market,a.product_description=e[i].product_description)},showPdfTable:function(t){var e=t.productName;"曲线齿同步带"===e||"Curved tooth timing belt"===e?this.curvedToothIsShow=!0:"STS超级扭距同步带"===e||"STS Super torque sync belt"===e?this.STSSuperIsShow=!0:"梯型齿同步带"===e||"Trapezoidal tooth timing belt"===e?this.trapezoidalToothIsShow=!0:"多楔带"===e||"Ribbed belt"===e?this.ribbedBeltIsShow=!0:"切边V带 窄V带"!==e&&"Trimming v tape"!==e||(this.trimmingVtapeIsShow=!0)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail_body"},[t._m(0),t._v(" "),a("div",{staticClass:"main_detail"},[a("div",{staticClass:"detail_top"},[a("span",{staticClass:"detail_top_title"},[t._v(t._s(t.$t("DetailsIntroduce.Product_show")))]),t._v(" "),a("span",{staticClass:"detail_top_icon",on:{click:t.escapeDetail}},[a("i",{staticClass:"el-icon-circle-close"})])]),t._v(" "),a("div",{staticClass:"detail_introduce"},[a("div",{staticClass:"detail_img"},[a("el-image",{staticClass:"dataTableImg",attrs:{src:t.detailImg}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.product_description,expression:"!product_description"}],staticClass:"detail_text"},[a("ul",[a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.Product_name")))]),t._v("\n            "+t._s(t.productName)+"\n          ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.Product_material")))]),t._v("\n            "+t._s(t.productMaterial)+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:""==t.productMaterial,expression:"productMaterial == '' "}]},[t._v(t._s(t.$t("DetailsIntroduce.No_introduction")))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.Market")))]),t._v("\n            "+t._s(t.market)+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:""==t.market,expression:"market == '' "}]},[t._v(t._s(t.$t("DetailsIntroduce.No_introduction")))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.Characteristic")))]),t._v("\n            "+t._s(t.characteristic)+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:" "==t.characteristic,expression:"characteristic == ' ' "}]},[t._v(t._s(t.$t("DetailsIntroduce.No_introduction")))])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.product_description,expression:"product_description"}],staticClass:"detail_text"},[a("ul",[a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.Product_name"))+":")]),t._v("\n            "+t._s(t.productName)+"\n          ")]),t._v(" "),a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.descriptionOne"))+":")]),t._v("\n            "+t._s(t.productMaterial)+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:""==t.productMaterial,expression:"productMaterial == '' "}]},[t._v(t._s(t.$t("DetailsIntroduce.No_introduction")))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.descriptionTwo"))+":")]),t._v("\n            "+t._s(t.market)+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:""==t.market,expression:"market == '' "}]},[t._v(t._s(t.$t("DetailsIntroduce.No_introduction")))])]),t._v(" "),a("li",[a("span",[t._v(t._s(t.$t("DetailsIntroduce.descriptionThree"))+":")]),t._v("\n            "+t._s(t.characteristic)+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:""==t.characteristic,expression:"characteristic == '' "}]},[t._v(t._s(t.$t("DetailsIntroduce.No_introduction")))])])])])]),t._v(" "),a("div",{staticClass:"detail_top"},[a("span",{staticClass:"detail_top_title"},[t._v(t._s(t.$t("DetailsIntroduce.Product_details")))])]),t._v(" "),a("div",{staticClass:"intro"},[t._l(t.dataTableImg,function(t,e){return a("div",{key:e},[a("el-image",{staticClass:"dataTableImg",attrs:{src:t}})],1)}),t._v(" "),a("div",{staticClass:"more_detail_pdf"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.curvedToothIsShow,expression:"curvedToothIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable curved_tooth"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.model")))]),t._v(" "),a("th",[t._v("3M")]),t._v(" "),a("th",[t._v("5M")]),t._v(" "),a("th",[t._v("8M")]),t._v(" "),a("th",[t._v("14M")]),t._v(" "),a("th",[t._v("20M")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170059_8896.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170303142358_7646.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170130_1513.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170145_0732.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170156_4551.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.STSSuperIsShow,expression:"STSSuperIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable STS_super_torque"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.model")))]),t._v(" "),a("th",[t._v("S2M")]),t._v(" "),a("th",[t._v("S3M")]),t._v(" "),a("th",[t._v("S5M")]),t._v(" "),a("th",[t._v("S8M")]),t._v(" "),a("th",[t._v("S14M")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170226_2070.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170241_2041.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170254_7080.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170307_2314.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170318_9951.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.trapezoidalToothIsShow,expression:"trapezoidalToothIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable trapezoidal_tooth"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.model")))]),t._v(" "),a("th",[t._v("2m")]),t._v(" "),a("th",[t._v("3m")]),t._v(" "),a("th",[t._v("4m")]),t._v(" "),a("th",[t._v("5m")]),t._v(" "),a("th",[t._v("7m")]),t._v(" "),a("th",[t._v("MXL")]),t._v(" "),a("th",[t._v("XXL")]),t._v(" "),a("th",[t._v("XL")]),t._v(" "),a("th",[t._v("L")]),t._v(" "),a("th",[t._v("H")]),t._v(" "),a("th",[t._v("XH")]),t._v(" "),a("th",[t._v("XXH")]),t._v(" "),a("th",[t._v("T5")]),t._v(" "),a("th",[t._v("T10")]),t._v(" "),a("th",[t._v("T20")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170228171825_8886.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201728_5185.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201738_8672.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201808_6494.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201758_3467.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201820_5683.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf20170227201830_7265.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201841_5674.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201852_9531.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201904_3926.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201916_3896.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",{staticClass:"disabled_td"},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201954_2724.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227202006_8369.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227202018_5244.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ribbedBeltIsShow,expression:"ribbedBeltIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable ribbed_belt"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.ribbed_model")))]),t._v(" "),a("th",[t._v("PH")]),t._v(" "),a("th",[t._v("PJ")]),t._v(" "),a("th",[t._v("PK")]),t._v(" "),a("th",[t._v("PL")]),t._v(" "),a("th",[t._v("PM")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170301182834_8496.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170227202403_4238.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170228173824_4804.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170228173836_2578.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228173847_7695.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.trimmingVtapeIsShow,expression:"trimmingVtapeIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable trimming_v_tape"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.truncated")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.tensile_strength")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.reference_force_elongation")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.reference_force")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.wire_bond_strength")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.adhesion")))])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",{attrs:{colspan:"6"}},[a("a",{attrs:{href:"/src/assets/pdf_info/TrimmingVtapePdf/20170228181721_7148.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.mold_account")))])])])])])]),t._v(" "),""==t.dataTableImg?a("p",[t._v(t._s(t.$t("DetailsIntroduce.dataTableImg_null")))]):t._e()],2)]),t._v(" "),a("p",{staticClass:"white"},[t._v(t._s(t.machine.length))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top_banner"},[e("img",{attrs:{src:a("YPpn")}})])}]};var n=a("C7Lr")(d,o,!1,function(t){a("Wm7D")},"data-v-322334c6",null);e.default=n.exports},eCJs:function(t,e){},eF7Z:function(t,e){},f83y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"industry_application_other"},[e("div",{staticClass:"other_content"},[e("p",[this._v("我们的服务")]),this._v(" "),e("P",[e("span"),this._v(" "),e("p",{staticClass:"partners_text"},[this._v("提供来样加工，新产品研发")])])],1)])},staticRenderFns:[]};var i=a("C7Lr")({name:"Other"},s,!1,function(t){a("eF7Z")},null,null);e.default=i.exports},kcuW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d=a("u+Fy"),o={name:"Car",computed:i()({},Object(r.b)(["dataCar"])),components:{"com-product":d.a},data:function(){return{}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataCar}})],1)])},staticRenderFns:[]};var _=a("C7Lr")(o,n,!1,function(t){a("aLsg")},null,null);e.default=_.exports},nb02:function(t,e){},nd1v:function(t,e){},oCyR:function(t,e){},p9hy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=a("2bvH"),d=(a("nb02"),{name:"TradeShow",computed:i()({},Object(r.b)(["machine"])),mounted:function(){var t=this,e=this;setTimeout(function(){e.classifyDataUp(t.machine)},500)},updated:function(){var t=this,e=this;setTimeout(function(){e.classifyDataUp(t.machine)},500)},methods:{handleSelect:function(t,e){},classifyDataUp:function(t){var e=this,a=t.length,s=void 0,i=[],r=[],d=[],o=[],n=[],_=[],c=[],v=[],l=void 0,u=void 0,f=void 0,p=void 0,h=void 0,w=void 0,m=void 0;for(s=0;s<a;s++)l=t[s].usageScenarioIdArr.indexOf("1"),u=t[s].usageScenarioIdArr.indexOf("2"),f=t[s].usageScenarioIdArr.indexOf("3"),p=t[s].usageScenarioIdArr.indexOf("4"),h=t[s].usageScenarioIdArr.indexOf("5"),w=t[s].usageScenarioIdArr.indexOf("6"),m=t[s].usageScenarioIdArr.indexOf("7"),-1!=l&&i.push(t[s]),-1!=u&&r.push(t[s]),-1!=f&&d.push(t[s]),-1!=p&&o.push(t[s]),-1!=h&&n.push(t[s]),-1!=w&&_.push(t[s]),-1!=m&&c.push(t[s]),v.push(t[s]);e.$store.dispatch("set_dataDrywasher",i).then(function(t){}).catch(function(t){console.info(t)}),e.$store.dispatch("set_dataWashing",r).then(function(t){}).catch(function(t){console.info(t)}),e.$store.dispatch("set_dataElevator",d).then(function(t){}).catch(function(t){console.info(t)}),e.$store.dispatch("set_dataPrinter",o).then(function(t){}).catch(function(t){console.info(t)}),e.$store.dispatch("set_dataCar",n).then(function(t){}).catch(function(t){console.info(t)}),e.$store.dispatch("set_dataFitness",_).then(function(t){}).catch(function(t){console.info(t)}),e.$store.dispatch("set_dataAgriculture",c).then(function(t){}).catch(function(t){console.info(t)}),e.$store.dispatch("set_dataForestry",v).then(function(t){}).catch(function(t){console.info(t)})}},data:function(){return{activeIndex:"/drywasher"}}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"industry_application"},[t._m(0),t._v(" "),a("div",{staticClass:"banner_nav"},[a("el-menu",{staticClass:"el-menu-demo item",attrs:{mode:"horizontal","default-active":t.$route.path,"background-color":"#3B3B3B","text-color":"#fff","active-text-color":"#6490E8",router:""},on:{select:t.handleSelect}},[a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/dryer"}},[t._v(t._s(t.$t("TradeShow.drywasher")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/washing"}},[t._v(t._s(t.$t("TradeShow.washing")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/elevator"}},[t._v(t._s(t.$t("TradeShow.elevator")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/printer"}},[t._v(t._s(t.$t("TradeShow.printer")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/car"}},[t._v(t._s(t.$t("TradeShow.car")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/fitness"}},[t._v(t._s(t.$t("TradeShow.fitness")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/agriculture"}},[t._v(t._s(t.$t("TradeShow.agriculture")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/forestry"}},[t._v(t._s(t.$t("TradeShow.forestry")))]),t._v(" "),a("el-menu-item",{staticClass:"itemChild",attrs:{index:"/other"}},[t._v(t._s(t.$t("TradeShow.other")))])],1)],1),t._v(" "),a("div",[a("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top_banner"},[e("img",{attrs:{src:a("YPpn")}})])}]};var n=a("C7Lr")(d,o,!1,function(t){a("5czQ")},"data-v-1829661b",null);e.default=n.exports},tEHB:function(t,e){},"u+Fy":function(t,e,a){"use strict";a("yCc+");var s={name:"product",props:["data"],data:function(){return{}},methods:{goDetails:function(t,e){var a=this;a.$store.dispatch("set_currentProduct",e).then(function(e){a.$router.push({path:t})}).catch(function(t){console.info(t)})},indexSetting:function(t){return++t>=1&&t<=9?"0"+String(t):String(t)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.data,function(e,s){return a("div",{key:s,staticClass:"product_show"},[a("div",{staticClass:"product_outer"},[a("div",{staticClass:"product_title"},[a("span",{staticClass:"product_name"},[t._v(t._s(t.indexSetting(s))+".")]),t._v(" "),a("span",{staticClass:"product_name"},[t._v(t._s(e.productName))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.detail&&0!=e.dataTableImg.length,expression:"item.detail && item.dataTableImg.length != 0"}],staticClass:"show_detail",on:{click:function(a){return t.goDetails("/details1",e)}}},[t._v(t._s(t.$t("product.product_details")))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.dataTableImg.length,expression:"item.dataTableImg.length == 0"}],staticClass:"show_detail"},[t._v(t._s(t.$t("product.noIntro")))])]),t._v(" "),a("div",{staticClass:"img_li"},[a("img",{attrs:{src:e.img}})]),t._v(" "),a("ul",[a("li",{staticClass:"productMaterial_li"},[a("span",[t._v(t._s(t.$t("product.product_material")))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:""!=e.productMaterial,expression:"item.productMaterial != ''"}]},[t._v(t._s(e.productMaterial))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:""==e.productMaterial,expression:"item.productMaterial == ''"}]},[t._v(t._s(t.$t("product.noIntro")))])]),t._v(" "),a("li",{staticClass:"market_li"},[a("span",[t._v(t._s(t.$t("product.market_application")))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:""!=e.market,expression:"item.market != ''"}]},[t._v(t._s(e.market))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:""==e.market,expression:"item.market == ''"}]},[t._v(t._s(t.$t("product.noIntro")))])]),t._v(" "),a("li",{staticClass:"characteristic_li"},[a("span",[t._v(t._s(t.$t("product.product_feature")))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:""!=e.characteristic,expression:"item.characteristic != ''"}]},[t._v(t._s(e.characteristic))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:""==e.characteristic,expression:"item.characteristic == ''"}]},[t._v(t._s(t.$t("product.noIntro")))])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.detail&&0!=e.dataTableImg.length,expression:"item.detail && item.dataTableImg.length != 0"}],staticClass:"detail_li",on:{click:function(a){return t.goDetails("/details1",e)}}},[t._v(t._s(t.$t("product.product_details")))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.detail&&0==e.dataTableImg.length,expression:"item.detail && item.dataTableImg.length == 0"}],staticClass:"detail_li"},[t._v(t._s(t.$t("product.noDetails")))])])])}),0)},staticRenderFns:[]};var r=a("C7Lr")(s,i,!1,function(t){a("nd1v")},null,null);e.a=r.exports},uUBd:function(t,e){},uVZI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=(a("yCc+"),a("2bvH")),d={name:"DryWasher",components:{"com-product":a("u+Fy").a},computed:i()({},Object(r.b)(["dataDrywasher"])),mounted:function(){},data:function(){return{}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainContent"},[e("div",{staticClass:"main_machine"},[e("com-product",{attrs:{data:this.dataDrywasher}})],1)])},staticRenderFns:[]};var n=a("C7Lr")(d,o,!1,function(t){a("ZZAx")},null,null);e.default=n.exports},vhVS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),i=a.n(s),r=a("2bvH"),d={data:function(){return{data:null,dataTableImg:null,curvedToothIsShow:!1,STSSuperIsShow:!1,trapezoidalToothIsShow:!1,ribbedBeltIsShow:!1,trimmingVtapeIsShow:!1}},computed:i()({},Object(r.b)(["currentProduct","machine"])),created:function(){var t=this;setTimeout(function(){t.updateShow(t.currentProduct,t.machine)},600),t.showPdfTable(t.currentProduct)},updated:function(){var t=this;setTimeout(function(){t.updateShow(t.currentProduct,t.machine)},600),t.showPdfTable(t.currentProduct)},methods:{escapeDetail:function(){this.$router.back(-1)},updateShow:function(t,e){var a=e.length,s=void 0;for(s=0;s<a;s++)t.productId==e[s].productId&&(this.dataTableImg=e[s].dataTableImg)},showPdfTable:function(t){var e=t.productName;"曲线齿同步带"===e||"Curved tooth timing belt"===e?this.curvedToothIsShow=!0:"STS超级扭距同步带"===e||"STS Super torque sync belt"===e?this.STSSuperIsShow=!0:"梯型齿同步带"===e||"Trapezoidal tooth timing belt"===e?this.trapezoidalToothIsShow=!0:"多楔带"===e||"Ribbed belt"===e?this.ribbedBeltIsShow=!0:"切边V带 窄V带"!==e&&"Trimming v tape"!==e||(this.trimmingVtapeIsShow=!0)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail_body"},[a("div",{staticClass:"main_detail"},[a("div",{staticClass:"detail_top"},[a("span",{staticClass:"detail_top_title"},[t._v(t._s(t.$t("Details1.Product_description")))]),t._v(" "),a("span",{staticClass:"detail_top_icon",on:{click:t.escapeDetail}},[a("i",{staticClass:"el-icon-circle-close"})])]),t._v(" "),a("div",{staticClass:"intro"},[t._l(t.dataTableImg,function(t,e){return a("div",{key:e},[a("el-image",{staticClass:"dataTableImg",attrs:{src:t}})],1)}),t._v(" "),a("div",{staticClass:"more_detail_pdf"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.curvedToothIsShow,expression:"curvedToothIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable curved_tooth"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.model")))]),t._v(" "),a("th",[t._v("3M")]),t._v(" "),a("th",[t._v("5M")]),t._v(" "),a("th",[t._v("8M")]),t._v(" "),a("th",[t._v("14M")]),t._v(" "),a("th",[t._v("20M")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170059_8896.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170303142358_7646.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170130_1513.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170145_0732.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170156_4551.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.STSSuperIsShow,expression:"STSSuperIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable STS_super_torque"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.model")))]),t._v(" "),a("th",[t._v("S2M")]),t._v(" "),a("th",[t._v("S3M")]),t._v(" "),a("th",[t._v("S5M")]),t._v(" "),a("th",[t._v("S8M")]),t._v(" "),a("th",[t._v("S14M")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170226_2070.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170241_2041.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170254_7080.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170307_2314.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228170318_9951.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.trapezoidalToothIsShow,expression:"trapezoidalToothIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable trapezoidal_tooth"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.model")))]),t._v(" "),a("th",[t._v("2m")]),t._v(" "),a("th",[t._v("3m")]),t._v(" "),a("th",[t._v("4m")]),t._v(" "),a("th",[t._v("5m")]),t._v(" "),a("th",[t._v("7m")]),t._v(" "),a("th",[t._v("MXL")]),t._v(" "),a("th",[t._v("XXL")]),t._v(" "),a("th",[t._v("XL")]),t._v(" "),a("th",[t._v("L")]),t._v(" "),a("th",[t._v("H")]),t._v(" "),a("th",[t._v("XH")]),t._v(" "),a("th",[t._v("XXH")]),t._v(" "),a("th",[t._v("T5")]),t._v(" "),a("th",[t._v("T10")]),t._v(" "),a("th",[t._v("T20")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170228171825_8886.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201728_5185.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201738_8672.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201808_6494.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201758_3467.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201820_5683.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf20170227201830_7265.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201841_5674.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201852_9531.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201904_3926.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201916_3896.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",{staticClass:"disabled_td"},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227201954_2724.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227202006_8369.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/TrapezoidaltoothPdf/20170227202018_5244.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ribbedBeltIsShow,expression:"ribbedBeltIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable ribbed_belt"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.ribbed_model")))]),t._v(" "),a("th",[t._v("PH")]),t._v(" "),a("th",[t._v("PJ")]),t._v(" "),a("th",[t._v("PK")]),t._v(" "),a("th",[t._v("PL")]),t._v(" "),a("th",[t._v("PM")])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",[t._v(t._s(t.$t("DetailsIntroduce.model_detail")))]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170301182834_8496.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170227202403_4238.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170228173824_4804.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/RibbedbeltPdf/20170228173836_2578.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])]),t._v(" "),a("td",[a("a",{attrs:{href:"/src/assets/pdf_info/CurvedtoothPdf/20170228173847_7695.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.view_pdf")))])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.trimmingVtapeIsShow,expression:"trimmingVtapeIsShow"}]},[a("span",[t._v(t._s(t.$t("DetailsIntroduce.more_param")))]),t._v(" "),a("table",{staticClass:"gridtable trimming_v_tape"},[a("tr",[a("th",[t._v(t._s(t.$t("DetailsIntroduce.truncated")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.tensile_strength")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.reference_force_elongation")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.reference_force")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.wire_bond_strength")))]),t._v(" "),a("th",[t._v(t._s(t.$t("DetailsIntroduce.adhesion")))])]),t._v(" "),a("tr",{staticClass:"get_more_pdf"},[a("td",{attrs:{colspan:"6"}},[a("a",{attrs:{href:"/src/assets/pdf_info/TrimmingVtapePdf/20170228181721_7148.pdf",target:"view_window"}},[t._v(t._s(t.$t("DetailsIntroduce.mold_account")))])])])])])])],2)])])},staticRenderFns:[]};var n=a("C7Lr")(d,o,!1,function(t){a("GRQC")},null,null);e.default=n.exports},"yCc+":function(t,e){}});
//# sourceMappingURL=0.62afc9f728f4fe28e78c.js.map