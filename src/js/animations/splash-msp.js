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
	this.shape.graphics.f("#EF9A9C").s().p("AgNB2QgEgBgDgDIgCgCQgFgFgBgNIgBgTIADgdQACgVAGgZQAOg/AVgvIAFgGQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIADACQABACgBAFIgQBBIgNBCQgDAWgBAUQgBARABAOQADAAADgEQAEgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAQABAEgCAFQgDAIgFAEQgDACgEACIgGABIgGgBg");
	this.shape.setTransform(19.1946,73.1332,1.1335,0.9637);

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

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F48B73").s().p("AhEA5QgEgCAAgEQgBgEADgEQACgDAEgBQAtgGAUghIABgBQALgUADgdQAAgEADgCQADgDAFAAQAEABACADQADADAAAEQgDAdgKATIAtAXQAEACABAEQABAEgBADQgCAEgEABQgEACgEgCIgugXQgYAigyAHIgBABQgEAAgCgDg");
	this.shape_1.setTransform(17.0984,13.9522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3C5A9").s().p("AAYDiIgDgCIgDgCIgIgIIgEgGIgDgEIgDgHIgEgHIgJgQIgKgUIgEgIIgCgEIgIgRIgHgTIgGgTIgIgVIgHgUIgFgLIgHgWQgGgRgGgSIgDAGQgBAHgVAbQgfAmgOgOIAHgXIAEgJIADgJIAGgRIACgJIADgJIAEgIIACgJIAGgRIAGgQIAFgRIAGgQIAGgPIAGgPIAFgQIAGgNIACgHIAGgPIAGgRIB5gMIAlBgIADAHIACAEIAAABIACAGIACAGIABABIACAFIADAHIABAEIADAHIAFANIAEANIAFANIAEAOIAEAMIAEAOIACAIIABAEIACAHIADANIAJAkIAFAZIACAQIABAKQgCAOgKgJIgEgEIgIgMIgEgJIgFgKIgDgKIgCgGIgGgLIgEgPIgEgHIgFAFIADAIIAGAPIACAHIACAIIAEANIACAGIACAHIABAGIACAKIAFATIACALIADAYQABAHAAAIIgBAFIgCABIgDgCIgEgDIgEgFIgLgSIgFgHIgEgIIgEgIIgFgKIgHgRIgGgNIgFgNIgGgMIgEgLIgCgDIgCgEIgLAFIACAIIAFANIABAHIACAHIAEAMIACAGIABAGIABAGIADAKIAFATIADARIADAPIACAVIgBAIIAAABIgDAAIgEgBIgCgDIgEgEIgLgPIgDgGIgEgGIgDgHIgDgGIgHgPIgHgQIgGgNIgEgOIgFgMIgDgGIgFgNIgCgCQgHgBgGAFIADAIIAFAUIABABIABAHIADAJIAFAQIABAHIACAHIACAGIAEALIAEARIAEANIABAHIAAAGIgCAEIgCABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAeiQQgDACgBAFQgCAcgLAUIgBADQgUAggtAHQgEAAgCADQgDAEAAAEQABAEAEADQADACAEgBQAygHAYgiIAuAXQAEACAEgCQAEgBACgDQABgEgBgEQgBgEgEgCIgtgWQAKgVACgdQABgEgDgDQgCgDgFAAIgBgBQgDAAgDADg");
	this.shape_2.setTransform(16,22.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).wait(2));

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


(lib.sarezacipelu1 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.sarezacipelu1, new cjs.Rectangle(-0.1,-0.1,53,32.9), null);


(lib.nogaodkolena1 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.nogaodkolena1, new cjs.Rectangle(-3.1,0.5,39.800000000000004,124.5), null);


(lib.nogadokolena11 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.nogadokolena11, new cjs.Rectangle(0,0,44.9,148), null);


(lib.koza1 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.koza1, new cjs.Rectangle(-0.1,-0.3,59.5,42.199999999999996), null);


