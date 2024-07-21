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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Supermomakglava = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF9A9C").s().p("AgNB2QgEgBgDgDIgCgCQgFgFgBgNIgBgTIADgdQACgVAGgZQAOg/AVgvIAFgGQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIADACQABACgBAFIgQBBIgNBCQgDAWgBAUQgBARABAOQADAAADgEQAEgDACAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAQABAEgCAFQgDAIgFAEQgDACgEACIgGABIgGgBg");
	this.shape.setTransform(19.0813,73.1332,1.1335,0.9637);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A25050").s().p("AAOAqQgkgEgfgZIgSgVQAGAHAdANQAhAQAhADIAkACQgIAGgLACIgRACIgQgBgABDgBQgOgDgxgCQgwgCglgSIgBgIQgCgGACgCQArATB7ARIgBAJIAAAAQgDgCgNgCg");
	this.shape_1.setTransform(19.6258,94.9772,1.0465,1.0465);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeAbQghgCgigQQgcgNgHgHIgCgCIAAgBIAAAAIgBgBIgBgCIgBgCIgEgKQAkASAxABQAxACAOAEQANADACABQgCARgOANIgkgDg");
	this.shape_2.setTransform(19.6912,95.3231,1.0465,1.0465);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7D3BE").s().p("ABtA3QgIgEADgHQACgFAJgCQAYgDAJgJIADgGQADgCADgBQACgBAFABQADABABADQADAFgDAFQgCAFgEAEQgRAPgYACIgFABQgEAAgDgCgAiIgDQgFgCgGgEQgHgEgFgHIgGgKQgDgIAAgHQgBgIAEgCQAFgCAEAEQABAAAEAIQAGAQAJADQACACAHACQAFABABAEQADAHgGAEQgEADgGAAIgCAAg");
	this.shape_3.setTransform(21.8347,79.7688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABcAtQgBgBAAgEQAAgGACgGIACgFIABgBQAFgFAGABQAEAAADAEQAEADgBAFQAAADgCADIgDAFQgBADgEADIgGABIgDABQgDAAgDgEgAhxgNQgDgDAAgFQAAgLAGgIIACgCQADgEAFgBQAHgCACAHIAAAHQAAAGgDAGIgFAGIgGAEIgEABIgEgBg");
	this.shape_4.setTransform(24.0611,65.4782);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABBByQgEgIAAgRQAAgdAIgUQAGgLAFgEQAKgHAJAFIABACIgBACIgCAEQgCAGAAAGQAAAEABABQADAFAGgBIAGgCQAFAdgNAdQgGARgLAAIgFABQgKAAgGgMgAiNAwQgEgIAAgQQAAgcAIgUQAGgMAFgDQALgHAIAEIADAEIgCABQgGAIAAALQAAAGADACQADACAFgBIAGgEQAFAbgNAdQgGAQgLACIgEAAQgLAAgGgNgACJgdQgEgCgBgEQgJgSgbAGQgEACgEgDQgDgCgBgEQgBgEACgDQACgEAEgBQAugLANAjQACAEgCADQgCAEgDACIgEABIgEgBgAiRhcQgEgCAAgEQgBgEACgEQAUgfArAUQADABACAEQABAEgCAEQgBAEgEABQgEACgEgCQgZgMgMAQQgDAEgEABIgBAAQgEAAgCgCg");
	this.shape_5.setTransform(23.6857,65.1124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(13));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F48B73").s().p("AgCAmIgDgDIAAgEIACgDIADgFIACgEIACgEQACgDgCgEQAAgJgEgLIAAADQgFAGgEAIIgDAGIgBADIgBADQgBAEgDAAIgEAAIgDgEQAAgDABgFIAGgKQAGgNAGgHQAIgLAKgEQAFgCADABQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEADIgCAAIgBABIgIADIgBACIAAACIAGAPQACAFAAAGQAAAHgCAFIgEAHIgEAGIgBACIgDACIgDACIgCgBg");
	this.shape_6.setTransform(62.0005,83.9916,1.4545,1.4545);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3C5A9").s().p("AgGGeQAChQhagrQiqg7gdhvQgchvAAiCQABiCAdh3IAchSIAEAFQAEAFAtAWQAsAVBmAOQBcAMBTAOQB7AigUBiQAAAHgHAaIgSBKQgLAtADBhQATADASg4QALgcATgJIAEgCQALgDALABQAKADALAIQAJAGAJALIAAABQAHAPABARQACAOgEARQgIAkguAjQgbAUgVgIIAWEkQgSAjhRAQQgUAFgTAAQg7AAgwgmgADGBbIAAAAIgCgCIACACg");
	this.shape_7.setTransform(36.6347,81.6559);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#804F30").s().p("AELEdIAAgBIAAgCIALgWQAIgTAKgiQALgnAGgPQAHgRAIgEQAIAHABAMQACAHgCAPQgCAPgIAhQgRA5gVAdIAAAAQgIAJgGABQgBgRgHgPgAC+C1IAEgTQAHgOABgHQADgIACgCQADgDAEAAQAEABACADQADAEgCAIQgEAjgNBEIgCANQgTAJgLAcQADg2APg+gADkEAIALghQARg3AJhVQADgVACgKQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQABAAAAAAQAAAAABABQAAAAABABQAEAMABASQAGBWggBUIgHAQQgLgIgKgDgAjiiBQhGgXgkg9QgHgJADgFQACgFAEgBQAFgCAEADQAFABAJALQAoAwA8ASQAXAHAnAFQAzAFAOACIAHADQAEADgCAEQgBACgEACQgFACgLABQgYAEgYAAQguAAgogPgAjfjBQgygMgWgoQgEgHABgEQACgEAEgBQAEgCAEACQADAAAKALQAgAiA6gCQAhgCA/gVQAKgEADAGQACAEgGAIQgUATgmALQgcAIgZAAQgTAAgRgEgAjSj3QgEgCgBgDQgCgEACgEQACgEAKgBQAkgCAygeQASgMAMgEQAJgDAGAAIABABQgIARgPAPIgPALQglAZgjAFIgKABQgMAAgHgGg");
	this.shape_8.setTransform(41.2401,48.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},1).wait(13));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E442A").s().p("AAvH0QgsgrhAg4QhDg6g1hAQgvg7gmhBQgrhKgqhFQgrhDgDhOQgCgzAOg3QgTgYgOgZQgRghgDgbIAAgCQgGgQAGgTQAGgRANgMQAZgUAogCIAjABIASABQAvgKBPgcQA/gWAtgKQGIhGBuGRQAaB+hDCsIgWAwQg7CAhEBWQhDBXhEAcQghANgQAAQgRAAADgPg");
	this.shape_9.setTransform(45.8606,58.5714);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,7.1,88.39999999999999,119.7);


(lib.PlastSuperHeroja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E4E8B").s().p("AIxYNQhNi9i2gxQi2gxjlEZQjRjei7iAQjlh0jgCBIggACQBWlIBnpYQBnpWgSoNQgSoMgsiBIgjhiQLRAJHqHmQB5CgBRC/QCEE2B/E4QBBCbAeCpQA3EtgaEvQgUDshqDRQg/B9hXBuQg8BKhGAnQgGgVgKgZg");
	this.shape.setTransform(77.4923,243.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E4E8B").s().p("AiyXGQkMm+oSBZQE3w9AvwSQAQllhMkwQKDALHKGHQCYC0BxD/QEsJxgLKlQABKklvIIQkyonnjFpg");
	this.shape_1.setTransform(64.8333,250.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E4E8B").s().p("AHmXmQj+iUneA7QgiiDh1iIQh1iIjMgcQjNgbhMASIgFgFQCVkWBcm3QBcm1BnoDQBknxhKpPQJqALHAFsQAeAmAcAqQDCEgBQETQBPESAiEcQAhEbADEuQACEtg0E8Qg0E8i0EVQhBBjhKBdQBDiVilh7gAjeW3QANAEgMAAIgBgEg");
	this.shape_2.setTransform(51.6172,262.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E4E8B").s().p("AHKYrQkFh0mpBcQj6ogn7CFQBMnnB1mMQB0mLB2nkQBynVggp5QJLAKGyFIQFtGxApKLQCSQ8nNOnQgXhKibhEg");
	this.shape_3.setTransform(44.7244,256.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E4E8B").s().p("AiXY/QgMgVgIAYQk4oVngC3QAGqFDkozQFWwDgKrNQIhAIGdEZQGeGJgLNtIAAAKQgCOlkxODQjxjCo3Bcg");
	this.shape_4.setTransform(36.2512,254.0125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3E4E8B").s().p("Ah8ZjQlBo8oDDyQgaqEDqp9QF1v6AbrMQIbAHGbETQFRFDAcKSQACGag9EaQiCLJiMLxQjgjUoWCIg");
	this.shape_5.setTransform(31.5599,255.0125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E4E8B").s().p("AIXdcIABACIgCAAIABgCgAhTXiQiqkrjagzQj+g7jdBwQhSrmEFpkQFPsRBktMIAMhvIAPAAQIGAHGQD+QBEBMA5BoQCJD3AuCMQAuCLAADjQAADkguFVQgtFUjIKrQhoFjA9ErQkdj8mvDLg");
	this.shape_6.setTransform(26.6956,272.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E4E8B").s().p("AjYYTIgCgBIgCgCQmbmEliAmQhHwZEsokQG3r+ALohIARAAQHyAHGFDrQDNCtBjEjIAFAPQA2CZAWDFIACAKIACASQA+Jpj0KAIAAADQjJHtguIxQlFjCnBAqg");
	this.shape_7.setTransform(25.1282,254.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3E4E8B").s().p("ACrXnQjhhdkkBOQnNpxjJD3QhksUB9nZQAehnAphlQBXjVCFi8QCYjWCGjgQBNiCAriTQAbhbgPhfQgFghgFgXIAjABQI1AHGpEtQCpDEBbFOQBDERgTIeQAADvhiDsQiIEwiIFjQiIFkgQELQjYiKiMg5g");
	this.shape_8.setTransform(21.0771,254.4625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E4E8B").s().p("ABXXQQjHhdkEA/QlYoalDBdQhZqbCWmHQBCjMBNisQBNirCTi3QCTi3BSiuQBSiuAShxQAShxgChYQgCgngDgeIACAAQJdAIG8FYQCCCrBLEAQBsEVgYJHQgZEChMDpQhjE0imFhQimFgicDsQhehujIhcg");
	this.shape_9.setTransform(23.0928,252.9244);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3E4E8B").s().p("AEKZRQibiFjfg2Qjfg2h+gIQhNi0iqiZQh9hxjpgzQgskEA8ljQA8lhDAksQDAksCjjYQAzhEAkhPQAshkAVhuQAji0gHi5IAAgdQKAAPHJGLQBABgApBvQA5CbAiCjQAlCtANCvQAPDLgaEYQgbEZiWEyQiWEzhsDSQhtDSjTD5QgRgWgfgag");
	this.shape_10.setTransform(24.8062,250.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E4E8B").s().p("ABnX9QgugxiAhOQiBhOlNgHQgJhhh7ivQh6iuk1iFQgMjpBXlAQBWk+D5kHQD6kGBikOQBikOgMjeIgJivQJxAVHCGCIAfAyQBZCTAvCaQAvCaAeCXQAfCYAIEQQAIEPhHD8QhID9h6DaQh7DbjbD4QjcD4g1A5Ih6iBgAka56IADgEIgCAPIgBgLg");
	this.shape_11.setTransform(26.5794,243.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3E4E8B").s().p("AjnTFQjmhaiaBOQgklNj9jQQg2gtiSgQQBFppEukJQEvkJCCkiQB7kPhVnGQKXAbHPG7QAnBKAdBTQBbD/AxELQAfCkACCqQABCIgMCKQgbFFi/EkQi/EjjCDGQjDDGhiAyQi9jxjwheg");
	this.shape_12.setTransform(28.5083,239.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E4E8B").s().p("AkaUEQh9gPh/AQIgfAFQiHkdkBiwQg+gqhGggQAvn/EUmoIC5kfQDMk/AMl5QAHjNgpjGQKbAYHSG8IAMASQGdKbhTMPQglFZi1EsQjNFSlGDWQkfi3lChkg");
	this.shape_13.setTransform(41.3195,240.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E4E8B").s().p("AAYVLQjagPi7CVQicj8h5hvQiWiLjKgZIg4gMQgkgaA6lVQA6lVCxlMQCwlOA+jqQA+jrAPhuQAXilgTiMQgTiNgPhAIgNgyQK2AVHeHYIAOAPQASAYANAUQA+BjBNBrQBMBrAtCAQAsCAAnDcQAoDdALB3QAMB5gIBwQgIBwgyD2QhAE/jPEAQhOBgjdC4QiailkQgsg");
	this.shape_14.setTransform(53.7598,240.4125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3E4E8B").s().p("ADfWaQkVhpkJCZQkYjyh/hgQh+hfi/gPQATnrC/pLQC/pMAliEQAmiEAOhuQAXilgTiMQgTiNgPhBIgNgxQK2AVHeHYIAOAPQASAXANAVQA+BjBNBrQBMBrB2GQQB1GPgkHkQgzGIh4C0Qi7EYi1CFQiJhZiIgsg");
	this.shape_15.setTransform(59.6522,240.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3E4E8B").s().p("AkNXmQi6j2j2hQQj2hQg+AEIFp+gQAWkIgHi5IgJg+QgHg0gHgUQgIgTgdh3QK/ASHfHZIAPAPQASAXAMAVQA+BiBKB/QBJB+AyB9QAxB+BHDxQBGDwAUCiQAUEPgjEZQgjEZhuC0QhvC0i1CPQndk4lXEAg");
	this.shape_16.setTransform(68.3202,240.8375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,77,260.9,384.1);


(lib.Superdevojkasenka = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.267)").s().p("Ag1A8QgNgggqgHQgqgIgHgcQgLgrAhgUQAhgUA9AKQA9ALA2gHQAqgHAbAPQAaAPgNAtQgIAdgUAnQgTAohLAAQhKAAgNggg");
	this.shape.setTransform(16.0543,9.2083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.1,18.4);


(lib.SDevojkaplast = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Aj3ETQhpgogxhnQglhPgThSQgUhUgtgmQgtgmhKgQQAUg9BOgQQCHgYBuBNQAqAeAxARQBIAYBLgQQA2gMARg0IAPgtQBZApBcAOQB7AUCjgCQBJAABJgFIADgBIAAC1IgBABQhCBNhjAKQhlAMhlARQhUALhMAiQgyAWgrAjQg6AwhDAjQgnAVgoAAQggAAgggNg");
	this.shape.setTransform(60.3875,24.902);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AjWEMQgtgKglgbQgggYgbgfQgdgigVgmQgWgpgUgqQgVgsgfgkQgcghgkgZQgmgZgsgNQALgNAXgYQAYgYAqgQQAqgPArABQArABArAJQAqAIAsASQAsARAnAIQAnAJAfACQAeACAXgCQAnAAAfgYQAkgdAMgwQAhAMAiAIQA0ANA4AIQA7AJA5AFQA0AEA1AAQA3ABA3AAQA0gBA0gEIAADTQgJAJgLAJQgdAYgkAOQguARgyAEIhkAHQgrAFgpAIQgtAJgsANQgoAOglATQgnAUgiAcQgkAcglAWQgrAagyAHIgbACQggAAgfgIg");
	this.shape_1.setTransform(59.975,26.3653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AiXEKQhggShQg9Qgwgkgcg3QguhbhWgzQg1ghg+gZQAhgpBYgqQBYgrB2AVQB3AUBqALQBAAFAugoQASgPAXgnQDoA1C6gKQBagFBagIIAADvQgxA2hRAOQhUAPhXAGQheADhXAiQhYAhhIA8Qg3AvhGAAQgRAAgSgCg");
	this.shape_2.setTransform(59.45,28.0421);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AmDBqQhkiTikgLQCdigFgAgQCDAUBMhrQDFBAGGghIAADsQhfBWjxAWQiBggi/CgQgVARgZAHQghAIgfAAQiOAAiDiig");
	this.shape_3.setTransform(59.4125,29.0996);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AifEFQhYgXhBg+Qgvgsgpg0Qg8hNhggDQgqgBg8ANQBAhFB9g6QB8g5DJgIQBeAGBMgqQAUgLAegoQBqAnBkAGQCvAFDKgZIAAD+QgPANgTALQhMAvhGAHQhgAOhfATQg3gxg+AtQg9AthXA9Qg8ArhCAAQgbAAgdgHg");
	this.shape_4.setTransform(58.725,29.9639);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AiND2QhUgOhRgbQhQgbhSgZQhRgZhLgqIg1ghQAzgVA0gfQA0gdBTg0QBTg0BngOQBngNBigOQBFgMAjgWQAkgWAPgWQBdAjBeAFQBjAHBkgGQBXgEBYgOIAOgCIAAElIgSAMQhGAphNASQhXAUhYANQhTAKhEAWQhDAWhZATQgyAMgzAAQgkAAgjgGg");
	this.shape_5.setTransform(56.825,28.841);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AjBDOQg8AKg6ABQiSACiDg+QgygXgngoQgOgOgLgUQBdAMBNgzQA2giA0gnQCHhmCogSQA8gDA8gJQAxgJAtgbQAbgPAZgTQCQAxCYgHQCAgMCBgNIAHAAIAAEdQgcAdgkAWQhOAuhVAfQhVAghZAOQhWAPhYAHQg+AHg7ADQgzhRiVAhg");
	this.shape_6.setTransform(54.325,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AgNDGQhHgphkAnQhlAnhTAOQhTAPhVgiQhOggg9g7QgTgTgcgoQBWgBBGgXQBfghBMg8QBMg9BFgrQBFgrCOgFQCNgFAfgaQAfgaAOgPQCBAiCTgCQBrgCBpgRIA5gGIAAEpQgrAihDAoQhMAshSAZQhSAZhSARQhSARhVAJQg7AFgSADQAJgXhFgpg");
	this.shape_7.setTransform(52.3375,31.1875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("ApjDkQhUgxgvhvQA1APA8ADQA9ADA0gOQA1gNA0gyQA0gxA9g/QA+g/BJgbQBKgaB4AAQB5AAAWgMQAVgMAOgjQCvAyFJgjIAegFIAAE0QiFBXiVA4QiiA9jQAJQAAgnhLgrQhagphJAbQgwAcgsAmQg4AvhKADIgJAAQiXAAhSgwg");
	this.shape_8.setTransform(50.275,33.2271);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("Aj6FTQhSAAhNgZQhBgXg7geQg7gdgvgsQgigggOguQBGAVA8gnQBcg8BNhPQBIhKBXg1QBIgsBUgOQBQgLBQgUQA1gNAdgtIALgSQBRAcBWAJQDWAdB/gRIAACaQgTAjgcAcQg4A5hLAdQiIA3iFA4QhKAeg/AwQhZBFhnAnQhNAehSAAIgDgBg");
	this.shape_9.setTransform(55.775,40.8004);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AnuFBQhRgvhUhhQCVAhBKgwQAsgcANgyQAZhbAxhRQAphEBCgqQB2hLCKgVQBGgLA2g2QAwAYC9gJQCZgIBYgaIAABnIgJATIgQAcQhCBYhsAeQhqAdhaA+QhZA8hJBTQhQBahXBPQhVBMhzAKIgNAAQh1AAhkg6g");
	this.shape_10.setTransform(58.625,46.4845);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AmjE9QhRgkgvhXQgvhXgWhKQBSgOA2gWQA2gXA8gpQA8gpBigzQBhg0BZgqQAxgYAuglIA/AKQBRAGBCgGQB3AMBcgVQBFgPA2gQIAABXQgOAYgTAWQg5A/hHAZQhHAYhNAjQhOAjhGBJQhHBJg2A9Qg2A9hHAvQhHAuhYALQgTACgTAAQhFAAg/gcg");
	this.shape_11.setTransform(62.875,41.9385);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("Ak7FEQh+gWgnhjQgmhigui4QDVAJBqg0QBrgzA8g8QAUgVARgXQD4AWCrgZQBhgMBagkIAABcQgsBJhcAZQhuAfhjA2QhjA2hABgQhABihZBKQhHA8hdAAQgaAAgdgFg");
	this.shape_12.setTransform(68.0875,38.5703);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AkGEVQgygBgzgXQgygXgcgoQgbgogSgyQgTgygMgxQgMgwgFggQgEgfADgLQBtAkBbgWQBbgXBJgkQBJglASgTIAmgnIBmAKQAnAEAnAAQArABAsgCIBjgBQAngBAngFQAlgCAlgHIA9gMIAABcIgNATQgTAbggAXQghAXg1AQQg1AQg2AUIhiAmQgsAQgmAlQgnAkgpAzQgoAzgtAhQgsAhg0ALQgxALgvAAIgFAAg");
	this.shape_13.setTransform(70.882,33.3639);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AmaCXQhihoAJjxQAAACA8AdQA9AfBygMQBygLApgwIAmgxQCIAUBfAGQBvACBxgIQA6gGA7gDIAABvQgRAWgXAQQiCBbieAYQhcAMg5BMQg3BMgyAfQgxAghbADIgEAAQhZAAhghmgAnzjCIAAAAIAAAAg");
	this.shape_14.setTransform(74.5394,29.2279);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("AkfEBQg3gWgogtQgjgogbguQgegzgQg6IgghvQgQg2gegsIgIgMQAOgDBNgFQBMgFBnAmQBoAmBBgMQBCgNAYggQAZgfgCgZQBWAbBQALQBPALBEABQBFABBOgCQBCgBBLABIAACcQgVAWgZAQQgxAfg4ANQg1ARgxAJQgxAJgvAKQgvALgnARQgnAShBA5QhBA4gwAfQgvAeg4ABIgGAAQg2AAgxgUg");
	this.shape_15.setTransform(66.9375,27.4023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.9,148.6,88.30000000000001);


(lib.Superdecaksenka = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.267)").s().p("AhTA3QhHgcgZgmQgZgnA4gNQA3gNBGANQBGALAagMQAZgNAyAMQAxANgMAhQgOAggtAQQguARguATQgTAHgVAAQgiAAgrgRg");
	this.shape.setTransform(18.7638,7.1827);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.5,14.4);


(lib.Serverp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DC8F6").s().p("AhRMxIAZgOIAAAdIgZAPgAAcLRIAVgMIAAAfIgVANgAhOJqIAagOIAAAeIgaAPgAgCIDIAUgNIAAAcIgUANgAgCF9IAVgNIAAAeIgVAMgAhNFuIAZgPIAAAcIgZAPgAA/EbIAUgMIAAAcIgUALgAgFC9IAUgMIAAAdIgUANgAhRCvIAZgPIAAAbIgZAPgAA7CXIAVgMIAAAeIgVALgAgFCCIAUgMIAAAbIgUANgAgFgEIAUgNIAAAdIgUANgAhRgTIAZgPIAAAcIgZAOgAgFg/IAUgNIAAAcIgUAMgAhNieIAZgPIAAAeIgZAPgAhNjZIAZgPIAAAcIgZAPgAAfj+IAWgNIAAAgIgWAMgAgCkGIAVgMIAAAbIgVANgAgCmNIAVgNIAAAeIgVANgAhNmbIAZgQIAAAcIgZAPgAA/mzIAUgMIAAAeIgUALgAgCnIIAVgMIAAAbIgVAMgAA/nvIAUgLIAAAbIgUAMgAhRpaIAZgQIAAAcIgZAPgAAdqAIAUgMIAAAfIgUANgAA7quIAVgLIAAAbIgVAMgAgqsXIAYgOIAAAfIgYAPgAAdtBIAVgNIAAAgIgVAMg");
	this.shape.setTransform(92,131.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5DC8F6").s().p("AhRMxIAZgOIAAAdIgZAPgAgrL8IAZgOIAAAeIgZAPgAAcLRIAVgMIAAAfIgVANgAhOJqIAagOIAAAeIgaAPgAgoI1IAZgOIAAAfIgZAOgAgCIDIAUgNIAAAcIgUANgAA/HdIAUgMIAAAbIgUAMgAgCF9IAVgNIAAAeIgVAMgAhNFuIAZgPIAAAcIgZAPgAA/FWIAUgLIAAAdIgUAMgAgCFCIAVgNIAAAbIgVANgAA/EbIAUgMIAAAcIgUALgAhRDqIAZgPIAAAeIgZAPgAgFC9IAUgMIAAAdIgUANgAhRCvIAZgPIAAAbIgZAPgAA7CXIAVgMIAAAeIgVALgAAdCKIAUgNIAAAgIgUAMgAgFCCIAUgMIAAAbIgUANgAgFgEIAUgNIAAAdIgUANgAhRgTIAZgPIAAAcIgZAOgAAdg4IAUgMIAAAfIgUANgAgFg/IAUgNIAAAcIgUAMgAhNieIAZgPIAAAeIgZAPgAgojUIAZgOIAAAfIgZAPgAhNjZIAZgPIAAAcIgZAPgAAfj+IAWgNIAAAgIgWAMgAgCkGIAVgMIAAAbIgVANgAgCmNIAVgNIAAAeIgVANgAhNmbIAZgQIAAAcIgZAPgAA/mzIAUgMIAAAeIgUALgAAfnBIAWgMIAAAgIgWAMgAgCnIIAVgMIAAAbIgVAMgAA/nvIAUgLIAAAbIgUAMgAgrpVIAZgPIAAAgIgZAOgAhRpaIAZgQIAAAcIgZAPgAAdqAIAUgMIAAAfIgUANgAA7quIAVgLIAAAbIgVAMgAgqsXIAYgOIAAAfIgYAPgAhQscIAZgQIAAAcIgZAPgAA8s0IAUgMIAAAeIgUALgAAdtBIAVgNIAAAgIgVAMg");
	this.shape_1.setTransform(92,131.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5DC8F6").s().p("AhRMxIAZgOIAAAdIgZAPgAhOJqIAagOIAAAeIgaAPgAgCIDIAUgNIAAAcIgUANgAgCF9IAVgNIAAAeIgVAMgAA/EbIAUgMIAAAcIgUALgAgFC9IAUgMIAAAdIgUANgAhRCvIAZgPIAAAbIgZAPgAA7CXIAVgMIAAAeIgVALgAgFCCIAUgMIAAAbIgUANgAgFgEIAUgNIAAAdIgUANgAhRgTIAZgPIAAAcIgZAOgAgFg/IAUgNIAAAcIgUAMgAhNieIAZgPIAAAeIgZAPgAhNjZIAZgPIAAAcIgZAPgAgCkGIAVgMIAAAbIgVANgAgCmNIAVgNIAAAeIgVANgAhNmbIAZgQIAAAcIgZAPgAA/mzIAUgMIAAAeIgUALgAgCnIIAVgMIAAAbIgVAMgAA/nvIAUgLIAAAbIgUAMgAAdqAIAUgMIAAAfIgUANgAA7quIAVgLIAAAbIgVAMgAgqsXIAYgOIAAAfIgYAPgAAdtBIAVgNIAAAgIgVAMg");
	this.shape_2.setTransform(92,131.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).to({state:[{t:this.shape_2}]},8).to({state:[{t:this.shape_1}]},8).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_2}]},8).wait(8));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C424D").s().p("AhRNHIAZgOIAAAeIgZAPgAgFMbIAUgMIAAAdIgUANgAgrMSIAZgOIAAAeIgZAQgAhRMNIAZgQIAAAcIgZAQgAA7L1IAUgLIAAAdIgUALgAAcLoIAVgNIAAAgIgVAMgAgFLhIAUgOIAAAcIgUANgAA7K6IAUgMIAAAbIgUAMgAhOKAIAagOIAAAeIgaAPgAgCJUIAUgMIAAAdIgUANgAgoJLIAZgOIAAAfIgZAPgAhOJGIAagPIAAAcIgaAPgAA/IuIAUgLIAAAdIgUALgAAfIgIAWgMIAAAgIgWAMgAgCIaIAUgOIAAAcIgUANgAA/HzIAUgMIAAAbIgUAMgAhNHAIAZgQIAAAeIgZAPgAgCGTIAVgNIAAAeIgVAMgAgoGKIAZgPIAAAgIgZAOgAhNGEIAZgPIAAAcIgZAPgAA/FsIAUgLIAAAdIgUAMgAAfFgIAWgNIAAAfIgWANgAgCFYIAVgMIAAAbIgVAMgAA/ExIAUgLIAAAbIgUAMgAhREAIAZgPIAAAeIgZAQgAgFDTIAUgMIAAAdIgUANgAgrDKIAZgOIAAAfIgZAPgAhRDFIAZgPIAAAbIgZAQgAA7CtIAVgLIAAAdIgVALgAAdCgIAUgNIAAAgIgUAMgAgFCZIAUgNIAAAbIgUANgAA7ByIAVgMIAAAbIgVANgAhRA+IAZgPIAAAdIgZAQgAgFARIAUgNIAAAeIgUANgAgrAIIAZgOIAAAfIgZAOgAhRACIAZgNIAAAbIgZAOgAA7gUIAVgMIAAAeIgVALgAAdgiIAUgMIAAAfIgUANgAgFgpIAUgMIAAAbIgUAMgAA7hQIAVgLIAAAbIgVAMgAhNiHIAZgQIAAAeIgZAPgAgCi0IAVgNIAAAeIgVAMgAgoi9IAZgPIAAAgIgZAOgAhNjDIAZgOIAAAbIgZAPgAA/jaIAUgMIAAAdIgUAMgAAfjoIAWgMIAAAfIgWANgAgCjwIAVgLIAAAbIgVAMgAA/kWIAUgLIAAAbIgUALgAhNlLIAZgOIAAAeIgZAPgAgCl3IAVgMIAAAdIgVANgAgomAIAZgOIAAAfIgZAPgAhNmFIAZgPIAAAbIgZAQgAA/mdIAUgLIAAAdIgUALgAAfmrIAWgMIAAAgIgWAMgAgCmxIAVgNIAAAbIgVANgAA/nZIAUgLIAAAbIgUAMgAhRoJIAZgPIAAAeIgZAPgAgFo2IAUgMIAAAdIgUANgAgro/IAZgPIAAAgIgZAOgAhRpEIAZgPIAAAcIgZAOgAA7pcIAVgMIAAAeIgVALgAAdpqIAUgMIAAAfIgUANgAgFpxIAUgNIAAAcIgUAMgAA7qYIAVgLIAAAbIgVAMgAhQrLIAZgPIAAAeIgZAQgAgEr4IAUgNIAAAfIgUAMgAgqsBIAYgOIAAAfIgYAPgAhQsGIAZgQIAAAcIgZAQgAA8seIAUgLIAAAdIgUALgAAdsrIAVgNIAAAgIgVAMgAgEsyIAUgOIAAAcIgUANgAA8tZIAUgMIAAAbIgUAMg");
	this.shape_3.setTransform(92,129.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(48));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#492364").s().p("AkhQFIEvizIAagPIDwiMIAAirIAHgFIAAC0IpAFRgAkeM+IE8i6IANgIIDviMIAAirIAIgEIAAC0IpAFRgAkeJ8IE8i6IANgIIDviMIAAiqIAIgFIAAC0IpAFRgAkhG9IEvizIAagPIDwiMIAAiqIAHgEIAACzIpAFRgAkhD6IEviyIAagPIDwiMIAAiqIAHgFIAAC0IpAFQgAkeA0IEwixIAZgPIDviNIAAirIAIgEIAAC0IpAFQgAkeiOIE8i5IANgIIDviMIAAirIAIgFIAAC1IpAFRgAkhlNIE8i5IANgIIDwiNIAAiqIAHgFIAAC0IpAFRgAkhoPIE8i5IANgIIDwiMIAAirIAHgEIAAC0IpAFQg");
	this.shape_4.setTransform(76.6,138.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#34046F").s().p("AiZOWIEOigIAAAWIkOCfgAiZNmIEOigIAAAUIkOCggAiZM5IEOigIAAAVIkOCggACKJxIANgHIAACpIgNAIgAiWLQIEOihIAAAVIkOCggAiWKgIEOigIAAATIkOCggAiWJyIEOifIAAAUIkOChgACNGqIANgIIAACqIgNAIgAiWINIEOifIAAAVIkOCggAiWHeIEOigIAAATIkOCggAiWGxIEOihIAAAWIkOCfgACNDpIANgIIAACqIgNAIgAiZFOIEOigIAAAWIkOCfgAiZEfIEOihIAAAUIkOCggAiZDxIEOigIAAAVIkOCggACKApIANgHIAACqIgNAHgAiZCLIEOieIAAAUIkOCggAiZBbIEOieIAAAUIkOCegAiZAvIEOifIAAAVIkOCfgACKiYIANgIIAACpIgNAIgAiWg6IEOifIAAAUIkOChgAiWhqIEOigIAAAUIkOCggAiWiXIEOigIAAAWIkOCfgACNleIANgJIAACrIgNAIgAiWj8IEOigIAAAVIkOCggAiWksIEOifIAAATIkOCggAiWlZIEOigIAAAVIkOCggACNohIANgIIAACqIgNAIgAiZm7IEOifIAAAUIkOCggAiZnrIEOigIAAAUIkOCfgAiZoYIEOigIAAAWIkOCfgACKrgIANgIIAACqIgNAIgAiZp9IEOigIAAAWIkOCfgAiZqtIEOigIAAATIkOChgAiZraIEOigIAAAVIkOCggACKuiIANgIIAACqIgNAIg");
	this.shape_5.setTransform(65.475,143.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3656B4").s().p("AkdNcIE7i6IAACqIgMAIIkvCygAkFPHIAAAVIEPifIAAgVgAkFOXIAAAUIEPigIAAgUgAkFNqIAAAWIEPigIAAgWgAAsKbIDviOIAAABIAACqIjvCNgAkaKWIE7i7IAACrIk7C5gAkCMBIAAAVIEPigIAAgVgAkCLRIAAATIEPigIAAgTgAkCKjIAAAWIEPigIAAgVgAAvHUIDviOIAAABIAACqIjvCNgAkaHUIE7i6IAACqIk7C5gAkCI/IAAAVIEPigIAAgVgAkCIPIAAATIEPigIAAgTgAkCHiIAAAVIEPigIAAgVgAkdEVIE7i7IAACqIgMAIIkvCygAkFF/IAAAWIEPigIAAgVgAkFFQIAAATIEPigIAAgTgAkFEiIAAAWIEPigIAAgWgAAvESIDviNIAAAAIAACrIjvCMgAAsBTIDviMIAACpIjvCNgAkdBSIE7i5IAACpIgMAHIkvCzgAkFC9IAAAVIEPigIAAgVgAkFCNIAAAUIEPigIAAgTgAkFBgIAAAVIEPifIAAgVgAAshvIDviNIAACrIjvCLgAkahzIE7i6IAACqIgMAHIkvCygAkCgIIAAAUIEPifIAAgVgAkCg4IAAATIEPigIAAgTgAkChlIAAAVIEPigIAAgVgAAvk1IDviNIAACrIjvCMgAkak2IE7i6IAACqIk7C6gAkCjLIAAAWIEPigIAAgVgAkCj7IAAAUIEPigIAAgTgAkCkoIAAAVIEPifIAAgWgAkdn1IE7i6IAACqIk7C6gAkFmKIAAAVIEPifIAAgVgAkFm6IAAAUIEPigIAAgUgAkFnnIAAAVIEPifIAAgWgAAvn4IDviNIAAABIAACqIjvCMgAAsq3IDviNIAACrIjvCMgAkdq3IE7i6IAACqIk7C6gAkFpMIAAAVIEPifIAAgVgAkFp8IAAAUIEPigIAAgUgAkFqpIAAAVIEPifIAAgWgAAst5IDviMIAACqIjvCMg");
	this.shape_6.setTransform(76.225,138.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(48));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#213B89").s().p("An+gyIAAg0IBxBCIAAgBIFAC4II5lPIATgLIAAA1IpMFag");
	this.shape_7.setTransform(53.2,236.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-112.4,0,112.3).s().p("Akzr4IJnlrIAAdbIguAcIo5FQg");
	this.shape_8.setTransform(76.225,138.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34046F").s().p("Aj4A2IAbgPICeBcIgbAPgAi4ARIAagPICdBcIgaAPgAh1gWIAagPICeBaIgbAQgAg+g3IAbgPICdBcIgaAOgAAEheIAbgQICdBcIgaAQgABBiCIAagPICeBbIgbARg");
	this.shape_9.setTransform(57.95,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#76C3F6").s().p("AoHAzIJWljIG5D+IpZFjgAjMBIICeBbIAbgPIiehcgAiMAjICcBcIAagQIichcgAhJgFICdBbIAbgPIiehbgAgSglICeBbIAagPIiehbgAAwhNICeBbIAagOIidhcgABthxICdBdIAbgQIiehbg");
	this.shape_10.setTransform(53.55,30.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A5D8F9").s().p("AoWhKIAAgDIAPgIIG2D9IJaliIAOAIIAAADIpnFqg");
	this.shape_11.setTransform(53.525,44.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],5.1,1.3,4.2,193).s().p("AoBQIIAAg0IAIAEIgdgRIAA9dIJmlsIHHEGIAAdfIguAbIATgKIAAA0IpMFbg");
	this.shape_12.setTransform(53.525,128.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.1,256.6);


(lib.Serverc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.098)").s().p("Ah2tVIDtiNIAAc4IjtCNg");
	this.shape.setTransform(93.2,128.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).wait(11));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhRMxIAZgOIAAAdIgZAPgAAcLRIAVgMIAAAfIgVANgAhOJqIAagOIAAAeIgaAPgAgCIDIAUgNIAAAcIgUANgAgCF9IAVgNIAAAeIgVAMgAhNFuIAZgPIAAAcIgZAPgAA/EbIAUgMIAAAcIgUALgAgFC9IAUgMIAAAdIgUANgAhRCvIAZgPIAAAbIgZAPgAA7CXIAVgMIAAAeIgVALgAgFCCIAUgMIAAAbIgUANgAgFgEIAUgNIAAAdIgUANgAhRgTIAZgPIAAAcIgZAOgAgFg/IAUgNIAAAcIgUAMgAhNieIAZgPIAAAeIgZAPgAhNjZIAZgPIAAAcIgZAPgAAfj+IAWgNIAAAgIgWAMgAgCkGIAVgMIAAAbIgVANgAgCmNIAVgNIAAAeIgVANgAhNmbIAZgQIAAAcIgZAPgAA/mzIAUgMIAAAeIgUALgAgCnIIAVgMIAAAbIgVAMgAA/nvIAUgLIAAAbIgUAMgAhRpaIAZgQIAAAcIgZAPgAAdqAIAUgMIAAAfIgUANgAA7quIAVgLIAAAbIgVAMgAgqsXIAYgOIAAAfIgYAPgAAdtBIAVgNIAAAgIgVAMg");
	this.shape_1.setTransform(92,131.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhRMxIAZgOIAAAdIgZAPgAgrL8IAZgOIAAAeIgZAPgAAcLRIAVgMIAAAfIgVANgAhOJqIAagOIAAAeIgaAPgAgoI1IAZgOIAAAfIgZAOgAgCIDIAUgNIAAAcIgUANgAA/HdIAUgMIAAAbIgUAMgAgCF9IAVgNIAAAeIgVAMgAhNFuIAZgPIAAAcIgZAPgAA/FWIAUgLIAAAdIgUAMgAgCFCIAVgNIAAAbIgVANgAA/EbIAUgMIAAAcIgUALgAhRDqIAZgPIAAAeIgZAPgAgFC9IAUgMIAAAdIgUANgAhRCvIAZgPIAAAbIgZAPgAA7CXIAVgMIAAAeIgVALgAAdCKIAUgNIAAAgIgUAMgAgFCCIAUgMIAAAbIgUANgAgFgEIAUgNIAAAdIgUANgAhRgTIAZgPIAAAcIgZAOgAAdg4IAUgMIAAAfIgUANgAgFg/IAUgNIAAAcIgUAMgAhNieIAZgPIAAAeIgZAPgAgojUIAZgOIAAAfIgZAPgAhNjZIAZgPIAAAcIgZAPgAAfj+IAWgNIAAAgIgWAMgAgCkGIAVgMIAAAbIgVANgAgCmNIAVgNIAAAeIgVANgAhNmbIAZgQIAAAcIgZAPgAA/mzIAUgMIAAAeIgUALgAAfnBIAWgMIAAAgIgWAMgAgCnIIAVgMIAAAbIgVAMgAA/nvIAUgLIAAAbIgUAMgAgrpVIAZgPIAAAgIgZAOgAhRpaIAZgQIAAAcIgZAPgAAdqAIAUgMIAAAfIgUANgAA7quIAVgLIAAAbIgVAMgAgqsXIAYgOIAAAfIgYAPgAhQscIAZgQIAAAcIgZAPgAA8s0IAUgMIAAAeIgUALgAAdtBIAVgNIAAAgIgVAMg");
	this.shape_2.setTransform(92,131.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAcLsIAVgMIAAAfIgVANgAgCIeIAUgNIAAAcIgUAMgAgCGXIAUgMIAAAdIgUANgAhRDJIAZgOIAAAbIgZAPgAgFCdIAUgNIAAAcIgUAMgAgFAVIAUgMIAAAdIgUAOgAhOiDIAZgPIAAAeIgZAPgAgCjrIAUgMIAAAbIgUANgAgClyIAUgNIAAAeIgUAMgAA+nUIAUgLIAAAbIgUAMgAAcplIAVgNIAAAgIgVAMgAgrr8IAZgPIAAAgIgZAOg");
	this.shape_3.setTransform(92.025,128.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},4).to({state:[]},4).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[]},4).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[]},3).wait(1));

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#750000").s().p("AhRNHIAZgOIAAAeIgZAPgAgFMbIAUgMIAAAdIgUANgAgrMSIAZgOIAAAeIgZAQgAhRMNIAZgQIAAAcIgZAQgAA7L1IAUgLIAAAdIgUALgAAcLoIAVgNIAAAgIgVAMgAgFLhIAUgOIAAAcIgUANgAA7K6IAUgMIAAAbIgUAMgAhOKAIAagOIAAAeIgaAPgAgCJUIAUgMIAAAdIgUANgAgoJLIAZgOIAAAfIgZAPgAhOJGIAagPIAAAcIgaAPgAA/IuIAUgLIAAAdIgUALgAAfIgIAWgMIAAAgIgWAMgAgCIaIAUgOIAAAcIgUANgAA/HzIAUgMIAAAbIgUAMgAhNHAIAZgQIAAAeIgZAPgAgCGTIAVgNIAAAeIgVAMgAgoGKIAZgPIAAAgIgZAOgAhNGEIAZgPIAAAcIgZAPgAA/FsIAUgLIAAAdIgUAMgAAfFgIAWgNIAAAfIgWANgAgCFYIAVgMIAAAbIgVAMgAA/ExIAUgLIAAAbIgUAMgAhREAIAZgPIAAAeIgZAQgAgFDTIAUgMIAAAdIgUANgAgrDKIAZgOIAAAfIgZAPgAhRDFIAZgPIAAAbIgZAQgAA7CtIAVgLIAAAdIgVALgAAdCgIAUgNIAAAgIgUAMgAgFCZIAUgNIAAAbIgUANgAA7ByIAVgMIAAAbIgVANgAhRA+IAZgPIAAAdIgZAQgAgFARIAUgNIAAAeIgUANgAgrAIIAZgOIAAAfIgZAOgAhRACIAZgNIAAAbIgZAOgAA7gUIAVgMIAAAeIgVALgAAdgiIAUgMIAAAfIgUANgAgFgpIAUgMIAAAbIgUAMgAA7hQIAVgLIAAAbIgVAMgAhNiHIAZgQIAAAeIgZAPgAgCi0IAVgNIAAAeIgVAMgAgoi9IAZgPIAAAgIgZAOgAhNjDIAZgOIAAAbIgZAPgAA/jaIAUgMIAAAdIgUAMgAAfjoIAWgMIAAAfIgWANgAgCjwIAVgLIAAAbIgVAMgAA/kWIAUgLIAAAbIgUALgAhNlLIAZgOIAAAeIgZAPgAgCl3IAVgMIAAAdIgVANgAgomAIAZgOIAAAfIgZAPgAhNmFIAZgPIAAAbIgZAQgAA/mdIAUgLIAAAdIgUALgAAfmrIAWgMIAAAgIgWAMgAgCmxIAVgNIAAAbIgVANgAA/nZIAUgLIAAAbIgUAMgAhRoJIAZgPIAAAeIgZAPgAgFo2IAUgMIAAAdIgUANgAgro/IAZgPIAAAgIgZAOgAhRpEIAZgPIAAAcIgZAOgAA7pcIAVgMIAAAeIgVALgAAdpqIAUgMIAAAfIgUANgAgFpxIAUgNIAAAcIgUAMgAA7qYIAVgLIAAAbIgVAMgAhQrLIAZgPIAAAeIgZAQgAgEr4IAUgNIAAAfIgUAMgAgqsBIAYgOIAAAfIgYAPgAhQsGIAZgQIAAAcIgZAQgAA8seIAUgLIAAAdIgUALgAAdsrIAVgNIAAAgIgVAMgAgEsyIAUgOIAAAcIgUANgAA8tZIAUgMIAAAbIgUAMg");
	this.shape_4.setTransform(92,129.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(40));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E5597").s().p("AgHK5IAMgHIAACpIgMAIgAgEHyIAMgIIAACqIgMAIgAgEExIAMgIIAACqIgMAIgAgHBxIAMgHIAACqIgMAHgAgHhQIAMgIIAACpIgMAIgAgEkWIAMgJIAACrIgMAIgAgEnZIAMgIIAACqIgMAIgAgHqYIAMgIIAACqIgMAIgAgHtaIAMgIIAACqIgMAIg");
	this.shape_5.setTransform(80.075,136.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#504884").s().p("AkdNcIE7i6IAACqIgMAIIkvCygAkFPHIAAAVIEPifIAAgVgAkFOXIAAAUIEPigIAAgUgAkFNqIAAAWIEPigIAAgWgAAsKbIDviOIAAABIAACqIjvCNgAkaKWIE7i7IAACrIk7C5gAkCMBIAAAVIEPigIAAgVgAkCLRIAAATIEPigIAAgTgAkCKjIAAAWIEPigIAAgVgAAvHUIDviOIAAABIAACqIjvCNgAkaHUIE7i6IAACqIk7C5gAkCI/IAAAVIEPigIAAgVgAkCIPIAAATIEPigIAAgTgAkCHiIAAAVIEPigIAAgVgAkdEVIE7i7IAACqIgMAIIkvCygAkFF/IAAAWIEPigIAAgVgAkFFQIAAATIEPigIAAgTgAkFEiIAAAWIEPigIAAgWgAAvESIDviNIAAAAIAACrIjvCMgAAsBTIDviMIAACpIjvCNgAkdBSIE7i5IAACpIgMAHIkvCzgAkFC9IAAAVIEPigIAAgVgAkFCNIAAAUIEPigIAAgTgAkFBgIAAAVIEPifIAAgVgAAshvIDviNIAACrIjvCLgAkahzIE7i6IAACqIgMAHIkvCygAkCgIIAAAUIEPifIAAgVgAkCg4IAAATIEPigIAAgTgAkChlIAAAVIEPigIAAgVgAAvk1IDviNIAACrIjvCMgAkak2IE7i6IAACqIk7C6gAkCjLIAAAWIEPigIAAgVgAkCj7IAAAUIEPigIAAgTgAkCkoIAAAVIEPifIAAgWgAkdn1IE7i6IAACqIk7C6gAkFmKIAAAVIEPifIAAgVgAkFm6IAAAUIEPigIAAgUgAkFnnIAAAVIEPifIAAgWgAAvn4IDviNIAAABIAACqIjvCMgAAsq3IDviNIAACrIjvCMgAkdq3IE7i6IAACqIk7C6gAkFpMIAAAVIEPifIAAgVgAkFp8IAAAUIEPigIAAgUgAkFqpIAAAVIEPifIAAgWgAAst5IDviMIAACqIjvCMg");
	this.shape_6.setTransform(76.225,138.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AiIN+IEOigIAAAWIkOCfgAiINOIEOigIAAAUIkOCggAiIMhIEOigIAAAVIkOCggAiFK4IEOihIAAAVIkOCggAiFKIIEOigIAAATIkOCggAiFJaIEOifIAAAUIkOChgAiFH1IEOifIAAAVIkOCggAiFHFIEOifIAAATIkOCggAiFGYIEOigIAAAWIkOCfgAiIE2IEOigIAAAWIkOCfgAiIEHIEOihIAAAUIkOCggAiIDZIEOigIAAAVIkOCggAiIBzIEOieIAAAVIkOCfgAiIBDIEOieIAAAUIkOCegAiIAXIEOifIAAAVIkOCfgAiFhSIEOifIAAAUIkOChgAiFiCIEOigIAAAUIkOCggAiFivIEOigIAAAWIkOCfgAiFkUIEOigIAAAVIkOCggAiFlEIEOifIAAATIkOCggAiFlxIEOigIAAAVIkOCggAiInTIEOifIAAAUIkOCggAiIoDIEOigIAAAUIkOCfgAiIowIEOigIAAAWIkOCfgAiIqVIEOigIAAAWIkOCfgAiIrFIEOigIAAATIkOChgAiIryIEOigIAAAVIkOCgg");
	this.shape_7.setTransform(63.775,145.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#394E5D").s().p("AkhQFIEvizIAagPIDwiMIAAirIAHgFIAAC0IpAFRgAkeM+IE8i6IANgIIDviMIAAirIAIgEIAAC0IpAFRgAkeJ8IE8i6IANgIIDviMIAAiqIAIgFIAAC0IpAFRgAkhG9IEvizIAagPIDwiMIAAiqIAHgEIAACzIpAFRgAkhD6IEviyIAagPIDwiMIAAiqIAHgFIAAC0IpAFQgAkeA0IEwixIAZgPIDviNIAAirIAIgEIAAC0IpAFQgAkeiOIE8i5IANgIIDviMIAAirIAIgFIAAC1IpAFRgAkhlNIE8i5IANgIIDwiNIAAiqIAHgFIAAC0IpAFRgAkhoPIE8i5IANgIIDwiMIAAirIAHgEIAAC0IpAFQg");
	this.shape_8.setTransform(76.6,138.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(40));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12013A").s().p("An+gyIAAg0IBxBCIAAgBIFAC4II5lPIATgLIAAA1IpMFag");
	this.shape_9.setTransform(53.2,236.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#413BB8","#5C1CC6"],[0,1],1.5,-112.7,-1.5,112.8).s().p("Akzr4IJnlrIAAdbIguAcIo5FQg");
	this.shape_10.setTransform(76.225,138.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#413AB7").s().p("Aj4A2IAbgPICeBcIgbAPgAi4ARIAagPICdBcIgaAPgAh1gWIAagPICeBaIgbAQgAg+g3IAbgPICdBcIgaAOgAAEheIAbgQICdBcIgaAQgABBiCIAagPICeBbIgbARg");
	this.shape_11.setTransform(57.95,32.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-10.7,-32.5,33.6,45.6).s().p("AoHAzIJWljIG5D+IpZFjgAjMBIICeBbIAbgPIiehcgAiMAjICcBcIAagQIichcgAhJgFICdBbIAbgPIiehbgAgSglICeBbIAagPIiehbgAAwhNICeBbIAagOIidhcgABthxICdBdIAbgQIiehbg");
	this.shape_12.setTransform(53.55,30.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#71C6FF").s().p("AoWhKIAAgDIAPgIIG2D9IJaliIAOAIIAAADIpnFqg");
	this.shape_13.setTransform(53.525,44.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#6C05AE","#1A0159"],[0,1],-0.6,-128.2,0.7,128.2).s().p("AoBQIIAAg0IAIAEIgdgRIAA9dIJmlsIHHEGIAAdfIguAbIATgKIAAA0IpMFbg");
	this.shape_14.setTransform(53.525,128.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.1,256.6);


(lib.SDevojkao1glava = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABxBhQgDgEAAgFIgBgHIAAABQgCgRgMgOIAAAAQgDgDgEgCIAAAAQgOgFgLAPQgDAEgFABQgFAAgEgDQgEgDgBgFQgBgFADgEQAXgfAfANIAAAAQAKADAHAJIAAAAQARATADAYIAAAAIABAKQAAAFgEAEQgEADgFAAQgFAAgEgDgAg9gWQgEgDAAgGIAAgGIAAAAQgDgRgMgNIAAgBQgDgDgDgBIAAAAQgPgFgKAOQgDAEgFABQgGABgEgDQgEgDgBgFQAAgFADgFQAWgeAfAMIABAAQAJAEAHAIIAAAAQARAUADAYIABAAIAAAJQAAAGgEADQgDAEgFAAQgFAAgEgEg");
	this.shape.setTransform(21.8795,71.1113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A25050").s().p("AADAgQgWAAgSgOQgJgHgIgLQgHgMACgJQACgJAEgBQAEgBAEACQADACABACIAHAPQAGALASAFQASAEATgGQASgEAHACQAHACABAGQABAGgDAGQgEAGgOADQgMACgSAAIgHAAg");
	this.shape_1.setTransform(18.1715,97.8392);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D3BE").s().p("ABtBUQgFgDgEgFQgDgFAAgHQgBgGADgFQACgGAFgEQAFgFAHgCQAEgBAJABQANABAGACQAKADAEAIQAEAFgBAJQAAAKgGAFQgDADgHABIgLABIgQACIgDABQgHAAgFgDgAiagKQgEgCgEgEQgFgGAAgMQAAgHADgMIAEgTIABgFIACgFQADgEAJAAQAIABADADQAEAEAAAKQABAVgFAUQgDAOgIADIgEABIgFgBg");
	this.shape_2.setTransform(22.4031,81.5011);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#815451").s().p("AB5BaQgCgCgFgKQgHgPgQgJQgPgIgTgCIgMgDQgGgCgCgFQgBgDADgEQABgDAEgDQAFgCAIgBQAVABARAJQASAJAOAPQALAMADALQACAJgDAEQgBAEgDACIgGACQgFgBgEgFgAhBgmQgEgBgEgDIgFgGIgEgHQgGgJgKgFQgKgEgKACIgGAAIgGABQgDABgCgBIgFgEQgCgEACgFQACgEAFgDQAIgGAMABQAJgBALAEQALAFAKAJQAKAIAGALQADAGAAAFQAAAHgFADIgDABIgEgBg");
	this.shape_3.setTransform(25.7281,60.1722);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgOAAgJgCg");
	this.shape_4.setTransform(19.0833,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},1).wait(8));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3C5A9").s().p("ABdF3QgOhNgtgdQgxgBhMgaQhMgbgqgsQgpgsgThYQgShYAOhkQAPhkAZhxIAKgtQAVAIAZAFQBIAMBIgEQBcCBCXAWQgHBUAoBWQhADWAeBgQAZBTAuAyQgxAeguAAQgwAAgsghg");
	this.shape_5.setTransform(32.8064,84.3557);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#926461").s().p("AgdBZQhCgWgugzQgLgMgDgJQgBgEACgDQADgDAHAEQAMAHAZATQAXARANAIQA9AlBWgDIAZAAQANABAKAGQAAAHgHAFQgFACgJACQgaAFgaAAQgpAAgngNgAAXA1QgfgCgfgNQg4gXgvg0QgQgSgDgPQgBgIAFgDQAFgCAHAIQAFAGAOAMQAgAcATANQAdAUAcAJQARAGAoAHQAlAGAUAIQgDADgHACQgZAIgbAAIgLAAgABQATQg5gKgwgYQg1gbgjgpQgIgKAEgFQADgEAGABIAIAFIAgAYQATAOAOAJQAeARAnANQAcAJAuAKIAcAGQAPAFALAHQgRAFgXAAQgTAAgXgEg");
	this.shape_6.setTransform(20.7589,31.5992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},6).to({state:[]},1).wait(8));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#815451").s().p("ABeJQQl3inhUhPQgOgDgPgGQgigMgbgVQgdgWgSgdQgWgjgJgxQgGgnADg0QAIiXBCiMIACgDQhGgtALhuQAMh2BuglQBSgbBXgJQAugkAygRQDDhDCGCJQAxANAqAXQBKAqAzBJQBbCFgiCdQAMB7gOBNQAeBFAcBgQAbBgghBTQgiBTgwAqQhPBJhiAAQhOAAhZgug");
	this.shape_7.setTransform(54.0363,63.8119);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(6).to({_off:false},0).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0,107.60000000000001,127.6);


(lib.racunar2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.788)").s().p("AAhBiIgBAAIgBgBIgFgJIAAgCIABgCICYhSIACAAIABABIAFAJIAAACIgBACIiYBSIgBAAIAAAAgAi5BNIgBgBIAAgBQAAgQAEgOQAHgSANgQIAAgBQAOgPASgKIAAAAQAagQAbgBQAcgBATAOIABABIAAAAIAAACIAAABIgBAAIgEACIgCABIgBgBQgJgGgMABQgMgBgQAGIAAAAQgQAGgQAJIAAAAQgRAKgOAMIAAgBIgPAQQgFAGgEAJQgEAIgCAMIAAABIgCAAIgCACIgBAAIgBAAgAAhBDIgBgBIgBgBIgFgJIAAgCIABgBICYhRIACAAIABABIAFAJIAAACIgBABIiYBRIgBABIAAAAgAAhAeIgBgBIgBgBIgFgJIAAgCIABgBICYhRIACAAIABABIAFAJIAAACIgBABIiYBRIgBABIAAAAgAAhgBIgBAAIgBgBIgFgJIAAgCIABgCICYhSIACAAIABABIAFAJIAAACIgBACIiYBSIgBAAIAAAAgAirgLQgFgCgCgEQgCgFACgFIAAAAQABgEAEgDIABAAQAFgCAFACIgBAAQAGACACAEQACAFgCAFIAAAAQgBAFgFACIgFABIgFgBgAhsgxQgFgCgCgEQgCgFABgFIAAAAQADgFAFgCQAEgCAFABIAAAAQAFACACAFQACAEgBAFIgBABQgBAEgFADIAAAAIgFABIgFgBg");
	this.shape.setTransform(28.0797,38.246);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHAtQAHgSANgQQANgPASgKQAYgQAagBQAcgBASAOIgEACQgJgGgNAAQgNgBgQAHQgRAFgPAKQgRAJgOAMIgPAQQgGAHgEAJQgEAIgCAMIgCABQAAgPAEgNgAg9gOQgEgCgCgEQgCgDACgEQABgEADgCQAEgCAEACQAFABABAEQACAEgCAEQgBAEgEACIgDAAIgEAAgAABg1QgDgBgCgEQgCgEABgDQACgEADgCQAEgCAEABQADACACAEQACADgBAEQgCAEgDACIgEABIgEgBg");
	this.shape_1.setTransform(17.225,38.38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("ABRhfIihBWABRg+IihBWABRgXIihBWABRAKIihBW");
	this.shape_2.setTransform(38.7287,38.2567,0.9427,0.9427);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("ABRgXIihBWABRg+IihBWABRhfIihBWABRAKIihBW");
	this.shape_3.setTransform(38.7287,38.2567,0.9427,0.9427);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},10).to({state:[{t:this.shape}]},10).to({state:[{t:this.shape_3},{t:this.shape_1}]},10).wait(10));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2174DB").s().p("AjVETIAAkkQAAgdAVgOIGIjmQAMgGACATIgBEwQAAAUgKAIImQDsIgGABQgJAAgBgRg");
	this.shape_4.setTransform(27.425,36.9086);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F87F5").s().p("AjiElIgBk3QABgfAWgOIGhj1QANgGACATIgBFEQgBAVgLAIImoD7IgGABQgLAAAAgRg");
	this.shape_5.setTransform(27.45,36.9319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).wait(10));

	// Layer_6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#495BA8").s().p("Ajsg6IHZkWIgCGJInWEYg");
	this.shape_6.setTransform(27.275,37.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(40));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#437CDB").s().p("AgHDOIgDmkIACgBIASAKIABGkg");
	this.shape_7.setTransform(1.2,50.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#47B2F8").s().p("AkECNIH5kjIAQAJIn2Ekg");
	this.shape_8.setTransform(26.35,15.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#76C3F6").s().p("Aj6g/IH2klIgCGiInzEngAjkg6IABF/IHIkOIABl9g");
	this.shape_9.setTransform(27.3,36.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("Ajkg5IHJkMIgBF9InIEOg");
	this.shape_10.setTransform(27.375,36.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#999999").ss(0.3,1,1).p("Ag0g7IAXAOIgZAPIgXgOAicAgIAbgRIgXgOAjOA+IAagPIgXgOAiZA/IAZgPIgcgQAiZA/IAYAQIgZAPIgZgPgAizASIAXAOIgYAPIAbAQAg0ACIAagPIgcgRIgZAQgAgbARIgYAOIgZgPIAYgOAgbARIgZgPAhnAAIAYgOIgXgOAhlAgIAZgQIgbgQAhoA/IAbgQIAaAPIAZgPIgZgQIgaAQIgYgPIgbAQgAhOBPIgZAPIgagPIAZgQAhOBPIgagQAg2BeIAbgRIgYgPIgbARAg2BeIgYgPAh+gOIAXAOIgaAPIAcARAj9BbIAXgOIgXgOAhpB8IAagPIAZgPAhQCMIgZgQAg2B8IgZgPIgYgPIgaAQIAYAOAiVCYIAVgNIgZgPIAYgOIgZgQIgYAPIAZAPAiuCJIAVgNAjIB6IAWgNIgZgPIgbgRIAYgPAiACLIAXgPAhpCbIgXgQAjhBrIAWgNAjlAwIAXAOADhhNIAdgSAD8g+IgbgPADJhcIAagPADggtIgZgQIAagQIgYgPIgZgPIgaAQIgZgPIgZAPIAZAPIgaAQIAZAPIAagPIAYAPIAZgQIgYgOIgZgQIgZAPIAZAQIAZgPIAagRACviJIgYAPIgagRIgYgOACwhrIgZgPABih7IAbgQIAWgOAB9hqIgbgRIgZAQIAbAQIgZAQIAYAPIgYAOIgYgPIAYgOIgcgRIAagPIgYgPABlgeIAXgPIAYAPIAagPAB9hqIAagQAgBgcIAZgRIgagRIAZgPIAcAQIgbAQIAZAPIAagQIAaAQIgbAQIgZgQIgbARIgXgPIgZAPIAYAOIgZAQAAvhcIgYAPIgXgPAAWhrIAZAPAAwABIAagPIAYAOIAbgPIgYgPABIAPIgYgOAAvAfIAZgQIAagPAgCAgIAYgPIgYgQIAYgOIAaAOIgaAQIAZAOAgBA9IAWgOIAagQAAVAvIgXgPIgZgPAB9gPIAXgPABLiJIAXAOADJh6IgZAPAgbBNIAagQIgZgOIAYgPAgdgtIAcARAgCg+IgbARAgZhLIAXAN");
	this.shape_11.setTransform(41.175,63.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#152D58").s().p("AkeBOIGXj2ICfBaImWD3gACHCYIhJgxQgDgEAHgFICDhQQAIgFAHAFIBHArQAIAGgIAIIiDBQQgEADgFAAQgEAAgEgCg");
	this.shape_12.setTransform(41.3875,63.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#437CDB").s().p("Ai1hXIAAglIFrDSIAAAnIgCAAg");
	this.shape_13.setTransform(21.4,84.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#284881").s().p("AjKB3IGVj3IAAAKImVD3g");
	this.shape_14.setTransform(49.05,68.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34548E").s().p("AhPgpIAAgJICfBaIAAAKg");
	this.shape_15.setTransform(20.7,76.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-8.8,-23.9,27.9,37).s().p("AmrApIHskkIFsDQIntEngAlNAkIAAAJIChBcIGVj3IAAgKIifhagACWgbIiDBPQgHAEAEAEIBIAyQAJAEAJgFICChQQAJgIgJgGIhGgrQgEgCgEAAQgEAAgEADg");
	this.shape_16.setTransform(46.05,67.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#47B2F8").s().p("Aj2CAIHtkmIAAAkIntEqg");
	this.shape_17.setTransform(64.25,80.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(40));

	// Layer_1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.369)").s().p("AnFAlIIGkzIGFDmIoAE3g");
	this.shape_18.setTransform(45.175,71.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.2,90.8,98.7);


(lib.racunar1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#588CCB").s().p("Ag/BYQAJAAAPgGIAAAAIAEgDQALADAFAGQgMAEgKAAQgMAAgKgEgAgcBKQAMgKAJgNIAEgJQAagHAQAIQgRAWgaARIgJADQgEgGgLgFgAgdA1QAKgFAKgEIgCADQgSAbgVAGQAQgOAFgNgAgSAKIAUgKQgCAVgFAPIgVAIQAHgSABgQgAAAAjQAGgQABgUIA4gbQgCAkgSAcQgQgIgbAHgAgYgXIAUgMQAFAKABATIgUAJQgBgOgFgMgAAAgnQAggWAQgWQAQAOgBAiIg4AbQAAgUgHgLgAgkgjIgKgCQAAgDAQgEIAAAAQAOgCAIAHIgTALQgCgEgHgDgAgJhTQgGAOgOAQIgKAFQgHADgOAJQAWggAdgPgAgEgtQgHgHgNABQAOgRAHgRQAfgMAQAMQgPAUgfAWg");
	this.shape.setTransform(28.4508,36.584);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373737").s().p("AhVCQQgjgaAAg9QAAg7Ajg8QAkg8AxgXQAygYAkAaQAjAaAAA9QAAA8gjA7QgkA8gyAXQgXAMgVAAQgWAAgTgOgAAAhZQghAQgYAlQgXAkAAAmQAAAmAXAPQAYAQAhgQQAggPAYgmQAXgmAAgkQAAglgXgQQgMgIgOAAQgPAAgPAIg");
	this.shape_1.setTransform(27.525,36.5807);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AhPCIQgfgYAAg3QAAg5Aig5QAig5AugWQAsgVAgAWQAfAYAAA3QAAA5giA5QgiA5gvAWQgVALgSAAQgUAAgQgMgAAAhZQghAQgYAlQgXAkAAAmQAAAmAXAPQAYAQAhgQQAggPAYgmQAXgmAAgkQAAglgXgQQgMgIgOAAQgPAAgPAIgAg1BYQAJAAAOgGIABAAIAEgDQAKADAFAGQgMAEgKAAQgLAAgKgEgAgSBKQAMgKAHgNIAFgJQAagHAQAIQgRAWgbARIgHADQgEgGgLgFgAgUA1QAKgFAKgEIgBADQgTAbgVAGQAQgOAFgNgAgJAKIAUgKQgBAVgHAPIgTAIQAHgSAAgQgAAJAjQAGgQABgUIA4gbQgBAkgTAcQgQgIgbAHgAgPgXIATgMQAHAKAAATIgTAJQgBgOgGgMgAAKgnQAggWAPgWQAQAOAAAiIg5AbQAAgUgGgLgAgagjIgLgCQAAgDAQgEIABAAQANgCAHAHIgRALQgDgEgGgDgAAAhTQgGAOgNAQIgLAFQgHADgOAJQAWgfAdgQgAAFgtQgHgHgMABQANgRAHgRQAggMAQAMQgPAUghAWg");
	this.shape_2.setTransform(27.525,36.5816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},9).to({state:[{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},10).wait(11));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjVEUIAAkkQAAgeAVgOIGIjlQAMgGACASIgBEwQAAAUgKAIImQDsIgGABQgJAAgBgQg");
	this.shape_3.setTransform(27.375,36.5494);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.8)").s().p("AjYEpQgGgGgBgPIAAklQAAgjAZgQIABAAIGIjmIABgBQANgGAHAIQAHAFABAOIAAABIgBEwQAAAagOAKIgBAAImQDsIgCABQgFACgEAAQgIAAgFgFg");
	this.shape_4.setTransform(27.3758,36.5533);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// Layer_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C54C5").s().p("AgHDOIgDmkIACgBIASAKIABGkg");
	this.shape_5.setTransform(1.2,50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77BEF4").s().p("AkECNIH5kjIAQAJIn2Ekg");
	this.shape_6.setTransform(26.35,15.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#848BDE").s().p("Aj6g/IH2klIgCGiInzEngAjkg6IABF/IHIkOIABl9g");
	this.shape_7.setTransform(27.3,36.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("Ajkg5IHJkMIgBF9InIEOg");
	this.shape_8.setTransform(27.375,36.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.537)").ss(0.3,1,1).p("AgdgtIgZAPIgXgOAg0g7IAXAOIAcARIAZgRIgagQIAZgQIAcAQIgbAQIAZAPIAagQIgYgPIAYgOIgcgRIgYAPIgXgOAiBAPIgXgOAizASIAXAOIgYAPIAbAQIAYAQIgZAPIgZgPIAagQIAZgPIAYAPIAbgQIgYgPIAZgQIgbgQIAYgOIAbAQIAagPIgcgRIgZAQIgXgOAhnBeIgagPIAZgQAiAAwIgcgQIAbgRIAcARgAi0AvIgXgOAgbAQIgYAPIgZgPIAYgOAgbAQIgZgOAg2BdIgYgOIgZAPIgaAQIAYAOAgbBNIgYgPIAZgPIgZgQIgaAQIAaAPIgbARIgagQAg2BdIAbgQIAagQIgZgOIAYgPIgZgQAhnAAIgaAPAh+gOIAXAOAjmBNIgXgPAj9BbIAXgOIAYgPIAagPAjlAwIAXAOAg2B8IgZgQIAZgPAiACLIgZgPIAYgOIgZgQIgYAOIAZAQAiVCXIAVgMIAXgPAhpCaIgXgPAjIB6IAWgOIgZgPIgbgQAiuCJIAVgNAhQCLIgZgPIAagQIgYgOAjhBrIAWgOADhhNIAdgSAD8g9IgbgQIgYgPIAagPACviJIgYAPIgagRIAWgOACwhrIgaAQIgZgPIgZAPIAZAPIgaAQIAZAPIAYAPIAZgPIAagQIgYgOIgZgQIgZAPIAZAQIAXAPACwhrIgZgPABlgeIAXgPIAagPIAZgPIAagRIgZgPAB9hqIAagQABLiJIAXAOIgZAQIgYgOAAWhrIAZAPIAagPIAbAQIgZAQIAYAPIgYAOIAaAQIgbAQIAYAOIAbgPIgYgPABIAQIAagQAAWgNIAaAOIgaAPIAZAPIAZgPIgYgPIAagPIgZgQIgbARIgXgPIgZAPIAYAOgAAWAQIgYgPIgZAPAgCAgIAYgQAgBA9IAWgOIgXgPAAVAvIAagQAB9gPIAXgPAB9hqIgbgRIAbgQIgYgOADHg9IAagQADggtIgZgQADJh6IgZAPAgZhLIAXAOIgbAQ");
	this.shape_9.setTransform(40.775,63.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#34046F").s().p("AkeBOIGXj2ICfBaImWD3gACHCYIhJgxQgDgEAHgFICDhQQAIgFAHAFIBHArQAIAGgIAIIiDBQQgEADgFAAQgEAAgEgCg");
	this.shape_10.setTransform(41.3875,63.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#76C3F6").s().p("Ai1hXIAAglIFrDSIAAAnIgCAAg");
	this.shape_11.setTransform(21.4,84.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5A15AF").s().p("AjKB3IGVj3IAAAKImVD3g");
	this.shape_12.setTransform(49.05,68.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#450D8A").s().p("AhPgpIAAgJICfBaIAAAKg");
	this.shape_13.setTransform(20.7,76.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#76C3F6","#9159C9"],[0,1],-42.8,0,42.9,0).s().p("AmrApIHskkIFsDQIntEngAlNAkIAAAJIChBcIGVj3IAAgKIifhagACWgbIiDBPQgHAEAEAEIBIAyQAJAEAJgFICChQQAJgIgJgGIhGgrQgEgCgEAAQgEAAgEADg");
	this.shape_14.setTransform(46.05,67.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8C54C5").s().p("Aj2CAIHtkmIAAAkIntEqg");
	this.shape_15.setTransform(64.25,80.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(40));

	// Layer_1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A1D5C").s().p("AnBAeIICkmIGBDgIn3Exg");
	this.shape_16.setTransform(44.925,72.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B4299").s().p("Aj7CpIAAgiIH3kwIAAAhIn1Eyg");
	this.shape_17.setTransform(64.7,85.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4F2C76").s().p("AjFhiIABgBIAAgiIGKDqIAAAig");
	this.shape_18.setTransform(19.675,88.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(40));

	// Layer_3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(66,66,66,0.427)").s().p("AitEcQgMgJgJgRQgHgMgGgUQgYhRgGhpQgEhAADh8IgCAOIACgSQDGhsDegiQALgBAEACQAHAEADAOQAkCfgCCiQAAAbgGANQgEAJgIAIIgPAPQiBBsibA5QgdAKgVACIgHAAQgXAAgRgLg");
	this.shape_19.setTransform(26.228,76.1602);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0.2,90,105.5);


(lib.MomakOb3shaka = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F3C5A9").s().p("AAYDiIgDgCIgDgCIgIgIIgEgGIgDgEIgDgHIgEgHIgJgQIgKgUIgGgMIgIgRIgHgTIgGgTIgIgVIgHgUIgFgLIgHgWQgGgRgGgSIgDAGQgBAHgVAbQgfAmgOgOIAHgXIAEgJIADgJIAGgRIACgJIADgJIAEgIIACgJIAGgRIAGgQIAFgRIAGgQIAGgPIAGgPIAFgQIAGgNIACgHIAGgPIAGgRIB5gMIAlBgIADAHIACAEIAAABIACAGIACAGIABABIACAFIADAHIABAEIADAHIAFANIAEANIAFANIAEAOIAEAMIAEAOIADAMIACAHIADANIAJAkIAFAZIACAQIABAKQgCAOgKgJIgEgEIgIgMIgEgJIgFgKIgDgKIgCgGIgGgLIgEgPIgEgHIgFAFIADAIIAGAPIACAHIACAIIAEANIACAGIACAHIABAGIACAKIAFATIACALIADAYQABAHAAAIIgBAFIgCABIgDgCIgEgDIgEgFIgLgSIgFgHIgEgIIgEgIIgFgKIgHgRIgGgNIgFgNIgGgMIgEgLIgEgHIgLAFIACAIIAFANIABAHIACAHIAEAMIACAGIABAGIABAGIADAKIAFATIADARIADAPIACAVIgBAIIAAABIgDAAIgEgBIgCgDIgEgEIgLgPIgDgGIgEgGIgDgHIgDgGIgHgPIgHgQIgGgNIgEgOIgIgSIgFgNIgCgCQgHgBgGAFIADAIIAFAUIACAIIADAJIAFAQIABAHIACAHIACAGIAEALIAEARIAEANIABAHIAAAGIgCAEIgCABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(16,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.9,32,49.4);


(lib.MomakOb3sarezacipelu = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgbgKYAIAFAJAEAIADIAAAAYAJAFAJAGALAEYAAAAABAAAAgBYAAAAAAAAAAAAIAAgCYgBgEgBgDgCgDYgBgDgCgBgCgDYgEgEgEgDgFgDIgCAAYgEgCgEgBgFAAYgFAAgFABgHACIgBABYAAAAgBABABAAYAAABAAAAAAAA");
	this.shape.setTransform(13.213,14.6819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZgIYAIAEAHAEAIADIAAAAYAIAEAJAFAKAEYABAAAAAAABgBYAAAAAAAAAAgBIgBgBYAAgEgCgDgBgDYgCgCgBgCgCgCYgDgEgFgDgEgCIgBgBYgFgBgDgBgFAAYgFAAgFABgGADIgBABYgBAAAAABABAAYAAABAAAAAAAA");
	this.shape_1.setTransform(10.0872,17.2508);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Agpg+IAQAHIAIADYADABACACADABYAFADAEADAFADYACABACACADACYACACACABACACIAHAGIAGAGYACABACADACACYACACACACACACYADAFADAEADAEIAKAPIABgEIgRAIYgFADgGACgGACYgFADgGACgGACYgGACgFADgFABYgGACgGACgGABYgGABgGACgGAAYgGACgGAAgHABYgGABgGgBgGABYgBAAgBAAABABYAAABAAAAABABIAAAAIAJACYADAAAEABADAAYAGABAHAAAGAAYAEAAADAAADgBIAJAAIAFgBYACAAABAAACgBIAKgCYAFgBAGgCAHgBYAGgCAGgCAGgDYAGgCAGgCAGgDIARgIYAHgDAEgJgEgHYAAgBgBgBAAAAIAAgBIgKgNYgDgFgEgFgEgFYgEgFgFgFgEgEYgFgEgFgEgGgDYgCgCgDgCgDgBYgCgCgDgBgDgCYgGgCgFgDgFgCIgEgBIgBAAIAAgBIgBAAIAAAAIgBAAIgCgBYgDAAgDgBgCgBYgGgBgGgBgGgBIAAAAYgBAAgBABAAAAYAAABAAABABAA");
	this.shape_2.setTransform(7.8132,25.8866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/AxYAJgHAIgHAIgIIANgKIANgLIAMgKYABgCADgCACgBIAGgFIAagVIgDAAYAKAFAJAFAKAFYABAAABAAAAgBYAAAAAAgBAAAAIgBgBYgDgEgEgFgEgDYgEgFgEgDgFgEYgCgCgDAAgDABIgDACYgKAGgKAFgJAHIgGAFYgDACgBABgCACYgFAEgEAEgEAEYgEADgEADgEAEYgCADgBACgCACYgCACgCACgCADYgDAEgDAFgDAFYgDAEgDAGgDAFIAAAAYAAABAAABABAAYAAABABAAAAgB");
	this.shape_3.setTransform(12.8251,15.743);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMgBYAAAAABABACABYACABADACAEACYACABADACADABYACABACAAAAAAYABAAAAAAAAgBYAAAAAAAAAAAAIABgBYAAAAAAgCAAgBYAAgCAAgCgBgCYgBgEgCgDgDgCYgDgCgEABgDABYgCABgCABgCABYgBABgBABAAAAIgBABYgBABAAAAABABYAAAAAAAAAAAA");
	this.shape_4.setTransform(15.1671,10.9108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgagNYAAAAADACAFAEYACABADACADACYADACADABAEACYAFAEAHAEAFADYAFADAEABAAAAYAAABABgBABAAYAAAAAAgBAAAAIgBgBYAAAAAAgCAAgCYgBgCgBgDgCgDYgDgFgFgGgHgEIgDgCYAAAAgBgBgBAAYgCgBgBAAgCgBYgDgBgEAAgDAAYgEAAgDAAgCAAYgCABgCAAAAAAIgBABYAAAAgBABAAAAYABABAAAAAAAA");
	this.shape_5.setTransform(19.837,9.5914);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAYYAAAAAEgCAGgEYAGgEAIgGAHgGYAEgCAEgDAEgDYAEgCADgDADgCYAGgFAEgDAAAAYAAAAAAgBAAgBYAAAAgBAAAAAAIgBAAYAAAAgCgBgCAAYgDAAgEABgEAAYgEABgEABgEACYgDABgBABgCABYgCACgCABgCACYgIAFgHAHgEAHYgCAEgBADgBADYgBACAAACAAAAIAAABYAAABAAABABAAYAAAAABAAAAgB");
	this.shape_6.setTransform(19.6605,9.5715);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdgDYAJAFAKAFAKAEYAAABABAAABgBYAJgGAKgFAJgHYAAAAAAgBAAgBYAAAAAAAAgBAAIgBgBYgEgBgDAAgEAAYgDAAgDABgDAAYgGACgEACgFADIANgBYgEgCgFgBgFgBYgDAAgDAAgDAAYgEAAgDABgDABIgBABYgBAAAAABAAAAYAAABAAAAAAAA");
	this.shape_7.setTransform(30.0527,1.7785);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMgBYAAAAABABACABYADABADACADACYACACADABADABYACABACAAAAAAYABAAAAAAAAgBYAAAAAAAAAAAAIABgCYAAAAAAgBAAgCYAAgBAAgCgBgCYgBgEgCgEgDgBYgDgCgEABgDACYgCAAgCACgCABYgBABgBAAAAAAIgBACYgBAAAAABABAAYAAAAAAAAAAAA");
	this.shape_8.setTransform(21.5647,6.2727);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPgFYAAAAACABADACYACACAEACADADYADACAEACADACYADABACABAAAAYABAAAAAAAAgBYAAAAAAAAAAAAIABgCYAAAAAAgBAAgCYAAgCAAgCgBgCYgBgEgCgEgEgDYgDgCgFAAgEABYgCAAgDABgBABYgCABgBAAAAAAIgBABYgBAAAAABAAABYAAAAAAAAAAAA");
	this.shape_9.setTransform(24.3189,7.9951);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvAFYAIAFAJAFAIAFYABAAABAAABAAIAAAAYANgIALgIANgHIgDAAYAKAFALAFALAFYABABAAgBABAAYAAgBAAAAAAgBIgBAAYgDgHgEgDgFgFYgEgFgFgEgEgDYgEgCgDgBgEACIgDABYgNAGgMAJgLAJIAMgBYgEgBgFgBgFgBYgDAAgDgBgCAAYgDAAgDAAgDAAIgBAAYAAAAgBABAAABYAAAAAAAAABAB");
	this.shape_10.setTransform(28.4455,3.2613);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeATYAMgGALgHALgHIgDAAYAKAEAKAFALAEYAAABABgBAAAAYAAgBAAAAAAAAIAAgBYgDgHgDgEgFgFYgEgEgEgEgFgDYgEgCgFAAgDACIgCABYgGAEgFAEgFAFYgCADgCACgCADYgCAEgCADgBAFIAAABYgBABABAAABAAYAAABAAgBABAA");
	this.shape_11.setTransform(26.077,5.4403);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AifBYYAAAAAUgKAfgPYAQgHASgJATgJYATgKAUgLATgLYAUgKAVgLASgLYATgKARgKAPgJYAdgSAUgLAAAAYAAgBABgBgBgBYAAAAgBAAgBAAIAAAAYAAAAgFACgKAEYgEACgGACgGADYgHACgHAEgIADYgQAHgSAJgTAJYgJAFgKAFgKAFYgKAGgKAFgJAFYgKAGgKAEgKAGYgKAFgKAGgIAFYgTALgRAKgPAJYgPAJgMAIgIAGYgIAGgFADAAAAIAAABYgBAAAAABABABYAAAAABAAABAA");
	this.shape_12.setTransform(30.3507,19.376);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJA1YAAAAgBgCAAgDYgBgCAAgCgBgCYAAgDgBgCAAgDYAAgDAAgDgBgDYAAgDABgEAAgDYAAgEABgDABgEYAAgEACgCABgDIACgGIADgEYACgEABgDACgDYACgCACgDADgCYACgDACgCACgCYAEgEAEgDADgCYADgCABgBAAAAYABgBAAgBgBAAYAAgBgBAAAAAAIgBAAYAAAAgCABgEAAYgBABgDAAgCABYgBAAgCABgBAAYgBABgCABgBAAYgDACgDACgDACYgDACgDADgDACYgDADgCAEgDAEYgBABgCACgBACIgDAHYgBAEgCAFAAADYgBAFgBAEABAEYAAAFAAAEABAEYABAEABADACADYAAACABABABACYAAABABABABABYABACACACABABYACADACACAAAAIAAAAYABABABAAAAgBYABAAAAAAAAgB");
	this.shape_13.setTransform(47.6348,5.3511);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAWYAAAAAFgDAGgDYAGgDAIgFAHgFYAHgEAIgFAGgFYAFgEAEgCAAAAYABgBAAgBgBAAYAAgBAAAAgBAAIgBAAYAAAAgBAAgDgBYgCAAgEAAgEABYgHABgJADgHAFYgIAFgHAGgEAGYgCAEgBADgBACYgBACAAACAAAAIAAABYgBABABAAABABYAAAAAAAAAAAA");
	this.shape_14.setTransform(49.5857,8.6735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MomakOb3sarezacipelu, new cjs.Rectangle(-0.1,-0.1,53,32.9), null);


(lib.MomakOb3odlakta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7A8594").s().p("AiIHaIg7sDIgBgUQAAhNA6g2QA5g2BRAAQBTAAA5A2QA5A2AABNIAAAUIgVMAQhVAghQAAQhMAAhHgdg");
	this.shape.setTransform(13.35,43.0884);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3C5A9").s().p("AgXHiQghgRgLgoIgCgQIg/rNQgFglAIgjQAMgsAggdQAfgeApgEIAbAAIAPACQAfAIAaAYQAaAXAMAhQALAcAAAgIgBAnIgDA7IgGBHIgBAUIguI1IAAABIAAADQgIAkggAUIgVAKIgNABQgNAAgOgGg");
	this.shape_1.setTransform(13.5324,48.8223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-7.2,39.4,104.9);


(lib.MomakOb3nogaodkolena = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#517781").s().p("AiWIVQAAmVgeoKIgBgVIAAgBIAAgDIgCgYIAAgFQAAhMA2g1QA2g3BLAAQBMAAA2A3QA2A1AABMIAAAFIAAABIgBAPIAAAAIgNDuQgQEbAXGUQgKCAivAHQiHgEgHhgg");
	this.shape.setTransform(18.375,63.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MomakOb3nogaodkolena, new cjs.Rectangle(0,0,36.8,126.5), null);


(lib.MomakOb3nogadokolena1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#517781").s().p("AiCKuQgpgpgKg0IgBgFIAAAAIAAgEIgCgXQgbn6gMopIAAgMIAAgFQAAhdBChBQBBhCBcAAQBdAABCBCQBBBBAABdIAAAFIAAAJQgNImgNDqIgPEXIgBAPQgEAkgRAfIgGALIgCACQgLAPgNAOQg2A2hLAAQhMAAg2g2g");
	this.shape.setTransform(22.425,73.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MomakOb3nogadokolena1, new cjs.Rectangle(0,0,44.9,148), null);


(lib.MomakOb3koza = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC0000").s().p("AkdB6QArhjDWiJQDViKAzA9QAzA9AKBiIi7BmQiVBRhLAeQg9AYgnAFIgWABQhXAAAmhZg");
	this.shape.setTransform(29.6263,20.8092);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MomakOb3koza, new cjs.Rectangle(-0.1,-0.3,59.5,42.199999999999996), null);


(lib.MomakOb3dolakta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#7A8594","#647081"],[0,1],-56.4,38,-57.6,-16.8).s().p("AiqFzIgBgNIAAgCIAAgEIABgLIAdpWIABgRQACg0AlglQAqgqA6AAQA6gBAqAqQAoAoABA4IAgJiIAAAIIAAALIAAAJQhcAkhVAAQhVAAhQgjg");
	this.shape.setTransform(17.2,40.6186);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7C12D").s().p("AAAAGIAAgGIAAgEIABgEIgBARIAAgDg");
	this.shape_1.setTransform(3,13.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,81.9);


(lib.guide = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F3C5A9").s().p("AAsAMIACgCIAEgDIACgCIgCACIgEAGIgCgBgAABgBIABgCIADAAIgFAEIABgCgAgygEIgBgEIAIgDIgFAFIgBACg");
	this.shape.setTransform(21.6046,44.1167,1.2161,1.2161,8.4763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAB08C").s().p("AAzAgIgIgDIAEgGIAFACIAYgVQAGgEAJgBIAAAAQgCANgJALIgGAIQgGADgHAAQgFAAgFgCgAAJAhIgJgCIgBgCIgBgCIACgHIAAgCIAJAAQARgKAPgLIAMgJIAIgDIADAAIAEAEIgNAQIgJAMIACgEIgGAIIgJAKQgHADgKAAIgHgBgAgfAcQgHgCgHgEIgHgKQAKgEAJgGQAHgDAGgGIAJgHIAQgNQAUgNAIANIgGAFIgLAOIgKAJIgTAVQgEAEgGACIgEAAIgEAAgAhMASIgHgEIgHgGIABgBQAIgEAHgGIANgLIAKgJQAUgKAJAHIgGAHQgJAJgJAIIgGAGQgHAJgJAFIgDABIgFgBg");
	this.shape_1.setTransform(22.2563,42.2187,1.2161,1.2161,8.4763);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C79678").s().p("AApAhIAGgKIAEACIABAAIAYgUQAGgFAJgBIABAAIAAAFIAAAAQgJABgGAFIgYAVIgFgCIACgCIgCACIgEADIgCACIgBgBgAgDAeIACgHIAEgFIAGAAQARgKAPgLIAMgJIAIgDIADABIAHAGIgCADIgEgEIgDAAIgIADIgMAIQgPAMgRAKIgJAAIgBACIgBAHIgCgDgAgzARIABgCIAFgFIAMgHQAHgDAGgGIAJgIIAQgMQAYgPAHATIgCABQgIgNgUANIgQANIgJAHQgGAFgHAEQgJAGgKAEIAAgBgAhbALIAAgCIACgCQAIgEAHgFIANgLIAKgJQAYgMAIAMIgCACQgJgHgUAKIgKAJIgNAKQgHAHgIAEIgBABIgCgDg");
	this.shape_2.setTransform(22.2255,41.4971,1.2161,1.2161,8.4763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgeAmQgCgCAEgFIAqg9QAEgFAEgCQAFgDAFAAQAEAAABADQACACgEAFIgqA9QgEAFgEACQgFADgFAAQgFAAAAgDgAh5AnQgIgCgDgEQgCgFACgGQACgGAGgJIAbglQADgFAFgCQAFgDAEAAQAFAAABADQACACgEAFIgbAmQgFAGgBAFQgBAEADADQAEACAJAAQAMAAAJgFQAIgFAHgKIAcgmQADgFAFgCQAEgDAFAAQAFAAABADQABACgDAFIgbAlQgGAJgHAGQgHAGgJAFQgJAEgJACQgJACgKAAQgMAAgHgCgAjrAmQgIgDgDgFQgDgGACgHQABgIAGgJQAHgIAJgIQAJgHALgGQALgFAMgDQAMgDANAAQALAAAGADQAHACACADQAEADAAAEQAAADgCADQgDADgEACQgFACgEAAIgDgBIgCgCIgCgHQgBgCgEgCQgDgBgIAAQgHAAgHACIgOAFQgGAEgGAFQgGAFgFAGQgJANADAIQADAHAQAAIAOgBIAQgEIAJgNIgQAAIgIgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQACgDAEgBQADgBAEAAIAZAAIAHABQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAACgDAEIgKAPIgEAFIgGADIgHADQgMAEgKACQgKACgLAAQgMAAgIgDgACDAnQgHAAgCgCQgBgCAEgFIApg6IAGgGIAGgDIAIgBIA4AAQAFAAABACQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgCADgEABQgDACgFAAIgwAAIgOATIAsAAQAFAAABACQABAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIgGAEQgEABgFAAIgsAAIgPAXIAxAAQAFAAABABQABABAAAAQAAABAAAAQAAABAAABQgBAAAAABQgCADgEACQgEABgFAAgAAXAnQgGAAgCgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgCADgEIApg4QADgGAFgCQAFgCAHAAIAcAAQAKAAAHABQAHACADAEQAJAKgPAVIgLANIgMAKIgPAJIgNAEIgMADIgOAAgAAoAbIAQAAIAIgBIAHgBIAHgCQAQgHALgQQAIgLAAgGQAAgFgGgCQgGgCgKAAIgOAAg");
	this.shape_3.setTransform(31.8218,31.2102,0.8594,0.8594,-5.7246);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99CC00").s().p("AltAhIAAgBID8i/IAHgFQAIgDALAEICTAvIAAAAIEtBfQADACACACQAAAHgGAIIj2Cog");
	this.shape_4.setTransform(38.3518,33.7833);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0F22B").s().p("AluBgID+jAQAJgJAQAGIAeAKIAIACIGaCBQAIAFgCAFQgBgCgEgBIkshfIAAABIiUgvQgLgFgIAEIgGAEIj8DAg");
	this.shape_5.setTransform(38.244,26.7465);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5A759").s().p("AAJiiIALADIggE9IgHAFg");
	this.shape_6.setTransform(6.075,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AjLiYIABgMICWAzIBXAWIgfgDICmA5IAJACIgDgUIARAFIADAVIApAOIgFAjIkDhGQhABthkBQIgtAbgAAjhbIB/ANIAEAVg");
	this.shape_7.setTransform(28.475,19.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CFC06F").s().p("AkaCmIgdkqIAmAEIgHEmgAkEh/IACgmIAQAEIgcFFIgCACgAg3g5IEEBHIBrAeIgEAJIlThZQhCBeh5BKQBkhPA/hugAgWhlIAeAEICDAhIAEAUg");
	this.shape_8.setTransform(31.2,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#988B43").s().p("AkWBVIAmgfQB5hJBChfIFUBaIAPAEQg5BihdBYIgFApgAktBYIAGkmIAOABIgNEkIgDACgAB6h6IgFgUIAKADIADAUg");
	this.shape_9.setTransform(33.35,27.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0F22B").s().p("AjwBuIgBlWIAFgOIABFeIHdCGIAAAIg");
	this.shape_10.setTransform(25.15,25.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#99CC00").s().p("ADrD3IndiGIgBleQAEgMAQABIG1CCQAdAHABAYIgEFQg");
	this.shape_11.setTransform(25.8,24.8713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,50.4);


(lib.sarezacipelu = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgbgKYAIAFAJAEAIADIAAAAYAJAFAJAGALAEYAAAAABAAAAgBYAAAAAAAAAAAAIAAgCYgBgEgBgDgCgDYgBgDgCgBgCgDYgEgEgEgDgFgDIgCAAYgEgCgEgBgFAAYgFAAgFABgHACIgBABYAAAAgBABABAAYAAABAAAAAAAA");
	this.shape.setTransform(13.213,14.6819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsARYAIAEAIAEAHADYABABABAAABgBIAAAAYALgJAKgJAKgJYALgIALgJAKgJYABgBAAgBAAAAYgBgBAAAAgBAAIAAAAYgFABgDABgEABYgEABgDABgEABYgGADgHAEgFAEYgCAAgBACgBABIgEADYgDACgDADgCABYgFAFgFAFgEAGIAMgCYgEgBgFAAgEAAYgFgBgFAAgFABIgBAAYAAAAgBABAAABYAAAAABABAAAA");
	this.shape_1.setTransform(12.0022,14.6423);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Agpg+IAQAHIAIADYADABACACADABYAFADAEADAFADYACABACACADACYACACACABACACIAHAGIAGAGYACABACADACACYACACACACACACYADAFADAEADAEIAKAPIABgEIgRAIYgFADgGACgGACYgFADgGACgGACYgGACgFADgFABYgGACgGACgGABYgGABgGACgGAAYgGACgGAAgHABYgGABgGgBgGABYgBAAgBAAABABYAAABAAAAABABIAAAAIAJACYADAAAEABADAAYAGABAHAAAGAAYAEAAADAAADgBIAJAAIAFgBYACAAABAAACgBIAKgCYAFgBAGgCAHgBYAGgCAGgCAGgDYAGgCAGgCAGgDIARgIYAHgDAEgJgEgHYAAgBgBgBAAAAIAAgBIgKgNYgDgFgEgFgEgFYgEgFgFgFgEgEYgFgEgFgEgGgDYgCgCgDgCgDgBYgCgCgDgBgDgCYgGgCgFgDgFgCIgEgBIgBAAIAAgBIgBAAIAAAAIgBAAIgCgBYgDAAgDgBgCgBYgGgBgGgBgGgBIAAAAYgBAAgBABAAAAYAAABAAABABAA");
	this.shape_2.setTransform(7.8132,25.8866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAYYANgKANgKAKgLIgDABYAJAFAJADAKAEYAAAAABAAABgBYAAAAAAAAAAgBIgBgBYgBgDgBgCgCgCYgCgCgBgDgCgCYgEgEgEgDgEgDYgEgDgFAAgDADIgDACYgHAEgGAGgFAHYgCACgCAEgCAEYgBAEgCAFgBAFIAAABYAAABABABABAAYAAAAAAAAAAgB");
	this.shape_3.setTransform(9.5018,18.2229);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbgLYAAAAAEACAFADYACABADACADACYADABADACAEABYAGAEAGAEAGACYAFADADABAAAAYABAAABAAAAAAYAAgBAAAAAAAAIAAgBYAAAAAAgCgBgCYgBgCgBgDgCgDYgDgFgGgFgGgEIgCgBIgBAAIAAgBYgBAAgBAAgBgBYgCAAgBgBgBAAYgEgBgEAAgDAAYgDAAgDAAgDABYgCABgBAAAAAAIgBABYgBAAAAABAAAAYAAAAAAABAAAA");
	this.shape_4.setTransform(16.5879,11.907);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcgBYAIAEAIAFAIAFYABABABAAABgBIAAAAYAKgHAKgHAKgJYABAAAAgBgBAAYAAgBAAAAgBAAIgBAAYgEgBgEAAgEABYgDAAgEABgDABYgGACgFAEgGAEIAQgBYgEgCgEgBgFgBYgDAAgDgBgCABYgDAAgDAAgDABIgCAAYAAAAgBABABABYAAAAAAAAAAAB");
	this.shape_5.setTransform(20.0246,8.4258);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAUYALgHALgIAKgHIgEAAYAKAFAJAGAKAFYABAAABAAAAAAYAAgBAAAAAAAAIAAgBYgCgIgDgEgEgFYgEgFgEgDgEgEYgFgDgFAAgFADIgBABYgGAEgFAEgEAGYgCACgCADgBADYgCAEgBADgBAFIAAABYAAAAAAABABAAYAAAAAAAAABAA");
	this.shape_6.setTransform(19.477,10.0123);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAOYAAAAADgBADgCYAEgCAEgCADgDYAFgDAEgCADgCYADgDACgBAAAAYAAgBAAgBAAAAYAAAAAAAAAAAAIgCgBYAAAAgBgBgCAAYgBgBgDgBgCAAYgFgBgFABgEADYgFADgDAFgBAEYgBACAAACAAACYAAACAAACAAAAIAAABYAAABAAAAABAAYAAAAAAAAAAAA");
	this.shape_7.setTransform(24.5907,5.9654);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcgLYAAAAAEACAFADYAFADAHADAHAEYAGAEAHADAFACYAGADADABAAAAYABAAABAAAAgBYAAAAAAAAAAAAIAAgCYAAAAgBgBAAgCYgBgCgCgDgBgDYgEgFgGgFgHgEIgDgBYAAgBgBAAgBAAYgCgBgBgBgCAAYgEgBgDAAgEAAYgDAAgDAAgDABYgCAAgBABAAAAIgBAAYgBABAAAAAAABYAAAAAAAAAAAB");
	this.shape_8.setTransform(26.4884,4.9698);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbgMYAIAFAIAEAJAEIAAAAYAIAGAKAGALAFYAAABABAAABgBYAAAAAAgBAAAAIgBgBYAAgEgCgEgBgDYgCgDgBgCgCgCYgEgFgFgDgFgDIgBgBYgFgCgDgBgFAAYgDgBgDAAgDABYgCAAgDABgEABIgBAAYAAABgBAAAAABYABAAAAAAAAAB");
	this.shape_9.setTransform(23.038,7.4292);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAWYAAAAAFgCAGgEYAHgDAIgFAHgFYAJgFAIgFAGgEYAGgEAEgDAAAAYABgBAAgBgBAAYAAAAAAgBgBAAIgBAAYAAAAgBAAgDAAYgDAAgDAAgEAAYgEABgFABgEABYgCABgDABgBABYgCABgCABgCABYgIAGgIAGgEAHYgCADgCADgBADYgBACAAACAAAAIAAABYgBAAABABABAAYAAAAAAAAAAAA");
	this.shape_10.setTransform(29.6352,2.9037);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgegMYAAAAAEACAFADYADACADACAEACYACAAACABABAAYACABACABACABYAGAEAIAEAGADYAGACAEACAAAAYAAAAABAAAAgBYAAAAAAAAAAgBIAAgBYAAAAAAgBgBgCYgBgDgCgDgCgDYgEgFgGgGgHgEIgCAAIgBgBIAAAAIgBAAYgBgBgBAAgBAAYgBgBgCgBgCAAYgEgBgEAAgEAAYgDAAgDABgDAAYgCABgBAAAAAAIgCABYAAAAgBABABAAYAAABAAAAAAAA");
	this.shape_11.setTransform(30.165,2.681);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAWYAAAAAFgDAGgDYAGgDAIgFAHgFYAHgEAIgFAGgFYAFgEAEgCAAAAYABgBAAgBgBAAYAAgBAAAAgBAAIgBAAYAAAAgBAAgDgBYgCAAgEAAgEABYgHABgJADgHAFYgIAFgHAGgEAGYgCAEgBADgBACYgBACAAACAAAAIAAABYgBABABAAABABYAAAAAAAAAAAA");
	this.shape_12.setTransform(49.5857,8.6735);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ai0COIBSgoYAOgHAOgHANgHIApgWYANgHANgHANgHIAogXYANgHAOgHANgHIAngYYABgBAAgBAAgBIAAAAYgBgFgCgFgBgFIgBgHYAAgDgBgCABgDIAAgHYAAgDAAgDABgCIABgHYABgDABgCABgCYABgDAAgCACgCIAEgHYACgEAEgEADgEYABgCADgCABgBIAGgGYACgBACgCACgBIAGgFYABgBAAAAAAgBYgBgBgBAAAAAAIAAABIgHADYgDACgCABgCABIgHAFYgCACgCABgCACIgGAGYgCACgCACgCACIgFAHYgCACgBADgBADYgBACgCADgBADIgCAIYgBADAAADgBADIAAAIYgBADABADAAADIAAAJYABAFACAGABAGIAFgPYgNAHgOAIgNAHIgKAFIgKAGIgUAKIhOAsYgOAIgNAIgNAHIgTAMIgUALYgNAIgOAIgNAIYgNAIgMAIgNAJIAAAAYgBAAAAABAAABYABABABAAAAAA");
	this.shape_13.setTransform(32.4004,14.0256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sarezacipelu, new cjs.Rectangle(-0.1,-0.1,53,32.9), null);


(lib.nogaodkolena = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#367672").s().p("AiXIhIgNgUQgxhSAWmbQAOkPAEiJQAFhoAPg3QAKgfATgTQBehQCiBeQBEAtgBBoQAACBgDFTQgDFUgPB1QgJBBgOAXQg8Agg8AAQhdAAhdhOg");
	this.shape.setTransform(16.7982,62.7312);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nogaodkolena, new cjs.Rectangle(-3.1,0.5,39.800000000000004,124.5), null);


(lib.nogadokolena1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#367672").s().p("AiCKuQgpgpgKg0IgBgFIAAAAIAAgEIgCgXQgbn6gMopIAAgMIAAgFQAAhdBChBQBBhCBcAAQBdAABCBCQBBBBAABdIAAAFIAAAJQgNImgNDqIgPEXIgBAPQgEAkgRAfIgGALIgCACQgLAPgNAOQg2A2hLAAQhMAAg2g2g");
	this.shape.setTransform(22.425,73.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nogadokolena1, new cjs.Rectangle(0,0,44.9,148), null);


(lib.koza = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F7C12D").s().p("AkdB6QArhjDWiJQDViKAzA9QAzA9AKBiIi7BmQiVBRhLAeQg9AYgnAFIgWABQhXAAAmhZg");
	this.shape.setTransform(29.6263,20.8092);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.koza, new cjs.Rectangle(-0.1,-0.3,59.5,42.199999999999996), null);


(lib.Devojkao1torzo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D6E5E0").s().p("ABDOBQkOg/i0hkQiMg4AJhUIgGkrIACg8IABgTIAEAAIAFhfIAsoeQASkOBTiTQBUiTEYCAIBAAqQCgBRBEAsQBUA2AzBnQgEAFAKAWQAlBKATBSQAHAgAEAiIAGAyQANB4ABGiIAABPIgVF1QhDCijKAAQhJAAhbgVg");
	this.shape.setTransform(56.7625,82.5336);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,-9.2,104.2,183.5);


(lib.Devojkao1shaka = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F3C5A9").s().p("AAYDiIgDgCIgDgCIgIgIIgEgGIgDgEIgDgHIgEgHIgJgQIgKgUIgGgMIgIgRIgHgTIgGgTIgIgVIgHgUIgFgLIgHgWQgGgRgGgSIgDAGQgBAHgVAbQgfAmgOgOIAHgXIAEgJIADgJIAGgRIACgJIADgJIAEgIIACgJIAGgRIAGgQIAFgRIAGgQIAGgPIAGgPIAFgQIAGgNIACgHIAGgPIAGgRIB5gMIAlBgIADAHIACAEIAAABIACAGIACAGIABABIACAFIADAHIABAEIADAHIAFANIAEANIAFANIAEAOIAEAMIAEAOIADAMIACAHIADANIAJAkIAFAZIACAQIABAKQgCAOgKgJIgEgEIgIgMIgEgJIgFgKIgDgKIgCgGIgGgLIgEgPIgEgHIgFAFIADAIIAGAPIACAHIACAIIAEANIACAGIACAHIABAGIACAKIAFATIACALIADAYQABAHAAAIIgBAFIgCABIgDgCIgEgDIgEgFIgLgSIgFgHIgEgIIgEgIIgFgKIgHgRIgGgNIgFgNIgGgMIgEgLIgEgHIgLAFIACAIIAFANIABAHIACAHIAEAMIACAGIABAGIABAGIADAKIAFATIADARIADAPIACAVIgBAIIAAABIgDAAIgEgBIgCgDIgEgEIgLgPIgDgGIgEgGIgDgHIgDgGIgHgPIgHgQIgGgNIgEgOIgIgSIgFgNIgCgCQgHgBgGAFIADAIIAFAUIACAIIADAJIAFAQIABAHIACAHIACAGIAEALIAEARIAEANIABAHIAAAGIgCAEIgCABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(16,22.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B38569").s().p("AhEA5QgEgCAAgEQgBgEADgEQACgDAEgBQAtgGAUghIABgBQALgUADgdQAAgEADgCQADgDAFAAQAEABACADQADADAAAEQgDAdgKATIAtAXQAEACABAEQABAEgBADQgCAEgEABQgEACgEgCIgugXQgYAigyAHIgBABQgEAAgCgDg");
	this.shape_1.setTransform(17.0984,13.9522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3C5A9").s().p("AAYDiIgDgCIgDgCIgIgIIgEgGIgDgEIgDgHIgEgHIgJgQIgKgUIgGgMIgIgRIgHgTIgGgTIgIgVIgHgUIgFgLIgHgWQgGgRgGgSIgDAGQgBAHgVAbQgfAmgOgOIAHgXIAEgJIADgJIAGgRIACgJIADgJIAEgIIACgJIAGgRIAGgQIAFgRIAGgQIAGgPIAGgPIAFgQIAGgNIACgHIAGgPIAGgRIB5gMIAlBgIADAHIACAEIAAABIACAGIACAGIABABIACAFIADAHIABAEIADAHIAFANIAEANIAFANIAEAOIAEAMIAEAOIADAMIACAHIADANIAJAkIAFAZIACAQIABAKQgCAOgKgJIgEgEIgIgMIgEgJIgFgKIgDgKIgCgGIgGgLIgEgPIgEgHIgFAFIADAIIAGAPIACAHIACAIIAEANIACAGIACAHIABAGIACAKIAFATIACALIADAYQABAHAAAIIgBAFIgCABIgDgCIgEgDIgEgFIgLgSIgFgHIgEgIIgEgIIgFgKIgHgRIgGgNIgFgNIgGgMIgEgLIgEgHIgLAFIACAIIAFANIABAHIACAHIAEAMIACAGIABAGIABAGIADAKIAFATIADARIADAPIACAVIgBAIIAAABIgDAAIgEgBIgCgDIgEgEIgLgPIgDgGIgEgGIgDgHIgDgGIgHgPIgHgQIgGgNIgEgOIgIgSIgFgNIgCgCQgHgBgGAFIADAIIAFAUIACAIIADAJIAFAQIABAHIACAHIACAGIAEALIAEARIAEANIABAHIAAAGIgCAEIgCABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAeiQQgDACgBAFQgCAcgLAUIgBADQgUAggtAHQgEAAgCADQgDAEAAAEQABAEAEADQADACAEgBQAygHAYgiIAuAXQAEACAEgCQAEgBACgDQABgEgBgEQgBgEgEgCIgtgWQAKgVACgdQABgEgDgDQgCgDgFAAIgBgBQgDAAgDADg");
	this.shape_2.setTransform(16,22.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.9,32,49.4);


(lib.Devojkao1odlakta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F7C12D").s().p("AAAgEIAAACIAAAFIAAACg");
	this.shape.setTransform(21.325,90.0625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3C5A9").s().p("AgXHiQghgRgLgoIgCgQIg/rNQgFglAIgjQAMgsAggdQAfgeApgEIAbAAIAPACQAfAIAaAYQAaAXAMAhQALAcAAAgIgBAnIgDA7IgGBHIgBAUIguIsIAAAJIAAABIAAADQgIAkggAUIgVAKIgNABQgNAAgOgGg");
	this.shape_1.setTransform(13.5324,48.8223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.2,34,100.9);


(lib.Devojkao1dolakta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C0E2D7").s().p("Ai1EfIAZoOIABgSQADgzAlgmQAqgqAmgKQAkgKAyA0QAyA1AmBvQA5DzgSFLQg5ATg1AAQiFAAh0hyg");
	this.shape.setTransform(18.6212,38.8595);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7C12D").s().p("AAAAGIAAgGIAAgEIABgEIgBARIAAgDg");
	this.shape_1.setTransform(3,13.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-1.2,36.5,83.10000000000001);


(lib.MomakSuperheroj = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.Supermomakglava("single",0);
	this.instance.setTransform(45.45,80.9,0.6979,0.6979,-0.9333,0,0,51.5,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:81.2},0).wait(1).to({y:81.5},0).wait(2).to({y:81.9},0).wait(17).to({y:81.5},0).wait(2).to({y:81.2},0).wait(2).to({y:80.9},0).wait(11));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5467B0").s().p("AAfDJIgIgJIgFgGIi6kHIgBAAIAAgBIgCgCIgBgCQgRgXAAgeQAAgmAbgbQAcgbAmAAQAjAAAaAWIAHAIIAIAJQBSBaA6BVQAwBFAOAqIACAHIACAEQAEANAAAOQAAAMgDAKIgIAWQgHALgKAKQgbAbgmAAQgmAAgcgbg");
	this.shape.setTransform(73.2408,107.7096,0.8411,0.8411);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5467B0").s().p("AhBBBIgIgJIgEgHQgPgVAAgcQAAgPAFgOIABgCQAGgTAPgPQAcgbAlAAQAmAAAbAbQANANAHAQIACAGIACAEQAEANAAANQAAALgDALIgIAWQgGAMgLAJQgbAcgmAAQglAAgcgcg");
	this.shape_1.setTransform(80.5837,118.85,0.8406,0.8406);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5467B0").s().p("AgbAdQgMgNAAgQQAAgPAMgNQAMgLAPAAQARAAAMALQALANAAAPQAAAQgLANQgMALgRAAQgPAAgMgLg");
	this.shape_2.setTransform(63.2252,147.8719,0.8406,0.8406);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5467B0").s().p("AirCdQALgIAohkQAhhSA7htIABgBIAZgyQADgLAOgOQAbgbAmAAQAnAAAbAbQANANAHAQIACAGIABAFQAEAMAAAPQAAALgCAKIgJAXQgQAmgkBAQg7BoiQCTQhZgLALhOg");
	this.shape_3.setTransform(74.6367,131.976,0.8411,0.8411);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_4.setTransform(50.1319,149.253,0.3767,0.3767);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_5.setTransform(58.1554,159.7439,0.3767,0.3767);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_6.setTransform(54.8217,159.3295,0.3767,0.3767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAAQgLAMQgMAMgRAAQgQAAgLgMg");
	this.shape_7.setTransform(51.8646,157.5967,0.3767,0.3767);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_8.setTransform(49.5291,155.2236,0.3767,0.3767);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_9.setTransform(58.4475,152.9086,0.3771,0.3771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_10.setTransform(49.5665,149.5747,0.3767,0.3767,0.3133);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_11.setTransform(57.5327,160.1095,0.3767,0.3767,0.3133);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_12.setTransform(54.2013,159.6769,0.3767,0.3767,0.3133);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgQAAgLgLg");
	this.shape_13.setTransform(51.2537,157.928,0.3767,0.3767,0.3133);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_14.setTransform(48.9312,155.542,0.3767,0.3767,0.3133);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_15.setTransform(51.2381,158.0773,0.3767,0.3767);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_16.setTransform(48.9028,155.7043,0.3767,0.3767);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgPAAgMgLg");
	this.shape_17.setTransform(57.8419,160.0341,0.3767,0.3767);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_18.setTransform(54.5083,159.6197,0.3767,0.3767);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_19.setTransform(49.216,155.5139,0.3767,0.3767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:58.4475,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:49.5291,y:155.2236}},{t:this.shape_7,p:{x:51.8646,y:157.5967}},{t:this.shape_6,p:{x:54.8217,y:159.3295}},{t:this.shape_5,p:{x:58.1554,y:159.7439}},{t:this.shape_4,p:{x:50.1319,y:149.253}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{x:63.2252,y:147.8719,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.5837,y:118.85,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]}).to({state:[{t:this.shape_9,p:{x:58.1529,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:49.2791,y:155.5236}},{t:this.shape_7,p:{x:51.6146,y:157.8967}},{t:this.shape_6,p:{x:54.5717,y:159.6295}},{t:this.shape_5,p:{x:57.9054,y:160.0439}},{t:this.shape_4,p:{x:49.8819,y:149.553}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{x:63.0451,y:148.1806,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.404,y:119.1581,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},6).to({state:[{t:this.shape_9,p:{x:62.2,y:149.5,regX:11.4,regY:-10.4,rotation:0}},{t:this.shape_8,p:{x:49.0291,y:155.7236}},{t:this.shape_7,p:{x:51.3646,y:158.0967}},{t:this.shape_6,p:{x:54.3217,y:159.8295}},{t:this.shape_5,p:{x:57.6554,y:160.2439}},{t:this.shape_4,p:{x:49.6319,y:149.753}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{x:62.7252,y:148.3719,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.0837,y:119.35,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},2).to({state:[{t:this.shape_9,p:{x:62.05,y:149.4,regX:11.3,regY:-10.3,rotation:0.3153}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:0.3133,x:49.5665,y:149.5747}},{t:this.shape_3,p:{x:74.111,y:132.499,rotation:0.316}},{t:this.shape_2,p:{x:62.6391,y:148.3241,rotation:0.3151,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.1573,y:119.3976,rotation:0.3151,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},3).to({state:[{t:this.shape_9,p:{x:62.25,y:149.5,regX:11.5,regY:-10.4,rotation:0}},{t:this.shape_16,p:{x:48.9028,y:155.7043}},{t:this.shape_15,p:{x:51.2381,y:158.0773}},{t:this.shape_6,p:{x:54.1949,y:159.8099}},{t:this.shape_10,p:{rotation:0,x:57.5284,y:160.2243}},{t:this.shape_4,p:{x:49.5054,y:149.7342}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{x:62.6453,y:148.3371,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape_1,p:{x:80.0025,y:119.3173,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},5).to({state:[{t:this.shape_9,p:{x:58.134,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_19},{t:this.shape_7,p:{x:51.5514,y:157.887}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_8,p:{x:49.8186,y:149.5436}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{x:63.0252,y:148.1719,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.3837,y:119.15,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},11).to({state:[{t:this.shape_9,p:{x:58.4098,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_16,p:{x:49.4028,y:155.2043}},{t:this.shape_15,p:{x:51.7381,y:157.5773}},{t:this.shape_6,p:{x:54.6949,y:159.3099}},{t:this.shape_10,p:{rotation:0,x:58.0284,y:159.7243}},{t:this.shape_4,p:{x:50.0054,y:149.2342}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{x:63.1453,y:147.8371,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape_1,p:{x:80.5025,y:118.8173,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]},2).wait(11));

	// Layer_5
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1BoQgggcgIgxQgHgyAWgrQAWgrAngLQAmgLAgAbQAhAcAIAyQAIAxgXArQgWArgnAMQgLADgKAAQgbAAgXgUgAgNhNQgZAHgOAaQgNAbAEAfQAGAgAWASQAVASAYgGQAZgGAOgbQAOgbgFgeQgGgggVgSQgRgOgRAAIgMABgAgaA7IgHgFQAAgIgDgLQAKAEAJgCIAGgCQANARAFATIgFAAQgOAAgOgMgAgIAhQAIgHAIgOIAkAeQgMAWgVAGQgFgTgOgSgAgwAbIAEAEIAAAAIADACIAEAPQgHgKgEgLgAALAIQAHgOABgNQATALAOAAQADAYgKAVgAglAdQgCgFgBAAIAMgFIAMAMIgCABIgFAAQgHAAgHgDgAgXAQQAKgHAFgKIANALQgGAOgKAFIgMgNgAgFgGQAFgKABgOIAOAJQgBANgGANgAATgZIAAgDQgBgLgHgLQAMAAAJgEQAOAQAFAZQgNgCgTgKgAACgjQAAgJgCgHIAGABQAIALABAMIgNgIgAAIg4IgEgFIgBAAQgEgGgHgCIgBgCQASgCARAOIACABQgHADgIAAIgFgBg");
	this.shape_20.setTransform(36.3061,100.779,0.9078,0.8353,0,6.4665,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C7EC1").s().p("AApBeQgcgKgHgVQgghPg0AdQghAFgoggQgXgUgGgZQgEgdALgTQAGBKBaAWQA8ADAhAxQBAA5BmgnQgkAtgUABQgKADgMAAQgbAAgkgOg");
	this.shape_21.setTransform(36.3617,111.7788);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#334381").s().p("AAAAtQgUgDgVgGQgvgMgMgJQgLgIgDgIQgDgLAHgPQACARAMAKQAdAWA0AKQAyAKAbgbQAbgZAbglQgOAlgMASQgMAUgSAMQgMAIgVAAQgMAAgPgDg");
	this.shape_22.setTransform(46.705,119.8345);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOAnQgQgLgSgOIgJgHIgFgbIgHghIAUAOIAjAYIAMAHIAIAlIAHAZIgbgPg");
	this.shape_23.setTransform(36,149.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C73A3F").s().p("AACBRQgYgHgQgIIgIgEIgHgZIgIglIAbAOQAUAKATAIQAUAIAWACQAVACAWgCQAVgCAUgFQAVgGAJgEIARgHIgGAoIglAPQgTAHgVADQgVAEgYAAIgDAAQgWAAgXgGgAiNgHIgYgZIgMg2QAQARAQAMIAQAMIAGAhIAGAbIgYgWg");
	this.shape_24.setTransform(44.825,148.5767);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#334381").s().p("AAOAcQgNgFgTgPQgUgOgRgXQAnAgApANQAQADAPgIQgIAOgLAEIgHABQgHAAgJgCg");
	this.shape_25.setTransform(24.075,112.2223);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8F9CCD").s().p("ABaCZIgHgBIAAgBIgCgEIggg7IgVgqQgagygxhpQAZAeAZAkQAcAkA0A3QA0A4AoAhIgIADQgiANggAAIgLAAgAAWCKQgKAAgMgJQgOgJgHgIQgHgIgkgQIgDgBIgBgNIgBgIIgHglIANAIIBLA0IAaAxIAAABQgFgCgLABgAhgBDIgigfIgTgSIAAgCIACgKIAIgZQAXATAeAWIAKAxIACAKIgBAAQgGAAgPgOgAg9AeIgQgMIgJgxQAWAPAVANIAKAEIAOAdIAXAtQgdgUgkgZgAiKgZIALglIAFADIAaAVIAIAxIgygkgAhXgrIgBgHQgHgqgCgjIALAVIAtBeIAAAAQgYgPgWgQgAh8hGIASg/QADAqAGApIgbgUgAinhHQgDgZgEgMIABgBQAHgHAKgLQAJgMAIgNQgPAxgJAxIgBADIgDgUg");
	this.shape_26.setTransform(42.3,138.3993);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5467B0").s().p("ABmC1QgNgDgKgGIgagyIhLgzIgNgJIAHAmIABAHIABANIADACIAFAQQAGAVgVgpIAAgDIgCgKIgKgyQgegWgXgTIgIAaIgCAKIAAACIgCgCIgNhEIABgCQAJgxAPgxIAFgPQARguALgFIAkA/QAPAeAIAQQAxBoAaAyIAVArIAgA6IACAFIgWgEgAgkA0IAQALQAjAaAeATIgYgtIgOgcIgJgGQgVgNgWgOIAJAygAhhAIIAyAkIgIgxIgagUIgFgDgAgvgQIABAHQAWAPAYAPIAAgBIgthdIgLgUQACAjAHAqgAhTgkIAbAUQgGgqgDgqg");
	this.shape_27.setTransform(38.2,135.0125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABLBAQg0g5gagiQgbglgYgeQgJgPgPgfQA1BABXBfQBZBiAlAVIgJAIIgLAHQgpgig0g3gAi2hkIgFgTIAegWIAPgKIgEAOQgIANgJAMQgKAMgHAGIgCgGg");
	this.shape_28.setTransform(43.05,136.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5B6FB9").s().p("AgxGaQg8ghg1hpIg0kcQgPgwgigoQgKgKgBggQgBg0AahCQAahDAtg5QASgYAXgUQDAgGCfBuQAXAPAQATQAJAKADANQAPA3gIA6QgIBDgcA/QgdBAgWBCQgHAUAEA5QAEA5gGAqIgHAxIgGAmQgZAdgkAQQglAPg8ABQgcgFgegPg");
	this.shape_29.setTransform(44.801,119.7368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(40));

	// Layer_4
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5467B0").s().p("AimC2QgigJgPgeQgFgMgCgLIAAgWQACgKAEgKQAFgNAHgKIADgDIAFgFQALgNAQgIQAigSAiAIQAjAJAPAfQAIARgBASIAAACQgBANgFAOQgKAZgUAQIgHAFIgKAHQgXAMgXAAQgLAAgMgDgABmgPQgjgJgOgfQgPgeANgiQAKgbAYgRIAKgGIAJgFQAfgPAfAIQAiAJAPAeQAPAfgNAjQgKAagXARIgDABIgBACIgBAAIgBABIgDACIgFACQgXANgXAAQgLAAgLgDg");
	this.shape_30.setTransform(31.25,80.9,0.8405,0.8405,0,0,0,14.7,-12.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5467B0").s().p("AikC3QgjgJgPgeQgGgMgCgLIAAgWQACgJAEgKQAFgNAHgLIADgDIAEgFQAcgjBDgzQBRhABog+IAKgFIAJgGQAegPAhAIQAiAIAQAfQAOAegNAiQgKAbgWARIgDABIgCACIgBABIkBDBIgHAFIgKAGQgXANgYAAQgKAAgLgDg");
	this.shape_31.setTransform(30.95,83.15,0.8408,0.8408,0,0,0,14.6,-10.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgMIgHgWQgCgJgBgKQAAgOADgLIACgDIACgGQAFgOALgLQAYgXAhAEQAhAEAYAcQANAQAGASIABACQAEAOAAAOQAAAZgMAUIgEAFIgHAIQgUAUgcAAIgJgBg");
	this.shape_32.setTransform(6.6431,102.7654,0.8408,0.8408);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5467B0").s().p("AAAAmQgNgCgLgMQgKgMAAgPQAAgQAKgJQAKgKAOABQAOACAKAMQALAMAAAPQAAAQgKAKQgJAIgLAAIgFAAg");
	this.shape_33.setTransform(22.0716,131.675,0.8408,0.8408);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5467B0").s().p("AhfgQQgfg/gPgmIgIgWIgCgVQAAgNADgMIABgDIACgGQAGgOALgLQAXgWAiAEQAhAEAZAcQALAOADAKIAXAxIABACQAzBrAeBRQAkBhAJAJQALBJhOACQh/iZg0hmg");
	this.shape_34.setTransform(12.8047,115.5553,0.8412,0.8412);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_35.setTransform(35.0238,133.1521,0.3313,0.3095,0,2.1643,-178.4479);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_36.setTransform(27.6452,141.5745,0.3313,0.3095,0,2.1643,-178.4479);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_37.setTransform(30.5886,141.3137,0.3313,0.3095,0,2.1643,-178.4479);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_38.setTransform(33.2417,139.9614,0.3313,0.3095,0,2.1643,-178.4479);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_39.setTransform(35.3684,138.0686,0.3313,0.3095,0,2.1643,-178.4479);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_40.setTransform(27.4908,136.122,0.3317,0.31,0,2.1664,-178.4475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgLIgHgXQgCgJgBgKQAAgNADgMIACgEIACgGQAFgNALgLQAYgXAhAEQAhAEAYAcQANAQAGATIABABQAEAOAAANQAAAbgMASIgEAGIgHAIQgUAUgcAAIgJgBg");
	this.shape_41.setTransform(6.7156,102.9052,0.8408,0.8408,0.6832);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgLgGgLIgHgVQgCgKgBgKQAAgOADgLIACgEIACgFQAFgOALgLQAYgXAhAEQAhAEAYAcQANAQAGASIABACQAEAOAAAOQAAAZgMAUIgEAFIgHAIQgUAUgcAAIgJgBg");
	this.shape_42.setTransform(7.062,103.2255,0.8408,0.8408,0.7497);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_43.setTransform(35.1388,134.1502,0.3312,0.3095,0,2.914,-177.703);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_44.setTransform(27.6515,142.4745,0.3312,0.3095,0,2.914,-177.703);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_45.setTransform(30.5977,142.2521,0.3312,0.3095,0,2.914,-177.703);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_46.setTransform(33.268,140.9346,0.3312,0.3095,0,2.914,-177.703);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_47.setTransform(35.419,139.0699,0.3312,0.3095,0,2.914,-177.703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40,p:{skewX:2.1664,skewY:-178.4475,x:27.4908,y:136.122}},{t:this.shape_39,p:{scaleX:0.3313,skewX:2.1643,skewY:-178.4479,x:35.3684,y:138.0686}},{t:this.shape_38,p:{scaleX:0.3313,skewX:2.1643,skewY:-178.4479,x:33.2417,y:139.9614}},{t:this.shape_37,p:{scaleX:0.3313,skewX:2.1643,skewY:-178.4479,x:30.5886,y:141.3137}},{t:this.shape_36,p:{scaleX:0.3313,skewX:2.1643,skewY:-178.4479,x:27.6452,y:141.5745}},{t:this.shape_35,p:{scaleX:0.3313,skewX:2.1643,skewY:-178.4479,x:35.0238,y:133.1521}},{t:this.shape_34,p:{rotation:0,x:12.8047,y:115.5553}},{t:this.shape_33,p:{rotation:0,x:22.0716,y:131.675}},{t:this.shape_32},{t:this.shape_31,p:{regX:14.6,regY:-10.6,rotation:0,x:30.95,y:83.15}},{t:this.shape_30,p:{regX:14.7,regY:-12.7,scaleX:0.8405,scaleY:0.8405,rotation:0,x:31.25,y:80.9}}]}).to({state:[{t:this.shape_40,p:{skewX:2.8469,skewY:-177.767,x:27.2442,y:136.5873}},{t:this.shape_39,p:{scaleX:0.3312,skewX:2.8459,skewY:-177.7691,x:35.0945,y:138.6567}},{t:this.shape_38,p:{scaleX:0.3312,skewX:2.8459,skewY:-177.7691,x:32.9456,y:140.5241}},{t:this.shape_37,p:{scaleX:0.3312,skewX:2.8459,skewY:-177.7691,x:30.2768,y:141.8447}},{t:this.shape_36,p:{scaleX:0.3312,skewX:2.8459,skewY:-177.7691,x:27.3307,y:142.0706}},{t:this.shape_35,p:{scaleX:0.3312,skewX:2.8459,skewY:-177.7691,x:34.8085,y:133.7369}},{t:this.shape_34,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_33,p:{rotation:0.6832,x:21.7972,y:131.9945}},{t:this.shape_41,p:{rotation:0.6832,x:6.7156,y:102.9052}},{t:this.shape_31,p:{regX:14.9,regY:-11,rotation:-0.3151,x:31.15,y:82.85}},{t:this.shape_30,p:{regX:14.1,regY:-13.3,scaleX:0.8404,scaleY:0.8404,rotation:-0.3142,x:30.65,y:80.4}}]},6).to({state:[{t:this.shape_40,p:{skewX:2.9148,skewY:-177.701,x:27.5551,y:137.052}},{t:this.shape_39,p:{scaleX:0.3312,skewX:2.9139,skewY:-177.7031,x:35.3581,y:139.0789}},{t:this.shape_38,p:{scaleX:0.3312,skewX:2.9139,skewY:-177.7031,x:33.207,y:140.9437}},{t:this.shape_37,p:{scaleX:0.3312,skewX:2.9139,skewY:-177.7031,x:30.5366,y:142.2612}},{t:this.shape_36,p:{scaleX:0.3312,skewX:2.9139,skewY:-177.7031,x:27.5902,y:142.4837}},{t:this.shape_35,p:{scaleX:0.3312,skewX:2.9139,skewY:-177.7031,x:35.0779,y:134.1589}},{t:this.shape_34,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_33,p:{rotation:0.7497,x:22.1287,y:132.3831}},{t:this.shape_41,p:{rotation:0.7497,x:7.0804,y:103.2754}},{t:this.shape_31,p:{regX:14.3,regY:-10.8,rotation:-1.225,x:30.6,y:82.95}},{t:this.shape_30,p:{regX:14.4,regY:-13,scaleX:0.8404,scaleY:0.8404,rotation:-1.2245,x:30.9,y:80.65}}]},2).to({state:[{t:this.shape_40,p:{skewX:2.5956,skewY:-178.0174,x:27.7517,y:136.9674}},{t:this.shape_39,p:{scaleX:0.3312,skewX:2.5942,skewY:-178.02,x:35.5672,y:138.9579}},{t:this.shape_38,p:{scaleX:0.3312,skewX:2.5942,skewY:-178.02,x:33.4266,y:140.8346}},{t:this.shape_37,p:{scaleX:0.3312,skewX:2.5942,skewY:-178.02,x:30.7637,y:142.1669}},{t:this.shape_36,p:{scaleX:0.3312,skewX:2.5942,skewY:-178.02,x:27.8187,y:142.4057}},{t:this.shape_35,p:{scaleX:0.3312,skewX:2.5942,skewY:-178.02,x:35.2596,y:134.0394}},{t:this.shape_34,p:{rotation:0.4334,x:13.2168,y:116.1728}},{t:this.shape_33,p:{rotation:0.4326,x:22.3107,y:132.2788}},{t:this.shape_41,p:{rotation:0.4326,x:7.1021,y:103.256}},{t:this.shape_31,p:{regX:14.3,regY:-10.8,rotation:-1.225,x:30.6,y:82.95}},{t:this.shape_30,p:{regX:14.4,regY:-13,scaleX:0.8404,scaleY:0.8404,rotation:-1.2245,x:30.9,y:80.65}}]},3).to({state:[{t:this.shape_40,p:{skewX:2.9148,skewY:-177.701,x:27.5717,y:137.0526}},{t:this.shape_47,p:{skewX:2.914,skewY:-177.703,x:35.419,y:139.0699}},{t:this.shape_46,p:{skewX:2.914,skewY:-177.703,x:33.268,y:140.9346}},{t:this.shape_45,p:{skewX:2.914,skewY:-177.703,x:30.5977,y:142.2521}},{t:this.shape_44,p:{skewX:2.914,skewY:-177.703,x:27.6515,y:142.4745}},{t:this.shape_43,p:{skewX:2.914,skewY:-177.703,x:35.1388,y:134.1502}},{t:this.shape_34,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_33,p:{rotation:0.7497,x:22.11,y:132.3326}},{t:this.shape_42},{t:this.shape_31,p:{regX:14.3,regY:-10.8,rotation:-1.225,x:30.6,y:82.9}},{t:this.shape_30,p:{regX:14.3,regY:-13,scaleX:0.8404,scaleY:0.8404,rotation:-1.2245,x:30.75,y:80.65}}]},5).to({state:[{t:this.shape_40,p:{skewX:2.8469,skewY:-177.767,x:27.2608,y:136.588}},{t:this.shape_47,p:{skewX:2.8462,skewY:-177.769,x:35.1554,y:138.6381}},{t:this.shape_46,p:{skewX:2.8462,skewY:-177.769,x:33.0066,y:140.5053}},{t:this.shape_45,p:{skewX:2.8462,skewY:-177.769,x:30.3379,y:141.8258}},{t:this.shape_44,p:{skewX:2.8462,skewY:-177.769,x:27.392,y:142.0516}},{t:this.shape_43,p:{skewX:2.8462,skewY:-177.769,x:34.8694,y:133.7188}},{t:this.shape_34,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_33,p:{rotation:0.6832,x:21.7588,y:131.9777}},{t:this.shape_41,p:{rotation:0.6832,x:6.6777,y:102.8894}},{t:this.shape_31,p:{regX:14.9,regY:-11,rotation:-0.3151,x:31.15,y:82.85}},{t:this.shape_30,p:{regX:14,regY:-13.3,scaleX:0.8404,scaleY:0.8404,rotation:-0.3142,x:30.5,y:80.35}}]},11).to({state:[{t:this.shape_40,p:{skewX:2.8469,skewY:-177.767,x:27.2608,y:136.588}},{t:this.shape_47,p:{skewX:2.8462,skewY:-177.769,x:35.1554,y:138.6381}},{t:this.shape_46,p:{skewX:2.8462,skewY:-177.769,x:33.0066,y:140.5053}},{t:this.shape_45,p:{skewX:2.8462,skewY:-177.769,x:30.3379,y:141.8258}},{t:this.shape_44,p:{skewX:2.8462,skewY:-177.769,x:27.392,y:142.0516}},{t:this.shape_43,p:{skewX:2.8462,skewY:-177.769,x:34.8694,y:133.7188}},{t:this.shape_34,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_33,p:{rotation:0.6832,x:21.7588,y:131.9777}},{t:this.shape_41,p:{rotation:0.6832,x:6.6777,y:102.8894}},{t:this.shape_31,p:{regX:14.9,regY:-11,rotation:-0.3151,x:31.15,y:82.85}},{t:this.shape_30,p:{regX:14,regY:-13.3,scaleX:0.8404,scaleY:0.8404,rotation:-0.3142,x:30.5,y:80.35}}]},2).wait(11));

	// Layer_3
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5467B0").s().p("AhEDPQgSgTgEgaQgCgOAAgTQAIiSAMg+QALg1AJglIACgHIABgFIAAABQAGgOALgMQAWgVAdAAQALAAAKADQASAFANANQAWAWAAAeIAAACIgCASIgHAnQgQBZgLCWIAAALQAAAegWAWQgVAVgeAAQgeAAgWgVg");
	this.shape_48.setTransform(51.7326,169.6046,0.8413,0.8413,1.0393);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C73A3F").s().p("Ag1BlQAYhFAKg6IgihRIADgKIAKglQAEAKAUANQAZATAagBIAEAAIAJAzQAEAWAIAYQAGASgPAcQgNAXgWAfQgrA9gUAJIgEABQgSAAAQg2g");
	this.shape_49.setTransform(53.4881,216.3659,0.8412,0.8412,5.5229);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgnQgNgpgGgiQgBgFAAgNIAAgEQACgcAUgVQAWgVAegBQAXAAASAOIAKAIQAQAQAEAVIADAFQAEAOAFAsQAQCPAQBbIgEAAQgaABgbgSQgTgOgFgKIgKAmIgCAKIgohkg");
	this.shape_50.setTransform(51.1471,191.6914,0.8412,0.8412,5.5229);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgnQgNgpgGgjQgBgEAAgOIAAgDQACgcAUgVQAWgWAeAAQAXAAASAOIAKAIQAQAQAEAVIADAFQAEAPAFArQAQCPAQBcIgEAAQgaAAgbgSQgTgOgFgKIgKAlIgCALIgohkg");
	this.shape_51.setTransform(51.7555,191.8715,0.8413,0.8413,1.5258);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5467B0").s().p("AgmBSQgYg5gMgnQgNgogGgiQgBgFAAgNIAAgEQACgcAUgVQAWgVAeAAQAXAAASANIAKAIQAQARAEATIADAGQAEAOAFAsQAQCQAQBaIgEAAQgaACgbgUQgTgNgFgJIgKAlIgCAKIgohkg");
	this.shape_52.setTransform(51.1592,191.5658,0.8412,0.8412,5.5229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.4881,y:216.3659}},{t:this.shape_48,p:{rotation:1.0393,x:51.7326,y:169.6046}}]}).to({state:[{t:this.shape_51,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_48,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},6).to({state:[{t:this.shape_51,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_48,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},2).to({state:[{t:this.shape_51,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_48,p:{rotation:0,x:51.8376,y:169.6533}}]},2).to({state:[{t:this.shape_51,p:{rotation:-0.7067,x:52.3017,y:191.7334}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:-0.7067,x:57.3067,y:216.0097}},{t:this.shape_48,p:{rotation:0,x:51.8376,y:169.6533}}]},3).to({state:[{t:this.shape_51,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_48,p:{rotation:0,x:51.8376,y:169.6533}}]},6).to({state:[{t:this.shape_51,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_48,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},4).to({state:[{t:this.shape_51,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_48,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},2).to({state:[{t:this.shape_51,p:{rotation:3.4762,x:51.4955,y:191.9394}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:3.4762,x:54.7164,y:216.5157}},{t:this.shape_48,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},3).to({state:[{t:this.shape_52},{t:this.shape_49,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.5003,y:216.2403}},{t:this.shape_48,p:{rotation:1.0393,x:51.7326,y:169.6046}}]},3).wait(9));

	// Layer_2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5467B0").s().p("Ag2DeQgfgFgRgZQgQgVACgbQAAgOADgTQAgiOAWg7QATgzAQgjIACgGIACgFIAAABQAIgNANgKQAYgRAeAFQALACAKAEQAQAIALAPQASAZgFAeIAAACIgGARIgMAmQgfBUgjCTIgDALQgFAegYASQgTANgWAAIgNgBg");
	this.shape_53.setTransform(33.8,150.45,0.8413,0.8413,-1.9957,0,0,3.5,-14.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C73A3F").s().p("AAMBeQgGhIgOg5Ig/g8IgCgKIgGgmQAIAHAXAEQAhAHAVgLIAEgCIAdArQAMASASATQANAOgDAhQgDAYgHAmQgPBJgPARQgEADgDAAQgNAAgHgyg");
	this.shape_54.setTransform(40.2445,208.1956,0.8413,0.8413,10.4123);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5467B0").s().p("AgMBaQgsgqgcggQgcgfgTgcQgDgEgGgNIgBgDQgLgaALgbQALgcAcgNQAVgJAXAEIAMAEQAVAIAMAQIAEAFQAJALAWAmQBKB8AzBNIgEACQgWALghgGQgXgFgIgHIAGAmIACAKIhNhKg");
	this.shape_55.setTransform(32.862,184.5663,0.8413,0.8413,10.4123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.5,regY:-14.3,rotation:-1.9957,x:33.8,y:150.45}}]}).to({state:[{t:this.shape_55,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},6).to({state:[{t:this.shape_55,p:{rotation:1.9967,x:33.5395,y:183.5152,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:1.9967,x:44.3011,y:205.8103,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_55,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_55,p:{rotation:-0.7067,x:33.5479,y:183.1396,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:-0.7067,x:45.3492,y:204.9026,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},3).to({state:[{t:this.shape_55,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},6).to({state:[{t:this.shape_55,p:{rotation:1.9967,x:33.5395,y:183.5152,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:1.9967,x:44.3011,y:205.8103,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},4).to({state:[{t:this.shape_55,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},2).to({state:[{t:this.shape_55,p:{rotation:7.2096,x:33.097,y:184.1445,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_54,p:{rotation:7.2096,x:41.7882,y:207.3245,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_53,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},3).to({state:[{t:this.shape_55,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.3,regY:-14.3,rotation:-1.9957,x:33.6,y:150.45}}]},3).wait(9));

	// Layer_8
	this.instance_1 = new lib.PlastSuperHeroja("synched",0);
	this.instance_1.setTransform(53.55,89.5,0.3772,0.3772,0,0,0,60.1,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0.4,98.5,228.9);


(lib.Supermomaklebdi = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MomakSuperheroj("synched",0);
	this.instance.setTransform(90.35,145.95,1,1,0,0,0,73.7,131.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:152.7,startPosition:11},11).wait(9).to({y:152.9,startPosition:20},0).to({y:146.4,startPosition:29},9).to({y:145.05,startPosition:32},3).wait(7).to({y:146.4,startPosition:39},0).to({y:152.25,startPosition:9},10).to({y:152.7,startPosition:12},3).wait(8).to({y:152.25,startPosition:20},0).to({y:145.95,startPosition:32},12).to({y:145.5,startPosition:35},3).wait(5));

	// Layer_2
	this.instance_1 = new lib.Superdecaksenka("synched",0);
	this.instance_1.setTransform(70.5,268.2,1,1,0,0,0,18.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1805,scaleY:1.1805,x:70.55},11).wait(9).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:70.5},9).wait(10).to({startPosition:0},0).to({scaleX:1.1805,scaleY:1.1805,x:70.55},10).wait(11).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:70.5},12).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.8,14,98.4,262.7);


(lib.Superdevojka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.instance = new lib.SDevojkao1glava("single",6);
	this.instance.setTransform(113.95,78.95,0.6308,0.6308,0,1.734,-178.266,50.5,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({y:79.4},0).wait(2).to({y:79.85},0).wait(3).to({y:79.95},0).wait(15).to({y:79.85},0).wait(3).to({y:79.4},0).wait(2).to({y:78.95},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD4732").s().p("AiECoQgHgFgGgGQgHgIgDgJIgDgTQgBgIACgKQABgLAFgMIACgDQABgEACgCQAQgmAwhAQAKgUAQgbQAcgkAhglQARgQASgGQA7gNArBCQAdAsgUAsQgYAfgxArQg1AwhGA9QgfAZgbAAQgPAAgOgIg");
	this.shape.setTransform(95,80.7,1,1,0,0,0,11.6,-16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD4732").s().p("AhAAEQggglgRgYIgJgOQgEgGgCgHQgCgJgBgHIAAgDIAAgEQACgKAFgIQADgHAFgFQAOgPAVgBQAUAAAOAKQAKAIAHALIgFgJQA+AmAsBaQArBaALAMQAVAugxALQhthYg0g+g");
	this.shape_1.setTransform(80.85,145.4,1.2851,1.2851,29.3128,0,0,10.3,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_2.setTransform(94.4028,150.3537,0.3577,0.3342,0,20.0359,-160.5795);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_3.setTransform(84.0289,156.5649,0.3577,0.3342,0,20.0359,-160.5795);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_4.setTransform(87.1402,157.272,0.3577,0.3342,0,20.0359,-160.5795);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(90.3149,156.7613,0.3577,0.3342,0,20.0359,-160.5795);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_6.setTransform(93.1277,155.5205,0.3577,0.3342,0,20.0359,-160.5795);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_7.setTransform(81.5,145.6,0.3583,0.3348,0,20.0362,-160.5796,14.8,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAIAMguQATgkAYglQAMgSAOgHQAygWAwA0QAhAigLAqQgQAfgkAtQgnAzgzBBQgdAggZAAQgJAAgIgEg");
	this.shape_8.setTransform(94.5,80.4,1.1194,1.1194,10.2322,0,0,6.9,-16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_9.setTransform(95.1954,149.9879,0.3577,0.3342,0,19.0331,-161.579);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_10.setTransform(91.2206,156.4652,0.3577,0.3342,0,19.0331,-161.579);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_11.setTransform(94.011,155.1758,0.3577,0.3342,0,19.0331,-161.579);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAQAGgTAFgbQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggZAAQgIAAgJgEg");
	this.shape_12.setTransform(94.45,80.35,1.1194,1.1194,10.2322,0,0,6.9,-16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_13.setTransform(94.8301,150.2094,0.3577,0.3342,0,19.585,-161.0263);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_14.setTransform(90.7932,156.6481,0.3577,0.3342,0,19.585,-161.0263);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_15.setTransform(93.5959,155.3856,0.3577,0.3342,0,19.585,-161.0263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{regX:14.8,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0359,skewY:-160.5795,x:93.1277,y:155.5205}},{t:this.shape_5,p:{skewX:20.0359,skewY:-160.5795,x:90.3149,y:156.7613}},{t:this.shape_4,p:{skewX:20.0359,skewY:-160.5795,x:87.1402,y:157.272}},{t:this.shape_3,p:{skewX:20.0359,skewY:-160.5795,x:84.0289,y:156.5649}},{t:this.shape_2,p:{skewX:20.0359,skewY:-160.5795,x:94.4028,y:150.3537}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{regX:14.5,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.95,y:145.55}},{t:this.shape_6,p:{skewX:19.5866,skewY:-161.0271,x:93.525,y:155.3894}},{t:this.shape_5,p:{skewX:19.5866,skewY:-161.0271,x:90.7221,y:156.652}},{t:this.shape_4,p:{skewX:19.5866,skewY:-161.0271,x:87.5516,y:157.1874}},{t:this.shape_3,p:{skewX:19.5866,skewY:-161.0271,x:84.4349,y:156.5046}},{t:this.shape_2,p:{skewX:19.5866,skewY:-161.0271,x:94.7595,y:150.213}},{t:this.shape_1,p:{regX:10.1,rotation:28.8661,x:81.2,y:144.8}},{t:this.shape_8}]},13).to({state:[{t:this.shape_7,p:{regX:14.8,regY:-10.4,skewX:19.0336,skewY:-161.5797,x:82.2,y:145.55}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{skewX:19.0331,skewY:-161.579,x:88.0554,y:157.0311}},{t:this.shape_4,p:{skewX:19.0331,skewY:-161.579,x:84.9324,y:156.3784}},{t:this.shape_9,p:{skewX:19.0331,skewY:-161.579,x:95.1954,y:149.9879}},{t:this.shape_1,p:{regX:10.3,rotation:28.3123,x:81.55,y:145.35}},{t:this.shape_8}]},2).to({state:[{t:this.shape_7,p:{regX:14.6,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.9,y:145.55}},{t:this.shape_15,p:{skewX:19.585,skewY:-161.0263,x:93.5959,y:155.3856}},{t:this.shape_14,p:{skewX:19.585,skewY:-161.0263,x:90.7932,y:156.6481}},{t:this.shape_4,p:{skewX:19.585,skewY:-161.0263,x:87.6228,y:157.1834}},{t:this.shape_9,p:{skewX:19.585,skewY:-161.0263,x:84.5063,y:156.5006}},{t:this.shape_13,p:{skewX:19.585,skewY:-161.0263,x:94.8301,y:150.2094}},{t:this.shape_1,p:{regX:10.1,rotation:28.8661,x:81.25,y:144.7}},{t:this.shape_12}]},16).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_15,p:{skewX:20.0352,skewY:-160.581,x:93.1985,y:155.5516}},{t:this.shape_14,p:{skewX:20.0352,skewY:-160.581,x:90.3859,y:156.7922}},{t:this.shape_4,p:{skewX:20.0352,skewY:-160.581,x:87.2114,y:157.3029}},{t:this.shape_9,p:{skewX:20.0352,skewY:-160.581,x:84.1003,y:156.5959}},{t:this.shape_13,p:{skewX:20.0352,skewY:-160.581,x:94.4734,y:150.3852}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_12}]},2).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_15,p:{skewX:20.0352,skewY:-160.581,x:93.1985,y:155.5516}},{t:this.shape_14,p:{skewX:20.0352,skewY:-160.581,x:90.3859,y:156.7922}},{t:this.shape_4,p:{skewX:20.0352,skewY:-160.581,x:87.2114,y:157.3029}},{t:this.shape_9,p:{skewX:20.0352,skewY:-160.581,x:84.1003,y:156.5959}},{t:this.shape_13,p:{skewX:20.0352,skewY:-160.581,x:94.4734,y:150.3852}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_12}]},2).to({state:[]},1).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_15,p:{skewX:20.0352,skewY:-160.581,x:93.1985,y:155.5516}},{t:this.shape_14,p:{skewX:20.0352,skewY:-160.581,x:90.3859,y:156.7922}},{t:this.shape_4,p:{skewX:20.0352,skewY:-160.581,x:87.2114,y:157.3029}},{t:this.shape_9,p:{skewX:20.0352,skewY:-160.581,x:84.1003,y:156.5959}},{t:this.shape_13,p:{skewX:20.0352,skewY:-160.581,x:94.4734,y:150.3852}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_12}]},3).wait(1));

	// Layer_5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJBRQgngBgfgYQgfgYgEghQgDghAagXQAZgYAoABQAnAAAfAZQAfAYAEAgQADAigZAXQgZAXgoAAIgBAAgAgwgkQgSAPADAVQACAUAUAOQAUAQAaAAQAaAAARgOQARgOgCgVQgDgUgUgPQgUgPgZAAIgCAAQgZAAgQANgAAAAsQgDgEgHgFQAJgCAFgFIADgDQAVADANAIQgOAJgTAAIgIgBgAgZAkIAGABIAAgBIADAAIALAHQgKgCgKgFgAAKAVQAEgHgBgLIArABQACARgOAMQgOgIgUgEgAgUAfIAHgIIAQABIgCABQgFAGgLABIgFgBgAgKAUQAEgJAAgJIAPABQAAALgEAHQgHgBgIAAgAANAAQgBgLgGgIQAUgCAMgGQAOAMADAPgAgGAAQgCgIgFgJIAOgBQAHAHABALgAgZgcIAFgCQAMADAHAGIgOABIgKgIgAABgXQgFgGgLgDQAJgFAFgGQATACAQALQgLAGgUACIgCgBgAgagjIgBAAQgHAAgGABIgCAAQANgKAVAAIACAAQgFAGgKAEIgFgBg");
	this.shape_16.setTransform(117.9425,95.3284,1.2172,1.4803,0,-4.6603,-6.1455);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpAyIAHgWIAIghIAYgVQAOgNAMgGQALgGAHABQgCAMgEARIgGAYQgCANgNAMQgNAMgSAGQgOAFgIAAIgDgBg");
	this.shape_17.setTransform(117.05,129.7543);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7C12D").s().p("AhyBcQgWgCgSgDIgQgEIgEgiIALACQAqAAA7gNQA7gMAQgIQARgJAPgFIgJAiIgHAWIgIAEQgQAJgZAIQgZAIgXACIgfABIgPAAgABrgLQAFgRABgMIARgMQAQgMAdgbIgJAwQgaAVgOAOIgZAVIAGgYg");
	this.shape_18.setTransform(109.925,128.7917);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC4C4C").s().p("AitFHIAAgWQAngdBHhJQBDhGA2hQQjMjEg+hkQAHgCAWgMQAMAsBxB4QAVAeB4BtQg9BRgXAdQgbAhg0A1Qg1A2gpAgIgDgBgAgEDzIBMg0IANgIIgHAgIgBAHIgBAMQgxAlg1APgAAbC8IAOgaIAKgFIAsgcIgJArIgQANIhDAtgABVDcIAKgtIA1gnIAFArIgiAcQgUARgQAEgABpB5IAcgUIAEgDIAJAgIgxAkIAIgtgAAxCUIAvhVIAKgSQgCAdgGAmIgBAGIgxAfIABgBgABzAnIATA1IgbATQAGglACgjgACWA6IgJgOIgCgCIgCgDIAAgCIAAAAQgBgCACABQgBgBACgEQAThCAVhTQAVhRgahYQgCgIgTgcIgCgEQAYAWARAjIADAGQAXA1gQBLIgtCtQAKAOARAWIgFAYQgNgPgQgYg");
	this.shape_19.setTransform(110.0575,103.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B43320").s().p("Ag6FtQg8gHghgXQgLgbgDhbQgDhagLgnQgLgngcg0Qgbg1gJg4QgBgRAAgQQAAghAKggQAEgLAIgIQARgSAWgOQCehlC5gEQAWAQARASQAEAEAkA5QAjA5gIBJIgjB3Ig0DyQhMBwgtAUQggAPgpAAQgPAAgRgCg");
	this.shape_20.setTransform(108.7912,106.4088);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},35).to({state:[]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).wait(1));

	// Layer_6
	this.instance_1 = new lib.SDevojkaplast("synched",0);
	this.instance_1.setTransform(103.4,82.6,1,1,-7.4946,0,0,103.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({startPosition:35},0).to({_off:true},1).wait(3).to({_off:false,startPosition:39},0).wait(1));

	// Layer_3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DD4732").s().p("AADDTQgXgCgKgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAGgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgQAQgVAAIgEAAg");
	this.shape_21.setTransform(103.65,135.65,1.1202,1.1202,0,0,0,1.8,-10.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7C12D").s().p("AgXBOIgQgqQAFgNAAgSQgHADgGAHIgCgLQAOgjAXhIQARgBATgMQARgLAEgIIAEAjIABAJQgQAhgZAvQgGBRAGBCQgMgRgUgpg");
	this.shape_22.setTransform(91.7039,204.8529,1.1202,1.1202);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DD4732").s().p("AgRCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQAEgDABgDQAKgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgRAygQAlIgBgIg");
	this.shape_23.setTransform(99.251,175.9907,1.1202,1.1202);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DD4732").s().p("AADDTQgXgCgJgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAFgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_24.setTransform(103.6,135.65,1.1202,1.1202,0,0,0,1.8,-10.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DD4732").s().p("AgRCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQAKgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgRAygQAlIgBgIg");
	this.shape_25.setTransform(99.08,175.9531,1.1201,1.1201,0.9491);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DD4732").s().p("AAFDTQgXgCgNgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAJgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_26.setTransform(102.95,135.3,1.1201,1.1201,-1.7041,0,0,1.5,-10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DD4732").s().p("AgRCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgQAygQAlIgBgIg");
	this.shape_27.setTransform(99.6644,175.855,1.1202,1.1202,2.7836);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DD4732").s().p("AACDTQgXgCgIgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAEgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_28.setTransform(103.45,135.75,1.1202,1.1202,-3.4081,0,0,1.8,-10.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DD4732").s().p("AgQCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQAEgDAAgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgQAygPAlIgBgIg");
	this.shape_29.setTransform(99.7935,175.7444,1.1201,1.1201,4.2233);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DD4732").s().p("AgQCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDAAgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgQAygPAlIgBgIg");
	this.shape_30.setTransform(99.5805,175.8509,1.1202,1.1202,2.7836);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD4732").s().p("AACDTQgXgCgIgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAEgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgQAQgVAAIgEAAg");
	this.shape_31.setTransform(103.7,135.65,1.1202,1.1202,0,0,0,1.9,-10.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DD4732").s().p("AACDTQgXgCgIgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAEgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_32.setTransform(103.7,135.65,1.1202,1.1202,0,0,0,1.9,-10.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DD4732").s().p("AgQCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQAEgDAAgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgQAygPAlIgBgIg");
	this.shape_33.setTransform(99.167,175.9907,1.1202,1.1202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_21}]}).to({state:[{t:this.shape_25,p:{rotation:0.9491,x:99.08,y:175.9531}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_24,p:{rotation:0,x:103.6,y:135.65}}]},8).to({state:[{t:this.shape_27,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:99.6644,y:175.855}},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_26,p:{regY:-10.8,rotation:-1.7041,y:135.3,x:102.95}}]},2).to({state:[{t:this.shape_27,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:99.8494,y:175.7485}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_26,p:{regY:-10.5,rotation:-2.4781,y:135.7,x:102.95}}]},2).to({state:[{t:this.shape_25,p:{rotation:5.5306,x:100.1079,y:175.8336}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_24,p:{rotation:-3.4081,x:103.45,y:135.75}}]},3).to({state:[{t:this.shape_25,p:{rotation:6.4796,x:100.0534,y:175.3206}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.4796,x:89.3258,y:203.1487}},{t:this.shape_24,p:{rotation:-3.4081,x:103.45,y:135.75}}]},3).to({state:[{t:this.shape_27,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:100.08,y:175.8309}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_28}]},9).to({state:[{t:this.shape_29,p:{rotation:4.2233,x:99.7935,y:175.7444}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_26,p:{regY:-10.5,rotation:-2.4781,y:135.7,x:102.8}}]},2).to({state:[{t:this.shape_30},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_26,p:{regY:-10.8,rotation:-1.7041,y:135.3,x:102.75}}]},2).to({state:[{t:this.shape_29,p:{rotation:0.9491,x:98.996,y:175.9517}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_31}]},2).to({state:[{t:this.shape_29,p:{rotation:0.9491,x:98.996,y:175.9517}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_31}]},2).to({state:[]},1).to({state:[{t:this.shape_33},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_32}]},3).wait(1));

	// Layer_2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DD4732").s().p("AAeCsQgbgSAAgEQAAgEgeg7Qggg6gcglQgcgmAEgQQAFgRAAgKQABgKgDgPQgEgRAJgWQAFgOALgJQAGgEAIgDQAVgHAVAMQALAHAHALIAAgBIADAFIADAEQAQAdAWApQAZAwAvB2QAFAPADAMQAFAXgIAUQgJAWgVAIQgGACgHAAQgQAAgTgOg");
	this.shape_34.setTransform(120.55,131.1,1.1202,1.1202,0,0,0,-2.8,-9.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIQgYAagiAkQgaBJgLA9QgIgTgHgrg");
	this.shape_35.setTransform(111.3068,190.9068,1.1202,1.1202);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DD4732").s().p("Ag2CIIAFghQgGAHgSAGQgVAGgPgFIAlhGQAkhDATgoQASgoADgGIAJgOQAFgJAQgIQAFgDAFgCQARgFARAHQAVAIAIAYQAIAWgJAXIgBADIgHAPQgPAagWAbQgWAdgiAnIg8BFIABgJg");
	this.shape_36.setTransform(123.8674,166.0015,1.1202,1.1202);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIIg6A+QgaBJgLA9QgIgTgHgrg");
	this.shape_37.setTransform(110.5875,190.5242,1.1202,1.1202,1.1833);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgdAng8QAPAEAVgGQASgFAGgHIgFAhIgBAJIg6A9QgaBJgLA9QgIgTgHgqg");
	this.shape_38.setTransform(108.4789,187.7012,1.1201,1.1201,7.6935);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgcAng9QAPAFAVgGQASgGAGgHIgFAhIgBAIQgYAagiAlQgaBIgLA9QgIgTgHgrg");
	this.shape_39.setTransform(109.3618,188.2736,1.1201,1.1201,5.0432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36,p:{rotation:0,x:123.8674,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_35,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:111.3068,y:190.9068}},{t:this.shape_34,p:{regX:-2.8,x:120.55,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]}).to({state:[{t:this.shape_36,p:{rotation:1.1833,x:123.6598,y:165.8836,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_37,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.5875,y:190.5242}},{t:this.shape_34,p:{regX:-2.7,x:120.6,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},8).to({state:[{t:this.shape_36,p:{rotation:3.0423,x:123.8081,y:165.5549,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_35,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:109.944,y:189.7573}},{t:this.shape_34,p:{regX:-3.2,x:120,regY:-9.4,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.95}}]},2).to({state:[{t:this.shape_36,p:{rotation:5.0432,x:124.1642,y:164.6915,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_35,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.0432,x:109.4635,y:188.395}},{t:this.shape_34,p:{regX:-2.9,x:120.15,regY:-10.1,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:130.25}}]},2).to({state:[{t:this.shape_36,p:{rotation:6.6933,x:124.373,y:164.8572,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_37,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:108.9959,y:188.1277}},{t:this.shape_34,p:{regX:-2.9,x:120.3,regY:-10.1,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.3}}]},3).to({state:[{t:this.shape_36,p:{rotation:7.6935,x:124.2593,y:164.7035,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_38},{t:this.shape_34,p:{regX:-2.9,x:120.3,regY:-10.1,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.3}}]},3).to({state:[{t:this.shape_36,p:{rotation:6.6933,x:124.3174,y:164.8507,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_35,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:108.9403,y:188.1211}},{t:this.shape_34,p:{regX:-2.9,x:120.25,regY:-10.1,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.3}}]},9).to({state:[{t:this.shape_36,p:{rotation:5.0432,x:124.0624,y:164.5701,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_39},{t:this.shape_34,p:{regX:-2.8,x:120.15,regY:-10.2,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:130.15}}]},2).to({state:[{t:this.shape_36,p:{rotation:3.0423,x:123.6403,y:165.546,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_35,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:109.7762,y:189.7484}},{t:this.shape_34,p:{regX:-3.3,x:119.65,regY:-9.6,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.75}}]},2).to({state:[{t:this.shape_36,p:{rotation:1.1833,x:123.4918,y:165.8801,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_35,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.4195,y:190.5207}},{t:this.shape_34,p:{regX:-2.6,x:120.55,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[{t:this.shape_36,p:{rotation:1.1833,x:123.4918,y:165.8801,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_35,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.4195,y:190.5207}},{t:this.shape_34,p:{regX:-2.6,x:120.55,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[]},1).to({state:[{t:this.shape_36,p:{rotation:0,x:123.6994,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_35,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:111.1387,y:190.9068}},{t:this.shape_34,p:{regX:-2.6,x:120.6,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},3).wait(1));

	// Layer_4
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgHgQIgCgQQAAgLACgLIABgDIACgFQAJgkAfhAIAMguQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggaAAQgJAAgIgEg");
	this.shape_40.setTransform(120.85,64.8,1.0211,1.0211,0,-10.2199,169.7801,5.5,-16.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DD4732").s().p("AhAAEQggglgRgYIgJgOQgEgGgCgHQgCgJgBgHIAAgDIAAgEQACgKAFgIQADgHAFgFQAOgPAVgBQAUAAAOAKQAKAIAHALIgFgJQA+AmAsBaQArBaALAMQAVAugxALQhthYg0g+g");
	this.shape_41.setTransform(133,123.7,1.1723,1.1723,0,-29.3057,150.6943,9.8,12.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_42.setTransform(118.9744,128.9919,0.3261,0.3047,0,-20.0049,-19.3829);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_43.setTransform(128.4289,134.6604,0.3261,0.3047,0,-20.0049,-19.3829);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAARgMAMQgMALgQAAQgPAAgMgLg");
	this.shape_44.setTransform(125.5921,135.3032,0.3261,0.3047,0,-20.0049,-19.3829);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_45.setTransform(122.6981,134.8357,0.3261,0.3047,0,-20.0049,-19.3829);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgQAAgLgLg");
	this.shape_46.setTransform(120.1344,133.7029,0.3261,0.3047,0,-20.0049,-19.3829);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_47.setTransform(131.65,125.1,0.3265,0.3052,0,-20.0088,-19.3833,18,-8.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgHgQIgCgQQAAgLACgLIABgDIACgFQAJgkAfhAIAMguQATgkAYglQAMgSAOgHQAygWAwA0QAhAigLAqQgQAfgkAtQgnAzgzBBQgcAggaAAQgJAAgIgEg");
	this.shape_48.setTransform(121.1,64.8,1.0213,1.0213,0,-10.226,169.774,6,-16.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_49.setTransform(119.1979,129.1334,0.3262,0.3049,0,-19.583,-18.9477);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMAMQgLALgRAAQgQAAgLgLg");
	this.shape_50.setTransform(125.7729,135.4984,0.3262,0.3049,0,-19.583,-18.9477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47,p:{regX:18,regY:-8.1,scaleX:0.3265,scaleY:0.3052,skewX:-20.0088,skewY:-19.3833,x:131.65,y:125.1}},{t:this.shape_46,p:{scaleX:0.3261,scaleY:0.3047,skewX:-20.0049,skewY:-19.3829,x:120.1344,y:133.7029}},{t:this.shape_45,p:{scaleX:0.3261,scaleY:0.3047,skewX:-20.0049,skewY:-19.3829,x:122.6981,y:134.8357}},{t:this.shape_44,p:{scaleX:0.3261,scaleY:0.3047,skewX:-20.0049,skewY:-19.3829,x:125.5921,y:135.3032}},{t:this.shape_43,p:{scaleX:0.3261,scaleY:0.3047,skewX:-20.0049,skewY:-19.3829,x:128.4289,y:134.6604}},{t:this.shape_42,p:{scaleX:0.3261,scaleY:0.3047,skewX:-20.0049,skewY:-19.3829,x:118.9744,y:128.9919}},{t:this.shape_41,p:{regX:9.8,regY:12.6,scaleX:1.1723,scaleY:1.1723,skewX:-29.3057,skewY:150.6943,x:133,y:123.7}},{t:this.shape_40,p:{regX:5.5,regY:-16.5,scaleX:1.0211,scaleY:1.0211,skewX:-10.2199,skewY:169.7801,x:120.85,y:64.8}}]}).to({state:[{t:this.shape_47,p:{regX:17.6,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.9,y:125.1}},{t:this.shape_46,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5821,skewY:-18.9493,x:120.3837,y:133.8157}},{t:this.shape_45,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5821,skewY:-18.9493,x:122.9406,y:134.9686}},{t:this.shape_44,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5821,skewY:-18.9493,x:125.8329,y:135.4584}},{t:this.shape_43,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5821,skewY:-18.9493,x:128.6761,y:134.8368}},{t:this.shape_42,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5821,skewY:-18.9493,x:119.2577,y:129.0931}},{t:this.shape_41,p:{regX:10,regY:12.7,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55}},{t:this.shape_40,p:{regX:6.1,regY:-16.8,scaleX:1.0213,scaleY:1.0213,skewX:-10.2255,skewY:169.7745,x:120.9,y:64.85}}]},13).to({state:[{t:this.shape_47,p:{regX:17.6,regY:-8.4,scaleX:0.3268,scaleY:0.3054,skewX:-19.3203,skewY:-18.6956,x:131.8,y:125.15}},{t:this.shape_46,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.32,skewY:-18.6959,x:120.2257,y:133.6602}},{t:this.shape_45,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.32,skewY:-18.6959,x:122.7773,y:134.8245}},{t:this.shape_44,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.32,skewY:-18.6959,x:125.6674,y:135.3271}},{t:this.shape_43,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.32,skewY:-18.6959,x:128.5135,y:134.7181}},{t:this.shape_42,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.32,skewY:-18.6959,x:119.1213,y:128.9323}},{t:this.shape_41,p:{regX:9.9,regY:12.9,scaleX:1.1726,scaleY:1.1726,skewX:-28.6,skewY:151.4,x:132.85,y:124.7}},{t:this.shape_40,p:{regX:6.1,regY:-16.8,scaleX:1.0213,scaleY:1.0213,skewX:-10.2255,skewY:169.7745,x:120.9,y:64.85}}]},2).to({state:[{t:this.shape_47,p:{regX:17.7,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.9,y:125.05}},{t:this.shape_46,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.583,skewY:-18.9477,x:120.3239,y:133.8557}},{t:this.shape_45,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.583,skewY:-18.9477,x:122.8807,y:135.0086}},{t:this.shape_50,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.583,skewY:-18.9477,x:125.7729,y:135.4984}},{t:this.shape_43,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.583,skewY:-18.9477,x:128.6159,y:134.877}},{t:this.shape_49,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.583,skewY:-18.9477,x:119.1979,y:129.1334}},{t:this.shape_41,p:{regX:10,regY:12.7,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55}},{t:this.shape_48,p:{regX:6,regY:-16.8,scaleX:1.0213,scaleY:1.0213,skewX:-10.226,skewY:169.774,x:121.1,y:64.8}}]},16).to({state:[{t:this.shape_47,p:{regX:18.1,regY:-7.8,scaleX:0.3265,scaleY:0.3051,skewX:-20.0054,skewY:-19.3817,x:131.65,y:125.05}},{t:this.shape_46,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:120.0207,y:133.6334}},{t:this.shape_45,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:122.5841,y:134.7661}},{t:this.shape_50,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:125.4778,y:135.2336}},{t:this.shape_43,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:128.3143,y:134.5909}},{t:this.shape_49,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:118.8609,y:128.9229}},{t:this.shape_41,p:{regX:9.7,regY:12.7,scaleX:1.1722,scaleY:1.1722,skewX:-29.3055,skewY:150.6945,x:133.05,y:123.7}},{t:this.shape_48,p:{regX:5.4,regY:-16.4,scaleX:1.021,scaleY:1.021,skewX:-10.2188,skewY:169.7812,x:121,y:64.85}}]},2).to({state:[{t:this.shape_47,p:{regX:18.1,regY:-7.8,scaleX:0.3265,scaleY:0.3051,skewX:-20.0054,skewY:-19.3817,x:131.65,y:125.05}},{t:this.shape_46,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:120.0207,y:133.6334}},{t:this.shape_45,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:122.5841,y:134.7661}},{t:this.shape_50,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:125.4778,y:135.2336}},{t:this.shape_43,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:128.3143,y:134.5909}},{t:this.shape_49,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:118.8609,y:128.9229}},{t:this.shape_41,p:{regX:9.7,regY:12.7,scaleX:1.1722,scaleY:1.1722,skewX:-29.3055,skewY:150.6945,x:133.05,y:123.7}},{t:this.shape_48,p:{regX:5.4,regY:-16.4,scaleX:1.021,scaleY:1.021,skewX:-10.2188,skewY:169.7812,x:121,y:64.85}}]},2).to({state:[]},1).to({state:[{t:this.shape_47,p:{regX:18.1,regY:-7.8,scaleX:0.3265,scaleY:0.3051,skewX:-20.0054,skewY:-19.3817,x:131.65,y:125.05}},{t:this.shape_46,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:120.0207,y:133.6334}},{t:this.shape_45,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:122.5841,y:134.7661}},{t:this.shape_50,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:125.4778,y:135.2336}},{t:this.shape_43,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:128.3143,y:134.5909}},{t:this.shape_49,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:118.8609,y:128.9229}},{t:this.shape_41,p:{regX:9.7,regY:12.7,scaleX:1.1722,scaleY:1.1722,skewX:-29.3055,skewY:150.6945,x:133.05,y:123.7}},{t:this.shape_48,p:{regX:5.4,regY:-16.4,scaleX:1.021,scaleY:1.021,skewX:-10.2188,skewY:169.7812,x:121,y:64.85}}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,1.1,166.1,219.1);


(lib.Superdevojkalebdi = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Superdevojka("synched",0);
	this.instance.setTransform(-499.55,-266.75,1,1,0,0,0,74,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-260.75,startPosition:15},15).wait(9).to({startPosition:23},0).to({y:-266.15,startPosition:0},13).wait(6).to({startPosition:6},0).to({y:-261.05,startPosition:15},12).wait(10).to({startPosition:25},0).to({y:-266,startPosition:39},10).wait(5));

	// Layer_2
	this.instance_1 = new lib.Superdevojkasenka("synched",0);
	this.instance_1.setTransform(-476.2,-148.5,1,1,0,0,0,16.1,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1739,scaleY:1.1739,x:-476.15},15).wait(9).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:-476.2},13).wait(6).to({startPosition:0},0).to({scaleX:1.1739,scaleY:1.1739,x:-476.15},12).wait(10).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:-476.2},10).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-593.1,-392.2,166.20000000000005,254.5);


(lib.MomakOb3cipela = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.MomakOb3sarezacipelu();
	this.instance.setTransform(30.55,23.35,1,1,0,0,0,26.4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.MomakOb3koza();
	this.instance_1.setTransform(29.9,21.2,1,1,0,0,0,29.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MomakOb3cipela, new cjs.Rectangle(-0.1,-0.3,59.5,42.199999999999996), null);


(lib.MomakOb3nogaleva = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MomakOb3nogaodkolena();
	this.instance.setTransform(45.3,129.8,1,1,0,0,0,18.4,18.6);

	this.instance_1 = new lib.MomakOb3cipela("synched",0);
	this.instance_1.setTransform(46.35,235.6,0.9165,0.9165,0.4465,0,0,46,3.8);

	this.instance_2 = new lib.MomakOb3nogadokolena1();
	this.instance_2.setTransform(45.35,22.4,1,1,0,0,0,22.4,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,0,63.9,270.2);


(lib.DevojkaOb1cipela = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.sarezacipelu();
	this.instance.setTransform(30.55,23.35,1,1,0,0,0,26.4,16);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,57,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.koza();
	this.instance_1.setTransform(29.9,21.2,1,1,0,0,0,29.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DevojkaOb1cipela, new cjs.Rectangle(-0.1,-0.3,59.5,42.199999999999996), null);


(lib.Devojkao1nogaleva = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nogaodkolena();
	this.instance.setTransform(45.15,129.65,1,1,-13.2016,0,0,18.4,18.6);

	this.instance_1 = new lib.DevojkaOb1cipela("synched",0);
	this.instance_1.setTransform(70.45,232.45,0.9164,0.9164,-13.1896,0,0,46.1,3.9);

	this.instance_2 = new lib.nogadokolena1();
	this.instance_2.setTransform(45.35,22.4,1,1,0,0,0,22.4,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,0,67.19999999999999,275.1);


(lib.Devojkao1nogadesna = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nogaodkolena();
	this.instance.setTransform(30.4,116.55,0.9056,0.9056,-7.0226,0,0,18.4,18.6);

	this.instance_1 = new lib.DevojkaOb1cipela("synched",0);
	this.instance_1.setTransform(43.25,211.5,0.8121,0.8121,8.3921,0,0,46.1,3.9);

	this.instance_2 = new lib.nogadokolena1();
	this.instance_2.setTransform(41.1,20.2,0.9056,0.9056,6.4664,0,0,22.4,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-2.1,61.5,239.6);


(lib.Tip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A25050").s().p("AAfASQgSgOgQgEQgXgEgOANIgIAIQgCACgEAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQgDgDABgHQAEgKAJgJQAJgIAMgDQAWgGAYAKQARAGAPAKQAKAGABAGQABAHgDAEQgEAGgGAAIgBAAQgHAAgLgIg");
	this.shape.setTransform(75.225,102.6139);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuAjQgEAAgDgFQgFgLACgKIABgDQACgGADgBQAGgFAEAFIAEAFIACANIAAAIIAAAAIgFAIQgDACgCAAIgCAAgABqgBQgDAAgBgEQgDgFgBgHIAAgEIAAgEQACgGAHgBQADgDAEABQAFADABAFIACAGIAAAHIgCAHQgCADgDACIgFABIgEgBg");
	this.shape_1.setTransform(68.3464,74.4232);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhVB9QgHgFgIgQQgNgbgCgXQAAgMADgHQAGgLALAAQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAIgCADQgCAKAFALQADAFAEAAQAEABAEgDIAEgIIAAAAQARAZACAhQACATgKAGQgFADgFAAQgHAAgIgGgACGBeQgHgGgIgQQgNgcgCgUQAAgPACgGQAHgKALABQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBAEIABADQAAAHAEAFQABAEACAAQAFACAEgCQAEgCACgDQASAZABAhQACATgLAHQgEACgEAAQgHAAgJgFgAijgrQgEgFABgIQABgGADgFQAHgLAGgFQAFgCAJAAQALgBAGACQAJAFABAJQAAADgDAEQgDADgEAAIgGgCIgFgCQgKgDgFAIQgDAOgEADQgDABgCAAQgEAAgDgCgABIhiQgFgDACgHQABgJAHgFQAJgHAJgBIAVACQANADACAIQADAEgDAFQgEAEgEABQgDABgHgCIgHgEQgJgDgHAGIgKAGQgDACgCAAIgDgBg");
	this.shape_2.setTransform(65.5777,72.448);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7D3BE").s().p("AiGA6QgJgBgHgEIgKgGQgHgHgDgGQgFgIAEgEQADgEAGACIAIAGQAMALAKAAQADABAGgBQAHgBACACQAHAEgFAJQgBAEgIADIgHAAIgGAAgACCADQgJAAAAgGQgBgHAJgGQAUgNACgMQACgDABgFQABgEACgBIAGgDQADAAAEABQAEADAAAHQAAAFgCAGQgIAVgVAOQgGADgFAAIgCAAg");
	this.shape_3.setTransform(72.3488,88.6438);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF9A9C").s().p("AgNB2QgEgBgDgDIgCgCQgFgFgBgNIgBgTIADgdQACgVAGgZQAOg/AVgvIAFgGQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIADACQABACgBAFIgQBBIgNBCQgDAWgBAUQgBARABAOQADAAADgEQAEgDACAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAQABAEgCAFQgDAIgFAEQgDACgEACIgGABIgGgBg");
	this.shape_4.setTransform(66.9849,81.3927,1.1585,1.0114,-26.0888);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F48B73").s().p("AAHA4IgFgEIgBgEIACgGIAFgIIACgFIACgHQAAgEgCgGQgCgMgIgOIgBAEQgFAKgEAMQgCAGAAADIgBAEIAAAFQAAAGgEACIgGAAIgEgFQgBgFAAgIIADgPQAGgTAHgMQAJgQANgJQAFgEAEAAIAGABIADAFQACACgDADIgDAEQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgDABIgIAHIgBADIABACIALAUQAEAGACAJQABAKgBAHIgDALIgEAJIgBAEIgDADQgBACgDABIgDAAIgCAAg");
	this.shape_5.setTransform(109.7119,77.3242,1,1,-15.6802);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3C5A9").s().p("AADEpQgDg2gSgbQgOgLgXgIQhzgvgagsQgbgtgFhxQgFhzAYhbQADgaAHgaIADgLIAGAHQACAEAhAPQAgAPBKAKQBCAIA8AKQBaAYgPBFIgFAYIgNA0QgIAgACBEQAOACANgoQAIgTAOgHIADgBQAHgCAIABQAIACAIAFQAGAFAHAHIAAABQAFALABAMQABAJgDAMQgFAZgiAZQgTAOgQgFIAUDNQgRAZgxAOQgOAEgOAAQglAAgogZgACMBBIAAgBIgBgBIABACg");
	this.shape_6.setTransform(86.15,85.2631,1.3785,1.4156,-26.1113);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#804F30").s().p("ADBDJIAAgBIAAgBIAIgQQAGgNAHgYQAIgbAFgLQAFgMAGgDQAFAFABAIQABAFgBALQgBALgGAXQgMAogQAUIAAABQgFAGgFABQgBgMgFgLgACJCAIAEgOQAEgKABgFIAEgHQACgCADAAQADABABACQACADgBAGQgDAYgJAwIgCAJQgNAHgJATQADgmAKgrgAClC1IAIgYQAMgmAHg9QACgOACgHQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAEAIAAANQAEA9gXA7IgFALQgIgFgHgCgAikhbQgygQgbgrQgEgGACgEQABgDADgBQAEgBADABQADABAHAIQAdAiArANQARAFAcADQAlADAKACIAFACQABABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgLACQgSADgQAAQgiAAgegLgAiiiIQgkgJgQgcQgCgFAAgDQABgCAEgBQADgBACABQADAAAHAIQAXAYAqgCQAYgBAtgPQAIgDACAFQACADgFAFQgOAOgcAHQgUAGgTAAQgNAAgNgDgAiYiuIgEgEQgBgCABgDQACgDAHgBQAagBAkgVQANgJAJgDQAHgCAEAAIABABQgGAMgLAKIgLAIQgbASgZAEIgHAAQgJAAgFgEg");
	this.shape_7.setTransform(75.5068,54.0777,1.3785,1.4156,-26.1113);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E442A").s().p("AA+GiQglgkg3gvQg6gxgtg2Qgpgxghg3Qglg+gkg5Qglg5gDhBQgCgrANguQgRgUgMgVQgPgcgCgWIAAgCQgFgOAFgPQAFgPAMgJQAVgSAigBIAeABIAQABQAogJBEgXQBSgdAvgDQBAgFBBAcQA+AaAwAyQAtAvAdA/QAcA8AMBEQAGAkgBAbQgBASgJAoQgKAtgHAVQgJAcgOAgIgQAiIgCAFIg6BmQg5Bkg6AXQgdAMgNAAQgPAAACgNg");
	this.shape_8.setTransform(81.8831,62.2983,1.1595,1.1907,-26.1053);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhwBSQgHgCgHgIQgLgNACgNQADgHAEgFQALgHANgCIAFAAIgDACQgEAGAEAGQACACAFgBQAFAAAFgDIAIgFIAAAAQAQAMgFATQgBAKgOAGQgKAEgLAAIgKgBgABfAmQgJgBgIgIQgOgMAEgNQAFgIAFgFQAOgJASgCIACAAIgCACIABADQgCAEAEACQAAACAFgBQAHABAHgDIALgGQAWALgJATQgCALgUAIQgOAFgRAAIgIAAgAibgHQgEgFACgHQABgGADgGQAHgLAGgEQAFgDAJAAQALAAAFACQAKAFABAIQAAADgDAFQgDADgEAAIgGgCIgGgDQgJgCgFAIQgDANgFADQgCACgDAAQgDAAgEgDgABFgzQgFgDACgHQABgJAHgFQAJgHAJAAQAIgBANACQANADACAIQADAFgDAEQgDAEgFABQgDABgGgCIgIgEQgIgDgIAFIgKAHQgCACgDAAIgDgBg");
	this.shape_9.setTransform(67.2123,74.4283);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7D3BE").s().p("AiHA5QgJgBgHgEIgKgGQgHgHgDgGQgEgHADgFQADgEAGACIAIAGQAMALALABIAJgBQAGgBADACQAGAFgEAIQgBAFgJACIgGABIgHgBgACCAEQgJAAAAgHQgBgGAIgGQAVgOACgMQACgDAAgEIADgFQACgDAEgBQAEAAADACQAFADAAAGQAAAGgCAFQgJAWgUANQgHAEgFAAIgBAAg");
	this.shape_10.setTransform(72.3234,88.3708);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah9AiQgEgFAFgHIADgCQADgDAEgCQAIgEAFACIADACQABAEgBAEIgCAEIABABIgIAFQgFADgFAAIgCAAQgEAAgCgCgABagNQgEgCACgFIAAgCIACgDQAGgEAKgDQAHgDAGAAQAIAAAAAEQAAAAAAAAQABABAAAAQAAAAAAABQgBAAAAAAIgBAEIgFAFIgLAFQgIADgGAAIgCAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_11.setTransform(69.4759,74.855);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACHAVQgEgDgEgBQgOgJgcAHQgNADgEgHQgHgGAHgIQAEgFAKgCQAegHAaALQAHADAFAEQAFAGgBAGQgBAFgDACQgEADgEAAIgHgCgAheAKQgGgFgDgBQgLgEgTAFIgMACQgJgBAAgFQgBgHAKgFQAHgFALgEIAPgCQAJAAAKADQAIADAGAEQAHAHgCAFQgBALgJACIgBAAQgEAAgFgDg");
	this.shape_12.setTransform(68.2501,77.6774,1,1,-15.5296);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiMAlQgEgGABgHQABgGADgFQAIgMAFgDQAFgCAKAAQAKgBAGACQAKAEAAAIQABAEgDAEQgEADgDAAIgGgCIgGgDQgJgCgFAIQgDAOgFADQgCABgDAAQgDAAgEgCgABTgHQgEgDABgHQABgJAIgGQAJgGAJAAQAHgBANACQAOADACAIQACAFgCAEQgEADgFACQgDAAgGgBIgIgEQgIgEgIAGIgJAHQgDACgCAAIgEgBg");
	this.shape_13.setTransform(65.717,70.2216);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7D3BE").s().p("AiHA5QgJgBgGgDIgLgHQgGgHgDgGQgFgHAEgFQACgEAGACIAIAGQAMAMALAAQACABAHgCQAGAAADABQAGAFgEAIQgBAFgJACIgGABIgHgBgACCAEQgJgBAAgGQgBgHAJgFQAUgOADgMQACgDAAgFIACgEQADgDAEgBQADAAAEACQAEACAAAHIgCALQgIAWgVANQgGAEgFAAIgCAAg");
	this.shape_14.setTransform(72.2611,88.57);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EF9A9C").s().p("AgNB2QgEgBgDgDIgCgCQgFgFgBgNIgBgTIADgdQACgVAGgZQAOg/AVgvIAFgGQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIADACQABACgBAFIgQBBIgNBCQgDAWgBAUQgBARABAOQADAAADgEQAEgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAQABAEgCAFQgDAIgFAEQgDACgEACIgGABIgGgBg");
	this.shape_15.setTransform(67.0584,81.422,1.1583,1.0114,-25.9303);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhwBSQgHgCgHgIQgLgNACgNQADgHAEgFQALgHANgCIAFAAIgDACQgEAGAEAGQACACAFgBQAFAAAFgCIAIgGIAAAAQAQAMgFATQgBAKgOAGQgKAEgLAAIgKgBgABfAmQgJgBgIgIQgOgNAEgMQAFgIAFgFQAOgJASgCIACAAIgCACIAAADQgBAEADACQABACAFgBQAHABAHgDIALgGQAWALgJATQgCALgUAIQgOAFgRAAIgIAAgAibgHQgEgFACgHQABgGADgGQAHgLAGgEQAFgDAJAAQALAAAFACQAKAFABAIQAAADgDAFQgDADgEAAIgGgCIgGgDQgJgCgFAIQgDANgFADQgCACgDAAQgDAAgEgDgABFgzQgFgDACgHQABgJAHgFQAJgHAJAAQAIgBANACQANADACAIQACAFgCAEQgDAEgFABQgDABgGgCIgIgEQgIgDgIAFIgKAHQgCACgDAAIgDgBg");
	this.shape_16.setTransform(67.1623,74.3783);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7D3BE").s().p("AiHA5QgJgBgHgEIgKgGQgHgHgDgGQgFgHAEgFQADgEAGACIAIAGQAMALALABIAJgBQAGgBADACQAGAFgEAIQgBAFgJACIgGABIgHgBgACCAEQgJAAAAgHQgBgGAIgGQAVgOACgMQACgDAAgEIADgFQACgDAEgBQAEAAADACQAEADABAGQAAAGgCAFQgJAWgUANQgHAEgFAAIgBAAg");
	this.shape_17.setTransform(72.2611,88.3208);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah9AiQgEgFAFgHIADgCQADgDAEgCQAIgEAFACIADACQABAEgBAEIgCAEIABABIgIAFQgFADgFAAIgCAAQgEAAgCgCgABagNQgEgCACgFIAAgCIACgDQAGgEAKgDQAHgDAGAAQAIAAAAAEQAAAAAAAAQABABAAAAQAAAAAAABQgBAAAAAAIgBAEIgFAFIgLAFQgIADgHAAIgCAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_18.setTransform(69.4259,74.805);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A25050").s().p("AAsAjQgHgCgJgLQgNgTgPgHQgUgLgRAJIgLAGIgGAAQgDgBgBgCQgCgEADgGQAGgKAMgGQALgFAMAAQAVAAAWARQAPAKALANQAIAJgBAHQAAAGgFAEQgEADgFAAIgCAAg");
	this.shape_19.setTransform(79.8402,90.2829);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7D3BE").s().p("AB5AgQgIgCACgIQAAgGAKgDQAXgIAGgKQADgCABgFIAEgEQADgBAEAAQAEAAACADQAEAEgCAGQgBAFgEAFQgOASgXAHQgFACgEAAIgFgBgAiUANQgJgEgFgFIgIgIQgFgIgBgHQgDgIAFgEQAEgDAFAEIAGAIQAJAOAKADQACABAHABQAGABACACQAFAFgGAHQgDAEgJAAQgGAAgGgDg");
	this.shape_20.setTransform(81.4663,76.2204);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABmAdQgCgBgBgEQgBgGABgHIABgEIABgDQAEgEAGAAQAFgBADABQAEAEAAAFIAAAGIgCAHIgDAGIgHADIgDABQgDAAgDgDgAh0AGQgEgCgBgEQgCgMAFgJIACgCQADgFADgCQAHgDADAGIACAHIgBANIgDAHIAAAAIgGAGIgFABIgDgBg");
	this.shape_21.setTransform(81.1839,60.6113);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABiB3QgFgIgDgRQgGgeAEgVQAFgNADgGQAJgIALADIABACIgBADIgBAEQgBAHABAGQABAEACABQAEAEAFgCIAHgDQAKAdgIAgQgDATgMADIgFABQgJAAgJgKgAh5BaQgFgHgDgSQgGgeAEgWQAEgMAEgEQAJgJAKADQAAAAABABQAAAAAAAAQABABAAAAQABAAABABIgCACQgFAIACAMQABAFAEACQADACAFgCIAGgGIAAgBQAJAdgHAgQgDATgLADIgHABQgJAAgHgKgACEhNIgGgGQgHgFgJADIgLAEQgGACgDgEQgDgDADgHQAEgIAIgDQAKgEAKACQAHABAMAGQAMAGAAAIQABAFgEAEQgEACgFAAQgDAAgGgDgAiXhdQgCgHADgGQADgGAEgEQAKgJAHgDQAFgBAJADQAKACAFAEQAIAHgBAIQgBADgEAEQgEACgDgBIgFgEIgFgEQgJgFgHAHQgGAMgFACIgEAAQgEAAgEgEg");
	this.shape_22.setTransform(79.584,58.924);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAEIBDAMQgPAIgOAAQgVAAgRgUgAAkgHIhJABQAoghAhAgg");
	this.shape_23.setTransform(79.1628,89.225,1.1446,1.1446);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjAAIgIgJIABgBIBIgBQAHAHAHAJIgMAHg");
	this.shape_24.setTransform(79.7923,89.6523,1.1446,1.1446);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A25050").s().p("AgMAlQgSgHgIgMQgDgFgBgFIgBgIIAAgBIAAgGIAIAJQAdAhAmgVIAMgIQgHgIgHgHQgggggoAhIgBABIAAgBQACgOAKgLQAGgHAJgBIAMACIAKABQAQACAMAPQAFAGACAGQAEAIgBAHIAAABIgBAJIgBACQgEAJgIAHIgLAGQgFACgFAAQgJAAgMgFg");
	this.shape_25.setTransform(79.7959,89.4589,1.1446,1.1446);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABhBnQgFgIgDgSQgGgeAEgUQAFgOADgFQAJgIALADIABABIgBAEIgBAEQgBAGABAHQABADACACQAEADAFgBIAHgEQAKAegIAgQgDASgMAEIgFAAQgJAAgJgJgAh6BKQgFgIgDgRQgGgeAEgVQAEgMAEgGQAJgIAKACQAAAAABABQAAAAAAABQABAAAAAAQABABABAAIgCACQgFAKACALQABAFAEABQADACAFgCIAGgGIAAAAQAJAdgHAgQgDASgLADIgHABQgJAAgHgJgAB9g2IgGgGQgHgFgJADIgLAEQgGACgDgEQgDgDADgHQAEgIAIgDQAKgEAKACQAHABAMAGQAMAGAAAIQABAFgEAEQgEACgFAAQgDAAgGgDgAiQhMQgCgHADgGQADgGAEgEQAKgJAHgDQAFgBAJADQAKACAFAEQAIAHgBAIQgBADgEAEQgEACgDgBIgFgEIgFgEQgJgFgHAHQgGAMgFACIgDAAQgFAAgEgEg");
	this.shape_26.setTransform(79.684,60.599);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9AD92").s().p("AALAIIgDgCQgGgFgMACQgGABgBgEQgEgCAEgCQACgDAFgBQAMgCALAHQAEABABACQADACgBADIgCADIgEABIgDgBg");
	this.shape_27.setTransform(79.8009,97.3156,1.4188,1.4188);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgBAPQgQAAgOADIgHACIAAgJIABAAQApgHAdAFIAGAOQgSgIgWAAgAgmgMIACgBQAYgJASAAIAHAAIABACIAJAJQg2AFgFACIgCgIg");
	this.shape_28.setTransform(80.6059,90.4698,1.4188,1.4188);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgjgPIAAgBIAGgCIACAHQAFgCA1gEQAGAIAFALIAAABQgegEgoAFIgBAAIAAAKQgHACgEAEQgEgSAJgRg");
	this.shape_29.setTransform(79.3644,91.3565,1.4188,1.4188);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A25050").s().p("AAUAbQgVgHgOAEQgQADgJAHIgEgKQAEgDAHgCIAGgCQAOgEAQAAQAXAAARAJIACAMIgZgHgAgJggQAQAAAKAJIgGgBQgSAAgYAJIgCABIgGACQALgVATABg");
	this.shape_30.setTransform(79.9674,90.7172,1.4188,1.4188);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A25050").s().p("AAiAQIgPgEIgWgFQgYgFgGgCQgGgDgFACQgFACgDgBQgFgBACgGQACgEAGgCIAJgDIASABIASACQAWADAHADIAGACIAHABQAHABAEAEQAEADABADQABAFgCACQgDADgHAAIgLgBg");
	this.shape_31.setTransform(79.2246,89.1417);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghgKIABgGIACgMQACgIAEgGIAHgBQAOAAASAHQAKADAHAEIAEAJIAAADQgBAegDAWIgCgEQgEgIgHAAQgJAAgHANQgEgSgKAAQgGAAgFAIQgGAHgDALQgGgZAEgdg");
	this.shape_32.setTransform(80.0787,90.1663,1.2778,1,-9.4464);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAHQgTgGgOAAIgHAAIAGgHQAFgGAFgBQAFgBALACQANACADAGQADAFAGANQgHgEgKgDg");
	this.shape_33.setTransform(79.7988,85.6872,1.2778,1,-9.4464);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A25050").s().p("AAEBFQgSgFgRgLIgCgKQADgLAGgHQAFgHAGAAQAKAAAEASQAHgNAJAAQAHAAAEAIIACAEIgBAEQgEAXgHAIIgDAAIgLgBgAAegeQgFgNgDgGQgDgGgNgCQgLgCgFABQgGABgEAGIgGAIQgEAHgCAHIADgOIAFgRQAEgIAJAAQAWgDAMAJQAMAJgBAOIAAASIgEgJg");
	this.shape_34.setTransform(80.3196,90.1721,1.2778,1,-9.4464);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AASAGQgdgIgWgCIgKgBQAAgCAKgEQAEgCAKABQAHgBAUAFQASADAFAFIAOANIgbgHg");
	this.shape_35.setTransform(79.2889,86.9078,1,1,-12.71);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAvAeQgIgHgKAAQgOgDgLAHQgGgMgMgCQgNgCgJADQgJADgFAKQgFgGABgLIAGgeQAEgGAGgDIAKABQAXACAcAJIAbAHIAFAHIAAACQgBATgFAMIgBAAIgBAAg");
	this.shape_36.setTransform(79.2547,89.411,1,1,-12.71);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A25050").s().p("AgvAfIgFgHQAFgKAJgDQAJgDANACQAMACAGAMQALgHAOADQAKAAAIAHQABAAAAAAQAAABAAgBQAAAAABAAQAAAAAAAAQgBAEgEAGQgEAGgHAEIgMAFQgEABgRAAQgRAAgcgWgAAwgNIgNgOQgGgFgSgDQgTgFgIABQgJgBgFACQgJAEgBACQgGADgEAGQABgHAEgGQAFgHAEgDQAEgDAHgBIAPgCIARABQALAAASAKQARAKAAALIAAAOIgFgHg");
	this.shape_37.setTransform(79.5002,89.6597,1,1,-12.71);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgsgGIBMAcQgygBgagbgAgmgUQAQgDAUAHQAbAIAUARg");
	this.shape_38.setTransform(79.5826,89.1902,1.0685,1.0685,-11.2157);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAeAWIhMgdIgIgJQAGgEAIgBIBTAdIAMANIgUABIgFAAg");
	this.shape_39.setTransform(79.8015,89.1958,1.0685,1.0685,-11.2157);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A25050").s().p("AgkAPQgTgOAAgNIACgHIAIAKQAaAbAxABIAGAAIATgBIgBAFQgGAMgcACIgDAAQgaAAgbgWgAArAGQgUgRgbgIQgUgHgQADQgHABgGADQABgEADgEQAFgIAGAAQAGgBAGABIAPAFQAyANAKAOQAIALgCAKIgMgMg");
	this.shape_40.setTransform(79.7888,89.4785,1.0685,1.0685,-11.2157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-26.1053,x:81.8831,y:62.2983,scaleY:1.1907}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-26.1113,x:75.5068,y:54.0777,scaleY:1.4156}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-26.1113,x:86.15,y:85.2631,scaleY:1.4156}},{t:this.shape_5,p:{rotation:-15.6802,x:109.7119,y:77.3242,scaleX:1,scaleY:1}},{t:this.shape_4,p:{scaleX:1.1585,rotation:-26.0888,x:66.9849,y:81.3927,scaleY:1.0114}},{t:this.shape_3,p:{scaleX:1,scaleY:1,rotation:0,x:72.3488,y:88.6438}},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:65.5777,y:72.448}},{t:this.shape_1,p:{scaleX:1,scaleY:1,rotation:0,x:68.3464,y:74.4232}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:0,x:75.225,y:102.6139}}]}).to({state:[{t:this.shape_8,p:{scaleX:1.1594,rotation:-25.8863,x:81.9104,y:62.2706,scaleY:1.1907}},{t:this.shape_7,p:{scaleX:1.3784,rotation:-25.8928,x:75.7936,y:53.9403,scaleY:1.4156}},{t:this.shape_6,p:{scaleX:1.3784,rotation:-25.8928,x:86.3179,y:85.166,scaleY:1.4156}},{t:this.shape_5,p:{rotation:-15.4622,x:109.7098,y:77.2026,scaleX:1,scaleY:1}},{t:this.shape_4,p:{scaleX:1.1584,rotation:-25.8626,x:67.304,y:81.3786,scaleY:1.0114}},{t:this.shape_11,p:{scaleX:1,scaleY:1,rotation:0,x:69.4759,y:74.855}},{t:this.shape_10,p:{scaleX:1,scaleY:1,rotation:0,x:72.3234,y:88.3708}},{t:this.shape_9,p:{scaleX:1,scaleY:1,rotation:0,x:67.2123,y:74.4283}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:0,x:75.225,y:102.6139}}]},6).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-25.9543,x:82.2967,y:62.1047,scaleY:1.1907}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-25.9618,x:75.6234,y:53.9979,scaleY:1.4156}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-25.9618,x:86.185,y:85.2104,scaleY:1.4156}},{t:this.shape_5,p:{rotation:-15.5302,x:109.6769,y:77.3526,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1583,scaleY:1.0114,rotation:-25.9303,x:67.0584,y:81.422}},{t:this.shape_14,p:{rotation:0,x:72.2611,y:88.57}},{t:this.shape_13,p:{rotation:0,x:65.717,y:70.2216}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:0,x:75.225,y:102.6139}},{t:this.shape_12,p:{scaleX:1,scaleY:1,rotation:-15.5296,x:68.2501,y:77.6774}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1594,rotation:-25.8866,x:81.8958,y:62.2727,scaleY:1.1906}},{t:this.shape_7,p:{scaleX:1.3784,rotation:-25.8922,x:75.8155,y:53.9426,scaleY:1.4156}},{t:this.shape_6,p:{scaleX:1.3784,rotation:-25.8922,x:86.3392,y:85.1675,scaleY:1.4156}},{t:this.shape_5,p:{rotation:-15.4616,x:109.6577,y:77.1526,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_15,p:{scaleX:1.1582,scaleY:1.0113,rotation:-25.8672,x:67.2511,y:81.3739}},{t:this.shape_18,p:{scaleX:1,scaleY:1,rotation:0,x:69.4259,y:74.805}},{t:this.shape_17,p:{scaleX:1,scaleY:1,rotation:0,x:72.2611,y:88.3208}},{t:this.shape_16,p:{scaleX:1,scaleY:1,rotation:0,x:67.1623,y:74.3783}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:0,x:75.225,y:102.6139}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-26.1053,x:81.7269,y:62.3748,scaleY:1.1907}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-26.1113,x:75.5068,y:54.0777,scaleY:1.4156}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-26.1113,x:86.15,y:85.2631,scaleY:1.4156}},{t:this.shape_5,p:{rotation:-15.6802,x:109.7119,y:77.3242,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1584,scaleY:1.0114,rotation:-26.0872,x:67.0355,y:81.493}},{t:this.shape_3,p:{scaleX:1,scaleY:1,rotation:0,x:72.3488,y:88.6438}},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:65.5777,y:72.448}},{t:this.shape_1,p:{scaleX:1,scaleY:1,rotation:0,x:68.3464,y:74.4232}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:0,x:75.225,y:102.6139}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1592,rotation:-22.4083,x:85.9891,y:59.7445,scaleY:1.1904}},{t:this.shape_7,p:{scaleX:1.3782,rotation:-22.416,x:79.9297,y:51.2957,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3782,rotation:-22.416,x:88.539,y:83.0949,scaleY:1.4153}},{t:this.shape_5,p:{rotation:-11.979,x:111.9572,y:76.5693,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_15,p:{scaleX:1.158,scaleY:1.011,rotation:-22.3904,x:70.2315,y:77.9429}},{t:this.shape_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.691,x:68.3647,y:69.5528}},{t:this.shape_3,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.691,x:74.0779,y:86.1473}},{t:this.shape_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.691,x:71,y:71.7018}},{t:this.shape,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.691,x:76.0484,y:100.2706}}]},25).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-18.6361,x:89.0524,y:56.9925,scaleY:1.1903}},{t:this.shape_7,p:{scaleX:1.3781,rotation:-18.6426,x:83.4649,y:48.7013,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3781,rotation:-18.6426,x:89.9628,y:80.9979,scaleY:1.4153}},{t:this.shape_5,p:{rotation:-8.2058,x:113.9009,y:75.4404,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_15,p:{scaleX:1.1579,scaleY:1.011,rotation:-18.6143,x:72.1519,y:74.1271}},{t:this.shape_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:7.461,x:71.052,y:65.6813}},{t:this.shape_3,p:{scaleX:0.9998,scaleY:0.9998,rotation:7.461,x:75.6616,y:82.6152}},{t:this.shape_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:7.461,x:73.5402,y:67.9988}},{t:this.shape,p:{scaleX:0.9998,scaleY:0.9998,rotation:7.461,x:76.6992,y:96.8372}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1592,rotation:-11.6275,x:96.4294,y:54.4095,scaleY:1.1904}},{t:this.shape_7,p:{scaleX:1.3781,rotation:-11.6379,x:92.0971,y:44.7146,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3781,rotation:-11.6379,x:94.6078,y:77.5629,scaleY:1.4153}},{t:this.shape_5,p:{rotation:-1.2026,x:118.7085,y:75.4224,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_4,p:{scaleX:1.1579,rotation:-11.6088,x:77.3178,y:69.8052,scaleY:1.011}},{t:this.shape_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:14.4632,x:77.2919,y:59.7211}},{t:this.shape_3,p:{scaleX:0.9998,scaleY:0.9998,rotation:14.4632,x:79.8027,y:77.0904}},{t:this.shape_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:14.4632,x:79.479,y:62.3246}},{t:this.shape,p:{scaleX:0.9998,scaleY:0.9998,rotation:14.4632,x:79.0988,y:91.3325}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1592,rotation:-10.1148,x:97.9137,y:52.7745,scaleY:1.1904}},{t:this.shape_7,p:{scaleX:1.3781,rotation:-10.1219,x:93.9549,y:43.1151,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3781,rotation:-10.1219,x:95.5959,y:76.0182,scaleY:1.4153}},{t:this.shape_5,p:{rotation:0.3052,x:120.1927,y:74.0265,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_4,p:{scaleX:1.1581,rotation:-10.0868,x:78.3091,y:67.4315,scaleY:1.0111}},{t:this.shape_11,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:82.0123,y:61.5456}},{t:this.shape_10,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:81.0805,y:75.3235}},{t:this.shape_9,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:79.9503,y:60.5202}},{t:this.shape,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:80.0031,y:89.8158}}]},20).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.1862,x:97.538,y:52.8803,scaleY:1.1907}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.1934,x:93.6778,y:43.1704,scaleY:1.4156}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.1934,x:95.3599,y:76.0778,scaleY:1.4156}},{t:this.shape_5,p:{rotation:0.2369,x:119.9972,y:74.7614,scaleX:1,scaleY:1}},{t:this.shape_4,p:{scaleX:1.1582,rotation:-10.1596,x:77.7817,y:67.5567,scaleY:1.0113}},{t:this.shape_14,p:{rotation:15.7677,x:80.9729,y:75.52}},{t:this.shape_13,p:{rotation:15.7677,x:79.661,y:56.0843}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:15.7677,x:80.009,y:89.8404}},{t:this.shape_12,p:{scaleX:0.9998,scaleY:0.9998,rotation:0.2352,x:80.0383,y:63.3539}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1592,rotation:-10.1153,x:97.8854,y:52.7816,scaleY:1.1904}},{t:this.shape_7,p:{scaleX:1.3781,rotation:-10.1209,x:94.1777,y:43.1279,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3781,rotation:-10.1209,x:95.8179,y:76.0304,scaleY:1.4153}},{t:this.shape_5,p:{rotation:0.3052,x:120.0405,y:74.0743,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_15,p:{scaleX:1.158,scaleY:1.0109,rotation:-10.093,x:78.4825,y:67.6027}},{t:this.shape_18,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:81.9777,y:61.4839}},{t:this.shape_17,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:81.0341,y:75.2585}},{t:this.shape_16,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:79.9157,y:60.4585}},{t:this.shape,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.7663,x:80.0031,y:89.8158}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-11.6267,x:96.559,y:54.5145,scaleY:1.1903}},{t:this.shape_7,p:{scaleX:1.3781,rotation:-11.6363,x:92.2322,y:44.7471,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3781,rotation:-11.6363,x:94.7421,y:77.5946,scaleY:1.4153}},{t:this.shape_5,p:{rotation:-1.2,x:118.7019,y:75.4222,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_4,p:{scaleX:1.1578,rotation:-11.6079,x:77.5888,y:70.0671,scaleY:1.0109}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4628,x:77.291,y:59.7179}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4628,x:79.8018,y:77.0865}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4628,x:79.478,y:62.3213}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4628,x:79.0981,y:91.3282}}]},35).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-18.6347,x:89.1566,y:56.8837,scaleY:1.1903}},{t:this.shape_7,p:{scaleX:1.3781,rotation:-18.6416,x:83.5348,y:48.7429,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3781,rotation:-18.6416,x:90.0318,y:81.0379,scaleY:1.4153}},{t:this.shape_5,p:{rotation:-8.2037,x:113.8433,y:75.2391,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_4,p:{scaleX:1.1578,rotation:-18.6116,x:72.2119,y:74.076,scaleY:1.0109}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4605,x:71.0501,y:65.677}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4605,x:75.6596,y:82.6101}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4605,x:73.5382,y:67.9943}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4605,x:76.6973,y:96.8314}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-22.4071,x:86.1325,y:59.6858,scaleY:1.1903}},{t:this.shape_7,p:{scaleX:1.3781,rotation:-22.415,x:79.9072,y:51.1743,scaleY:1.4153}},{t:this.shape_6,p:{scaleX:1.3781,rotation:-22.415,x:88.5156,y:82.9723,scaleY:1.4153}},{t:this.shape_5,p:{rotation:-11.977,x:111.9506,y:76.3692,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_4,p:{scaleX:1.1578,rotation:-22.3899,x:70.3433,y:78.0092,scaleY:1.0109}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6903,x:68.3628,y:69.5485}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6903,x:74.0759,y:86.1422}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6903,x:70.998,y:71.6973}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6903,x:76.0466,y:100.2648}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-26.1053,x:81.6227,y:62.4258,scaleY:1.1907}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-26.1113,x:75.5068,y:54.0777,scaleY:1.4156}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-26.1113,x:86.15,y:85.2631,scaleY:1.4156}},{t:this.shape_5,p:{rotation:-15.6802,x:109.7119,y:77.3242,scaleX:1,scaleY:1}},{t:this.shape_4,p:{scaleX:1.1583,rotation:-26.0868,x:67.1121,y:81.5864,scaleY:1.0113}},{t:this.shape_3,p:{scaleX:1,scaleY:1,rotation:0,x:72.3488,y:88.6438}},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:65.5777,y:72.448}},{t:this.shape_1,p:{scaleX:1,scaleY:1,rotation:0,x:68.3464,y:74.4232}},{t:this.shape,p:{scaleX:1,scaleY:1,rotation:0,x:75.225,y:102.6139}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-22.4066,x:86.2085,y:59.6295,scaleY:1.1903}},{t:this.shape_7,p:{scaleX:1.378,rotation:-22.4143,x:79.97,y:51.133,scaleY:1.4152}},{t:this.shape_6,p:{scaleX:1.378,rotation:-22.4143,x:88.5779,y:82.9302,scaleY:1.4152}},{t:this.shape_5,p:{rotation:-11.976,x:111.9441,y:76.1668,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_4,p:{scaleX:1.1577,rotation:-22.3893,x:70.6122,y:77.9313,scaleY:1.0107}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:68.3608,y:69.5463}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:74.0737,y:86.1395}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:70.9959,y:71.695}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:76.0443,y:100.2616}}]},24).to({state:[{t:this.shape_8,p:{scaleX:1.159,rotation:-18.6336,x:89.1755,y:56.7681,scaleY:1.1902}},{t:this.shape_7,p:{scaleX:1.378,rotation:-18.6405,x:83.5547,y:48.7061,scaleY:1.4152}},{t:this.shape_6,p:{scaleX:1.378,rotation:-18.6405,x:90.0508,y:80.9999,scaleY:1.4152}},{t:this.shape_5,p:{rotation:-8.2023,x:113.7878,y:75.0379,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_4,p:{scaleX:1.1577,rotation:-18.6095,x:72.4623,y:73.955,scaleY:1.0108}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:71.0481,y:65.6747}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:75.6574,y:82.6073}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:73.5362,y:67.9921}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:76.695,y:96.8283}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-11.6235,x:96.6712,y:54.5558,scaleY:1.1902}},{t:this.shape_7,p:{scaleX:1.378,rotation:-11.6349,x:92.3523,y:44.8034,scaleY:1.4152}},{t:this.shape_6,p:{scaleX:1.378,rotation:-11.6349,x:94.8612,y:77.6496,scaleY:1.4152}},{t:this.shape_5,p:{rotation:-1.1983,x:118.6975,y:75.4221,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_15,p:{scaleX:1.1577,scaleY:1.0107,rotation:-11.6068,x:77.7962,y:70.2625}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:77.288,y:59.7146}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:79.7985,y:77.0825}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:79.4749,y:62.3179}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:79.0946,y:91.3235}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_31}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_31}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_31}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_31}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_26},{t:this.shape_21},{t:this.shape_20},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1595,rotation:-10.4239,x:97.7808,y:52.7515,scaleY:1.1908}},{t:this.shape_7,p:{scaleX:1.3785,rotation:-10.4313,x:93.499,y:43.187,scaleY:1.4157}},{t:this.shape_6,p:{scaleX:1.3785,rotation:-10.4313,x:95.3179,y:76.089,scaleY:1.4157}},{t:this.shape_5,p:{rotation:0,x:120.2031,y:74.825,scaleX:1,scaleY:1}},{t:this.shape_15,p:{scaleX:1.1587,scaleY:1.0117,rotation:-10.408,x:77.7672,y:66.8441}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},3).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-11.6235,x:96.6712,y:54.5558,scaleY:1.1902}},{t:this.shape_7,p:{scaleX:1.378,rotation:-11.6349,x:92.3523,y:44.8034,scaleY:1.4152}},{t:this.shape_6,p:{scaleX:1.378,rotation:-11.6349,x:94.8612,y:77.6496,scaleY:1.4152}},{t:this.shape_5,p:{rotation:-1.1983,x:118.6975,y:75.4221,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_15,p:{scaleX:1.1577,scaleY:1.0107,rotation:-11.6068,x:77.7962,y:70.2625}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:77.288,y:59.7146}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:79.7985,y:77.0825}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:79.4749,y:62.3179}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.4634,x:79.0946,y:91.3235}}]},18).to({state:[{t:this.shape_8,p:{scaleX:1.159,rotation:-18.6336,x:89.1755,y:56.7681,scaleY:1.1902}},{t:this.shape_7,p:{scaleX:1.378,rotation:-18.6405,x:83.5547,y:48.7061,scaleY:1.4152}},{t:this.shape_6,p:{scaleX:1.378,rotation:-18.6405,x:90.0508,y:80.9999,scaleY:1.4152}},{t:this.shape_5,p:{rotation:-8.2023,x:113.7878,y:75.0379,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_4,p:{scaleX:1.1577,rotation:-18.6095,x:72.4623,y:73.955,scaleY:1.0108}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:71.0481,y:65.6747}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:75.6574,y:82.6073}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:73.5362,y:67.9921}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.4607,x:76.695,y:96.8283}}]},2).to({state:[{t:this.shape_8,p:{scaleX:1.1591,rotation:-22.4066,x:86.2085,y:59.6295,scaleY:1.1903}},{t:this.shape_7,p:{scaleX:1.378,rotation:-22.4143,x:79.97,y:51.133,scaleY:1.4152}},{t:this.shape_6,p:{scaleX:1.378,rotation:-22.4143,x:88.5779,y:82.9302,scaleY:1.4152}},{t:this.shape_5,p:{rotation:-11.976,x:111.9441,y:76.1668,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_4,p:{scaleX:1.1577,rotation:-22.3893,x:70.6122,y:77.9313,scaleY:1.0107}},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:68.3608,y:69.5463}},{t:this.shape_3,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:74.0737,y:86.1395}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:70.9959,y:71.695}},{t:this.shape,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.6904,x:76.0443,y:100.2616}}]},2).wait(2));

	// Layer_5
	this.instance = new lib.MomakOb3dolakta("single",0);
	this.instance.setTransform(137.75,133.8,0.6696,0.6656,0,-2.2796,-0.7926,18.2,18.9);

	this.instance_1 = new lib.MomakOb3odlakta("single",1);
	this.instance_1.setTransform(138.35,175.85,0.5702,0.6553,0,66.8929,66.0434,15.1,11.7);

	this.instance_2 = new lib.MomakOb3shaka("single",0);
	this.instance_2.setTransform(75.45,196.7,0.6644,0.6706,0,91.3233,89.8947,16.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{skewX:91.3233,skewY:89.8947,x:75.45,y:196.7}},{t:this.instance_1,p:{regX:15.1,scaleY:0.6553,skewX:66.8929,skewY:66.0434,x:138.35,y:175.85}},{t:this.instance,p:{regY:18.9,skewX:-2.2796,skewY:-0.7926,x:137.75,y:133.8,regX:18.2}}]}).to({state:[{t:this.instance_2,p:{skewX:88.8905,skewY:87.462,x:74.6,y:196.25}},{t:this.instance_1,p:{regX:15.5,scaleY:0.6552,skewX:66.455,skewY:65.6072,x:136.75,y:175.75}},{t:this.instance,p:{regY:19.1,skewX:0.5176,skewY:2.0047,x:138.3,y:134.65,regX:18.2}}]},39).to({state:[{t:this.instance_2,p:{skewX:89.8396,skewY:88.4114,x:73.4,y:196.75}},{t:this.instance_1,p:{regX:15.2,scaleY:0.6553,skewX:65.4096,skewY:64.5609,x:134.9,y:174.8}},{t:this.instance,p:{regY:19,skewX:2.6938,skewY:4.1807,x:137.8,y:133.85,regX:18.1}}]},2).to({state:[{t:this.instance_2,p:{skewX:91.3233,skewY:89.8947,x:70.6,y:195.5}},{t:this.instance_1,p:{regX:15.1,scaleY:0.6553,skewX:66.8929,skewY:66.0434,x:133.7,y:174.65}},{t:this.instance,p:{regY:18.9,skewX:4.1781,skewY:5.6654,x:137.65,y:133.8,regX:18.1}}]},2).to({state:[{t:this.instance_2,p:{skewX:89.8396,skewY:88.4114,x:73.4,y:196.75}},{t:this.instance_1,p:{regX:15.2,scaleY:0.6553,skewX:65.4096,skewY:64.5609,x:134.9,y:174.8}},{t:this.instance,p:{regY:19,skewX:2.6938,skewY:4.1807,x:137.8,y:133.85,regX:18.1}}]},61).to({state:[{t:this.instance_2,p:{skewX:88.8905,skewY:87.462,x:74.6,y:196.25}},{t:this.instance_1,p:{regX:15.5,scaleY:0.6552,skewX:66.455,skewY:65.6072,x:136.75,y:175.75}},{t:this.instance,p:{regY:19.1,skewX:0.5176,skewY:2.0047,x:138.3,y:134.65,regX:18.2}}]},2).to({state:[{t:this.instance_2,p:{skewX:91.3233,skewY:89.8947,x:75.45,y:196.7}},{t:this.instance_1,p:{regX:15.1,scaleY:0.6553,skewX:66.8929,skewY:66.0434,x:138.35,y:175.85}},{t:this.instance,p:{regY:18.9,skewX:-2.2796,skewY:-0.7926,x:137.75,y:133.8,regX:18.2}}]},2).wait(92));

	// Layer_6
	this.instance_3 = new lib.guide("synched",0);
	this.instance_3.setTransform(54.6,187.1,1,1,0,0,0,37.6,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({rotation:5.1636,x:50.85,y:187.05},0).wait(2).to({regY:25.4,rotation:2.7393,x:53.1,y:187},0).wait(2).to({regX:37.7,rotation:7.4597,x:48.1,y:183.75},0).wait(61).to({regX:37.6,regY:25.2,rotation:5.1636,x:50.85,y:187.05},0).wait(2).to({regY:25.4,rotation:2.7393,x:53.1,y:187},0).wait(2).to({regY:25.2,rotation:0,x:54.6,y:187.1},0).wait(92));

	// Layer_4
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB7965").s().p("AiCIqQgIgEgIgDIAGhJQADgugDiIIgJkYQgFicAJhiQAUjrB0iAQARACAVAFQBPAQAsAeQhDBGgpCYQgsCdADEIQACCNAUCdQAQB2ALBjQhrgQhLgkg");
	this.shape_41.setTransform(110.7107,166.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#647081").s().p("AA9JjIg4gHQhrgQhLgkQgIgEgIgDQgngWg4gnQgfgSgHgSQgFgKgBgXIABgMQACgxALhcQAMhjADgsQACgjAChDQAGjDADgtQAJiJAWhoQAOhIAWghQAZgjAqgEQAqgEAQAAQAQAAAaAFQASACAVAFQBOAQAsAeIAeAPQBaAyA2BKQAaAiAOB/QAOB/AABpQAABogCBPQgIEMAHBpQABAQgEAGQgFAHgMAEQhCAbgfAIQgaAHghACQgbACghAAIghgCg");
	this.shape_42.setTransform(115.4038,166.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},39).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},61).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).wait(92));

	// Layer_1
	this.instance_4 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_4.setTransform(122.6,264.15,0.4984,0.5129,0,-3.7626,0,36.2,139.6);

	this.instance_5 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_5.setTransform(93.75,246.2,0.4985,0.5131,0,2.2208,6.3489,36.5,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(200));

	// Layer_3
	this.instance_6 = new lib.MomakOb3dolakta("single",0);
	this.instance_6.setTransform(95.3,111.55,0.6172,0.6536,0,10.8986,12.3856,14.7,11.7);

	this.instance_7 = new lib.MomakOb3odlakta("single",1);
	this.instance_7.setTransform(87.2,157.3,0.5256,0.604,0,42.1639,41.3147,14.9,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regX:14.9,scaleX:0.5256,skewX:42.1639,skewY:41.3147,x:87.2,y:157.3,regY:11.7}},{t:this.instance_6,p:{regX:14.7,scaleY:0.6536,skewX:10.8986,skewY:12.3856,x:95.3,y:111.55,regY:11.7}}]}).to({state:[{t:this.instance_7,p:{regX:15.2,scaleX:0.5255,skewX:46.4331,skewY:45.5858,x:86.1,y:157.2,regY:11.7}},{t:this.instance_6,p:{regX:14.8,scaleY:0.6535,skewX:12.6565,skewY:14.1469,x:95.6,y:111.6,regY:11.7}}]},39).to({state:[{t:this.instance_7,p:{regX:15.5,scaleX:0.5255,skewX:49.6377,skewY:48.7893,x:85.95,y:157.3,regY:11.6}},{t:this.instance_6,p:{regX:14.8,scaleY:0.6535,skewX:12.8811,skewY:14.3719,x:95.6,y:111.65,regY:11.8}}]},2).to({state:[{t:this.instance_7,p:{regX:15.2,scaleX:0.5256,skewX:51.639,skewY:50.7899,x:85.1,y:157.05,regY:11.7}},{t:this.instance_6,p:{regX:14.7,scaleY:0.6535,skewX:13.8821,skewY:15.3728,x:95.55,y:111.7,regY:11.8}}]},2).to({state:[{t:this.instance_7,p:{regX:15.5,scaleX:0.5255,skewX:49.6377,skewY:48.7893,x:85.95,y:157.3,regY:11.6}},{t:this.instance_6,p:{regX:14.8,scaleY:0.6535,skewX:12.8811,skewY:14.3719,x:95.6,y:111.65,regY:11.8}}]},61).to({state:[{t:this.instance_7,p:{regX:15.2,scaleX:0.5255,skewX:46.4331,skewY:45.5858,x:86.1,y:157.2,regY:11.7}},{t:this.instance_6,p:{regX:14.8,scaleY:0.6535,skewX:12.6565,skewY:14.1469,x:95.6,y:111.6,regY:11.7}}]},2).to({state:[{t:this.instance_7,p:{regX:14.9,scaleX:0.5256,skewX:42.1639,skewY:41.3147,x:87.2,y:157.3,regY:11.7}},{t:this.instance_6,p:{regX:14.7,scaleY:0.6536,skewX:10.8986,skewY:12.3856,x:95.3,y:111.55,regY:11.7}}]},2).wait(92));

	// Layer_8
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(51,51,51,0.298)").s().p("AggCmQg6hRhugSQhFgKgmgVQgmgVgShLQgShNB1g2QB0g3AMgDQCagdBKBYQBLBWAcAMQDpAphVCyQgWAvgtAdQhVA2hGAAQhaAAg/hbg");
	this.shape_43.setTransform(103.6097,316.4268);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.3,1.5,140,340.7);


(lib.devojkaobicna1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.Devojkao1shaka("single",0);
	this.instance.setTransform(112.35,120.2,1.1423,1.1423,148.2156,0,0,16.2,23.1);

	this.instance_1 = new lib.Devojkao1odlakta("single",0);
	this.instance_1.setTransform(178,195.95,1.1424,1.0297,136.7558,0,0,14.8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleY:1.0297,rotation:136.7558,x:178,y:195.95,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:148.2156,x:112.35,y:120.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},10).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:146.2082,x:176.55,y:167.6,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:157.6693,x:124.25,y:82.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},3).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:180.1,y:143.45,regY:11.3,skewX:158.4001,skewY:-21.6016}},{t:this.instance,p:{rotation:169.6105,x:150.5,y:65.1,regX:13.5,regY:4.2,scaleX:1.1423,scaleY:1.1423}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:180.1,y:143.35,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:148.1,y:65.95,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:182.1,y:164.05,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:150.1,y:86.65,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:183.4,y:175.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:181.9,y:167.95,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},7).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:176.3,y:144.75,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:144.3,y:67.35,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:169.6,y:121,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:137.6,y:43.6,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:169.1,y:117.55,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:137.1,y:40.15,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:175.7,y:133.8,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:143.7,y:56.4,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.2,y:148.55,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.2,y:71.15,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:183.4,y:175.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:185.4,y:180.25,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:153.4,y:102.85,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:181.35,y:163,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:149.35,y:85.6,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:177.3,y:148.15,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:145.3,y:70.75,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:169.6,y:121,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:137.6,y:43.6,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:167.55,y:119.05,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:135.55,y:41.65,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:174.1,y:138.75,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:142.1,y:61.35,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.2,y:151.55,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.2,y:74.15,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:183.4,y:175.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:184.4,y:177.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:152.4,y:99.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:182.35,y:168.4,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:150.35,y:91,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.85,y:160.05,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.85,y:82.65,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:180.1,y:143.35,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:148.1,y:65.95,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.6,y:140.9,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.6,y:63.5,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},3).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:146.2082,x:176.55,y:167.6,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:157.6693,x:124.25,y:82.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},7).to({state:[{t:this.instance_1,p:{scaleY:1.0297,rotation:136.7558,x:178,y:195.95,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:148.2156,x:112.35,y:120.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},4).to({state:[]},3).wait(105));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A25050").s().p("AAgAgQghgYgqgNQgGgCgDgFQgDgGACgGQACgGAGgDQAFgDAGADQAuAPAlAaQAFAEABAGQABAGgEAFQgDAFgGABIgCAAQgGAAgDgDg");
	this.shape.setTransform(17.3851,104.9797,1.7366,1.7366,0.7144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D3BE").s().p("ABtBUQgFgDgEgFQgDgFAAgHQgBgGADgFQACgGAFgEQAFgFAHgCQAEgBAJABQANABAGACQAKADAEAIQAEAFgBAJQAAAKgGAFQgDADgHABIgLABIgQACIgDABQgHAAgFgDgAiagKQgEgCgEgEQgFgGAAgMQAAgHADgMIAEgTIABgFIACgFQADgEAJAAQAIABADADQAEAEAAAKQABAVgFAUQgDAOgIADIgEABIgFgBg");
	this.shape_1.setTransform(26.9372,78.0576,1.7366,1.7366,0.7144);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABZBHQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgDgEQgCgFACgFQACgEACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAIACAAQAFABACADQADAEgCAHQgBAEgDADQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgBAAgAhggwQgDgCgBgEIAAgHQABgFAFgDQACgBADAAIABAAIAEABIADADIACAFIAAAFQgCAGgFACIgBABIgEAAIgFgBg");
	this.shape_2.setTransform(30.0633,55.2786,1.7366,1.7366,0.7144);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABTBuQgEgCgCgDQgEgFgCgKQgEgTADgSQADgTAKgQQAFgHAEgDQADgCADAAQAEAAACACQAFACABAIQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgDABgBAEQgCAGACAEIACAEQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAEAAQgBAXgEAZQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhgHQgDgCgDgDQgDgFgCgKQgEgTADgSQADgTAKgQQAEgHAFgCIAGgDQADAAADACQAFACABAHIgBAAQgDAAgCACQgEACgCAGIAAAHQACAEACABIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_3.setTransform(26.6275,60.3895,1.7366,1.7366,0.7144);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#815451").s().p("AB9BYIgFgNQgEgPgQgMQgNgKgSgGIgMgEQgFgDgCgFQAAgDADgEQACgDAEgCQAFgBAJAAQAUAFAPALQARALAMARQAJAPABALQAAAIgDAEQgCAEgDABIgHACQgFgCgCgGgAhBgsIgJgEIgGgEIgFgHQgHgIgKgDQgLgDgKAEIgGABIgFACQgDABgDgBQgDgBgBgCQgDgEABgFQACgEADgEQAIgHAMgBQAJgCALACQAMADALAIQALAGAHAKQAEAGABAEQABAHgFAFIgEABIgCAAg");
	this.shape_4.setTransform(31.3889,44.4406,1.7366,1.7366,0.7144);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F48B73").s().p("AgXByIgBAAIgCgBQgKgFgFgIQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgNAAgJgCg");
	this.shape_5.setTransform(21.2484,71.9063,1.7366,1.7366,0.7144);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3C5A9").s().p("AA/GRQAAhtgtgcQgxgBhMgbQhNgbgpgrQgqgsgShZQgThYAPhkQAPhjAYhxIAKguQAVAJAaAEQBHANBJgEQBcCBCXAVQgHBVAnBWQg/DVAdBhQAdBhBMAoIgPAEQhJAhhCAAQgqAAgmgNg");
	this.shape_6.setTransform(47.8365,84.2624,1.7366,1.7366,0.7144);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#926461").s().p("AgdBZQhCgWgugzQgLgMgDgJQgBgEACgDQADgDAHAEQAMAHAZATQAXARANAIQA9AlBWgDIAZAAQANABAKAGQAAAHgHAFQgFACgJACQgaAFgaAAQgpAAgngNgAAXA1QgfgCgfgNQg4gXgvg0QgQgSgDgPQgBgIAFgDQAFgCAHAIQAFAGAOAMQAgAcATANQAdAUAcAJQARAGAoAHQAlAGAUAIQgDADgHACQgZAIgbAAIgLAAgABQATQg5gKgwgYQg1gbgjgpQgIgKAEgFQADgEAGABIAIAFIAgAYQATAOAOAJQAeARAnANQAcAJAuAKIAcAGQAPAFALAHQgRAFgXAAQgTAAgXgEg");
	this.shape_7.setTransform(25.1627,-8.63,1.7366,1.7366,0.7144);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#815451").s().p("ABeJQQl3inhUhPQgOgDgPgGQgigMgbgVQgdgWgSgdQgWgjgJgxQgGgnADg0QAIiXBCiMIACgDQhGgtALhuQAMh2BuglQBSgbBXgJQAugkAygRQDDhDCGCJQAxANAqAXQBKAqAzBJQBbCFgiCdQAMB7gOBNQAeBFAcBgQAbBgghBTQgiBTgvAqQhQBJhiAAQhOAAhZgug");
	this.shape_8.setTransform(82.2442,48.0204,1.7366,1.7366,0.7144);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A25050").s().p("AAsAjQgHgCgJgLQgNgTgPgHQgUgLgRAJIgLAGIgGAAQgDgBgBgCQgCgEADgGQAGgKAMgGQALgFAMAAQAVAAAWARQAPAKALANQAIAJgBAHQAAAGgFAEQgEADgFAAIgCAAg");
	this.shape_9.setTransform(19.0217,105.1939,1.7366,1.7366,0.7144);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABgA/IgEgCIgGgDIgGgFQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAABgBQABgCAHACQABgBAFADIABAAIAFADIAFAEQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAACIgHABIgDgBgAhXgwIgFgCIgGgDIgFgFQgBgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQACgDAGADQACgBAEADIACAAIAFACIAEAEQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAIAAADIgIABIgCgBg");
	this.shape_10.setTransform(30.4636,58.757,1.7366,1.7366,0.7144);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABlBTIgEgBIgDgBIgHgEIgIgHQgGgFgCgGQgEgHAAgEIgBgDIAAAAIAAgCQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQACgIAMgDQAFgBAGACIACAAIAGACQAAAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQADABAEACQAFAEADAFIgBAAQgFgDgBABQgHgDgBADQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAABIAGAFIAGADIAEACQABALgDALIgFAGIgCAAIgIgBgAhSgdIgEgBIgEgBIgGgEIgJgGQgFgFgDgGQgEgHAAgEIgBgDIABgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQADgIAMgDQAEgCAHACIACAAIAFACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAEAAAEADQAFADADAFIgCAAQgEgDgCABQgGgCgCACQAAABAAAAQAAAAABABQAAAAAAABQAAABABAAIAFAFIAGADIAFACQAAALgDAMIgEAFIgCAAIgIgBg");
	this.shape_11.setTransform(26.5549,60.031,1.7366,1.7366,0.7144);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#815451").s().p("AB8BVQgEgBgEgDIgFgHIgEgHQgGgJgKgEQgKgEgKABIgGABIgGABQgDAAgCgBIgFgDQgCgFACgEQACgFAFgDQAIgFAMAAQAJAAALAEQALAEAKAJQAKAIAGALQADAHAAAEQAAAHgFAEIgDABIgEgBgAg8gbQgEgBgEgDIgEgGIgFgHQgFgJgKgFQgLgEgKACIgFAAIgGABQgDABgDgBIgEgEQgCgEACgFQACgEAEgDQAJgGALABQAKgBAKAEQAMAFAKAJQAJAIAGALQADAGABAFQAAAHgFADIgEABIgEgBg");
	this.shape_12.setTransform(29.693,48.1269,1.7366,1.7366,0.7144);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgOAAgJgCg");
	this.shape_13.setTransform(21.2484,71.9063,1.7366,1.7366,0.7144);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghgSYAAAAACAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAGgBAAAAIAAAAYAAAAgDgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgFAAAAAAIAAAA");
	this.shape_14.setTransform(43.2878,68.6209,1.7366,1.7366,0.7144);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgigSYAAAAADAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAFgBAAAAIAAAAYAAAAgCgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgGAAAAAAIAAAA");
	this.shape_15.setTransform(11.1325,49.8107,1.7366,1.7366,0.7144);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7D3BE").s().p("ABsBUQgFgCgEgGQgDgFAAgGQgBgGADgGQACgFAFgEQAFgGAHgBQAEgBAJAAQANABAGACQAKAEAEAHQAEAGgBAIQAAALgGAFQgDADgHABIgLABIgQACIgDAAQgHAAgFgDgAiYgKQgFgCgDgEQgFgGAAgMQAAgHACgMIAEgTIABgFIADgFQADgEAJAAQAHABAEADQAEAEAAAKQABAVgFAUQgEAOgHADIgFAAIgEAAg");
	this.shape_16.setTransform(27.1689,76.8882,1.7366,1.7366,0.7144);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#815451").s().p("AB/BPQgEAAgEgDIgFgGIgFgHQgHgIgLgDQgKgDgKACIgGACIgFABIgGAAQgEgBgBgCQgDgEACgFQACgEAEgEQAIgGALgBQAJgBALADQANADAKAHQALAHAGALQAFAGAAAEQACAHgFAEQgCACgDAAIgDgBgAg7gaQgEAAgEgDIgFgGIgFgHQgHgIgKgDQgLgDgKACIgFACIgGABIgGAAQgDgBgBgCQgDgEACgFQABgEAFgEQAIgGAKgBQAKgBALADQAMADALAHQAKAHAHALQAEAGABAEQABAHgFAEQgCACgCAAIgEgBg");
	this.shape_17.setTransform(28.5643,51.9167,1.7366,1.7366,0.7144);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNADIgWAAQgOAAgJgCg");
	this.shape_18.setTransform(20.9782,72.6845,1.7366,1.7366,0.7144);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A25050").s().p("AgMAlQgSgHgIgMQgDgFgBgFIgBgIIAAgBIAAgGIAIAJQAdAhAmgVIAMgIQgHgIgHgHQgggggoAhIgBABIAAgBQACgOAKgLQAGgHAJgBIAMACIAKABQAQACAMAPQAFAGACAGQAEAIgBAHIAAABIgBAJIgBACQgEAJgIAHIgLAGQgFACgFAAQgJAAgMgFg");
	this.shape_19.setTransform(18.3973,104.8354,1.7366,1.7366,0.7144);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhgCpIBEAMQgPAJgOAAQgVAAgSgVgAgeCdIhJACQAogiAhAggABbgvQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgEQgCgEACgGQABgEADgBQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAheinQgCgBgCgEIAAgHQACgGAEgCQACgCADAAIABAAIAEABIAEAEIACAEIgBAFQgCAGgEADIgCAAIgEABIgFgCg");
	this.shape_20.setTransform(29.351,75.8426,1.7366,1.7366,0.7144);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhPCzIgIgKIABAAIBJgCQAHAHAGAJIgLAIgABTAfQgEgCgCgDQgEgFgCgLQgEgRADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhWQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_21.setTransform(26.456,74.1421,1.7366,1.7366,0.7144);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#815451").s().p("AB5BaQgCgCgFgKQgHgPgQgJQgPgIgTgCIgMgDQgGgCgCgFQgBgDADgEQABgDAEgDQAFgCAIgBQAVABARAJQASAJAOAPQALAMADALQACAJgDAEQgBAEgDACIgGACQgFgBgEgFgAhBgmQgEgBgEgDIgFgGIgEgHQgGgJgKgFQgKgEgKACIgGAAIgGABQgDABgCgBIgFgEQgCgEACgFQACgEAFgDQAIgGAMABQAJgBALAEQALAFAKAJQAKAIAGALQADAGAAAFQAAAHgFADIgDABIgEgBg");
	this.shape_22.setTransform(33.1727,41.0931,1.7366,1.7366,0.7144);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A25050").s().p("AgkAPQgTgOAAgNIACgHIAIAKQAaAbAxABIAGAAIATgBIgBAFQgGAMgcACIgDAAQgaAAgbgWgAArAGQgUgRgbgIQgUgHgQADQgHABgGADQABgEADgEQAFgIAGAAQAGgBAGABIAPAFQAyANAKAOQAIALgCAKIgMgMg");
	this.shape_23.setTransform(18.203,104.2271,1.7366,1.7366,0.7144);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhpCdIBMAdQgygBgagcgAhkCPQAQgDAUAHQAcAJAUARgABdgsQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgDQgCgFACgFQABgEADgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAhcijQgCgCgCgEIAAgHQACgGAEgCQACgBADAAIABAAIAEABIAEADIACAFIgBAEQgCAGgEADIgCAAIgEABIgFgBg");
	this.shape_24.setTransform(29.0104,75.3029,1.7366,1.7366,0.7144);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgODAIhMgeIgIgJQAGgEAHAAIBUAdIALANIgSABIgGAAgABTAeQgEgCgCgDQgEgFgCgLQgEgRADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhXQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_25.setTransform(26.4538,74.3158,1.7366,1.7366,0.7144);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A25050").s().p("AAEBFQgSgFgRgLIgCgKQADgLAGgHQAFgHAGAAQAKAAAEASQAHgNAJAAQAHAAAEAIIACAEIgBAEQgEAXgHAIIgDAAIgLgBgAAegeQgFgNgDgGQgDgGgNgCQgLgCgFABQgGABgEAGIgGAIQgEAHgCAHIADgOIAFgRQAEgIAJAAQAWgDAMAJQAMAJgBAOIAAASIgEgJg");
	this.shape_26.setTransform(18.1193,105.9422,1.7366,1.7366,0.7144);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzCgQgTgHgOAAIgHAAIAGgIQAEgGAGgBQAFgBAMADQANACADAFQADAGAFAOQgHgFgKgCgABZgYQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDQgCgFACgFQACgEACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIACAAQAFAAACADQADAFgCAHQgBAEgDACQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCABIgBgBgAhgiPQgDgCgBgEIAAgHQABgGAFgCQACgBADAAIABAAIAEABIADADIACAFIAAAEQgCAGgFADIgBAAIgEABIgFgBg");
	this.shape_27.setTransform(29.8568,71.84,1.7366,1.7366,0.7144);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhQCaIAAgFIACgNQADgHAEgHIAGAAQAPgBATAHQAKADAHAEIADAJIAAADQAAAfgDAWIgCgDQgFgJgHABQgJgBgGANQgFgSgLAAQgFAAgGAIQgGAHgDALQgFgZAEgegABTANQgEgCgCgDQgEgFgCgKQgEgSADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAYQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhoQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_28.setTransform(26.417,77.2678,1.7366,1.7366,0.7144);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A25050").s().p("AgvAfIgFgHQAFgKAJgDQAJgDANACQAMACAGAMQALgHAOADQAKAAAIAHQABAAAAAAQAAABAAgBQAAAAABAAQAAAAAAAAQgBAEgEAGQgEAGgHAEIgMAFQgEABgRAAQgRAAgcgWgAAwgNIgNgOQgGgFgSgDQgTgFgIABQgJgBgFACQgJAEgBACQgGADgEAGQABgHAEgGQAFgHAEgDQAEgDAHgBIAPgCIARABQALAAASAKQARAKAAALIAAAOIgFgHg");
	this.shape_29.setTransform(18.2637,104.7655,1.7366,1.7366,0.7144);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoCkQgegIgWgCIgKgCQABgCAJgDQAEgDAKABQAIgBAUAFQASADAGAFIANAPIgbgIgABagdQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgDQgCgFACgFQABgEADgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAhfiUQgCgCgCgEIAAgHQACgGAEgCQACgBADAAIABAAIAEABIAEADIACAFIgBAEQgCAGgEADIgCAAIgEABIgFgBg");
	this.shape_30.setTransform(29.5638,72.7047,1.7366,1.7366,0.7144);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AABDFQgHgHgLAAQgOgDgLAHQgHgMgMgCQgNgCgIADQgJADgGAKQgEgGABgLIAFgfQAEgGAHgDIAKABQAWACAeAJIAaAHIAEAHIAAACQgBAUgEAMIgCABIAAgBgABTAYQgEgCgCgDQgEgFgCgKQgEgSADgSQADgTAKgQQAFgHAEgDQADgCADAAQAEAAACACQAFACABAIQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgDABgBAEQgCAGACAEIACAEQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAQgBAXgEAYQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhdQgDgCgDgDQgDgFgCgKQgEgTADgSQADgTAKgQQAEgHAFgCIAGgDQADAAADACQAFACABAHIgBAAQgDAAgCACQgEACgCAGIAAAHQACAEACABIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_31.setTransform(26.4415,75.3056,1.7366,1.7366,0.7144);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A25050").s().p("AA0AaIAAABIAAADQgLgRgGgGQghgggmAYIgBAAIgBABIgMAIIgBABIAAgBQACgQALgKQAKgLAHAAQAGgBAJADIANABQATACAOASQAFAGADAHQADAHABAQg");
	this.shape_32.setTransform(17.869,104.9849,1.7366,1.7366,0.7144);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhmCuQAogYAhAgQgpgHgggBgABagoQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDQgCgFACgFQACgEACgCQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAIACAAQAFAAACADQADAFgCAHQgBAEgDACQgBABAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIgCABIgBgBgAhfifQgDgCgBgEIAAgHQABgGAFgCQACgBADAAIABAAIAEABIADADIACAFIAAAEQgCAGgFADIgBAAIgEABIgFgBg");
	this.shape_33.setTransform(29.6268,74.6159,1.7366,1.7366,0.7144);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgJDIIhKgMQgKgEgFgGIABgBIAMgIIABgCIABAAQAgABAoAIQAGAGAKARIAAAAIgJABIgFAAgABTAWQgEgCgCgEQgEgFgCgKQgEgRADgTQADgTAKgQQAFgHAEgCQADgCADAAQAEgBACACQAFADABAHQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIAAIgCAAQgDAAgCgBgAhhhfQgDgCgDgEQgDgFgCgKQgEgSADgTQADgTAKgPQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAHQACAEACACIAFABIAEAAQAAAXgFAZQgBAKgDAFQgFAIgHAAIgCAAQgDAAgDgBg");
	this.shape_34.setTransform(26.4355,75.7821,1.7366,1.7366,0.7144);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2.5,1,1).p("Ah4haQgDATAFAOQAEANAJAGQAJAGAKACQAKABAHgEQAHgEAFgFQACgEACgDAA3AfQgDATAFANQAEAOAJAGQAJAGAKABQAKACAHgEQAHgEAFgGQACgDACgE");
	this.shape_35.setTransform(25.9683,63.4039,1.7366,1.7366,0.7144);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgsgGIBMAcQgygBgagbgAgmgUQAQgDAUAHQAbAIAUARg");
	this.shape_36.setTransform(17.9719,103.6995,1.7366,1.7366,0.7144);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAeAWIhMgdIgIgJQAGgEAIgBIBTAdIAMANIgUABIgFAAg");
	this.shape_37.setTransform(18.3182,103.782,1.7366,1.7366,0.7144);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7D3BE").s().p("ABqBTQgFgCgDgGQgDgFgBgGQAAgGADgGQACgFAEgEQAGgGAHgBQAEgBAJAAQANABAFACQALAEAEAHQADAGAAAIQgBALgGAFQgDADgHABIgLABIgQACIgCAAQgHAAgGgDgAiXgJQgFgCgDgEQgFgGAAgMQAAgHACgMIAEgTIABgFIADgFQADgEAJAAQAHABAEADQAEAEAAAKQABAVgFAUQgEAOgHADIgFAAIgEAAg");
	this.shape_38.setTransform(26.2759,82.3478,1.7366,1.7366,0.7144);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQAPhDAZhDIACAAIAAgKIAEgKQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgOAAgJgCg");
	this.shape_39.setTransform(21.2484,71.9063,1.7366,1.7366,0.7144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_1},{t:this.shape_10},{t:this.shape_9}]},10).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_9},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_1},{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_1},{t:this.shape_19}]},8).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_1},{t:this.shape_23}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_1},{t:this.shape_26}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_1},{t:this.shape_29}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_1},{t:this.shape_32}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_22,p:{x:30.6562,y:47.9218}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_23},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_1},{t:this.shape_29}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_1},{t:this.shape_26}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_1},{t:this.shape_23}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_1},{t:this.shape_19}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_1},{t:this.shape_29}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_1},{t:this.shape_32}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_22,p:{x:30.6562,y:47.9218}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_23},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_22,p:{x:33.1727,y:41.0931}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_1},{t:this.shape_29}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(139));

	// ruka_L
	this.instance_2 = new lib.Devojkao1shaka("single",0);
	this.instance_2.setTransform(115.2,351.25,1.1424,1.1424,21.9725,0,0,16.2,23.2);

	this.instance_3 = new lib.Devojkao1dolakta("single",0);
	this.instance_3.setTransform(122.45,178.45,1.1426,1.2381,-3.1693,0,0,15.2,16.2);

	this.instance_4 = new lib.Devojkao1odlakta("single",0);
	this.instance_4.setTransform(137.5,253.6,1.1425,1.0297,10.5123,0,0,14.8,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleX:1.1425,rotation:10.5123,x:137.5,y:253.6,regY:11.3}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1424,scaleY:1.1424,rotation:21.9725,x:115.2,y:351.25,regY:23.2}}]}).to({state:[{t:this.instance_4,p:{scaleX:1.1424,rotation:33.0439,x:153.35,y:249.2,regY:11.3}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1423,scaleY:1.1423,rotation:44.5043,x:95.35,y:330.85,regY:23.2}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.1424,rotation:47.5429,x:159.8,y:243.45,regY:11.4}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1423,scaleY:1.1423,rotation:59.0022,x:83.35,y:308,regY:23.2}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.1424,rotation:80.7526,x:168.05,y:235.45,regY:11.3}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1424,scaleY:1.1424,rotation:92.2124,x:68.75,y:247.45,regY:23.1}}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4,p:{scaleX:1.1424,rotation:80.7526,x:168.05,y:235.45,regY:11.3}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1424,scaleY:1.1424,rotation:92.2124,x:68.75,y:247.45,regY:23.1}}]},3).to({state:[{t:this.instance_4,p:{scaleX:1.1424,rotation:47.5429,x:159.8,y:243.45,regY:11.4}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1423,scaleY:1.1423,rotation:59.0022,x:83.35,y:308,regY:23.2}}]},3).to({state:[{t:this.instance_4,p:{scaleX:1.1424,rotation:33.0439,x:153.35,y:249.2,regY:11.3}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1423,scaleY:1.1423,rotation:44.5043,x:95.35,y:330.85,regY:23.2}}]},3).to({state:[{t:this.instance_4,p:{scaleX:1.1425,rotation:10.5123,x:137.5,y:253.6,regY:11.3}},{t:this.instance_3},{t:this.instance_2,p:{scaleX:1.1424,scaleY:1.1424,rotation:21.9725,x:115.2,y:351.25,regY:23.2}}]},2).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({regY:16.3,rotation:-13.6183,x:123.4,y:178.4},0).wait(2).to({regY:16.2,rotation:-24.3751,x:122,y:178.2},0).wait(3).to({rotation:-39.1327,x:122.45,y:178.5},0).wait(3).to({regY:16.4,scaleY:1.1501,rotation:-64.391,x:121.95,y:177.15},0).wait(3).to({scaleY:1.0939,rotation:-87.3657,x:121.9,y:177.05},0).wait(4).to({regX:15.3,regY:16.3,scaleX:1.1425,scaleY:1.0956,rotation:0,skewX:-112.8855,skewY:67.1141,x:119.5,y:164.15},0).wait(4).to({skewX:-115.5708,skewY:64.4284},0).wait(4).to({scaleX:1.1426,skewX:-90.3527,skewY:89.6465,y:164.2},0).wait(2).to({scaleX:1.1425,skewX:-80.3744,skewY:99.6249,y:164.15},0).wait(7).to({regY:16.4,skewX:-87.3706,skewY:92.6287,x:119.55,y:164.1},0).wait(2).to({skewX:-109.1176,skewY:70.8814,y:164.05},0).wait(2).to({regX:15.4,regY:16.3,skewX:-134.0746,skewY:45.9248,y:164.25},0).wait(2).to({skewX:-136.526,skewY:43.4734,x:119.5},0).wait(4).to({regX:15.5,skewX:-114.2876,skewY:65.713,x:119.6,y:164.4},0).wait(2).to({regX:15.4,skewX:-102.0865,skewY:77.9133,x:119.55,y:164.2},0).wait(2).to({regX:15.3,regY:16.4,skewX:-79.5941,skewY:100.4064,x:119.6},0).wait(2).to({skewX:-77.1433,skewY:102.8565},0).wait(4).to({regX:15.4,scaleY:1.0955,skewX:-88.3415,skewY:91.6578,y:164.25},0).wait(2).to({scaleY:1.0956,skewX:-105.0838,skewY:74.9147},0).wait(2).to({regX:15.3,scaleY:1.0955,skewX:-131.0384,skewY:48.9608,x:119.55,y:164.2},0).wait(2).to({regX:15.4,scaleX:1.1424,skewX:-133.2538,skewY:46.7465,x:119.6,y:164.25},0).wait(4).to({regX:15.5,skewX:-112.2555,skewY:67.743,x:119.7,y:164.4},0).wait(2).to({regX:15.4,skewX:-104.8221,skewY:75.1775,x:119.6,y:164.25},0).wait(2).to({regX:15.3,scaleX:1.1425,skewX:-75.3421,skewY:104.6576,y:164.2},0).wait(2).to({scaleX:1.1424,skewX:-73.391,skewY:106.6081,x:119.55},0).wait(4).to({scaleX:1.1425,skewX:-81.3742,skewY:98.6249,x:119.6},0).wait(2).to({skewX:-93.779,skewY:86.2207,x:119.55},0).wait(2).to({regX:15.4,scaleX:1.1424,skewX:-107.7939,skewY:72.2059,x:119.6,y:164.35},0).wait(3).to({regX:15.5,scaleX:1.1425,skewX:-110.9902,skewY:69.0095,y:164.45},0).wait(7).to({regX:15.2,scaleX:1.1426,scaleY:1.0939,rotation:-87.3657,skewX:0,skewY:0,x:121.9,y:177.05},0).wait(4).to({scaleY:1.1501,rotation:-64.391,x:121.95,y:177.15},0).wait(3).to({regY:16.2,scaleY:1.2381,rotation:-39.1327,x:122.45,y:178.5},0).wait(3).to({rotation:-24.3751,x:122,y:178.2},0).wait(3).to({regY:16.3,rotation:-13.6183,x:123.4,y:178.4},0).wait(2).to({regY:16.2,rotation:-3.1693,x:122.45,y:178.45},0).wait(97));

	// torzo
	this.instance_5 = new lib.Devojkao1torzo("synched",0);
	this.instance_5.setTransform(78.3,255.05,1.1428,1.1428,0,0,0,56.9,106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200));

	// noga_L
	this.instance_6 = new lib.Devojkao1nogadesna("synched",0);
	this.instance_6.setTransform(45,385.05,1,1,0,0,0,30.7,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200));

	// ruka_D
	this.instance_7 = new lib.Devojkao1dolakta("single",0);
	this.instance_7.setTransform(38.3,168.4,1.1426,1.1426,6.9519,0,0,17.5,40.8);

	this.instance_8 = new lib.Devojkao1shaka("single",1);
	this.instance_8.setTransform(13.8,301.4,1.1424,1.1424,12.7883,0,0,16.2,23.2);

	this.instance_9 = new lib.Devojkao1odlakta("single",0);
	this.instance_9.setTransform(38.45,191.95,1.1424,1.1424,12.7883,0,0,14.7,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(200));

	// noga_D
	this.instance_10 = new lib.Devojkao1nogaleva("synched",0);
	this.instance_10.setTransform(110.25,291.75,1,1,4.6957,0,0,48.1,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(200));

	// Layer_4
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(51,51,51,0.298)").s().p("ADgGkQjTgHhbiIQhdiIi9AQQidAZhhhnQiLiVBFipQBEimDMgOQExgJEgCpQAhATAiAQQDhgVChCsQCNCXiACCQjRDUjMAAIgKAAg");
	this.shape_40.setTransform(75.6828,507.7054);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-62.8,209.4,612.5);


// stage content:
(lib.sceneSplashGovernment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_12
	this.instance = new lib.devojkaobicna1("synched",0);
	this.instance.setTransform(676.65,793.25,0.3582,0.3679,0,0,0,76.4,267.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Layer_7
	this.instance_1 = new lib.Tip("synched",0);
	this.instance_1.setTransform(508.25,638.7,0.7355,0.7355,0,0,0,98.5,167.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// Layer_6
	this.instance_2 = new lib.Superdevojkalebdi("synched",0);
	this.instance_2.setTransform(875.15,304.1,1,1,0,0,0,-502.9,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

	// Layer_5
	this.instance_3 = new lib.Supermomaklebdi("synched",0);
	this.instance_3.setTransform(1065,375.25,1,1,0,0,0,65.5,146.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200));

	// portal
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(176,161,235,0.51)","rgba(73,192,255,0.71)"],[0,1],-74.1,0,74.2,0).s().p("AF+RfIgvgUIgFgCIgqgVIgmgUIgDgCIgcgQIgWgOQgbgRgcgSQhmhGhdhYIgKgKQg2g0gyg6IgBgBIgKgKIgug2IgBgCIgDgEIjGkiIgCgGIgNgTIgDgGIgXgqIgNgWIgRgiIgBgBIgjhIIgCgGIAAgBIghhHIgCgHQhFicgpicQgLgpgJgqIgNhCIgCgLIgMhLIgBgMQgFgsgCglQgFg0gBg0IAAgXIABhBQACgsAFgoQAEgqAHglIACgPIAFgSQAKgoAKgjIAGgTQAUg5AcgxQARgBAUABIAEAAQBEACBLAVIAKADQAdAJAgALIANAFIADACIAIADIACABIAFACIABABIADABQAgAOAgAQQAvAWAsAdQGEDwESH6QDiGeApGNQAIBVABBWQAABygPBdIgDATQgVBygsBZIgCADQgHAOgJAPIgXABQhvAAh9gwg");
	this.shape.setTransform(697.6,500.9425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#70CAE3","#5E84C4"],[0,1],-108,160.9,70.7,-77.4).s().p("ArZUPIgZgTIgYgUIgOgOIgDgDIgZgbIgHgHIgVgaIACAAQCpAADHhlIACgBIAYgNIEaDgIgFACQihBJiNAAQiIAAh0hEgAlwP2QDViFC1jQIFPDMQg2A9g6A4IgLALQh+B2iMBYIg1AggAvLNtIACgBIAxgVIAFgCQAZgLATgLIApgVIAEgCIAegSIEKDUQi8BcifgJQgMAAgKAHIgCAAQgwhfgWh4gArLLiQBthKBkheIALgLQA6g4A2g9IABgBIAKgLIFBDDQitDBjHB8IAAAAIgVAMgABWJaIAaghQB9iiBtjIIAwheIFkCjIgmBOIgTAkIgNAYIgZAsIgDAHIgNAVIgDAGIjTE1IgEAFIgBABgAk5FnIDNkuIADgGIANgVIADgHIAZgrIANgYIATgkIABgBIFYCdQgXAugWAoQhtDIh8CfIgbAigAGyAeQBrjnA0jlIFeB8QgsDzhsD5IgDAHgAAIikIAAgBIAjhMIADgHQBJioArimIFaB6QgyDfhpDngAJkoIQANhJAJhIQAKhiAAhjQAAgxgDgtIE0BBQAJAuAGA2QAIBLAABUIAAAYQgBA3gEA4IgIBWIgCANgAC4qfIAOhGIACgMIAMhQIACgNIAIhWQAEg4ABg3IFDBDQAEA5AAA5QAABagJBhQgIBAgKA9gAJ5wcQgXiwhDh+IAAgBQAXAEAYAGIAwAQIAVAJQAdAMAdASIAIAFQCDBiA9CwIAGAUgADixxQgCgugFgrQgFgsgGgmIgBgDQB8gxBwgCIAAACQAAALAHAMQBBBuAYCcg");
	this.shape_1.setTransform(678.6422,512.1192,0.9375,0.9375,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],-67.7,-135.4,67.7,135.4).s().p("ACRTGQgagMgUgLIgmgUIg2gfQiDhTh2hvIgKgKQg3g0gzg6QgYgbgggnIgdgmIiskAIgDgGIgMgTIgDgHIgXgpQgEgJgJgOIgSgiIgmhPIgjhOQhojvgpjpIgNhXIgHhRQgEg0gBg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAFgEIADgCIAIgFIADgCIACgBIADgCQAagQAcgMQA1gXA4gKQAWgEAdgCIAJAAQAQgBASABQBGACBNAVIAKADQAdAJAgALIAMAFQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAIADIABABIAFACIACAAIADACQgMBEgCBKIgBBYQADCrAlCtIATBUQA0DABbDFIAlBOIAiA+QBeCtBsCOIAVAdIAEADIgBABIA3BDIABAAQCQCmClB2IBTA1QAtAbAkATQAfAQAhAOQgUB/gyBiQgIARgMAUIgFAIQgLATgOARQgWAegbAbQgkAkgsAdIgMAGQhwBEiDAAQiDAAiXhEg");
	this.shape_2.setTransform(676.675,513.3063);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DDEF1").s().p("AGpHJQkroYmPk1IKImEQGdE2ExIjQCvE2BdEvIABACIqUGLIgCABQhdk5i2lCgAqgwBQCHhCCaAAQAcAAAbACIp4F8IgUgDQgigDglAAQimgBiQBNg");
	this.shape_3.setTransform(725.175,411.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],33,-8.8,110.9,152.3).s().p("AETcNIASgPQAtgqAkgzQAcglAXgqQAJgRAFgLQAOgcALgbQBUjNgBknQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFbgBFQQABFwiDDlQgZAqgdAmQhHBdhkA/IgTAMIo1ErIAAABgArczbQg+gog9gcQhBgfg+gYIgKgEQhAgYhAgPQgwgLgvgFIJ5l8IADAAQAuAEAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AjAqAhIqIGEQhjhMhqg/g");
	this.shape_4.setTransform(750.6001,482.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44A6F4").s().p("AumlQIAxhiIAAgCIazP4IAAADIicAigAt1onIBohBIa0P5IhpBBg");
	this.shape_5.setTransform(668.85,652.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4861D4").s().p("AtykyIAAh9IZIO5IAAB+gAtBoUIAAhzIa0P5IgBAAIAABzg");
	this.shape_6.setTransform(663.625,662.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A3CC3").s().p("AKiKoI5Iu6IAAh9IAxhiIAAh1IBohCIa0P5IAADyIhpBCIgBABIiZAjg");
	this.shape_7.setTransform(668.85,659.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C0482").s().p("AimEGQgEgCgDgEQgCgEABgFQACgFAFgCIFEitQAEgDAFACQAFABACAFQACAFgBAEQgCAFgEACIlFCtIgFACIgEgBgAimC2QgFgCgCgEQgCgFABgEQACgFAFgDIFEisQAEgDAFADQAFABACAEQACAFgBADQgCAGgEACIlFCtQgCACgDAAIgEgBgAinBqQgEgCgDgFQgBgDABgGQACgEAEgDIFEisQAFgDAEACQAFACACAFQADAEgCAFQgCAFgEACIlECsQgDACgDAAIgEgBgAilATQgFgCgCgEQgCgFACgEQABgEAEgCIFFitQAEgDAFACQAFABACAFQACAEgBAFQgCAFgEACIlFCsQgCACgDAAIgEgBgAilhAQgFgCgCgFQgCgEABgFQACgFAEgCIFFiuQAEgCAFACQAEACACAFQACAEgBAFQgCAEgEADIlECtIgFABIgEAAg");
	this.shape_8.setTransform(811.8081,683.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7898D0").s().p("AkbFEQAQgIAZgSQANgHAYgRIA9guQAtgmAjgjQA7g2Atg4IBBhTQAXggAegwIAXgnQAdg0Aag3QANgbAHgVIA+giQgcBJgnBLQgnBLgtBBQgbAogcAhQgiAqgjAlQhTBbhsBLIipBXg");
	this.shape_9.setTransform(828.9326,620.7992,0.5267,0.541);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5884B3").s().p("Ak7D8IHJkFQgjAhguAmIg9AuQgWARgOAIQgYARgQAJIgiAWIkUCPQAngkAggkgAh/gaIACgFIIAkkIgXAnQgeAxgWAfIgVAbInuEaQApg/AjhEg");
	this.shape_10.setTransform(818.0697,629.7658,0.5267,0.541);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#536C99").s().p("AkVDbIHvkbIgtA6QguA3g7A2InIEGQA6hCA1hQgAiFhBIIKkrQgHAVgNAbQgaA3gdAzIoAEkQAkhIAdhLg");
	this.shape_11.setTransform(821.9277,623.6258,0.5267,0.541);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A4B3DD").s().p("ACtifQCHhDCZAAQAcAAAcADIp4F6IgUgCQgigDglAAQimAAiQBMg");
	this.shape_12.setTransform(640.625,324.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7A41C1").s().p("AjyijIHlkFIAAIvInlEig");
	this.shape_13.setTransform(810.35,684.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#602BA2").s().p("APSNvIiBhMIAAnlICCg7IABAAIAAAAIBPAqIAAJNgAvxkrIgxg/IAAnhIAFgEIABgCIArgoIBZCgIAAHjg");
	this.shape_14.setTransform(680.2,637.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DDF0F5").s().p("ACRTGQgagLgUgLIgmgUIg2ggQiDhSh2hvIgLgKQg2g1gzg6Ig4hCIgeglIiskBIgCgGIgMgTIgEgHIgWgpQgFgJgIgNIgSgiIgmhQIgkhOQhnjvgpjpIgNhXIgHhRQgFg0AAg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAGgEIACgCIAIgFIACgCIADgBIADgCQAbgQAbgMQA1gXA4gKQAWgEAdgCIAIAAQARgBARABQBHACBMAVIALADQAdAJAfALIANAFIAEACIAIADIABABIAGACIABAAIACACQgLBEgCBKIgBBYQADCsAlCsIATBUQAzDBBbDEIAmBOIAiA/QBfCsBrCPIAWAcIADADIgBABIA3BDIABAAQCRCnCkB1IBTA1QAuAbAjATQAfAQAhAPQgUB/gyBhQgIASgMATIgDAGIgHAMIgUAbQgVAegcAbQgkAjgsAdIgMAHQhwBDiDAAQiDAAiXhEg");
	this.shape_15.setTransform(676.65,513.5313);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C0482").s().p("AkZB6IIakdIAZBDInlEEg");
	this.shape_16.setTransform(806.425,651.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A4B6DD").s().p("Ah2EsQkroYmQk1IKJmFQGcE3ExIkQCvE1BdEvIABACIqUGLIgBABQhek5i1lCg");
	this.shape_17.setTransform(779.575,427.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8BACC3").s().p("At7NIIAAnjIhaihIAAgBIABAAQhXitg+irQiVmeAAmMQAAhHAFhCIBMAvQAKiiAqh/IAPgpQBQjQCwhmIABAAIASgLQB9hCCQAAQAWAAAUACIA+h8QAvAGAvALQBBAPBAAYIAKADQA+AYBBAgQA8AcA+AoQBqA/BiBMIAcC/QFHElD9HGQCMD3BYD1ICLAzQBUEXAOEQQACAyAAA8IgBBIQgXFyiXDeQgjAwgrAoIgSAQIABAAIAAgBIAEgCIgGAFIiBA6IAAHlgAm42lIgIABQgeACgWADQg4AKg1AYQgbALgbAQIgDACIgCABIgDADIgIAFIgCACIgGADQiJBeg9CxQgPAqgMAzQgLA0gHA9QgHBGAABPIAAAWQABA0AEA1IAHBQIANBYQApDpBoDuIAjBPIAmBPIhGA8IAJATQAIANAHANQABAEAEAEIAIAPIADAGQAGAJADAHQADADABAFIANAWQACACABAEIADAFIC9EZIAdAlIAEAEQAdAkAhAnQA6BBA9A6IALAKQCEB+CTBbIBlA6IAzAZQFRCWD7iWIAQgKIhRiLQArgdAlgkQAbgbAVgeIAUgbIAHgMIADgFQAMgUAJgRQAxhiAUh/QAPhdAAhxQAAhXgJhVQgomLjimfQkSn7mFjwQgrgcgvgXQgggQgggOIgDgBIgBgBIgFgBIgCgCIgIgDIgEgCIgMgEQgggMgdgIIgKgDQhNgWhGgCIgSAAIgQAAgAStQxIgBADIgOAhIgBABIAQglg");
	this.shape_18.setTransform(677.325,529.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#59ACBC").s().p("ADJXqIg0gYIhlg6QiThciEh9IgLgKQg8g7g6hBQgigmgdgkIgEgEIgcglIi+kZIgCgGQgBgEgDgCIgNgWQgBgEgDgDQgDgIgFgIIgDgGIgJgQQgDgEgCgEQgGgNgJgNIgJgSIBHg8IASAiQAIANAEAJIAXApIAEAHIALATIADAGQBwC5BWBpIAEAEIA3BCQA0A6A2A1IAKAKQB3BvCDBSIA2AgIAlAUQAVALAZALQEuCHDgiGIAMgHIBSCLIgRALQh9BKiTAAQiTAAiohLgAQ/CoQhXjziNj4Qj9nGlHkkIgbjAQGQE2ErIYQC2FDBeE4gAzKsXQANirAsiGIARguQBdjvDKh2IAWgMQCPhNCnAAQAlAAAhAEIAUACIg+B7QgUgCgVAAQiRAAh8BDIgSAKIgCABQivBmhRDQIgPApQgqB+gJCjg");
	this.shape_19.setTransform(672.575,498.6438);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAEAEA").s().p("AETcOIASgQQArgoAkgwQCWjeAXlyQACglAAgmQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFaAAFQQABFyiEDkQgYAqgeAnQhHBdhkA+IgTAMIoxEqIgEACIAAABgAHAYkIABgBIAOghIABgDIgQAlgArczbQg/gog8gcQhBggg+gYIgKgDQhAgYhAgPQgwgLgvgGIJ5l7IADAAQAuADAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AkAqAgIqIGFQhjhMhqg/g");
	this.shape_20.setTransform(750.6001,482.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(200));

	// Layer_3
	this.instance_4 = new lib.racunar2("synched",0);
	this.instance_4.setTransform(385.1,966.1,1.0853,1.0853,0,0,0,45,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjuAIICqjAIEyCDIjIDug");
	this.shape_21.setTransform(473.1,874.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjhiTIGbgKIAoElImaAWg");
	this.shape_22.setTransform(436.7,936.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3F2F2").s().p("Aj/BHIBJkAQDoAzDOAMIh+E0QjDgci+hXg");
	this.shape_23.setTransform(473.9,927.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.31)").s().p("AmqCxIF9gJIAih2QDoAyDOAMIh9E2QiVgWiPg1IAPBzImaAVgAhLkiICpjAIE0CCIjIDwg");
	this.shape_24.setTransform(457.275,907.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.459)").s().p("AnVJxQhXgQhAgrQgYgRgZgXIgvgqQhqhch+g4QgxgVglgGQgxgIgmAPQACgSATgKQAQgJAWAAQAtgBA2AVQAkAOA4AgIBNAuQArAcAdAZIAvArQAdAbAUAPQA1ApBFAVQBAATBJABQB7AACRg7QCihDBphpQA7g7AmhFQAphIAOhNQAFgcAEgpIADhEIAMlMQAAgKAEgDQACgCAEABQAEABAAADQABCvgIC2QgDBEgFAnQgIA7gQAuQgXA+g2BGQhiCAiQBQQiQBPihARQgjAEgiAAQgxAAgugIgAkFHLQh9gWhhhNQgrgihRhUQhKhGhAgWQghgLgqgDQgcgCgwAAQingBhLACQAygTBCgGQAmgDBSAAQAxAAAfADQAsADAiALQBGAXBTBOIBFBCQAnAmAgAYQBeBEB3ARQB3AQBtgoQBsgpBPhbQBPhaAahyQAJgqAEg2QACggABhBQABhgAFh6QAAgKAEgHQAEgIAIAAIgDDqQgBBIgCAlQgFA8gKAvQgdB4hWBfQhWBeh0AoQhKAahQAAQgrAAgugIgAjgFFQgWgLgWgSQgRgPgUgXQgegggwg8Qgvg4glgdQgzgphAgZQg+gWhFgHQgrgEggAIQgpAKgRAdQAAgUANgRQANgQAUgIQAegMA0AFQCMAOBfA/QAsAeAyA1IBRBgQAXAcAPAPQAVAWAXAMQA2AfBOgHQBZgIBNg0QBNg0AqhPQAphSANiaIAKh8QAHhFAPg0QABgEAGgDQAEgDABAFIgkE/QgIBFgKAkQgPA7gjA0QgjAzgwAlQgwAlg6AUQg5AUg+ACIgIAAQg2AAgngSgAOUEDQhIgJhGhIQg8g7glhLQgMgWgNghIgXg5QhAighShnQgngxgkgVQgmgWg3gGQglgEg+ADQAkgTAqgDQAqgCAoANQA0ASAwAxQAkAlAmA/QAzBTAmBWIAmBaQAWA0AUAiQA3BiBMAoQAtAXAxABQAzABAogZQAzggAThDQASg9gPhAQgNg3gdgnQgsg9hcgpQgfgNgygRQg8gVgVgIQiAgzhLhPQgrgugZg3Qgag8AAg6QAAgMAHgBQAEAAADAFQACAEAAAFQADBCAkA9QAhA5A3AtQAxAoBBAgQAzAYBKAbQBGAYARAIQAxAUAgAYQAoAfAdAsQAlA5AJBAQAKBEgYA7QgZA9g6AlQgwAegyAAQgMAAgNgCgAhHCmQgugSghgzQgLgTgMgcIgTgyIgxiIIgQgpQgJgXgKgRQgYgoglgdQgmgdgtgLQAogIAqAWQAmATAbAlQAWAdATAuQAFAMAYBFQASAyAlBbQALAcAHALQAKAVANANQAgAgAyACQAvABApgZQAkgWAfgoQAYggAXgvQARgiAHgYQAMgsgGg/QgKhOgDgeQgKhhAThfQADgKADgEQADgDAEAAQAFgBACADQAEAEgDAKQgWBLAFBQQABAJAPBsQAKBHgIAuQgGAogXAuQgPAhgfAvQgNATgJALQgNARgNAKQgSAPgdANQgrARgjAAQgaAAgWgIg");
	this.shape_25.setTransform(356.1097,948.2277);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.459)").s().p("AiOC6QgEgcAIgbIAGgQIAFgLQAIgXAGgJQAGgJATgSIAKgJIAbgbQAPgPAJgOQAGgIABgHIAAgKIgBgLQACgKgBgHIgBgGIgDgGIgBgKQgCgDgHgGQgGgFgBgFQAHgDAIACQAHACAEAHIAEAKIAEATQAHAmgKAbQgGANgNAOQgKAKgPANQgVATgIAJQgPARgHARIgFAPIgHAOIgEAHIgDAHQgCAFAAAIIgFAOQgGANABAOQgFgCgBgJgAgfCIQA2gYArgoQATgRAMgSIAPgaQAHgLADgIQAFgKABgQQAHg+gZgtQgPgbgUgJIgMgEQgIgDgEgCIACgKQAWgBAUARQAPAMAMAXQARAfADAZIABAcIABAbQAAAPgEAMQgEAJgIAPQgKASgIAKQgIALgPARQgSAUgQAMQghAZgmAJIgGABQgFAAgCgEgAhcCEQgCgWAQgSQAGgJASgLIBAguQAMgIAEgEQAHgKAGgEQAIgDADgEIAFgKIAHgMQACgFABgRIABgqQgCgZgMgOIgOgQQgJgKACgJQAMAFAOAOIAIAIQAFAHAEALQAEAOABATIABAiQABATgCAGIgHATQgFALgEAFQgFAHgNAJIhfBHQgQAMgFAJIgIAOQgFAFgFAAIgDAAg");
	this.shape_26.setTransform(402.7583,758.1971);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7EUQgHgGgFgGQgNgOACgLIAjAWQAUAOAPAEQALADAMABIAXgBQAZgBAQgEQAogIApgcQAdgTAoglQAMgLAJACQgPAUgSAUQglAmguAXQgxAYgwABIgEAAQg2AAgigagAgqDjQgWgBgYgKQgkgRgeggQAAgDADgBQADgCADAAQAEABAIAFQAZASAQAIQAYANAVACQAJABAVgDQAbgDAQgGQAZgIAcgWQARgNAdgcQAPgPAHgIIAJgOIAKgPQAEgGAFgCQAGgDAFAEQgQAegaAgQg5BDg+AUQgPAFgWAEQgQACgLAAIgDAAgAhkCLQgLgEgWgNQgUgMgIgJQgHgJgLgSIgGgLQgBgDACgDQACgDADgBQAGAEAGAHIAKAOQAMAOAXAOQATALAMACQAIACATgBIATAAIASgBQAlgEAyggQAZgRAPgPQAUgTAKgVQAFgLADgCQADgEAEgBQAEgCAEACQADABACADQACADgBADQAAAEgDACQgEADgDgBQgKAcgaAYQgSASghAWQgdATgRAHQgcALgvACIgGAAQgXAAgMgDgAh4gyQgTgEgXgRQgJgGgCgFQgCgEABgFQABgEADgCQAFgCAHAEIAIAJQAWAXAwgDQAngDAugRQAbgKA2gbIARgJQAIgGAFgHIAGAAQAEADgDAHQgBAEgGAFQgQAPgTAIIgNAGIgMAJQgJAFgVAJIgtAQQgkAKgmABIgFAAQgNAAgJgDgAiHhoQgQgHAAgKQAFgDAIACIANAEQAbAJAfgCQAegCAagOQAGgDAughQAggXAZgDQAEAAAEABQAFADgBADQgcAGgnAdQgtAjgSAIQgcAMgeAAQgdAAgcgMgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAdgBQAcgBAagLQAxgVAngxQAEgFAGgDQAGgDAEAEQgUAlgfAaQghAbgnAMQgVAGgXAAQgSAAgRgEg");
	this.shape_27.setTransform(297.7333,828.8875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgJBxgkQCBgrBbhPQAdgZA1g5IBDhKQAkgqAaglQBBhgAeh0QAdh1gNh0QAAgIADgGQAEgHAFAEQADABAAAHQAOB2gZBzQgaB2hABgQgVAggmAwQgrA2giAmQgsAxgpAkQhdBPhyAsQh1Ath5ADIgCAAQgiAAgGgTgAlSFgQBMgTAogMQCJgmB6haQB2hWBZh4QBFhdAhhYQASgyAOhAQAIgnAMhOQAGANAAATQABAOgCATQgMBggmBdQglBbg6BQQhvCaixBsQgoAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgMAigEQAmgDATgDQAhgFAmgOQAagKApgVQBTgqBBgrQBJgyA6g5QAlgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg2BehmBtQgmApgdAZQgpAkg4AkQglAXhFAmQggASgTAIQgcAOgYAJQgsAQgwAGQgWACgWAAQgaAAgagDg");
	this.shape_28.setTransform(307.3867,930.3394);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgTgHgYIgnh2QgOgogQgkQgXgyglhAQgYgnguhFIgzhJQgfgpgcgYQgJgJgCgGQgCgFADgFQACgFAFAAQAFAAAHAHQB7CPBaCmQAhA8ASAuQANAfAXBJQAPAyAGAeQAIAtgHAkIgJABQgBgIgBgWgACiDXQABgXgHgbQgEgPgMggIgVgzQhKish2iFQgMgNAGgHQAEgFAHAEQAGACAFAGQCbC9BAC7QAJAcADASQAEAZgGAUgACdAjQgFgWgJgaQgPgsgag1QgzhrhFhgQgKgNgGgGQgKgJgLgDQgEgFAFgGQAEgGAHABQAIAAAMANIAVAaQAmA0AiA6QAnBGAeBLQATAwAJAiQALAqgFAZIgKABQABgTgHgegAC6gXQgDgBgDgDQgCgDgBgKIAAgwQAAgdgCgSQgDgVgGgWQgSg8glhCQgYgngVgXQgdgegigLQgHgCgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgDQADgCAGABQAcAFAfAdQAeAdAXAoQAVAiATAtQAbBBAFArQABAOAAAnQgBAbACAOQADALgFADIgEACIgCgBg");
	this.shape_29.setTransform(356.5415,868.68);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgaAEgiIAIg8QAnkmgVkkIgDgnQALABAEATQAGAgADAlIACBGQACBqgBA6QAABagHBIQgFA7gQB/QgNBtAEBNIAFBEQADAnAAAeQgkh6AJh/gAgnGkQgCglABgYQAAgjADgbQADgfAQhFQAWhkALhCQAPhYADhOQAGiggoi1QgGgagBgOQgCgXAIgQQArCRAJCaQAJCagbCUIgeCQQgRBWgFA7QgCAggCA3QgDA0gJAigAhiGiQAAgcAIg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNABBjQACCBgOBtIgMBQQgbC0gLC2QgNgiAAgugAADFBQADgaALgpQA1iwAWhWQAoiZgGhzQgGiJhGieQgDgFACgHQABgGAFABQACABADAFQBXDGgDCmQgCBJgSBVQgMA2gcBlIhSEkQgDgdAEglg");
	this.shape_30.setTransform(394.8729,844.8609);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgSgPQgegagdgjQgWgbgdgqQgjgxgUghQgOgWgnhHQgXgngHgTQgJgVgHggIgPhBQgBgJACgDQADgEAGABQAFABADAEQACADABAGIABAJQADAwAWA1QAOAiAiA6QAkBBARAZQBRCDB3BjQgCADgEAAQgFAAgIgGgACuE3Qg2gcgyg9QgfgmguhNQhDhtghhEQgyhlgVhZQgDgJACgEQABgEACgCQADgCADAAQAHACACAMQAGAlAPApQAKAdAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHAAAIIgCAAQgFAAgIgEgADDDgQhDghg6hIQgXgcgZgmIgphGQg+hogbg6QgrhfgKhRQgBgHACgCQADgDAEAAQAEABADADQADADABALQAKBFAbBBQAQAlAlBEIA3BjQAuBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgIAAgKgFg");
	this.shape_31.setTransform(295.7219,844.1543);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.459)").s().p("Ah8EfQgPgEgFgGQgDgFABgEQABgDADgBQADgCACABIALADQAPAFASAAQANAAAVgDQAxgIAYgQQASgLAcgeIAWgaQAKgNAQgcIA4hhIADABIACAEQAAAIgHAMIgwBfQgKATgEAFQgGAJgIAIIgpArQgQAQgNAGQgKAFgXAGQglAJgRACQgOACgMAAQgPAAgMgCgAh5B7QgKgBgEgDQgDgBgBgEQgBgEACgDQACgDAKAAQBDAFA+gTQAdgJATgMQALgIASgRQASgTAIgLQAJgNALgWQAVgsARgoQANgeADgVQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAIACAEQABAMgDAMQgBAIgIAVQgVA5gOAdQgKAVgKAOQgMARgSASQgbAZgZALQgUAKghAHQg3AMgrAAIgHAAgAiwgNQgIgEAAgFQAAgCADgCQACgCADAAIALAEQAQAGAegBQAigBAVgDQAdgEAXgLQAjgRAdglQAWgbAXguQANgYAGgRQAIgYACgVIAAgSQABgMACgHIACAAIABACQAEApgDAVQgCAOgIATQgIAWgaAuQgTAigNAPQgMANgUAQQgWARgPAHQgUAJgnAFQgkAEgSAAQgdAAgWgKg");
	this.shape_32.setTransform(366.0643,776.6316);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg+gCg2gaQg6gagkguQgOgSgRgdIglg+QgYgSgQgaIgGgLIgUgUQgfgdg5guQg6gwgigVQg1ghgzgKIgkgFQgVgEgOgHQAhgJAlAFQAiAEAjAPQAcANAiAXQAUAOAlAdQA/AwAlAhIgEgTIgBgGQgNgMgLgOQgfgkgihBQgqhRgQgZQglg4gsgcQgTgNgcgLQgTgIgggJQg5gRgcgHQAYgLAiAGQAXADAlANQAiANASAIQAcANAUAPQAmAdAhA1QAMAWAnBNQAcA7AfAkIAJAKIgDgsQgEg2gGgeQgLgsgYgcQgLgOgUgPQgMgJgYgPIhMgvQBFAPAzAjQA6AoATA6QAKAeACAuIACBOIADAUQAaAVAcAKQAmANA1gFQAYgCBEgNQBmgSBPAFQAQABAzAHIAFgEQBdhLArgbQBRgzBJgMQA2gJB5AMQA8AFAtgBQAhgvAOhHQALg6gChYQgDimgXikQgIg3gCgXQgDgsAIghQArDnAHDuQACA4gCAiQgDAygIAoQgLAwgUAlIgHANQAYgCASgEQBMgTA6g7QAzg0AWhEIgsg9QgggtgQgeQgnhKgLhnQgIhHAFh0IAJBdQAJBeAKAwQAPBNAgA3QAMAVAcAmIAkAyQALgwgBhGQgDh0gchxQgEgPgzioQgjhwgGhLIAqCKQAxCfARBMQAfCEACBtQABBHgNAyQAPAYAQAiQAKAUAWA1QAPAmAHATQAKAhAAAbQABArgUApQgTAngiAfQg7A4heAaQhHAVhqAGIiyALQhkALhGAgQgeAMgrAbIhHAqQhuA8hoAAIgOAAgAl+JUQAYAnAaAUQAZASAkAJQAZAGArAEQAsAEAhgBQAogCAjgJQAxgOBGgsQBVg2AfgPQA1gYBFgLQAxgIBOgEQBVgCArgDQBJgFA1gNQBCgQA1gfQA6gkAhgzQAcgqAAgoQABgVgHgZQgEgOgMgeIgghMQgQgjgRgeQgbBPhDA5QhIA7hYANIgWACQgOASgRAQQgfAcgwAVQgeANg7ATQhfAfg2AMQhTAThFgEQgZgBg0gIIgBAAQgxAlgxAeQg2AggqARQg2AWgyACQg1AEgwgUQAVAmAMAUgAnmG4IAEAJQAYAaASAYIANAJQAtAcBBgEQBMgEBTgtQAsgZBAgxIgsgEQgpgDgzAGQgjAEg4AKQg/AMgdACQgzAEgmgOQgVgHgVgOQAFATAJAQgADyD4Qg4AOg+ArQgWAOhUBEIgJAHQAyAGAcAAQAwABA8gMQAmgIBFgTQBVgXAugVQA9gbAlgoIggAAQgZgCg+gGQgsgEgkAAQg2AAgkAJg");
	this.shape_33.setTransform(335.0773,944.1648);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ8QhEgfgyg3QgYgcgLgaQgNggAHgcQAjBVBIA5QBMA7BXADQA7ACBDgZQArgQBMgqQBVgvAhgPQBEgfA4gHQAugFBIAJIB0ARQBEAJAwABQA+AAA2gPQA9gSApgjQA5gxAXhSQAVhKgJhUQgIhCgdhWQghhdgTg4QhGjKgWjUQgBgPADgKQADgNALgEQgBBuAbB6QAWBkAtB9IA2CZQAcBWAHBGQAIBWgWBLQgaBTg5AzQgsAmg9ATQg2ARhCABQg0ABhFgJQgygHhGgLQg+gJgnADQg3ADhBAcQgmAQhMAsQhNArglAQQhBAcg4AEIgUABQg9AAg9gbgAnVIIQgfgNghgVQgZgQgjgaIgRgOQgJgIgEgIQgFgKABgLQABgMAIgHQA1BPBdAkQBcAkBcgVQA4gMBAglQAVgMBag6QBBgrAygVQBBgcA8AAQAkABA0AMQA5AQAdAGQBuAXA9gsQAegWASgmQAPgjADgpQABgigHgsQgGgfgMgtIg6jlIgRhGQgJgngEggQgJhEAEhWQACgzAMhoQAEAxgHBsQgGBlAHA3QAEAbAIAkIAQA/IA/DlQAPA2AGAeQAIAvgBAmQgBAtgRAnQgSAqggAZQhFAziFgcQgkgHhDgQQg8gLgsAHQgvAIg2AeQgWAMhFAwQgzAigqAXQgzAbgxAQQg3ARg1ABIgDAAQg4AAgwgSgAmHHbQgogKgkgmQgYgagggyQgNgTgEgNQgIgTAFgPQANANAwBHQAkA1AkARQAiARAugEQAggCAygPQArgMAegMQAogPAegRQAWgNAsghQAqggAYgOQA6giBEgKQBEgKBCAQQA2ANAOABQAmAEAWgUQARgPAGgbQAEgUgBgfQgDgugGg5IgNhmQgMhygBiSQgBhRAFi1QAIANADASQACALAAAWQABAogCCkQgBB8AJBPQABAPATB3QAMBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgEQgSgDgqgKQgogKgVgBQhKgFhaAzQgZAOguAhQgvAggZAOQhlA7hxAQQgYAEgTAAQgVAAgPgEg");
	this.shape_34.setTransform(376.5477,899.4097);

	this.instance_5 = new lib.Serverc("synched",0);
	this.instance_5.setTransform(239.9,886.65,1,1,0,0,0,53.5,128.2);

	this.instance_6 = new lib.Serverc("synched",0);
	this.instance_6.setTransform(308.85,846.35,1,1,0,0,0,53.5,128.2);

	this.instance_7 = new lib.Serverc("synched",0);
	this.instance_7.setTransform(377.75,805.75,1,1,0,0,0,53.5,128.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgIBxglQCCgrBahPQAdgZA1g5QAxg0ASgWQAkgqAaglQBChgAdh0QAdh0gMh1QgBgIADgGQAEgHAFAEQADACABAGQANB2gZBzQgaB2hABgQgVAgglAwQgsA2giAnQgrAwgqAkQhdBPhyAsQh1Ath4ADIgCAAQgjAAgGgTgAlSFgQBNgTAngMQCJgmB7haQB1hWBZh4QBFhdAhhYQASgxAOhBQAIgnAMhOQAGANABATQAAAPgCASQgMBhgmBdQglBag6BQQhvCaiwBsQgpAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgLAigFQAngDASgDQAhgEAmgPQAagKApgVQBTgqBBgrQBKgyA6g5QAkgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg1BehnBtQglApgeAZQgpAkg4AkQglAXhFAmIgyAbQgdAOgYAIQgsARgwAFQgWADgWAAQgaAAgagEg");
	this.shape_35.setTransform(163.4474,852.3894);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgSgHgYIgnh3QgPgogQgkQgWgyglhAQgZgnguhFQgjg0gPgUQgfgpgcgZQgKgJgBgGQgCgFADgFQACgEAFAAQAFgBAGAIQB8COBaCmQAgA8ATAuQAMAfAXBJQAQAzAGAdQAIAtgHAkIgJABIgCgegAChDXQABgXgGgaQgEgQgNggIgUgzQhKirh3iGQgMgNAHgHQAEgFAHAEQAFACAGAGQCbC9A/C7QAKAcACASQAEAZgFAVgACdAjQgGgWgJgaQgOgsgag1Qg0hrhEhgQgKgNgGgGQgLgJgKgDQgEgFAFgGQAEgGAHABQAIAAAMANIAUAaQAnA1AhA5QAoBGAeBLQASAwAKAjQALApgGAZIgKABQACgTgHgegAC6gWQgEgCgCgCQgDgEAAgKIAAgwQAAgdgDgSQgDgVgGgWQgRg8gmhCQgXgngVgXQgdgegigLQgIgCgBgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQADgCAGABQAcAFAfAdQAdAdAYAoQAUAiATAtQAcBBAEArQACAOgBAnQgBAbADAPQACAKgEADQgCACgDAAIgBAAg");
	this.shape_36.setTransform(212.6183,790.73);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgZAFgjIAIg8QAnkmgWkkIgDgnQALABAEAUQAHAgACAlQACAWAAAwQACBpAAA6QgBBagHBIQgFA7gQB/QgNBtAEBNIAGBEQACAnAAAeQgkh6AJh/gAgnGkQgBglAAgYQAAgiADgcQAEgfAPhFQAWhjALhDQAPhYADhOQAHiggpi1QgGgZgBgPQgCgXAIgQQArCSAJCZQAJCagaCUIgfCQQgRBWgEA8QgDAfgCA3QgDA0gJAigAhhGiQAAgcAHg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNACBjQABCBgOBtIgMBRQgaCzgMC2QgNgiABgugAADFBQADgaALgoQA1ixAWhWQAoiZgGhzQgGiIhGifQgDgFACgHQABgGAFACQADAAACAFQBXDHgDClQgCBJgSBWQgMA2gcBkIhSEkQgDgdAEglg");
	this.shape_37.setTransform(250.939,766.9265);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgRgPQgfgagdgjQgVgbgegqQgjgxgUghQgOgWgnhHQgXgngHgTQgIgVgIggIgPhBQgBgJADgDQACgEAGABQAFABADAEQADAEAAAFIACAKQACAvAWA1QAOAiAiA6QAkBBARAZQBSCDB2BjQgCACgEAAQgFAAgIgFgACuE3Qg2gcgyg8QgfgnguhNQhDhsghhFQgyhkgVhaQgDgJACgEQABgEACgCQADgCAEABQAGABACAMQAGAmAPApQAKAcAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHABAIIgCAAQgGAAgIgEgADDDgQhDghg6hIQgXgcgYgmQgRgagZgrQg+hpgbg6QgrhegKhSQgBgGACgDQADgDAEABQAFAAACADQADAEACAKQAJBFAbBBQAQAlAmBEQAhA+AWAlQAtBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgHAAgLgFg");
	this.shape_38.setTransform(151.775,766.2251);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.459)").s().p("Ah9EeQgOgDgFgHQgEgEACgFQABgCACgCIAGgBIAKADQAQAGARgBQAOAAAVgDQAxgIAYgPQASgMAbgeIAWgZQAKgNAQgdIA5hhIADACIABADQAAAIgGANIgwBfIgOAYIgOARIgpArQgQAPgOAHQgJAFgXAGQglAJgRACQgNACgMAAQgPAAgOgDgAh6B6QgJAAgEgDQgEgCAAgEQgCgDADgDQACgEAKABQBCAEA+gSQAegJATgNQALgHARgSQATgTAHgKQAJgNALgWQAWgsARgoQAMgeAEgVQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIACAEQAAAMgCAMQgBAIgIAVQgWA4gOAeQgKAUgKAPQgLAQgTATQgaAZgZALQgUAKghAHQg4AMgrAAIgHgBgAixgOQgHgDAAgFQAAgDACgBQADgCADAAQACAAAIADQARAHAegBQAigCAVgCQAdgFAXgLQAigQAeglQAWgbAXguQAMgZAGgRQAJgXABgVIABgTQAAgLACgHIADAAIABABQAEApgDAWQgDANgHAUQgJAVgZAvQgUAigNAOQgMANgUAQQgWASgOAGQgUAJgoAFQgjAFgSAAQgegBgWgKg");
	this.shape_39.setTransform(222.1542,698.7014);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg/gDg2gZQg5gagkguQgOgSgRgeIglg9QgYgSgQgbQgEgEgCgGIgVgUQgegdg5gvQg6gvgigVQg2gigygJIgkgGQgWgDgNgHQAhgKAlAFQAhAEAkAQQAcANAhAXQAVANAlAdQA/AxAlAhIgEgUIgBgFQgNgMgLgOQggglghhBQgqhQgQgZQglg4gsgdQgUgMgcgLQgTgIgfgJQg6gSgcgHQAZgKAiAFQAXAEAlANQAiANARAIQAcANAVAOQAmAdAhA2QAMAVAmBOQAdA6AeAlIAKAKIgEgtQgDg1gHgeQgKgtgYgcQgMgOgTgOIgkgYIhMgwQBFAPAzAjQA6ApATA6QAKAdABAvIADBOIACAUQAaAVAdAKQAlANA2gFQAYgCBEgNQBlgTBQAGQAQABAyAGIAGgEQBchLAsgbQBRgyBJgMQA2gJB5ALQA7AGAtgBQAigwAOhGQALg7gChYQgDilgYikQgIg4gBgWQgEgsAIgiQAsDoAHDuQABA4gBAiQgDAygJAoQgKAvgUAmIgHANQAYgCASgFQBMgSA6g7QAzg0AVhEIgrg+QgggsgQgfQgnhJgLhnQgIhIAFhzIAJBdQAJBeAJAvQAQBOAgA3QALAUAcAnIAlAyQALgxgChFQgCh1gchwIg4i4QgihvgHhLIArCJQAxCgARBLQAfCEACBtQAABIgMAxQAPAZAQAiIAfBIQAQAmAGAUQAKAgABAcQABArgVApQgSAngiAfQg7A3heAbQhIAVhpAGQilAJgNACQhlALhGAfQgdANgrAbIhIAqQhtA8hpAAIgNAAgAl/JTQAYAoAbATQAYATAlAJQAZAGArAEQAsAEAggCQApgBAigKQAxgNBGgtQBVg2AggOQA1gYBFgLQAwgIBPgEQBVgDArgDQBJgFA1gNQBCgPA0ggQA7gjAhgzQAcgrAAgnQAAgWgHgYQgEgOgMgeQgTgwgMgcQgQgkgRgeQgbBQhEA4QhHA8hYAMIgXADQgNASgSAPQgfAcgwAWQgeANg6ATQhfAfg2AMQhTAThGgEQgYgBg1gIIgBAAQgwAkgxAeQg2AhgqARQg2AVgyADQg1ADgxgUQAVAnAMATgAnnG4IAFAJQAYAaARAYIAOAJQAtAcBBgEQBMgEBSguQAtgYBAgxIgsgFQgpgCgzAFQgkAEg4ALQg/AMgcABQg0AEgmgNQgUgHgVgOQAFASAIARgADyD3Qg4AOg+ArQgWAPhVBDIgIAHQAxAHAcAAQAxABA8gMQAmgIBFgTQBVgYAugUQA8gbAmgoIghgBIhWgHQgtgEglAAQg1AAgjAIg");
	this.shape_40.setTransform(191.1506,866.2618);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ7QhEgegyg3QgYgcgLgaQgOggAIgdQAjBWBIA4QBMA8BXACQA6ACBEgZQAqgQBMgpQBVgwAigPQBDgfA5gGQAugFBIAJIBzARQBFAJAwAAQA+ABA1gQQA9gRAqgkQA5gxAXhSQAVhKgKhUQgIhCgchVIg1iWQhFjJgWjUQgBgPACgLQADgNALgEQAABuAbB7QAWBkAtB9IA2CYQAbBXAHBFQAJBWgXBLQgZBUg5AyQgsAng9ASQg3ARhCACQg0AAhEgJQgzgGhFgLQg/gJgmACQg4AEhAAcQgmAQhMArQhNAsglAQQhBAcg4AEIgSABQg/AAg9gcgAnVIHQgggMghgVQgYgQgjgbIgRgNQgKgJgDgIQgFgKABgLQAAgMAJgGQA1BOBcAkQBdAlBcgVQA3gNBBgkQAVgMBag7QBBgrAxgVQBCgbA8AAQAkAAAzANQA6AQAdAFQBuAYA9gsQAegWASgmQAPgkACgpQACghgIgsQgFgfgMguIg6jkQgMgrgGgcQgJgngEggQgJhEAFhWQACgyAMhoQAEAxgHBrQgGBlAHA3QADAcAJAkIAQA/IA/DlQAOA2AGAeQAJAvgBAmQgCAsgQAnQgSArghAYQhFA0iFgcIhngXQg7gLgsAHQgvAHg2AfQgWAMhFAwQgzAigqAXQg0AbgxAPQg3ARg1ABIgDAAQg3AAgwgSgAmHHaQgogKgkglQgZgagggyQgMgTgFgNQgHgTAFgQQAMANAxBIQAjA1AlARQAhARAugEQAhgDAxgOQArgMAfgMQAngPAegRQAXgOAsggQAqggAYgOQA5giBFgKQBDgKBDAQQA1ANAOABQAnADAWgTQARgPAGgbQAEgVgBgeQgDgugHg5QgKhKgCgcQgNhygBiTQAAhQAFi1QAHAMADATQACALABAWIgBDMQgCB8AJBOQACAQASB3QANBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgFQgSgCgrgLQgngKgVgBQhLgFhZA0QgZAOguAgQgvAhgaAOQhkA6hyARQgXADgTAAQgVAAgPgEg");
	this.shape_41.setTransform(232.6076,821.5035);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7ETIgMgLQgNgOACgLQAKAEAZARQAVAPAOAEQALADAMAAIAYAAQAYgBAQgEQAogIApgcQAdgTAogmQANgLAIADQgPAUgSATQglAnguAWQgxAZgwABIgGAAQg0AAgigbgAgqDjQgWgBgYgLQgkgQgeggQAAgDADgCQADgBADAAQAFABAHAFQAZASAQAIQAYAMAVACQAJABAVgCQAbgEAQgFQAZgJAcgVQARgNAdgcQAPgPAHgIIAJgPIAKgOQAEgGAFgCQAGgEAFAFQgQAegaAfQg5BEg+AUQgPAFgWADQgQADgLAAIgDAAgAhkCKQgLgDgWgNQgUgMgIgKQgHgIgLgSQgFgJgBgCQAAgDACgDQABgEADAAQAGAEAGAHIAKANQAMAPAXAOQATALANACQAHACATgBIATAAIASgBQAlgFAyggQAZgRAPgOQAUgTAKgVQAFgLADgDQADgDAEgBQAEgCAEABQADACADADQABADAAADQgBADgDADQgDACgEAAQgKAbgaAZQgSARghAXQgdASgRAIQgcALgvACIgGABQgXAAgMgFgAh4gyQgTgEgXgRQgJgGgCgGQgCgEABgEQABgEADgCQAFgCAHAEIAIAIQAWAXAwgDQAogCAtgRQAbgLA2gaIARgKQAJgFAEgIIAGAAQAEAEgCAHIgHAIQgRAPgTAJIgNAGIgMAIQgJAGgVAIQgbALgRAFQgkALgnAAIgGABQgMAAgJgDgAiHhoQgQgIAAgKQAFgCAIABIANAEQAcAKAegCQAegDAagNIA1glQAggWAYgDQAFgBADACQAFACgBAEQgcAGgnAdQgtAjgSAHQgcAMgeAAIgCAAQgdAAgagLgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAegBQAbgCAagLQAxgUAngxQAEgGAGgCQAGgDAEAEQgUAlgfAaQghAbgmALQgXAHgXAAQgRAAgRgEg");
	this.shape_42.setTransform(153.795,750.9517);

	this.instance_8 = new lib.Serverc("synched",0);
	this.instance_8.setTransform(101.3,804.85,1,1,0,0,0,53.5,128.2);

	this.instance_9 = new lib.Serverc("synched",0);
	this.instance_9.setTransform(170.25,764.55,1,1,0,0,0,53.5,128.2);

	this.instance_10 = new lib.Serverc("synched",0);
	this.instance_10.setTransform(239.15,723.95,1,1,0,0,0,53.5,128.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_43.setTransform(154.9,871.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_44.setTransform(287.1,956.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_4}]}).wait(200));

	// Layer_9
	this.instance_11 = new lib.racunar1("synched",0);
	this.instance_11.setTransform(1297.35,321.35,1,1,0,0,0,44.9,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(200));

	// Layer_2
	this.instance_12 = new lib.Serverp("synched",0);
	this.instance_12.setTransform(1186.65,341.8,1,1,0,0,0,53.5,128.2);

	this.instance_13 = new lib.Serverp("synched",0);
	this.instance_13.setTransform(1255.4,301.45,1,1,0,0,0,53.5,128.2);

	this.instance_14 = new lib.Serverp("synched",0);
	this.instance_14.setTransform(1324.2,260.7,1,1,0,0,0,53.5,128.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_45.setTransform(1277.9,384.85);

	this.instance_15 = new lib.Serverp("synched",0);
	this.instance_15.setTransform(1033.9,250.25,1,1,0,0,0,53.5,128.2);

	this.instance_16 = new lib.Serverp("synched",0);
	this.instance_16.setTransform(1102.65,209.9,1,1,0,0,0,53.5,128.2);

	this.instance_17 = new lib.Serverp("synched",0);
	this.instance_17.setTransform(1171.45,169.15,1,1,0,0,0,53.5,128.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_46.setTransform(1126.05,293.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_45},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(200));

	// Layer_1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBEICGBQAdZtBIhuBCIHxEnInyEpIHxEmIn4EtIHyEoIB4BIEAs9gDzIhxBDInxEnIHyEpIn4EsInmEiIB4BHEAlOgIbIhyBDIHwEoIHyEoInxEoICGBQAN92FIhnA9IHmEiInyEoIHwEnIn4EsInmEhIHxEnInwEnIHxEnIHyEqIB4BHAVmxmIhqBAIHvEnInxEoIHwEoIn3EqIHwEpInmEgInvEnInxEpIHzEpInxEoIB4BGAGB6vIhjA7IH4EsInxEoIHlEiIn3EsIHvEnIHxEmInmEiIHwEnIHyEqInvEnInwEoIB3BHAlK/kIB5BIInyEoIHxEoIn3EsIH3EtInmEhIHmEhInvEnIHvEnInwEnIHwEnInwEpIHwEoInzEpIC+ByAs/6+IB8BKIn3EsIHxEoInmEiIH3EsInvEnInxEnInwEoInzEpIhsBAA072UICBBMInnEiIHyEoInwEnIH4EsIHmEhInwEnIHvEnInxEnIn0EqIHxEpIhrA/EgxxgCwIjSB9Eg0BgEFICQBVIHxEoInzEpIH4EsIHlEhIhrBBEgsMgIrICMBTInxEoEgkYgNQICIBRInwEnIHxEpIH3ErIHnEhInxEnIHvEnIHxEpIn0EqIHxEnIhsBAEg0jAE5ICwBoIhkA7EgqAAB4IH4EsIHmEgIn0EqIHvEnIhrBBA8kx1ICDBPInvEnIHxEoInwEoInxEnAhz/UIheA4IHvEoInwEoIH3EsIn3EtIHlEhInlEhIHuEnInuEnIHvEnInvEnIHvEpInvEoIHxEpIjWCA");
	this.shape_47.setTransform(1099.825,405.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBFICGBQAVmxlIhqA/IHvEnInxEoIHwEoIn3ErIHwEoInmEhIHyEpIB4BHAdZtAIhuBBIHxEoIHwEoInxEnIHyEpIn4EsIB4BHAhz/UIheA5IHvEoInwEoIH3EsIn3EsIHlEhInlEiIHuEmInuEnIHvEnInvEoIHvEoInvEoIHxEpIB4BHAlK/jIB5BIInyEoIn3EsIHxEoInmEhIH3EsInvEnIHmEhInwEoIHvEmInxEoIHxEoIn0EqIHxEnIC+ByAGB6uIhjA7IH4EsInxEoIHlEhIn3EsIHvEnInmEhIHxEoInwEmIHxEoInxEoIHzEpIB3BHAN92EIhnA9IHmEhInyEoIHwEnIn4EsIHxEnInmEiIHwEnInvEnIHyEpIB4BHEAlOgIbIhyBEInyEoIHxEnIn4EsIHyEpInmEhInvEnInwEoInxEoIjWCAAs/69IB8BKIHxEoIn3EsIH3EsInmEhIHmEiInvEmIHvEnInwEnIHwEoInwEoIHwEoInzEpIhsBAA8kx0ICDBOInvEnIHxEoIH4EsInxEnIHnEiInxEnIHvEnIn0EqIhrBAA072UICBBNInnEhIHyEoInwEnInwEoInxEnIH4EsInzEpIhsBAEgkYgNQICIBRInwEoIHxEoIH3ErInwEoIHmEhIn0EpIHvEoIHxEoIhrBAEgsMgIqICMBTInxEoIHxEnInzEpIH4EsIHlEhIhrBBEg0BgEEICQBVIjSB8EgxzAGhIhkA8Eg0jAE5ICwBoEAs9gDzIhxBEIHyEoInxEoICGBQ");
	this.shape_48.setTransform(427.225,810.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(17,19,59,0.157)","rgba(99,28,183,0.788)"],[0,1],174,-217.8,-201.6,404.5).s().p("A9le2Qy6lYlVn0QpBsXfRxiQdOyQNkg9QOWh3I6DzUAkQAL5gZPASEQsqLi2CLaQu6IrukAAQleAAlchOg");
	this.shape_49.setTransform(1090.4713,428.9272);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(74,178,220,0.31)").s().p("AgaAHQgOgCBGgLQgkANgQAAIgEAAg");
	this.shape_50.setTransform(535.6347,735.5111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(200));

	// Layer_10
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-20,-12.3,20,12.3).s().p("AgQGSIAAs3IAhATIAAM4g");
	this.shape_51.setTransform(81.85,489.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-19.8,-12.2,19.9,12.2).s().p("AgPGOIAAsvIAgATIAAMwg");
	this.shape_52.setTransform(33.6,460.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-19.9,-12.3,20,12.2).s().p("AgPGRIAAs1IAfATIAAM2g");
	this.shape_53.setTransform(65.35,479.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-19.9,-12.3,20,12.2).s().p("AgQGQIAAszIAhATIAAM0g");
	this.shape_54.setTransform(49.175,469.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-20,-12.3,20.1,12.4).s().p("AgQGUIAAs6IAhATIAAM6g");
	this.shape_55.setTransform(98.025,498.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#848788").s().p("AgCgBIAFAAIgFADg");
	this.shape_56.setTransform(238.15,494.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#E253F8","#702ED1"],[0,1],-11.4,0,11.5,0).s().p("AhxBCIAAixIDjCIIiWBXg");
	this.shape_57.setTransform(326.1875,450.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#E253F8","#702ED1"],[0,1],-25.3,0,25.4,0).s().p("Aj8gRIgBgTIAAikIH7FBIiLBQg");
	this.shape_58.setTransform(340.125,424.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B98463").s().p("AAAAKIAAgTIAAATg");
	this.shape_59.setTransform(314.8,403.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#E253F8","#702ED1"],[0,1],-25.6,0,25.6,0).s().p("Aj/g0IAAjIIH/ExIAADIg");
	this.shape_60.setTransform(340.35,391);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],8.9,-132.6,-65.5,348.3).s().p("Ami7aINGHsIAAABMAAAAgiIgCgBIAAHCIhvBAIh7hJIAABEIBCAnIh6BGIAAg9Ij2iRIAABDIDxCOIhAAlIixhpIAABEIB3BGIhEAoIgzgeIAAA8IhDAnIi6huIAABDICABMIhEAoIg8gkIAABEIACABIgxAdgAlzWgIDHB2IAAhEIjHh1gAlzUNIDHB1IAAhEIjHh1gAC4SoIC2BqIAAhDIi2hrgAh2R/ID2CRIAAhDIj2iRgAlzR/IDHB1IAAhEIjHh1gAh2P2ID2CRIAAhDIj2iRgAC4QUIC2BrIAAhEIi2hqgAlzPrIDHB1IAAhEIjHh1gAC4ORIC2BqIAAg+Ii2hrgAh2NiID2CRIAAhDIj2iRgAlzNiIDHB1IAAhEIjHh1gAh2LfID2CRIAAg/Ij2iQgAESM1IAhATIA5AjIAAs9Ig5ghIghgSgAlzLOIDHB1IAAhDIjHh1gABwLTIAhAUIA5AiIAAs5Ig5ghIghgTgAlzJLIDHB1IAAg/IjHh1gAg0JwIAhAUIA4AiIAAs2Ig4giIghgTgAjWIPIAhAUIA5AhIAAszIg5giIghgTgAlxGxIAhAUIA5AiIAAsxIg5giIghgTgAC6iGIC1BqIAAhDIi1hqgAh1k4ID3CSIAAhEIj3iRgAC6kZIC1BqIAAhEIi1hqgAC6mjIC1BrIAAhEIi1hqgAh1nLID3CRIAAhEIj3iRgAlxnMIDHB1IAAhEIjHh1gAh1pUID3CRIAAhEIj3iRgAC6o2IC1BqIAAhEIi1hqgAlxpgIDHB1IAAhDIjHh1gAh1roID3CRIAAhDIj3iSgAC6rEIC1BqIAAhEIi1hqgAlxrpIDHB1IAAhDIjHh2gAh1t2ID3CRIAAhDIj3iSgAC6tYIC1BqIAAhDIi1hrgAlxt9IDHB2IAAhEIjHh1gAC6vhIC1BqIAAhDIi1hrgAh1wKID3CRIAAhDIj3iRgAlxwLIDHB2IAAhEIjHh1gAh1yTID3CRIAAhDIj3iRgAC6x1IC1BqIAAhDIi1hrgAlxyeIDHB1IAAhEIjHh1gAC6z4IC1BqIAAg+Ii1hrgAh10nID3CRIAAhDIj3iRgAlx0nIDHB1IAAhEIjHh1gAh12qID3CRIAAg/Ij3iQgAlx27IDHB1IAAhDIjHh2gAlx4+IDHB1IAAg/IjHh1g");
	this.shape_61.setTransform(69,457.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#48BEFE").s().p("AmSi6IgLgGIAAhVIM7HVIAABWg");
	this.shape_62.setTransform(70,298.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-64.8,-16.5,171.6,128.7).s().p("AlBQiIACABMAAAggjIAAAAIJ+mDIABgBIACABMAAAAnyIqDF1gAkoWqIABgBIgBgEgAkUTPIAADCIBfg6IAAjBgAg+UcIACgBIgCgEgAgqRFIAADBIBdg5IAAjBgAAzTaIABgBIgBgEgAkUPrIAADMIBfg6IAAjMgAC7O5IAADDIBhg8IAAjCgAEcRMIADgBIgDgDgAgqNgIAADMIBdg5IAAjLgAkoPpIABgBIgBgDgAkUMKIAADHIBfg6IAAjGgAC7LWIAADMIBhg8IAAjMgAgqKAIAADGIBdg5IAAjGgAAzMaIABgBIgBgEgAkUI7IAAC4IBfg6IAAi3gAC7H1IAADGIBhg7IAAjGgAgqGwIAAC4IBdg5IAAi3gAkUFwIAACzIBfg5IAAizgAC7EmIAAC3IBhg7IAAi4gAgqDlIAACzIBdg4IAAizgAkUCXIAADBIBfg5IAAjBgAC7BaIAACzIBhg7IAAizgAgqAMIAADBIBdg4IAAi/gAkUg1IAAC1IBfg6IAAi1gAC7h9IAAC/IBhg7IAAi/gAgqjBIAAC3IBdg5IAAi2gAkUj5IAACrIBfg5IAAirgAC7lLIAAC1IBhg7IABi2gAgqmDIAACrIBdg5IAAirgAkUnEIAACzIBfg5IAAizgAC7oOIAACrIBhg8IAAiqgAgqpOIAACzIBdg5IAAizgAkUqIIAACsIBfg5IAAisgAC7rZIAACzIBhg8IAAiygAgqsTIAACtIBdg5IAAisgAkUtAIAACgIBfg6IAAifgAC7ueIAACtIBhg7IAAitgAgqvLIAACgIBdg5IAAifgAkUvwIAACYIBfg5IAAiYgAC7xVIAACgIBhg8IAAiggAgqx7IAACYIBdg4IAAiYgAC70FIAACYIBhg8IAAiYgAk6wsIAAhWIF5jZIAAgBIDqiHIAABOIgEACIiCBNIAAADInbEZg");
	this.shape_63.setTransform(142.95,433.3125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],311.1,-243.9,310.3,-52.2).s().p("Aqze2IAAhEIA8AjIg6AigAqzciIAAhDIC6BtIg6AigAm2bpIAzAfIgzAegAqzaZIAAhEIDHB1IAABEgAm2aZIAAhDICyBpIg6AhgAm2YLIAAhDID3CRIAAA9IgFAEgAqzYFIAAhEIDHB2IAABDgAiHYqIAAhEIB7BIIg5AigAiHWhIAAhEIC1BqIAABEgAm2V4IAAhEID3CRIAABEgAqzV3IAAhDIDHB1IAABDgACPTaIBeg5IAADBIheA6gAm2TvIAAhEID3CRIAABEgAiHUNIAAhEIC1BqIAABEgAqzTjIAAhDIDHB1IAABDgAF5RQIBeg5IAADBIheA5gAiHSJIAAg+IC1BqIAAA/gAm2RbIAAhEID3CRIAABEgAqzRaIAAhDIDHB1IAABDgACPP2IBeg6IAADMIheA6gAJePEIBig7IAADCIhiA8gAm2PYIAAg/ID3CRIAAA/gAgMRBIAAs8IA4AiIAAM8gAqzPGIAAhDIDHB1IAABDgAF5NrIBeg4IAADLIheA5gAiuPgIAAs5IA5AhIAAM6gACPMVIBeg5IAADGIheA6gAqzNDIAAg/IDHB2IAAA+gAJeLhIBig8IAADMIhiA8gAlTN9IAAs3IA5AiIAAM3gAF5KLIBeg5IAADGIheA5gAn1MbIAAszIA5AgIAAM1gACPJGIBeg5IAAC3IheA6gAqQK9IAAswIA5AhIAAMxgAJeIAIBig7IAADGIhiA7gAF5G7IBeg4IAAC3IheA5gACPF7IBeg5IAACzIheA5gAJeExIBig8IAAC4IhiA7gAF5DwIBeg4IAACzIheA4gACPCiIBeg5IAADBIheA5gAJeBlIBig7IAACzIhiA7gAiFByIAAhEIC0BrIAABDgAF5AXIBeg2IAAC/IheA4gACPgqIBeg6IAAC1IheA6gAm1g/IAAhEID4CQIAABEgAJehyIBig7IAAC/IhiA7gAiFghIAAhEIC0BqIAABDgAF5i2IBeg4IAAC2IheA4gAiFiqIAAhEIC0BrIAABDgAm1jTIAAhDID4CRIAABDgACPjuIBeg5IAACrIheA5gAqxjTIAAhEIDHB1IAABEgAJelAIBig8IAAC2IhiA7gAm1lcIAAhEID4CRIAABEgAF5l4IBeg5IAACrIheA5gAiFk+IAAhDIC0BqIAABEgAqxlnIAAhEIDHB2IAABDgACPm5IBeg5IAACzIheA5gAJeoDIBig7IAACqIhiA8gAm1nwIAAhDID4CRIAABDgAiFnMIAAhDIC0BqIAABEgAqxnwIAAhEIDHB1IAABEgAF5pDIBeg5IAACzIheA5gACPp9IBeg5IAACsIheA5gAm1p+IAAhDID4CRIAABDgAiFpfIAAhEIC0BqIAABEgAqxqEIAAhEIDHB2IAABDgAJerOIBig7IAACyIhiA8gAF5sIIBeg4IAACsIheA5gAiFroIAAhEIC0BqIAABEgAm1sSIAAhDID4CRIAABEgACPs1IBeg5IAACfIheA6gAqxsSIAAhDIDHB1IAABDgAJeuTIBig7IAACtIhiA7gAm1ubIAAhDID4CRIAABEgAiFt8IAAhEIC0BqIAABEgAF5vAIBeg4IAACfIheA5gAqxumIAAhDIDHB1IAABDgACPvlIBeg5IAACYIheA5gAiFwAIAAg+IC0BqIAAA+gAm1wuIAAhEID4CRIAABEgAJexKIBig8IAACgIhiA8gAqxwvIAAhDIDHB1IAABDgAF5xwIBeg4IAACYIheA4gABkv1ItGnsIAAgBIAagPIMwHQIADACIHbkZIAAgDICDhNIAaAPIABAAIgBABIp/GDgAm1yyIAAg+ID4CRIAAA/gAqxzDIAAhDIDHB1IAABDgAJez6IBig8IAACYIhiA8gArT5MIAAgEIEFibIAAgDIFSjIINIHeIjqCHIAAABIl6DZgAqx1GIAAg/IDHB2IAAA+g");
	this.shape_64.setTransform(101,432.2125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],-87.3,-167.6,69,155.7).s().p("AjWsvIgCABIAAybIGwEGMAAAA2TImuD6g");
	this.shape_65.setTransform(209.05,340.2375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],-9.6,-188.6,9.7,-148.7).s().p("Aj8fEIH5kzIAABRIn5EkgAj8atIH5kzIAACKIgdARIncEigAj8WBIH5kzIAACgIgdARIncEhgAj8RqIH5kzIAACLIgdARIncEhgAj8M+IH5kyIAACfIgdARIncEigAj8IoIH5kzIAACKIgdARIncEigAj8D7IH5kyIAACgIgdARIncEhgAj8gbIH5kzIAACLIgdARIncEggAj8lBIH5kzIAACaIgdARIncEigAj8pYIH5kzIAACLIgdARIncEhgAj8uCIH5kyIAACdIgdARIncEhgAj8yYIH5kzIAACKIgdASIncEhgAj824IBXhmIBXhkIBZhpIBQheIBThhIBPhbIAAGtIgdASIncEhg");
	this.shape_66.setTransform(263.125,305.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3F0790").s().p("AjtazIAFgEIgFAAIAAgoIHckiIAABxIncEhgAjtVwIHckhIAABwIncEhgAjtREIHckiIAABxIncEigAjtMtIHckiIAAByIncEhgAjtIBIHckhIAABwIncEigAjtDrIHckgIAABvIncEigAjthBIHckhIAABwIncEhgAjtlXIHckiIAABwIncEigAjtp+IHckhIAABwIncEigAjtuVIHckhIAABwIncEigAjty/IHckgIAABwIncEhgAjt3WIHckgIAABwIncEig");
	this.shape_67.setTransform(261.7,322.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8BACC3").s().p("Aj8byIHckhIAAhxIAdgRIAACMIn5EzgAj8XbIHckhIAAhxIAdgRIAACNIn5EygAj8SvIHckhIAAhxIAdgRIAACNIn5EygAj8OYIHckhIAAhxIAdgRIAACNIn5EygAj8JtIHckiIAAhwIAdgRIAACMIn5EzgAj8FWIHckhIAAhwIAdgRIAACMIn5EygAj8AqIHckhIAAhwIAdgSIAACNIn5ExgAj8jsIHckiIAAhwIAdgSIAACNIn5EzgAj8oTIHckhIAAhxIAdgRIAACNIn5EygAj8spIHckiIAAhwIAdgSIAACNIn5EygAj8xTIHckhIAAhxIAdgRIAACMIn5EzgAj81qIHckhIAAhxIAdgRIAACMIn5Ezg");
	this.shape_68.setTransform(263.125,323.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DCEDF6").s().p("AlE1NIAAgCIBIhTIAACTIAABxIAAAcIAACKIAABwIAAAcIAACdIAABxIAAAcIAACKIAABxIAAAcIAACaIAABwIAAAcIAACJIAABxIAAAcIAACgIAABxIAAAcIAACKIAABwIAAAcIAACgIAABwIAAAcIAACKIAABxIAAAcIAACfIAABxIAAAcIAACKIAAApIAAADIAABFIAAAcIAABCIhIApgAD8anIAAiNIAAiKIAAiMIAAigIAAiMIAAiLIAAiMIAAifIAAiNIAAiKIAAiMIAAigIAAiMIAAiLIAAiMIAAiaIAAiMIAAiLIAAiMIAAidIAAiNIAAiKIAAiNIAAmtIBJhVMAAAA8SIhJAqg");
	this.shape_69.setTransform(263.175,302.8875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E84C4").s().p("An4DRIAAAAIBFhRIGzEDIhHBTIAAABgAlUASIBUhhIGtEHIhXBlgAili5IBVhjIGoEPIhRBdgAAAl5IBPheIGqENIhPBcg");
	this.shape_70.setTransform(237.9,119.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7EA1DC").s().p("An6DRIBfhuIGqELIhVBmgAlHABIBbhpIGsEJIhaBogAiXjLIBQhdIGqELIhSBggAAImGIBChMIGwEFIhIBUg");
	this.shape_71.setTransform(245,111.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#707476").s().p("A++RjIACAEIgCABgA7UPWIACADIgCABgA5hOTIABAFIgBAAgA14MGIACADIgCABgAe3xnIAIAEIgIAEg");
	this.shape_72.setTransform(311.4625,465.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#818688").s().p("A+6QrIABADIgBABgA5eNbIABAEIgBABgAe6wqIACgEIAAAEg");
	this.shape_73.setTransform(311.15,426.325);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-1.6,0,1.7,0).s().p("AgQiSIAhgTIAAE4IghATg");
	this.shape_74.setTransform(563.275,306.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-1.6,0,1.7,0).s().p("AgPiUIAfgUIAAE+IgfATg");
	this.shape_75.setTransform(627.65,268.9625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-1.6,0,1.7,0).s().p("AgPiUIAfgTIAAE8IgfATg");
	this.shape_76.setTransform(612.1,278.0125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-1.6,0,1.7,0).s().p("AgQiTIAggTIAAE6IggATg");
	this.shape_77.setTransform(595.95,287.4625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-1.6,0,1.7,0).s().p("AgQiSIAhgUIAAE6IghATg");
	this.shape_78.setTransform(579.45,297.0625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#E253F8","#702ED1"],[0,1],-25.6,0,25.6,0).s().p("Aj/g/IAAiyIH/ExIAACyg");
	this.shape_79.setTransform(340.35,283.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#413BB8","#5C1CC6"],[0,1],-43.2,0,43.2,0).s().p("AmvCkINfoEIAAC+ItfIDg");
	this.shape_80.setTransform(420.425,383.525);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#413BB8","#5C1CC6"],[0,1],-43.2,0,43.2,0).s().p("AmvCeINfoDIAADHItfIEg");
	this.shape_81.setTransform(420.425,347.525);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#E253F8","#702ED1"],[0,1],-25.6,0,25.6,0).s().p("Aj/g6IAAi9IH/ExIAAC+g");
	this.shape_82.setTransform(340.35,354.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#E253F8","#702ED1"],[0,1],-25.6,0,25.6,0).s().p("Aj/g0IAAjHIH/EwIAADIg");
	this.shape_83.setTransform(340.35,318.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#E253F8","#702ED1"],[0,1],-25.6,0,25.6,0).s().p("Aj/hHIAAijIH/EyIAACig");
	this.shape_84.setTransform(340.35,249.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6204A4").s().p("Aj8VDIBOAvIhOAtgAj8SRIAAi2IABATIFwDbIiMBSgAj8M3IgHgFIAHAEIABAAIgBgVIAAilIH/EyIAADIIgEADgAj8G0IAAinIH/EzIAACmgAj8BQIAAikIH/ExIAAClgAj8kbIAAinIH/EyIAAClgAj8p0IAAimIH/EyIAACngAj8u9IAAilIH/EzIAAClgAj8z4IAAimIH/EyIAACmg");
	this.shape_85.setTransform(340,322.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#E253F8","#702ED1"],[0,1],-25.6,0,25.6,0).s().p("Aj/hNIAAiWIH/ExIAACWg");
	this.shape_86.setTransform(340.35,217.625);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#E253F8","#702ED1"],[0,1],-11,-142.1,22.7,59.3).s().p("Aku3mIJcFlIAAAAIAABcIAAABIAAAAMAAAAitIguAaIAAjIIAAjIIAAimIAAi+IAAimIAAjHIAAilIAAiyIAAimIAAiiIAAimIAAiWIAAimIn/kyIAACmIAACWIAAClIAACjIAACmIAACyIAACmIAADIIAACkIAAC9IAACnIAADIIAAClIAAAVIgHgEIAHAFIAACkIAAC2IAACyIAABcIgvAbg");
	this.shape_87.setTransform(340.3,317.6125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#413BB8","#5C1CC6"],[0,1],-43.2,0,43.2,0).s().p("AmvCeINfoDIAADIItfIDg");
	this.shape_88.setTransform(420.425,275.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#413BB8","#5C1CC6"],[0,1],-43.2,0,43.2,0).s().p("AmvCkINfoEIAAC9ItfIEg");
	this.shape_89.setTransform(420.425,311.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#413BB8","#5C1CC6"],[0,1],-43.2,0,43.2,0).s().p("AmvCqINfoFIAACyItfIFg");
	this.shape_90.setTransform(420.425,239.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#4CC0FD","#702ED1"],[0,1],-67.7,0,67.8,0).s().p("AqkBkIAAAAINKn4IH/EyItNH3g");
	this.shape_91.setTransform(390.375,143.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#413BB8","#5C1CC6"],[0,1],-63.3,2.4,23.1,2.4).s().p("AmvCxINfoDIAACiItfIEg");
	this.shape_92.setTransform(420.425,206.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#413BB8","#5C1CC6"],[0,1],-28.1,-152.7,34.3,51.2).s().p("AnusAIAAgBIAAhcIPdpPMAAAAkcIg7AiIAAh9IAAi/IAAimIAAjHIAAinIAAi8IAAilIAAjIIAAinIAAiyIAAilIAAiiIAAimItfIEIAACmIAACjIAACmIAACyIAACkIAADIIAACmIAAC+IAAClIAADIIAACnIAAC9IAABtIhDAng");
	this.shape_93.setTransform(420.025,288.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3B027B").s().p("AmvTsINfoEIAAB+ItfH0gAmvOJINfoFIAACmItfIFgAmvIbINfoFIAACnItfIEgAmvC4INfoEIAACmItfIEgAmvi1INfoFIAACnItfIEgAmvoMINfoFIAAClItfIGgAmvtVINfoEIAACmItfIEg");
	this.shape_94.setTransform(420.425,292.825);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#4CC0FD","#702ED1"],[0,1],-30.2,0,30.3,0).s().p("AEuDbIpclkIAAhSIJcFlIAAAAIAABRg");
	this.shape_95.setTransform(340.3,180.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#4CC0FD","#702ED1"],[0,1],-79.7,0,79.8,0).s().p("AjAHdIpclmIAAAAIPhpSIJXFqIABAAIvcJOgAqeBIIAAAAIAAAcIH8ExINNn3IAAgcIn/kyg");
	this.shape_96.setTransform(389.775,146.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#4CC0FD","#702ED1"],[0,1],-49.4,0,49.5,0).s().p("AnuD/IAAAAIPdpOIAABQIvdJPg");
	this.shape_97.setTransform(420.025,168.65);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#4CC0FD","#702ED1"],[0,1],-25.4,0,25.5,0).s().p("Aj9iKIAAgbIH7EwIAAAbg");
	this.shape_98.setTransform(348.075,170.275);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#4CC0FD","#702ED1"],[0,1],-42.3,0,42.3,0).s().p("AmmDuINNn3IAAAcItNH3g");
	this.shape_99.setTransform(415.8,160.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-43.3,6.6,77.6,6.6).s().p("AoCAZIIzlAIHSEUIotE7g");
	this.shape_100.setTransform(560.625,106.575);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-36.1,0,36.2,0).s().p("AlpCoILSmZIAABKIgIAFIgqAYIqgF8g");
	this.shape_101.setTransform(591.45,126.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-78.4,0,78.5,0).s().p("AmjpEINGnsIAAZ7IgxAdIAAk+IghATIg4AiIAAE9IhDAmIAAk9IggATIg6AiIAAE8IhHApIAAk7IghATIg4AiIAAE6IhLAsIAAk6IghATIg5AhIAAE6IhIApIAAk4IghATIg5AhIAAE5Ig4AggAluJKIAABDIC1hqIAAhDgAiBG/IAABEID3iSIAAhDgAluG2IAABEIC1hqIAAhEgAluEtIAABEIC1hrIAAhDgAiBErIAABEID3iRIAAhEgACrEOIAABEIDIh1IAAhEgAiBCiIAABEID3iRIAAhEgAluCZIAABEIC1hqIAAhEgACrB7IAABDIDIh1IAAhDgAiBAPIAABDID3iQIAAhEgAluALIAABEIC1hpIAAhEgACrgNIAABCIDIh0IAAhEgAiBh+IAABDID3iRIAAhEgAluiIIAABEIC1hqIAAhEgACrihIAABEIDIh2IAAhDgAlukRIAABEIC1hqIAAhEgAiBkSIAABDID3iRIAAhDgACrkvIAABEIDIh2IAAhDgAiBmbIAABDID3iRIAAhDgAlumkIAABDIC1hqIAAhEgACrnDIAABEIDIh1IAAhEgAluojIAAA/IC1hqIAAg/gAiBovIAABDID3iRIAAhDgACrpMIAABEIDIh1IAAhEgAiBquIAAA/ID3iRIAAg+gACrrgIAABEIDIh1IAAhEgACrteIAAA/IDIh1IAAg/g");
	this.shape_102.setTransform(592.3,222.3375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-67.1,0,67.2,0).s().p("AqfAeILdmgIJhFpIAAAEIrSGYgAofAZIAfARIHXEQIIuk7IAbgQIAAgDInuklg");
	this.shape_103.setTransform(560.45,104.825);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8B1DD4").s().p("AoPUWIBTAxIAAAfIhTAwgAmqU+IAAiMIBRAxIAABJIg4AhgAp3TCIAAiNIBWA0IAACNgAjeSQIBHAsIhHApgAh5QGIBSAyIAABDIhSAvgAoPRgIAAiFIBTAyIAACFgAlFQ4IAAiuIBWA0IAACugAmpP+IAAiuIBRAyIAACtgAjdO0IAAihIBSAyIAAChgAp2OCIAAitIBWA0IAACtgAh5M7IAAicIBSAxIAACdgAoOL+IAAigIBTAxIAAChgAlFK/IAAicIBWAzIAACdgAmpKFIAAicIBRAxIAACdgAjdJMIAAioIBSAyIAACpgAp2IKIAAidIBWA0IAACdgAh5HMIAAifIBSAxIAACfgAoOGXIAAipIBTAyIAACpgAp2FYIAAipIBWA0IAACpgAlFFQIgBifIBXA0IAACfgAmpEWIAAifIBRAxIAACggAjdDbIAAiWIBSAyIAACWgAp2CaIgBieIBXAzIAACfgAh5BtIAAicIBSAxIAACdgAoOAlIAAiVIBTAyIAACVgAlFgOIAAidIBWA0IAACcgAmphIIAAicIBRAxIAACdgAjdiBIAAiXIBSAyIAACXgAp2jEIAAicIBWA0IAACcgAh5jwIAAiLIBSAwIAACNgAjdktIAAiLIBSAyIAACLgAoOk3IAAiWIBTAxIAACXgAmpmlIAAiMIBRAxIAACMgAjdnOIAAiFIBSAzIAACEgAlFoNIAAiFIBWA0IAACFgAp2ohIAAiNIBWA0IAACNgAmppGIAAiFIBRAxIAACFgAoOqDIAAiFIBTAyIAACFgAAEpcIoCk0IAAg+IIDExIAABBgAnHxCIJRlTIHuElIAAADIgbAQInTkVIozFBg");
	this.shape_104.setTransform(551.7,216.425);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-32.1,0,32.1,0).s().p("AlAy0IACgBIJ+GDIABAAIAAZ1IgaAPIAAhDIhSgyIAACkIgeASIhIgsIAABVIgSALIAAhrIhVg0IAACFIA/AmIgSALIgtgcIAAA2IgSALIAAhJIhRgxIAACMIAYAPIgRAKIgHgEIAAAIIgSALIAAgfIhUgxIAACAIgSAKIAAiWIhVgzIAACWIBUA0IgSAKIhCgoIAABPIgYANgAjBPXIBUAzIAAiMIhUgygAkoOZIBVA0IAAiNIhVg0gAhbN0IBRAxIAAiFIhRgxgABwNNIBTAzIAAiuIhTgygAjBM3IBUAyIAAiFIhUgygAAJMPIBVA0IAAiuIhVg0gAkoL3IBVA1IAAiFIhVg0gAhaLVIBRAxIAAitIhRgygADVLIIBSAyIAAihIhSgygAhcLfIACAAIAAgEIgCAEgAjAKYIBUAyIAAiuIhUgygABwKLIBTAyIAAihIhTgygAknJZIBVA0IAAitIhVg0gAAJJMIBVA0IAAigIhVg0gADVISIBSAyIAAidIhSgxgAhaISIBRAyIAAihIhRgxgABwHVIBTAyIAAidIhTgxgAjAHVIBUAyIAAihIhUgxgAAJGWIBVA0IAAidIhVgzgAknGWIBVA0IAAigIhVg0gADVFhIBSAxIAAipIhSgxgAhaFcIBRAyIAAidIhRgxgABwEjIBTAzIAAipIhTgygAjAEfIBUAzIAAidIhUgygAAJDlIBVA0IAAipIhVg0gAknDhIBVA0IAAidIhVg0gAhaCrIBRAxIAAipIhRgwgADVCjIBSAxIAAifIhSgxgAjABuIBUAyIAAioIhUgygABwBmIBTAyIAAieIhTgygAknAvIBVA0IAAioIhVg0gAAJAnIBVA0IAAieIhWg0gADVgQIBSAwIAAiVIhSgxgAhagSIBRAxIAAifIhRgxgABwhNIBTAyIAAiWIhTgygAjAhPIBUAyIAAifIhUgygAAJiNIBVA1IAAiWIhVg0gAkniOIBVA0IAAifIhWg0gADVi7IBSAyIAAidIhSgygAhajGIBRAxIAAiVIhRgygABwj4IBTAyIAAidIhTgygAjAkDIBUAyIAAiWIhUgygAAJk3IBVA0IAAidIhVg0gAknlCIBVA0IAAiWIhVg0gADVltIBSAyIAAiXIhSgxgAhalxIBRAyIAAidIhRgxgABwmqIBTAyIAAiXIhTgygAjAmuIBUAyIAAicIhUgygAAJnpIBVA0IAAiXIhVgzgAknntIBVA0IAAicIhVg0gADVoZIBSAyIAAiNIhSgwgAhaojIBRAyIAAiXIhRgxgABwpWIBTAyIAAiLIhTgygAjApgIBUAyIAAiXIhUgxgAAJqVIBVA0IAAiMIhVg0gAknqfIBVA0IAAiXIhVgzgADVq6IBSAyIAAiFIhSgygAharOIBRAxIAAiMIhRgxgABwr3IBTAyIAAiEIhTgzgAjAsMIBUAzIAAiMIhUgygAAJs2IBVA0IAAiFIhVg0gAkntKIBVA0IAAiNIhVg0gAhatvIBRAxIAAiFIhRgxgAjAusIBUAyIAAiFIhUgygAknvsIBVA1IAAiFIhVg0g");
	this.shape_105.setTransform(518.25,246.1375);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6D0CAE").s().p("Aq/SfIBDApIhDAngAq/SKIAAiXIBWA0IAACWIgBAAgApXQdIAAiMIBTAyIAACMgAmOQIIAuAcIguAagAmOPyIAAiEIBWA0IAABqIgWANgAnyO5IAAiFIBRAxIAACFgAklOTIAAitIBSAxIAACugAq/M9IAAiFIBWA0IAACFgAgdIwIA4giIAAE5Ig4AhgAjBMNIAAigIBSAxIAAChgApWLdIAAitIBTAyIAACtgACEHRIA5ghIAAE6Ig5AhgAmNKSIAAihIBWA0IAAChgAEpFxIA5giIAAE7Ig5AhgAnxJYIAAihIBRAxIAAChgAHKERIA5ghIAAE9Ig5AhgAklIbIAAidIBSAyIAACdgAq+HcIAAihIBWA0IAAChgAJmC2IA5ghIAAE+Ig5AggAggGiIC0hrIAABEIi0BqgAjBGmIAAioIBSAxIAACogApWFlIAAidIBTAyIAACdgAmNEqIAAipIBWA0IAACpgADMEWID3iRIAABEIj3CRgAggEOIC0hrIAABEIi0BqgAnxDwIAAioIBRAxIAACpgAklCrIAAifIBSAzIAACfgAggCFIC0hrIAABEIi0BqgADMCDID3iQIAABCIj3CRgAH5BmIDHh0IAABDIjHB1gAjBA0IAAiUIBSAxIAACUgADMgGID3iRIAABEIj3CQgAgggOIC0hqIAABDIi0BqgApWgKIAAieIBTAyIAACegAH5gsIDHh2IAABEIjHB0gAmNhHIAAiVIBWA0IAACVgAnxiBIAAiVIBRAxIAACWgADMiZID3iRIAABDIj3CRgAggicIC0hqIAABDIi0BrgAH5i2IDHh1IAABEIjHB1gAklizIAAicIBSAyIAACcgAq+j9IAAiVIBWA0IAACWgADMknID3iRIAABDIj3CRgAggkwIC0hqIAABEIi0BqgAjBknIAAiXIBSAxIAACXgAH5lJIDHh2IAABEIjHB1gApWlpIAAicIBTAyIAACdgAmNmjIAAiXIBWA0IAACXgAggm5IC0hqIAABEIi0BqgADMm7ID3iRIAABDIj3CSgAH5nXIDHh1IAABDIjHB1gAnxndIAAiXIBRAyIAACXgADMpEID3iRIAABDIj3CSgAggpNIC0hqIAABEIi0BqgAmNpPIAAiMIBWA0IAACMgAq+pZIAAiXIBWA0IAACXgAH5prIDHh1IAABDIjHB1gAjBp0IAAiFIBSAxIAACFgAggrLIC0hqIAAA+Ii0BqgApWrGIAAiMIBTAyIAACMgADMrYID3iRIAABEIj3CRgAH5r0IDHh1IAABDIjHB1gADMtWID3iRIAAA+Ij3CSgAhCuAIAcARIADgCIKfl9IAAAcIq+GSgAH5uIIDHh1IAABDIjHB1gAq+umIAAiFIBWA0IAACFgAH5wGIDHh2IAAA/IjHB1g");
	this.shape_106.setTransform(558.925,239.1625);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#4CC0FD","#702ED1"],[0,1],-73.9,0,74,0).s().p("AhjENIp/mDIB/hKIAPAIIAAA+IIDEzIABABIAAgBIK+mRIAAgcIArgYIBKAtIAAABItGHrg");
	this.shape_107.setTransform(560.3,137.3625);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#96F9FD","#AA9BE9"],[0,1],-31,0,31,0).s().p("AEXDIIoDkxIgPgJIg6giIAAhEIJrFlIAABKIgDABg");
	this.shape_108.setTransform(524.3,129.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#663300").s().p("AgEgFIAJAFIgJAGg");
	this.shape_109.setTransform(666.3375,262.1375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#46A1EE").s().p("AkHL+IAAiaIBNAuIAABjIgvAbgAiqKcIBEApIhEAngAhQIwIBJAsIAAAyIhJAqgAiqKJIAAiPIBKAsIAACQgAAJJkIAbAQIgbAQgAkHJRIAAiPIBNAuIAACPgAAJJRIAAiMIBMAuIAABlIghATgABlH9IBFAqIhFAngAhQIdIAAiLIBJAsIAACMgAC/GLIBJArIAAA7IhJAqgABlHqIAAiWIBKAtIAACWgAiqHnIAAiMIBKAtIAACMgAAJGyIAAiWIBMAuIAACXgAkHGvIAAiMIBNAuIAACMgAhQF/IAAiWIBJArIAACXgAC/F4IAAiOIBJArIAACPgAiqFIIAAiWIBKAtIAACWgABlFBIAAiOIBKAtIAACOgAkHEQIAAiWIBNAuIAACWgAAJEJIgBiOIBNAuIAACOgAC/DXIAAiFIBJArIAACGgAhQDWIAAiOIBJArIAACPgABlChIAAiGIBKAsIAACGgAiqCfIAAiOIBKAtIAACOgAAJBoIAAiEIBMAtIAACGgAkHBnIAAiNIBNAtIAACOgAC/A+IAAiKIBJAsIAACLgAhQA1IAAiFIBJAsIAACFgABlAIIAAiLIBKAtIAACLgAiqgBIAAiFIBKAsIAACFgAAJgvIAAiMIBMAvIAACLgAkHg5IAAiFIBNAuIAACGgAC/hfIAAiGIBJArIAACHgAhQhjIAAiLIBJAsIAACMgABliVIAAiHIBKAtIAACGgAiqiZIAAiMIBKAtIAACMgAAJjOIAAiGIBMAuIAACHgAkHjRIAAiMIBNAvIAACLgAC/j4IAAh9IBJArIAAB+gAhQkBIAAiHIBJAtIAACGgABlkvIAAh8IBKAsIAAB9gAiqk4IAAiGIBKAsIAACHgAAJlnIAAh9IBMAuIAAB9gAkHlwIAAiGIBNAuIAACGgAC/mIIAAh3IBJAsIAAB3gAhQmaIAAh9IBJAsIAAB9gABlm+IAAh3IBKAtIAAB2gAiqnRIAAh9IBKAtIAAB9gAAJn3IAAh2IBMAuIAAB3gAkHoJIAAh9IBNAuIAAB9gAhQoqIAAh3IBJAsIAAB3gAiqpgIAAh3IBKAtIAAB2gAkHqZIAAh2IBNAuIAAB3g");
	this.shape_110.setTransform(692.225,182.575);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-22,-4,11.8,5.8).s().p("AjeACIDhiAIDcB6IjhCDg");
	this.shape_111.setTransform(716.325,95.675);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-3.3,-7.3,6,9.1).s().p("AiPBAIEcijIADBGIjgCBg");
	this.shape_112.setTransform(702.175,85.95);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#6C05AE","#1A0159"],[0,1],-25.4,0,25.5,0).s().p("Aj9CLIH7kkIAAAdIniEWg");
	this.shape_113.setTransform(696.0875,73.875);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#6C05AE","#1A0159"],[0,1],-53.3,-178.2,-52.4,40.6).s().p("AqhtTIJwFtIAAQVIg0AeIAAg6IhJgsIAACQIgUAMIhFgpIAABRIgQAJIAAhkIhNguIAACLIAsAaIgQAKIgcgRIAAAhIgQAJIAAgyIhJgrIAACHIgWANIhEgpIAABQIgQAKIAAhjIhNgvIAACbIAeASIgUALIgLgGIAAAMIgsAagAoXLlIBKAtIAAiQIhKgsgAp0KtIBNAvIAAiQIhNgugAm9J5IBJAtIAAiMIhJgsgAkHJHIBJAtIAAiXIhJgtgAoXJDIBKAtIAAiMIhKgtgAlkIPIBNAuIAAiWIhNgvgAp0ILIBNAvIAAiMIhNgugAm9HbIBJAsIAAiWIhJgsgAiuHUIBJAsIAAiOIhJgsgAoXGlIBKAsIAAiWIhKgtgAkHGeIBJAtIAAiOIhJgtgAp0FtIBNAuIAAiWIhNgvgAlkFlIBNAvIAAiOIhNgugAiuEzIBJAsIAAiFIhJgsgAm9EyIBJAsIAAiOIhJgsgAkHD9IBJAtIAAiGIhJgtgAoXD7IBKAtIAAiOIhKgsgAlkDEIBNAvIAAiFIhNgvgAp0DDIBNAuIAAiNIhNgvgAiuCbIBJAsIAAiMIhJgsgAm9CRIBJAsIAAiFIhJgsgAkHBkIBJAtIAAiMIhJgrgAoXBbIBKAtIAAiHIhKgrgAlkAsIBNAvIAAiLIhNgugAp0AiIBNAvIAAiFIhNgugAiugCIBJArIAAiGIhJgsgAm9gGIBJArIAAiLIhJgsgAkHg5IBJAtIAAiHIhJgtgAoXg9IBKAtIAAiLIhKgtgAlkhxIBNAuIAAiGIhNgugAp0h1IBNAvIAAiMIhNgugAiuicIBJAsIAAh9IhJgrgAm9ilIBJAtIAAiHIhJgsgAkHjSIBJAsIAAh8IhJgtgAoXjbIBKAsIAAiGIhKgsgAlkkLIBNAvIAAh9IhNgugAp0kTIBNAuIAAiHIhNgugAiuksIBJAtIAAh3IhJgsgAm9k+IBJAsIAAh9IhJgsgAkHliIBJAtIAAh3IhJgtgAoXl1IBKAtIAAh9IhKgsgAlkmbIBNAvIAAh2IhNgvgAp0msIBNAuIAAh9IhNgvgAm9nNIBJArIAAh2IhJgsgAoXoEIBKAtIAAh3IhKgsgAp0o8IBNAuIAAh2IhNgvgAEiqqIgZghIAAAAIA5APIAAQTIggATgAKCt1IAAAAIgagiIA6APIAAABIAAQTIggASg");
	this.shape_114.setTransform(728.775,173.3375);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-4.1,-7.3,4.1,7.2).s().p("AisACICwhjICpBeIAAACIixBkg");
	this.shape_115.setTransform(781.325,50.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-4.5,-8,4.5,8).s().p("Ai+DVIAAhQIDLh0IAAABIAAgCIAAh/ICyhlIAAAlIAAAcIAACRIl8DYg");
	this.shape_116.setTransform(779.525,71.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-10.1,-17.1,3.6,7).s().p("AiJgZIgDhGIEZCcIg6Ajg");
	this.shape_117.setTransform(730.35,85.575);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-16.7,-23,11.3,26.2).s().p("AjCgFIABhQIABgBIgBAAIAAgPIAAgdIAAgyIAAgiIABgBICnBfIAAABIABAAIDaD+IAAABIABAAIAABQg");
	this.shape_118.setTransform(740.925,71.525);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5B6443").s().p("ADUBGIAAAAIAAgBIAAACgAjThFIAAgBIAAABg");
	this.shape_119.setTransform(759.6,66.5375);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-4.4,-14.3,10,11.1).s().p("AhhhwIAbAAICoBhIAAB/IgBABg");
	this.shape_120.setTransform(771.075,62.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-8.2,-14.5,8.2,14.4).s().p("AAHC6IAAgCIjaj9IDKh0IABAAIAZAeIDDDgIAAABIjMB0g");
	this.shape_121.setTransform(759.6,66.575);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#6C05AE","#1A0159"],[0,1],-7.5,0,7.5,0).s().p("AhKAkICThVIAAAbIACABIh8BHg");
	this.shape_122.setTransform(756.6,38.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-12.6,-22.1,12.7,22.4).s().p("ArDByIHkkWIAAAPIABAAIgBABIgBBQIGFDcIABABIF9jYIAAiRIChBfIuNIMgAoxCRIA/AkIDcB8IDiiEIA5giIkZidgABNlSIB8hIIBIAqIhyABIhCAmg");
	this.shape_123.setTransform(743.95,77.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-4.1,-7.2,4.1,7.3).s().p("AgRBpIinhfIDJhyIAAgBIAcAQIAsAZIAaAPIAQAJIA2AfIjKBzg");
	this.shape_124.setTransform(740.15,48.975);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#6C05AE","#1A0159"],[0,1],-5.9,0,6,0).s().p("Ag5gGIgCgBIAAgbIB3BEIgvABg");
	this.shape_125.setTransform(769.9,37.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-2.6,-7.7,2.6,1.5).s().p("AhWAVIgBAAIg2gfIBCgmIBxAAIAugBIA7AAIiwBjIgbAAg");
	this.shape_126.setTransform(767.45,45.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3F51C5").s().p("AmuJ1IDUh8IAABDIjUB7gAmuHPIDUh8IAABPIjUB8gAiZHTIEgiqIAABGIkgCngAiZEtIEgiqIAABPIkgCpgAmuEiIDUh8IAABQIjUB8gADGEFIDpiJIAABIIjpCHgAmuCCIDUh8IAABQIjUB8gAiZCAIEgioIAABNIkgCqgADGBfIDpiHIAABNIjpCJgAiZgfIEgipIAABOIkgCpgAmugpIDUh8IAABPIjUB7gADGhNIDpiIIAABPIjpCHgAmui9IDUh7IAABIIjUB8gAiZjLIEgiqIAABPIkgCpgADGjtIDpiIIAABPIjpCIgAiZlfIEgipIAABJIkgCqgADGmZIDpiJIAABPIjpCIgADGotIDpiJIAABKIjpCIg");
	this.shape_127.setTransform(777.125,153.8125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#6C05AE","#1A0159"],[0,1],-34.7,-42.1,-34.2,81.9).s().p("AoCjhIFUjEIAAQUIgaAPIAAhDIjTB8IAABBIhnA8gAmbIRIAABPIDTh8IAAhPgAmbFkIAABQIDTh8IAAhQgAmbDEIAABQIDTh8IAAhQgAmbAYIAABPIDTh7IAAhPgAmbh7IAABJIDTh8IAAhIgAiNm3IE+i5IAAAAIAAQTIgXAOIAAhGIkgCqIAABDIgHAEgAiGFvIAABOIEgipIAAhPgAiGDCIAABPIEgiqIAAhOgAiGAiIAABPIEgipIAAhOgAiGiJIAABOIEgipIAAhPgAiGkdIAABKIEgiqIAAhJgADRqCIEyixIAAQTIhCAmIAAhIIjpCJIAABGIgHAEgADYChIAABPIDpiJIAAhOgADYgLIAABOIDpiHIAAhPgADYirIAABPIDpiIIAAhPgADYlXIAABOIDpiIIAAhPgADYnrIAABJIDpiIIAAhKg");
	this.shape_128.setTransform(775.25,147.225);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#6C05AE","#1A0159"],[0,1],-82.6,0,82.7,0).s().p("As5ByIJZlaIAAAzIn9EkIAZAPIH6EpIONoMIAYgOIi5htIAAglIAAgBIiphfIg7AAIh3hFIiVBVIgsgZIDEhxIJxFuIkyCvIAAAAIg6gPIAaAhIk/C5Ig6gPIAAAAIAZAhIlTDFg");
	this.shape_129.setTransform(744.05,76.675);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#6C05AE","#1A0159"],[0,1],-9.2,0,9.3,0).s().p("AhbggIAAgcIC3BrIgXAOg");
	this.shape_130.setTransform(807.9,60.3375);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#A7E4F3").s().p("AlKvWIKVmMMAAAAlAIgnAXIAAgFIipBnInFEMg");
	this.shape_131.setTransform(127.325,314.25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F3C1AC").s().p("AscIDIAAAEIipBigAM2pkIAAgEICQBXg");
	this.shape_132.setTransform(236.225,363.625);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#59ACBC").s().p("AjJ2LIGUDwMAAAAk5ImUDugAiqDjIAAAAIAAgNg");
	this.shape_133.setTransform(73.95,333.925);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7DDEF1").s().p("AoVBQIKZmOIGRDyIABAAIqWGLg");
	this.shape_134.setTransform(107.075,184);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-47.4,-14.1,47.4,14.1).s().p("AhnOvIiQhXIAAAFIgigUIAA/bIIzFPIAAfWg");
	this.shape_135.setTransform(343.25,216.25);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B98463").s().p("A7CIQIAAgOIAAAOgAbDoDIAAgMIAAAMg");
	this.shape_136.setTransform(229.975,303.875);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-17.2,0,17.2,0).s().p("AirPsIAA/WIFXjLMAAAAlrgACQDBIABAAIAAgMg");
	this.shape_137.setTransform(388.6,232.975);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#49C0FF","#3F4BC2"],[0,1],-45.3,0,45.4,0).s().p("AnFg/IABAAIFVjPII1FRIAAABIlYDLg");
	this.shape_138.setTransform(360.45,105.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4AB2DC").s().p("AkZlhIIzFPIAAAuIozFGg");
	this.shape_139.setTransform(631.8,263.325);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DFD8E0").s().p("AgIADIARgKIAAAPIgRgFg");
	this.shape_140.setTransform(686.2,239.25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#389AC2").s().p("AirBOIFXjKIAAAzIlXDGg");
	this.shape_141.setTransform(677.15,253.65);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#75C9EB").s().p("AnFhAIABAAIFVjOII0FSIAAAAIlXDLgAFrA0IASAFIAAgQg");
	this.shape_142.setTransform(649,234.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(200));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(729.2,568.7,718.7,477.5999999999999);
// library properties:
lib.properties = {
	id: 'compositionSplashGovernment',
	width: 1450,
	height: 1080,
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
an.compositions['compositionSplashGovernment'] = {
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