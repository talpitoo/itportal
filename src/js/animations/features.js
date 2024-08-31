(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.strelica = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFBFB").s().p("AANBMIgMAAIAAgZIgNAAIAAgMIgMAAIAAAMIgNAAIAAANIgNAAIAAAMIgMAAIAAixIAMAAIAAANIANAAIAAAMIANAAIAAANIAMAAIAAANIAMAAIAAAMIANAAIAAANIANAAIAAANIAMAAIAAAMIANAAIAAAMIANAAIAAANIgyAAIAAAZIANAAIAAAaIAMAAIAAAaIgaAAg");
	this.shape.setTransform(7.55,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANB6IAAgNIgNAAIAAgZIgMAAIAAgZIgMAAIAAAMIgOAAIAAgNIAOAAIAAgMIAMAAIAAAMIAMAAIAAAaIANAAIAAAZIAaAAIAAgaIgNAAIAAgZIgMAAIAAgaIAxAAIAAgNIgNAAIAAgMIgMAAIAAgMIgNAAIAAgNIgMAAIAAgMIAMAAIAAAMIANAAIAAANIAMAAIAAAMIANAAIAAAMIANAAIAAAaIgyAAIAAANIANAAIAAAZIANAAIAAAaIgNAAIAAANgAhLBhIAAjaIAMAAIAAAPIANAAIAAAMIAMAAIAAANIgMAAIAAgNIgNAAIAACyIANAAIAAgNIAMAAIAAANIgMAAIAAANgAgmBHgAAAgeIAAgNIANAAIAAANgAgMgrIAAgNIgNAAIAAgNIgNAAIAAgMIANAAIAAAMIANAAIAAANIAMAAIAAANg");
	this.shape_1.setTransform(7.6,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,24.4);


(lib.Mouse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#76C3F6","#9159C9"],[0,1],-56.6,0.6,9.2,0.6).s().p("ABeDaQiQgdhegkQjfhWAvh8IALgQQAng7A/grQAUgLA/gVQA9gWBIAUQBHATAiARQBlA4BMBfQA3BFgZBaIgCAIQhQBLhzAAIgegCgAgchyQhKBOgtCsQAAACABAEQABADAEAAIAGAAQADgCABgDQAtiwBNhKIAAgCIABAAQAkgmAvgLQADgBACgDQABgCgBgEQgBgDgCgCQgDgBgDAAQgxAMgmAnQiWg9hxBPQgDABAAAEQgCAEADACQABADAEABQADAAAEgCQA7gqBHAAQA1AAA6AXg");
	this.shape.setTransform(34.7066,21.9996);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49236F").s().p("AAQDFQingxh3hHQhig/A4hhIAGgLQgvB8DfBWQBeAkCQAeQCHALBahUQgFAMgHAMQgcAzg6AQQgwAOg0AAQg6AAg9gRgAh/BtQgEgBgBgDQgBgDAAgCQAtitBKhNQiKg2hnBJQgEACgDAAQgEgCgBgCQgDgDACgEQAAgDADgBQBxhQCWA9QAmgmAxgMQADAAADABQACACABADQABADgBADQgCADgDAAQgvALglAnIgBAAIAAABQhMBLgtCwQgBADgDABIgEABIgCAAg");
	this.shape_1.setTransform(33.3217,25.6129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.6,47);


// stage content:
(lib.sceneFeatures = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.strelica("synched",0);
	this.instance.setTransform(551.6,245.1,1,1,0,0,0,7.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({startPosition:0},0).to({x:513.95,y:263.15},4).wait(5).to({startPosition:0},0).to({x:613.85,y:262.3},14).wait(4).to({startPosition:0},0).to({x:630.45,y:286.15},3).to({x:682.65,y:300.8},7).wait(4).to({startPosition:0},0).to({x:597.2,y:252.55},10).wait(109).to({startPosition:0},0).to({x:661.65,y:293.2},8).wait(2).to({startPosition:0},0).to({x:677.1,y:260.95},6).to({x:716.35,y:231.5},4).wait(4).to({startPosition:0},0).to({x:607,y:259.55},14).wait(5).to({startPosition:0},0).to({x:649.05,y:245.55},3).wait(53).to({startPosition:0},0).to({x:601.4,y:259.55},3).wait(5).to({startPosition:0},0).to({x:644.85,y:248.35},14).wait(4).to({startPosition:0},0).to({x:551.6,y:245.1},5).wait(34));

	// L_ruka
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737E8D").s().p("AiIHaIg7sDIgBgUQAAhNA6g2QA5g2BRAAQBTAAA5A2QA5A2AABNIAAAUIgVMAQhVAghQAAQhMAAhHgdg");
	this.shape.setTransform(819.9359,626.4735,2.0816,2.2505,108.6482);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3C5A9").s().p("AJ0HQQgrgPgngQQg8gWhAgaIiTg/IgqgQIyZnyIgCAAIgFgCQhJgpgUhOQgFgYgCgZQAEgrAhghQA6g2BcAIQASABASAFIYkGJQBTARBFAqQBVA1AqBUQAqBTgTBUIgRA4QgHAOgJANQgkA3hFAjQhCAihQABIgIAAQg9AAhBgWg");
	this.shape_1.setTransform(819.2185,630.953);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737E8D").s().p("AsqFOIATgbIACgCIAHgJQAIgKAKgKIO+w2IAcggQBThdB/gNQCNgQBuBYQBvBXAPCNQAPCIhTBtItgSoQgEAHhxCMQl7j2i/lsg");
	this.shape_2.setTransform(942.922,582.6769);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7C12D").s().p("AgJAKIAKgMQADgEADgCIAHgHIgbAfIAEgGg");
	this.shape_3.setTransform(963.725,500.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5C5A8").s().p("AATBhQgoAEgjgPQgkgRg0gbQg0gcAIgSQAHgVAdgoQAcgpAvgdQANgHAYgIQBjAbAkAeQAyApAYAYQApANgmBHQgsBMggATQgjg7gqAFg");
	this.shape_4.setTransform(695.2133,597.4378,2.4102,2.4102,-6.5569);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5C5A8").s().p("AAHArQgKgDgHgGIgWgQQgOgJgggQQgggSAIgMQABgHASAAQATAAAaAKIAnARQAPAIAdAJQAcAKAYAMQAXANgyAAQgzgCgGAGIgEAGIgCABg");
	this.shape_5.setTransform(672.9162,564.5815,2.4102,2.4102,-6.5569);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4B192").s().p("AAgBXIgygoQgigYhHg0QhGg4AUgYQAFgNArABQAsAHA0AaQA2AaApAdQAoAbAuAnQAtApgfgHQgggHgSAQIghAgIgNANQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgGABQgNgUgPgPg");
	this.shape_6.setTransform(696.6305,566.4964);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5C5A8").s().p("AAwAwQgPgCgOgKIgbgUIgugfQgXgPAFgLQAFgMAhAKQAiAKAPAIQAVAKAVAMIAFACQAVAPgPATQgDAPgOAAIgDAAg");
	this.shape_7.setTransform(652.4415,574.7052,2.4102,2.4102,-6.5569);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5C5A8").s().p("AAkAkIg4geIgigQQgSgLgDgLQgEgLAcAEQAcADAfAMIAwAQQAOAFADAFQAHAZgHAKQgEAEgIAAQgKAAgPgFg");
	this.shape_8.setTransform(643.9493,587.8849,2.4102,2.4102,-6.5569);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5C5A8").s().p("AAtAdQgJgEgVgHQgUgHgTgLIgfgTQgMgMAHgDQAGgCAWACQAWACA3ATIANAEIAGAtIgTgHg");
	this.shape_9.setTransform(640.7227,602.3802,2.4102,2.4102,-6.5569);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737E8D").s().p("AiJHaIg5sDIgCgUQAAhNA6g2QA6g2BQAAQBSAAA6A2QA5A2AABNIgBAUIgUMAQhVAghQAAQhMAAhIgdg");
	this.shape_10.setTransform(829.3323,615.8676,2.1358,2.1964,0,118.7929,122.2709);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5C5A8").s().p("AATBgQgoAGgjgRQgkgQg0gcQg0gbAIgTQAHgTAdgqQAcgpAvgcQANgHAYgIQBjAcAkAdQAyAqAYAYQApALgmBIQgsBMggASQgjg6gqAEg");
	this.shape_11.setTransform(713.2184,570.8654,2.4187,2.401,0,1.5984,0.8787);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5C5A8").s().p("AAHArQgKgDgHgGIgWgQQgOgKgggPQgggRAIgOQABgGASgBQATABAaAKIAnARQAPAIAdAJQAcAKAYANQAXAMgygBQgzgBgGAHIgEAEIgCACg");
	this.shape_12.setTransform(695.7331,535.5421,2.4187,2.401,0,1.5984,0.8787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:640.7227,y:602.3802,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:643.9493,y:587.8849,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:652.4415,y:574.7052,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:1,scaleY:1,rotation:0,x:696.6305,y:566.4964,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:672.9162,y:564.5815,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:695.2133,y:597.4378,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:819.2185,y:630.953,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0816,scaleY:2.2505,rotation:108.6482,x:819.9359,y:626.4735,skewX:0,skewY:0}}]}).to({state:[{t:this.shape_9,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5895,x:646.6195,y:580.7444,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5895,x:651.089,y:566.5834,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5895,x:660.6902,y:554.189,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.9654,x:705.4307,y:550.237,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5895,x:681.9638,y:545.8765,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5895,x:701.3316,y:580.5388,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:4.9659,x:822.0226,y:625.1166,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0814,scaleY:2.2503,rotation:113.6131,x:823.0742,y:620.2711,skewX:0,skewY:0}}]},41).to({state:[{t:this.shape_9,p:{scaleX:2.4312,scaleY:2.3955,rotation:0,x:658.6832,y:562.2183,skewX:7.6008,skewY:3.1737}},{t:this.shape_8,p:{scaleX:2.4312,scaleY:2.3955,rotation:0,x:665.4237,y:548.6656,skewX:7.6008,skewY:3.1737}},{t:this.shape_7,p:{scaleX:2.4312,scaleY:2.3955,rotation:0,x:677.0307,y:537.2765,skewX:7.6008,skewY:3.1737}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:1.0029,rotation:0,x:722.5793,y:537.1026,skewX:14.172,skewY:9.6693}},{t:this.shape_5,p:{scaleX:2.4312,scaleY:2.3955,rotation:0,x:699.6969,y:530.8719,skewX:7.6008,skewY:3.1737}},{t:this.shape_4,p:{scaleX:2.4312,scaleY:2.3955,rotation:0,x:713.6027,y:566.5658,skewX:7.6008,skewY:3.1737}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:0,x:827.6441,y:620.5232,scaleY:1.0031,skewX:14.1724,skewY:9.67,scaleX:1}},{t:this.shape_10,p:{scaleX:2.1358,scaleY:2.1964,rotation:0,skewX:118.7929,skewY:122.2709,x:829.3323,y:615.8676}}]},1).to({state:[{t:this.shape_9,p:{scaleX:2.4187,scaleY:2.401,rotation:0,x:658.3672,y:568.7169,skewX:1.5984,skewY:0.8787}},{t:this.shape_8,p:{scaleX:2.4187,scaleY:2.401,rotation:0,x:663.6346,y:554.8184,skewX:1.5984,skewY:0.8787}},{t:this.shape_7,p:{scaleX:2.4187,scaleY:2.401,rotation:0,x:673.9475,y:542.8984,skewX:1.5984,skewY:0.8787}},{t:this.shape_6,p:{scaleX:1.0019,scaleY:0.9977,rotation:0,x:719.0403,y:541.1503,skewX:8.1882,skewY:7.3912}},{t:this.shape_12,p:{scaleY:2.401,skewY:0.8787,x:695.7331,y:535.5421}},{t:this.shape_11,p:{scaleY:2.401,skewY:0.8787,x:713.2184,y:570.8654}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:826.9163,y:622.4217,scaleY:1.0031,skewX:12.6885,skewY:8.1859,scaleX:1}},{t:this.shape,p:{scaleX:2.1358,scaleY:2.1964,rotation:0,x:828.4655,y:617.4255,skewX:117.3092,skewY:120.7846}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4314,scaleY:2.3956,rotation:0,x:654.4689,y:580.8599,skewX:-1.1245,skewY:-5.5513}},{t:this.shape_8,p:{scaleX:2.4314,scaleY:2.3956,rotation:0,x:659.0757,y:566.4409,skewX:-1.1245,skewY:-5.5513}},{t:this.shape_7,p:{scaleX:2.4314,scaleY:2.3956,rotation:0,x:668.8213,y:553.4224,skewX:-1.1245,skewY:-5.5513}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:1.0029,rotation:0,x:713.9882,y:546.4732,skewX:5.4451,skewY:0.9409}},{t:this.shape_5,p:{scaleX:2.4314,scaleY:2.3956,rotation:0,x:690.255,y:543.6531,skewX:-1.1245,skewY:-5.5513}},{t:this.shape_4,p:{scaleX:2.4314,scaleY:2.3956,rotation:0,x:709.4157,y:576.8259,skewX:-1.1245,skewY:-5.5513}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:826.2119,y:622.8729,scaleY:1.0031,skewX:11.9345,skewY:7.4314,scaleX:1}},{t:this.shape,p:{scaleX:2.136,scaleY:2.1965,rotation:0,x:827.6193,y:618.1279,skewX:116.5542,skewY:120.0327}}]},3).to({state:[{t:this.shape_9,p:{scaleX:2.4315,scaleY:2.3958,rotation:0,x:651.4255,y:590.9677,skewX:-3.8566,skewY:-8.2845}},{t:this.shape_8,p:{scaleX:2.4315,scaleY:2.3958,rotation:0,x:655.34,y:576.3444,skewX:-3.8566,skewY:-8.2845}},{t:this.shape_7,p:{scaleX:2.4315,scaleY:2.3958,rotation:0,x:664.4543,y:562.8751,skewX:-3.8566,skewY:-8.2845}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:1.0029,rotation:0,x:709.0615,y:553.7195,skewX:2.7138,skewY:-1.7875}},{t:this.shape_5,p:{scaleX:2.4315,scaleY:2.3958,rotation:0,x:685.3989,y:552.0942,skewX:-3.8566,skewY:-8.2845}},{t:this.shape_4,p:{scaleX:2.4315,scaleY:2.3958,rotation:0,x:706.1201,y:584.3178,skewX:-3.8566,skewY:-8.2845}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:0,x:824.763,y:624.7434,scaleY:1.003,skewX:9.2021,skewY:4.7013,scaleX:0.9999}},{t:this.shape,p:{scaleX:2.136,scaleY:2.1966,rotation:0,x:826.09,y:619.6587,skewX:113.8244,skewY:117.3002}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4315,scaleY:2.3957,rotation:0,x:648.8767,y:601.1527,skewX:-6.3295,skewY:-10.7566}},{t:this.shape_8,p:{scaleX:2.4315,scaleY:2.3957,rotation:0,x:652.1566,y:586.3743,skewX:-6.3295,skewY:-10.7566}},{t:this.shape_7,p:{scaleX:2.4315,scaleY:2.3957,rotation:0,x:660.6814,y:572.5246,skewX:-6.3295,skewY:-10.7566}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:1.0029,rotation:0,x:705.0041,y:561.4743,skewX:0.2423,skewY:-4.2596}},{t:this.shape_5,p:{scaleX:2.4315,scaleY:2.3957,rotation:0,x:681.1415,y:560.8504,skewX:-6.3295,skewY:-10.7566}},{t:this.shape_4,p:{scaleX:2.4315,scaleY:2.3957,rotation:0,x:703.2339,y:592.1499,skewX:-6.3295,skewY:-10.7566}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:823.6465,y:627.4115,scaleY:1.0031,skewX:6.732,skewY:2.2301,scaleX:1}},{t:this.shape,p:{scaleX:2.136,scaleY:2.1965,rotation:0,x:824.6285,y:622.3218,skewX:111.3507,skewY:114.83}}]},1).to({state:[{t:this.shape_9,p:{scaleX:2.4169,scaleY:2.4036,rotation:0,x:642.7936,y:597.722,skewX:-4.097,skewY:-5.5363}},{t:this.shape_8,p:{scaleX:2.4169,scaleY:2.4036,rotation:0,x:646.6455,y:583.2936,skewX:-4.097,skewY:-5.5363}},{t:this.shape_7,p:{scaleX:2.4169,scaleY:2.4036,rotation:0,x:655.7047,y:570.2718,skewX:-4.097,skewY:-5.5363}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:1.0003,rotation:0,x:700.3156,y:563.1286,skewX:2.4717,skewY:0.9986}},{t:this.shape_5,p:{scaleX:2.4169,scaleY:2.4036,rotation:0,x:676.6113,y:560.5132,skewX:-4.097,skewY:-5.5363}},{t:this.shape_4,p:{scaleX:2.4169,scaleY:2.4036,rotation:0,x:697.4835,y:593.7353,skewX:-4.097,skewY:-5.5363}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:820.1433,y:629.7469,scaleY:1.0004,skewX:2.4724,skewY:0.9994,scaleX:1}},{t:this.shape,p:{scaleX:2.0981,scaleY:2.2327,rotation:0,x:821.0644,y:624.9702,skewX:109.7991,skewY:110.9584}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:640.7227,y:602.3802,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:643.9493,y:587.8849,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:652.4415,y:574.7052,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:1,scaleY:1,rotation:0,x:696.6305,y:566.4964,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:672.9162,y:564.5815,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:695.2133,y:597.4378,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:0,x:819.2185,y:630.953,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0816,scaleY:2.2505,rotation:108.6482,x:819.9359,y:626.4735,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_9,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0018,x:640.3138,y:604.0188,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0018,x:643.4277,y:589.4996,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0018,x:651.8169,y:576.2549,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4459,x:695.898,y:567.9131,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0018,x:672.2114,y:565.973,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0018,x:694.762,y:598.6536,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:-0.4468,x:819.0456,y:631.4444,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0815,scaleY:2.2504,rotation:108.1999,x:819.7073,y:626.9621,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.7896,x:628.7171,y:592.8565,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.7896,x:631.8841,y:578.3516,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.7896,x:640.3207,y:565.1405,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.2326,x:685.1744,y:557.4995,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.7896,x:660.7494,y:554.9361,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.7896,x:683.1746,y:587.6939,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:5.3155,x:937.9765,y:578.3433}},{t:this.shape_3,p:{rotation:5.3155,x:966.2765,y:498.7234}},{t:this.shape_1,p:{rotation:-0.2334,x:808.1305,y:621.5284,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape_10,p:{scaleX:2.081,scaleY:2.25,rotation:108.4103,skewX:0,skewY:0,x:807.7097,y:616.4409}}]},3).to({state:[{t:this.shape_9,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5927,x:618.745,y:580.7859,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5927,x:621.9618,y:566.2919,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5927,x:630.4438,y:553.1099,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.0367,x:675.2773,y:545.7134,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5927,x:650.9075,y:542.9757,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5927,x:673.2202,y:575.8105,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:10.4583,x:968.6879,y:496.5388}},{t:this.shape_2,p:{rotation:10.4583,x:933.3638,y:573.3036}},{t:this.shape_1,p:{rotation:-0.0376,x:798.0187,y:610.1641,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape_10,p:{scaleX:2.0811,scaleY:2.25,rotation:108.6076,skewX:0,skewY:0,x:797.5733,y:604.9438}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.402,scaleY:2.4184,rotation:0,x:615.1412,y:592.6845,skewX:-10.8497,skewY:-9.2534}},{t:this.shape_8,p:{scaleX:2.402,scaleY:2.4184,rotation:0,x:617.2722,y:578.0771,skewX:-10.8497,skewY:-9.2534}},{t:this.shape_7,p:{scaleX:2.402,scaleY:2.4184,rotation:0,x:624.7615,y:564.5359,skewX:-10.8497,skewY:-9.2534}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:1.0002,rotation:0,x:669.0448,y:555.0101,skewX:-4.316,skewY:-2.673}},{t:this.shape_5,p:{scaleX:2.402,scaleY:2.4184,rotation:0,x:644.4493,y:553.4833,skewX:-10.8497,skewY:-9.2534}},{t:this.shape_4,p:{scaleX:2.402,scaleY:2.4184,rotation:0,x:669.1944,y:585.2116,skewX:-10.8497,skewY:-9.2534}},{t:this.shape_2,p:{rotation:10.4583,x:933.3638,y:573.3036}},{t:this.shape_3,p:{rotation:10.4583,x:968.6879,y:496.5388}},{t:this.shape_1,p:{rotation:0,x:796.4609,y:613.6734,scaleY:1.0004,skewX:-4.3161,skewY:-2.6735,scaleX:1}},{t:this.shape,p:{scaleX:2.0637,scaleY:2.2698,rotation:0,x:795.8041,y:608.7026,skewX:105.7961,skewY:104.4778}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4097,scaleY:2.4097,rotation:-12.4872,x:618.107,y:595.58,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4097,scaleY:2.4097,rotation:-12.4872,x:619.8185,y:580.8315,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4097,scaleY:2.4097,rotation:-12.4872,x:626.9023,y:566.8472,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.927,x:670.5399,y:554.4014,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4097,scaleY:2.4097,rotation:-12.4872,x:646.2182,y:554.6643,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4097,scaleY:2.4097,rotation:-12.4872,x:671.7864,y:585.0359,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:10.4583,x:968.6879,y:496.5388}},{t:this.shape_2,p:{rotation:10.4583,x:933.3638,y:573.3036}},{t:this.shape_1,p:{rotation:-1.9876,x:797.5176,y:612.4336,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0813,scaleY:2.2501,rotation:106.656,x:797.3411,y:607.8789,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.402,scaleY:2.4183,rotation:0,x:615.0486,y:592.633,skewX:-10.8499,skewY:-9.2537}},{t:this.shape_8,p:{scaleX:2.402,scaleY:2.4183,rotation:0,x:617.1795,y:578.0259,skewX:-10.8499,skewY:-9.2537}},{t:this.shape_7,p:{scaleX:2.402,scaleY:2.4183,rotation:0,x:624.6686,y:564.4851,skewX:-10.8499,skewY:-9.2537}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:1.0002,rotation:0,x:669.0344,y:555.0015,skewX:-4.316,skewY:-2.673}},{t:this.shape_5,p:{scaleX:2.402,scaleY:2.4183,rotation:0,x:644.3557,y:553.4327,skewX:-10.8499,skewY:-9.2537}},{t:this.shape_4,p:{scaleX:2.402,scaleY:2.4183,rotation:0,x:669.1004,y:585.16,skewX:-10.8499,skewY:-9.2537}},{t:this.shape_2,p:{rotation:10.4583,x:933.3638,y:573.3036}},{t:this.shape_3,p:{rotation:10.4583,x:968.6879,y:496.5388}},{t:this.shape_1,p:{rotation:0,x:796.4609,y:613.6734,scaleY:1.0004,skewX:-4.3161,skewY:-2.6735,scaleX:1}},{t:this.shape_10,p:{scaleX:2.0637,scaleY:2.2697,rotation:0,skewX:105.7949,skewY:104.4767,x:795.6809,y:608.7547}}]},230).to({state:[{t:this.shape_9,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5925,x:618.652,y:580.6825,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5925,x:621.8688,y:566.1889,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5925,x:630.3506,y:553.0073,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.0367,x:675.2564,y:545.6961,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5925,x:650.8138,y:542.8734,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4096,scaleY:2.4096,rotation:-6.5925,x:673.1258,y:575.7075,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:10.4583,x:968.6879,y:496.5388}},{t:this.shape_2,p:{rotation:10.4583,x:933.3638,y:573.3036}},{t:this.shape_1,p:{rotation:-0.0376,x:798.0187,y:610.1641,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape_10,p:{scaleX:2.081,scaleY:2.2499,rotation:108.6074,skewX:0,skewY:0,x:797.4763,y:604.8443}}]},1).to({state:[{t:this.shape_9,p:{scaleX:2.4095,scaleY:2.4095,rotation:-6.7891,x:628.6237,y:592.8012,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4095,scaleY:2.4095,rotation:-6.7891,x:631.7908,y:578.2968,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4095,scaleY:2.4095,rotation:-6.7891,x:640.2273,y:565.0862,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.2326,x:685.1639,y:557.4909,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4095,scaleY:2.4095,rotation:-6.7891,x:660.6555,y:554.8822,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4095,scaleY:2.4095,rotation:-6.7891,x:683.0798,y:587.6394,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:5.3155,x:937.9765,y:578.3433}},{t:this.shape_3,p:{rotation:5.3155,x:966.2765,y:498.7234}},{t:this.shape_1,p:{rotation:-0.2334,x:808.1305,y:621.5284,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape_10,p:{scaleX:2.0809,scaleY:2.2499,rotation:108.41,skewX:0,skewY:0,x:807.6127,y:616.3914}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0011,x:640.3149,y:603.9647,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0011,x:643.4289,y:589.4456,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0011,x:651.8182,y:576.2012,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4459,x:695.8771,y:567.8958,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0011,x:672.2127,y:565.9196,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.41,scaleY:2.41,rotation:-7.0011,x:694.7627,y:598.6002,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:-0.4468,x:819.0456,y:631.4444,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0814,scaleY:2.2503,rotation:108.1997,x:819.7084,y:626.9626,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:640.7227,y:602.3802,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:643.9493,y:587.8849,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:652.4415,y:574.7052,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:1,scaleY:1,rotation:0,x:696.6305,y:566.4964,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:672.9162,y:564.5815,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:695.2133,y:597.4378,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:0,x:819.2185,y:630.953,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0816,scaleY:2.2505,rotation:108.6482,x:819.9359,y:626.4735,skewX:0,skewY:0}}]},3).to({state:[{t:this.shape_9,p:{scaleX:2.4169,scaleY:2.4035,rotation:0,x:642.7988,y:597.6668,skewX:-4.0967,skewY:-5.5357}},{t:this.shape_8,p:{scaleX:2.4169,scaleY:2.4035,rotation:0,x:646.6506,y:583.2388,skewX:-4.0967,skewY:-5.5357}},{t:this.shape_7,p:{scaleX:2.4169,scaleY:2.4035,rotation:0,x:655.7097,y:570.2174,skewX:-4.0967,skewY:-5.5357}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:1.0002,rotation:0,x:700.3051,y:563.12,skewX:2.4717,skewY:0.9986}},{t:this.shape_5,p:{scaleX:2.4169,scaleY:2.4035,rotation:0,x:676.6159,y:560.4593,skewX:-4.0967,skewY:-5.5357}},{t:this.shape_4,p:{scaleX:2.4169,scaleY:2.4035,rotation:0,x:697.4876,y:593.6808,skewX:-4.0967,skewY:-5.5357}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:820.1433,y:629.7469,scaleY:1.0004,skewX:2.4724,skewY:0.9994,scaleX:1}},{t:this.shape,p:{scaleX:2.0981,scaleY:2.2326,rotation:0,x:821.0672,y:624.9202,skewX:109.7993,skewY:110.9584}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:648.8278,y:601.0501,skewX:-6.3288,skewY:-10.7563}},{t:this.shape_8,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:652.1078,y:586.272,skewX:-6.3288,skewY:-10.7563}},{t:this.shape_7,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:660.6327,y:572.4224,skewX:-6.3288,skewY:-10.7563}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:1.0029,rotation:0,x:704.9937,y:561.4485,skewX:0.2424,skewY:-4.2596}},{t:this.shape_5,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:681.0928,y:560.7485,skewX:-6.3288,skewY:-10.7563}},{t:this.shape_4,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:703.1846,y:592.0476,skewX:-6.3288,skewY:-10.7563}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:823.6465,y:627.4115,scaleY:1.0031,skewX:6.732,skewY:2.2301,scaleX:1}},{t:this.shape,p:{scaleX:2.1359,scaleY:2.1964,rotation:0,x:824.5814,y:622.2217,skewX:111.3509,skewY:114.8303}}]},1).to({state:[{t:this.shape_9,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:651.3766,y:590.9165,skewX:-3.8559,skewY:-8.2846}},{t:this.shape_8,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:655.2912,y:576.2936,skewX:-3.8559,skewY:-8.2846}},{t:this.shape_7,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:664.4057,y:562.8245,skewX:-3.8559,skewY:-8.2846}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:1.0029,rotation:0,x:709.0511,y:553.6936,skewX:2.714,skewY:-1.7876}},{t:this.shape_5,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:685.3502,y:552.0437,skewX:-3.8559,skewY:-8.2846}},{t:this.shape_4,p:{scaleX:2.4314,scaleY:2.3957,rotation:0,x:706.0708,y:584.2667,skewX:-3.8559,skewY:-8.2846}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:0,x:824.763,y:624.7434,scaleY:1.003,skewX:9.2021,skewY:4.7013,scaleX:0.9999}},{t:this.shape,p:{scaleX:2.1359,scaleY:2.1965,rotation:0,x:826.0413,y:619.5579,skewX:113.8248,skewY:117.3009}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4313,scaleY:2.3956,rotation:0,x:654.4218,y:580.8051,skewX:-1.1238,skewY:-5.5507}},{t:this.shape_8,p:{scaleX:2.4313,scaleY:2.3956,rotation:0,x:659.0288,y:566.3864,skewX:-1.1238,skewY:-5.5507}},{t:this.shape_7,p:{scaleX:2.4313,scaleY:2.3956,rotation:0,x:668.7744,y:553.3683,skewX:-1.1238,skewY:-5.5507}},{t:this.shape_6,p:{scaleX:0.9998,scaleY:1.0029,rotation:0,x:713.9673,y:546.4646,skewX:5.4452,skewY:0.9409}},{t:this.shape_5,p:{scaleX:2.4313,scaleY:2.3956,rotation:0,x:690.2079,y:543.5994,skewX:-1.1238,skewY:-5.5507}},{t:this.shape_4,p:{scaleX:2.4313,scaleY:2.3956,rotation:0,x:709.368,y:576.7718,skewX:-1.1238,skewY:-5.5507}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:826.2119,y:622.8729,scaleY:1.0031,skewX:11.9345,skewY:7.4314,scaleX:1}},{t:this.shape,p:{scaleX:2.136,scaleY:2.1964,rotation:0,x:827.5706,y:618.0781,skewX:116.5542,skewY:120.0331}}]},1).to({state:[{t:this.shape_9,p:{scaleX:2.4187,scaleY:2.4009,rotation:0,x:658.3209,y:568.6124,skewX:1.5984,skewY:0.8795}},{t:this.shape_8,p:{scaleX:2.4187,scaleY:2.4009,rotation:0,x:663.5883,y:554.7142,skewX:1.5984,skewY:0.8795}},{t:this.shape_7,p:{scaleX:2.4187,scaleY:2.4009,rotation:0,x:673.901,y:542.7945,skewX:1.5984,skewY:0.8795}},{t:this.shape_6,p:{scaleX:1.0019,scaleY:0.9976,rotation:0,x:719.009,y:541.1312,skewX:8.1884,skewY:7.3906}},{t:this.shape_12,p:{scaleY:2.4009,skewY:0.8795,x:695.6863,y:535.4385}},{t:this.shape_11,p:{scaleY:2.4009,skewY:0.8795,x:713.1714,y:570.7617}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:826.9163,y:622.4217,scaleY:1.0031,skewX:12.6885,skewY:8.1859,scaleX:1}},{t:this.shape_10,p:{scaleX:2.1357,scaleY:2.1963,rotation:0,skewX:117.3094,skewY:120.7847,x:828.3632,y:617.4171}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4312,scaleY:2.3954,rotation:0,x:658.6388,y:562.1664,skewX:7.6011,skewY:3.1738}},{t:this.shape_8,p:{scaleX:2.4312,scaleY:2.3954,rotation:0,x:665.3792,y:548.6141,skewX:7.6011,skewY:3.1738}},{t:this.shape_7,p:{scaleX:2.4312,scaleY:2.3954,rotation:0,x:676.9859,y:537.2255,skewX:7.6011,skewY:3.1738}},{t:this.shape_6,p:{scaleX:0.9997,scaleY:1.0028,rotation:0,x:722.5584,y:537.0854,skewX:14.1724,skewY:9.6696}},{t:this.shape_5,p:{scaleX:2.4312,scaleY:2.3954,rotation:0,x:699.6518,y:530.8211,skewX:7.6011,skewY:3.1738}},{t:this.shape_4,p:{scaleX:2.4312,scaleY:2.3954,rotation:0,x:713.5572,y:566.5139,skewX:7.6011,skewY:3.1738}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:0,x:827.6441,y:620.5232,scaleY:1.0031,skewX:14.1724,skewY:9.67,scaleX:1}},{t:this.shape_10,p:{scaleX:2.1358,scaleY:2.1963,rotation:0,skewX:118.7928,skewY:122.2712,x:829.3345,y:615.8183}}]},3).to({state:[{t:this.shape_9,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5891,x:646.6228,y:580.6418,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5891,x:651.0924,y:566.481,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5891,x:660.6935,y:554.0868,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.9656,x:705.4098,y:550.2197,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5891,x:681.9669,y:545.7745,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.41,scaleY:2.41,rotation:-1.5891,x:701.3342,y:580.4366,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_1,p:{rotation:4.9659,x:822.0226,y:625.1166,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0814,scaleY:2.2503,rotation:113.6129,x:823.0251,y:620.1713,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_9,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:640.7227,y:602.3802,skewX:0,skewY:0}},{t:this.shape_8,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:643.9493,y:587.8849,skewX:0,skewY:0}},{t:this.shape_7,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:652.4415,y:574.7052,skewX:0,skewY:0}},{t:this.shape_6,p:{scaleX:1,scaleY:1,rotation:0,x:696.6305,y:566.4964,skewX:0,skewY:0}},{t:this.shape_5,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:672.9162,y:564.5815,skewX:0,skewY:0}},{t:this.shape_4,p:{scaleX:2.4102,scaleY:2.4102,rotation:-6.5569,x:695.2133,y:597.4378,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:0,x:963.725,y:500.775}},{t:this.shape_2,p:{rotation:0,x:942.922,y:582.6769}},{t:this.shape_1,p:{rotation:0,x:819.2185,y:630.953,scaleY:1,skewX:0,skewY:0,scaleX:1}},{t:this.shape,p:{scaleX:2.0816,scaleY:2.2505,rotation:108.6482,x:819.9359,y:626.4735,skewX:0,skewY:0}}]},1).wait(83));

	// torzo
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#6C05AE","#1A0159"],[0,1],-48.8,187.6,-2.1,27.6).s().p("AoSXsMANDgzeQCVhDBNBfMgKdAxfIhJFAIADgCIgCAEQgQAigbAVIgIAFQgHAFgSADg");
	this.shape_13.setTransform(1022.175,803.0645);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#6C05AE","#1A0159"],[0,1],10.4,-299.9,12.2,128.2).s().p("EgPsAgqIACgEIgDACIBJlAMAKegxfIUcroIACgBMgGOAwcIgDADQgjCZhqBMI4RO9QAbgVAQgig");
	this.shape_14.setTransform(1101.575,767.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#6C05AE","#1A0159"],[0,1],-10,-18.6,10,18.7).s().p("Ar+F0IU3rsQB/g8BHBeI0cLmQhNhfiUBDg");
	this.shape_15.setTransform(1129.425,587.9062);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5F6977").s().p("EgKCAk1IqTtzQD1mrAxyyQA717ISmaQAvggAygbQB9hCCQg7QFbiTDogzQF3h3CyC4QEODLg7NNQgBATgDAaQgCAfgGAmQgBBfgOB9QgDA1gHA9QgBASgEAUQgBATgDAVQgGA8gLBEQgjEehFF3QgGArgLAxQgPCGgVCWQgKBMgNBRQABAIgCANIgqFYQgJBZgNBiQACACgBAFIgiFrQgFBRgLBaQgBAtgGAzQnrJWq6AAQi3AAjFgpg");
	this.shape_16.setTransform(1017.7548,671.4276);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#517781").s().p("AKLInIgIgCIgQgFQsmj5rXj+QgRgFgRgHIgFgDIAAAAIgHgDQhIglgohTQg3huAjh7QAjh7BohBQAagRAbgLQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBIATgGQA1gOA3AJIAWAEIGfBbQFcBMMtDPIAMAEIAIACQCIAmBCCGQBBCFgqCWQgrCXh+BPQhVA1haAAQgrAAgsgMg");
	this.shape_17.setTransform(973.9769,770.6675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#737E8D").s().p("AprCKQEKjgE5iWQDpiBG1ggQBogCAaEkQtPFFqgC1QA0isBYhZg");
	this.shape_18.setTransform(1038.0645,443.5111,0.7337,0.7337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(399));

	// glava
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7D3BE").s().p("AgwAtIgEAAIgCgBIgCgCIgDgBIgDgCIgCgBIgDgGIgDgHIAAgKIAAgDIACgFIAAAAQAFgIAIgGQAGgFAJgCIADgBIAEABIADAAQASgEAPgJQARgKARgIIAHABIAGABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIADABQAiAhgsAbQgnAYgsABIgEABIgEACIgDgBg");
	this.shape_19.setTransform(899.3493,310.9677,1.525,1.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAXIACgJIgCAKIgCAGIACgHgAgEAWQgJgDgCgIQgDgLACgMQACgGADgGIADgDQAUgJADAWQAEAVgBACIgBAEIgCADIgBACIgHAEg");
	this.shape_20.setTransform(890.9438,257.1073,1.525,1.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgECuIgIgUQgNghAAg/QABgyAEgMQANgXASARIgDADQgEAGgBAFQgDANADALQADAIAIADIANAAIAGgEIACAGIgCAHIACgHIADAHIADANIAEANIADANIACAKIACAKIADAUIABAKIAAAKIgCATIgDARQgCAKgGAFIgIAGIgGABQgTAAgOgfgAACh7QgMgWgZgOQgIgFgHgHQgHgGADgIQAEgRAQgCQAZgDAVAQQAVAQAOAXQAPAZgSAYIgOADQgTgGgJgRg");
	this.shape_21.setTransform(887.9228,254.4375,1.525,1.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F48B73").s().p("AAPBqQADhYgggWQgZAdgFAlQgFAlgQADQgRADgBgPQgFguARgrQAlhbBXgmQAUgFAMAQQAEAGgjAZQgjAZgHASQAJAJAHALQAnBCgTBHQgNAQgIAAQgJAAgDgYg");
	this.shape_22.setTransform(976.9116,315.3438,1.525,1.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6B4228").s().p("EABoAgvQmBi6B2h+QB4h+BXj+QBbj/iUjOQiUjPjOCDQjPB9goC1QgmCyiIiUQiGiWivmuQiumshFpMQvMp2FqpHQCXjMJQgbQESgkKdkIQHei+JKDjQNWDIFBRGQAhB2ASCQQBsNhmFL8QmOQPmuBPQiAAYh8AAQkkAAkNiDg");
	this.shape_23.setTransform(1002.5913,224.8069,0.7336,0.7336);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5C5A8").s().p("EAEkAiDQgsgLgsgIIACgcQABgZgMi+QgOi+ojkDQokkEiFi0QiHi1gkkQIil8nQgYjsARiIQAXjPBxh5QBchmDKhEQF/iAGXBFQGdBHEzD7QDACeCRDiQCIDTBUD9QCNGqANJKQAGFbgiGaQgCAagEAYIAEAAIAAAEIAaADIATAMQAFAHAIAGQAAAFACAEIAEANIADAGQAAI/BkH7Qh0A6gbAQQlEC7l5AEQhiAAikggg");
	this.shape_24.setTransform(981.1897,299.1942,0.7336,0.7336);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EF9A9C").s().p("AhTCDQATjPBEicQAJAJAIAKIAhCJQAVDUAGAaQAGAZgDAJQgCALgYAYIgIACQiPgrAKg7g");
	this.shape_25.setTransform(892.2007,293.0872,1.525,1.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7D3BE").s().p("AhKBEIgFABIgDgCIgEgDIgFgCIgEgCIgDgDQgEgEgBgFQgDgFgBgFIgBgPIABgFIADgHIgBgBQAJgNAMgIQAJgIANgDIAFgBQADgBADACQABAAAAgBQABAAABAAQAAAAABAAQAAABAAAAQAdgHAXgNQAZgPAbgMIALABIAJABQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQA1AyhDApQg8AkhEADIgGABIgGADIgFgCg");
	this.shape_26.setTransform(899.4032,311.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAbQgRgDgFgIQgGgMAFgMQADgGAHgHIAGgDQAogJAHAXQAHAWgBACIgCAEIgEADIgCACIAAABIAAgBIgBAAIgNAEg");
	this.shape_27.setTransform(890.9176,257.2103);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZDRIgQgVQgagiABhCQABg0AJgNQAagYAlARIgHADQgGAHgDAGQgFANAGAMQAFAIAQADIAZAAIAOgEIAAABIAEAFIgEAHIAEgHIAFAIIAHANIAHAOIAHANIAEALIAEAKIAFAVIACAKIAAALIgDAUQgCAIgEAJQgFALgMAFIgQAHIgMABQglAAgfghgAAPiEQgcgagqgHQgPgFgNgGQgNgGAAgMQgCgbAWgKQAjgRAnANQAlAMAgAbQAiAdgPAsIgTALQgeAAgWgUg");
	this.shape_28.setTransform(888.4872,253.122);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F48B73").s().p("AAXCiQAEiHgwgiQgnAtgHA5QgJA4gYAFQgZAEgCgXQgIhGAahBQA4iMCGg6QAfgIARAYQAHAKg1AmQg2AmgKAcQANAOAKARQA8BlgdBrQgUAagLAAQgPAAgEglg");
	this.shape_29.setTransform(976.9714,315.382);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAAEIABgHIgBAHg");
	this.shape_30.setTransform(893.6375,259.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAiCrQgkgXgwgDQgSgDgQgEQgPgGgCgMQgFgaAYgNQAngUAtAKIAUAEIAAAAQAiAKAfASQAqAZgNAuIgUAMIgJABQgdAAgYgQgAgHhNQgdgagqgIQgPgEgNgHQgMgGAAgMQgCgbAWgKQAjgRAnAOQAlANAgAbQAiAegQArIgTALQgegBgVgUg");
	this.shape_31.setTransform(891.3189,252.5048);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6B4228").s().p("EABoAgvQmBi6B2h+QB4h+BXj+QBbj/iUjOQiUjPjOCDQjPB9goC1QgmCyiIiUQiGiWivmuQiumshFpMQvMp2FqpHQCXjMJQgbQESgkKdkIQHei+JKDjQNWDIFBRGQAhB2ASCQQBsNhmFL8QmOQPmuBPQiAAYh8AAQkjAAkOiDg");
	this.shape_32.setTransform(1002.684,224.8354,0.7336,0.7336);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6B4228").s().p("EABoAgvQmBi6B2h+QB5h+BXj+QBaj/iTjOQiVjPjOCDQjPB9goC1QglCyiJiUQiGiWiumuQivmshEpMQvMp2FppHQCXjMJRgbQESgkKckIQHei+JKDjQNXDIFARGQAhB2ASCQQBsNhmFL8QmOQPmtBPQiAAYh8AAQkkAAkOiDg");
	this.shape_33.setTransform(1002.6665,224.8354,0.7336,0.7336);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25,p:{scaleX:1.525,scaleY:1.525,x:892.2007,y:293.0872}},{t:this.shape_24,p:{x:981.1897,y:299.1942}},{t:this.shape_23,p:{x:1002.5913,y:224.8069}},{t:this.shape_22,p:{scaleX:1.525,scaleY:1.525,x:976.9116,y:315.3438}},{t:this.shape_21,p:{scaleX:1.525,scaleY:1.525,x:887.9228,y:254.4375}},{t:this.shape_20,p:{scaleX:1.525,scaleY:1.525,x:890.9438,y:257.1073}},{t:this.shape_19,p:{scaleX:1.525,scaleY:1.525,x:899.3493,y:310.9677}}]}).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_23,p:{x:1002.7015,y:224.8354}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},34).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_29},{t:this.shape_31},{t:this.shape_30},{t:this.shape_26}]},1).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_23,p:{x:1002.7015,y:224.8354}},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},3).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},1).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},35).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_33},{t:this.shape_29},{t:this.shape_31},{t:this.shape_30},{t:this.shape_26}]},1).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},3).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_33},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},1).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},109).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_33},{t:this.shape_29},{t:this.shape_31},{t:this.shape_30},{t:this.shape_26}]},1).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},3).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_33},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},1).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},159).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_33},{t:this.shape_29},{t:this.shape_31},{t:this.shape_30},{t:this.shape_26}]},1).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_32},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},3).to({state:[{t:this.shape_25,p:{scaleX:1.5251,scaleY:1.5251,x:892.2544,y:293.1223}},{t:this.shape_24,p:{x:981.2977,y:299.2304}},{t:this.shape_33},{t:this.shape_22,p:{scaleX:1.5251,scaleY:1.5251,x:976.9695,y:315.3799}},{t:this.shape_21,p:{scaleX:1.5251,scaleY:1.5251,x:887.9763,y:254.4706}},{t:this.shape_20,p:{scaleX:1.5251,scaleY:1.5251,x:890.9975,y:257.1406}},{t:this.shape_19,p:{scaleX:1.5251,scaleY:1.5251,x:899.4034,y:311.0037}}]},1).wait(42));

	// D_ruka
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7C12D").s().p("AgFAMIAFgPIADgHQABgEADgDIgNAkIABgHg");
	this.shape_34.setTransform(1073.45,464.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#737E8D").s().p("Ao+JpIAJgeIABgDIADgKIAJgXIHr0AIAPglQAphuBsg3QB4g+B/AqQCAApA8B3QA8B0glB8IlxVGQgBAGg3CjQmhhbklkEg");
	this.shape_35.setTransform(1078.9439,539.3019);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#737E8D").s().p("AH9KRIgogUI4UsXQAKlfD2jGIZcKSQAWAHATAKQCeBKA+CaQA/CahECOQhFCQifAuQg8ASg9AAQhhAAhigvg");
	this.shape_36.setTransform(1002.3716,550.0862);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F5C5A8").s().p("AAOBDQgOACgJgrIgJgqIgFgTIgEgUIABgCIABgCIAGgCQAGgDAIgBQAKgCALACIACAAIADAXIAGAzQACAbgFAQQgEAPgFAAIgBAAg");
	this.shape_37.setTransform(829.4883,502.0553,2.2881,2.2881,109.7067);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F5C5A8").s().p("AgBAkQgNgfgDgPIgKgsIgBgFQAJgFAJADQANACAOAAIADACIADAmIAGA1QADAagKADIgDAAQgKAAgKgbg");
	this.shape_38.setTransform(832.0506,489.1952,2.2881,2.2881,109.7067);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F5C5A8").s().p("AADAhQgMgegGgPIgOgoIgEgKQAXgBASATQAIAIAEAIIAGAeQAEASACAUQADAUgCABQgCACgDAAQgLAAgOgeg");
	this.shape_39.setTransform(841.4927,479.8018,2.2881,2.2881,109.7067);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F5C5A8").s().p("AgzCUQgTgTgXABIgIgXQgFgNgJgKQgLgLgKgMIgCgSIAAgBQgBgmAFgkQAFgkADgjIABgMIAIgCQARgBAPAHQgSgJgTABIgIACIAFgjIADgLICAAIIAgAxIAMgGQAxBgAJAjIAJAjIANAqIAJAkQgZAFgQgbQgOgXgLgXIgOgdQAAAcACAYIACAcIAEAcIgBAAQgMgBgLABQgHABgHAEIgGACIgBABIgBACIgCgIIgBgDIgCAAIAAAAIgEgBIABATIgDgCQgOAAgNgCQgJgEgKAGQgCgIgCgFIABATQgEgJgIgHg");
	this.shape_40.setTransform(878.3964,507.6354,2.2881,2.2881,109.7067);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E4B192").s().p("Ag5AiQgngDgrgHQgjgLAWgUQADgDAFgCQBSgbBWAHIBPAIQAdACAeAHQgiANgfAOQgbAMglAGQgfAFgfAAIgcgBg");
	this.shape_41.setTransform(859.5791,474.899);

	this.instance_1 = new lib.Mouse("synched",0);
	this.instance_1.setTransform(839.45,505.2,1,1,0,0,0,33.8,23.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3C5A9").s().p("AgFAAQgDgEgBgDIATAPQgJgEgGgEg");
	this.shape_42.setTransform(844.575,476.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7C12D").s().p("AgEAMIAEgPIADgHQABgEADgDIgNAkIACgHg");
	this.shape_43.setTransform(1073.3452,478.8148,1,1,-31.7289);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7C12D").s().p("AgFAMIAFgPIADgHQACgEADgDIgPAkIACgHg");
	this.shape_44.setTransform(1073.3877,478.7885,1,1,-31.7289);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F5C5A8").s().p("AiTEaIhRgFIhlgDQgsgBgogDQAFg6BHgRQA6gOA7gHIBJgKQg7gUg4gOIg9gPIhCgKQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAMgYACgZQAEgSgCgQQgBgJABgFIgDgEIgEgCQAKgBAKABIAHAAIACgDIgBAAIAFgJIgqgLIAIgFQAKggAOgcQANgRgEgZQARACAMgDIgpgKQAVgDAWgNQA2gbAPgyIA4gDQAhAAAbgOQAfgQAhgNIAoAJIAEABQBSAZBNAlQBKAkBKAfIAaAKIgCATQgKAlgYAeQAegiAMgrIACgSQAkAQAjAUIAXAPIhrERIiEAjIAFAfQjUAhhbAAIgYAAg");
	this.shape_45.setTransform(866.6,506.1344);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5C5A8").s().p("AiSEaIhTgGIhkgCQgsgBgogDQAGg7BGgQQA7gOA6gIIBJgJQg8gUg3gOIg9gPIhBgKQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQALgXAEgaQADgRgCgQIAAgPIgDgDIgDgCQAJgBAKABIAHAAIACgDIgBAAIAGgKIgrgLIAIgEQAKggAOgcQANgRgEgZQASABALgCIgpgKQAWgDAVgNQA3gbAOgyIA4gDQAhgBAbgNQAegQAigNIAoAJIADABQBUAZBMAlQBJAkBMAeIAZALIgCATQgKAlgYAeQAegiALgrIADgTQAkARAjAUIAXAOIhrESIiEAjIAGAfQjVAhhbAAIgXAAg");
	this.shape_46.setTransform(875.525,503.2844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:839.45,y:505.2}},{t:this.shape_41,p:{x:859.5791,y:474.899,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:878.3964,y:507.6354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:841.4927,y:479.8018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:832.0506,y:489.1952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:829.4883,y:502.0553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:1002.3716,y:550.0862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_42,p:{x:831.075,y:480.575}},{t:this.instance_1,p:{x:825.5,y:509.4}},{t:this.shape_41,p:{x:846.0791,y:478.899,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:864.8964,y:511.6354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:827.9927,y:483.8018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:818.5506,y:493.1952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:815.9883,y:506.0553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:988.8716,y:554.0862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},76).to({state:[{t:this.shape_42,p:{x:825.325,y:482.675}},{t:this.instance_1,p:{x:819.7,y:511.45}},{t:this.shape_41,p:{x:840.3291,y:480.999,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:859.1464,y:513.7354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:822.2427,y:485.9018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:812.8006,y:495.2952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:810.2383,y:508.1553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:983.1216,y:556.1862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:814.35,y:516.1}},{t:this.shape_41,p:{x:833.9763,y:484.5293,scaleX:0.9998,scaleY:0.9998,rotation:-1.7027}},{t:this.shape_40,p:{x:853.0616,y:516.4284,scaleX:2.2879,scaleY:2.2879,rotation:107.9989}},{t:this.shape_39,p:{x:815.3486,y:489.7096,scaleX:2.2879,scaleY:2.2879,rotation:107.9989}},{t:this.shape_38,p:{x:806.1915,y:499.3792,scaleX:2.2879,scaleY:2.2879,rotation:107.9989}},{t:this.shape_37,p:{x:804.0138,y:512.3087,scaleX:2.2879,scaleY:2.2879,rotation:107.9989}},{t:this.shape_36,p:{x:979.0873,y:555.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:855.075,y:472.075}},{t:this.instance_1,p:{x:825.5,y:511}},{t:this.shape_41,p:{x:844.4238,y:480.0003,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:863.5878,y:512.1517,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_39,p:{x:825.8754,y:485.435,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_38,p:{x:816.719,y:495.1045,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_37,p:{x:814.5417,y:508.0336,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_36,p:{x:989.5873,y:550.9828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-11.7737,x:1097.0474,y:540.3893,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-11.7737,x:1076.4067,y:468.2846,scaleX:1,scaleY:1}}]},5).to({state:[{t:this.shape_42,p:{x:840.025,y:478.225}},{t:this.instance_1,p:{x:829.65,y:510.3}},{t:this.shape_41,p:{x:848.887,y:479.1575,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:867.9843,y:511.0417,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_39,p:{x:830.272,y:484.3237,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_38,p:{x:821.1153,y:493.9932,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_37,p:{x:818.9376,y:506.9223,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_36,p:{x:994.0373,y:550.1328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-19.7029,x:1104.9457,y:540.8186,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-19.7029,x:1074.5546,y:472.2484,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:834.1,y:508.45}},{t:this.shape_41,p:{x:853.4894,y:477.5365,scaleX:0.9999,scaleY:0.9999,rotation:-1.7027}},{t:this.shape_40,p:{x:872.6581,y:509.3684,scaleX:2.2879,scaleY:2.2879,rotation:108.0003}},{t:this.shape_39,p:{x:834.9452,y:482.6483,scaleX:2.2879,scaleY:2.2879,rotation:108.0003}},{t:this.shape_38,p:{x:825.7878,y:492.3179,scaleX:2.2879,scaleY:2.2879,rotation:108.0003}},{t:this.shape_37,p:{x:823.6097,y:505.2475,scaleX:2.2879,scaleY:2.2879,rotation:108.0003}},{t:this.shape_36,p:{x:998.5873,y:548.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-19.7029,x:1104.9457,y:540.8186,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-19.7029,x:1074.5546,y:472.2484,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:859.475,y:474.125}},{t:this.instance_1,p:{x:849,y:506.1}},{t:this.shape_41,p:{x:868.3238,y:475.0503,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:887.3731,y:507.0429,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_39,p:{x:849.6607,y:480.3262,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_38,p:{x:840.5043,y:489.9957,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_37,p:{x:838.327,y:502.9248,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_36,p:{x:1013.4873,y:546.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-28.7051,x:1114.9339,y:540.3571,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-28.7051,x:1074.1891,y:477.3888,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_42,p:{x:873.975,y:474.125}},{t:this.instance_1,p:{x:863.7,y:506.1}},{t:this.shape_41,p:{x:882.8238,y:475.0503,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:902.1231,y:506.9929,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_39,p:{x:864.4107,y:480.2762,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_38,p:{x:855.2543,y:489.9457,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_37,p:{x:853.077,y:502.8748,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_36,p:{x:1027.9873,y:546.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-32.4232,x:1120.7756,y:539.1934,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-32.4232,x:1076.0347,y:479.0019,scaleX:0.9999,scaleY:0.9999}}]},3).to({state:[{t:this.shape_42,p:{x:900.375,y:466.925}},{t:this.instance_1,p:{x:870.6,y:505.7}},{t:this.shape_41,p:{x:889.632,y:474.7995,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:909.4064,y:506.5887,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_39,p:{x:871.6944,y:479.877,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_38,p:{x:862.5395,y:489.5467,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_37,p:{x:860.3634,y:502.475,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_36,p:{x:1034.8873,y:545.8328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.2056,x:1124.5667,y:535.3316,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.2056,x:1074.9614,y:479.0777,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:895.625,y:475.425}},{t:this.instance_1,p:{x:866,y:514.25}},{t:this.shape_41,p:{x:884.882,y:483.2995,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:904.6564,y:515.1387,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_39,p:{x:866.9444,y:488.427,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_38,p:{x:857.7895,y:498.0967,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_37,p:{x:855.6134,y:511.025,scaleX:2.2876,scaleY:2.2876,rotation:107.9925}},{t:this.shape_36,p:{x:1030.1373,y:554.3328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.2341,x:1123.2267,y:536.7472,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-37.2341,x:1073.5946,y:480.5193,scaleX:0.9999,scaleY:0.9999}}]},4).to({state:[{t:this.shape_42,p:{x:900.375,y:466.925}},{t:this.instance_1,p:{x:864.15,y:518.45}},{t:this.shape_41,p:{x:883.6189,y:487.7923,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:903.7018,y:519.3765,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_39,p:{x:865.991,y:492.6648,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_38,p:{x:856.8361,y:502.3342,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_37,p:{x:854.6599,y:515.2621,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_36,p:{x:1028.8873,y:558.8328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-35.1686,x:1123.5497,y:537.3059,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-35.1686,x:1075.9748,y:479.3239,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:909.925,y:469.125}},{t:this.instance_1,p:{x:873.9,y:521}},{t:this.shape_41,p:{x:893.1689,y:489.9923,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:913.1664,y:521.8353,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_39,p:{x:875.4557,y:495.1236,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_38,p:{x:866.3008,y:504.7929,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_37,p:{x:864.1246,y:517.7209,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_36,p:{x:1038.4373,y:561.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-35.1686,x:1123.5497,y:537.3059,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-35.1686,x:1075.9748,y:479.3239,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:910.875,y:484.175}},{t:this.instance_1,p:{x:880.85,y:523.1}},{t:this.shape_41,p:{x:900.0796,y:492.0206,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:919.3588,y:524.1491,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_39,p:{x:881.6479,y:497.4403,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_38,p:{x:872.4938,y:507.1098,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_37,p:{x:870.3183,y:520.0374,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_36,p:{x:1045.3873,y:563.0828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.4246,x:1124.2019,y:538.1545,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.4246,x:1074.3822,y:482.0908,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:922.625,y:484.575}},{t:this.instance_1,p:{x:892.7,y:523.6}},{t:this.shape_41,p:{x:911.8296,y:492.4206,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:931.2088,y:524.5491,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_39,p:{x:893.4979,y:497.8403,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_38,p:{x:884.3438,y:507.5098,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_37,p:{x:882.1683,y:520.4374,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_36,p:{x:1057.1373,y:563.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.4246,x:1124.2019,y:538.1545,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.4246,x:1074.3822,y:482.0908,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:937.975,y:480.575}},{t:this.instance_1,p:{x:908.1,y:519.45}},{t:this.shape_41,p:{x:927.1665,y:488.4133,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:946.3012,y:520.4859,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_39,p:{x:908.5895,y:493.7781,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_38,p:{x:899.4357,y:503.4479,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_37,p:{x:897.2606,y:516.3756,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_36,p:{x:1072.4873,y:559.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.444,x:1122.686,y:535.3012,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.444,x:1072.8468,y:479.2538,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:913.975,y:473.975}},{t:this.instance_1,p:{x:883.85,y:512.9}},{t:this.shape_41,p:{x:903.1271,y:481.7916,scaleX:0.9996,scaleY:0.9996,rotation:-1.7032}},{t:this.shape_40,p:{x:922.2829,y:513.8277,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_39,p:{x:884.5721,y:487.1215,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_38,p:{x:875.4188,y:496.791,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_37,p:{x:873.244,y:509.7184,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_36,p:{x:1048.4873,y:552.8828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.444,x:1122.686,y:535.3012,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.444,x:1072.8468,y:479.2538,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_42,p:{x:899.375,y:471.375}},{t:this.instance_1,p:{x:869.55,y:510.3}},{t:this.shape_41,p:{x:888.514,y:479.1843,scaleX:0.9995,scaleY:0.9995,rotation:-1.7032}},{t:this.shape_40,p:{x:907.8427,y:510.9217,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_39,p:{x:870.1333,y:484.2153,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_38,p:{x:860.9799,y:493.8844,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_37,p:{x:858.8049,y:506.8114,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_36,p:{x:1033.8873,y:550.2828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-31.7289,x:1117.3545,y:539.5454,scaleX:1,scaleY:1}},{t:this.shape_43}]},2).to({state:[{t:this.shape_42,p:{x:884.975,y:469.575}},{t:this.instance_1,p:{x:854.8,y:508.45}},{t:this.shape_41,p:{x:874.0746,y:477.3626,scaleX:0.9995,scaleY:0.9995,rotation:-1.7033}},{t:this.shape_40,p:{x:892.707,y:509.7115,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_39,p:{x:854.9979,y:483.0058,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_38,p:{x:845.8449,y:492.6749,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_37,p:{x:843.67,y:505.6017,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_36,p:{x:1019.4873,y:548.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-22.2365,x:1109.75,y:540.7851,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-22.2365,x:1076.3585,y:473.6276,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:876.475,y:468.825}},{t:this.instance_1,p:{x:845.95,y:507.75}},{t:this.shape_41,p:{x:865.5746,y:476.6126,scaleX:0.9995,scaleY:0.9995,rotation:-1.7033}},{t:this.shape_40,p:{x:883.9923,y:508.8527,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_39,p:{x:846.2833,y:482.147,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_38,p:{x:837.1302,y:491.8161,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_37,p:{x:834.9553,y:504.7429,scaleX:2.2873,scaleY:2.2873,rotation:107.9884}},{t:this.shape_36,p:{x:1010.9873,y:547.7328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-11.5481,x:1097.4051,y:541.9742,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-11.5481,x:1077.0488,y:469.7901,scaleX:0.9999,scaleY:0.9999}}]},3).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:839.25,y:505.4}},{t:this.shape_41,p:{x:859.5791,y:474.899,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:878.3964,y:507.6354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:841.4927,y:479.8018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:832.0506,y:489.1952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:829.4883,y:502.0553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:1002.3716,y:550.0862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1081.7939,y:535.9019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1076.3,y:461.1,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_42,p:{x:876.475,y:468.825}},{t:this.instance_1,p:{x:846.2,y:507.7}},{t:this.shape_41,p:{x:865.614,y:476.6343,scaleX:0.9995,scaleY:0.9995,rotation:-1.7032}},{t:this.shape_40,p:{x:884.2368,y:508.798,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_39,p:{x:846.5273,y:482.0916,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_38,p:{x:837.374,y:491.7608,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_37,p:{x:835.1989,y:504.6878,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_36,p:{x:1010.9873,y:547.7328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-11.5481,x:1097.4051,y:541.9742,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-11.5481,x:1077.0488,y:469.7901,scaleX:0.9999,scaleY:0.9999}}]},109).to({state:[{t:this.shape_42,p:{x:884.975,y:469.575}},{t:this.instance_1,p:{x:854.8,y:508.65}},{t:this.shape_41,p:{x:874.114,y:477.3843,scaleX:0.9995,scaleY:0.9995,rotation:-1.7032}},{t:this.shape_40,p:{x:892.8014,y:509.6568,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_39,p:{x:855.092,y:482.9504,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_38,p:{x:845.9386,y:492.6195,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_37,p:{x:843.7636,y:505.5465,scaleX:2.2874,scaleY:2.2874,rotation:107.9889}},{t:this.shape_36,p:{x:1019.4873,y:548.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-22.2365,x:1109.75,y:540.7851,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-22.2365,x:1076.3585,y:473.6276,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_42,p:{x:899.375,y:471.375}},{t:this.instance_1,p:{x:869.2,y:510.05}},{t:this.shape_41,p:{x:888.5271,y:479.1916,scaleX:0.9996,scaleY:0.9996,rotation:-1.7032}},{t:this.shape_40,p:{x:907.8329,y:511.0277,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_39,p:{x:870.1221,y:484.3215,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_38,p:{x:860.9688,y:493.991,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_37,p:{x:858.794,y:506.9184,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_36,p:{x:1033.8873,y:550.2828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-31.7289,x:1117.3971,y:539.5191,scaleX:1,scaleY:1}},{t:this.shape_44}]},3).to({state:[{t:this.shape_42,p:{x:937.975,y:480.575}},{t:this.instance_1,p:{x:908.05,y:519.4}},{t:this.shape_41,p:{x:927.1271,y:488.3916,scaleX:0.9996,scaleY:0.9996,rotation:-1.7032}},{t:this.shape_40,p:{x:946.1476,y:520.3365,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_39,p:{x:908.4368,y:493.6303,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_38,p:{x:899.2835,y:503.2998,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_37,p:{x:897.1086,y:516.2271,scaleX:2.2874,scaleY:2.2874,rotation:107.9877}},{t:this.shape_36,p:{x:1072.4873,y:559.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.444,x:1122.686,y:535.3012,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.444,x:1072.8468,y:479.2538,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:922.625,y:484.575}},{t:this.instance_1,p:{x:892.5,y:522.85}},{t:this.shape_41,p:{x:911.8165,y:492.3633,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:931.2071,y:524.4096,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_39,p:{x:893.4955,y:497.7018,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_38,p:{x:884.3417,y:507.3715,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_37,p:{x:882.1666,y:520.2992,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_36,p:{x:1057.1373,y:563.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.4246,x:1124.2019,y:538.1545,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.4246,x:1074.3822,y:482.0908,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:910.875,y:484.175}},{t:this.instance_1,p:{x:880.85,y:523.35}},{t:this.shape_41,p:{x:900.0665,y:492.0133,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:919.1365,y:524.2271,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_39,p:{x:881.4249,y:497.5194,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_38,p:{x:872.2711,y:507.1891,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_37,p:{x:870.096,y:520.1168,scaleX:2.2875,scaleY:2.2875,rotation:107.9887}},{t:this.shape_36,p:{x:1045.3873,y:563.0828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.4246,x:1124.2019,y:538.1545,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.4246,x:1074.3822,y:482.0908,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:909.925,y:469.125}},{t:this.instance_1,p:{x:873.85,y:521}},{t:this.shape_41,p:{x:893.1296,y:489.9706,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:913.1235,y:521.7579,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_39,p:{x:875.4125,y:495.049,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_38,p:{x:866.2585,y:504.7185,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_37,p:{x:864.083,y:517.6462,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_36,p:{x:1038.4373,y:561.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-35.1686,x:1123.5497,y:537.3059,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-35.1686,x:1075.9748,y:479.3239,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:900.375,y:466.925}},{t:this.instance_1,p:{x:864.1,y:518.9}},{t:this.shape_41,p:{x:883.5796,y:487.7706,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:903.6588,y:519.4491,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_39,p:{x:865.9479,y:492.7403,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_38,p:{x:856.7938,y:502.4098,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_37,p:{x:854.6183,y:515.3374,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_36,p:{x:1028.8873,y:558.8328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-35.1686,x:1123.5497,y:537.3059,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-35.1686,x:1075.9748,y:479.3239,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:895.625,y:475.425}},{t:this.instance_1,p:{x:865.5,y:514.25}},{t:this.shape_41,p:{x:884.8689,y:483.2923,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:904.7664,y:514.9353,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_39,p:{x:867.0557,y:488.2236,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_38,p:{x:857.9008,y:497.8929,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_37,p:{x:855.7246,y:510.8209,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_36,p:{x:1030.1373,y:554.3328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.2341,x:1123.2267,y:536.7472,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-37.2341,x:1073.5946,y:480.5193,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_42,p:{x:900.375,y:466.925}},{t:this.instance_1,p:{x:870.6,y:505.6}},{t:this.shape_41,p:{x:889.6189,y:474.7923,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:909.5164,y:506.3853,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_39,p:{x:871.8057,y:479.6736,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_38,p:{x:862.6508,y:489.3429,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_37,p:{x:860.4746,y:502.2709,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_36,p:{x:1034.8873,y:545.8328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.2056,x:1124.5667,y:535.3316,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.2056,x:1074.9614,y:479.0777,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:873.975,y:474.125}},{t:this.instance_1,p:{x:863.2,y:506.1}},{t:this.shape_41,p:{x:882.7845,y:475.0285,scaleX:0.9997,scaleY:0.9997,rotation:-1.7029}},{t:this.shape_40,p:{x:902.1338,y:506.9971,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_39,p:{x:864.4224,y:480.2814,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_38,p:{x:855.2663,y:489.9507,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_37,p:{x:853.0891,y:502.8793,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_36,p:{x:1027.9873,y:546.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-32.4232,x:1120.7756,y:539.1934,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-32.4232,x:1076.0347,y:479.0019,scaleX:0.9999,scaleY:0.9999}}]},4).to({state:[{t:this.shape_42,p:{x:859.475,y:474.125}},{t:this.instance_1,p:{x:849.2,y:506.1}},{t:this.shape_41,p:{x:868.2845,y:475.0285,scaleX:0.9997,scaleY:0.9997,rotation:-1.7029}},{t:this.shape_40,p:{x:887.2838,y:507.0471,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_39,p:{x:849.5724,y:480.3314,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_38,p:{x:840.4163,y:490.0007,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_37,p:{x:838.2391,y:502.9293,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_36,p:{x:1013.4873,y:546.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-28.7051,x:1114.9339,y:540.3571,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-28.7051,x:1074.1891,y:477.3888,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:834.1,y:508.65}},{t:this.shape_41,p:{x:853.4238,y:477.5003,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:872.2731,y:509.1429,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_39,p:{x:834.5607,y:482.4262,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_38,p:{x:825.4043,y:492.0957,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_37,p:{x:823.227,y:505.0248,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_36,p:{x:998.5873,y:548.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-19.7029,x:1104.9457,y:540.8186,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-19.7029,x:1074.5546,y:472.2484,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_42,p:{x:840.025,y:478.225}},{t:this.instance_1,p:{x:829.7,y:510.3}},{t:this.shape_41,p:{x:848.8738,y:479.1503,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:867.7024,y:511.1105,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_39,p:{x:829.99,y:484.3937,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_38,p:{x:820.8337,y:494.0633,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_37,p:{x:818.6563,y:506.9923,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_36,p:{x:994.0373,y:550.1328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-19.7029,x:1104.9457,y:540.8186,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-19.7029,x:1074.5546,y:472.2484,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_42,p:{x:855.075,y:472.075}},{t:this.instance_1,p:{x:825.05,y:511.2}},{t:this.shape_41,p:{x:844.3845,y:479.9785,scaleX:0.9997,scaleY:0.9997,rotation:-1.7029}},{t:this.shape_40,p:{x:863.4984,y:512.1559,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_39,p:{x:825.787,y:485.4402,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_38,p:{x:816.631,y:495.1095,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_37,p:{x:814.4538,y:508.0381,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_36,p:{x:989.5873,y:550.9828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-11.7737,x:1097.0474,y:540.3893,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-11.7737,x:1076.4067,y:468.2846,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:814.55,y:515.45}},{t:this.shape_41,p:{x:833.937,y:484.5075,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:852.9197,y:516.3829,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_39,p:{x:815.2074,y:489.6649,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_38,p:{x:806.0506,y:499.3344,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_37,p:{x:803.873,y:512.2635,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_36,p:{x:979.0873,y:555.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_42,p:{x:825.325,y:482.675}},{t:this.instance_1,p:{x:819.95,y:511}},{t:this.shape_41,p:{x:840.3291,y:480.999,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:859.1464,y:513.7354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:822.2427,y:485.9018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:812.8006,y:495.2952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:810.2383,y:508.1553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:983.1216,y:556.1862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},5).to({state:[{t:this.shape_42,p:{x:831.075,y:480.575}},{t:this.instance_1,p:{x:825.75,y:509.35}},{t:this.shape_41,p:{x:846.0791,y:478.899,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:864.8964,y:511.6354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:827.9927,y:483.8018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:818.5506,y:493.1952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:815.9883,y:506.0553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:988.8716,y:554.0862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:839.45,y:504.95}},{t:this.shape_41,p:{x:859.5791,y:474.899,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:878.3964,y:507.6354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:841.4927,y:479.8018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:832.0506,y:489.1952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:829.4883,y:502.0553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:1002.3716,y:550.0862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1081.7939,y:535.9019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1076.3,y:461.1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_42,p:{x:831.075,y:480.575}},{t:this.instance_1,p:{x:825.8,y:509.3}},{t:this.shape_41,p:{x:846.0791,y:478.899,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:864.8964,y:511.6354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:827.9927,y:483.8018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:818.5506,y:493.1952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:815.9883,y:506.0553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:988.8716,y:554.0862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},53).to({state:[{t:this.shape_42,p:{x:825.325,y:482.675}},{t:this.instance_1,p:{x:820.3,y:511}},{t:this.shape_41,p:{x:840.3291,y:480.999,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:859.1464,y:513.7354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:822.2427,y:485.9018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:812.8006,y:495.2952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:810.2383,y:508.1553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:983.1216,y:556.1862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:814.6,y:515.45}},{t:this.shape_41,p:{x:833.937,y:484.5075,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:852.9197,y:516.3829,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_39,p:{x:815.2074,y:489.6649,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_38,p:{x:806.0506,y:499.3344,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_37,p:{x:803.873,y:512.2635,scaleX:2.2878,scaleY:2.2878,rotation:107.9986}},{t:this.shape_36,p:{x:979.0873,y:555.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:0,x:1078.9439,y:539.3019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1073.45,y:464.5,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:855.075,y:472.075}},{t:this.shape_41,p:{x:844.437,y:480.0075,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.instance_1,p:{x:825.25,y:511}},{t:this.shape_45},{t:this.shape_39,p:{x:825.9277,y:485.4234,scaleX:2.2878,scaleY:2.2878,rotation:107.9988}},{t:this.shape_38,p:{x:816.7711,y:495.0928,scaleX:2.2878,scaleY:2.2878,rotation:107.9988}},{t:this.shape_37,p:{x:814.5934,y:508.0218,scaleX:2.2878,scaleY:2.2878,rotation:107.9988}},{t:this.shape_36,p:{x:989.5873,y:550.9828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-11.7737,x:1097.0474,y:540.3893,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-11.7737,x:1076.4067,y:468.2846,scaleX:1,scaleY:1}}]},5).to({state:[{t:this.shape_42,p:{x:840.025,y:478.225}},{t:this.instance_1,p:{x:829.3,y:510.55}},{t:this.shape_41,p:{x:848.8738,y:479.1503,scaleX:0.9998,scaleY:0.9998,rotation:-1.7028}},{t:this.shape_40,p:{x:867.7024,y:511.1105,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_39,p:{x:829.99,y:484.3937,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_38,p:{x:820.8337,y:494.0633,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_37,p:{x:818.6563,y:506.9923,scaleX:2.2878,scaleY:2.2878,rotation:107.9972}},{t:this.shape_36,p:{x:994.0373,y:550.1328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-19.7029,x:1104.9457,y:540.8186,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-19.7029,x:1074.5546,y:472.2484,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:834.3,y:508.5}},{t:this.shape_41,p:{x:853.4763,y:477.5293,scaleX:0.9998,scaleY:0.9998,rotation:-1.7027}},{t:this.shape_46},{t:this.shape_39,p:{x:834.8513,y:482.5566,scaleX:2.2878,scaleY:2.2878,rotation:107.9994}},{t:this.shape_38,p:{x:825.6942,y:492.2261,scaleX:2.2878,scaleY:2.2878,rotation:107.9994}},{t:this.shape_37,p:{x:823.5163,y:505.1555,scaleX:2.2878,scaleY:2.2878,rotation:107.9994}},{t:this.shape_36,p:{x:998.5873,y:548.4828,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-19.7029,x:1104.9457,y:540.8186,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-19.7029,x:1074.5546,y:472.2484,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:859.475,y:474.125}},{t:this.instance_1,p:{x:849.3,y:506}},{t:this.shape_41,p:{x:868.2845,y:475.0285,scaleX:0.9997,scaleY:0.9997,rotation:-1.7029}},{t:this.shape_40,p:{x:887.2838,y:507.0471,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_39,p:{x:849.5724,y:480.3314,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_38,p:{x:840.4163,y:490.0007,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_37,p:{x:838.2391,y:502.9293,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_36,p:{x:1013.4873,y:546.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-28.7051,x:1114.9339,y:540.3571,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-28.7051,x:1074.1891,y:477.3888,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_42,p:{x:873.975,y:474.125}},{t:this.instance_1,p:{x:863.45,y:505.9}},{t:this.shape_41,p:{x:882.7845,y:475.0285,scaleX:0.9997,scaleY:0.9997,rotation:-1.7029}},{t:this.shape_40,p:{x:902.1338,y:506.9971,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_39,p:{x:864.4224,y:480.2814,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_38,p:{x:855.2663,y:489.9507,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_37,p:{x:853.0891,y:502.8793,scaleX:2.2877,scaleY:2.2877,rotation:107.997}},{t:this.shape_36,p:{x:1027.9873,y:546.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-32.4232,x:1120.7756,y:539.1934,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-32.4232,x:1076.0347,y:479.0019,scaleX:0.9999,scaleY:0.9999}}]},3).to({state:[{t:this.shape_42,p:{x:900.375,y:466.925}},{t:this.instance_1,p:{x:870,y:505.35}},{t:this.shape_41,p:{x:889.6189,y:474.7923,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:909.5164,y:506.3853,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_39,p:{x:871.8057,y:479.6736,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_38,p:{x:862.6508,y:489.3429,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_37,p:{x:860.4746,y:502.2709,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_36,p:{x:1034.8873,y:545.8328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-37.2056,x:1124.5667,y:535.3316,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:-37.2056,x:1074.9614,y:479.0777,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_42,p:{x:890.275,y:466.925}},{t:this.instance_1,p:{x:859.5,y:505.55}},{t:this.shape_41,p:{x:879.5189,y:474.7923,scaleX:0.9997,scaleY:0.9997,rotation:-1.703}},{t:this.shape_40,p:{x:899.4164,y:506.3853,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_39,p:{x:861.7057,y:479.6736,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_38,p:{x:852.5508,y:489.3429,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_37,p:{x:850.3746,y:502.2709,scaleX:2.2876,scaleY:2.2876,rotation:107.9933}},{t:this.shape_36,p:{x:1024.7873,y:545.8328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-30.2101,x:1119.0001,y:536.5167,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-30.2101,x:1076.6166,y:474.6419,scaleX:0.9999,scaleY:0.9999}}]},4).to({state:[{t:this.shape_42,p:{x:878.225,y:466.125}},{t:this.instance_1,p:{x:848,y:505.05}},{t:this.shape_41,p:{x:867.4296,y:473.9706,scaleX:0.9996,scaleY:0.9996,rotation:-1.7031}},{t:this.shape_40,p:{x:886.8235,y:505.7579,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_39,p:{x:849.1125,y:479.049,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_38,p:{x:839.9585,y:488.7185,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_37,p:{x:837.783,y:501.6462,scaleX:2.2875,scaleY:2.2875,rotation:107.9903}},{t:this.shape_36,p:{x:1012.7373,y:545.0328,rotation:-1.7042}},{t:this.shape_35,p:{rotation:-21.9909,x:1111.3144,y:538.5879,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_34,p:{rotation:-21.9909,x:1078.2121,y:471.2898,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_42,p:{x:844.575,y:476.575}},{t:this.instance_1,p:{x:839.4,y:505.1}},{t:this.shape_41,p:{x:859.5791,y:474.899,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_40,p:{x:878.3964,y:507.6354,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_39,p:{x:841.4927,y:479.8018,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_38,p:{x:832.0506,y:489.1952,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_37,p:{x:829.4883,y:502.0553,scaleX:2.2881,scaleY:2.2881,rotation:109.7067}},{t:this.shape_36,p:{x:1002.3716,y:550.0862,rotation:0}},{t:this.shape_35,p:{rotation:0,x:1081.7939,y:535.9019,scaleX:1,scaleY:1}},{t:this.shape_34,p:{rotation:0,x:1076.3,y:461.1,scaleX:1,scaleY:1}}]},3).wait(34));

	// Layer_3
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#469DED").ss(0.1,1,1).p("AqhnqIVDAAQAvAAAAAvIAAN3QAAAvgvAAI1DAAQgvAAAAgvIAAt3QAAgvAvAAg");
	this.shape_47.setTransform(549.0862,318.3006,0.9016,0.9016);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#469DED").ss(0.1,1,1).p("AqhnqIVDAAQAvAAAAAvIAAN3QAAAvgvAAI1DAAQgvAAAAgvIAAt3QAAgvAvAAg");
	this.shape_48.setTransform(693.6362,213.1006,0.9016,0.9016);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#469DED").ss(0.1,1,1).p("AqhnqIVDAAQAvAAAAAvIAAN3QAAAvgvAAI1DAAQgvAAAAgvIAAt3QAAgvAvAAg");
	this.shape_49.setTransform(549.0862,213.1006,0.9016,0.9016);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#469DED").ss(0.1,1,1).p("AqhnqIVDAAQAvAAAAAvIAAN3QAAAvgvAAI1DAAQgvAAAAgvIAAt3QAAgvAvAAg");
	this.shape_50.setTransform(404.8362,213.0506,0.9016,0.9016);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#469DED").ss(0.1,1,1).p("AqhnqIVDAAQAvAAAAAvIAAN3QAAAvgvAAI1DAAQgvAAAAgvIAAt3QAAgvAvAAg");
	this.shape_51.setTransform(693.6362,106.9506,0.9016,0.9016);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#469DED").ss(0.1,1,1).p("AqhnqIVDAAQAvAAAAAvIAAN3QAAAvgvAAI1DAAQgvAAAAgvIAAt3QAAgvAvAAg");
	this.shape_52.setTransform(549.0862,106.9506,0.9016,0.9016);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#469DED").ss(0.1,1,1).p("AqhnqIVDAAQAvAAAAAvIAAN3QAAAvgvAAI1DAAQgvAAAAgvIAAt3QAAgvAvAAg");
	this.shape_53.setTransform(404.8362,106.9006,0.9016,0.9016);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#3EA2F4").ss(2,1,1).p("ACDjyIAAASQgCA6g7AAIiVAAQg7AAgCg6IAAgSIAAgwIBdAAIAAAAQAAgSALgMQANgMARAAQAQAAAMAMQAMAMAAASIAAAAIBhAAIAAAwIBFAAQA9AAAAA9IAAHGQAAA8g9AAImPAAQg9AAAAg8IAAnKQACg5A7AAIA7AAAi+DDIAnAtIBIhHAi+A1IAnAtIBIhHAi+hLIAnAtIBIhHAgeDLIDbAAAgeA9IDbAAAgehCIDbAA");
	this.shape_54.setTransform(526.525,314.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#3EA2F4").ss(2,1,1).p("AkUgjIAHgQIAyhyIAKgVAiEgkIgLgdIgnhiIgNgiAi6jHIAcALICaA/IAnARAi0jaIAUgJIBygxIASgIAAnhyIgKgqIgXhcIgGgcAAYkhIAPAHIB2AyIAcAMAA2h5IAXgOIBTg0IAdgTADUjDIAIAVIAxB9IAMAgAEZAXIgGAOIg2B2IgKAVAAyhlIAbAKIClBAIAiANAA9BKIAkgOICNg2IASgGADJC4IgfgWIhSg7IgfgXADKDQIglAPIiAAzIgfALAArhUIACAPIAJBiIADAkAhpgnIATgJIBWgsIAagOAhngMIASAKIBkA3IAZAOAkTgKIAhgEIBJgJIAbgEAkYANIAHATIAwCEIAMAgAjBC8IALggIAsiLIAKgfAApBSIgaANIiqBWIgqAVAixDaIARAIIBtAuIApASAgEELIAJgeIAmh4IAHgY");
	this.shape_55.setTransform(678.525,214.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3EA2F4").s().p("AgjE9QgNgNAAgSIABgHIApASIgpgSQACgPAKgKQANgNATAAQAFAAAHACIgKAeIAKgeQAKADAIAIQALALACAPIgfAMIAfgMIAAAGQAAASgNANQgNANgRAAQgTAAgNgNgAAoEYIAAAAgAgvEXgAjgDsQgNgNAAgSQAAgTANgNIADgCIALAfIgLgfQAMgLAQAAQAIAAAGACIgKAhIAKghQAKAEAIAHQAGAGAEAIQADAIAAAKQAAAPgJAMIgQgHIAQAHIgEAEQgNANgTAAQgSAAgNgNgAjCDQIArgVgACsDpIgDgDIAlgQIglAQQgKgNAAgQQAAgSANgNIACgBQANgMARAAQALAAAJAFIgKAVIAKgVQAGACAFAGQANANAAASQAAATgNANQgNANgSAAQgTAAgNgNgADNC+IgfgVgAAJDzIAAAAgAjdCrgAizCiIAAAAgADgCiIAAAAgAAuB7IAIgYIgIAYQgLgCgJgJQgEgFgDgGIAagNIgaANQgGgJAAgMQAAgMAGgIIAZANIgZgNQADgHAEgEQANgNASAAIADAjIgDgjIABAAQASAAANANQAJAIACAJIgkAOIAkgOQADAHAAAHQAAARgLANIgDACQgNANgSAAQgGAAgGgCgABcBuIgggXgAATA8gAEXAsIAGgPIgGAPQgPgCgLgLQgJgIgCgKIARgHIgRAHQgCgGAAgHQAAgLAFgKQADgFAFgFQAIgIALgEIANAhIgNghQAGgBAGAAQATAAANANQANANAAASQAAASgNANQgNANgTAAIgFAAgAEXgIIgigNgAk7AbQgNgNAAgSQAAgSANgNQANgNATAAQAKAAAIADIgIAQIAIgQQAHADAHAHQALALACAQIghAEIAhgEIAAAEQAAASgNANQgJAIgKADIgHgTIAHATQgGACgHAAQgTAAgNgNgAkOAmgAA5AkgAiGAXIAKgeIgKAeQgKgCgIgJQgMgMgBgRIAbgDIgbADIAAgBQAAgTANgNQAFgFAHgEIALAdIgLgdQAJgEAKAAQATAAANANIAGAIIgSAJIASgJQAHALAAANQAAAMgGAJIgRgJIARAJQgDAFgEAEQgNANgTAAQgHAAgGgCgAhSADgAjugIIAAAAgAhTgqIAAAAgAEQgrgAkJgtIAAAAgAiMg7gAAwg+IgBgPIABAPIgGAAQgTAAgNgNQgFgFgDgFIAcgOIgcAOQgEgKAAgMQAAgGABgFIAoAQIgogQQACgLAJgJQAKgKANgCIAKArIgKgrQAEgBAFAAQASAAANANIAIAJIgXAOIAXgOQAFAKAAAMQAAANgFAJIgIAKQgKAKgPADIAAAAgABRhVIgcgKgAgBh2gABRiBIAAAAgAAhiWgAjXieQgGgDgGgGQgNgNAAgSQAAgTANgNQANgNATAAQASAAANANQAFAFADAFQAFAJAAANQAAAJgDAIIgdgMIAdAMQgEAIgGAGQgHAHgHADIgNghIANAhQgIADgJAAQgLAAgJgEgAjXieIAJgWgAixjUIAVgIgACpiuIgGgHIAdgSIgdASQgHgLAAgOQAAgLAFgIIAbALIgbgLQACgHAGgGQANgNATAAQASAAANANQANANAAATQAAASgNAOIgIAGIgIgUIAIAUQgKAHgNAAQgTAAgNgNgADgiogAChjhgAggj9QgIgIgCgJQgDgHAAgIQAAgSANgNQANgNASAAQASAAANANQANANAAASIgBAJIgPgHIAPAHQgDANgJAKQgJAJgLACIgHgcIAHAcQgFACgGAAQgSAAgNgNgAgqkOIARgIgAAKjygAAqkUg");
	this.shape_56.setTransform(678.175,213.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3EA2F4").s().p("AkgEKQgUAAgOgOQgOgOAAgTIAAgBQAAgUAOgOQAOgOAUAAIEyAAQAUAAANAOQAPAOAAAUIAAABQAAATgPAOQgNAOgUAAgACYEDQg/AAAAhAIAAkbQAAhBA/AAIB6AAQA/AAAABBIAAEbQAABAg/AAgADCCbQgHAHAAAKQAAAJAHAHQAHAHAKAAQAJAAAHgHQAHgHAAgJQAAgKgHgHQgHgHgJAAQgKAAgHAHgAC2hPQgEAEAAAGQAAAFAEAEQAEAFAFgBIAfAAQAGABAEgFQAEgEAAgFQAAgGgEgEQgEgEgGAAIgfAAQgFAAgEAEgAkyCQIAAgEIAAlIQAAhOBNABIHHAAQBNgBAABOIAAAJIgLgBIiMAAQhYAAAABWIAACuQgGA+hBACg");
	this.shape_57.setTransform(529.775,211.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#3EA2F4").ss(2,1,1).p("AjJkUQAVgGAXgBIAAC2IifACQgBgIAAgKQAAhFAxgwQAegeAlgMQAGgyA1AAIE0AAICYCZIAAG3QAAA9g9AAImPAAQg8AAAAg9IAAhfAE+itIhbAAQg9AAAAg9IAAhcAh1g5IAAi4QADAAADAAQBFAAAvAxQADAEADACQABAAABACQApAvAAA/QAAAJAAAIQgGA5grAqQgvAxhFAAQhFAAgxgxQgpgqgGg5ICfAAICCh/ABrgLIBIAAAAZCbQgGAHgKAAQgJAAgIgJQgHgGAAgLQAAgKAHgIQAIgHAJAAQALAAAHAHQAIAIAAAKQAAALgIAGQgBACgBAAIBBA+QAAAAAAgBQAHgIALAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAQgLAAgHgHQgHgHAAgLQAAgKAHgGAhKDdQABABABABQAHAHAAAKQAAAJgHAIQgHAGgKAAQgKAAgHgGQgIgIAAgJQAAgKAIgHQAHgIAKAAQAIAAAHAGIA+g/ADzCEQAAAKgIAHQgHAIgKAAQgLAAgHgIQgHgHAAgKQAAgLAHgHQAHgHALAAQAKAAAHAHQAIAHAAALgACEDaIBAg/ABph3ICeAAABrhAICeAA");
	this.shape_58.setTransform(379.375,212.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#3EA2F4").ss(2,1,1).p("ADzkHIAYgZADzkHIAaAaADXjsIAcgbADakfIAZAYAlJjDIAAhIQAAg+A+AAIIYAAQA9AAAAA+IAAIYQAAA9g9AAIoYAAQg+AAAAg9IAAl6IAAhWIKQAAAj1gsIBbAAIAABaIhbAAgAj1CVIBbAAIAABbIhbAAgAlJhtIKNAA");
	this.shape_59.setTransform(679.325,106.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3EA2F4").s().p("ABHCJQgFgDgCgGQgCgGABgKIAAgpIgDAAQgFAAgCgCQgDgCAAgEQAAgDADgCQACgCAFAAIADAAIAAgNIAAgIIABgEQABgDADgCQACgBADAAQAEAAAEAEQACABAAADIAAAIIAAAPIAIAAQAEAAADACQACACAAADQAAAFgDABQgEACgFAAIgFAAIAAAoIAAAGIACAFQACACAEgBIAFAAIAFgBQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQACACAAAEQAAAFgHADQgFACgLAAQgJAAgFgDgAgbCAQgLgLAAgUQAAgKADgIQACgHAGgGQAFgGAHgDQAJgDAIAAQAMAAAJAGQAJAEAEAIQAEAJAAAJQABAIgFACQgFACgHABIgpAAQAAAGADAGQADAFAEADQAFADAFAAIAGgBIAHgDIAFgDIAHgGQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgCADQgCAEgEAEQgFAEgHACQgHACgJAAQgSAAgMgMgAgKBKQgFAGgCAKIAlAAQAAgKgFgGQgGgFgIAAQgHAAgEAFgAhKCJQgDgEAAgGIAAgjQABgKgEgGQgCgFgJgBQgGABgEADQgFADgCAHQgBAEAAANIAAAaQAAAGgEAEQgCADgGAAQgFAAgCgDQgDgEAAgGIAAg9QAAgGADgDQACgDAEAAQAEAAACACIAEAEIABAGIAAACQAFgHAHgDQAHgEAJAAQAIAAAGAEQAHAEADAGQACAEABAFIABALIAAAnQAAAGgEAEQgDADgEAAQgFAAgDgDgAiuCJQgDgDgBgGQABgFADgDQADgDAEAAQAGAAADADQAEADAAAFQAAAGgEADQgDADgFAAQgFAAgDgDgACgg5QgDgDAAgGIAAgkIgBgLQAAgEgDgCQgDgDgFAAQgEAAgEADQgDACgDAEQgCAFAAAOIAAAcQAAAGgDADQgDAEgFAAQgFAAgDgEQgCgDAAgGIAAgiIgBgMQgBgFgCgCQgCgDgGAAQgKgBgDAIQgEAGABAPIAAAcQAAAGgEADQgDAEgEAAQgFAAgDgEQgDgDAAgGIAAg9QAAgGADgDQACgDAFAAQAEAAADADQADADAAAFIAAABQAFgGAHgDQAFgDAIAAQAJAAAGADQAEADAEAGQAGgGAGgDQAGgDAIAAQAIAAAHADQAFADAEAHQACAHABALIAAAqQAAAGgEADQgDAEgEAAQgFAAgDgEgAgQg5QgIgCgFgGQgGgGgDgIQgDgIAAgJQAAgKADgIQADgHAGgGQAEgGAJgDQAIgDAIAAQAJAAAJADQAHADAGAGQAFAGADAIQADAHAAAKQAAAJgDAIQgDAIgFAGQgGAGgHACQgJAEgJAAQgIAAgIgEgAgKh4QgEADgDAGQgCAGAAAJQAAAIACAGQADAHAEADQAFADAFAAQAJAAAHgHQAFgHAAgNQAAgNgFgIQgHgGgJAAQgFAAgFADgAh8hBQgLgLABgTQAAgNAEgLQAGgKAJgFQAJgFAOAAQAIAAAHACQAHACAFAFQAEADADAFQADADAAAFQAAAEgEACQgDADgDAAQgDAAgCgCIgEgEQgDgGgFgCQgEgEgGAAQgKAAgFAHQgHAHAAAOQAAAGACAFQACAEADAEQACADAEACQAEACAFAAQAGAAAFgDQAFgDADgGIAEgFQADgCADgBQADABACADQAEACAAADQAAAFgCAEIgIAIQgFAFgIACQgGADgKAAQgTAAgMgMgAiug5QgDgCgBgGQABgFADgDQADgDAEAAQAGAAADADQAEADAAAFQAAAGgEACQgDAEgFAAQgFAAgDgEg");
	this.shape_60.setTransform(686.2,116.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgEIAAAJQAAgCAAgDQAAgCAAgCg");
	this.shape_61.setTransform(548.325,81.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#3EA2F4").ss(2,1,1).p("AjukDIAAgBQAAgBAAgBQADgZBDgSQBHgTBiAAQBjAABGATQBAARAGAXAjukDQABAaBFASQBHATBiAAQBjAABGgTQBAgRAGgXIAACvQgGAXhAARQhGAThjAAQhiAAhHgTQhFgTgBgZIgBClIgBC1QACAaBFASQBHATBiAAQBjAABGgTQBAgQAHgYAjukDIAACvADwBWQgGAXhAAQQhGAThjAAQhiAAhHgTQhFgSgCgaADwBWIAACtADwhQIAACm");
	this.shape_62.setTransform(524.25,107.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#3EA2F4").ss(2,1,1).p("AiMgpIAAh8QgCifCPAAQCPAAgBCfAADChQgXAAgRgSQgSgRAAgaQAAgZASgSQASgSAYAAQAaAAASASQARASAAAZQAAAagRARQgSASgaAAQgBAAgBAAIAABMAiqglIFUAAQBBAAAABAIAADqQAABAhBAAIlUAAQhAAAAAhAIAAjqQAAhABAAAg");
	this.shape_63.setTransform(381.85,105.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(399));

	// tv
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#44C3FA","#47099A"],[0,1],-224.4,-287.9,-78.7,-55.4).s().p("EghTAadQivAAgBivMAAAgvbQABiwCvAAMBCnAAAQCwAAAACwMAAAAvbQAACviwAAg");
	this.shape_64.setTransform(548,210.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#090819").s().p("EghTAcnQk5AAAAk5MAAAgvbQAAk5E5AAMBCnAAAQE5AAAAE5MAAAAvbQAAE5k5AAgEgkCgXtMAAAAvbQAACvCvAAMBCnAAAQCwAAAAivMAAAgvbQAAiwiwAAMhCnAAAQivAAAACwg");
	this.shape_65.setTransform(547.975,210.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64}]}).wait(399));

	// sto
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#460A82","#200543"],[0,1],0.6,33.4,0.9,-3).s().p("Ah1DyQgXgYgNgbQgOgfAAglQAAhFAygxQAxgxBEAAQArABAjASQAWALATATQAxAxAABFQAABFgxAyQgxAxhGABQhEgBgxgxgAhYAiQgkAlAAA0QAAAmATAeQAHALAKAKQAlAlAzgBQA0ABAkglQAmglAAg0QAAg0gmglIgKgKQgigZgsAAQgzAAglAjgAgkChQgQgPAAgXQAAgVAQgQQAPgQAVAAQAWAAARAQQAPAQAAAVQAAAXgPAPQgRAQgWAAQgVAAgPgQgAhGh3QgdgeAAgpQAAgqAdgeQAegcAogBQAqABAdAcIAHAIQAXAbAAAlQAAAlgXAbIgHAHQgdAegqAAQgoAAgegegAgkjjQgQAPAAAWQAAAWAQAPQAPAQAVAAQAWAAAPgQQARgPAAgWQAAgWgRgPQgPgRgWAAQgVAAgPARg");
	this.shape_66.setTransform(767.275,450.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#460A82","#200543"],[0,1],-0.3,35.1,0.3,-35).s().p("AitFdQgbAAgOgMIgFgFQgMgOAAgbIAApFQAAg6A6AAIFbAAIACAAIABAAQAVAAANAJIAEADIABABIADADQAKAMACAUIABAKIAAJFQAAA6g6AAgAh1AHQgyAyAABFQAAAlAOAfQANAbAXAYQAxAxBEAAQBGAAAxgxQAwgyAAhFQAAhFgwgyQgTgSgXgLQgigTgrAAQhEAAgxAwgAhGkDQgdAeAAAqQAAApAdAeQAdAeApAAQApAAAegeIAGgHQAYgbAAglQAAglgYgcIgGgHQgegdgpAAQgpAAgdAdgAhYDWQgKgJgHgLQgTgeAAgmQAAg0AkglQAlgkAzAAQAsAAAhAaIALAKQAmAlAAA0QAAA0gmAkQgkAlg0AAQgzAAglglgAgkBZQgRAPABAWQgBAXARAPQAPAQAVAAQAWAAAQgQQAQgPAAgXQAAgWgQgPQgQgQgWAAQgVAAgPAQgAgkiWQgQgPAAgWQAAgWAQgPQAPgRAVAAQAWAAAPARQARAPAAAWQAAAWgRAPQgPAQgWAAQgVAAgPgQg");
	this.shape_67.setTransform(767.3,450.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#460A82","#200543"],[0,1],-0.7,42,0.1,-41.9).s().p("AkbELIgEgDQgNgOAAgcIAApFQAAg6A6AAIFcAAIAFAAIAIABQAJABAGADQAGACAFAEIADADIACACIABABICWCWIgEgDQgNgJgVAAIgBAAIgCAAIlbAAQg6AAAAA6IAAJFQAAAbAMAOg");
	this.shape_68.setTransform(758.7,441.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0.1,-21.9,-0.1,22).s().p("AAJBQIAAAAIiTiTIAAgBIgJgIIAAgLIABABIAAh7IgBAAIAAgKIAyAyIAWAXIDfDfIAACPg");
	this.shape_69.setTransform(498.8,515.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#76C3F6").s().p("Ak7hHIgygyIG2AAIAmAlQB/B7CABQIghABImKACQh9hIiBh5g");
	this.shape_70.setTransform(520.575,505.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4295CC").s().p("AE6BuImQgBQhzhUh1hvIgXgXQCBB5B9BIIGKgCIAjAcg");
	this.shape_71.setTransform(523.15,509.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2B77AA").s().p("AhqBwIjfjfQB1BvByBTIGRACIAbAbg");
	this.shape_72.setTransform(524.275,511.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-7.1,0,7.2).s().p("AjZBHIAAiOIGzAAIgBCOg");
	this.shape_73.setTransform(535.45,530.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#46088D").s().p("AAOCbQgXgMgQgPIgRkXIgBgGIAAgFQANApALggQANAcAKgeQATAeAAgqIAWFPQgQgFgPgIg");
	this.shape_74.setTransform(819.3,376.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#49D2FF").s().p("ABnBtIAlkJQAiAkAxgWIgnEgQgPANgYAMQgVALgXAHIgJADgAjeiRIAAgBIANgrQASALASgNIATAoQgBAqgSgdQgMAdgNgcQgFAOgFAAQgHAAgHgWg");
	this.shape_75.setTransform(837.175,374.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#201A3A").s().p("ACDAcIAEgfQAgAmA0gZIgFAgQgSAJgRAAQgbAAgVgXgAjagDIAPgvIABABIAUArQgKAGgKAAQgIAAgIgDg");
	this.shape_76.setTransform(838.075,356.3637);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D8D0F0").s().p("AhgBKIACgMQACgaAEgZIABgGIAlidIADABIACAHIAPBNIALCFIgDBCIgLBTQghAIgmADgAASimIAAgOIACgGIABgIQALgiAiAEQAfACAHAnIABAKIgDAWQgUAJgRAAQgbAAgUgYg");
	this.shape_77.setTransform(849.775,372.6337);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#831FD5").s().p("AgpDjIABjFIAZjkIADgJIAFgcIAEAAIADAWIADAGIAGAgIAhFDIgBBYQgsgBgmgIg");
	this.shape_78.setTransform(831.3,371.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#460A82","#200543"],[0,1],-7.1,-12.5,7.1,12.5).s().p("AAABtQhZAAhAggQgkgTgQgVIgFgHQgCgBgBgEQgEgHgBgJQgBgFABgEIAAgIQAGgpA7gcQBAgfBZAAQAVAAATABQBCAFAxAZQA4AbAHAnIABALIAAAKIgFAPIgBACIgCADQgOAagqAVQg5AdhOADIgUAAg");
	this.shape_79.setTransform(836.175,384.35);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-5.9,17.1,-5.5,-29.2).s().p("AipEyQhHgjAAgzIABgHIAAorQAAAGAEAFIACAGQAFALAKALIAAABIAVAQQADAMgDgLQAMAJAQAGQBGAlBjAAIASAAQBYgCBAgjQAfgPASgRIAAgCQAJgKAGgLIACgGQACgFABgHIACI2QgDAxhEAiQhHAlhjAAQhjAAhGglg");
	this.shape_80.setTransform(836.175,420.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#94CBF3").s().p("AAAB7QhjAAhGglQgPgHgMgIQACAKgDgLIgUgRIAAAAQgKgLgFgLIgCgGQgEgFAAgGIAAgWQAEguBBghQBGgjBjAAIAqABQBJAGA3AcQA+AfAHAsIAAAZQAAAHgCAFIgDAGQgGALgIAKIgBABQgSASgfAPQg/AihYADIgTAAgAiZhOQg7AdgFApIAAAHQgBAEABAGQABAIAEAHQAAAEACABIAFAHQARAVAjATQBAAgBaAAIATAAQBPgDA5gdQAqgVAOgaIABgCIACgDIAEgPIABgKIgCgLQgGgng4gbQgxgYhCgFQgUgCgUAAQhaAAhAAfg");
	this.shape_81.setTransform(836.125,384.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#6FDAF4","#A4FFFE"],[0,1],-43.5,0,43.5,0).s().p("AlYFFQhaguAAhBQAAgFACgFIAAo/QAFAsAwAiQAFAPgDgNQAPAKASAJQBbAvCAAAQB/AABagvQBPgnAKg2IAAAjQAIgCAJABQBtgUBHBMQBHBKgRCHQgSCGg+BBQg/BBhdABIgMAAIAAhXQA1ASA4g1QA3g1ABhxQAAhyg0gYQg2gYg9AMIABHIQgDA/hYAtQhaAvh/AAQiAAAhbgvg");
	this.shape_82.setTransform(396.048,570.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#460A82","#200543"],[0,1],0.8,-5.9,0.4,16.5).s().p("AjEBiQgugXgVgbQgWgbAGgfQAIgzBLgmQBSgoBzAAQB1AABRAoQBIAjAJAxQAEAggLATQgRAig5AcQhRAqh1AAQhzAAhSgqg");
	this.shape_83.setTransform(383.4175,532.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BDECF8").s().p("AjaBvQgSgJgPgKQADANgFgPQgwgigFgsIAAgWQAHg7BRgqQBbguB/AAQCAAABaAuQBPAoAKA3IAAAiQgKA2hPAnQhaAviAAAQh/AAhbgvgAjEhkQhLAmgIAzQgGAfAWAbQAVAbAuAXQBSAqBzAAQB1AABRgqQA5gcARgiQALgTgEggQgJgxhIgjQhRgoh1AAQhzAAhSAog");
	this.shape_84.setTransform(383.425,532.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#6FDAF4","#A4FFFE"],[0,1],-11.4,0,11.4,0).s().p("AhqAnQgFgDgBgFQgCgGADgFQACgEAGgCIDIg2QAFgBAFADQAFACACAGQABAFgCAFQgEAFgEABIjJA3IgDAAQgEAAgDgCg");
	this.shape_85.setTransform(645.2881,508.7643);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#460A82","#200543"],[0,1],-1.5,0,1.5,0).s().p("AgLAMQgGgJAGgEQAHgFALgGIAIAMIAAAMIgQABIgKgBg");
	this.shape_86.setTransform(569.175,524.3318);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#6FDAF4","#A4FFFE"],[0,1],-6.7,0,6.8,0).s().p("Ag7AoIAAgMIgIgNIAVgPQApggAvgOQAbAZgCAmQAAALgDAKIgaAGQgTADgSAAQgeAAgegHg");
	this.shape_87.setTransform(576.6568,521.4743);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#460A82","#200543"],[0,1],-37.7,0,38,0).s().p("AllCBQACgLABgKQACgngbgZIABgCIACABIKLifIBIgMQAKAAAJAGIAEAEQALAKgBAOQABANgJAJIhJAjIqOCmg");
	this.shape_88.setTransform(618.9,512.425);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#6FDAF4","#A4FFFE"],[0,1],-3.7,0,3.7,0).s().p("AgkgTIA0gKQAJAAAGAGQAGAGAAAIQAAAIgGAEIgqAWIgZAFg");
	this.shape_89.setTransform(656.5,502.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#460A82","#200543"],[0,1],0.6,33.4,0.9,-3).s().p("Ah1DyQgXgYgNgbQgOgfAAglQAAhFAygxQAxgxBEAAQArABAjASQAWALATATQAxAxAABFQAABFgxAyQgxAxhGABQhEgBgxgxgAhYAiQgkAlAAA0QAAAmATAeQAHALAKAKQAlAlAzgBQA0ABAkglQAmglAAg0QAAg0gmglIgKgKQgigZgsAAQgzAAglAjgAgkChQgQgPAAgXQAAgVAQgQQAPgQAVAAQAWAAARAQQAPAQAAAVQAAAXgPAPQgRAQgWAAQgVAAgPgQgAhGh3QgdgeAAgpQAAgqAdgeQAegcAogBQAqABAdAcIAHAIQAXAbAAAlQAAAlgXAbIgHAHQgdAegqAAQgoAAgegegAgkjjQgQAPAAAWQAAAWAQAPQAPAQAVAAQAWAAAPgQQARgPAAgWQAAgWgRgPQgPgRgWAAQgVAAgPARg");
	this.shape_90.setTransform(344.425,450.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#460A82","#200543"],[0,1],-0.3,35.1,0.3,-35).s().p("AitFdQgbAAgOgMIgFgFQgMgOAAgbIAApFQAAg6A6AAIFbAAIACAAIABAAQAVAAANAJIAEADIABABIADADQAKAMACAUIABAKIAAJFQAAA6g6AAgAh1AHQgyAyAABFQAAAlAOAfQANAbAXAYQAxAxBEAAQBGAAAxgxQAwgyAAhFQAAhFgwgyQgTgSgXgLQgigTgrAAQhEAAgxAwgAhGkDQgdAeAAAqQAAApAdAeQAdAeApAAQApAAAegeIAGgHQAYgbAAglQAAglgYgcIgGgHQgegdgpAAQgpAAgdAdgAhYDWQgKgJgHgLQgTgeAAgmQAAg0AkglQAlgkAzAAQAsAAAhAaIALAKQAmAlAAA0QAAA0gmAkQgkAlg0AAQgzAAglglgAgkBZQgRAPABAWQgBAXARAPQAPAQAVAAQAWAAAQgQQAQgPAAgXQAAgWgQgPQgQgQgWAAQgVAAgPAQgAgkiWQgQgPAAgWQAAgWAQgPQAPgRAVAAQAWAAAPARQARAPAAAWQAAAWgRAPQgPAQgWAAQgVAAgPgQg");
	this.shape_91.setTransform(344.45,450.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#460A82","#200543"],[0,1],-0.7,42,0.1,-41.9).s().p("AkbELIgEgDQgNgOAAgcIAApFQAAg6A6AAIFcAAIAFAAIAIABQAJABAGADQAGACAFAEIADADIACACIABABICWCWIgEgDQgNgJgVAAIgBAAIgCAAIlbAAQg6AAAAA6IAAJFQAAAbAMAOg");
	this.shape_92.setTransform(335.85,441.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#460A82","#200543"],[0,1],-20.6,0,20.7,0).s().p("AjJiaIgFhkIGbGdIABBgg");
	this.shape_93.setTransform(455.1,459.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#76C3F6","#9159C9"],[0,1],-86.1,32.3,86.2,-32.2).s().p("AsQDOIAAABImbmdIL8AAIAAB1IAwAwIACAAIAAADIK+AAIAAioIHOAAIGdGdg");
	this.shape_94.setTransform(554.075,454.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#460A82","#200543"],[0,1],1.1,47.5,1.8,-6.6).s().p("AkvJrIgwgwIAAh1IAAwwIK/AAIAAAyIqNAAIAASjg");
	this.shape_95.setTransform(546.075,388.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#76C3F6","#9159C9"],[0,1],2.4,4.6,2.4,53.6).s().p("AlfJTIAAgCIAAyjIKNAAIAyAAIAAP9IAACog");
	this.shape_96.setTransform(551.025,391.525);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#460A82","#200543"],[0,1],-99,0,99.1,0).s().p("AvcAwIgChfIAAAAIe9ABIgBBeg");
	this.shape_97.setTransform(574.65,480.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#300A62").s().p("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IgGAAQgGAAgJgCgAhPgOQgLgEgGgIIgug/QgGgIADgHQABgIAKgCIBFgOQAKgCAKAFQALAFAGAHIAuA/QAFAJgCAGQgCAIgJABIhFAPIgGAAQgHAAgHgDgATIgVQgLgFgGgIIgug/QgGgIACgHQABgHALgCIBFgOQAJgCALAEQAKAEAHAJIAuA+QAGAIgCAIQgDAHgIACIhGAOIgFAAQgIAAgHgCgApdgkQgLgEgHgJIgug+QgGgIACgHQADgIAIgBIBGgPQAKgCAKAFQALAEAGAIIAuA/QAHAIgDAHQgCAIgKABIhFAPIgGAAQgGAAgHgDgAAvgoQgLgEgGgJIgtg+QgHgIADgIQACgHAJgCIBEgOQAKgCALAEQAKAFAHAIIAuA/QAFAIgBAHQgDAHgJACIhGAPIgFAAQgGAAgIgDgA0+gsQgLgEgFgJIgug+QgHgIACgIQADgHAJgCIBFgOQAKgCALAFQAKAEAGAIIAvA/QAGAIgDAHQgCAHgJACIhFAOIgGABQgHAAgIgDgAVGgwQgKgFgHgHIgtg/QgGgJABgGQACgIAKgBIBFgPQAJgCALAFQALAEAGAJIAvA+QAFAIgCAHQgCAIgJACIhGAOIgGAAQgGAAgIgDgAnfg+QgLgEgGgJIgug+QgGgIABgHQADgIAJgCIBGgOQAJgCAKAFQAMAEAFAIIAuA/QAHAIgCAHQgDAHgIACIhGAPIgFAAQgHAAgIgDgACthCQgKgEgHgJIgug+QgGgIACgIQACgHAKgCIBFgOQAJgCALAEQALAFAGAIIAuA/QAGAIgCAHQgDAHgIACIhGAOIgGABQgGAAgIgDgAy/hGQgLgEgGgJIgug/QgGgHACgIQACgHAKgCIBFgOQAJgCALAEQALAFAGAIIAuA/QAHAIgDAHQgCAHgJACIhGAOIgGABQgGAAgIgDgAlhhYQgLgFgFgIIgvg+QgGgJACgHQADgHAIgCIBGgOQAJgCALAEQALAFAGAIIAuA/QAGAIgCAHQgCAHgJACIhGAOIgGABQgGAAgIgDgAxAhgQgMgFgGgIIgtg/QgHgIACgHQADgHAJgCIBFgOQAKgCALAEQAKAEAHAJIAuA+QAGAIgDAIQgBAHgJACIhHAOIgFABQgHAAgHgDgAP1htQgLgFgFgIIgvg+QgGgJACgGQADgIAIgCIBGgOQAJgCALAEQ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");
	this.shape_98.setTransform(636.7,566.2455);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#76C3F6","#9159C9"],[0,1],-148.4,55.6,148.3,-55.5).s().p("AyQKcQgPgGgJgMIoDq5QgFgHgCgGIAAgFIAAAAIAAgDIABgBQADgKANgEMAsVgJLQANgDAPAGQAQAHAIAMIIEK5QAGAHABAIIgBAEIAAABIAAACQgDAKgNADMgsVAJMIgHAAQgKAAgMgEg");
	this.shape_99.setTransform(642.775,568.3374);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#460A82","#200543"],[0,1],-171.5,0,171.6,0).s().p("AyRGIQgQgHgIgMIn+qwQgMgTAAgMIADgxQABAHAFAGIIEK5QAIAMAQAGQAQAHANgDMAsUgJLQANgDADgKIABgCIgDA4IAAACIgBADQgDAKgNADMgsUAJKIgKABQgJAAgKgEg");
	this.shape_100.setTransform(642.624,601.7863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).wait(399));

	// Layer_2
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#72CBFB").s().p("AvyunIAAgBIiKiLIAAieICMCMIgCAAMAhvAh4IAAABIAACcIAAACg");
	this.shape_101.setTransform(136.775,545.275);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#48C2FE","#4811B8"],[0,1],-209.5,-306.4,12.1,165.9).s().p("Eg/HASDIAAgBMghvgh4IABAAIiLiMMCiIAAAMAj5AkFg");
	this.shape_102.setTransform(655.6,537.375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#6C05AE","#1A0159"],[0,1],-101.3,-209.6,101.3,209.6).s().p("EhRDABOIAAibMCiHAAAIAACbg");
	this.shape_103.setTransform(770.475,660.675);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#290250").s().p("EhAoAu0MAAAgqbIkFBwIAAAAIrtFAIAAgBItdFvQgUAIgYgKQgbgOgRgbQgQgaAAgcMAAAg91QAAgdATgOQAUgOAaAKQAcALATAdQATAdAAAdMAAAAp6IDlhiIAAAAIZpq8QAUgJAZAMQAZAMARAbQARAbAAAcMAAAA9jQghAlggAAQggAAghglgEhdcgBCIAAO9IL0lCIAAgBIGXiuIAAABIKpkjIAAu7I7kLwIAAgBgEBdeAuuMAAAgqaIkFBvIAAABIrsE/IAAAAItdFuQgUAJgZgLQgagOgRgaQgRgbAAgbMAAAg91QAAgdAUgOQATgPAbAKQAbAMATAdQATAcAAAdMAAAAp6IDlhiIAAABIZpq9QAVgJAZAMQAZANARAbQAQAbAAAbMAAAA9jQggAlghAAQggAAghglgEBAqgBHIAAO9IL0lDIAAAAIGXiuIAAAAIKpkiIAAu8I7jLwIAAgBg");
	this.shape_104.setTransform(650.575,749.4709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]}).wait(399));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(671.9,393.3,617.4,659.5);
// library properties:
lib.properties = {
	id: 'compositionFeatures',
	width: 1300,
	height: 732,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['compositionFeatures'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;