(lib.Devojkao1torzo1 = function(mode,startPosition,loop,reversed) {
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


(lib.Devojkao1shaka1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B38569").s().p("AhEA5QgEgCAAgEQgBgEADgEQACgDAEgBQAtgGAUghIABgBQALgUADgdQAAgEADgCQADgDAFAAQAEABACADQADADAAAEQgDAdgKATIAtAXQAEACABAEQABAEgBADQgCAEgEABQgEACgEgCIgugXQgYAigyAHIgBABQgEAAgCgDg");
	this.shape.setTransform(17.0984,13.9522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3C5A9").s().p("AAYDiIgDgCIgDgCIgIgIIgEgGIgDgEIgDgHIgEgHIgJgQIgKgUIgGgMIgIgRIgHgTIgGgTIgIgVIgHgUIgFgLIgHgWQgGgRgGgSIgDAGQgBAHgVAbQgfAmgOgOIAHgXIAEgJIADgJIAGgRIACgJIADgJIAEgIIACgJIAGgRIAGgQIAFgRIAGgQIAGgPIAGgPIAFgQIAGgNIACgHIAGgPIAGgRIB5gMIAlBgIADAHIACAEIAAABIACAGIACAGIABABIACAFIADAHIABAEIADAHIAFANIAEANIAFANIAEAOIAEAMIAEAOIADAMIACAHIADANIAJAkIAFAZIACAQIABAKQgCAOgKgJIgEgEIgIgMIgEgJIgFgKIgDgKIgCgGIgGgLIgEgPIgEgHIgFAFIADAIIAGAPIACAHIACAIIAEANIACAGIACAHIABAGIACAKIAFATIACALIADAYQABAHAAAIIgBAFIgCABIgDgCIgEgDIgEgFIgLgSIgFgHIgEgIIgEgIIgFgKIgHgRIgGgNIgFgNIgGgMIgEgLIgEgHIgLAFIACAIIAFANIABAHIACAHIAEAMIACAGIABAGIABAGIADAKIAFATIADARIADAPIACAVIgBAIIAAABIgDAAIgEgBIgCgDIgEgEIgLgPIgDgGIgEgGIgDgHIgDgGIgHgPIgHgQIgGgNIgEgOIgIgSIgFgNIgCgCQgHgBgGAFIADAIIAFAUIACAIIADAJIAFAQIABAHIACAHIACAGIAEALIAEARIAEANIABAHIAAAGIgCAEIgCABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAeiQQgDACgBAFQgCAcgLAUIgBADQgUAggtAHQgEAAgCADQgDAEAAAEQABAEAEADQADACAEgBQAygHAYgiIAuAXQAEACAEgCQAEgBACgDQABgEgBgEQgBgEgEgCIgtgWQAKgVACgdQABgEgDgDQgCgDgFAAIgBgBQgDAAgDADg");
	this.shape_1.setTransform(16,22.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.9,32,49.4);


(lib.Devojkao1odlakta1 = function(mode,startPosition,loop,reversed) {
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


(lib.Devojkao1glava = function(mode,startPosition,loop,reversed) {
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


(lib.Devojkao1dolakta1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.setTransform(80.6446,118.8745,0.8407,0.8407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5467B0").s().p("AgbAdQgMgNAAgQQAAgPAMgNQAMgLAPAAQARAAAMALQALANAAAPQAAAQgLANQgMALgRAAQgPAAgMgLg");
	this.shape_2.setTransform(63.2851,147.898,0.8407,0.8407);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5467B0").s().p("AirCdQALgIAohkQAhhSA7htIABgBIAZgyQADgLAOgOQAbgbAmAAQAnAAAbAbQANANAHAQIACAGIABAFQAEAMAAAPQAAALgCAKIgJAXQgQAmgkBAQg7BoiQCTQhZgLALhOg");
	this.shape_3.setTransform(74.6367,131.976,0.8411,0.8411);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAAQgLAMQgMAMgRAAQgQAAgLgMg");
	this.shape_4.setTransform(50.3027,149.2811,0.3767,0.3767);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_5.setTransform(58.3272,159.7733,0.3767,0.3767);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_6.setTransform(54.9931,159.3589,0.3767,0.3767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_7.setTransform(52.0357,157.6259,0.3767,0.3767);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_8.setTransform(49.6999,155.2524,0.3767,0.3767);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_9.setTransform(58.4852,152.9086,0.3771,0.3771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgQAAgLgLg");
	this.shape_10.setTransform(49.7373,149.603,0.3768,0.3768,0.3133);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_11.setTransform(57.7045,160.1391,0.3768,0.3768,0.3133);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_12.setTransform(54.3726,159.7065,0.3768,0.3768,0.3133);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_13.setTransform(51.4247,157.9573,0.3768,0.3768,0.3133);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_14.setTransform(49.1019,155.5711,0.3768,0.3768,0.3133);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_15.setTransform(49.6319,149.753,0.3767,0.3767);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_16.setTransform(57.6554,160.2439,0.3767,0.3767);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_17.setTransform(49.0291,155.7236,0.3767,0.3767);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_18.setTransform(49.3867,155.5428,0.3767,0.3767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:58.4852,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:49.6999,y:155.2524}},{t:this.shape_7,p:{x:52.0357,y:157.6259}},{t:this.shape_6,p:{x:54.9931,y:159.3589}},{t:this.shape_5,p:{x:58.3272,y:159.7733}},{t:this.shape_4,p:{x:50.3027,y:149.2811}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{x:63.2851,y:147.898,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_1,p:{x:80.6446,y:118.8745,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]}).to({state:[{t:this.shape_9,p:{x:58.1906,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:49.4499,y:155.5524}},{t:this.shape_7,p:{x:51.7857,y:157.9259}},{t:this.shape_6,p:{x:54.7431,y:159.6589}},{t:this.shape_5,p:{x:58.0772,y:160.0733}},{t:this.shape_4,p:{x:50.0527,y:149.5811}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{x:63.1051,y:148.2067,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_1,p:{x:80.4649,y:119.1826,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},6).to({state:[{t:this.shape_9,p:{x:62.2,y:149.5,regX:11.3,regY:-10.4,rotation:0}},{t:this.shape_8,p:{x:49.1999,y:155.7524}},{t:this.shape_7,p:{x:51.5357,y:158.1259}},{t:this.shape_6,p:{x:54.4931,y:159.8589}},{t:this.shape_5,p:{x:57.8272,y:160.2733}},{t:this.shape_4,p:{x:49.8027,y:149.7811}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{x:62.7851,y:148.398,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_1,p:{x:80.1446,y:119.3745,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},2).to({state:[{t:this.shape_9,p:{x:62,y:149.4,regX:11.2,regY:-10.3,rotation:0.3153}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{scaleX:0.3768,scaleY:0.3768,rotation:0.3133,x:54.3726,y:159.7065}},{t:this.shape_11,p:{scaleX:0.3768,scaleY:0.3768,rotation:0.3133,x:57.7045,y:160.1391}},{t:this.shape_10},{t:this.shape_3,p:{x:74.111,y:132.499,rotation:0.316}},{t:this.shape_2,p:{x:62.6991,y:148.3502,rotation:0.3151,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_1,p:{x:80.2182,y:119.4221,rotation:0.3151,scaleX:0.8407,scaleY:0.8407}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},3).to({state:[{t:this.shape_9,p:{x:62.2,y:149.5,regX:11.4,regY:-10.4,rotation:0}},{t:this.shape_17,p:{x:49.0291,y:155.7236}},{t:this.shape_4,p:{x:51.3646,y:158.0967}},{t:this.shape_6,p:{x:54.3217,y:159.8295}},{t:this.shape_16,p:{x:57.6554,y:160.2439}},{t:this.shape_15,p:{x:49.6319,y:149.753}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{x:62.7252,y:148.3719,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.0837,y:119.35,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},5).to({state:[{t:this.shape_9,p:{x:58.1717,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_18},{t:this.shape_15,p:{x:51.7224,y:157.9161}},{t:this.shape_11,p:{scaleX:0.3767,scaleY:0.3767,rotation:0,x:54.6797,y:159.6491}},{t:this.shape_12,p:{scaleX:0.3767,scaleY:0.3767,rotation:0,x:58.0137,y:160.0635}},{t:this.shape_4,p:{x:49.9894,y:149.5717}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{x:63.0851,y:148.198,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_1,p:{x:80.4446,y:119.1745,rotation:0,scaleX:0.8407,scaleY:0.8407}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},11).to({state:[{t:this.shape_9,p:{x:58.4475,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_17,p:{x:49.5291,y:155.2236}},{t:this.shape_4,p:{x:51.8646,y:157.5967}},{t:this.shape_6,p:{x:54.8217,y:159.3295}},{t:this.shape_16,p:{x:58.1554,y:159.7439}},{t:this.shape_15,p:{x:50.1319,y:149.253}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{x:63.2252,y:147.8719,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.5837,y:118.85,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]},2).wait(11));

	// Layer_5
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag1BoQgggcgIgxQgHgyAWgrQAWgrAngLQAmgLAgAbQAhAcAIAyQAIAxgXArQgWArgnAMQgLADgKAAQgbAAgXgUgAgNhNQgZAHgOAaQgNAbAEAfQAGAgAWASQAVASAYgGQAZgGAOgbQAOgbgFgeQgGgggVgSQgRgOgRAAIgMABgAgaA7IgHgFQAAgIgDgLQAKAEAJgCIAGgCQANARAFATIgFAAQgOAAgOgMgAgIAhQAIgHAIgOIAkAeQgMAWgVAGQgFgTgOgSgAgwAbIAEAEIAAAAIADACIAEAPQgHgKgEgLgAALAIQAHgOABgNQATALAOAAQADAYgKAVgAglAdQgCgFgBAAIAMgFIAMAMIgCABIgFAAQgHAAgHgDgAgXAQQAKgHAFgKIANALQgGAOgKAFIgMgNgAgFgGQAFgKABgOIAOAJQgBANgGANgAATgZIAAgDQgBgLgHgLQAMAAAJgEQAOAQAFAZQgNgCgTgKgAACgjQAAgJgCgHIAGABQAIALABAMIgNgIgAAIg4IgEgFIgBAAQgEgGgHgCIgBgCQASgCARAOIACABQgHADgIAAIgFgBg");
	this.shape_19.setTransform(36.3061,100.779,0.9078,0.8353,0,6.4665,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C7EC1").s().p("AApBeQgcgKgHgVQgghPg0AdQghAFgoggQgXgUgGgZQgEgdALgTQAGBKBaAWQA8ADAhAxQBAA5BmgnQgkAtgUABQgKADgMAAQgbAAgkgOg");
	this.shape_20.setTransform(36.3617,111.7788);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#334381").s().p("AAAAtQgUgDgVgGQgvgMgMgJQgLgIgDgIQgDgLAHgPQACARAMAKQAdAWA0AKQAyAKAbgbQAbgZAbglQgOAlgMASQgMAUgSAMQgMAIgVAAQgMAAgPgDg");
	this.shape_21.setTransform(46.705,119.8345);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAnQgQgLgSgOIgJgHIgFgbIgHghIAUAOIAjAYIAMAHIAIAlIAHAZIgbgPg");
	this.shape_22.setTransform(36,149.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C73A3F").s().p("AACBRQgYgHgQgIIgIgEIgHgZIgIglIAbAOQAUAKATAIQAUAIAWACQAVACAWgCQAVgCAUgFQAVgGAJgEIARgHIgGAoIglAPQgTAHgVADQgVAEgYAAIgDAAQgWAAgXgGgAiNgHIgYgZIgMg2QAQARAQAMIAQAMIAGAhIAGAbIgYgWg");
	this.shape_23.setTransform(44.825,148.5767);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#334381").s().p("AAOAcQgNgFgTgPQgUgOgRgXQAnAgApANQAQADAPgIQgIAOgLAEIgHABQgHAAgJgCg");
	this.shape_24.setTransform(24.075,112.2223);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8F9CCD").s().p("ABaCZIgHgBIAAgBIgCgEIggg7IgVgqQgagygxhpQAZAeAZAkQAcAkA0A3QA0A4AoAhIgIADQgiANggAAIgLAAgAAWCKQgKAAgMgJQgOgJgHgIQgHgIgkgQIgDgBIgBgNIgBgIIgHglIANAIIBLA0IAaAxIAAABQgFgCgLABgAhgBDIgigfIgTgSIAAgCIACgKIAIgZQAXATAeAWIAKAxIACAKIgBAAQgGAAgPgOgAg9AeIgQgMIgJgxQAWAPAVANIAKAEIAOAdIAXAtQgdgUgkgZgAiKgZIALglIAFADIAaAVIAIAxIgygkgAhXgrIgBgHQgHgqgCgjIALAVIAtBeIAAAAQgYgPgWgQgAh8hGIASg/QADAqAGApIgbgUgAinhHQgDgZgEgMIABgBQAHgHAKgLQAJgMAIgNQgPAxgJAxIgBADIgDgUg");
	this.shape_25.setTransform(42.3,138.3993);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5467B0").s().p("ABmC1QgNgDgKgGIgagyIhLgzIgNgJIAHAmIABAHIABANIADACIAFAQQAGAVgVgpIAAgDIgCgKIgKgyQgegWgXgTIgIAaIgCAKIAAACIgCgCIgNhEIABgCQAJgxAPgxIAFgPQARguALgFIAkA/QAPAeAIAQQAxBoAaAyIAVArIAgA6IACAFIgWgEgAgkA0IAQALQAjAaAeATIgYgtIgOgcIgJgGQgVgNgWgOIAJAygAhhAIIAyAkIgIgxIgagUIgFgDgAgvgQIABAHQAWAPAYAPIAAgBIgthdIgLgUQACAjAHAqgAhTgkIAbAUQgGgqgDgqg");
	this.shape_26.setTransform(38.2,135.0125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABLBAQg0g5gagiQgbglgYgeQgJgPgPgfQA1BABXBfQBZBiAlAVIgJAIIgLAHQgpgig0g3gAi2hkIgFgTIAegWIAPgKIgEAOQgIANgJAMQgKAMgHAGIgCgGg");
	this.shape_27.setTransform(43.05,136.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5B6FB9").s().p("AgxGaQg8ghg1hpIg0kcQgPgwgigoQgKgKgBggQgBg0AahCQAahDAtg5QASgYAXgUQDAgGCfBuQAXAPAQATQAJAKADANQAPA3gIA6QgIBDgcA/QgdBAgWBCQgHAUAEA5QAEA5gGAqIgHAxIgGAmQgZAdgkAQQglAPg8ABQgcgFgegPg");
	this.shape_28.setTransform(44.801,119.7368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(40));

	// Layer_4
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5467B0").s().p("AimC2QgigJgPgeQgFgMgCgLIAAgWQACgKAEgKQAFgNAHgKIADgDIAFgFQALgNAQgIQAigSAiAIQAjAJAPAfQAIARgBASIAAACQgBANgFAOQgKAZgUAQIgHAFIgKAHQgXAMgXAAQgLAAgMgDgABmgPQgjgJgOgfQgPgeANgiQAKgbAYgRIAKgGIAJgFQAfgPAfAIQAiAJAPAeQAPAfgNAjQgKAagXARIgDABIgBACIgBAAIgBABIgDACIgFACQgXANgXAAQgLAAgLgDg");
	this.shape_29.setTransform(31.4,80.85,0.8406,0.8406,0,0,0,14.7,-12.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5467B0").s().p("AikC3QgjgJgPgeQgGgMgCgLIAAgWQACgJAEgKQAFgNAHgLIADgDIAEgFQAcgjBDgzQBRhABog+IAKgFIAJgGQAegPAhAIQAiAIAQAfQAOAegNAiQgKAbgWARIgDABIgCACIgBABIkBDBIgHAFIgKAGQgXANgYAAQgKAAgLgDg");
	this.shape_30.setTransform(31,83.15,0.8409,0.8409,0,0,0,14.6,-10.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgMIgHgWQgCgJgBgKQAAgOADgLIACgDIACgGQAFgOALgLQAYgXAhAEQAhAEAYAcQANAQAGASIABACQAEAOAAAOQAAAZgMAUIgEAFIgHAIQgUAUgcAAIgJgBg");
	this.shape_31.setTransform(6.6809,102.7812,0.8409,0.8409);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5467B0").s().p("AAAAmQgNgCgLgMQgKgMAAgPQAAgQAKgJQAKgKAOABQAOACAKAMQALAMAAAPQAAAQgKAKQgJAIgLAAIgFAAg");
	this.shape_32.setTransform(22.11,131.6918,0.8409,0.8409);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5467B0").s().p("AhfgQQgfg/gPgmIgIgWIgCgVQAAgNADgMIABgDIACgGQAGgOALgLQAXgWAiAEQAhAEAZAcQALAOADAKIAXAxIABACQAzBrAeBRQAkBhAJAJQALBJhOACQh/iZg0hmg");
	this.shape_33.setTransform(12.8047,115.5553,0.8412,0.8412);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_34.setTransform(34.902,133.17,0.3313,0.3095,0,2.1641,-178.4481);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_35.setTransform(27.5227,141.5932,0.3313,0.3095,0,2.1641,-178.4481);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_36.setTransform(30.4663,141.3323,0.3313,0.3095,0,2.1641,-178.4481);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_37.setTransform(33.1197,139.9799,0.3313,0.3095,0,2.1641,-178.4481);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_38.setTransform(35.2466,138.0869,0.3313,0.3095,0,2.1641,-178.4481);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_39.setTransform(27.4576,136.1211,0.3317,0.31,0,2.1664,-178.4475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgLIgHgXQgCgJgBgKQAAgNADgMIACgEIACgGQAFgNALgLQAYgXAhAEQAhAEAYAcQANAQAGATIABABQAEAOAAANQAAAbgMASIgEAGIgHAIQgUAUgcAAIgJgBg");
	this.shape_40.setTransform(6.7914,102.9367,0.8409,0.8409,0.6831);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_41.setTransform(35.017,134.177,0.3313,0.3095,0,2.9136,-177.7032);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_42.setTransform(27.529,142.5026,0.3313,0.3095,0,2.9136,-177.7032);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgQAAgLgMg");
	this.shape_43.setTransform(30.4755,142.2801,0.3313,0.3095,0,2.9136,-177.7032);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_44.setTransform(33.146,140.9624,0.3313,0.3095,0,2.9136,-177.7032);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_45.setTransform(35.2972,139.0974,0.3313,0.3095,0,2.9136,-177.7032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39,p:{skewX:2.1664,skewY:-178.4475,x:27.4576,y:136.1211}},{t:this.shape_38,p:{skewX:2.1641,skewY:-178.4481,x:35.2466,y:138.0869}},{t:this.shape_37,p:{skewX:2.1641,skewY:-178.4481,x:33.1197,y:139.9799}},{t:this.shape_36,p:{skewX:2.1641,skewY:-178.4481,x:30.4663,y:141.3323}},{t:this.shape_35,p:{skewX:2.1641,skewY:-178.4481,x:27.5227,y:141.5932}},{t:this.shape_34,p:{skewX:2.1641,skewY:-178.4481,x:34.902,y:133.17}},{t:this.shape_33,p:{rotation:0,x:12.8047,y:115.5553}},{t:this.shape_32,p:{rotation:0,x:22.11,y:131.6918,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_31,p:{scaleX:0.8409,scaleY:0.8409,rotation:0,x:6.6809,y:102.7812}},{t:this.shape_30,p:{regX:14.6,regY:-10.6,rotation:0,x:31,y:83.15,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_29,p:{regX:14.7,regY:-12.8,scaleX:0.8406,scaleY:0.8406,rotation:0,x:31.4,y:80.85}}]}).to({state:[{t:this.shape_39,p:{skewX:2.8469,skewY:-177.767,x:27.2111,y:136.586}},{t:this.shape_38,p:{skewX:2.8456,skewY:-177.7694,x:34.9284,y:138.6746}},{t:this.shape_37,p:{skewX:2.8456,skewY:-177.7694,x:32.7792,y:140.5422}},{t:this.shape_36,p:{skewX:2.8456,skewY:-177.7694,x:30.11,y:141.863}},{t:this.shape_35,p:{skewX:2.8456,skewY:-177.7694,x:27.1635,y:142.0889}},{t:this.shape_34,p:{skewX:2.8456,skewY:-177.7694,x:34.6423,y:133.7543}},{t:this.shape_33,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_32,p:{rotation:0.6831,x:21.8741,y:132.0281,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_40,p:{rotation:0.6831,x:6.7914,y:102.9367,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_30,p:{regX:14.8,regY:-10.8,rotation:-0.315,x:31.15,y:83,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_29,p:{regX:14.2,regY:-13.2,scaleX:0.8405,scaleY:0.8405,rotation:-0.3141,x:30.85,y:80.55}}]},6).to({state:[{t:this.shape_39,p:{skewX:2.9148,skewY:-177.701,x:27.522,y:137.0506}},{t:this.shape_38,p:{skewX:2.9135,skewY:-177.7034,x:35.192,y:139.1064}},{t:this.shape_37,p:{skewX:2.9135,skewY:-177.7034,x:33.0406,y:140.9715}},{t:this.shape_36,p:{skewX:2.9135,skewY:-177.7034,x:30.3698,y:142.2892}},{t:this.shape_35,p:{skewX:2.9135,skewY:-177.7034,x:27.4231,y:142.5117}},{t:this.shape_34,p:{skewX:2.9135,skewY:-177.7034,x:34.9117,y:134.1857}},{t:this.shape_33,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_32,p:{rotation:0.7497,x:22.1863,y:132.4083,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_40,p:{rotation:0.7497,x:7.1372,y:103.299,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_30,p:{regX:14.4,regY:-10.8,rotation:-1.2249,x:30.8,y:82.95,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_29,p:{regX:14.6,regY:-12.9,scaleX:0.8405,scaleY:0.8405,rotation:-1.2244,x:31.15,y:80.75}}]},2).to({state:[{t:this.shape_39,p:{skewX:2.5956,skewY:-178.0174,x:27.7186,y:136.9663}},{t:this.shape_38,p:{skewX:2.594,skewY:-178.0176,x:35.4011,y:138.9316}},{t:this.shape_37,p:{skewX:2.594,skewY:-178.0176,x:33.2602,y:140.8085}},{t:this.shape_36,p:{skewX:2.594,skewY:-178.0176,x:30.5969,y:142.1408}},{t:this.shape_35,p:{skewX:2.594,skewY:-178.0176,x:27.6515,y:142.3795}},{t:this.shape_34,p:{skewX:2.594,skewY:-178.0176,x:35.0934,y:134.0126}},{t:this.shape_33,p:{rotation:0.4334,x:13.2168,y:116.1728}},{t:this.shape_32,p:{rotation:0.4326,x:22.3681,y:132.346,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_31,p:{scaleX:0.8408,scaleY:0.8408,rotation:0.4326,x:7.1586,y:103.3216}},{t:this.shape_30,p:{regX:14.4,regY:-10.8,rotation:-1.2249,x:30.8,y:82.95,scaleX:0.8409,scaleY:0.8409}},{t:this.shape_29,p:{regX:14.6,regY:-12.9,scaleX:0.8405,scaleY:0.8405,rotation:-1.2244,x:31.15,y:80.75}}]},3).to({state:[{t:this.shape_39,p:{skewX:2.9148,skewY:-177.701,x:27.5386,y:137.0513}},{t:this.shape_45,p:{skewX:2.9136,skewY:-177.7032,x:35.2972,y:139.0974}},{t:this.shape_44,p:{skewX:2.9136,skewY:-177.7032,x:33.146,y:140.9624}},{t:this.shape_43,p:{skewX:2.9136,skewY:-177.7032,x:30.4755,y:142.2801}},{t:this.shape_42,p:{skewX:2.9136,skewY:-177.7032,x:27.529,y:142.5026}},{t:this.shape_41,p:{skewX:2.9136,skewY:-177.7032,x:35.017,y:134.177}},{t:this.shape_33,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_32,p:{rotation:0.7497,x:22.1479,y:132.3915,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_40,p:{rotation:0.7497,x:7.0993,y:103.2832,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_30,p:{regX:14.4,regY:-10.9,rotation:-1.225,x:30.75,y:82.9,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_29,p:{regX:14.5,regY:-13.1,scaleX:0.8405,scaleY:0.8405,rotation:-1.2244,x:31.05,y:80.55}}]},5).to({state:[{t:this.shape_39,p:{skewX:2.8469,skewY:-177.767,x:27.2276,y:136.5867}},{t:this.shape_45,p:{skewX:2.8458,skewY:-177.7693,x:34.9893,y:138.6657}},{t:this.shape_44,p:{skewX:2.8458,skewY:-177.7693,x:32.8402,y:140.5331}},{t:this.shape_43,p:{skewX:2.8458,skewY:-177.7693,x:30.1711,y:141.8538}},{t:this.shape_42,p:{skewX:2.8458,skewY:-177.7693,x:27.2248,y:142.0798}},{t:this.shape_41,p:{skewX:2.8458,skewY:-177.7693,x:34.7032,y:133.7456}},{t:this.shape_33,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_32,p:{rotation:0.6832,x:21.8164,y:132.0029,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_40,p:{rotation:0.6832,x:6.7346,y:102.9131,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_30,p:{regX:14.8,regY:-10.9,rotation:-0.3151,x:31.1,y:82.95,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_29,p:{regX:14.2,regY:-13.2,scaleX:0.8404,scaleY:0.8404,rotation:-0.3142,x:30.8,y:80.5}}]},11).to({state:[{t:this.shape_39,p:{skewX:2.8469,skewY:-177.767,x:27.2276,y:136.5867}},{t:this.shape_45,p:{skewX:2.8458,skewY:-177.7693,x:34.9893,y:138.6657}},{t:this.shape_44,p:{skewX:2.8458,skewY:-177.7693,x:32.8402,y:140.5331}},{t:this.shape_43,p:{skewX:2.8458,skewY:-177.7693,x:30.1711,y:141.8538}},{t:this.shape_42,p:{skewX:2.8458,skewY:-177.7693,x:27.2248,y:142.0798}},{t:this.shape_41,p:{skewX:2.8458,skewY:-177.7693,x:34.7032,y:133.7456}},{t:this.shape_33,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_32,p:{rotation:0.6832,x:21.8164,y:132.0029,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_40,p:{rotation:0.6832,x:6.7346,y:102.9131,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_30,p:{regX:14.8,regY:-10.9,rotation:-0.3151,x:31.1,y:82.95,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_29,p:{regX:14.2,regY:-13.2,scaleX:0.8404,scaleY:0.8404,rotation:-0.3142,x:30.8,y:80.5}}]},2).wait(11));

	// Layer_3
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5467B0").s().p("AhEDPQgSgTgEgaQgCgOAAgTQAIiSAMg+QALg1AJglIACgHIABgFIAAABQAGgOALgMQAWgVAdAAQALAAAKADQASAFANANQAWAWAAAeIAAACIgCASIgHAnQgQBZgLCWIAAALQAAAegWAWQgVAVgeAAQgeAAgWgVg");
	this.shape_46.setTransform(51.7326,169.6046,0.8413,0.8413,1.0393);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C73A3F").s().p("Ag1BlQAYhFAKg6IgihRIADgKIAKglQAEAKAUANQAZATAagBIAEAAIAJAzQAEAWAIAYQAGASgPAcQgNAXgWAfQgrA9gUAJIgEABQgSAAAQg2g");
	this.shape_47.setTransform(53.4801,216.4497,0.8412,0.8412,5.5229);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgoQgNgogGgiQgBgFAAgNIAAgEQACgcAUgVQAWgVAegBQAXAAASAOIAKAIQAQARAEAUIADAFQAEAOAFAsQAQCPAQBbIgEAAQgaABgbgTQgTgNgFgJIgKAlIgCAKIgohkg");
	this.shape_48.setTransform(51.139,191.7751,0.8412,0.8412,5.5229);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgnQgNgpgGgjQgBgEAAgOIAAgDQACgcAUgVQAWgWAeAAQAXAAASAOIAKAIQAQAQAEAVIADAFQAEAPAFArQAQCPAQBcIgEAAQgaAAgbgSQgTgOgFgKIgKAlIgCALIgohkg");
	this.shape_49.setTransform(51.7555,191.8715,0.8413,0.8413,1.5258);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5467B0").s().p("AgmBSQgYg5gMgnQgNgogGgiQgBgFAAgOIAAgDQACgcAUgVQAWgWAeABQAXAAASANIAKAIQAQARAEATIADAGQAEAPAFArQAQCPAQBbIgEAAQgaABgbgTQgTgNgFgJIgKAkIgCAKIgohjg");
	this.shape_50.setTransform(51.1511,191.6495,0.8412,0.8412,5.5229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.4801,y:216.4497}},{t:this.shape_46,p:{rotation:1.0393,x:51.7326,y:169.6046}}]}).to({state:[{t:this.shape_49,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_46,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},6).to({state:[{t:this.shape_49,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_46,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},2).to({state:[{t:this.shape_49,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_46,p:{rotation:0,x:51.8376,y:169.6533}}]},2).to({state:[{t:this.shape_49,p:{rotation:-0.7067,x:52.3017,y:191.7334}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:-0.7067,x:57.3067,y:216.0097}},{t:this.shape_46,p:{rotation:0,x:51.8376,y:169.6533}}]},3).to({state:[{t:this.shape_49,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_46,p:{rotation:0,x:51.8376,y:169.6533}}]},6).to({state:[{t:this.shape_49,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_46,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},4).to({state:[{t:this.shape_49,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_46,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},2).to({state:[{t:this.shape_49,p:{rotation:3.4762,x:51.4955,y:191.9394}},{t:this.shape_47,p:{scaleX:0.8413,scaleY:0.8413,rotation:3.4762,x:54.7164,y:216.5157}},{t:this.shape_46,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},3).to({state:[{t:this.shape_50},{t:this.shape_47,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.4922,y:216.3241}},{t:this.shape_46,p:{rotation:1.0393,x:51.7326,y:169.6046}}]},3).wait(9));

	// Layer_2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5467B0").s().p("Ag2DeQgfgFgRgZQgQgVACgbQAAgOADgTQAgiOAWg7QATgzAQgjIACgGIACgFIAAABQAIgNANgKQAYgRAeAFQALACAKAEQAQAIALAPQASAZgFAeIAAACIgGARIgMAmQgfBUgjCTIgDALQgFAegYASQgTANgWAAIgNgBg");
	this.shape_51.setTransform(33.95,150.45,0.8413,0.8413,-1.9957,0,0,3.7,-14.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C73A3F").s().p("AAMBeQgGhIgOg5Ig/g8IgCgKIgGgmQAIAHAXAEQAhAHAVgLIAEgCIAdArQAMASASATQANAOgDAhQgDAYgHAmQgPBJgPARQgEADgDAAQgNAAgHgyg");
	this.shape_52.setTransform(40.2445,208.1956,0.8413,0.8413,10.4123);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5467B0").s().p("AgMBaQgsgqgcggQgcgfgTgcQgDgEgGgNIgBgDQgLgaALgbQALgcAcgNQAVgJAXAEIAMAEQAVAIAMAQIAEAFQAJALAWAmQBKB8AzBNIgEACQgWALghgGQgXgFgIgHIAGAmIACAKIhNhKg");
	this.shape_53.setTransform(32.862,184.5663,0.8413,0.8413,10.4123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.7,regY:-14.3,rotation:-1.9957,x:33.95,y:150.45}}]}).to({state:[{t:this.shape_53,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},6).to({state:[{t:this.shape_53,p:{rotation:1.9967,x:33.5589,y:183.5245,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:1.9967,x:44.3207,y:205.82,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_53,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_53,p:{rotation:-0.7067,x:33.5479,y:183.1396,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:-0.7067,x:45.3492,y:204.9026,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},3).to({state:[{t:this.shape_53,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},6).to({state:[{t:this.shape_53,p:{rotation:1.9967,x:33.5589,y:183.5245,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:1.9967,x:44.3207,y:205.82,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},4).to({state:[{t:this.shape_53,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},2).to({state:[{t:this.shape_53,p:{rotation:7.2096,x:33.097,y:184.1445,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_52,p:{rotation:7.2096,x:41.7882,y:207.3245,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_51,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},3).to({state:[{t:this.shape_53,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_52,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_51,p:{regX:3.5,regY:-14.3,rotation:-1.9957,x:33.8,y:150.45}}]},3).wait(9));

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
	this.instance = new lib.Devojkao1glava("single",6);
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
	this.shape_2.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_2.setTransform(94.1654,150.3733,0.3577,0.3343,0,20.0347,-160.5827);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_3.setTransform(83.7897,156.5862,0.3577,0.3343,0,20.0347,-160.5827);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgPAAgMgMg");
	this.shape_4.setTransform(86.9016,157.2933,0.3577,0.3343,0,20.0347,-160.5827);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(90.0769,156.7823,0.3577,0.3343,0,20.0347,-160.5827);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAAQgLAMQgMAMgRAAQgQAAgLgMg");
	this.shape_6.setTransform(92.8901,155.5412,0.3577,0.3343,0,20.0347,-160.5827);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_7.setTransform(81.5,145.6,0.3583,0.3348,0,20.0362,-160.5796,14.7,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DD4732").s().p("AhcClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAIANguQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggaAAQgJAAgJgEg");
	this.shape_8.setTransform(94.45,80.4,1.1194,1.1194,10.2322,0,0,6.8,-16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_9.setTransform(84.6929,156.4006,0.3577,0.3342,0,19.0322,-161.5821);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_10.setTransform(87.8165,157.0533,0.3577,0.3342,0,19.0322,-161.5821);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_11.setTransform(90.9822,156.4871,0.3577,0.3342,0,19.0322,-161.5821);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgQAAgLgLg");
	this.shape_12.setTransform(93.7732,155.1973,0.3577,0.3342,0,19.0322,-161.5821);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgHgQIgCgQQAAgLACgLIABgDIACgFQAJgkAfhAIAMguQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggaAAQgJAAgIgEg");
	this.shape_13.setTransform(94.5,80.4,1.1194,1.1194,10.2322,0,0,6.9,-16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_14.setTransform(94.5832,150.1851,0.3577,0.3342,0,19.5864,-161.0271);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_15.setTransform(87.3743,157.1606,0.3577,0.3342,0,19.5864,-161.0271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{regX:14.7,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0347,skewY:-160.5827,x:92.8901,y:155.5412,scaleY:0.3343}},{t:this.shape_5,p:{skewX:20.0347,skewY:-160.5827,x:90.0769,y:156.7823,scaleY:0.3343}},{t:this.shape_4,p:{skewX:20.0347,skewY:-160.5827,x:86.9016,y:157.2933}},{t:this.shape_3,p:{skewX:20.0347,skewY:-160.5827,x:83.7897,y:156.5862,scaleY:0.3343}},{t:this.shape_2,p:{skewX:20.0347,skewY:-160.5827,x:94.1654,y:150.3733}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{regX:14.4,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.9,y:145.5}},{t:this.shape_6,p:{skewX:19.588,skewY:-161.0279,x:93.2777,y:155.3661,scaleY:0.3343}},{t:this.shape_5,p:{skewX:19.588,skewY:-161.0279,x:90.4742,y:156.6289,scaleY:0.3343}},{t:this.shape_4,p:{skewX:19.588,skewY:-161.0279,x:87.303,y:157.1645}},{t:this.shape_3,p:{skewX:19.588,skewY:-161.0279,x:84.1858,y:156.4817,scaleY:0.3343}},{t:this.shape_2,p:{skewX:19.588,skewY:-161.0279,x:94.5125,y:150.1886}},{t:this.shape_1,p:{regX:10.1,rotation:28.8661,x:81.1,y:144.95}},{t:this.shape_8}]},13).to({state:[{t:this.shape_7,p:{regX:14.7,regY:-10.4,skewX:19.0336,skewY:-161.5797,x:82.2,y:145.6}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_3,p:{skewX:19.0322,skewY:-161.5821,x:94.9577,y:150.0084,scaleY:0.3342}},{t:this.shape_1,p:{regX:10.3,rotation:28.3123,x:81.55,y:145.35}},{t:this.shape_8}]},2).to({state:[{t:this.shape_7,p:{regX:14.4,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.9,y:145.5}},{t:this.shape_6,p:{skewX:19.5864,skewY:-161.0271,x:93.3485,y:155.3623,scaleY:0.3342}},{t:this.shape_5,p:{skewX:19.5864,skewY:-161.0271,x:90.5453,y:156.625,scaleY:0.3342}},{t:this.shape_15,p:{skewX:19.5864,skewY:-161.0271,x:87.3743,y:157.1606}},{t:this.shape_3,p:{skewX:19.5864,skewY:-161.0271,x:84.2572,y:156.4777,scaleY:0.3342}},{t:this.shape_14,p:{skewX:19.5864,skewY:-161.0271,x:94.5832,y:150.1851}},{t:this.shape_1,p:{regX:10.2,rotation:28.8661,x:81.3,y:145}},{t:this.shape_13}]},16).to({state:[{t:this.shape_7,p:{regX:14.7,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0365,skewY:-160.5819,x:92.9513,y:155.5279,scaleY:0.3342}},{t:this.shape_5,p:{skewX:20.0365,skewY:-160.5819,x:90.1382,y:156.7688,scaleY:0.3342}},{t:this.shape_15,p:{skewX:20.0365,skewY:-160.5819,x:86.963,y:157.2797}},{t:this.shape_3,p:{skewX:20.0365,skewY:-160.5819,x:83.8513,y:156.5726,scaleY:0.3342}},{t:this.shape_14,p:{skewX:20.0365,skewY:-160.5819,x:94.2266,y:150.3605}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_13}]},2).to({state:[{t:this.shape_7,p:{regX:14.7,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0365,skewY:-160.5819,x:92.9513,y:155.5279,scaleY:0.3342}},{t:this.shape_5,p:{skewX:20.0365,skewY:-160.5819,x:90.1382,y:156.7688,scaleY:0.3342}},{t:this.shape_15,p:{skewX:20.0365,skewY:-160.5819,x:86.963,y:157.2797}},{t:this.shape_3,p:{skewX:20.0365,skewY:-160.5819,x:83.8513,y:156.5726,scaleY:0.3342}},{t:this.shape_14,p:{skewX:20.0365,skewY:-160.5819,x:94.2266,y:150.3605}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_13}]},2).to({state:[]},1).to({state:[{t:this.shape_7,p:{regX:14.7,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0365,skewY:-160.5819,x:92.9513,y:155.5279,scaleY:0.3342}},{t:this.shape_5,p:{skewX:20.0365,skewY:-160.5819,x:90.1382,y:156.7688,scaleY:0.3342}},{t:this.shape_15,p:{skewX:20.0365,skewY:-160.5819,x:86.963,y:157.2797}},{t:this.shape_3,p:{skewX:20.0365,skewY:-160.5819,x:83.8513,y:156.5726,scaleY:0.3342}},{t:this.shape_14,p:{skewX:20.0365,skewY:-160.5819,x:94.2266,y:150.3605}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_13}]},3).wait(1));

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
	this.shape_21.graphics.f("#DD4732").s().p("AAEDTQgXgCgLgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAHgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_21.setTransform(103.65,135.65,1.1202,1.1202,0,0,0,1.7,-10.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7C12D").s().p("AgXBOIgQgqQAFgNAAgSQgHADgGAHIgCgLQAOgjAXhIQARgBATgMQARgLAEgIIAEAjIABAJQgQAhgZAvQgGBRAGBCQgMgRgUgpg");
	this.shape_22.setTransform(91.7039,204.8529,1.1202,1.1202);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DD4732").s().p("AgSCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQAMgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyIgjBXIgBgIg");
	this.shape_23.setTransform(99.335,175.9907,1.1202,1.1202);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DD4732").s().p("AADDTQgXgCgKgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAGgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_24.setTransform(103.6,135.65,1.1202,1.1202,0,0,0,1.7,-10.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DD4732").s().p("AgSCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQALgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgSAygQAlIgBgIg");
	this.shape_25.setTransform(99.164,175.9545,1.1201,1.1201,0.9491);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DD4732").s().p("AAFDTQgXgCgNgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAJgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_26.setTransform(103.1,135.3,1.1201,1.1201,-1.7041,0,0,1.5,-10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DD4732").s().p("AgRCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQAEgDABgDQAKgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgRAygQAlIgBgIg");
	this.shape_27.setTransform(99.7484,175.8591,1.1202,1.1202,2.7836);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7C12D").s().p("AgXBOIgQgpQAFgNAAgUQgHADgGAIIgCgLQAOgjAXhIQARAAATgNQARgLAEgIIAEAjIABAIQgQAigZAvQgGBRAGBDQgMgSgUgpg");
	this.shape_28.setTransform(89.3068,203.3156,1.1201,1.1201,6.4796);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DD4732").s().p("AADDTQgXgCgKgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAGgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_29.setTransform(103.5,135.75,1.1202,1.1202,-3.4081,0,0,1.8,-10.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DD4732").s().p("AgRCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQAKgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgRAygQAlIgBgIg");
	this.shape_30.setTransform(99.8773,175.7506,1.1201,1.1201,4.2233);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD4732").s().p("AgRCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgQAygQAlIgBgIg");
	this.shape_31.setTransform(99.6644,175.855,1.1202,1.1202,2.7836);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DD4732").s().p("AADDTQgXgCgJgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAFgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_32.setTransform(103.6,135.65,1.1202,1.1202,0,0,0,1.8,-10.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DD4732").s().p("AADDTQgXgCgKgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAGgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgQAQgVAAIgEAAg");
	this.shape_33.setTransform(103.65,135.65,1.1202,1.1202,0,0,0,1.8,-10.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DD4732").s().p("AgRCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQAEgDABgDQAKgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgRAygQAlIgBgIg");
	this.shape_34.setTransform(99.251,175.9907,1.1202,1.1202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_21}]}).to({state:[{t:this.shape_25,p:{rotation:0.9491,x:99.164,y:175.9545}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_24,p:{rotation:0,x:103.6,y:135.65}}]},8).to({state:[{t:this.shape_27,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:99.7484,y:175.8591}},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_26,p:{regY:-10.8,rotation:-1.7041,y:135.3,x:103.1}}]},2).to({state:[{t:this.shape_27,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:99.9331,y:175.7547}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_26,p:{regY:-10.6,rotation:-2.4781,y:135.6,x:103.1}}]},2).to({state:[{t:this.shape_25,p:{rotation:5.5306,x:100.1915,y:175.8417}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_24,p:{rotation:-3.4081,x:103.45,y:135.75}}]},3).to({state:[{t:this.shape_25,p:{rotation:6.4796,x:100.1179,y:175.4971}},{t:this.shape_28},{t:this.shape_24,p:{rotation:-3.4081,x:103.45,y:135.75}}]},3).to({state:[{t:this.shape_27,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:100.1637,y:175.839}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_29}]},9).to({state:[{t:this.shape_30,p:{rotation:4.2233,x:99.8773,y:175.7506}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_26,p:{regY:-10.5,rotation:-2.4781,y:135.7,x:103}}]},2).to({state:[{t:this.shape_31},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_26,p:{regY:-10.8,rotation:-1.7041,y:135.3,x:102.95}}]},2).to({state:[{t:this.shape_30,p:{rotation:0.9491,x:99.08,y:175.9531}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_32}]},2).to({state:[{t:this.shape_30,p:{rotation:0.9491,x:99.08,y:175.9531}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_32}]},2).to({state:[]},1).to({state:[{t:this.shape_34},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_33}]},3).wait(1));

	// Layer_2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DD4732").s().p("AAeCsQgbgSAAgEQAAgEgeg7Qggg6gcglQgcgmAEgQQAFgRAAgKQABgKgDgPQgEgRAJgWQAFgOALgJQAGgEAIgDQAVgHAVAMQALAHAHALIAAgBIADAFIADAEQAQAdAWApQAZAwAvB2QAFAPADAMQAFAXgIAUQgJAWgVAIQgGACgHAAQgQAAgTgOg");
	this.shape_35.setTransform(120.6,131.1,1.1202,1.1202,0,0,0,-2.9,-9.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIIg6A+QgaBJgLA9QgIgTgHgrg");
	this.shape_36.setTransform(111.4748,190.9068,1.1202,1.1202);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DD4732").s().p("Ag2CIIAFghQgGAHgSAGQgVAGgPgFIAlhGQAkhDATgoQASgoADgGIAJgOQAFgJAQgIQAFgDAFgCQARgFARAHQAVAIAIAYQAIAWgJAXIgBADIgHAPQgPAagWAbQgWAdgiAnIg8BFIABgJg");
	this.shape_37.setTransform(124.0354,166.0015,1.1202,1.1202);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIQgYAagiAkQgaBJgLA9QgIgTgHgrg");
	this.shape_38.setTransform(110.7555,190.5276,1.1202,1.1202,1.1833);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgLAFgQQgGABgJAGIACgLQAWgcAng9QAPAFAVgGQASgGAGgHIgFAhIgBAJIg6A+QgaBJgLA8QgIgTgHgqg");
	this.shape_39.setTransform(109.6161,188.5772,1.1201,1.1201,5.0432);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgdAng8QAPAEAVgGQASgFAGgHIgFAhIgBAJQgYAZgiAkQgaBJgLA9QgIgTgHgqg");
	this.shape_40.setTransform(108.6454,187.7237,1.1201,1.1201,7.6935);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgcAng9QAPAEAVgGQASgFAGgHIgFAhIgBAJIg6A+QgaBIgLA9QgIgTgHgqg");
	this.shape_41.setTransform(109.5144,188.4557,1.1201,1.1201,5.0432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37,p:{rotation:0,x:124.0354,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_36,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:111.4748,y:190.9068}},{t:this.shape_35,p:{x:120.6,regX:-2.9,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]}).to({state:[{t:this.shape_37,p:{rotation:1.1833,x:123.8278,y:165.8871,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_38,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.7555,y:190.5276}},{t:this.shape_35,p:{x:120.55,regX:-2.9,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},8).to({state:[{t:this.shape_37,p:{rotation:3.0423,x:123.9758,y:165.5638,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_36,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:110.1117,y:189.7663}},{t:this.shape_35,p:{x:120.15,regX:-3.2,regY:-9.4,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.95}}]},2).to({state:[{t:this.shape_37,p:{rotation:5.0432,x:124.3167,y:164.8736,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_39},{t:this.shape_35,p:{x:120.3,regX:-3,regY:-9.9,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:130.5}}]},2).to({state:[{t:this.shape_37,p:{rotation:6.6933,x:124.5399,y:164.8768,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_38,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:109.1628,y:188.1472}},{t:this.shape_35,p:{x:120.45,regX:-3,regY:-9.9,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.55}}]},3).to({state:[{t:this.shape_37,p:{rotation:7.6935,x:124.4258,y:164.726,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_40},{t:this.shape_35,p:{x:120.45,regX:-3,regY:-9.9,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.55}}]},3).to({state:[{t:this.shape_37,p:{rotation:6.6933,x:124.4843,y:164.8703,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_36,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:109.1071,y:188.1407}},{t:this.shape_35,p:{x:120.35,regX:-3,regY:-9.9,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.55}}]},9).to({state:[{t:this.shape_37,p:{rotation:5.0432,x:124.215,y:164.7522,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_41},{t:this.shape_35,p:{x:120.25,regX:-2.9,regY:-10,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:130.35}}]},2).to({state:[{t:this.shape_37,p:{rotation:3.0423,x:123.8081,y:165.5549,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_38,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:109.944,y:189.7573}},{t:this.shape_35,p:{x:120,regX:-3.2,regY:-9.4,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.95}}]},2).to({state:[{t:this.shape_37,p:{rotation:1.1833,x:123.6598,y:165.8836,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_36,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.5875,y:190.5242}},{t:this.shape_35,p:{x:120.6,regX:-2.7,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[{t:this.shape_37,p:{rotation:1.1833,x:123.6598,y:165.8836,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_36,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.5875,y:190.5242}},{t:this.shape_35,p:{x:120.6,regX:-2.7,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[]},1).to({state:[{t:this.shape_37,p:{rotation:0,x:123.8674,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_38,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:111.3068,y:190.9068}},{t:this.shape_35,p:{x:120.55,regX:-2.8,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},3).wait(1));

	// Layer_4
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DD4732").s().p("AhcClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAIAOguQATgkAYglQAMgSAOgHQAygWAwA0QAhAigLAqQgQAfgkAtQgnAzgzBBQgdAggaAAQgJAAgJgEg");
	this.shape_42.setTransform(120.8,65.2,1.0213,1.0213,0,-10.2215,169.7785,5.6,-16.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DD4732").s().p("AhAAEQggglgRgYIgJgOQgEgGgCgHQgCgJgBgHIAAgDIAAgEQACgKAFgIQADgHAFgFQAOgPAVgBQAUAAAOAKQAKAIAHALIgFgJQA+AmAsBaQArBaALAMQAVAugxALQhthYg0g+g");
	this.shape_43.setTransform(133.1,123.95,1.1724,1.1724,0,-29.3071,150.6929,9.8,12.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_44.setTransform(119.4317,128.9251,0.3262,0.3048,0,-20.0142,-19.391);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_45.setTransform(128.8914,134.5946,0.3262,0.3048,0,-20.0142,-19.391);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMAMQgMALgQAAQgQAAgLgLg");
	this.shape_46.setTransform(126.0534,135.2381,0.3262,0.3048,0,-20.0142,-19.391);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_47.setTransform(123.158,134.7708,0.3262,0.3048,0,-20.0142,-19.391);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_48.setTransform(120.593,133.6379,0.3262,0.3048,0,-20.0142,-19.391);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_49.setTransform(131.8,125.1,0.3266,0.3053,0,-20.0147,-19.3924,17.7,-8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DD4732").s().p("AhcClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAIANguQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggaAAQgJAAgJgEg");
	this.shape_50.setTransform(120.9,65.05,1.0214,1.0214,0,-10.226,169.774,5.8,-16.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_51.setTransform(119.4311,128.9775,0.3263,0.3049,0,-19.5819,-18.9543);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_52.setTransform(128.8508,134.7215,0.3263,0.3049,0,-19.5819,-18.9543);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLAMQgNALgQAAQgPAAgMgLg");
	this.shape_53.setTransform(126.0072,135.3435,0.3263,0.3049,0,-19.5819,-18.9543);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_54.setTransform(123.1145,134.8538,0.3263,0.3049,0,-19.5819,-18.9543);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_55.setTransform(120.5572,133.7009,0.3263,0.3049,0,-19.5819,-18.9543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49,p:{regX:17.7,regY:-8,scaleX:0.3266,scaleY:0.3053,skewX:-20.0147,skewY:-19.3924,x:131.8,y:125.1}},{t:this.shape_48,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0142,skewY:-19.391,x:120.593,y:133.6379}},{t:this.shape_47,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0142,skewY:-19.391,x:123.158,y:134.7708}},{t:this.shape_46,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0142,skewY:-19.391,x:126.0534,y:135.2381}},{t:this.shape_45,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0142,skewY:-19.391,x:128.8914,y:134.5946}},{t:this.shape_44,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0142,skewY:-19.391,x:119.4317,y:128.9251}},{t:this.shape_43,p:{regX:9.8,regY:12.6,scaleX:1.1724,scaleY:1.1724,skewX:-29.3071,skewY:150.6929,x:133.1,y:123.95}},{t:this.shape_42}]}).to({state:[{t:this.shape_49,p:{regX:17.5,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.9,y:125.1}},{t:this.shape_48,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.5809,skewY:-18.956,x:120.617,y:133.6609}},{t:this.shape_47,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.5809,skewY:-18.956,x:123.1743,y:134.8138}},{t:this.shape_46,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.5809,skewY:-18.956,x:126.0672,y:135.3034}},{t:this.shape_45,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.5809,skewY:-18.956,x:128.9109,y:134.6813}},{t:this.shape_44,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.5809,skewY:-18.956,x:119.4909,y:128.9372}},{t:this.shape_43,p:{regX:10,regY:12.7,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55}},{t:this.shape_50,p:{regX:5.8,skewX:-10.226,skewY:169.774,y:65.05,regY:-16.7,scaleX:1.0214,scaleY:1.0214}}]},13).to({state:[{t:this.shape_49,p:{regX:17.4,regY:-8.4,scaleX:0.3268,scaleY:0.3054,skewX:-19.3203,skewY:-18.6956,x:131.8,y:125.15}},{t:this.shape_48,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.3189,skewY:-18.695,x:120.459,y:133.6387}},{t:this.shape_47,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.3189,skewY:-18.695,x:123.0111,y:134.8033}},{t:this.shape_46,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.3189,skewY:-18.695,x:125.9018,y:135.306}},{t:this.shape_45,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.3189,skewY:-18.695,x:128.7484,y:134.6969}},{t:this.shape_44,p:{scaleX:0.3263,scaleY:0.305,skewX:-19.3189,skewY:-18.695,x:119.3545,y:128.9097}},{t:this.shape_43,p:{regX:9.9,regY:12.9,scaleX:1.1726,scaleY:1.1726,skewX:-28.6,skewY:151.4,x:132.85,y:124.7}},{t:this.shape_50,p:{regX:5.8,skewX:-10.226,skewY:169.774,y:65.05,regY:-16.7,scaleX:1.0214,scaleY:1.0214}}]},2).to({state:[{t:this.shape_49,p:{regX:17.5,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.9,y:125.1}},{t:this.shape_55,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.5819,skewY:-18.9543,x:120.5572,y:133.7009}},{t:this.shape_54,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.5819,skewY:-18.9543,x:123.1145,y:134.8538}},{t:this.shape_53,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.5819,skewY:-18.9543,x:126.0072,y:135.3435}},{t:this.shape_52,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.5819,skewY:-18.9543,x:128.8508,y:134.7215}},{t:this.shape_51,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.5819,skewY:-18.9543,x:119.4311,y:128.9775}},{t:this.shape_43,p:{regX:10,regY:12.7,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55}},{t:this.shape_50,p:{regX:5.9,skewX:-10.2256,skewY:169.7744,y:64.95,regY:-16.7,scaleX:1.0214,scaleY:1.0214}}]},16).to({state:[{t:this.shape_49,p:{regX:17.8,regY:-7.9,scaleX:0.3266,scaleY:0.3052,skewX:-20.0139,skewY:-19.3916,x:131.75,y:125.1}},{t:this.shape_55,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:120.4697,y:133.6185}},{t:this.shape_54,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:123.0343,y:134.7512}},{t:this.shape_53,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:125.9293,y:135.2185}},{t:this.shape_52,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:128.767,y:134.5751}},{t:this.shape_51,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:119.3089,y:128.9061}},{t:this.shape_43,p:{regX:9.8,regY:12.7,scaleX:1.1723,scaleY:1.1723,skewX:-29.3062,skewY:150.6938,x:133.1,y:123.95}},{t:this.shape_50,p:{regX:5.4,skewX:-10.2194,skewY:169.7806,y:65.1,regY:-16.3,scaleX:1.0212,scaleY:1.0212}}]},2).to({state:[{t:this.shape_49,p:{regX:17.8,regY:-7.9,scaleX:0.3266,scaleY:0.3052,skewX:-20.0139,skewY:-19.3916,x:131.75,y:125.1}},{t:this.shape_55,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:120.4697,y:133.6185}},{t:this.shape_54,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:123.0343,y:134.7512}},{t:this.shape_53,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:125.9293,y:135.2185}},{t:this.shape_52,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:128.767,y:134.5751}},{t:this.shape_51,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:119.3089,y:128.9061}},{t:this.shape_43,p:{regX:9.8,regY:12.7,scaleX:1.1723,scaleY:1.1723,skewX:-29.3062,skewY:150.6938,x:133.1,y:123.95}},{t:this.shape_50,p:{regX:5.4,skewX:-10.2194,skewY:169.7806,y:65.1,regY:-16.3,scaleX:1.0212,scaleY:1.0212}}]},2).to({state:[]},1).to({state:[{t:this.shape_49,p:{regX:17.8,regY:-7.9,scaleX:0.3266,scaleY:0.3052,skewX:-20.0139,skewY:-19.3916,x:131.75,y:125.1}},{t:this.shape_55,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:120.4697,y:133.6185}},{t:this.shape_54,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:123.0343,y:134.7512}},{t:this.shape_53,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:125.9293,y:135.2185}},{t:this.shape_52,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:128.767,y:134.5751}},{t:this.shape_51,p:{scaleX:0.3262,scaleY:0.3048,skewX:-20.0108,skewY:-19.3902,x:119.3089,y:128.9061}},{t:this.shape_43,p:{regX:9.8,regY:12.7,scaleX:1.1723,scaleY:1.1723,skewX:-29.3062,skewY:150.6938,x:133.1,y:123.95}},{t:this.shape_50,p:{regX:5.4,skewX:-10.2194,skewY:169.7806,y:65.1,regY:-16.3,scaleX:1.0212,scaleY:1.0212}}]},3).wait(1));

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


(lib.DevojkaOb1cipela1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sarezacipelu1();
	this.instance.setTransform(30.55,23.35,1,1,0,0,0,26.4,16);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,57,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.koza1();
	this.instance_1.setTransform(29.9,21.2,1,1,0,0,0,29.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DevojkaOb1cipela1, new cjs.Rectangle(-0.1,-0.3,59.5,42.199999999999996), null);


(lib.Devojkao1nogaleva1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nogaodkolena1();
	this.instance.setTransform(45.15,129.65,1,1,-13.2016,0,0,18.4,18.6);

	this.instance_1 = new lib.DevojkaOb1cipela1("synched",0);
	this.instance_1.setTransform(70.45,232.45,0.9164,0.9164,-13.1896,0,0,46.1,3.9);

	this.instance_2 = new lib.nogadokolena11();
	this.instance_2.setTransform(45.35,22.4,1,1,0,0,0,22.4,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,0,67.19999999999999,275.1);


(lib.Devojkao1nogadesna1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nogaodkolena1();
	this.instance.setTransform(30.4,116.55,0.9056,0.9056,-7.0226,0,0,18.4,18.6);

	this.instance_1 = new lib.DevojkaOb1cipela1("synched",0);
	this.instance_1.setTransform(43.25,211.5,0.8121,0.8121,8.3921,0,0,46.1,3.9);

	this.instance_2 = new lib.nogadokolena11();
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
	props.labels = {"dize glavu":92};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.MomakOb3odlakta("single",1);
	this.instance.setTransform(173.55,133.5,0.5701,0.6552,0,137.2641,136.413,15.5,11.7);

	this.instance_1 = new lib.MomakOb3shaka("single",0);
	this.instance_1.setTransform(132.9,81.25,0.6643,0.6705,0,161.692,160.2647,16.6,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},29).to({state:[]},3).to({state:[{t:this.instance_1},{t:this.instance}]},64).to({state:[]},3).wait(101));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A25050").s().p("AAiAQIgPgEIgWgFQgYgFgGgCQgGgDgFADQgFABgDgBQgFgBACgGQACgEAGgCIAJgDIASABIASACQAWADAHADIAGACIAHABQAHABAEAEQAEADABADQABAFgCACQgDADgHAAIgLgBg");
	this.shape.setTransform(79.2246,89.1417);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D3BE").s().p("AB5AgQgIgCACgIQAAgGAKgDQAXgIAGgKQADgCABgFIAEgEQADgBAEAAQAEAAACADQAEAEgCAGQgBAFgEAFQgOASgXAHQgFACgEAAIgFgBgAiUANQgJgEgFgFIgIgIQgFgIgBgHQgDgIAFgEQAEgDAFAEIAGAIQAJAOAKADQACABAHABQAGABACACQAFAFgGAHQgDAEgJAAQgGAAgGgDg");
	this.shape_1.setTransform(81.4663,76.2204);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABmAdQgCgBgBgEQgBgGABgHIABgEIABgDQAEgEAGAAQAFgBADABQAEAEAAAFIAAAGIgCAHIgDAGIgHADIgDABQgDAAgDgDgAh0AGQgEgCgBgEQgCgMAFgJIACgCQADgFADgCQAHgDADAGIACAHIgBANIgDAHIAAAAIgGAGIgFABIgDgBg");
	this.shape_2.setTransform(81.1839,60.6113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABiB3QgFgIgDgRQgGgeAEgVQAFgNADgGQAJgIALADIABACIgBADIgBAEQgBAHABAGQABAEACABQAEAEAFgCIAHgDQAKAdgIAgQgDATgMADIgFABQgJAAgJgKgAh5BaQgFgHgDgSQgGgeAEgWQAEgMAEgEQAJgJAKADQAAAAABABQAAAAAAAAQABABAAAAQABAAABABIgCACQgFAIACAMQABAFAEACQADACAFgCIAGgGIAAgBQAJAdgHAgQgDATgLADIgHABQgJAAgHgKgACEhNIgGgGQgHgFgJADIgLAEQgGACgDgEQgDgDADgHQAEgIAIgDQAKgEAKACQAHABAMAGQAMAGAAAIQABAFgEAEQgEACgFAAQgDAAgGgDgAiXhdQgCgHADgGQADgGAEgEQAKgJAHgDQAFgBAJADQAKACAFAEQAIAHgBAIQgBADgEAEQgEACgDgBIgFgEIgFgEQgJgFgHAHQgGAMgFACIgEAAQgEAAgEgEg");
	this.shape_3.setTransform(79.584,58.924);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF9A9C").s().p("AgNB2QgEgBgDgDIgCgCQgFgFgBgNIgBgTIADgdQACgVAGgZQAOg/AVgvIAFgGQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIADACQABACgBAFIgQBBIgNBCQgDAWgBAUQgBARABAOQADAAADgEQAEgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAQABAEgCAFQgDAIgFAEQgDACgEACIgGABIgGgBg");
	this.shape_4.setTransform(77.7672,66.8441,1.1587,1.0117,-10.408);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F48B73").s().p("AAHA4IgFgEIgBgEIACgGIAFgIIACgFIACgHQAAgEgCgGQgCgMgIgOIgBAEQgFAKgEAMQgCAGAAADIgBAEIAAAFQAAAGgEACIgGAAIgEgFQgBgFAAgIIADgPQAGgTAHgMQAJgQANgJQAFgEAEAAIAGABIADAFQACACgDADIgDAEQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgDABIgIAHIgBADIABACIALAUQAEAGACAJQABAKgBAHIgDALIgEAJIgBAEIgDADQgBACgDABIgDAAIgCAAg");
	this.shape_5.setTransform(120.2031,74.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3C5A9").s().p("ABkGLQgShJgegpQgggfhggGQhhgGgug4Qgug4glieQgligAIiEQgCgmACglIACgQIAKAIQAEAFAwANQAvAMBngEQBegFBTgCQB/ALgCBlQABAHgCAaIgFBMQgCAvAVBfQATAAAHg8QAGgdARgNIAEgCQAJgFAMgBQAKABANAGQAJAEALAJIAAABQAKAOAEAQQAEAPAAARQgBAlgnApQgXAZgWgEIBOEcQgkAdg3AlQgaATggAAQgjAAgqgVgADjAmIgBgBIgBgBIACACg");
	this.shape_6.setTransform(93.3056,77.833);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#804F30").s().p("AE/D6IAAgBIgBgCIAHgXQAEgVAEgjQAEgnADgSQAEgRAIgFQAJAFADAMQACAGACAPQAAAQgCAhQgGA7gQAgIAAABQgGAKgFACQgEgQgKgOgADgCiIACgUQADgPAAgHQABgJACgCQACgCAEgBQAFAAACACQADAEABAIQACAjgBBFIABANQgRANgHAdQgGg2ADg/gAETDlIAFgjQAHg4gGhWQgCgVABgKQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBABABQAAAAABABQAAAAABABQAHAKAEASQAVBTgQBZIgEAQQgMgFgLgBgAjxhDQhIgLgvg1QgIgHACgGQAAgFAFgCQAEgDAFACQAFAAALAKQAvAnA+AIQAZACAngDQAzgEAOABQAEgBADACQAFADgCAEQAAACgDACQgFADgKAEQgxAQguAAQgUAAgUgDgAj5iDQg0gDgcgjQgFgGAAgEQABgEAEgDQAEgBADAAQAEAAALAJQAnAcA3gNQAggHA7ghQAJgGAEAGQADADgFAJQgPAXglARQgoAUglAAIgJAAgAj2i6IgGgEQgDgDACgFQABgEAJgEQAkgIArgmQAQgPALgHQAIgEAGgBIABACQgFARgMARIgMAOQggAgghAKQgKAEgIAAQgHAAgFgDg");
	this.shape_7.setTransform(92.9932,41.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E442A").s().p("AA+GiQglgkg3gvQg6gxgtg2Qgpgxghg3Qglg+gkg5Qglg5gDhBQgCgrANguQgRgUgMgVQgPgcgCgWIAAgCQgFgOAFgPQAFgPAMgJQAVgSAigBIAeABIAQABQAogJBEgXQBSgdAvgDQBAgFBBAcQA+AaAwAyQAtAvAdA/QAcA8AMBEQAGAkgBAbQgBASgJAoQgKAtgHAVQgJAcgOAgIgQAiIgCAFIg6BmQg5Bkg6AXQgdAMgNAAQgPAAACgNg");
	this.shape_8.setTransform(97.7808,52.7515,1.1595,1.1908,-10.4239);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A25050").s().p("AAiAQIgPgEIgWgFQgYgFgGgCQgGgDgFACQgFACgDgBQgFgBACgGQACgEAGgCIAJgDIASABIASACQAWADAHADIAGACIAHABQAHABAEAEQAEADABADQABAFgCACQgDADgHAAIgLgBg");
	this.shape_9.setTransform(79.2246,89.1417);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABgAOQgFgBAAgBQgDgEADgDIAAgDIADgBQAGgCALAAQAIgBAGABQAHACgBADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgDAEIgGADIgMACIgFABIgJgCgAh6AEQgFgBgCgCQgDgGAHgFIADgBQAEgCAEgBQAJgCAEADIADAEQAAADgCAEIgDADIAAAAIgJADIgGABIgEgBg");
	this.shape_10.setTransform(82.0403,61.7167);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABQBGQgJgEgGgJQgJgQAHgLQAHgIAGgDQAQgEASACIACABIgCABIgBADQgDADADAEQABABAEABQAGACAJgBIAMgCQASAQgPARQgEAKgVACIgJABQgPAAgPgGgAiDA5QgHgEgEgJQgIgQAGgMQAEgGAGgDQAMgFANACIAFABIgDABQgGAFACAHQACACAFABQAFABAGgBIAIgDIAAAAQAMAPgJARQgEAKgPACIgJAAQgLAAgKgFgAB4gSIgGgFQgHgGgJAEIgLAEQgGACgDgEQgDgEADgGQAEgJAIgDQAKgEAKACQAHACAMAFQAMAHAAAIQABAFgEADQgEADgFAAQgDAAgGgEgAiVgoQgCgGADgHQADgFAEgFQAKgJAHgCQAFgBAJACQAKADAFADQAIAHgBAJQgBADgEADQgEADgDgBIgFgEIgFgEQgJgFgHAGQgGANgFABIgDABQgFAAgEgFg");
	this.shape_11.setTransform(80.1714,60.0329);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACHAVQgEgDgEgBQgOgJgcAHQgNADgEgHQgHgGAHgIQAEgFAKgCQAegHAaALQAHADAFAEQAFAGgBAGQgBAFgDACQgEADgEAAIgHgCgAheAKQgGgFgDgBQgLgEgTAFIgMACQgJgBAAgFQgBgHAKgFQAHgFALgEIAPgCQAJAAAKADQAIADAGAEQAHAHgCAFQgBALgJACIgBAAQgEAAgFgDg");
	this.shape_12.setTransform(80.2029,64.0469);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AB9AbIgGgGQgHgFgJADIgLAEQgGACgDgEQgDgDADgHQAEgIAIgDQAKgDAKACQAHABAMAFQAMAGAAAIQABAFgEAEQgEACgFAAQgDAAgGgDgAiQAFQgCgGADgGQADgGAEgEQAKgJAHgDQAFgBAJADQAKACAFAEQAIAHgBAIQgBADgEADQgEACgDgBIgFgDIgFgEQgJgFgHAHQgGALgFACIgDAAQgFAAgEgEg");
	this.shape_13.setTransform(79.684,55.4857);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABhBnQgFgIgDgSQgGgeAEgUQAFgOADgFQAJgIALADIABABIgBAEIgBAEQgBAGABAHQABADACACQAEADAFgBIAHgEQAKAegIAgQgDASgMAEIgFAAQgJAAgJgJgAh6BKQgFgIgDgRQgGgeAEgVQAEgMAEgGQAJgIAKACQAAAAABABQAAAAAAABQABAAAAAAQABABABAAIgCACQgFAKACALQABAFAEABQADACAFgCIAGgGIAAAAQAJAdgHAgQgDASgLADIgHABQgJAAgHgJgAB9g2IgGgGQgHgFgJADIgLAEQgGACgDgEQgDgDADgHQAEgIAIgDQAKgEAKACQAHABAMAGQAMAGAAAIQABAFgEAEQgEACgFAAQgDAAgGgDgAiQhMQgCgHADgGQADgGAEgEQAKgJAHgDQAFgBAJADQAKACAFAEQAIAHgBAIQgBADgEAEQgEACgDgBIgFgEIgFgEQgJgFgHAHQgGAMgFACIgDAAQgFAAgEgEg");
	this.shape_14.setTransform(79.684,60.599);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAEIBDAMQgPAIgOAAQgVAAgRgUgAAkgHIhJABQAoghAhAgg");
	this.shape_15.setTransform(79.1628,89.225,1.1446,1.1446);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgjAAIgIgJIABgBIBIgBQAHAHAHAJIgMAHg");
	this.shape_16.setTransform(79.7923,89.6523,1.1446,1.1446);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A25050").s().p("AgMAlQgSgHgIgMQgDgFgBgFIgBgIIAAgBIAAgGIAIAJQAdAhAmgVIAMgIQgHgIgHgHQgggggoAhIgBABIAAgBQACgOAKgLQAGgHAJgBIAMACIAKABQAQACAMAPQAFAGACAGQAEAIgBAHIAAABIgBAJIgBACQgEAJgIAHIgLAGQgFACgFAAQgJAAgMgFg");
	this.shape_17.setTransform(79.7959,89.4589,1.1446,1.1446);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9AD92").s().p("AALAIIgDgCQgGgFgMACQgGABgBgEQgEgCAEgCQACgDAFgBQAMgCALAHQAEABABACQADACgBADIgCADIgEABIgDgBg");
	this.shape_18.setTransform(79.8009,97.3156,1.4188,1.4188);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAPQgQAAgOADIgHACIAAgJIABAAQApgHAdAFIAGAOQgSgIgWAAgAgmgMIACgBQAYgJASAAIAHAAIABACIAJAJQg2AFgFACIgCgIg");
	this.shape_19.setTransform(80.6059,90.4698,1.4188,1.4188);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjgPIAAgBIAGgCIACAHQAFgCA1gEQAGAIAFALIAAABQgegEgoAFIgBAAIAAAKQgHACgEAEQgEgSAJgRg");
	this.shape_20.setTransform(79.3644,91.3565,1.4188,1.4188);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A25050").s().p("AAUAbQgVgHgOAEQgQADgJAHIgEgKQAEgDAHgCIAGgCQAOgEAQAAQAXAAARAJIACAMIgZgHgAgJggQAQAAAKAJIgGgBQgSAAgYAJIgCABIgGACQALgVATABg");
	this.shape_21.setTransform(79.9674,90.7172,1.4188,1.4188);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghgKIABgGIACgMQACgIAEgGIAHgBQAOAAASAHQAKADAHAEIAEAJIAAADQgBAegDAWIgCgEQgEgIgHAAQgJAAgHANQgEgSgKAAQgGAAgFAIQgGAHgDALQgGgZAEgdg");
	this.shape_22.setTransform(80.0787,90.1663,1.2778,1,-9.4464);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAMAHQgTgGgOAAIgHAAIAGgHQAFgGAFgBQAFgBALACQANACADAGQADAFAGANQgHgEgKgDg");
	this.shape_23.setTransform(79.7988,85.6872,1.2778,1,-9.4464);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A25050").s().p("AAEBFQgSgFgRgLIgCgKQADgLAGgHQAFgHAGAAQAKAAAEASQAHgNAJAAQAHAAAEAIIACAEIgBAEQgEAXgHAIIgDAAIgLgBgAAegeQgFgNgDgGQgDgGgNgCQgLgCgFABQgGABgEAGIgGAIQgEAHgCAHIADgOIAFgRQAEgIAJAAQAWgDAMAJQAMAJgBAOIAAASIgEgJg");
	this.shape_24.setTransform(80.3196,90.1721,1.2778,1,-9.4464);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASAGQgdgIgWgCIgKgBQAAgCAKgEQAEgCAKABQAHgBAUAFQASADAFAFIAOANIgbgHg");
	this.shape_25.setTransform(79.2889,86.9078,1,1,-12.71);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAvAeQgIgHgKAAQgOgDgLAHQgGgMgMgCQgNgCgJADQgJADgFAKQgFgGABgLIAGgeQAEgGAGgDIAKABQAXACAcAJIAbAHIAFAHIAAACQgBATgFAMIgBAAIgBAAg");
	this.shape_26.setTransform(79.2547,89.411,1,1,-12.71);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A25050").s().p("AgvAfIgFgHQAFgKAJgDQAJgDANACQAMACAGAMQALgHAOADQAKAAAIAHQABAAAAAAQAAABAAgBQAAAAABAAQAAAAAAAAQgBAEgEAGQgEAGgHAEIgMAFQgEABgRAAQgRAAgcgWgAAwgNIgNgOQgGgFgSgDQgTgFgIABQgJgBgFACQgJAEgBACQgGADgEAGQABgHAEgGQAFgHAEgDQAEgDAHgBIAPgCIARABQALAAASAKQARAKAAALIAAAOIgFgHg");
	this.shape_27.setTransform(79.5002,89.6597,1,1,-12.71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},9).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_1},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},117).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).wait(35));

	// Layer_5
	this.instance_2 = new lib.MomakOb3dolakta("single",0);
	this.instance_2.setTransform(137.65,133.8,0.6696,0.6656,0,-9.239,-7.7521,18.2,18.9);

	this.instance_3 = new lib.MomakOb3odlakta("single",1);
	this.instance_3.setTransform(144.35,172.8,0.5702,0.6553,0,3.8963,3.0465,15.2,11.8);

	this.instance_4 = new lib.MomakOb3shaka("single",0);
	this.instance_4.setTransform(134.4,238.35,0.6643,0.6706,0,28.3249,26.897,16.6,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regY:23,skewX:28.3249,skewY:26.897,x:134.4,y:238.35,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6553,skewX:3.8963,skewY:3.0465,x:144.35,y:172.8,regX:15.2,scaleX:0.5702,regY:11.8}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]}).to({state:[{t:this.instance_4,p:{regY:23.1,skewX:45.8795,skewY:44.45,x:120.75,y:230.55,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:21.4511,skewY:20.6009,x:150.1,y:171.1,regX:15.2,scaleX:0.5702,regY:11.8}},{t:this.instance_2,p:{regX:18.3,scaleY:0.6655,skewX:-18.4325,skewY:-16.9438,x:138.5,y:133.55,scaleX:0.6696,regY:18.9}}]},22).to({state:[{t:this.instance_4,p:{regY:23,skewX:65.8449,skewY:64.4173,x:108.15,y:212.7,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:41.4163,skewY:40.5674,x:156,y:166.85,regX:15.3,scaleX:0.5701,regY:11.8}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-28.7157,skewY:-27.2273,x:138.75,y:133.1,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-47.9589,skewY:-46.4719,x:140.4,y:131.4,scaleX:0.6695,regY:18.9}},{t:this.instance_4,p:{regY:22.9,skewX:96.4031,skewY:94.9757,x:100.95,y:171.85,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:71.9743,skewY:71.1248,x:165.35,y:156.7,regX:15.3,scaleX:0.5702,regY:11.8}}]},2).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6243,skewX:-78.9488,skewY:-77.4613,x:141.7,y:126.2,scaleX:0.6695,regY:19.1}}]},3).to({state:[{t:this.instance_4,p:{regY:22.9,skewX:126.6467,skewY:-51.9239,x:138.7,y:59.2,regX:16.7,scaleY:0.6705,startPosition:1,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:151.0772,skewY:-28.0726,x:175.35,y:114.35,regX:15.2,scaleX:0.5701,regY:11.8}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-97.7243,skewY:-96.2395,x:141.5,y:125.05,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regY:22.9,skewX:117.4357,skewY:-61.1341,x:129.1,y:65.9,regX:16.6,scaleY:0.6705,startPosition:1,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:141.8664,skewY:-37.2821,x:174.3,y:114.35,regX:15.3,scaleX:0.5701,regY:11.7}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-97.7243,skewY:-96.2395,x:141.5,y:125.05,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regY:22.7,skewX:117.9415,skewY:-60.6267,x:130.05,y:68.65,regX:16.6,scaleY:0.6704,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6552,skewX:142.3756,skewY:-36.7748,x:174.7,y:117.6,regX:15.3,scaleX:0.5701,regY:11.7}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-93.2242,skewY:-91.7396,x:141.75,y:125.55,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regY:22.9,skewX:116.901,skewY:-61.67,x:130.3,y:72.45,regX:16.6,scaleY:0.6705,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6552,skewX:141.331,skewY:-37.8177,x:175.9,y:120.55,regX:15.2,scaleX:0.5701,regY:11.7}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-88.2569,skewY:-86.7716,x:142.4,y:126.05,scaleX:0.6695,regY:19}}]},3).to({state:[{t:this.instance_4,p:{regY:22.8,skewX:116.3883,skewY:-62.1811,x:129.9,y:64.8,regX:16.6,scaleY:0.6704,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6551,skewX:140.8208,skewY:-38.3298,x:175.95,y:112.55,regX:15.2,scaleX:0.5701,regY:11.6}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7273,skewX:-98.9588,skewY:-97.4736,x:142.1,y:125,scaleX:0.6695,regY:18.9}}]},8).to({state:[{t:this.instance_4,p:{regY:22.9,skewX:124.166,skewY:-54.4037,x:134.7,y:54.7,regX:16.6,scaleY:0.6705,startPosition:1,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:148.5978,skewY:-30.5522,x:173.85,y:108.1,regX:15.3,scaleX:0.5701,regY:11.7}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regY:22.8,skewX:125.8997,skewY:-52.6723,x:136.65,y:53.5,regX:16.6,scaleY:0.6704,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6551,skewX:150.3319,skewY:-28.8193,x:174.15,y:108.1,regX:15.3,scaleX:0.5701,regY:11.6}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regY:22.8,skewX:116.3883,skewY:-62.1811,x:129.9,y:64.8,regX:16.6,scaleY:0.6704,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6551,skewX:140.8208,skewY:-38.3298,x:175.95,y:112.55,regX:15.2,scaleX:0.5701,regY:11.6}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7273,skewX:-98.9588,skewY:-97.4736,x:142.1,y:125,scaleX:0.6695,regY:18.9}}]},9).to({state:[{t:this.instance_4,p:{regY:22.9,skewX:116.901,skewY:-61.67,x:130.3,y:72.45,regX:16.6,scaleY:0.6705,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6552,skewX:141.331,skewY:-37.8177,x:175.9,y:120.55,regX:15.2,scaleX:0.5701,regY:11.7}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-88.2569,skewY:-86.7716,x:142.4,y:126.05,scaleX:0.6695,regY:19}}]},2).to({state:[{t:this.instance_4,p:{regY:22.8,skewX:115.9002,skewY:-62.6721,x:129.45,y:73.25,regX:16.6,scaleY:0.6704,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6551,skewX:140.3315,skewY:-38.8186,x:175.85,y:120.6,regX:15.1,scaleX:0.5701,regY:11.6}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-88.2569,skewY:-86.7716,x:142.4,y:126.05,scaleX:0.6695,regY:19}}]},3).to({state:[{t:this.instance_4,p:{regY:22.8,skewX:116.3883,skewY:-62.1811,x:129.9,y:64.8,regX:16.6,scaleY:0.6704,startPosition:1,scaleX:0.6642}},{t:this.instance_3,p:{scaleY:0.6551,skewX:140.8208,skewY:-38.3298,x:175.95,y:112.55,regX:15.2,scaleX:0.5701,regY:11.6}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7273,skewX:-98.9588,skewY:-97.4736,x:142.1,y:125,scaleX:0.6695,regY:18.9}}]},9).to({state:[{t:this.instance_4,p:{regY:22.9,skewX:124.166,skewY:-54.4037,x:134.7,y:54.7,regX:16.6,scaleY:0.6705,startPosition:1,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:148.5978,skewY:-30.5522,x:173.85,y:108.1,regX:15.3,scaleX:0.5701,regY:11.7}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regY:22.9,skewX:124.166,skewY:-54.4037,x:134.7,y:54.7,regX:16.6,scaleY:0.6705,startPosition:1,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:148.5978,skewY:-30.5522,x:173.85,y:108.1,regX:15.3,scaleX:0.5701,regY:11.7}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6243,skewX:-78.9488,skewY:-77.4613,x:141.7,y:126.2,scaleX:0.6695,regY:19.1}}]},14).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-47.9589,skewY:-46.4719,x:140.4,y:131.4,scaleX:0.6695,regY:18.9}},{t:this.instance_4,p:{regY:22.9,skewX:96.4031,skewY:94.9757,x:100.95,y:171.85,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:71.9743,skewY:71.1248,x:165.35,y:156.7,regX:15.3,scaleX:0.5702,regY:11.8}}]},3).to({state:[{t:this.instance_4,p:{regY:23,skewX:65.8449,skewY:64.4173,x:108.15,y:212.7,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:41.4163,skewY:40.5674,x:156,y:166.85,regX:15.3,scaleX:0.5701,regY:11.8}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-28.7157,skewY:-27.2273,x:138.75,y:133.1,scaleX:0.6696,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regY:23.1,skewX:45.8795,skewY:44.45,x:120.75,y:230.55,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:21.4511,skewY:20.6009,x:150.1,y:171.1,regX:15.2,scaleX:0.5702,regY:11.8}},{t:this.instance_2,p:{regX:18.3,scaleY:0.6655,skewX:-18.4325,skewY:-16.9438,x:138.5,y:133.55,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regY:23.1,skewX:29.066,skewY:27.6386,x:134,y:238.15,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6552,skewX:4.6364,skewY:3.7885,x:145,y:172.8,regX:15.3,scaleX:0.5702,regY:11.8}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.9439,skewY:-8.4592,x:137.75,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regY:23,skewX:28.3249,skewY:26.897,x:134.4,y:238.35,regX:16.6,scaleY:0.6706,startPosition:0,scaleX:0.6643}},{t:this.instance_3,p:{scaleY:0.6553,skewX:3.8963,skewY:3.0465,x:144.35,y:172.8,regX:15.2,scaleX:0.5702,regY:11.8}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},4).wait(90));

	// Layer_4
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EB7965").s().p("AiCIqQgIgEgIgDIAGhJQADgugDiIIgJkYQgFicAJhiQAUjrB0iAQARACAVAFQBPAQAsAeQhDBGgpCYQgsCdADEIQACCNAUCdQAQB2ALBjQhrgQhLgkg");
	this.shape_28.setTransform(110.7107,166.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#647081").s().p("ABJJjIg4gHQhrgQhLgkQgIgEgIgDQgngWg4gnQgfgSgHgSQgFgKgBgXIABgMQACgxALhcQAMhjADgsQACgjAChDQAGjDADgtQAJiJAWhoQAOhIAWghQAZgjAqgEQAqgEAQAAQAQAAAaAFQASACAVAFQBOAQAsAeIBGAeQA3AXAvA5QAwA6gYB5QgZB6gFBIQgGBHACDZQACDZAPCQQguASgZAGQgaAHghACQgbACghAAIghgCg");
	this.shape_29.setTransform(114.2108,166.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).wait(200));

	// Layer_1
	this.instance_5 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_5.setTransform(122.6,264.15,0.4984,0.5129,0,-3.7626,0,36.2,139.6);

	this.instance_6 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_6.setTransform(93.75,246.2,0.4985,0.5131,0,2.2208,6.3489,36.5,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(200));

	// Layer_3
	this.instance_7 = new lib.MomakOb3dolakta("single",0);
	this.instance_7.setTransform(94.8,112.7,0.6171,0.6535,0,1.1239,2.6105,14.8,11.9);

	this.instance_8 = new lib.MomakOb3odlakta("single",1);
	this.instance_8.setTransform(95.2,158.35,0.5255,0.6039,0,14.6152,13.7618,15.3,12.1);

	this.instance_9 = new lib.MomakOb3shaka("single",1);
	this.instance_9.setTransform(77.2,215.45,0.6642,0.6705,0,34.2459,32.8172,17,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(200));

	// Layer_8
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,51,51,0.298)").s().p("AggCmQg6hRhugSQhFgKgmgVQgmgVgShLQgShNB1g2QB0g3AMgDQCagdBKBYQBLBWAcAMQDpAphVCyQgWAvgtAdQhVA2hGAAQhaAAg/hbg");
	this.shape_30.setTransform(103.6097,316.4268);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.2,1.5,137.39999999999998,340.7);


(lib.devojkaobicna11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F7D3BE").s().p("ABtBUQgFgDgEgFQgDgFAAgHQgBgGADgFQACgGAFgEQAFgFAHgCQAEgBAJABQANABAGACQAKADAEAIQAEAFgBAJQAAAKgGAFQgDADgHABIgLABIgQACIgDABQgHAAgFgDgAiagKQgEgCgEgEQgFgGAAgMQAAgHADgMIAEgTIABgFIACgFQADgEAJAAQAIABADADQAEAEAAAKQABAVgFAUQgDAOgIADIgEABIgFgBg");
	this.shape.setTransform(17.7615,87.8969,1.7366,1.7366,-8.0188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6CwQgugdgHgVQAEgFAHgCQAIgDAMgBQAWgBAXAPQAQAKALANQAIAJAAAHQAAAGgDAJIgGAPQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgJAAglgXgABjg4QgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgDgEQgCgFACgFQACgEACgCQABAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIACAAQAFABACADQADAEgCAHQgBAEgDADQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgBAAIgCAAgAhWiwQgDgCgBgEIAAgHQABgFAFgDQACgBADAAIABAAIAEABIADADIACAFIAAAFQgCAGgFACIgBABIgEAAIgFgBg");
	this.shape_1.setTransform(18.5212,85.8332,1.7366,1.7366,-8.0188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABTBuQgEgCgCgDQgEgFgCgKQgEgTADgSQADgTAKgQQAFgHAEgDQADgCADAAQAEAAACACQAFACABAIQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgDABgBAEQgCAGACAEIACAEQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAEAAQgBAXgEAZQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhgHQgDgCgDgDQgDgFgCgKQgEgTADgSQADgTAKgQQAEgHAFgCIAGgDQADAAADACQAFACABAHIgBAAQgDAAgCACQgEACgCAGIAAAHQACAEACABIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_2.setTransform(14.5789,69.1051,1.7366,1.7366,-8.0188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#815451").s().p("ACBBrQgEgEAAgHQgBgCABgKQADgRgJgQQgIgQgPgLIgJgJQgEgFACgFQABgEADgBQAEgBAEAAQAFAAAIAEQAQALALARQAKASAEAUQACAQgDALQgDAHgFADQgDACgDAAQgEAAgDgBgAiQg6QgFgBgBgFQgBgFABgFQADgKAIgHQAHgHALgEQAMgFANAAQANAAALAEQAHADADADQAFAFgCAGQgBAEgEABIgIACIgIgBIgIgDQgLgDgKAEQgKAEgHAIIgEAEIgDAFIgFADIgDABIgDgBg");
	this.shape_3.setTransform(16.2698,53.2018,1.7366,1.7366,-8.0188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF9A9C").s().p("AgYBWQgMgEgFgGQgEgFgBgJQAAgGAEgOQARg7Adg5QAEgHACgCIAGgDQADgBADABQAGABACAGQAAADgBAGIgGAWIgSAwIgQAyQgCAHABAFIAZAAQAOABAKADQAIACABADQABACAAADIgDAEQgEADgGACIgNACIgWAAQgOAAgJgBg");
	this.shape_4.setTransform(10.8171,79.9294,1.7366,1.7366,-8.0188);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3C5A9").s().p("ABdF3QgOhNgtgdQgxgBhMgaQhMgbgqgsQgpgsgThYQgShYAOhkQAPhkAZhxIAKgtQAVAIAZAFQBIAMBIgEQBcCBCXAWQgHBUAoBWQhADVAeBhQAZBSAuAzQgyAegtAAQgwAAgsghg");
	this.shape_5.setTransform(36.1489,88.9119,1.7366,1.7366,-8.0188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#926461").s().p("AgdBZQhCgWgugzQgLgMgDgJQgBgEACgDQADgDAHAEQAMAHAZATQAXARANAIQA9AlBWgDIAZAAQANABAKAGQAAAHgHAFQgFACgJACQgaAFgaAAQgpAAgngNgAAXA1QgfgCgfgNQg4gXgvg0QgQgSgDgPQgBgIAFgDQAFgCAHAIQAFAGAOAMQAgAcATANQAdAUAcAJQARAGAoAHQAlAGAUAIQgDADgHACQgZAIgbAAIgLAAgABQATQg5gKgwgYQg1gbgjgpQgIgKAEgFQADgEAGABIAIAFIAgAYQATAOAOAJQAeARAnANQAcAJAuAKIAcAGQAPAFALAHQgRAFgXAAQgTAAgXgEg");
	this.shape_6.setTransform(2.6517,1.1089,1.7366,1.7366,-8.0188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#815451").s().p("ABeJQQl3inhUhPQgOgDgPgGQgigMgbgVQgdgWgSgdQgWgjgJgxQgGgnADg0QAIiXBCiMIACgDQhGgtALhuQAMh2BuglQBSgbBXgJQAugkAygRQDDhDCGCJQAxANAqAXQBKAqAzBJQBbCFgiCdQAMB7gOBNQAeBFAcBgQAbBgghBTQgiBTgvAqQhQBJhiAAQhOAAhZgug");
	this.shape_7.setTransform(67.6723,48.4352,1.7366,1.7366,-8.0188);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A25050").s().p("AAsAjQgHgCgJgLQgNgTgPgHQgUgLgRAJIgLAGIgGAAQgDgBgBgCQgCgEADgGQAGgKAMgGQALgFAMAAQAVAAAWARQAPAKALANQAIAJgBAHQAAAGgFAEQgEADgFAAIgCAAg");
	this.shape_8.setTransform(13.8642,114.5445,1.7366,1.7366,-8.0188);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABgA/IgEgCIgGgDIgGgFQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAABgBQABgCAHACQABgBAFADIABAAIAFADIAFAEQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAACIgHABIgDgBgAhXgwIgFgCIgGgDIgFgFQgBgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQACgDAGADQACgBAEADIACAAIAFACIAEAEQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAIAAADIgIABIgCgBg");
	this.shape_9.setTransform(18.1226,66.9092,1.7366,1.7366,-8.0188);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABlBTIgEgBIgDgBIgHgEIgIgHQgGgFgCgGQgEgHAAgEIgBgDIAAAAIAAgCQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQACgIAMgDQAFgBAGACIACAAIAGACQAAAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQADABAEACQAFAEADAFIgBAAQgFgDgBABQgHgDgBADQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAABIAGAFIAGADIAEACQABALgDALIgFAGIgCAAIgIgBgAhSgdIgEgBIgEgBIgGgEIgJgGQgFgFgDgGQgEgHAAgEIgBgDIABgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQADgIAMgDQAEgCAHACIACAAIAFACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAEAAAEADQAFADADAFIgCAAQgEgDgCABQgGgCgCACQAAABAAAAQAAAAABABQAAAAAAABQAAABABAAIAFAFIAGADIAFACQAAALgDAMIgEAFIgCAAIgIgBg");
	this.shape_10.setTransform(14.4528,68.7618,1.7366,1.7366,-8.0188);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#815451").s().p("AB8BVQgEgBgEgDIgFgHIgEgHQgGgJgKgEQgKgEgKABIgGABIgGABQgDAAgCgBIgFgDQgCgFACgEQACgFAFgDQAIgFAMAAQAJAAALAEQALAEAKAJQAKAIAGALQADAHAAAEQAAAHgFAEIgDABIgEgBgAg8gbQgEgBgEgDIgEgGIgFgHQgFgJgKgFQgLgEgKACIgFAAIgGABQgDABgDgBIgEgEQgCgEACgFQACgEAEgDQAJgGALABQAKgBAKAEQAMAFAKAJQAJAIAGALQADAGABAFQAAAHgFADIgEABIgEgBg");
	this.shape_11.setTransform(15.747,56.5194,1.7366,1.7366,-8.0188);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgOAAgJgCg");
	this.shape_12.setTransform(11.0109,81.3051,1.7366,1.7366,-8.0188);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghgSYAAAAACAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAGgBAAAAIAAAAYAAAAgDgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgFAAAAAAIAAAA");
	this.shape_13.setTransform(32.2957,74.7114,1.7366,1.7366,-8.0188);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgigSYAAAAADAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAFgBAAAAIAAAAYAAAAgCgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgGAAAAAAIAAAA");
	this.shape_14.setTransform(-2.3424,61.0017,1.7366,1.7366,-8.0188);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7D3BE").s().p("ABsBUQgFgCgEgGQgDgFAAgGQgBgGADgGQACgFAFgEQAFgGAHgBQAEgBAJAAQANABAGACQAKAEAEAHQAEAGgBAIQAAALgGAFQgDADgHABIgLABIgQACIgDAAQgHAAgFgDgAiYgKQgFgCgDgEQgFgGAAgMQAAgHACgMIAEgTIABgFIADgFQADgEAJAAQAHABAEADQAEAEAAAKQABAVgFAUQgEAOgHADIgFAAIgEAAg");
	this.shape_15.setTransform(17.6191,85.3302,1.7366,1.7366,-8.0188);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#815451").s().p("AB/BPQgEAAgEgDIgFgGIgFgHQgHgIgLgDQgKgDgKACIgGACIgFABIgGAAQgEgBgBgCQgDgEACgFQACgEAEgEQAIgGALgBQAJgBALADQANADAKAHQALAHAGALQAFAGAAAEQACAHgFAEQgCACgDAAIgDgBgAg7gaQgEAAgEgDIgFgGIgFgHQgHgIgKgDQgLgDgKACIgFACIgGABIgGAAQgDgBgBgCQgDgEACgFQABgEAFgEQAIgGAKgBQAKgBALADQAMADALAHQAKAHAHALQAEAGABAEQABAHgFAEQgCACgCAAIgEgBg");
	this.shape_16.setTransform(15.2068,60.4366,1.7366,1.7366,-8.0188);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNADIgWAAQgOAAgJgCg");
	this.shape_17.setTransform(10.862,82.1152,1.7366,1.7366,-8.0188);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A25050").s().p("AAvAfQgHgCgNgOQgOgOgSgEQgSgGgLAHIgNAJQgDABgDAAQgEABgDgDQgDgDADgIQACgJANgHQAMgHAMgBQAVgDAUALQAUALALAKQALAJABAGQAAAHgFAFQgEAEgFAAIgCAAg");
	this.shape_18.setTransform(13.2519,111.321,1.7366,1.7366,-8.0188);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABZBHQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgDgEQgCgFACgFQACgEACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAIACAAQAFABACADQADAEgCAHQgBAEgDADQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgBAAgAhggwQgDgCgBgEIAAgHQABgFAFgDQACgBADAAIABAAIAEABIADADIACAFIAAAFQgCAGgFACIgBABIgEAAIgFgBg");
	this.shape_19.setTransform(17.1989,63.5319,1.7366,1.7366,-8.0188);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A25050").s().p("AgMAlQgSgHgIgMQgDgFgBgFIgBgIIAAgBIAAgGIAIAJQAdAhAmgVIAMgIQgHgIgHgHQgggggoAhIgBABIAAgBQACgOAKgLQAGgHAJgBIAMACIAKABQAQACAMAPQAFAGACAGQAEAIgBAHIAAABIgBAJIgBACQgEAJgIAHIgLAGQgFACgFAAQgJAAgMgFg");
	this.shape_20.setTransform(13.1926,114.285,1.7366,1.7366,-8.0188);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhgCpIBEAMQgPAJgOAAQgVAAgSgVgAgeCdIhJACQAogiAhAggABbgvQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgEQgCgEACgGQABgEADgBQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAheinQgCgBgCgEIAAgHQACgGAEgCQACgCADAAIABAAIAEABIAEAEIACAEIgBAFQgCAGgEADIgCAAIgEABIgFgCg");
	this.shape_21.setTransform(19.6172,83.9654,1.7366,1.7366,-8.0188);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhPCzIgIgKIABAAIBJgCQAHAHAGAJIgLAIgABTAfQgEgCgCgDQgEgFgCgLQgEgRADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhWQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_22.setTransform(16.4975,82.7243,1.7366,1.7366,-8.0188);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#815451").s().p("AB5BaQgCgCgFgKQgHgPgQgJQgPgIgTgCIgMgDQgGgCgCgFQgBgDADgEQABgDAEgDQAFgCAIgBQAVABARAJQASAJAOAPQALAMADALQACAJgDAEQgBAEgDACIgGACQgFgBgEgFgAhBgmQgEgBgEgDIgFgGIgEgHQgGgJgKgFQgKgEgKACIgGAAIgGABQgDABgCgBIgFgEQgCgEACgFQACgEAFgDQAIgGAMABQAJgBALAEQALAFAKAJQAKAIAGALQADAGAAAFQAAAHgFADIgDABIgEgBg");
	this.shape_23.setTransform(18.1184,49.0389,1.7366,1.7366,-8.0188);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgsgGIBMAcQgygBgagbgAgmgUQAQgDAUAHQAbAIAUARg");
	this.shape_24.setTransform(12.5971,113.2212,1.7365,1.7365,-8.0186);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAeAWIhMgdIgIgJQAGgEAIgBIBTAdIAMANIgUABIgFAAg");
	this.shape_25.setTransform(12.9519,113.2502,1.7365,1.7365,-8.0186);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A25050").s().p("AgkAPQgTgOAAgNIACgHIAIAKQAaAbAxABIAGAAIATgBIgBAFQgGAMgcACIgDAAQgaAAgbgWgAArAGQgUgRgbgIQgUgHgQADQgHABgGADQABgEADgEQAFgIAGAAQAGgBAGABIAPAFQAyANAKAOQAIALgCAKIgMgMg");
	this.shape_26.setTransform(12.9056,113.7076,1.7365,1.7365,-8.0186);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A25050").s().p("AAEBFQgSgFgRgLIgCgKQADgLAGgHQAFgHAGAAQAKAAAEASQAHgNAJAAQAHAAAEAIIACAEIgBAEQgEAXgHAIIgDAAIgLgBgAAegeQgFgNgDgGQgDgGgNgCQgLgCgFABQgGABgEAGIgGAIQgEAHgCAHIADgOIAFgRQAEgIAJAAQAWgDAMAJQAMAJgBAOIAAASIgEgJg");
	this.shape_27.setTransform(13.0859,115.4211,1.7366,1.7366,-8.0188);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgzCgQgTgHgOAAIgHAAIAGgIQAEgGAGgBQAFgBAMADQANACADAFQADAGAFAOQgHgFgKgCgABZgYQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDQgCgFACgFQACgEACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIACAAQAFAAACADQADAFgCAHQgBAEgDACQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCABIgBgBgAhgiPQgDgCgBgEIAAgHQABgGAFgCQACgBADAAIABAAIAEABIADADIACAFIAAAEQgCAGgFADIgBAAIgEABIgFgBg");
	this.shape_28.setTransform(19.5094,79.9324,1.7366,1.7366,-8.0188);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhQCaIAAgFIACgNQADgHAEgHIAGAAQAPgBATAHQAKADAHAEIADAJIAAADQAAAfgDAWIgCgDQgFgJgHABQgJgBgGANQgFgSgLAAQgFAAgGAIQgGAHgDALQgFgZAEgegABTANQgEgCgCgDQgEgFgCgKQgEgSADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAYQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhoQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_29.setTransform(16.9336,85.8195,1.7366,1.7366,-8.0188);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F48B73").s().p("AgXByIgBAAIgCgBQgKgFgFgIQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgNAAgJgCg");
	this.shape_30.setTransform(11.0109,81.3051,1.7366,1.7366,-8.0188);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A25050").s().p("AgvAfIgFgHQAFgKAJgDQAJgDANACQAMACAGAMQALgHAOADQAKAAAIAHQABAAAAAAQAAABAAgBQAAAAABAAQAAAAAAAAQgBAEgEAGQgEAGgHAEIgMAFQgEABgRAAQgRAAgcgWgAAwgNIgNgOQgGgFgSgDQgTgFgIABQgJgBgFACQgJAEgBACQgGADgEAGQABgHAEgGQAFgHAEgDQAEgDAHgBIAPgCIARABQALAAASAKQARAKAAALIAAAOIgFgHg");
	this.shape_31.setTransform(13.0499,114.2361,1.7366,1.7366,-8.0188);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoCkQgegIgWgCIgKgCQABgCAJgDQAEgDAKABQAIgBAUAFQASADAGAFIANAPIgbgIgABagdQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgDQgCgFACgFQABgEADgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAhfiUQgCgCgCgEIAAgHQACgGAEgCQACgBADAAIABAAIAEABIAEADIACAFIgBAEQgCAGgEADIgCAAIgEABIgFgBg");
	this.shape_32.setTransform(19.3511,80.8316,1.7366,1.7366,-8.0188);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AABDFQgHgHgLAAQgOgDgLAHQgHgMgMgCQgNgCgIADQgJADgGAKQgEgGABgLIAFgfQAEgGAHgDIAKABQAWACAeAJIAaAHIAEAHIAAACQgBAUgEAMIgCABIAAgBgABTAYQgEgCgCgDQgEgFgCgKQgEgSADgSQADgTAKgQQAFgHAEgDQADgCADAAQAEAAACACQAFACABAIQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgDABgBAEQgCAGACAEIACAEQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAQgBAXgEAYQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhdQgDgCgDgDQgDgFgCgKQgEgTADgSQADgTAKgQQAEgHAFgCIAGgDQADAAADACQAFACABAHIgBAAQgDAAgCACQgEACgCAGIAAAHQACAEACABIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_33.setTransform(16.6598,83.8764,1.7366,1.7366,-8.0188);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A25050").s().p("AAgAgQghgYgqgNQgGgCgDgFQgDgGACgGQACgGAGgDQAFgDAGADQAuAPAlAaQAFAEABAGQABAGgEAFQgDAFgGABIgCAAQgGAAgDgDg");
	this.shape_34.setTransform(12.2115,114.5756,1.7365,1.7365,-8.0186);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#815451").s().p("AB9BYIgFgNQgEgPgQgMQgNgKgSgGIgMgEQgFgDgCgFQAAgDADgEQACgDAEgCQAFgBAJAAQAUAFAPALQARALAMARQAJAPABALQAAAIgDAEQgCAEgDABIgHACQgFgCgCgGgAhBgsIgJgEIgGgEIgFgHQgHgIgKgDQgLgDgKAEIgGABIgFACQgDABgDgBQgDgBgBgCQgDgEABgFQACgEADgEQAIgHAMgBQAJgCALACQAMADALAIQALAGAHAKQAEAGABAEQABAHgFAFIgEABIgCAAg");
	this.shape_35.setTransform(16.8635,52.6184,1.7366,1.7366,-8.0188);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A25050").s().p("AA0AaIAAABIAAADQgLgRgGgGQghgggmAYIgBAAIgBABIgMAIIgBABIAAgBQACgQALgKQAKgLAHAAQAGgBAJADIANABQATACAOASQAFAGADAHQADAHABAQg");
	this.shape_36.setTransform(12.6931,114.5129,1.7366,1.7366,-8.0188);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhmCuQAogYAhAgQgpgHgggBgABagoQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDQgCgFACgFQACgEACgCQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAIACAAQAFAAACADQADAFgCAHQgBAEgDACQgBABAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIgCABIgBgBgAhfifQgDgCgBgEIAAgHQABgGAFgCQACgBADAAIABAAIAEABIADADIACAFIAAAEQgCAGgFADIgBAAIgEABIgFgBg");
	this.shape_37.setTransform(19.7035,82.711,1.7366,1.7366,-8.0188);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgJDIIhKgMQgKgEgFgGIABgBIAMgIIABgCIABAAQAgABAoAIQAGAGAKARIAAAAIgJABIgFAAgABTAWQgEgCgCgEQgEgFgCgKQgEgRADgTQADgTAKgQQAFgHAEgCQADgCADAAQAEgBACACQAFADABAHQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIAAIgCAAQgDAAgCgBgAhhhfQgDgCgDgEQgDgFgCgKQgEgSADgTQADgTAKgPQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAHQACAEACACIAFABIAEAAQAAAXgFAZQgBAKgDAFQgFAIgHAAIgCAAQgDAAgDgBg");
	this.shape_38.setTransform(16.7263,84.3483,1.7366,1.7366,-8.0188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:17.7615,y:87.8969}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_9},{t:this.shape_8}]},20).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_8},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_19},{t:this.shape,p:{x:17.7615,y:87.8969}},{t:this.shape_18}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_23},{t:this.shape_12},{t:this.shape_22},{t:this.shape_21},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_20}]},12).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_23},{t:this.shape_12},{t:this.shape_2},{t:this.shape_19},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_23},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_27}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_23},{t:this.shape_30},{t:this.shape_33},{t:this.shape_32},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_31}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_30},{t:this.shape_35},{t:this.shape_2},{t:this.shape_19},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_34}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_23},{t:this.shape_30},{t:this.shape_38},{t:this.shape_37},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_36}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_19},{t:this.shape,p:{x:17.7615,y:87.8969}},{t:this.shape_18}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_9},{t:this.shape_8}]},25).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_8},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape,p:{x:17.5677,y:86.5212}},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_19},{t:this.shape,p:{x:17.7615,y:87.8969}},{t:this.shape_18}]},2).wait(105));

	// ruka_L
	this.instance = new lib.Devojkao1shaka1("single",1);
	this.instance.setTransform(144.1,355.7,1.1424,1.1424,0,-9.7216,170.2784,16.2,23.2);

	this.instance_1 = new lib.Devojkao1dolakta1("single",0);
	this.instance_1.setTransform(121.8,178.55,1.1426,1.2381,-7.4155,0,0,15.2,16.2);

	this.instance_2 = new lib.Devojkao1odlakta1("single",0);
	this.instance_2.setTransform(139.2,253.75,1.1424,1.0297,-1.7374,0,0,14.8,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regY:11.3,rotation:-1.7374,x:139.2,y:253.75}},{t:this.instance_1,p:{regX:15.2,regY:16.2,rotation:-7.4155,x:121.8,y:178.55}},{t:this.instance,p:{regX:16.2,scaleX:1.1424,scaleY:1.1424,skewX:-9.7216,skewY:170.2784,x:144.1,y:355.7,regY:23.2}}]}).to({state:[{t:this.instance_2,p:{regY:11.5,rotation:-5.1481,x:140.1,y:253.6}},{t:this.instance_1,p:{regX:15.3,regY:16.3,rotation:-8.1225,x:121.95,y:178.7}},{t:this.instance,p:{regX:16.1,scaleX:1.1423,scaleY:1.1423,skewX:-13.1313,skewY:166.8687,x:151.2,y:354.9,regY:23.2}}]},44).to({state:[{t:this.instance_2,p:{regY:11.4,rotation:-9.1682,x:141.45,y:252.85}},{t:this.instance_1,p:{regX:15.3,regY:16.2,rotation:-9.1483,x:122.05,y:178.5}},{t:this.instance,p:{regX:16.2,scaleX:1.1423,scaleY:1.1423,skewX:-17.1529,skewY:162.8471,x:159.55,y:353.25,regY:23.2}}]},2).to({state:[{t:this.instance_2,p:{regY:11.4,rotation:-16.9081,x:145.3,y:252.1}},{t:this.instance_1,p:{regX:15.3,regY:16.4,rotation:-12.3905,x:122,y:178.95}},{t:this.instance,p:{regX:16.1,scaleX:1.1424,scaleY:1.1424,skewX:-24.8925,skewY:155.1075,x:176.8,y:349.1,regY:23.2}}]},2).to({state:[{t:this.instance_2,p:{regY:11.3,rotation:-17.6533,x:147.95,y:250.85}},{t:this.instance_1,p:{regX:15.3,regY:16.2,rotation:-14.1327,x:121.9,y:178.65}},{t:this.instance,p:{regX:16.9,scaleX:1.1423,scaleY:1.1423,skewX:-36.8368,skewY:143.1632,x:172.85,y:333.1,regY:8.8}}]},3).to({state:[{t:this.instance_2,p:{regY:11.4,rotation:-18.8785,x:149.6,y:250.4}},{t:this.instance_1,p:{regX:15.2,regY:16.2,rotation:-15.3572,x:121.85,y:178.7}},{t:this.instance,p:{regX:16.9,scaleX:1.1423,scaleY:1.1423,skewX:-38.0619,skewY:141.9381,x:176.2,y:332,regY:8.8}}]},5).to({state:[{t:this.instance_2,p:{regY:11.4,rotation:-16.9081,x:145.3,y:252.1}},{t:this.instance_1,p:{regX:15.3,regY:16.4,rotation:-12.3905,x:122,y:178.95}},{t:this.instance,p:{regX:16.1,scaleX:1.1424,scaleY:1.1424,skewX:-24.8925,skewY:155.1075,x:176.8,y:349.1,regY:23.2}}]},42).to({state:[{t:this.instance_2,p:{regY:11.4,rotation:-9.1682,x:141.45,y:252.85}},{t:this.instance_1,p:{regX:15.3,regY:16.2,rotation:-9.1483,x:122.05,y:178.5}},{t:this.instance,p:{regX:16.2,scaleX:1.1423,scaleY:1.1423,skewX:-17.1529,skewY:162.8471,x:159.55,y:353.25,regY:23.2}}]},3).to({state:[{t:this.instance_2,p:{regY:11.5,rotation:-5.1481,x:140.1,y:253.6}},{t:this.instance_1,p:{regX:15.3,regY:16.3,rotation:-8.1225,x:121.95,y:178.7}},{t:this.instance,p:{regX:16.1,scaleX:1.1423,scaleY:1.1423,skewX:-13.1313,skewY:166.8687,x:151.2,y:354.9,regY:23.2}}]},2).to({state:[{t:this.instance_2,p:{regY:11.4,rotation:-2.4443,x:140.15,y:253.7}},{t:this.instance_1,p:{regX:15.3,regY:16.3,rotation:-8.1225,x:121.95,y:178.75}},{t:this.instance,p:{regX:16.1,scaleX:1.1423,scaleY:1.1423,skewX:-10.4284,skewY:169.5716,x:146.45,y:355.5,regY:23.2}}]},2).to({state:[{t:this.instance_2,p:{regY:11.3,rotation:-1.7374,x:139.2,y:253.75}},{t:this.instance_1,p:{regX:15.2,regY:16.2,rotation:-7.4155,x:121.8,y:178.55}},{t:this.instance,p:{regX:16.2,scaleX:1.1424,scaleY:1.1424,skewX:-9.7216,skewY:170.2784,x:144.1,y:355.7,regY:23.2}}]},4).wait(91));

	// torzo
	this.instance_3 = new lib.Devojkao1torzo1("synched",0);
	this.instance_3.setTransform(78.3,255.05,1.1428,1.1428,0,0,0,56.9,106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200));

	// noga_L
	this.instance_4 = new lib.Devojkao1nogadesna1("synched",0);
	this.instance_4.setTransform(45,385.05,1,1,0,0,0,30.7,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(200));

	// ruka_D
	this.instance_5 = new lib.Devojkao1dolakta1("single",0);
	this.instance_5.setTransform(37.4,167.8,1.1425,1.1425,9.9379,0,0,17.5,40.8);

	this.instance_6 = new lib.Devojkao1shaka1("single",1);
	this.instance_6.setTransform(-3.3,308.05,1.1424,1.1424,18.7929,0,0,16.1,23.2);

	this.instance_7 = new lib.Devojkao1odlakta1("single",0);
	this.instance_7.setTransform(32.7,201.9,1.1424,1.1424,18.7929,0,0,14.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regX:14.7,rotation:18.7929,x:32.7,y:201.9,scaleX:1.1424,scaleY:1.1424,regY:11.7}},{t:this.instance_6,p:{regY:23.2,rotation:18.7929,x:-3.3,y:308.05,scaleX:1.1424,scaleY:1.1424,regX:16.1}},{t:this.instance_5,p:{regY:40.8,rotation:9.9379,x:37.4,y:167.8,regX:17.5}}]}).to({state:[{t:this.instance_7,p:{regX:14.8,rotation:23.7684,x:32.8,y:202.15,scaleX:1.1424,scaleY:1.1424,regY:11.7}},{t:this.instance_6,p:{regY:23.3,rotation:23.7684,x:-12.3,y:304.85,scaleX:1.1424,scaleY:1.1424,regX:16.1}},{t:this.instance_5,p:{regY:40.8,rotation:9.9379,x:37.4,y:167.8,regX:17.5}}]},44).to({state:[{t:this.instance_7,p:{regX:14.7,rotation:29.2905,x:32.45,y:203.7,scaleX:1.1424,scaleY:1.1424,regY:11.7}},{t:this.instance_6,p:{regY:23.3,rotation:29.2905,x:-22.25,y:301.6,scaleX:1.1424,scaleY:1.1424,regX:16.1}},{t:this.instance_5,p:{regY:40.8,rotation:9.9379,x:37.4,y:167.8,regX:17.5}}]},2).to({state:[{t:this.instance_7,p:{regX:14.8,rotation:33.2241,x:26.05,y:202.75,scaleX:1.1423,scaleY:1.1423,regY:11.7}},{t:this.instance_6,p:{regY:23.4,rotation:33.2241,x:-35.4,y:296.7,scaleX:1.1423,scaleY:1.1423,regX:16.1}},{t:this.instance_5,p:{regY:40.9,rotation:16.3806,x:34.2,y:168.3,regX:17.5}}]},2).to({state:[{t:this.instance_7,p:{regX:14.8,rotation:32.6947,x:23.9,y:200.8,scaleX:1.1423,scaleY:1.1423,regY:11.7}},{t:this.instance_6,p:{regY:5.8,rotation:50.4128,x:-23.55,y:279.8,scaleX:1.1423,scaleY:1.1423,regX:18.4}},{t:this.instance_5,p:{regY:40.8,rotation:17.8818,x:33.2,y:167,regX:17.6}}]},3).to({state:[{t:this.instance_7,p:{regX:14.8,rotation:33.8786,x:22.7,y:200.5,scaleX:1.1423,scaleY:1.1423,regY:11.7}},{t:this.instance_6,p:{regY:5.9,rotation:51.5969,x:-26.45,y:278.6,scaleX:1.1423,scaleY:1.1423,regX:18.4}},{t:this.instance_5,p:{regY:40.8,rotation:19.0656,x:32.65,y:166.95,regX:17.6}}]},5).to({state:[{t:this.instance_7,p:{regX:14.8,rotation:33.2241,x:26.05,y:202.75,scaleX:1.1423,scaleY:1.1423,regY:11.7}},{t:this.instance_6,p:{regY:23.4,rotation:33.2241,x:-35.4,y:296.7,scaleX:1.1423,scaleY:1.1423,regX:16.1}},{t:this.instance_5,p:{regY:40.9,rotation:16.3806,x:34.2,y:168.3,regX:17.5}}]},42).to({state:[{t:this.instance_7,p:{regX:14.7,rotation:29.2905,x:32.45,y:203.7,scaleX:1.1424,scaleY:1.1424,regY:11.7}},{t:this.instance_6,p:{regY:23.3,rotation:29.2905,x:-22.25,y:301.6,scaleX:1.1424,scaleY:1.1424,regX:16.1}},{t:this.instance_5,p:{regY:40.8,rotation:9.9379,x:37.4,y:167.8,regX:17.5}}]},3).to({state:[{t:this.instance_7,p:{regX:14.8,rotation:23.7684,x:32.8,y:202.15,scaleX:1.1424,scaleY:1.1424,regY:11.7}},{t:this.instance_6,p:{regY:23.3,rotation:23.7684,x:-12.3,y:304.85,scaleX:1.1424,scaleY:1.1424,regX:16.1}},{t:this.instance_5,p:{regY:40.8,rotation:9.9379,x:37.4,y:167.8,regX:17.5}}]},2).to({state:[{t:this.instance_7,p:{regX:14.8,rotation:19.5004,x:32.05,y:201.95,scaleX:1.1424,scaleY:1.1424,regY:11.8}},{t:this.instance_6,p:{regY:23.3,rotation:19.5004,x:-5.3,y:307.65,scaleX:1.1424,scaleY:1.1424,regX:16.1}},{t:this.instance_5,p:{regY:40.8,rotation:10.6451,x:37.2,y:167.8,regX:17.6}}]},2).to({state:[{t:this.instance_7,p:{regX:14.7,rotation:18.7929,x:32.7,y:201.9,scaleX:1.1424,scaleY:1.1424,regY:11.7}},{t:this.instance_6,p:{regY:23.2,rotation:18.7929,x:-3.3,y:308.05,scaleX:1.1424,scaleY:1.1424,regX:16.1}},{t:this.instance_5,p:{regY:40.8,rotation:9.9379,x:37.4,y:167.8,regX:17.5}}]},4).wait(91));

	// noga_D
	this.instance_8 = new lib.Devojkao1nogaleva1("synched",0);
	this.instance_8.setTransform(110.25,291.75,1,1,4.6957,0,0,48.1,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200));

	// Layer_4
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(51,51,51,0.298)").s().p("ADgGkQjTgHhbiIQhdiIi9AQQidAZhhhnQiLiVBFipQBEimDMgOQExgJEgCpQAhATAiAQQDhgVChCsQCNCXiACCQjRDUjMAAIgKAAg");
	this.shape_39.setTransform(75.6828,507.7054);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-61.5,266,611.2);


