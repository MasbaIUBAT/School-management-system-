!function(e){e.fn.formToWizard=function(t,s){function n(){t=e(a).data("options"),c={GotoStep:function(t){var s="step"+--t;if(void 0===e("#"+s)[0])throw"Step No "+t+" not found!";"none"===e("#"+s).css("display")&&(e(a).find(".stepDetails").hide(),e("#"+s).show(),p(t))},NextStep:function(){e(".stepDetails:visible").find("a.next").click()},PreviousStep:function(){e(".stepDetails:visible").find("a.prev").click()}}}function i(s){var n="step"+s;e("#"+n+"commands").append("<"+t.buttonTag+' href="#" id="'+n+'Prev" class="'+t.prevBtnClass+'">'+t.prevBtnName+"</"+t.buttonTag+">"),e("#"+n+"Prev").bind("click",function(t){return e("#"+n).hide(),e("#step"+(s-1)).show(),p(s-1),!1})}function o(s){var n="step"+s;e("#"+n+"commands").append("<"+t.buttonTag+' href="#" id="'+n+'Next" class="'+t.nextBtnClass+'">'+t.nextBtnName+"</"+t.buttonTag+">"),e("#"+n+"Next").bind("click",function(i){return t.validateBeforeNext(a,e("#"+n))===!0&&(e("#"+n).hide(),e("#step"+(s+1)).show(),p(s+1)),!1})}function p(s){"function"==typeof t.progress?t.progress(s,l):t.showProgress&&(e("#steps li").removeClass("current"),e("#stepDesc"+s).addClass("current")),t.select&&t.select(a,e("#step"+s))}if(0==this.length)return this;"string"!=typeof t&&(t=e.extend({submitButton:"",showProgress:!0,showStepNo:!0,validateBeforeNext:null,select:null,progress:null,nextBtnName:"Next &gt;",prevBtnName:"&lt; Back",buttonTag:"a",nextBtnClass:"btn next",prevBtnClass:"btn prev"},t));var a=this,r=e(a).find("fieldset"),l=r.length,d="#"+t.submitButton,c=null;if("string"!=typeof t)e(a).data("options",t),"function"!=typeof t.validateBeforeNext&&(t.validateBeforeNext=function(){return!0}),t.showProgress&&"function"!=typeof t.progress&&(t.showStepNo?e(a).before("<ul id='steps' class='steps'></ul>"):e(a).before("<ul id='steps' class='steps breadcrumb'></ul>")),r.each(function(s){e(this).wrap('<div id="step'+s+'" class="stepDetails"></div>'),e(this).append('<p id="step'+s+'commands" class="commands"></p>'),t.showProgress&&"function"!=typeof t.progress&&(t.showStepNo?e("#steps").append("<li id='stepDesc"+s+"'>Step "+(s+1)+"<span>"+e(this).find("legend").html()+"</span></li>"):e("#steps").append("<li id='stepDesc"+s+"'>"+e(this).find("legend").html()+"</li>")),0==s?(o(s),p(s)):s==l-1?(e("#step"+s).hide(),i(s),e(d).addClass("next").detach().appendTo("#step"+s+"commands")):(e("#step"+s).hide(),i(s),o(s))});else if("string"==typeof t){var f=t;if(n(),"function"!=typeof c[f])throw f+" is invalid command!";c[f](s)}return this}}(jQuery);