// stage content:
(lib.sceneSplashMSP = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tip("synched",0);
	this.instance.setTransform(593.25,644.75,0.6945,0.6945,0.2404,0,0,98.8,168.1);

	this.instance_1 = new lib.devojkaobicna11("synched",0);
	this.instance_1.setTransform(364.3,572.45,0.3535,0.3631,0,0,180,76.5,267.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(200));

	// Layer_6
	this.instance_2 = new lib.Superdevojkalebdi("synched",0);
	this.instance_2.setTransform(862.25,304.1,1,1,0,0,0,-502.9,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

	// Layer_5
	this.instance_3 = new lib.Supermomaklebdi("synched",0);
	this.instance_3.setTransform(1052.1,375.25,1,1,0,0,0,65.5,146.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200));

	// portal
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(176,161,235,0.51)","rgba(73,192,255,0.71)"],[0,1],-74.1,0,74.2,0).s().p("AF+RfIgvgUIgFgCIgqgVIgmgUIgDgCIgcgQIgWgOQgbgRgcgSQhmhGhdhYIgKgKQg2g0gyg6IgBgBIgKgKIgug2IgBgCIgDgEIjGkiIgCgGIgNgTIgDgGIgXgqIgNgWIgRgiIgBgBIgjhIIgCgGIAAgBIghhHIgCgHQhFicgpicQgLgpgJgqIgNhCIgCgLIgMhLIgBgMQgFgsgCglQgFg0gBg0IAAgXIABhBQACgsAFgoQAEgqAHglIACgPIAFgSQAKgoAKgjIAGgTQAUg5AcgxQARgBAUABIAEAAQBEACBLAVIAKADQAdAJAgALIANAFIADACIAIADIACABIAFACIABABIADABQAgAOAgAQQAvAWAsAdQGEDwESH6QDiGeApGNQAIBVABBWQAABygPBdIgDATQgVBygsBZIgCADQgHAOgJAPIgXABQhvAAh9gwg");
	this.shape.setTransform(698.95,492.2425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#70CAE3","#5E84C4"],[0,1],-108,161,70.7,-77.3).s().p("ArZUPIgZgTIgYgUIgOgOIgDgDIgZgbIgHgHIgVgaIACAAQCpAADHhlIACgBIAYgNIEaDgIgFACQihBJiNAAQiIAAh0hEgAlwP2QDViFC1jQIFPDMQg2A9g6A4IgLALQh+B2iMBYIg1AggAvLNtIACgBIAxgVIAFgCQAZgLATgLIApgVIAEgCIAegSIEKDUQi8BcifgJQgMAAgKAHIgCAAQgwhfgWh4gArLLiQBthKBkheIALgLQA6g4A2g9IABgBIAKgLIFBDDQitDBjHB8IAAAAIgVAMgABWJaIAaghQB9iiBtjIIAwheIFkCjIgmBOIgTAkIgNAYIgZAsIgDAHIgNAVIgDAGIjTE1IgEAFIgBABgAk5FnIDNkuIADgGIANgVIADgHIAZgrIANgYIATgkIABgBIFYCdQgXAugWAoQhtDIh8CfIgbAigAGyAeQBrjnA0jlIFeB8QgsDzhsD5IgDAHgAAIikIAAgBIAjhMIADgHQBJioArimIFaB6QgyDfhpDngAJkoIQANhJAJhIQAKhiAAhjQAAgxgDgtIE0BBQAJAuAGA2QAIBLAABUIAAAYQgBA3gEA4IgIBWIgCANgAC4qfIAOhGIACgMIAMhQIACgNIAIhWQAEg4ABg3IFDBDQAEA5AAA5QAABagJBhQgIBAgKA9gAJ5wcQgXiwhDh+IAAgBQAXAEAYAGIAwAQIAVAJQAdAMAdASIAIAFQCDBiA9CwIAGAUgADixxQgCgugFgrQgFgsgGgmIgBgDQB8gxBwgCIAAACQAAALAHAMQBBBuAYCcg");
	this.shape_1.setTransform(679.9922,503.4192,0.9375,0.9375,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],-67.7,-135.4,67.7,135.4).s().p("ACRTGQgagMgUgLIgmgUIg2gfQiDhTh2hvIgKgKQg3g0gzg6QgYgbgggnIgdgmIiskAIgDgGIgMgTIgDgHIgXgpQgEgJgJgOIgSgiIgmhPIgjhOQhojvgpjpIgNhXIgHhRQgEg0gBg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAFgEIADgCIAIgFIADgCIACgBIADgCQAagQAcgMQA1gXA4gKQAWgEAdgCIAJAAQAQgBASABQBGACBNAVIAKADQAdAJAgALIAMAFQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAIADIABABIAFACIACAAIADACQgMBEgCBKIgBBYQADCrAlCtIATBUQA0DABbDFIAlBOIAiA+QBeCtBsCOIAVAdIAEADIgBABIA3BDIABAAQCQCmClB2IBTA1QAtAbAkATQAfAQAhAOQgUB/gyBiQgIARgMAUIgFAIQgLATgOARQgWAegbAbQgkAkgsAdIgMAGQhwBEiDAAQiDAAiXhEg");
	this.shape_2.setTransform(678.025,504.6063);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DDEF1").s().p("AGpHJQkroYmPk1IKImEQGdE2ExIjQCvE2BdEvIABACIqUGLIgCABQhdk5i2lCgAqgwBQCHhCCaAAQAcAAAbACIp4F8IgUgDQgigDglAAQimgBiQBNg");
	this.shape_3.setTransform(726.525,402.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],33,-8.8,110.9,152.3).s().p("AETcNIASgPQAtgqAkgzQAcglAXgqQAJgRAFgLQAOgcALgbQBUjNgBknQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFbgBFQQABFwiDDlQgZAqgdAmQhHBdhkA/IgTAMIo1ErIAAABgArczbQg+gog9gcQhBgfg+gYIgKgEQhAgYhAgPQgwgLgvgFIJ5l8IADAAQAuAEAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AjAqAhIqIGEQhjhMhqg/g");
	this.shape_4.setTransform(751.9501,474.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44A6F4").s().p("AumlQIAxhiIAAgCIazP4IAAADIicAigAt1onIBohBIa0P5IhpBBg");
	this.shape_5.setTransform(670.2,644.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4861D4").s().p("AtykyIAAh9IZIO5IAAB+gAtBoUIAAhzIa0P5IgBAAIAABzg");
	this.shape_6.setTransform(664.975,653.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A3CC3").s().p("AKiKoI5Iu6IAAh9IAxhiIAAh1IBohCIa0P5IAADyIhpBCIgBABIiZAjg");
	this.shape_7.setTransform(670.2,650.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C0482").s().p("AimEGQgEgCgDgEQgCgEABgFQACgFAFgCIFEitQAEgDAFACQAFABACAFQACAFgBAEQgCAFgEACIlFCtIgFACIgEgBgAimC2QgFgCgCgEQgCgFABgEQACgFAFgDIFEisQAEgDAFADQAFABACAEQACAFgBADQgCAGgEACIlFCtQgCACgDAAIgEgBgAinBqQgEgCgDgFQgBgDABgGQACgEAEgDIFEisQAFgDAEACQAFACACAFQADAEgCAFQgCAFgEACIlECsQgDACgDAAIgEgBgAilATQgFgCgCgEQgCgFACgEQABgEAEgCIFFitQAEgDAFACQAFABACAFQACAEgBAFQgCAFgEACIlFCsQgCACgDAAIgEgBgAilhAQgFgCgCgFQgCgEABgFQACgFAEgCIFFiuQAEgCAFACQAEACACAFQACAEgBAFQgCAEgEADIlECtIgFABIgEAAg");
	this.shape_8.setTransform(813.1581,675.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7898D0").s().p("AkbFEQAQgIAZgSQANgHAYgRIA9guQAtgmAjgjQA7g2Atg4IBBhTQAXggAegwIAXgnQAdg0Aag3QANgbAHgVIA+giQgcBJgnBLQgnBLgtBBQgbAogcAhQgiAqgjAlQhTBbhsBLIipBXg");
	this.shape_9.setTransform(830.3873,612.1973,0.5267,0.541);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5884B3").s().p("Ak7D8IHJkFQgjAhguAmIg9AuQgWARgOAIQgYARgQAJIgiAWIkUCPQAngkAggkgAh/gaIACgFIIAkkIgXAnQgeAxgWAfIgVAbInuEaQApg/AjhEg");
	this.shape_10.setTransform(819.5231,621.1649,0.5267,0.541);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#536C99").s().p("AkVDbIHvkbIgtA6QguA3g7A2InIEGQA6hCA1hQgAiFhBIIKkrQgHAVgNAbQgaA3gdAzIoAEkQAkhIAdhLg");
	this.shape_11.setTransform(823.3816,615.0242,0.5267,0.541);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A4B3DD").s().p("ACtifQCHhDCZAAQAcAAAcADIp4F6IgUgCQgigDglAAQimAAiQBMg");
	this.shape_12.setTransform(641.975,316.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7A41C1").s().p("AjyijIHlkFIAAIvInlEig");
	this.shape_13.setTransform(811.7,675.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#602BA2").s().p("APSNvIiBhMIAAnlICCg7IABAAIAAAAIBPAqIAAJNgAvxkrIgxg/IAAnhIAFgEIABgCIArgoIBZCgIAAHjg");
	this.shape_14.setTransform(681.55,629.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DDF0F5").s().p("ACRTGQgagLgUgLIgmgUIg2ggQiDhSh2hvIgLgKQg2g1gzg6Ig4hCIgeglIiskBIgCgGIgMgTIgEgHIgWgpQgFgJgIgNIgSgiIgmhQIgkhOQhnjvgpjpIgNhXIgHhRQgFg0AAg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAGgEIACgCIAIgFIACgCIADgBIADgCQAbgQAbgMQA1gXA4gKQAWgEAdgCIAIAAQARgBARABQBHACBMAVIALADQAdAJAfALIANAFIAEACIAIADIABABIAGACIABAAIACACQgLBEgCBKIgBBYQADCsAlCsIATBUQAzDBBbDEIAmBOIAiA/QBfCsBrCPIAWAcIADADIgBABIA3BDIABAAQCRCnCkB1IBTA1QAuAbAjATQAfAQAhAPQgUB/gyBhQgIASgMATIgDAGIgHAMIgUAbQgVAegcAbQgkAjgsAdIgMAHQhwBDiDAAQiDAAiXhEg");
	this.shape_15.setTransform(678,504.8313);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C0482").s().p("AkZB6IIakdIAZBDInlEEg");
	this.shape_16.setTransform(807.775,642.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A4B6DD").s().p("Ah2EsQkroYmQk1IKJmFQGcE3ExIkQCvE1BdEvIABACIqUGLIgBABQhek5i1lCg");
	this.shape_17.setTransform(780.925,418.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8BACC3").s().p("At7NIIAAnjIhaihIAAgBIABAAQhXitg+irQiVmeAAmMQAAhHAFhCIBMAvQAKiiAqh/IAPgpQBQjQCwhmIABAAIASgLQB9hCCQAAQAWAAAUACIA+h8QAvAGAvALQBBAPBAAYIAKADQA+AYBBAgQA8AcA+AoQBqA/BiBMIAcC/QFHElD9HGQCMD3BYD1ICLAzQBUEXAOEQQACAyAAA8IgBBIQgXFyiXDeQgjAwgrAoIgSAQIABAAIAAgBIAEgCIgGAFIiBA6IAAHlgAm42lIgIABQgeACgWADQg4AKg1AYQgbALgbAQIgDACIgCABIgDADIgIAFIgCACIgGADQiJBeg9CxQgPAqgMAzQgLA0gHA9QgHBGAABPIAAAWQABA0AEA1IAHBQIANBYQApDpBoDuIAjBPIAmBPIhGA8IAJATQAIANAHANQABAEAEAEIAIAPIADAGQAGAJADAHQADADABAFIANAWQACACABAEIADAFIC9EZIAdAlIAEAEQAdAkAhAnQA6BBA9A6IALAKQCEB+CTBbIBlA6IAzAZQFRCWD7iWIAQgKIhRiLQArgdAlgkQAbgbAVgeIAUgbIAHgMIADgFQAMgUAJgRQAxhiAUh/QAPhdAAhxQAAhXgJhVQgomLjimfQkSn7mFjwQgrgcgvgXQgggQgggOIgDgBIgBgBIgFgBIgCgCIgIgDIgEgCIgMgEQgggMgdgIIgKgDQhNgWhGgCIgSAAIgQAAgAStQxIgBADIgOAhIgBABIAQglg");
	this.shape_18.setTransform(678.675,520.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#59ACBC").s().p("ADJXqIg0gYIhlg6QiThciEh9IgLgKQg8g7g6hBQgigmgdgkIgEgEIgcglIi+kZIgCgGQgBgEgDgCIgNgWQgBgEgDgDQgDgIgFgIIgDgGIgJgQQgDgEgCgEQgGgNgJgNIgJgSIBHg8IASAiQAIANAEAJIAXApIAEAHIALATIADAGQBwC5BWBpIAEAEIA3BCQA0A6A2A1IAKAKQB3BvCDBSIA2AgIAlAUQAVALAZALQEuCHDgiGIAMgHIBSCLIgRALQh9BKiTAAQiTAAiohLgAQ/CoQhXjziNj4Qj9nGlHkkIgbjAQGQE2ErIYQC2FDBeE4gAzKsXQANirAsiGIARguQBdjvDKh2IAWgMQCPhNCnAAQAlAAAhAEIAUACIg+B7QgUgCgVAAQiRAAh8BDIgSAKIgCABQivBmhRDQIgPApQgqB+gJCjg");
	this.shape_19.setTransform(673.925,489.9438);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAEAEA").s().p("AETcOIASgQQArgoAkgwQCWjeAXlyQACglAAgmQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFaAAFQQABFyiEDkQgYAqgeAnQhHBdhkA+IgTAMIoxEqIgEACIAAABgAHAYkIABgBIAOghIABgDIgQAlgArczbQg/gog8gcQhBggg+gYIgKgDQhAgYhAgPQgwgLgvgGIJ5l7IADAAQAuADAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AkAqAgIqIGFQhjhMhqg/g");
	this.shape_20.setTransform(751.9501,474.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(200));

	// Layer_4
	this.instance_4 = new lib.racunar2("synched",0);
	this.instance_4.setTransform(386.45,957.4,1.0853,1.0853,0,0,0,45,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjuAIICqjAIEyCDIjIDug");
	this.shape_21.setTransform(474.45,865.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjhiTIGbgKIAoElImaAWg");
	this.shape_22.setTransform(438.05,927.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3F2F2").s().p("Aj/BHIBJkAQDoAzDOAMIh+E0QjDgci+hXg");
	this.shape_23.setTransform(475.25,918.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.31)").s().p("AmqCxIF9gJIAih2QDoAyDOAMIh9E2QiVgWiPg1IAPBzImaAVgAhLkiICpjAIE0CCIjIDwg");
	this.shape_24.setTransform(458.625,898.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.459)").s().p("AnVJxQhXgQhAgrQgYgRgZgXIgvgqQhqhch+g4QgxgVglgGQgxgIgmAPQACgSATgKQAQgJAWAAQAtgBA2AVQAkAOA4AgIBNAuQArAcAdAZIAvArQAdAbAUAPQA1ApBFAVQBAATBJABQB7AACRg7QCihDBphpQA7g7AmhFQAphIAOhNQAFgcAEgpIADhEIAMlMQAAgKAEgDQACgCAEABQAEABAAADQABCvgIC2QgDBEgFAnQgIA7gQAuQgXA+g2BGQhiCAiQBQQiQBPihARQgjAEgiAAQgxAAgugIgAkFHLQh9gWhhhNQgrgihRhUQhKhGhAgWQghgLgqgDQgcgCgwAAQingBhLACQAygTBCgGQAmgDBSAAQAxAAAfADQAsADAiALQBGAXBTBOIBFBCQAnAmAgAYQBeBEB3ARQB3AQBtgoQBsgpBPhbQBPhaAahyQAJgqAEg2QACggABhBQABhgAFh6QAAgKAEgHQAEgIAIAAIgDDqQgBBIgCAlQgFA8gKAvQgdB4hWBfQhWBeh0AoQhKAahQAAQgrAAgugIgAjgFFQgWgLgWgSQgRgPgUgXQgegggwg8Qgvg4glgdQgzgphAgZQg+gWhFgHQgrgEggAIQgpAKgRAdQAAgUANgRQANgQAUgIQAegMA0AFQCMAOBfA/QAsAeAyA1IBRBgQAXAcAPAPQAVAWAXAMQA2AfBOgHQBZgIBNg0QBNg0AqhPQAphSANiaIAKh8QAHhFAPg0QABgEAGgDQAEgDABAFIgkE/QgIBFgKAkQgPA7gjA0QgjAzgwAlQgwAlg6AUQg5AUg+ACIgIAAQg2AAgngSgAOUEDQhIgJhGhIQg8g7glhLQgMgWgNghIgXg5QhAighShnQgngxgkgVQgmgWg3gGQglgEg+ADQAkgTAqgDQAqgCAoANQA0ASAwAxQAkAlAmA/QAzBTAmBWIAmBaQAWA0AUAiQA3BiBMAoQAtAXAxABQAzABAogZQAzggAThDQASg9gPhAQgNg3gdgnQgsg9hcgpQgfgNgygRQg8gVgVgIQiAgzhLhPQgrgugZg3Qgag8AAg6QAAgMAHgBQAEAAADAFQACAEAAAFQADBCAkA9QAhA5A3AtQAxAoBBAgQAzAYBKAbQBGAYARAIQAxAUAgAYQAoAfAdAsQAlA5AJBAQAKBEgYA7QgZA9g6AlQgwAegyAAQgMAAgNgCgAhHCmQgugSghgzQgLgTgMgcIgTgyIgxiIIgQgpQgJgXgKgRQgYgoglgdQgmgdgtgLQAogIAqAWQAmATAbAlQAWAdATAuQAFAMAYBFQASAyAlBbQALAcAHALQAKAVANANQAgAgAyACQAvABApgZQAkgWAfgoQAYggAXgvQARgiAHgYQAMgsgGg/QgKhOgDgeQgKhhAThfQADgKADgEQADgDAEAAQAFgBACADQAEAEgDAKQgWBLAFBQQABAJAPBsQAKBHgIAuQgGAogXAuQgPAhgfAvQgNATgJALQgNARgNAKQgSAPgdANQgrARgjAAQgaAAgWgIg");
	this.shape_25.setTransform(357.4597,939.5277);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.459)").s().p("AiOC6QgEgcAIgbIAGgQIAFgLQAIgXAGgJQAGgJATgSIAKgJIAbgbQAPgPAJgOQAGgIABgHIAAgKIgBgLQACgKgBgHIgBgGIgDgGIgBgKQgCgDgHgGQgGgFgBgFQAHgDAIACQAHACAEAHIAEAKIAEATQAHAmgKAbQgGANgNAOQgKAKgPANQgVATgIAJQgPARgHARIgFAPIgHAOIgEAHIgDAHQgCAFAAAIIgFAOQgGANABAOQgFgCgBgJgAgfCIQA2gYArgoQATgRAMgSIAPgaQAHgLADgIQAFgKABgQQAHg+gZgtQgPgbgUgJIgMgEQgIgDgEgCIACgKQAWgBAUARQAPAMAMAXQARAfADAZIABAcIABAbQAAAPgEAMQgEAJgIAPQgKASgIAKQgIALgPARQgSAUgQAMQghAZgmAJIgGABQgFAAgCgEgAhcCEQgCgWAQgSQAGgJASgLIBAguQAMgIAEgEQAHgKAGgEQAIgDADgEIAFgKIAHgMQACgFABgRIABgqQgCgZgMgOIgOgQQgJgKACgJQAMAFAOAOIAIAIQAFAHAEALQAEAOABATIABAiQABATgCAGIgHATQgFALgEAFQgFAHgNAJIhfBHQgQAMgFAJIgIAOQgFAFgFAAIgDAAg");
	this.shape_26.setTransform(404.1083,749.4971);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7EUQgHgGgFgGQgNgOACgLIAjAWQAUAOAPAEQALADAMABIAXgBQAZgBAQgEQAogIApgcQAdgTAoglQAMgLAJACQgPAUgSAUQglAmguAXQgxAYgwABIgEAAQg2AAgigagAgqDjQgWgBgYgKQgkgRgeggQAAgDADgBQADgCADAAQAEABAIAFQAZASAQAIQAYANAVACQAJABAVgDQAbgDAQgGQAZgIAcgWQARgNAdgcQAPgPAHgIIAJgOIAKgPQAEgGAFgCQAGgDAFAEQgQAegaAgQg5BDg+AUQgPAFgWAEQgQACgLAAIgDAAgAhkCLQgLgEgWgNQgUgMgIgJQgHgJgLgSIgGgLQgBgDACgDQACgDADgBQAGAEAGAHIAKAOQAMAOAXAOQATALAMACQAIACATgBIATAAIASgBQAlgEAyggQAZgRAPgPQAUgTAKgVQAFgLADgCQADgEAEgBQAEgCAEACQADABACADQACADgBADQAAAEgDACQgEADgDgBQgKAcgaAYQgSASghAWQgdATgRAHQgcALgvACIgGAAQgXAAgMgDgAh4gyQgTgEgXgRQgJgGgCgFQgCgEABgFQABgEADgCQAFgCAHAEIAIAJQAWAXAwgDQAngDAugRQAbgKA2gbIARgJQAIgGAFgHIAGAAQAEADgDAHQgBAEgGAFQgQAPgTAIIgNAGIgMAJQgJAFgVAJIgtAQQgkAKgmABIgFAAQgNAAgJgDgAiHhoQgQgHAAgKQAFgDAIACIANAEQAbAJAfgCQAegCAagOQAGgDAughQAggXAZgDQAEAAAEABQAFADgBADQgcAGgnAdQgtAjgSAIQgcAMgeAAQgdAAgcgMgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAdgBQAcgBAagLQAxgVAngxQAEgFAGgDQAGgDAEAEQgUAlgfAaQghAbgnAMQgVAGgXAAQgSAAgRgEg");
	this.shape_27.setTransform(299.0833,820.1875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgJBxgkQCBgrBbhPQAdgZA1g5IBDhKQAkgqAaglQBBhgAeh0QAdh1gNh0QAAgIADgGQAEgHAFAEQADABAAAHQAOB2gZBzQgaB2hABgQgVAggmAwQgrA2giAmQgsAxgpAkQhdBPhyAsQh1Ath5ADIgCAAQgiAAgGgTgAlSFgQBMgTAogMQCJgmB6haQB2hWBZh4QBFhdAhhYQASgyAOhAQAIgnAMhOQAGANAAATQABAOgCATQgMBggmBdQglBbg6BQQhvCaixBsQgoAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgMAigEQAmgDATgDQAhgFAmgOQAagKApgVQBTgqBBgrQBJgyA6g5QAlgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg2BehmBtQgmApgdAZQgpAkg4AkQglAXhFAmQggASgTAIQgcAOgYAJQgsAQgwAGQgWACgWAAQgaAAgagDg");
	this.shape_28.setTransform(308.7367,921.6394);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgTgHgYIgnh2QgOgogQgkQgXgyglhAQgYgnguhFIgzhJQgfgpgcgYQgJgJgCgGQgCgFADgFQACgFAFAAQAFAAAHAHQB7CPBaCmQAhA8ASAuQANAfAXBJQAPAyAGAeQAIAtgHAkIgJABQgBgIgBgWgACiDXQABgXgHgbQgEgPgMggIgVgzQhKish2iFQgMgNAGgHQAEgFAHAEQAGACAFAGQCbC9BAC7QAJAcADASQAEAZgGAUgACdAjQgFgWgJgaQgPgsgag1QgzhrhFhgQgKgNgGgGQgKgJgLgDQgEgFAFgGQAEgGAHABQAIAAAMANIAVAaQAmA0AiA6QAnBGAeBLQATAwAJAiQALAqgFAZIgKABQABgTgHgegAC6gXQgDgBgDgDQgCgDgBgKIAAgwQAAgdgCgSQgDgVgGgWQgSg8glhCQgYgngVgXQgdgegigLQgHgCgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgDQADgCAGABQAcAFAfAdQAeAdAXAoQAVAiATAtQAbBBAFArQABAOAAAnQgBAbACAOQADALgFADIgEACIgCgBg");
	this.shape_29.setTransform(357.8915,859.98);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgaAEgiIAIg8QAnkmgVkkIgDgnQALABAEATQAGAgADAlIACBGQACBqgBA6QAABagHBIQgFA7gQB/QgNBtAEBNIAFBEQADAnAAAeQgkh6AJh/gAgnGkQgCglABgYQAAgjADgbQADgfAQhFQAWhkALhCQAPhYADhOQAGiggoi1QgGgagBgOQgCgXAIgQQArCRAJCaQAJCagbCUIgeCQQgRBWgFA7QgCAggCA3QgDA0gJAigAhiGiQAAgcAIg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNABBjQACCBgOBtIgMBQQgbC0gLC2QgNgiAAgugAADFBQADgaALgpQA1iwAWhWQAoiZgGhzQgGiJhGieQgDgFACgHQABgGAFABQACABADAFQBXDGgDCmQgCBJgSBVQgMA2gcBlIhSEkQgDgdAEglg");
	this.shape_30.setTransform(396.2229,836.1609);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgSgPQgegagdgjQgWgbgdgqQgjgxgUghQgOgWgnhHQgXgngHgTQgJgVgHggIgPhBQgBgJACgDQADgEAGABQAFABADAEQACADABAGIABAJQADAwAWA1QAOAiAiA6QAkBBARAZQBRCDB3BjQgCADgEAAQgFAAgIgGgACuE3Qg2gcgyg9QgfgmguhNQhDhtghhEQgyhlgVhZQgDgJACgEQABgEACgCQADgCADAAQAHACACAMQAGAlAPApQAKAdAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHAAAIIgCAAQgFAAgIgEgADDDgQhDghg6hIQgXgcgZgmIgphGQg+hogbg6QgrhfgKhRQgBgHACgCQADgDAEAAQAEABADADQADADABALQAKBFAbBBQAQAlAlBEIA3BjQAuBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgIAAgKgFg");
	this.shape_31.setTransform(297.0719,835.4543);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.459)").s().p("Ah8EfQgPgEgFgGQgDgFABgEQABgDADgBQADgCACABIALADQAPAFASAAQANAAAVgDQAxgIAYgQQASgLAcgeIAWgaQAKgNAQgcIA4hhIADABIACAEQAAAIgHAMIgwBfQgKATgEAFQgGAJgIAIIgpArQgQAQgNAGQgKAFgXAGQglAJgRACQgOACgMAAQgPAAgMgCgAh5B7QgKgBgEgDQgDgBgBgEQgBgEACgDQACgDAKAAQBDAFA+gTQAdgJATgMQALgIASgRQASgTAIgLQAJgNALgWQAVgsARgoQANgeADgVQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAIACAEQABAMgDAMQgBAIgIAVQgVA5gOAdQgKAVgKAOQgMARgSASQgbAZgZALQgUAKghAHQg3AMgrAAIgHAAgAiwgNQgIgEAAgFQAAgCADgCQACgCADAAIALAEQAQAGAegBQAigBAVgDQAdgEAXgLQAjgRAdglQAWgbAXguQANgYAGgRQAIgYACgVIAAgSQABgMACgHIACAAIABACQAEApgDAVQgCAOgIATQgIAWgaAuQgTAigNAPQgMANgUAQQgWARgPAHQgUAJgnAFQgkAEgSAAQgdAAgWgKg");
	this.shape_32.setTransform(367.4143,767.9316);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg+gCg2gaQg6gagkguQgOgSgRgdIglg+QgYgSgQgaIgGgLIgUgUQgfgdg5guQg6gwgigVQg1ghgzgKIgkgFQgVgEgOgHQAhgJAlAFQAiAEAjAPQAcANAiAXQAUAOAlAdQA/AwAlAhIgEgTIgBgGQgNgMgLgOQgfgkgihBQgqhRgQgZQglg4gsgcQgTgNgcgLQgTgIgggJQg5gRgcgHQAYgLAiAGQAXADAlANQAiANASAIQAcANAUAPQAmAdAhA1QAMAWAnBNQAcA7AfAkIAJAKIgDgsQgEg2gGgeQgLgsgYgcQgLgOgUgPQgMgJgYgPIhMgvQBFAPAzAjQA6AoATA6QAKAeACAuIACBOIADAUQAaAVAcAKQAmANA1gFQAYgCBEgNQBmgSBPAFQAQABAzAHIAFgEQBdhLArgbQBRgzBJgMQA2gJB5AMQA8AFAtgBQAhgvAOhHQALg6gChYQgDimgXikQgIg3gCgXQgDgsAIghQArDnAHDuQACA4gCAiQgDAygIAoQgLAwgUAlIgHANQAYgCASgEQBMgTA6g7QAzg0AWhEIgsg9QgggtgQgeQgnhKgLhnQgIhHAFh0IAJBdQAJBeAKAwQAPBNAgA3QAMAVAcAmIAkAyQALgwgBhGQgDh0gchxQgEgPgzioQgjhwgGhLIAqCKQAxCfARBMQAfCEACBtQABBHgNAyQAPAYAQAiQAKAUAWA1QAPAmAHATQAKAhAAAbQABArgUApQgTAngiAfQg7A4heAaQhHAVhqAGIiyALQhkALhGAgQgeAMgrAbIhHAqQhuA8hoAAIgOAAgAl+JUQAYAnAaAUQAZASAkAJQAZAGArAEQAsAEAhgBQAogCAjgJQAxgOBGgsQBVg2AfgPQA1gYBFgLQAxgIBOgEQBVgCArgDQBJgFA1gNQBCgQA1gfQA6gkAhgzQAcgqAAgoQABgVgHgZQgEgOgMgeIgghMQgQgjgRgeQgbBPhDA5QhIA7hYANIgWACQgOASgRAQQgfAcgwAVQgeANg7ATQhfAfg2AMQhTAThFgEQgZgBg0gIIgBAAQgxAlgxAeQg2AggqARQg2AWgyACQg1AEgwgUQAVAmAMAUgAnmG4IAEAJQAYAaASAYIANAJQAtAcBBgEQBMgEBTgtQAsgZBAgxIgsgEQgpgDgzAGQgjAEg4AKQg/AMgdACQgzAEgmgOQgVgHgVgOQAFATAJAQgADyD4Qg4AOg+ArQgWAOhUBEIgJAHQAyAGAcAAQAwABA8gMQAmgIBFgTQBVgXAugVQA9gbAlgoIggAAQgZgCg+gGQgsgEgkAAQg2AAgkAJg");
	this.shape_33.setTransform(336.4273,935.4648);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ8QhEgfgyg3QgYgcgLgaQgNggAHgcQAjBVBIA5QBMA7BXADQA7ACBDgZQArgQBMgqQBVgvAhgPQBEgfA4gHQAugFBIAJIB0ARQBEAJAwABQA+AAA2gPQA9gSApgjQA5gxAXhSQAVhKgJhUQgIhCgdhWQghhdgTg4QhGjKgWjUQgBgPADgKQADgNALgEQgBBuAbB6QAWBkAtB9IA2CZQAcBWAHBGQAIBWgWBLQgaBTg5AzQgsAmg9ATQg2ARhCABQg0ABhFgJQgygHhGgLQg+gJgnADQg3ADhBAcQgmAQhMAsQhNArglAQQhBAcg4AEIgUABQg9AAg9gbgAnVIIQgfgNghgVQgZgQgjgaIgRgOQgJgIgEgIQgFgKABgLQABgMAIgHQA1BPBdAkQBcAkBcgVQA4gMBAglQAVgMBag6QBBgrAygVQBBgcA8AAQAkABA0AMQA5AQAdAGQBuAXA9gsQAegWASgmQAPgjADgpQABgigHgsQgGgfgMgtIg6jlIgRhGQgJgngEggQgJhEAEhWQACgzAMhoQAEAxgHBsQgGBlAHA3QAEAbAIAkIAQA/IA/DlQAPA2AGAeQAIAvgBAmQgBAtgRAnQgSAqggAZQhFAziFgcQgkgHhDgQQg8gLgsAHQgvAIg2AeQgWAMhFAwQgzAigqAXQgzAbgxAQQg3ARg1ABIgDAAQg4AAgwgSgAmHHbQgogKgkgmQgYgagggyQgNgTgEgNQgIgTAFgPQANANAwBHQAkA1AkARQAiARAugEQAggCAygPQArgMAegMQAogPAegRQAWgNAsghQAqggAYgOQA6giBEgKQBEgKBCAQQA2ANAOABQAmAEAWgUQARgPAGgbQAEgUgBgfQgDgugGg5IgNhmQgMhygBiSQgBhRAFi1QAIANADASQACALAAAWQABAogCCkQgBB8AJBPQABAPATB3QAMBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgEQgSgDgqgKQgogKgVgBQhKgFhaAzQgZAOguAhQgvAggZAOQhlA7hxAQQgYAEgTAAQgVAAgPgEg");
	this.shape_34.setTransform(377.8977,890.7097);

	this.instance_5 = new lib.Serverc("synched",0);
	this.instance_5.setTransform(241.25,877.95,1,1,0,0,0,53.5,128.2);

	this.instance_6 = new lib.Serverc("synched",0);
	this.instance_6.setTransform(310.2,837.65,1,1,0,0,0,53.5,128.2);

	this.instance_7 = new lib.Serverc("synched",0);
	this.instance_7.setTransform(379.1,797.05,1,1,0,0,0,53.5,128.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgIBxglQCCgrBahPQAdgZA1g5QAxg0ASgWQAkgqAaglQBChgAdh0QAdh0gMh1QgBgIADgGQAEgHAFAEQADACABAGQANB2gZBzQgaB2hABgQgVAgglAwQgsA2giAnQgrAwgqAkQhdBPhyAsQh1Ath4ADIgCAAQgjAAgGgTgAlSFgQBNgTAngMQCJgmB7haQB1hWBZh4QBFhdAhhYQASgxAOhBQAIgnAMhOQAGANABATQAAAPgCASQgMBhgmBdQglBag6BQQhvCaiwBsQgpAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgLAigFQAngDASgDQAhgEAmgPQAagKApgVQBTgqBBgrQBKgyA6g5QAkgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg1BehnBtQglApgeAZQgpAkg4AkQglAXhFAmIgyAbQgdAOgYAIQgsARgwAFQgWADgWAAQgaAAgagEg");
	this.shape_35.setTransform(164.7974,843.6894);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgSgHgYIgnh3QgPgogQgkQgWgyglhAQgZgnguhFQgjg0gPgUQgfgpgcgZQgKgJgBgGQgCgFADgFQACgEAFAAQAFgBAGAIQB8COBaCmQAgA8ATAuQAMAfAXBJQAQAzAGAdQAIAtgHAkIgJABIgCgegAChDXQABgXgGgaQgEgQgNggIgUgzQhKirh3iGQgMgNAHgHQAEgFAHAEQAFACAGAGQCbC9A/C7QAKAcACASQAEAZgFAVgACdAjQgGgWgJgaQgOgsgag1Qg0hrhEhgQgKgNgGgGQgLgJgKgDQgEgFAFgGQAEgGAHABQAIAAAMANIAUAaQAnA1AhA5QAoBGAeBLQASAwAKAjQALApgGAZIgKABQACgTgHgegAC6gWQgEgCgCgCQgDgEAAgKIAAgwQAAgdgDgSQgDgVgGgWQgRg8gmhCQgXgngVgXQgdgegigLQgIgCgBgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQADgCAGABQAcAFAfAdQAdAdAYAoQAUAiATAtQAcBBAEArQACAOgBAnQgBAbADAPQACAKgEADQgCACgDAAIgBAAg");
	this.shape_36.setTransform(213.9683,782.03);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgZAFgjIAIg8QAnkmgWkkIgDgnQALABAEAUQAHAgACAlQACAWAAAwQACBpAAA6QgBBagHBIQgFA7gQB/QgNBtAEBNIAGBEQACAnAAAeQgkh6AJh/gAgnGkQgBglAAgYQAAgiADgcQAEgfAPhFQAWhjALhDQAPhYADhOQAHiggpi1QgGgZgBgPQgCgXAIgQQArCSAJCZQAJCagaCUIgfCQQgRBWgEA8QgDAfgCA3QgDA0gJAigAhhGiQAAgcAHg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNACBjQABCBgOBtIgMBRQgaCzgMC2QgNgiABgugAADFBQADgaALgoQA1ixAWhWQAoiZgGhzQgGiIhGifQgDgFACgHQABgGAFACQADAAACAFQBXDHgDClQgCBJgSBWQgMA2gcBkIhSEkQgDgdAEglg");
	this.shape_37.setTransform(252.289,758.2265);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgRgPQgfgagdgjQgVgbgegqQgjgxgUghQgOgWgnhHQgXgngHgTQgIgVgIggIgPhBQgBgJADgDQACgEAGABQAFABADAEQADAEAAAFIACAKQACAvAWA1QAOAiAiA6QAkBBARAZQBSCDB2BjQgCACgEAAQgFAAgIgFgACuE3Qg2gcgyg8QgfgnguhNQhDhsghhFQgyhkgVhaQgDgJACgEQABgEACgCQADgCAEABQAGABACAMQAGAmAPApQAKAcAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHABAIIgCAAQgGAAgIgEgADDDgQhDghg6hIQgXgcgYgmQgRgagZgrQg+hpgbg6QgrhegKhSQgBgGACgDQADgDAEABQAFAAACADQADAEACAKQAJBFAbBBQAQAlAmBEQAhA+AWAlQAtBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgHAAgLgFg");
	this.shape_38.setTransform(153.125,757.5251);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.459)").s().p("Ah9EeQgOgDgFgHQgEgEACgFQABgCACgCIAGgBIAKADQAQAGARgBQAOAAAVgDQAxgIAYgPQASgMAbgeIAWgZQAKgNAQgdIA5hhIADACIABADQAAAIgGANIgwBfIgOAYIgOARIgpArQgQAPgOAHQgJAFgXAGQglAJgRACQgNACgMAAQgPAAgOgDgAh6B6QgJAAgEgDQgEgCAAgEQgCgDADgDQACgEAKABQBCAEA+gSQAegJATgNQALgHARgSQATgTAHgKQAJgNALgWQAWgsARgoQAMgeAEgVQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIACAEQAAAMgCAMQgBAIgIAVQgWA4gOAeQgKAUgKAPQgLAQgTATQgaAZgZALQgUAKghAHQg4AMgrAAIgHgBgAixgOQgHgDAAgFQAAgDACgBQADgCADAAQACAAAIADQARAHAegBQAigCAVgCQAdgFAXgLQAigQAeglQAWgbAXguQAMgZAGgRQAJgXABgVIABgTQAAgLACgHIADAAIABABQAEApgDAWQgDANgHAUQgJAVgZAvQgUAigNAOQgMANgUAQQgWASgOAGQgUAJgoAFQgjAFgSAAQgegBgWgKg");
	this.shape_39.setTransform(223.5042,690.0014);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg/gDg2gZQg5gagkguQgOgSgRgeIglg9QgYgSgQgbQgEgEgCgGIgVgUQgegdg5gvQg6gvgigVQg2gigygJIgkgGQgWgDgNgHQAhgKAlAFQAhAEAkAQQAcANAhAXQAVANAlAdQA/AxAlAhIgEgUIgBgFQgNgMgLgOQggglghhBQgqhQgQgZQglg4gsgdQgUgMgcgLQgTgIgfgJQg6gSgcgHQAZgKAiAFQAXAEAlANQAiANARAIQAcANAVAOQAmAdAhA2QAMAVAmBOQAdA6AeAlIAKAKIgEgtQgDg1gHgeQgKgtgYgcQgMgOgTgOIgkgYIhMgwQBFAPAzAjQA6ApATA6QAKAdABAvIADBOIACAUQAaAVAdAKQAlANA2gFQAYgCBEgNQBlgTBQAGQAQABAyAGIAGgEQBchLAsgbQBRgyBJgMQA2gJB5ALQA7AGAtgBQAigwAOhGQALg7gChYQgDilgYikQgIg4gBgWQgEgsAIgiQAsDoAHDuQABA4gBAiQgDAygJAoQgKAvgUAmIgHANQAYgCASgFQBMgSA6g7QAzg0AVhEIgrg+QgggsgQgfQgnhJgLhnQgIhIAFhzIAJBdQAJBeAJAvQAQBOAgA3QALAUAcAnIAlAyQALgxgChFQgCh1gchwIg4i4QgihvgHhLIArCJQAxCgARBLQAfCEACBtQAABIgMAxQAPAZAQAiIAfBIQAQAmAGAUQAKAgABAcQABArgVApQgSAngiAfQg7A3heAbQhIAVhpAGQilAJgNACQhlALhGAfQgdANgrAbIhIAqQhtA8hpAAIgNAAgAl/JTQAYAoAbATQAYATAlAJQAZAGArAEQAsAEAggCQApgBAigKQAxgNBGgtQBVg2AggOQA1gYBFgLQAwgIBPgEQBVgDArgDQBJgFA1gNQBCgPA0ggQA7gjAhgzQAcgrAAgnQAAgWgHgYQgEgOgMgeQgTgwgMgcQgQgkgRgeQgbBQhEA4QhHA8hYAMIgXADQgNASgSAPQgfAcgwAWQgeANg6ATQhfAfg2AMQhTAThGgEQgYgBg1gIIgBAAQgwAkgxAeQg2AhgqARQg2AVgyADQg1ADgxgUQAVAnAMATgAnnG4IAFAJQAYAaARAYIAOAJQAtAcBBgEQBMgEBSguQAtgYBAgxIgsgFQgpgCgzAFQgkAEg4ALQg/AMgcABQg0AEgmgNQgUgHgVgOQAFASAIARgADyD3Qg4AOg+ArQgWAPhVBDIgIAHQAxAHAcAAQAxABA8gMQAmgIBFgTQBVgYAugUQA8gbAmgoIghgBIhWgHQgtgEglAAQg1AAgjAIg");
	this.shape_40.setTransform(192.5006,857.5618);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ7QhEgegyg3QgYgcgLgaQgOggAIgdQAjBWBIA4QBMA8BXACQA6ACBEgZQAqgQBMgpQBVgwAigPQBDgfA5gGQAugFBIAJIBzARQBFAJAwAAQA+ABA1gQQA9gRAqgkQA5gxAXhSQAVhKgKhUQgIhCgchVIg1iWQhFjJgWjUQgBgPACgLQADgNALgEQAABuAbB7QAWBkAtB9IA2CYQAbBXAHBFQAJBWgXBLQgZBUg5AyQgsAng9ASQg3ARhCACQg0AAhEgJQgzgGhFgLQg/gJgmACQg4AEhAAcQgmAQhMArQhNAsglAQQhBAcg4AEIgSABQg/AAg9gcgAnVIHQgggMghgVQgYgQgjgbIgRgNQgKgJgDgIQgFgKABgLQAAgMAJgGQA1BOBcAkQBdAlBcgVQA3gNBBgkQAVgMBag7QBBgrAxgVQBCgbA8AAQAkAAAzANQA6AQAdAFQBuAYA9gsQAegWASgmQAPgkACgpQACghgIgsQgFgfgMguIg6jkQgMgrgGgcQgJgngEggQgJhEAFhWQACgyAMhoQAEAxgHBrQgGBlAHA3QADAcAJAkIAQA/IA/DlQAOA2AGAeQAJAvgBAmQgCAsgQAnQgSArghAYQhFA0iFgcIhngXQg7gLgsAHQgvAHg2AfQgWAMhFAwQgzAigqAXQg0AbgxAPQg3ARg1ABIgDAAQg3AAgwgSgAmHHaQgogKgkglQgZgagggyQgMgTgFgNQgHgTAFgQQAMANAxBIQAjA1AlARQAhARAugEQAhgDAxgOQArgMAfgMQAngPAegRQAXgOAsggQAqggAYgOQA5giBFgKQBDgKBDAQQA1ANAOABQAnADAWgTQARgPAGgbQAEgVgBgeQgDgugHg5QgKhKgCgcQgNhygBiTQAAhQAFi1QAHAMADATQACALABAWIgBDMQgCB8AJBOQACAQASB3QANBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgFQgSgCgrgLQgngKgVgBQhLgFhZA0QgZAOguAgQgvAhgaAOQhkA6hyARQgXADgTAAQgVAAgPgEg");
	this.shape_41.setTransform(233.9576,812.8035);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7ETIgMgLQgNgOACgLQAKAEAZARQAVAPAOAEQALADAMAAIAYAAQAYgBAQgEQAogIApgcQAdgTAogmQANgLAIADQgPAUgSATQglAnguAWQgxAZgwABIgGAAQg0AAgigbgAgqDjQgWgBgYgLQgkgQgeggQAAgDADgCQADgBADAAQAFABAHAFQAZASAQAIQAYAMAVACQAJABAVgCQAbgEAQgFQAZgJAcgVQARgNAdgcQAPgPAHgIIAJgPIAKgOQAEgGAFgCQAGgEAFAFQgQAegaAfQg5BEg+AUQgPAFgWADQgQADgLAAIgDAAgAhkCKQgLgDgWgNQgUgMgIgKQgHgIgLgSQgFgJgBgCQAAgDACgDQABgEADAAQAGAEAGAHIAKANQAMAPAXAOQATALANACQAHACATgBIATAAIASgBQAlgFAyggQAZgRAPgOQAUgTAKgVQAFgLADgDQADgDAEgBQAEgCAEABQADACADADQABADAAADQgBADgDADQgDACgEAAQgKAbgaAZQgSARghAXQgdASgRAIQgcALgvACIgGABQgXAAgMgFgAh4gyQgTgEgXgRQgJgGgCgGQgCgEABgEQABgEADgCQAFgCAHAEIAIAIQAWAXAwgDQAogCAtgRQAbgLA2gaIARgKQAJgFAEgIIAGAAQAEAEgCAHIgHAIQgRAPgTAJIgNAGIgMAIQgJAGgVAIQgbALgRAFQgkALgnAAIgGABQgMAAgJgDgAiHhoQgQgIAAgKQAFgCAIABIANAEQAcAKAegCQAegDAagNIA1glQAggWAYgDQAFgBADACQAFACgBAEQgcAGgnAdQgtAjgSAHQgcAMgeAAIgCAAQgdAAgagLgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAegBQAbgCAagLQAxgUAngxQAEgGAGgCQAGgDAEAEQgUAlgfAaQghAbgmALQgXAHgXAAQgRAAgRgEg");
	this.shape_42.setTransform(155.145,742.2517);

	this.instance_8 = new lib.Serverc("synched",0);
	this.instance_8.setTransform(102.65,796.15,1,1,0,0,0,53.5,128.2);

	this.instance_9 = new lib.Serverc("synched",0);
	this.instance_9.setTransform(171.6,755.85,1,1,0,0,0,53.5,128.2);

	this.instance_10 = new lib.Serverc("synched",0);
	this.instance_10.setTransform(240.5,715.25,1,1,0,0,0,53.5,128.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_43.setTransform(156.25,862.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_44.setTransform(288.45,948.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_4}]}).wait(200));

	// Layer_8
	this.instance_11 = new lib.racunar1("synched",0);
	this.instance_11.setTransform(1298.7,312.65,1,1,0,0,0,44.9,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(200));

	// Layer_9
	this.instance_12 = new lib.Serverp("synched",0);
	this.instance_12.setTransform(1188,333.1,1,1,0,0,0,53.5,128.2);

	this.instance_13 = new lib.Serverp("synched",0);
	this.instance_13.setTransform(1256.75,292.75,1,1,0,0,0,53.5,128.2);

	this.instance_14 = new lib.Serverp("synched",0);
	this.instance_14.setTransform(1325.55,252,1,1,0,0,0,53.5,128.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_45.setTransform(1279.25,376.15);

	this.instance_15 = new lib.Serverp("synched",0);
	this.instance_15.setTransform(1035.25,241.55,1,1,0,0,0,53.5,128.2);

	this.instance_16 = new lib.Serverp("synched",0);
	this.instance_16.setTransform(1104,201.2,1,1,0,0,0,53.5,128.2);

	this.instance_17 = new lib.Serverp("synched",0);
	this.instance_17.setTransform(1172.8,160.45,1,1,0,0,0,53.5,128.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_46.setTransform(1127.4,284.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_45},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(200));

	// Layer_11
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBEICGBQAdZtBIhuBCIHxEnInyEpIHxEmIn4EtIHyEoIB4BIEAs9gDzIhxBDInxEnIHyEpIn4EsInmEiIB4BHEAlOgIbIhyBDIHwEoIHyEoInxEoICGBQAN92FIhnA9IHmEiInyEoIHwEnIn4EsInmEhIHxEnInwEnIHxEnIHyEqIB4BHAVmxmIhqBAIHvEnInxEoIHwEoIn3EqIHwEpInmEgInvEnInxEpIHzEpInxEoIB4BGAGB6vIhjA7IH4EsInxEoIHlEiIn3EsIHvEnIHxEmInmEiIHwEnIHyEqInvEnInwEoIB3BHAlK/kIB5BIInyEoIHxEoIn3EsIH3EtInmEhIHmEhInvEnIHvEnInwEnIHwEnInwEpIHwEoInzEpIC+ByAs/6+IB8BKIn3EsIHxEoInmEiIH3EsInvEnInxEnInwEoInzEpIhsBAA072UICBBMInnEiIHyEoInwEnIH4EsIHmEhInwEnIHvEnInxEnIn0EqIHxEpIhrA/EgxxgCwIjSB9Eg0BgEFICQBVIHxEoInzEpIH4EsIHlEhIhrBBEgsMgIrICMBTInxEoEgkYgNQICIBRInwEnIHxEpIH3ErIHnEhInxEnIHvEnIHxEpIn0EqIHxEnIhsBAEg0jAE5ICwBoIhkA7EgqAAB4IH4EsIHmEgIn0EqIHvEnIhrBBA8kx1ICDBPInvEnIHxEoInwEoInxEnAhz/UIheA4IHvEoInwEoIH3EsIn3EtIHlEhInlEhIHuEnInuEnIHvEnInvEnIHvEpInvEoIHxEpIjWCA");
	this.shape_47.setTransform(1101.175,396.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBFICGBQAVmxlIhqA/IHvEnInxEoIHwEoIn3ErIHwEoInmEhIHyEpIB4BHAdZtAIhuBBIHxEoIHwEoInxEnIHyEpIn4EsIB4BHAhz/UIheA5IHvEoInwEoIH3EsIn3EsIHlEhInlEiIHuEmInuEnIHvEnInvEoIHvEoInvEoIHxEpIB4BHAlK/jIB5BIInyEoIn3EsIHxEoInmEhIH3EsInvEnIHmEhInwEoIHvEmInxEoIHxEoIn0EqIHxEnIC+ByAGB6uIhjA7IH4EsInxEoIHlEhIn3EsIHvEnInmEhIHxEoInwEmIHxEoInxEoIHzEpIB3BHAN92EIhnA9IHmEhInyEoIHwEnIn4EsIHxEnInmEiIHwEnInvEnIHyEpIB4BHEAlOgIbIhyBEInyEoIHxEnIn4EsIHyEpInmEhInvEnInwEoInxEoIjWCAAs/69IB8BKIHxEoIn3EsIH3EsInmEhIHmEiInvEmIHvEnInwEnIHwEoInwEoIHwEoInzEpIhsBAA8kx0ICDBOInvEnIHxEoIH4EsInxEnIHnEiInxEnIHvEnIn0EqIhrBAA072UICBBNInnEhIHyEoInwEnInwEoInxEnIH4EsInzEpIhsBAEgkYgNQICIBRInwEoIHxEoIH3ErInwEoIHmEhIn0EpIHvEoIHxEoIhrBAEgsMgIqICMBTInxEoIHxEnInzEpIH4EsIHlEhIhrBBEg0BgEEICQBVIjSB8EgxzAGhIhkA8Eg0jAE5ICwBoEAs9gDzIhxBEIHyEoInxEoICGBQ");
	this.shape_48.setTransform(428.575,801.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(17,19,59,0.157)","rgba(99,28,183,0.788)"],[0,1],174,-217.8,-201.6,404.5).s().p("A9le2Qy6lYlVn0QpBsXfRxiQdOyQNkg9QOWh3I6DzUAkQAL5gZPASEQsqLi2CLaQu6IrukAAQleAAlchOg");
	this.shape_49.setTransform(1091.8213,420.2272);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(74,178,220,0.31)").s().p("AgaAHQgOgCBGgLQgkANgQAAIgEAAg");
	this.shape_50.setTransform(536.9847,726.8111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(200));

	// Layer_10
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_51.setTransform(300.7219,429.412,0.6366,0.6366);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_52.setTransform(190.6844,388.2723,0.684,0.684);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_53.setTransform(100.9714,346.2191,0.513,0.513);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_54.setTransform(69.0839,131.9793,0.5603,0.5603);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_55.setTransform(504.8177,145.5468,0.5588,0.5588);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_56.setTransform(428.022,316.2415,0.4183,0.4183);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_57.setTransform(449.1403,233.8346,0.6611,0.6611);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AilEXQhFgzAAh1QAAh0BFh0QBFhzBgguQBhguBFAzQBEAyAAB1QAAB1hEBzQhFBzhhAuQguAWgoAAQgrAAgkgagAgCiuQg/AfguBJQgsBGAABKQAABJAsAdQAuAfA/gfQBAgeAthIQAuhKAAhGQAAhJgugfQgWgPgcAAQgbAAggAPgAhoCqQASAAAcgMIABAAIAHgFQAVAGAJALQgXAIgVAAQgVAAgTgIgAglCPQAYgUAQgZIAIgQQAzgOAfAPQggArg1AgIgQAHQgHgNgWgJgAgnBmQATgKAUgHIgDAGQglA0goANQAfgdAKgZgAgSATIAogTQgEAogMAeQgWAIgQAHQANgjABgfgAARBDQANgfACgnIBsg1QgDBHgkA3QgfgQg1ANgAgegtIAmgXQANASABAmIgnASQgCgcgLgXgAAShMQA+grAfgqQAeAagBBDIhsA0QgBgngNgVgAg0hDQgJgEgLgCQAAgFAfgIIABAAQAagEAOANQgOALgVALQgEgHgNgFgAAAiiQgMAcgbAfIgTAJQgOAFgaASQApg8A5gfgAAJhYQgNgNgZABQAbggANgiQA+gWAfAWQgdAog/Apg");
	this.shape_58.setTransform(283.8516,272.5129,0.9313,0.9313);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#6C05AE","#1A0159"],[0,1],-182.1,117.5,-75.5,292.5).s().p("EgiSApaIgCgCIgBgFIgBgBIgKg+Qgwgkg4gXIg2gYQgHgDgEgGQgigogggoIhLhfQgQgWgOgXQgZgsgKgwQgHghABgjQABhRgOhRQgGglgIgkQgHgdgFgcQgDgRABgQQABg1AMgyQAPhCAOhCIANhCIABgCIADgBQAxgNAwgQIA1gVQAkgLAigNQA2gVA2gQIAigLIAYgIQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAIACACIABADIhcG4QADARANANIAxA2IAAABQAHAIAJAGIADAEIACACIACABIABADIABAAQAdAaAcAbIABACIAAACIABACQAhAfAlAYIAAAAIAWALQAyAcArAlIASARIARAPIAjAdIAEADIAQALIAAAAIAHAGIABABIAFAHIAGACIABAAIADABIACACIADACIABACIACACIAMAKIABABIAOAMIACADIAAACIgOAoQgKAdgLAaQgMAcgKAdQgGAPADAPIAJAFIACADIABACIgEAiIAAADIgDACIgVAFIgIAJIgKAyIgBADIgCABQgYAFgUAMQggAQgiALIABAAQgmAOgkARQg+Adg9AbIgCAAIgDgBgEgdKAnoIgDgCQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIALgzIACgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAIgCIAAAAQAKgDAJgIIAAAAIADgGIAAgHQAFgggBggIgJgGIgCgDQAAAAAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBIADgIIAAABQATg0AXguQAHgRACgUIABgCIACgGIABAAQAHgLAEgMQACgHgCgHQgBgEgDAAIgBgBQgIgFgEgGIAAgBIgCgFIgBgBQgDgIAAgIIAEhHIAAAAQACgXAAgWQABghAMgcIABgCIADgBIAHAAIACAAQAQAEAMgMQAJgJAFgJQAKgVACgXQACgTAEgSIAIgvIABgDQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAkgLAggQQAagNAZgLIBXgmIBigpQBngsBjgxQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIgFAyIgPCJIgBAMIgBAJIgBANIgEAVQgIArABArIgBAHIgCAbIgCA7QgBAqgEAqQgICEgFCGIgBADIgCACIhJAdQg1ATg3ANQg5AOg2ARIhyAjIg4ANIgBAAQgSAAgSADIhvAQIgXAKIgCAAIgBAAgEgS5AkyIgEgBIgBgEIAGhnQAFhaAEhcIAFhyQAEhLAJhLIAEgfIAVi/IABgCIABgCQEaiSEVifQAqgYAmgUIADAAIADACIABADIAAJDIAAACIgDACImHDtIgCAAIgHAAQgJAKAAANIAAAGIgBABQgLAcAJAgIAAADIgEAIIgBABIgBABQgqASgpAUIhYAsIgCAAIgCAAIgDgCQgGgCgEAJIAAAAQgIALgBAOIgGAsIgBACIgCABIhHAqIgCAAIgBAAgEABbAjyIAAAAQgMgCgLgEIAAAAIgEgBIgDgCIgJgMIgOgGIgCgBIgBAAQgOgHgNgKIgGgEIABABIgRgGIAAAAQgegMgSgTIgDgBIgCgCIgDgCIAAAAQgOgUgWgQIgbgWIgGgGIhjgnIgCgBIgHgHIgBgBIgHgIQgNgNgTgBQgoAEgkAVIABAAQgjAWgcAcIAAABQgFADgDAFQgwA/giBGIgDADIgEgBIgagLIgXAAIgBAAQgXACgUgNQgKgGgNgEQgHABgFgDIgJgDIgDgDIgeg3IgDgCQgmADgpgDIgBAAQgVgEgVgGQgDAAgBgBIgEAAIgDgBIgqglIggAFQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgEIABgDIgCgFIgBgCIADg4IACgCIABgCIGPj0IAAgBQAIgNAAgRIABgbIABgYIgBg5IAAg2IAAgyIAAgfIAAgjIAAgWIgBgQIABgfIAAguIAAgqIAAgfIAAguIAAgfIAAgIIAAgIIAAgHIAAgIQAAgGAFgBQATgPAVgMQB+hKB1hXIAigXIADgBIADACIABADIgBAZQgBAuACAuIAFCYIACAUIAAAAIAAABIACADIABAQIALAJQASgLASgJQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQC5hOCuhgQBwg9B1g3IACgBIAEABIBAgcIAEAAIADACIAAADIgNB7QgDAUAEAVIA+AtIAEABIACABIACACIAJAVIADABIADADIAGAKIAAACIAAACIAAAAQgEApgKAqQgGAYgCAZIgGBDIgBACIgCACIgIADIlwJ3IAIAJIAAABQAmApAIA3QACAPgDAQIAAAAQgHAhgRAiIgBABIgCABIgJADQgqAMgqAAQgjAAgkgJgEgcTAh1IgCgCIgygoQgEgCgEgDQgpggglgiQgMgJgLgFQgLgGgIgHIgFgCIgDgBIgPgPIgZgKIgCgBIgKgHIgCgCIgCgDIg0gpQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIgCgFIgEgCIgBgBIgSgPIAAgBQgdgdgbgeQgFgFgIgGQgLgIgGgNIgDAAIgDgCIgegnIgBgDIAAgCIAAgBIAOhDIAZh3IAShaIAiifIACgCIACgCQAVgJAUgGIA+gZIABAAIA4gXIABAAIA4gXIABAAIARgIQAvgZAygSQANgGAPgFQA2gUA2gXQAmgQAjgTIARgHIAEAAIADACIABADQgCASgFASQgEAUgDAVIgNBPQgIAygGAyQgEAsgIAsIgHAtIgDAYIAAAAIgJBAIAAAAIgCAXIAAABIgBAEIAAABIgGAWIgJAyQgEARgCARIgFAyQgEAwgIAyIgDAQIAAABQgBAIAAALIAAABIgFAWIgCADIgLALIgBABIgCAAIgMgBQgTADgNAQQgHAagEAcQgGAlABAnQABASgDAQIgDAPIAAgBQgCAKgFALIgCACIgCAAIgCAAgA6RcEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgCgHABgFIAAABQAFggACghIABgIIADgWQAFghAJgfIAFgeQAHg+AJg9IAAgBIABgEIAAAAQAFgZADgYQAFg1AIg0IADgUQAGgzAKg0IACgHIAAgFIADgQIAAAAIACgJIACgMIABgHIABgBIAAgEIAAABIABgNIAAAAIACgPIABgCIADgCIA6gcQA7geA5gfIAAAAIA7giIAGgFIAAgBQATgNATgMIABAAIAHgDQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIACACIABADIgBAMIgDAdIgIBgIAAAAIgBAGIAAABIAAADIAAABIgCAFIgBAGIAAAAQAAADABADIAAABIAFgDIABAAIAGgGIAAAAQAFgFAGgCIBEgiIBWgrIAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIABADIgHBYIAAAAIAAAGQABAKgCAJIgFAlIgGAtIgHA2IgGBIIgGBZIAAABIAAAGIAAABIgDAcIgDAcIgEA/IgCADIgCABIhoAvIhnAuIhKAhIhLAiIAAAAIhLAkIhKAkIgCABIgCAAIgCAAgAx8YQIgEgCIgBgEIALiLIAJhuIANh4IADgeIADgdIACgJIABgFIAAgBIACgcIADgmIABgMQADgKAAgHIABgDIABgBIArgaIBSg0QAlgXAmgUQAjgSAkgRQA1gZAzgdIBFgpIBHgrIABgBQADgBAEAAIAqgZQArgbArgYQAUgNAWgLIADAAIAEACIABADIAAAHIAAB4IAABrIABAYIgBAPIAAAIIAAAHIAAAEIAAAEIAAAIIAAAAIAAAMIAAAHIAAAIIAAAIIgBAIIAAASIABAyIAAAmIAAAJIAAAHIgBAJIAAALIgBAFIAAABQgEAOAAAOIAAADIgCACQg2AegvAeIgrAbIgBAAIhWAxIhnA7Ii5BmIhDAkQhKAohOAlIgCABIgBAAgEgoEAWvIgDgCIAAgEIAWhkIABAAQALgqAMgqQAMgqAPgqQAOgqARgoIAihWQAXg2ATg3QASg1AQg2IACgCIANgJIADgBIAIAAIADAAIABADIACAFIADANIACAJIABACIAAABIADAIIADAKIAEAdQAEAVABAXIArgTQARgIAQgHIAmgRIBIggIBFgfIABAAQAPgGAOgIQAdgSAcgVQAcgTAdgSQAMgJAPgEQAHgDAIgBQAxgQAwgQQAFgCAHAAIACABIACACIAAADIgIAgIgEAOIgEAIIAAgBIgDAHIgJATIgfA+QgTAjgMAoQgCAJABAJQADALAFAKIACAJIACABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIACAiIAAADIgIAQIAAAAIgIAXIAAgBIgCAGIAAABIgCAHIAAAAIgBADIAAABIgBAFIgiCwIgBADIgCABIkTBvIgDAAIgHgBIgFAGIgCACQgvAQgwASIAAAAQgkALgjANIABAAQg4AVg5ATIhLAYIgBAAIgiAIIgEAAgAJyWgIgDgCIgBgDIAEg+IADgWIADgUIAAgBIAFgbIAGgdIAHgdQADgPgCgOQgDgIgEgFQgGgHgDgIQgEgJgLgDQgOgFgNgLIgQgMIgBgBIgGgHIgEgBIgCgCIgFgGQgCgDAAgDIAAgBIACgWIADgVQABgNABgMIAAgZIAAgBIAAgCIABgEQABgNAEgMIgBAAIAFgWQAAgHAGAAQAXgQAZgPIAzgfIAzgdQAZgQAagNIAAAAQANgIAOgGQAkgQAhgSIAqgZQABAAAAAAQABgBAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABAEIgBAEIgCANIgDAOIgBACIgBABIAAABIgEAJIAAAAIAAADIAAAAIgCAHIgFARIAAgBIgFAXQgKAfgDAeQgCASgFAQIgHATIgGAMIgBAEIAAAAQgGALgCAMIgHAkQgEATADAVIAsgaIAsgbIAtgdIA4gkQARgMATgKIADAAIADABIA8AzIACADIAAAEIgFAHIgGB+IAAACIgDACIi/BVIgcA0IgDACIg+AhQgfARggAQIg+AgIg/AeIgBABQgIACgGAEIgBABIgQAEIgBABIgBgBgAiNUPIgDgCIgBgDIgDgkIgCgDIgBgDQAAgtgCgtQgCg6ACg4IgBg0IAAgDIACgBIBGgpQCfhdCahoQBXg8BUhBIADgBIADABIACADIAKAnIANAdIAcgIIADgBIAFABIADACIABADIACCUQACA8AFA7QABAPAAARIAAADIgDABQhlAshjA3Qh5BGh+A6IAAAAQhVAohWAgIgDAAgA9FSwIgCgDQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAMhAQAMg8APg6QAGgZAIgXQADgJgBgKQAAglgMgiIAAgDIACgMIAAAAQAFgPAGgMQAYgzAYgvIAGgMIAAAAIAWg5QAHgUgJgRIgYAGIgEAAIgCgCIgBgDQAFgtAHgtIAXiCIAAgBIAaiTIABgDIABgBIA9gcIACAAIADABIACADIgBADIgCAFIAAAAQgCAugKAtQgBAJAEAGIAAAAQAWAcAKAhIAAABIABATIAGABIAAAAIADABIABABIAHAHIARAMIACACIAEAMIAPALIAWgMIAEAAQADABADADIAAABIABAEIAAACIgMAoIgOA4IgEAMIgDAXIAAAAIgDAOIAAAAQgEAIAFAGIAxgeIAEgBIACACIABADIABArIACADIACABIADAMIABAAIAFgBQAJgBALABQAOAAAHAMIABABIAFAWQAggNAigLQAggMAegVQAQgKAPgIIADgBIACAAIADACIAGgDIAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIABADQgCA1gFAzIgCAbIgFAwIgKBpIAAACIgCABQggAYghAWQggAUggASQhaAuhaApQiBA7iDA2IgCABIgCAAgAmCRmIgDgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgLIAAgGQACg8AAg8IAAh3IAAh4IABgCIABgCQD5iZDzihQAjgXAigUQA2giAwgmIAAAAIA1giQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIABADQgDAWgKAWQgFAMADANIARAFIgBgBQAaAGAPAYIAAADQABBIAOBHIACAIQADANgBANIAJAlIAAADIgDACQhiBOhpBEQiBBUiEBQQgvAcgtAdQh1BNhzBJIgDABIgBAAgANlQ1IgCgCIgBgEQAEgWACgWQABgJAGgIIgBAAQARghAFgjQAFgqAMgqIAAgBIARg5QAFgRADgRIAAgBIABgEIAAgBQAEgKgDgJIgDABIhHApIgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIA/j8QAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAvgkAtgmQA5gxA9gqIAAAAQAYgSAVgIIADAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQgBA7ADA9QACBLAEBKQABAQgBARIAGA4IABABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQABASAGARIAcBlQAOAtAKAwIAAADIgCACIhdBHIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgJgKIgEgCIgCgCIgDgEIglgaIgCgCIgLgQQgeALgfAWIAAAAQg9Aog7ApQgXARgSAFIgDAAgA0BQyIgDgCIgBgDIAsoJIABgCIADgCQA9gfA8ghIABAAQCPhNCQhGQBbgtBbg0IA1geIAEgBIACACIABADIAAHdIAAADIgBABQhoBLh4A2QhmAuhaA+QgsAdgsAWQhfAvhcAwIgCAAIgBAAgAH0PYIgBgDQgJgwABguQgBhxgGhvIgmAKIgCAAIgDgBIgCgDIgCgJIABgDIABgCIAbgQQAtgcAlgiIABAAIAIgHIAAgBIAngeQAVgQAWgOQB+hVB8hZIAEgBIAEACIAAAEIgBAvIAdgPQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIABADQgFA5ANA6IAAADIgCACQgKAGgGAJIAAAAQgFAGgCAIIgPA7QgMAwgQAvQgTA4gEA6IgBACIgCACIg3AeIhJApQgkAUgiAZQgPALgPAGIABAAIgOAIIAAAAIgcAQIgBAAIhIAeIgDAAIgCgBgAUBORQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIgYhZIAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQBDguA9g3IgBAAQAggeAkgbQAYgSAagRQAjgYAjgcIAAAAQAnghApgfIACgBIADABIADABIABABIABgBIAJgOIACgBIBEgrQA3giAygqQAvgoAzgjIgBAAQAlgaAmgYIABgCIAAgBIACgFIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgBIgIgOIAAgDQABgGAEgDQATgUAVgSQAigeAkgdIADgBIADABQA9AuAuBAIABABIAMASQAVAgAcAbQAHAGAJAEQAXAIAWALQA1AcAfA1QAdAxADA5QAEA6gTA3QgQAsgVAqIgBABQgwAjg6AGIAAAAQgmAAgmgIQgWgFgVAAIgBAAQgtAFgsgGQgugGgcgfQgIgJgEgLIAAAAQgJgXACgYQABgUgGgTQgIgcgZgQIgSgNQgbgWgfgNQgcgKgdAGIAAAAQgTAFgOALQhhBJg6BrQgLARgPAOIgDABIgDgBIhBgrIkUDgIgDABIgDgBgEgjsANwIgCgCIgCgCIgWhvIgEgCIgDAAQgMACgJAGIgDABIgDgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEIAAgCQACgIABgJQADg9gBg+IABgDIAGgIIAAgBIADgCIAAAAQAogfAygQIADAAIACABIABACIAOA4IAlggIAAAAIADgDQAGgNAAgPQAAgLADgKQAHgZAKgYQAHgVAAgVIABgDQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAugMIAVgGIgBAAQAggMAegPIBVgqQBQgpBVgeIAngPQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACACIABAEIgCAMIAAAGQABALgDAMIAAgBIgEAMIgBAMIAAABIgGAdQgNBxgYBuIAAABQgCAJAAALQAAAMgEAPIgBACIgCABIgSAGIgRAGQhPATg8A0IgfAYQgaASgfAMQg8AWg5AeQgMAHgPADIABAAQgYAHgWAMQgQAJgSAGIgPAGIgDAAgATiMjQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIgdhyIgBgBIgCgVIgCgCIgBgDIgLjkIACh1IABgCIABgBQBVhGBbg/IAAAAIAlgcIAAABIAjggIADgCIAEABIACADIAFAOQANAYAJAaQAEAMAFAJQAZAtAUAvQANAeAPAdQANAZAPAXIARAYIABADIAAADIAdA5QABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCACIhBAvQg5Apg4ArQhMA7hIA/Ig/A0IgEABIgDgBgAl/LUIgDgCIgBgDIACiLIgCAAIABAAQgtAZgpAaIgBAAQgpAYgqAXIgDABIgCgCIgBAAIgHgDIgDgCIgBgDIAAjbIABgDIACgCIAGgDIA/ghQC8hrC5hzQBwhGBwhAIAAAAIAjgSIACAAIACABIAGADIAAABIAGAFQAPAKAFAUQAIApAdAeIABABQAOAbAUAYQAFAHACAHIAAAAQADAXALATIAAABQAEAHAGAHIABAAIADACIAigGIADABIACADIAAADIgBADQk2DOk5DLQglAXgfAQIgDABIgBAAgA2XKgIgCgCIgBgDIAAgCIAAgCIAAgBIgCgEIgEgEIgBAAIgHgHIgJgDIgKgBIgNAAIgDAAIgCgDIgBgDIgDgHIgBgCIABghIAAgIIgBgGIgBgFIAAAAIgBgCIgHADIABAAIgOAHIABAAIgNAJIgNALIgDABIgDAAIgCgDIgBgDIAEgNIACgPQAJg0ATgyIAEgLIAAgBIACgHIAAAAIgCgEIgEgCIgEgCIgGgBIgDABIgCAAIgFABIAAAAIgIACIAAABIgIADIgDAAIgCgBIgZgdIgVgMIgCgCIgBgDIAAgJQgBgJgCgIIAAAAQgDgKgFgHQgKgPgKgOQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAIANhpIABgDIACgBIBEgcIBAgaIBGgeQA0gYA0gbQA1gcAygdIJklWIADgBIADACIABADIABAFIABAKIAAABIABAtIABAPIAAAIIAAABIgBAKQACAmgBAkIAAAmIAAATIAAA6IAAABQAAASABASIABAMIAAAAQgBAjgBAjIAAAmIAAAMIAAALIAAAEIAAAHIAAABIAAAKIAAAMIAAACIgCACQhYAwhbAtQg6Adg5AeIiJBJIgpAVIhJAkIgBAAQgzAYgxAcIgDADIgCACIgDAAIAAABIgCABIgBABIgCADIgDADIgBAEIgBABIAAAGIAAABIAAACIAAADQgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgBACIgBACIgCACIAAABIAAAKIAAAHIAAABIgBADIAAACIAAABIgBAIIgBADIgCACIgEABIgBABQgXAJgXALIgxAXIAAABIgeAMIgiALIgEAAgAGwKBIgCgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQACgEAAgGQgEgcgKgaIgBgCIAAgKIgBgCIgGgsIgCgKQgIgugFgtIAAAAIAAgEIAAAAQADgrgfgZIgagJIgCgCQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAIgbQADgLAEgJIAAgBQAFgKgCgNIAAAAIgEgBQgJAAgGgCQgZgKgcAGIgDAAIgDgDIgFgMIAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIB8hWIA/gsQBlhMBug/IAAAAIAMgHIADgBIACABIACADIAAADQgHATAJATIATAoIAHAFIAAAAIAJAFIAEAAQAngeAtAUIACACQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgCAMgEAMQgHAUAGASIAtgIIACAAIACACIABADIADAaQACARANAGIADAAIAcgRIACgBIAgAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAASIAIAgIAPAKIAkgRIADgBIACACIAAAAIAKgCIADABIACACIABADQAAAEgDABIgwAxIAAAAIgDAGQgOAsgBAuIAAACIgCACIgtAZIgDAAIgDgCQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAHgxQgZAOgYARQgpAagoAcIAAAAQglAZglAcIiqB7QgvAjgwAhIAAAAIgLAHIgDAAIgBAAgAO7HgIgCgDQgNg5AIg6IABgCIABgCQAOgIAJgMIABgEQABgwAQgvIACgDIAigaIBEgzQAbgUAcgRQAYgNAEgYQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQA+gpA5gyQAkggAngdIBNg7IAqgeQB5hSByhcIAAAAIAhgaIADgBIADABIACADIAAADIgRAgIgCAFIAAABQgpA9gmA9IAAAAIgjA6QgfA1gcA4QgCADAAAGIgBACIgBACIg6A1QgeAcgbAdIgBAAIgBADIgCACQg4Azg/AsIgrAdQgjAYgfAbQgTAPgTANQgfAXgeAZIgBAAQhSBAhUA/IgDABIgDgBgAaDHeIgCgCQgRgjgVghQgog+gdhCQgWgzgagzIgag3IgLgXIAAgDIACgCIDejFQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACADIAFAkIBCgSQAAAAAAgBQABAAAAAAQAAAAABAAQAAABABAAIE5BzIACACIABACIAAADIgPAjIAiAYIACADIAAADIgBACIhwBhIgBAAIgDAFIgBAGIgBAEIABAQIABAIIAAADIgCACQhFAyhEAzQhBAyhIAqIgcASQgMAIgKAKIgDABIgDgBgAo8GmIgBgDIAAlaIABgCIACgCQCdhSCThiQArgdArgaQApgaAngcQBfhCBlg2IACAAIAEACIABADIgBAoIAOgEQAAAAABgBQAAAAABAAQAAAAAAAAQABABAAAAIALAEIACACIAAADIACEuIAAACIgCACIkxC3Qg/Alg+AoQh4BOiBA9IgTAJIgDAAIgDgCgAEKDVQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIgFgQQgCgJgHgHIABAAQgagfgQgmIAAABIgbgyIgBAAQgOgZgQgWIgBgCIABgCIACgGIgDgEIgBgDIgChJIABgCIACgCIAQgLQAtggAwgeIBXg4IAtggIAJgHIAFgDQAwgeAtgjQAjgcAogXQAfgRAXgYIADgCIADABIASAKIADACIAAADQgGARgCAQIAAABQgCAMAFAIIADAAIATgMIACgBIBmABIADABIABABIASAVIABACQAAAEAAAEIgBAEIAAgBIgBAGIgDAGIAAABIgDAHIgBAAQgGAIgEALIgKASQgMAWgOATQgXAdABAiIACABIACADIAEAXIAAADQgIAPgLAKQhOBFhZA5IhGAuIgBAAQg9Alg5ArIhTA+IgDABIgCgBgAPVCoIgDgCIgBgCIgEgKQgCgNgDgLIgCgGIAAgKIAAgCIgBgBIgBgCIAAgBIgCgDIgCgDIgJAAIgNABIgNAEIgBABIgOAEIAAAAIgPAHIgBAAQgEACgDgEIgCgCQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIAAgBIgBgEIAAgBIgCgPIAAgBIAAgNIAAgEIAAAAIgBgCIgsACIgEgBIgCgCIAAgDIAGgbIAAAAIACgSQABgEgCgBQgYgTgeAHIgNADIABAAIgOAFIAAAAIgNAFQgEACgEgDIgBgBIgUgeIgBgCIgGgdQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgLIAAAAQAEgMAFgJQAPgYAGgaIAAAAQAFgTgFgRIAAgBIgBgDIgBgDIAAgBIAAgBIgBgGIABgCQAQgYANgaQAJgRAIgPIAPgcQAPgcgDgfQgBgIgEgDIgHgDIgGgCIABAAIgGgCIgNgCQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIDcikIAEgBIACABIACACIAPAiIAVgQIAEgBIACABIALAIIACACIAAAEIgHAUQAOAgAGAkIABAIIAAABIAAABIABACIAAADIAAADQAFAGABAIIACAXQABAFACADIAAABIACAHQACAZAFAaIAFAfIABACIAAABIABAGIAAAEIACACIABADIAOBhIACAEIAAADIAAAHQgDAWgJAVIAAAAQgKAXgEAWIgFA4IAAABIAAAGIgBAIIAAAAIgBAGIAAAAIgCAIIgBACQgGAGgFAIQgQAYgTAVQgMAOgMAPIAAABQgDACgBAEIgDAJIAAAAIgDAIIAAAAIgDAPIgBACIgCACIgGADIgDABIgDgBgAQcCmIgDgCIgJgMIgQgCIgJABIgDgBIgDgCIAAgDIAAgIIADgDQAOgLAJgOQAOgSARgSQAigngDgyIABgDIABgBQAQgPASgOQAogfAngiIgBAAQAngkAhgqQAYgfAQgjQgtA0gpA4QgFAHgGAFQgXAUgZARQgoAYgdAjIgDABIgCAAIgDgCIgBgDQABgVAHgWIAQgyQADgNgCgMIgEgtQgCgSgDgRIAAABQgLgugEgvQgFgygMgvQgHgVgCgUQgEgWgLgQIgBgDIABgCIABgCIAYgQQAfgdAggaIAAABQBBg4BBgyQAZgTAYgRIACgBIACABIAEABIACABIABACIAPBFIgBgBQAHAQgBASIAAABIABABIAAABIAHAmQAEATACASQABAIACAIIAMAtIADAQQAEAUgCAXIAAADIgCABQgLAFgHAKQgFAFgCAHIgKAbIABAAIgDAIIgQBFIAnhmQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIADgBIAKABQAVgBALgQIgCgNIgEgCIgDgBIgBgCIgFgUIAAgEIACgCQAZgNAaAIIAQgGQAcgMAcgPIAAgBQBBgiBEgaQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABABIACACIAUAcIABACQADAOALAHIAAAAQAGAEAFgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIADACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIhkDhIgBADQh2BNhvBXIiBBnQgoAggmAjQgIAFgCAJIgBACIgCABIgFACIgBAAIAAAAQgZAVgbATQghAXgbAPIgDAAIgBAAgAo5AzIgCgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABhgIgCh4IAAhAIABgPIABgQIgCgjIgCgWIAAgDIACgCIFnjMQA4gqA7goQA4gnA5giQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADACIABADIgBAIIABAHIADANIACAJIAAACIAAACIABAEIABACIABABIABACIABACIADARIADACIADADIAHAUIAAACIgEAqIAcA1IAAACIABAHQAKAMAEAQQACANABAMIACANIAIAlIAEANIAAADIgCACQgVAUgYAKQgqASgkAaIAAABQi8B+i/B1QgPAJgPAMIAAAAQgVASgaAMIAAAAQgVAIgSAJIAAAAIggAQIgPAJIgCABIgCAAgEAg2AAKIgtgPIgSgCIgCgBIgDgCIgBgCIjshWIgBgCIgBgCIgBgDIhCAOIgDAAIgCgCIgBgCIgBgZIABgDIAJgNIAAABIAHgKIAAAAQAegrAlghQAngkApggQAYgTAbgSQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAUAFQBXgyBPhAIACgBIADAAQAYAIAbgCIAhgBIABAAQAHgBAHACQAXAGAYABIADABIACADIAAADIiuGoQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAIgCAAIgBAAgAZFguQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAPgnAXgjIA1hVQAWgiAVgjQAVglAbgdIACgCIABAAIB4AKIAEACIABACIAAADIgCACIg8AxIAAAAQhQA/g1BVIgCABIhqBUIgCABIgDgBgACUhjQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAhJgBhIQAAgYACgXIAAgBQABgTgSgGIgKAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgRABgRQAAgEADgEIAAABQACgGgDgFQgEgGAAgFQgEgUgGgTIAAAAQgEgMgBgOQgBgHgCgGIgZhCQgHgTgJgSQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgOIABgMIAAgFIgCgIIgDgEIAAgBIgGgQIAAABIgEgHIgBgCIgKg1IAAgDQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQASgJAQgMIABAAQADgCACgEIAAgBQAGgWAKgWIACgDQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADACIABABIABABIALANIABADIAIApIAHACQAhgMAfgUIAggXQATgOANgRIAHgMIAAAAIAIgIIACgBIACAAIAKACIAHACIALABIAFgBIADABIACABIA9giQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIAVADQAKgDAIgFQALgHAEgKQAOgeAdgLIABAAIAAAAIAIgFIgBAAQAfgQAdgUQAlgaAhghQAlgmAqgiIAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIACADIgBADIi7ExIABAPIAAACIgCACQgDADgCAGIAAAAQgFAIgDAJIgFAPIAAAAIgaB0IgEAPQgDAPACARIABAEIARAQIABACIAAACIgBAvIB+AIIACABIACADIALAmIAAADIgDACInTFCIgDABIgDgBgAZwkhQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgEIBdjTIACgCIADgBQAMABANgHIAAAAIARgFIAAgBIAJgBIAIgDIAIgDIAHgGIACgBIAIgFIABAAIAHgHIAZgbIAPgRIABAAQAIgKAHgLQALgSAIgTQAJgXAGgZQAEgVACgVIAFgzQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAUgXAQgZQAHgMADgQIAAAAIACgQIADgKIAEgLIABAAIAEgIIAAABQAFgKAIgJIALgUQAJgPAFgQIADgNIAAAAIABgTQAAgKACgIQAHgaAJgZIAAABQABgGAFgDIACgBIADAAIADACIAAABIANAAIALAAIABAAIAEABIABAAIAAABIAogSIAEgBIACACIABACQADAGAHgBIAHgBIAKgCIAKgBIAFAAIACgCIABAAQADgDAEgCIAGgEIACAAIAEgDIAPgRIAAAAQAFgIAHgGIAQgRIAFgEIADgBIADABIABACIALAWIAJgFIALgLQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIBjgLIADABIADACIAAADQgEA5AQA6IAPA2IAAADIgCACQiCBxh7B2Ig0AzIgbAbIAAAAIggAdIAAAAIgeAeIggAdIAAAAIgeAdIAAAAIg+A6Ig+A4Ig+A2IhAA0IAAAAIhIA5IgCABIgEgBgAeeleIgCgBIgCgCIgBgBIgDABIgCAAIgJgDIAAAAIgKgCQgfgCgfAAQgWADgWgIQgJgDgJgBIgHABIgDgBIgCgDQgDgFAEgCQADgFAGgEIAAAAQB8hsB5hyIASgRQAegaAcgdQAmgnAngmQAQgPARgOQBohcBlhhQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIADABIACADIAGAYIAqAUIACADIAAAEIjEHcIgCACIgCABIgDAAIgBAAIgMgDQgpgLgqAEIAAAAQgQADgPgCIgBAAQgGgCgFACIAAAAQgYAIgVAOQg+Aog+AsIgDABgAK8l1IgQgDIgSADQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgFIAAABIADgPIAEgOIABgHIAAAAIAAgDIgBgFIgRAAIgDgBIgCgCQgEgGgDgHIAAAAQgEgJgDgKQgCgHgBgHQgBgMgIgFIhUgEIgBAAIgGgBQgWAFgJgNQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgFQAAgRgDgMQAAgEgCgCIgBgBIgJgJIAAgBQgGgFABgFQABgSADgQIABgGIAAgBQAFgKABgKIAAAAQAAgHACgHQAFgQADgRQABgMAEgMIAAABIANgsIAAABQABgFADgFQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIASgFIA1hFIACgBIACgBIAeABQAPgBAQgEIABAAQAHAAAHgCIADAAQAbAGAcgLIAogQIABAAQAbgKAcgIQAigNAkgDIAFACIAHAFIABADQABAGAFAEQAEADAFABIABABIADAAQAWgDAWgKQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBABIgGAZQgIAfgFAgQgFAkgDAkIAZAPIACADIgBADIgbAwIABAYIAXAgIAAABIAMAZIAAADIgCADQgZAUgXAVQgSAQgSAOQg1Aig1AkIgmAcIAAABQgKAFgJABQgWAGgSACIgBAAgA9bnEIgDiNIgpAfIgOgIIAci9IgXgRQgIgGgFgGQgNgNgMgOIgLgPIgHgOQgIgPgCgQIgEggIgeAAQgSABgSgEQgSAAgRgFQgIgBgHgEIgOgIQgJgFgBgJIgLg2IgDgJIg5AaIglhgIgvAaIgwAcIhAAqQghAXgfAYQgTAOgQARQgRASgQATIgYAcQgTAUgYAMIgRAIIguATQgTAIgRAKIgWAMQgFADgHgCQgIgEgEgKQgDgLAAgMIB9iHIgcANIgfhQQghAIghAHQgFABgEgBIgCgLIBVjBIgUiAQAKgQALgOQANgRAPgOQAOgMAQgKIAegRQAMgHALgJIAfgaQAkgjAngeQAUgPAUgOQAGgDAHgCIAMACQAHgEAFgFQAHgHAFgJIgPgGIgDgNIhnAFIAmjTIAOgcIAhgPQAJgEAKgDIASgDIARABIAOADQAKACAHAFQAKAGAFAKQAIARADASQABADACADQACADADABIAVgeIAmAbIAQgQIgVhYIgDgJIBBitIAzgWIAzgYQAbgMAZgOQAagNAZgQQAVgNAUgPIArglIAKARIAWAYIAVAWIAJAKIAFALQAPApALArQACAHAFAFQASANAWgBIAIgBIAQgDQAgAEASAbQAKAQAEAUQADAQAIANQABAEADACQAZAQAcgFQgFAQgHAPIgbBCIgeBFIgYA5IgXA2IgOAhQgMAdgOAeIgYAzIgoBbQgdA+ggA+QgVApgSApIgcA/QgbA7gcA6IgFAJIgGAJIAAADIAAABIAAADIgCACIAAACIAAADIAAADIABACIAtAQIAFgBIAAABIgBABIAAACIgBABIAAADIAAACIgBACIAAADIAAABIAAAGIAAAIIABAHIAAACIACACIACAJIACAEIATAGIgBAEIgBAEIgBAFIgBABIgBADIgBADIAAAHIAAAKIAAAHIAKAHIAQgMIAYgUQAKgJALgHQAOgJANgHIAAAHIACACIACAEIAEAGIAAACIAAABIAAABIgBAEIAAABIAAACIAAACIAAATQgBAGACAFIgBAEIABAFIABACIABADIAFAQIABADIAHAWIADADIgBAMIAAArIABAiIAAAFIACALQACAegBAcIADAEIACABIADABIABABIABAAIAFAFIABADIABACIABACIAAAAIACACIACACIAHAJIAFAHIAAADIgCAJIgCALQgDAIgEAHIgGAMIgVAlQgJAPgPALQgDADgBAEIgCAIIgEANIgCAKIgBAGgAWBnYIgCgCIgCgCIg0kSIAAgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIBdhSQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABADIAAALICwicIAAAAIBEhrQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABABIACACQAOAUAIAZIACACIAAACIABABIAAACIAAACIAAABIAAAAIAAABIABAEIABADQAPAWADAaIAGAZQACALAAAMQgBASACATQACAQgBARIAAABQABAFgDAEQgNAXgFAYQgCAJgFAKIgUAoIgEAFIAAAAQgaAggLAkQgFAUgCAUIAAAAIgEAWIgCAUIAAABIgCAEIgBABQgBABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIAAADIgDACIglAQQg8Abg2AkIgDABIgUAAIgWACIgLADIgjAMIgCAAgAbEoKIgMgDIgDgCIgGgIQgGgJgEgIIAAgBQgJgUgPgMIgCgCIgBgCIAEgbQADglAPgfQAIgVANgSQAJgPAIgPIAJgUQAMghAPgfIAEgLQAEgOgBgTIAAgCIABgFIABgCIADgCIADABIACACIANAXIAGACIDjjPQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIADABIABADIAAADQgMAbgBAgQgBAQgFASQgEAQgKAMIAAAAQglAugCA8IgBACIgBACQgSAKgLASIAAgBQgGAKgCAMIgNBFQgFAkgIAjIAAAAIgEAIQggAwgrAjIgBABIhZAgIgDAAgARdpOIgCgDIABgDQASgjgIgpQgGgggQgbIAAAAQgKgQgEgSIgEgiIAAAAIgBgSQgBgdACgeQAEgpAHgqQAHghARgcQAdg0AngvIAAAAQAKgNAMgLIAVgWIADgBIBEgOIACABIADABIASAPIABACIAAACQgCAugFAtIAAAAQgBALgFALIAFAoIAdgOIAihWQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIADgBIADABIBKA2IACACIAAACIgHDBIgBACIgBABIg9AzIhMBAQg7Avg6AsIgoAeIgnAdIgCABIgEgBgALLtWIgRgJIgCgBIgCgDIACgDICJjiIADgCIAEAAIACADIAIAZIgBAEIgfA8IAJAmIASgGIAZgdIACgCQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAEACAGABIABAAQAEABAFgCIAAgBQARgKAPgOQAYgVAbgSIANgLIABAAQAWgUASgYIAXgeQARgbAQgdIACgBIACgBIB5gLIAEABIACACIAAADIgBACIgYAbQgYAagZAYQgiAhgfAjQglApgYA0IAAgBIgbBBQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgxAUIgDAAIgDgBIgOgOIABAAQgMgKgPACIgHABIgBAAQgOAAgNADIABAAQgRAFgQAHQg2AWg4ASIgBAAIgCAAgAcVt1IgCgDIhcjhIAAgCIABgDIAnhCIAGgKIADgCIACAAIADABIAVAUIABAAIAJgGQAOgNAPgJIAWgPQAxghAqgrQBahaBehYQAiggAngbQALgIAMgGIADgBIADABIABADIAEAKIAAAAQACAGAHAHIAcgOQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgHAtQgDATAFARIACAAIADACIAFAFIABABIAAgBIACAAQAPAFARgDIACABIACABIADADIAAACIAAADIgFAKQgTAcgQAeQgKATAMASQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCADIgEADIAAABQgIAFgCALQgCADADACIAAAAIACADIABADQgDALgHANQgGAJAEALIABABIABAEIgOA8IgBACIgnAtIgDABIgoAJIgDAAIgCgCIgFgIQgQgCgOAKIAAAAIgNAJIgEAAIgaAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgDIgDAAQgJADgIAGIgBAAQh+Boh0B1IgDABIgDAAgAcNyvIgDgBIgCgCIgBgBIgQgOIgCgDIABgDQAZgoAHgsIAAgBIACgOQABgKgCgJIAAgBIAAgEIAAAAIgBgHIABgEIBriXQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAHADQALgHAGgJQAxg/AuhBIgHhHIAAgDQAphYArhWQAGgMAIgKQALgPALgNIARgTIAqgxIAAAAQAEgFAEACIADACIABADIAZArIABACIAAADQAIAOAGARIAKAdIgBgBIADAJIACAPIAAAAIABAEIAAABIAAADIAFAGIAUgGQAAAAABgBQAAAAABAAQAAAAABAAQAAABAAAAIADACQAHALAAAOIACAMQADAMAGAMQAZAxAEA1IAAAJIABAQIACAFIAAABIACADIAjATIACABIAMAMIAAAEIAAADQgLAOgLAMIAAAAQgHAIgIAAIgIABIg8AfIg0AdIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAIgBgCIgJgXIAAgBIgCAAIgDABQgSAIgPAMQg7Axg4AzQhCA7g+A+QgtAvgzAnIgUAOIgnAcIgDABgEAkwgTRIhDgZIgDgDQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBIAHgUIACgCIAwgnIAEgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIAHAHIAAgBQAGAIAKADIABAAQAEABAFgBIABgBQASgDATgFQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADADIgBAEIgSAqIgCACIguAgIgCABIgCAAgEAlZgUqIgDgCIgHAAIgCgBIgHgEIgHgGIgLgQIgDABIAAABIgIADIAAAAQgFABgCADIgBAAIgYATIgDABQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCgDIgBgNIgHgVIgBgDIACgCQAQgRANgUQAIgPAEgQIAAAAQADgLgDgLIgBgDIggACIgDgBIgCgBIgBgDIgHgDIgBgBIgDgEIgBgDIAFhEIABgCIACgCIA6gjIADgBQAOACALgFQALgFAHgKIAAAAIAHgJIABgBIABgCQARgWAUgWIAAgIIgFgBIgCgBIgBgCIgBgBIgEABIgCAAIgDgBIgOgOIgGgCIgIgDIAAAAIgUgOIgBgCIgBgCIgDgwIAAgCIACgCICLh8QAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIADABIACADIAIAkIAAABIABAHQABAIgFAIIAAAAIgCAEIAAACIAAABQgBAJgDAKQgHAXABAXIAIgBIACABIAGADIACACIAAADIgBACIhKBnQgCAtADAuQADA1ANAzIgBADIgnBcIgCACIglATIgDABIgCAAgEAn0gbiIgOgLIgBgCIgBgCIACgNIABAAIADgVQABgOAGgQQACgGgCgFIgFgXQgEgPACgMIABgCIAUgbQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIARgDIACABIA4AVIACABIABADIAAACIgYA2IAAAAQgVArggAlIAAABIgIAKQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgEgBgEAlEgbqIgCgDIgXgzIAAgDQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAGgFIABAAQA8g7A6hCQAMgOANgMQAegeAhgWQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAEACIABAEIgBAdIABAFIABABIABADIBLgXIADAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIAAACIABASQABAJgBAIIgEAlIgDADIgDABQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgBIgNgEIAAgBIgPgGIABABIgHgDQgMgDgNACIgCAAIgCgCIgBgBQgRADgHAPQgIANgJALIgjAjIAAAAQg7A4g/A2IgDABIgCAAgEAkpgc0IgCgCIgCgDQADgdgQgVIgYABIgDgBIgCgDIgDgRQgEgRgHgOQgKgXgJgYIgCgCIgDgCIgQgoIAAgCIABgDQArg/A2g2QAHgIAIgHIADgBIADABIACACIAfAuIAAACIAAACIgOA3QgDAIACAIQAHAfADAdIACAGIABADIgBACQgQAZAEAgQABAHADAHIgBAAQAEAIAGAHQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgtAuIgDABIgCAAgEAltgd5IgDgCIgMgSIgBgCQgEgXAKgVIADgIIAAAAQACgqgLgqIgBgDIAFgQIAHgeQABgKgCgIQgNghgRgeIgBgDIABgCIAJgNIAIgQIAAgFQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIADgCIADABQAJAGAJAMQAKAOAJAPQAdA1AnAtIAAABIAfA0IAAAEQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgtArIhKBSIgCACIgDAAgEAoagflIgDgCIgBgDIgBgiIgBgHIAAAAIAAAAIgUAJIgDAAIgDgCIgBgDIAAgDQgQgdgUgcQgNgRgLgTIAAAAQgagwglgnIgKgMIgIgMIgIgFIgCgCIgBgCQAAgRAIgNQALgUACgZIADgdIABgNIABggIAAgRQgDgFAAgGIAAgBIgCgHQgCgHgCgLQgCgTAIgSIADgJQgDggAKgbQABgFAJgBIADgBIATgFIADAAIACABIAFAGIACACIACAKIAUAJIACABIADAEIAHACQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAFAFAGABIAQgDIAAAAQAGgBAFgEIAIgFIADgBIADACQALAKANgCIAugGIADAAIACACIABADIAAACIAHADIAcgPQAKgRARgNIAAAAIAEgEQAbgXAcgVIAEgBIACABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBAEIgIAMQABA4gNA0QgNAxgYAsQgYAtgdArQgPAYgKAbIAAgBQgEAPgCARQgDAfgBAhIgEBKIgDAUQgDAXAPAQIANARIABADIgBADIgCACIg1AQIgDAAg");
	this.shape_59.setTransform(298.15,271.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(200));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(730.5,545.9,718.7,491.69999999999993);
// library properties:
lib.properties = {
	id: 'compositionSplashMSP',
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
an.compositions['compositionSplashMSP'] = {
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