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
	this.shape.setTransform(19.0246,73.1332,1.1335,0.9637);

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
	this.shape_11.graphics.f().s("#999999").ss(0.3,1,1).p("Ag0g7IAXAOIgZAPIgXgOAicAgIAbgRIgXgOAjOA+IAagPIAbAQIAZgPIgcgQIgYAPIgXgOAiZA/IAYAQIgZAPIgZgPgAizASIAXAOAg0ACIAagPIgcgRIgZAQgAgbARIgYAOIgZgPIAYgOAgbARIgZgPAhnAAIAYgOIgXgOAhlAgIAZgQIgbgQAhoA/IAbgQIAaAPIAZgPIgZgQIgaAQIgYgPIgbAQgAhOBPIgZAPIgagPIAZgQAhOBPIgagQAg2BeIAbgRIgYgPIgbARAg2BeIgYgPAh+gOIAXAOIgaAPIAcARAj9BbIAXgOIgXgOAhpB8IAagPIAZgPAhQCMIgZgQAg2B8IgZgPIgYgPIgaAQIAYAOAiVCYIAVgNIgZgPIAYgOIgZgQIgYAPIAZAPAiuCJIAVgNAjIB6IAWgNIgZgPIgbgRIAYgPAiACLIAXgPAhpCbIgXgQAjhBrIAWgNAjlAwIAXAOADhhNIAdgSAD8g+IgbgPADJhcIAagPADggtIgZgQIAagQIgYgPIgZgPIgaAQIgZgPIgZAPIAZAPIgaAQIAZAPIAagPIAYAPIAZgQIgYgOIgZgQIgZAPIAZAQIAZgPIAagRACviJIgYAPIgagRIgYgOACwhrIgZgPABih7IAbgQIAWgOAB9hqIgbgRIgZAQIAbAQIgZAQIAYAPIgYAOIgYgPIAYgOIgcgRIAagPIgYgPABlgeIAXgPIAYAPIAagPAB9hqIAagQAgBgcIAZgRIgagRIAZgPIAcAQIgbAQIAZAPIAagQIAaAQIgbAQIgZgQIgbARIgXgPIgZAPIAYAOIgZAQAAvhcIgYAPIgXgPAAWhrIAZAPAAwABIAagPIAYAOIAbgPIgYgPABIAPIgYgOIgaAQIAZAOIAZgQIAagPAgCAgIAYgPIgYgQIAYgOIAaAOAgBA9IAWgOIAagQAAVAvIgXgPIgZgPAB9gPIAXgPABLiJIAXAOADJh6IgZAPAgbBNIAagQIgZgOIAYgPAgdgtIAcARAgCg+IgbARAgZhLIAXAN");
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
	this.shape_9.graphics.f().s("rgba(255,255,255,0.537)").ss(0.3,1,1).p("Ag2geIgXgOAg0g7IAXAOIgZAPIgZAQIAbAQIAagPIgcgRAiBAPIgXgOAizASIAXAOIgYAPIAbAQIAYAQIgZAPIgZgPIAagQIAZgPIAYAPIAbgQIgYgPIAZgQIgbgQIAYgOIgXgOAhnBeIgagPIAZgQAi0AvIgXgOAicAgIAbgRAiAAwIgcgQAgbAQIgYAPIgaAQIAaAPIgbARIgagQAgbAQIgZgOAg2BdIgYgOIgZAPIgaAQIAYAOIAagQIAZgPIAbgQIgYgPIAZgPIgZgQIgZgPIAYgOAh+gOIAXAOIgaAPIAcARIgbAQAjlAwIAXAOIAagPAjmBNIAYgPAj9BbIAXgOIgXgPAg2B8IgZgQIgYgOAhpCaIgXgPIAXgPAiVCXIAVgMIgZgPIAYgOIgZgQIgYAOIAZAQAjIB6IAWgOIgZgPAiuCJIAVgNAhQCLIgZgPAjhBrIAWgOIgbgQADhhNIAdgSAD8g9IgbgQIgYgPIAagPACviJIgYAPIgagRIgYgOACwhrIgaAQIgZAPIAZAQIAZgPIAagRIgZgPIgZgPAB9hqIgZAPIAZAPIgaAQIAZAPIAYAPIAZgPABlgeIAXgPIAagPIAXAPIAagQIgYgOIgZgQIgZgPIAagQABLiJIAXAOIgZAQIgYgOAAWhrIAZAPIgYAPIAcAQIgbAQIAZAPIAagQIgYgPIAYgOIgcgRIAagPIAbAQIgZAQIAYAPIgYAOIAaAQIgbAQIAYAOIAbgPIAXgPAgBgcIAZgRIgagQIAZgQIgXgOABIAQIAagQAAWgNIAaAOIgaAPIAZAPIAZgPIgYgPIAagPIgZgQIgbARIgXgPAgCABIAYgOAAWAQIgYgPIgZAPAgCAgIAYgQAgBA9IAWgOIAagQAAVAvIgXgPIgZgQABih7IAbgQIAWgOAB9hqIgbgRAB9gPIgYgPADJh6IgZAPADggtIgZgQIAagQAgdgtIAcARIgZAPIAYAOAgBA9IgZgOIAYgPAgbBNIAagQAgCg9IgbAQAgZhLIAXAO");
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
	this.shape.graphics.lf(["#D6E5E0","#7DA89A"],[0,1],-14.2,-35,60.9,105.9).s().p("ABDOBQkOg/i0hkQiMg4AJhUIgGkrIACg8IABgTIAEAAIAFhfIAsoeQASkOBTiTQBUiTEYCAIBAAqQCgBRBEAsQBUA2AzBnQgEAFAKAWQAlBKATBSQAHAgAEAiIAGAyQANB4ABGiIAABPIgVF1QhDCijKAAQhJAAhbgVg");
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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B38569").s().p("AAFAWIgBgCIgRhAQANAEABAHIAIAqIAFAkQgGgLgDgMg");
	this.shape_3.setTransform(7.8,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3C5A9").s().p("Ag6C0QgHgJgDgJIgHgTIgGgQIgJgeIgBgBIAAABIgiAGIAEiMIAahNIADgJIAGgRQATgxAsgCQAmgDAVAqIAkBfIADAIIACADIAAACIACAGIADAGIAAABIACAEIADAHIACAFIADAHIAEAMIAFANIAEANIAEANIAEANIAEAOIADANIACAHIAAAAIADANQADAJgGAMQgBAEgPAAIgCAAQgEgBgEgCIgCgHIgDgGIgBgBIgFAEIADAJQABACAAAGIgDAKQgCAEgFAEQgFAEgNAAIgHgBIgBAAIgEgJIgEgHIgKAEIABAFIABACIAAABIAAACIAAACQAAAIgEAGQgGAHgNAAQgKAAgEgCIgBgBIgFgLIgBgCIgJACIgGADIABACIACAFIAAABIABAEQgBAEgFAFQgJAIgJAAIgDABQgIgGgFgHg");
	this.shape_4.setTransform(17.7599,15.2686);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).wait(1));

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#367672").s().p("AiCKuQgpgpgKg0IgBgFIAAAAIAAgEIgCgXQgbn6gMopIAAgMIAAgFQAAhdBChBQBBhCBcAAQBdAABCBCQBBBBAABdIAAAFIAAAJQgNImgNDqIgPEXIgBAPQgEAkgRAfIgGALIgCACQgLAPgNAOQg2A2hLAAQhMAAg2g2g");
	this.shape.setTransform(45.375,73.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#367672").s().p("AggI2QgJgHgHgJQhEhFhJmVQgvkLgciGQgThoACg4QADggAOgXQBJhjC0A2QBMAcAXBlQAdB+BLFLQBLFLAMB2QAGBBgIAaQhKBAhZAAQhFAAhNgng");
	this.shape_1.setTransform(54.6112,172.9091);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7C12D").s().p("AjxCjQARhhCiinQCgioA7AsQA6ArAeBWIiSCCQhzBog9AqQgyAighANQgaAIgRAAQgzAAANhIgAiLBtIAWAMIAGAEIABABIACABIADADIACABIAHAHIABABIACABIAIAHIgMAJIg5AkIgrARIgFABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIABABIAAAAIAFABIACAAIAMABIACAAIATgDIATgGIAAAAIABgBIACAAIABgBIACgBIADgBIADgCIADgCIASgNIACgCIACgBIAJgKIAMgSIACgEIABgBIBShDIABAAICsifIAEgCIAggiIABgCIAGgGIgBgCIAAAAIgDAAIgBAAIgBAAIgFABIgDABIgBAAIgDABIgBABIgEABIgBABIgCABIgDACIgBABIgBABIgFAEIgEAFIgBABIgDAFIAAABIgBAAIgDAKIAAABIgBAGIgCgCIgFgNIgDgNIAAgKIABgLQABgJAEgKIAQgaIAEgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBgBIgBAAIgBABIgCAAIgIAFIgBABIgBAAIgBAAIgDADIgGAFIgBACIgEAEIgBABIgBABIgGAKIgFATIAAALIABACIABAJIACAEIAAABIABADIAIANIAFAEIACACIADADIADABIgoAcIgBABIgBABIAAAAIhoBVIgcAcIAAAAIgBABIhIBLIgBgBIAAgBIgEgMIAAAAIgCgFIgCgCIgBgCIgGgHIgCgCIgCgCIgBgCIgGgEIgBAAIgJgGIgBAAIgEgCIgCgBIgCAAIgFgCIgDAAIgBgBIgBAAIgHgBIgKAAIgJACIgBAAIABAAIATgcIACgDIAAgBIAAAAIACABIABAAIAJAEIAKACIAEAAIABgBIAAgCIgCgHIAAgBIAAAAIgCgDIgBgCIAAAAIgBgCIgBAAIgBgBIgCgBIgFAAIgBABIgBAAIADgDIAHgLIABgCIABgCIAAAAIACABIABAAIAAABIAKADIALACIABABIAEAAIABgBIgBgCIgBgHIgBgBIgDgFIAAAAIgCgDIgBAAIgDgBIgCgBIgBAAIgBABIgCAAIgBAAIgCABIANgQIABgBIACgDIAAgBIAAABIADABIAKAEIAJACIABAAIAEAAIABgBIAAgBIgCgHIAAAAIgDgFIAAgBIgCgCIgBAAIgCgCIgDAAIgBAAIAAAAIgCAAIAAABIgBAAIAKgMIABgBIAAgBIABgCIABAAIAAAAIABABIABAAIABABIAUAHIABAAIABAAIADAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIgBgBIgBgGIAAgCIAAAAIgCgEIgBgCIgCgCIgEgCIgCgBIgCAAIgBABIgCAAIgCABIALgOIABgBIABgBIABgBIAAgBIAAABIACAAIAAABIALAFIALADIABAAIABAAIACABIABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCIAAgDIgBgCIAAgCIgBgBIAAgBIgCgDIAAgBIgBgBIAAgBIgBgBIgBAAIgBgBIgCgBIgDgBIgEAAIgBABIAAAAIADgDIAIgKIABgBIABgBIABgBIAAgBIAAABIACAAIABABIABAAIAKADIAJACIAFAAIABgBIAAgBIgBgDIgBgFIgBAAIAAgBIgDgEIAAgBIAAAAIgBgBIgBgBIAAAAIgDgBIgDgBIAAAAIgBABIAAAAIALgNIABgBIABgCIABgBIAAABIABAAIACABIAXAHIAEAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAgBIgBgDIgBgCIAAgCIgBgBIAAgBIgCgCIgBgCIgBgBIgBgBIgBgBIgDgBIgDgBIgCAAIAGgGIABgCIACgCIgBgCIAAAAIgCgBIgCAAIgDgBIgCAAIgBgBIAAAAIgEABIgDAAIgCABIgBAAIgCACIgCACIAAABIgBABIAAABIgBABIAAAGIgBgDIAAgCIgDgCIgBAAIgCgBIgDgBIgBAAIAAABIgCAAIgBAAIAAABIgCAAIgCACIgBABIgCABIgCADIgDADIAAABIABAAIABABIABABIABAAIABAAIAIADIgBAAIgBAAIgBABIgBABIgBAAIgDACIgCAEIgBAAIAAABIgBACIAAABIgBAAIAAADIgBAEIgBgCIAAgCIgBAAIAAAAIgCgCIAAAAIgDgBIgCgBIgBAAIgCABIAAAAIgBAAIAAAAIgEADIgBABIgBABIgFAFIAAACIAAAAIABAAIABABIABAAIABABIAIACIgCAAIgBAAIAAABIgCABIgBAAIgBAAIgEAFIgBACIgBACIAAAAIAAABIgBACIAAAEIgCgDIAAgBIAAAAIgBAAIAAgBIgBgBIgDgBIgEAAIgCABIAAAAIgBABIgDACIAAAAIgBAAIgFAGIgBABIAAACIABAAIABAAIABABIABAAIAAABIAHABIgBAAIAAABIgBAAIgCABIgBAAIgDADIgCADIAAABIgBABIAAACIAAABIAAABIgDgCIgCgBIgCgBIgBAAIgBABIgCAAIAAAAIAAAAIgEADIgBAAIgBAAIgBACIgFAFIAAABIABAAIABABIABABIAAAAIABAAIAJAEIgDAAIgBAAIgBABIgBAAIgBABIgDADIgCADIgBAAIAAABIgBACIAAACIAAACIAAAAIgBAAIAAgBIAAgBIgBAAIgBgBIgDgBIgEAAIgBAAIgBAAIAAABIgEACIgBABIgCABIgBADIgDADIAAABIAAAAIABABIABABIABAAIABAAIAJADIgBAAIgCABIgBAAIgBAAIgDABIAAABIgDADIgCADIAAABIgBABIAAACIgBABIAAAGIgBgDIAAAAIgBAAIAAgBIgBgBIgBAAIAAAAIgCgBIgDAAIgBAAIgBAAIgBABIAAAAIgCABIgCACIgBABIgFAGIgBABIAAABIABAAIAEACIAHACIgCAAIAAABIgBAAIAAAAIgCABIgBABIgDADIgCADIAAABIAAABIgBACIAAAAIAAABIAAAAIAAABIAAAAIgBAAIgBgBIgCgBIgEAAIgBABIgBAAIAAAAIgBABIgDACIgBABIgEAGIgBABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIACABIAAAAIABAAIAIADIgFACIgBAAIAAAAIgBABIgCABIAAABIgBAAIgFAIIAAABIgBABIAAACIgBABIAAAHIgBgDIAAAAIgBAAIgCgCIAAAAIgDgBIgDAAIAAAAIgBAAIgBABIgBAAIgBAAIgBACIgCABIgBABIgEAHIgBABQAAAAgBAAQAAABAAAAQAAAAABAAQAAAAAAAAIABABIACAAIAAABIABAAIASADIAEAAIABgBg");
	this.shape_2.setTransform(60.6115,251.539);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai9DGIgMgBIgCAAIgFgCIAAAAIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIAFgBIArgRIA5gkIAMgIIgIgHIgCgCIgBgBIgHgGIgCgCIgDgDIgCgBIgBgBIgGgEIgWgMIgegKIgBAAIgEAAIgSgDIgBAAIAAAAIgCgBIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQABgBAAAAIABgBIAEgHIABgBIACgBIABgCIABAAIABAAIABAAIABAAIAAgBIADAAIADABIAAAAIACACIABAAIAAAAIABADIAAgHIABgBIAAgCIABgBIAAgBIAFgIIABAAIAAgBIACgBIABAAIAAgBIABAAIAFgCIgIgDIgBAAIAAAAIgCgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgBIAEgGIABgBIADgCIABAAIAAAAIABgBIABAAIAEAAIACAAIABABIABAAIAAABIAAgBIAAgBIAAAAIAAgBIABgCIAAgBIAAgBIACgDIADgDIABAAIACgCIAAAAIABAAIAAgBIACAAIgHgCIgEgBIgBAAIAAgCIABgBIAFgGIABAAIACgBIACgCIAAAAIABgBIABAAIABAAIADAAIACABIAAAAIABABIABABIAAAAIABAAIAAABIABABIAAgFIABgBIAAgCIABgBIAAAAIACgEIADgDIAAgBIADgBIABAAIABAAIACgBIABAAIgJgEIgBAAIgBAAIgBgBIgBgBIAAAAIAAgBIADgDIABgDIACgBIABgBIAEgCIAAAAIABAAIABgBIAEAAIADABIABABIABAAIAAABIAAABIABABIAAgBIAAgCIAAgBIABgCIAAgBIABgBIACgDIADgDIABAAIABgBIABAAIABgBIADAAIgJgEIgBAAIAAAAIgBgBIgBgBIgBAAIAAgBIAFgFIABgCIABAAIABAAIAEgCIAAAAIAAgBIACAAIABAAIABAAIACAAIACABIADACIAAAAIAAgCIAAgCIABgBIAAgBIACgDIADgCIABgBIACAAIABgBIAAAAIABAAIgHgCIAAgBIgBAAIgBgBIgBAAIgBAAIAAgCIABAAIAFgHIABAAIAAAAIADgCIABgBIAAAAIACgBIAEAAIADACIABAAIAAABIABAAIAAAAIAAABIACADIAAgEIABgBIAAgBIAAgBIABgBIABgDIAEgEIABgBIABAAIACgBIAAAAIABAAIACgBIgIgCIgBgBIgBAAIgBgBIgBAAIAAAAIAAgBIAFgGIABgBIABgBIAEgCIAAAAIABgBIAAAAIACAAIABAAIACAAIADABIAAAAIACACIAAAAIABAAIAAACIABACIABgEIAAgCIABgBIAAgBIABgCIAAgBIABAAIACgDIADgCIABgBIABAAIABgCIABAAIABAAIgIgDIgBAAIgBAAIgBgBIgBAAIgBAAIAAgCIADgDIACgDIACgBIABAAIACgCIACgBIAAAAIABAAIACgBIAAgBIABAAIADABIACABIABAAIADADIABABIABADIAAgGIABAAIAAgCIABgBIAAgBIACgCIABgBIABgBIACgBIADAAIAEAAIAAAAIABAAIACAAIADABIACABIACAAIAAAAIABACIgCACIgBACIgGAGIACAAIADABIADABIABABIABABIABABIABACIACACIAAABIABABIAAACIABACIABADIAAABIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgEAAIgXgGIgCgBIAAgBIAAAAIgBAAIgBACIgBABIgMANIAAAAIABgBIAAAAIADABIADABIAAABIABAAIACACIAAAAIAAAAIADAEIAAABIABABIABAEIAAADIAAACIAAABIgFAAIgKgDIgKgDIgBAAIgBgBIgCAAIAAAAIAAAAIgBABIgBABIgBABIgIAKIgDADIAAAAIABAAIAEAAIADAAIACACIABAAIABAAIABABIAAABIABABIAAABIACAEIAAAAIABABIAAACIABACIAAAEIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgCAAIgBAAIgBgBIgLgDIgLgFIAAgBIgCAAIAAAAIAAAAIgBABIgBABIgBABIgLAOIACgBIACAAIABAAIACAAIACAAIAEACIACACIABACIACAEIAAABIAAABIABAGIABACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBIgDAAIgBAAIgBAAIgUgHIgBgBIgBAAIgBgBIAAAAIgBAAIgBACIAAABIgBABIgKAMIABAAIAAAAIACAAIAAgBIABABIADAAIACABIABAAIACACIAAABIADAFIAAABIACAHIAAACIgBABIgEAAIgBgBIgJgCIgKgEIgDgBIAAAAIAAAAIgCADIgBABIgNAPIACgBIABAAIACAAIABgBIABAAIACABIADABIABAAIACADIAAABIADAEIABABIABAHIABACIgBABIgEAAIgBgBIgLgCIgKgDIAAAAIgBgBIgCAAIAAgBIgBACIgBACIgHALIgDADIABAAIABgBIAFAAIACACIABAAIABABIABABIAAABIABABIACADIAAAAIAAABIACAHIAAACIgBABIgEAAIgKgCIgJgDIgBAAIgCgBIAAgBIAAABIgCADIgTAcIgBAAIABAAIAJgCIAKAAIAHABIABAAIABABIADAAIAFACIACABIACABIAEABIABAAIAJAGIABABIAGADIABACIACADIACABIAGAIIABACIACABIACAFIAAABIAEALIAAABIABABIBIhKIABgBIAAAAIAcgdIBohVIAAAAIABgBIABAAIAogcIgDgBIgDgEIgCgCIgFgEIgIgNIgBgCIAAgBIgCgFIgBgJIgBgCIAAgLIAFgSIAGgLIABgBIABgBIAEgEIABgCIAGgFIADgCIABgBIABAAIABgBIAIgFIACAAIABAAIABAAIABAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgEAEIgQAaQgEAJgBAKIgBAKIAAAKIADANIAFAOIACABIABgGIAAgBIADgKIABAAIAAgBIADgFIABgBIAEgFIAFgEIABgBIABgBIADgCIACgBIABAAIAEgCIABAAIADgCIABAAIADgBIAFgBIABAAIABAAIADAAIAAAAIABACIgGAGIgBACIggAiIgEACIirCfIgBAAIhTBDIgBACIgCADIgMASIgJAKIgCABIgCACIgSAOIgDABIgDACIgDACIgCAAIgBABIgCABIgBAAIAAABIgTAGIgTADg");
	this.shape_3.setTransform(61.2021,253.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23,0,62.099999999999994,275.1);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#367672").s().p("AhbKaQhEgIgrg2QghgogEgwIAAgFIAAgBIAAgDQAAgLABgKQAbnKAunzIABgKIAAgFQAKhTBCg1QBCg0BSAKQBTAJA1BCQA0BBgJBUIgBAEIAAAIQhEHugkDRQgTB1gYCFIgCANQgHAggSAaIgHAJQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAQgLANgOAKQgtAlg4AAIgUgBg");
	this.shape.setTransform(37.3921,66.6888);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#367672").s().p("AhSH8IgOgRQg1hFgalzQgRj1gMh8QgHhfAHgyQAFgdAPgTQBMhSCcBCQBDAhAKBeQAPBzAiExQAjEyAABrQAAA7gKAWQg/AshEAAQhHAAhPgyg");
	this.shape_1.setTransform(34.5379,156.3876);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7C12D").s().p("Ai9CSQhcgFAvhKQAthJC9hXQC7hVAhA3QAiA3gDBQIijA8QiBAvhAAPQgyAMgfAAIgDAAgAjbB4IAAABIABAAIABABIACACIALAGIACAAIACABIAFACIAKACIADAAIADAAIAQABIABgBIADAAIAPgCIAPgFIALgFIAEgDIACgBIABgBIAEgCIAFgFIABAAIACgCIABgCIAAAAIAAAAIBagcIC8hJIABAAIACgBIACgBIACAAIAogRIACgBIAGgEIABgBIgEgCIgBgBIgBAAIgFgBIgCAAIgBgBIgJAAIgBABIgDAAIgBAAIgHADIgGADIgBABIgDACIgBAAIgBABIgBACIgCACIgCACIAAABIgBABIgDAFIAAgLIABgCIAAgFIAAgBIAAgCIABgBIABgFIAFgNIAHgLIACgCIACgCIACgCIACgBIACgCIACgCIAEgDIAFgDIAKgGQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAgBgBIgBgBIgBAAIgDAAIgDAAIgHABIAAgBIgBABIgCAAIgJADIgGADIgBABIgJAGIgBABIgDAEIgFAHIgGANIAAACIAAABIgBAHIAAAJIAAABIABAFIACAFIAAABIAAAAIABACIADAFIABABIABABIABABIgiAIIgFABIgCABIgCAAIAAAAIgBABIhEATIgCABIhBAZIgGADIgDABIhNAjIgJAFIAAgBIABgBIAAgKIAAAAIAAgBIAAgEIgBgCIAAgCIAAgBIAAgBIgBgCIgDgJIgBgCIgGgKIgIgIIgEgDIgCgCIgDgBIAAgBIgEgCIgCgBIgCgBIgPgDIAAAAIABgBIAYgQIACgCIAAAAIAAAAIABABIABABIAAAAIAHAGIAHAEIABABIAAAAIACAAIABABIABgBIAAgCIACgHIAAgEIgBgCIAAgBIAAgBIgDgDIgCgBIAAAAIgCAAIAKgHIACgBIABAAIAJAHIAIAFIABABIAAAAIACABIABAAIABAAIAAgCIABgGIABgBIAAgFIgBgBIAAgBIAAgBIgBgBIgCgCIgCgBIgBAAIAAgBIgDAAIANgIIABAAIABgBIACgBIAJAIIAHAFIABABIABAAIABABIABAAIACAAIAAgCIABgGIAAgBIAAgGIAAgBIAAgBIgBgBIgBgBIgBgCIgCgBIgBAAIgBgBIgBAAIAKgFIABgBIABAAIABgBIACABIAAABIAPAMIABABIAAAAIABABIACAAIABAAIAAgCIABgDIABgDIAAgBIAAgCIAAgDIAAgCIgBgBIAAgBIAAgBIgBAAIgBgCIgDgCIgBAAIgBAAIgBAAIALgGIAAgBIABAAIACgBIABABIABABIAGAHIAIAGIAAABIACABIACABIABgBIAAgCIABgCIABgDIAAgCIAAgEIAAgCIAAgCIgBgCIgBAAIgBgCIgDgCIAAAAIgBAAIgBgBIANgGIABgBIAAgBIAAABIACABIABABIAHAGIAIAFIAAAAIABABIACAAIABABIABgBIAAgCIABgFIAAgCIAAgBIAAgDIAAgCIAAgBIgBAAIAAgCIAAAAIgDgDIgBAAIAMgGIACgBIAAgBIAAABIAKAJIAJAFIAAABIACABIACAAIABAAIAAgCIABgGIAAgBQAAgBABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgEIAAgCIAAgBIgBAAIAAgCIgBgBIgCgCIgCgBIgBAAIAAAAIAFgDIAAAAIACgBIABgBQAAAAABgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgCIgCgCIgCgBIAAgBIgBAAIgDgBIgBgBIgBAAIgDAAIgDAAIgCACIgBAAIAAABIgBABIAAABIgBAAIAAACIAAgCIgBgBIAAAAIgBgCIAAAAIAAgBIgCgBIgCgBIgBgBIgDAAIgFABIgBABIAAAAIgEACIgDABIgBABIgBACIABAAIAAABIACABIABABIAEADIgEAAIgDABIgDABIgDAEIAAAAIgBACIgBACIAAgBIgBgCIAAgBIgBgCIgCgCIgCgBIgDAAIgCABIgDAAIAAAAIgBABIgEACIgCABIgCABQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAABIABABIABAAIAAABIABABIACACIgDAAIgDABIgEAEIAAABIgBAAIAAAAIgBACIAAABIAAgDIgBgBIgCgCIgCgBIgEAAIgEABIgBAAIAAABIgCAAIgCACIgEACQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAABIABABIABAAIABABIACACIgDAAIgDABIgDACIgBABIgBACIAAAAIAAAAIgBgBIgBgCIgCgBIgBAAIgBAAIgCAAIgBAAIgDABIgBAAIAAAAIgCABIgCABIgDABIgBABIgBABIABABIABACIAFAEIgBAAIgFAAIgDABIgCACIgBABIgBACIgBABIAAAAIgBgBIAAAAIgCgCIgCgBIAAgBIgEAAIgEACIAAAAIgBAAIgEADIgCABIgCABQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAIABABIABABIAFAFIgCgBIgBAAIgCABIgBAAIgBAAIgDABIgDACIAAABIgBABIgBABIgBABIAAABIAAAAIAAAAIgBgBIAAAAIgCgCIgCgBIgDAAIgFABIAAABIgBAAIgHAFIAAABIAAABIABABIABABIADACIgDAAIgBABIgBAAIgDABIgCACIgBABIAAABIgBABIgBAAIgBgBIgCgBIgDAAIgBAAIgEACIAAAAIgBAAIgBABIgGADIAAACIAGAFIgBAAIgEAAIgCABIgBAAIgFACIgDADIAAAAIgBABIgBACIgBABIAAAAIgBACIAAAAIgBgCIAAAAIgCgCIgCgBIgEAAIgBABIgDABIgBAAIAAABIgCABIgCACIgDACIAAACIACACIABAAIAGAFIAHADIABAAIABABIABAAIABAAIAGAFIAEAEIACABIABABIADADIASAUIACAEIACABIABACIACADIABACIACADIAAABIAAABIACADIABADIABABIAAABIAAAAIAFAJIgoAKIgUACIgCABIgDAAIgGABIgbABIgCgBIgMAAIgDAAIgCAAIgBAAIAAABg");
	this.shape_2.setTransform(27.1857,222.8837);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai7B2IgCgBIgDAAIgLgCIgEgBIgCgBIgDgBIgLgGIgBgBIgCgBIAAAAIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIABAAIADABIAMAAIACAAIAbgBIAGgBIADAAIACAAIAUgDIApgJIgGgKIAAAAIAAgBIgBAAIgBgDIgBgEIAAAAIgBgBIgCgDIgBgCIgCgDIgBgCIgBgCIgCgDIgTgVIgDgCIgBgBIgCgBIgDgEIgHgFIgBgBIgBAAIgBAAIAAAAIgHgEIgHgEIgBgBIgCgCIAAgBIADgDIACgCIACgBIABAAIAAAAIADgBIABAAIAEAAIADAAIABABIAAAAIABACIAAABIABgCIAAgBIABgBIABAAIABgBIABgBIADgCIAEgDIABAAIACAAIAEAAIABAAIgGgGIAAgBIAGgEIABgBIABgBIABAAIADgBIABgBIADAAIACABIACACIAAgBIABgBIABgBIAAAAIACgCIAEgCIABAAIAAAAIADAAIgCgDIgBgBIgBAAIgBgBIAAgCIAHgFIABAAIABAAIAEgCIADAAIADABIACACIAAABIAAABIAAAAIAAgBIAAAAIABgBIABgCIABAAIAAgBIADgCIADgBIABgBIABAAIACAAIACAAIABAAIgFgFIgBAAIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACgBIACgBIAEgCIABgBIAAAAIAEgBIAEAAIABAAIABABIACACIAAABIABABIAAgBIABgBIABgBIABgBIADgCIACgBIAFAAIABAAIgFgEIgBgCIgBgBIABgBIABgBIADgBIADgCIABAAIAAgBIABAAIADAAIACgBIABAAIABABIABAAIACABIACACIAAAAIAAABIABgBIABgBIABgBIACgCIADgBIAEAAIgDgCIgBgBIgBgBIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAEgDIACgBIACgBIAAAAIABAAIAFgCIADAAIACABIADADIAAABIAAADIABgCIABgBIAAgBIAAAAIABgBIAEgEIAEgBIACAAIgCgCIAAAAIgBgBIgBgBIAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABgBIABgBIAFgDIAAAAIABAAIACgBIACAAIAEAAIACABIABACIABACIAAABIABACIAAAAIABgCIABgBIAAgBIAEgDIACgCIADgBIAEAAIgEgDIgBAAIgCgCIAAgBIAAAAIAAgBIABgBIADgBIAEgDIABAAIAAAAIAFgBIADAAIABAAIACABIACACIABAAIAAABIABABIAAABIAAAAIAAACIABgBIAAgBIAAAAIABgCIAAAAIABgBIACgBIADgBIAEAAIAAABIABAAIADACIABAAIABAAIABABIACACIADADQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBABIgCABIAAABIgFACIABAAIAAABIADABIABACIABABIAAABIABABIAAABIAAABIAAAEQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAACIgBAFIAAACIgBABIgBgBIgCgBIgBAAIgIgGIgKgJIAAAAIgBAAIgCABIgLAGIAAABIADACIAAABIAAABIABABIAAAAIABACIAAAEIAAABIAAABIgCAGIAAACIgBAAIgBAAIgBgBIgBAAIgBgBIgIgFIgHgGIgBAAIgBgCIAAAAIgBAAIgBABIgNAHIABAAIABABIABAAIACABIABACIABABIABACIAAABIAAACIAAAFIAAABIgBADIgBADIAAACIgBAAIgBgBIgDgBIAAAAIgHgGIgHgHIAAgBIgCgCIgCABIgBABIAAAAIgLAGIABAAIABABIABAAIADABIACACIAAABIAAAAIABACIAAAAIAAADIABADIAAABIgBACIAAADIgBACIAAACIgCABIgCgBIgBgBIAAAAIgBAAIgOgMIgBgBIgCgCIgBABIgBABIgBAAIgKAGIACAAIAAAAIABAAIACABIACACIABABIAAACIAAABIABAAIAAAGIgBACIgBAFIAAACIgCABIgBgBIgBAAIgBgBIAAAAIgIgFIgJgJIgCABIAAABIgBABIgNAIIACAAIABAAIABAAIABABIACACIABABIAAACIAAABIABAAIAAAGIgBACIgBAFIAAACIgBABIgBgBIgBAAIgBgBIgBAAIgHgFIgJgJIgCABIgCACIgKAGIACAAIABABIACABIACACIAAACIAAABIABABIAAAEIgBAHIAAACIgCAAIgBAAIgBgBIgBAAIgBAAIgHgFIgGgFIgBgBIAAAAIgBAAIAAAAIgBAAIgCABIgYAQIgBAAIABAAIAOAEIADABIABABIAEACIAAAAIAEACIABABIAEADIAIAJIAHAKIABACIACAIIABACIAAABIAAABIAAACIABACIAAAEIAAACIAAgBIAAAKIgBABIAAACIAJgFIBOgkIACgBIAHgDIBAgYIACgBIBFgTIAAAAIAAAAIACgBIADAAIAEgCIAigHIgBgBIgBgCIAAgBIgEgGIgBgBIAAgBIAAgBIgBgEIgBgFIgBgCIAAgIIABgHIAAgCIABgCIAFgNIAFgHIADgDIACgCIAIgGIABgBIAGgDIAJgDIACAAIACAAIgBAAIAHgBIADAAIADABIABAAIABABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgKAGIgEADIgFAEIgCABIgCACIgCACIgCACIgCACIgBACIgIALIgFAMIgBAFIgBACIAAABIAAABIAAAGIgBABIABAMIACgFIABgBIABgBIABgCIACgCIABgCIABgBIABgBIADgCIABgBIAGgDIAHgCIABAAIADgBIABAAIAKAAIABAAIABAAIAGACIABAAIAAAAIAEACIgBACIgGAEIgCAAIgoASIgBABIgDABIgCAAIgBAAIi8BJIhaAcIAAAAIAAAAIgBABIgCACIgBABIgFAEIgDACIgCACIgCABIgEACIgKAFIgQAFIgPADIgDAAIgBAAg");
	this.shape_3.setTransform(27.95,224.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,0,59.3,237.5);


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
	this.shape.graphics.f("#A25050").s().p("AADAgQgWAAgSgOQgJgHgIgLQgHgMACgJQACgJAEgBQAEgBAEACQADACABACIAHAPQAGALASAFQASAEATgGQASgEAHACQAHACABAGQABAGgDAGQgEAGgOADQgMACgSAAIgHAAg");
	this.shape.setTransform(18.1715,97.8392);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D3BE").s().p("ABtBUQgFgDgEgFQgDgFAAgHQgBgGADgFQACgGAFgEQAFgFAHgCQAEgBAJABQANABAGACQAKADAEAIQAEAFgBAJQAAAKgGAFQgDADgHABIgLABIgQACIgDABQgHAAgFgDgAiagKQgEgCgEgEQgFgGAAgMQAAgHADgMIAEgTIABgFIACgFQADgEAJAAQAIABADADQAEAEAAAKQABAVgFAUQgDAOgIADIgEABIgFgBg");
	this.shape_1.setTransform(22.4031,81.5011);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABxBhQgDgEAAgFIgBgHIAAABQgCgRgMgOIAAAAQgDgDgEgCIAAAAQgOgFgLAPQgDAEgFABQgFAAgEgDQgEgDgBgFQgBgFADgEQAXgfAfANIAAAAQAKADAHAJIAAAAQARATADAYIAAAAIABAKQAAAFgEAEQgEADgFAAQgFAAgEgDgAg9gWQgEgDAAgGIAAgGIAAAAQgDgRgMgNIAAgBQgDgDgDgBIAAAAQgPgFgKAOQgDAEgFABQgGABgEgDQgEgDgBgFQAAgFADgFQAWgeAfAMIABAAQAJAEAHAIIAAAAQARAUADAYIABAAIAAAJQAAAGgEADQgDAEgFAAQgFAAgEgEg");
	this.shape_2.setTransform(21.8795,71.1113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#815451").s().p("AB5BaQgCgCgFgKQgHgPgQgJQgPgIgTgCIgMgDQgGgCgCgFQgBgDADgEQABgDAEgDQAFgCAIgBQAVABARAJQASAJAOAPQALAMADALQACAJgDAEQgBAEgDACIgGACQgFgBgEgFgAhBgmQgEgBgEgDIgFgGIgEgHQgGgJgKgFQgKgEgKACIgGAAIgGABQgDABgCgBIgFgEQgCgEACgFQACgEAFgDQAIgGAMABQAJgBALAEQALAFAKAJQAKAIAGALQADAGAAAFQAAAHgFADIgDABIgEgBg");
	this.shape_3.setTransform(25.7281,60.1722);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgOAAgJgCg");
	this.shape_4.setTransform(19.0833,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},1).wait(11));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3C5A9").s().p("ABdF3QgOhNgtgdQgxgBhMgaQhMgbgqgsQgpgsgThYQgShYAOhkQAPhkAZhxIAKgtQAVAIAZAFQBIAMBIgEQBcCBCXAWQgHBUAoBWQhADWAeBgQAZBTAuAyQgxAeguAAQgwAAgsghg");
	this.shape_5.setTransform(32.8064,84.3557);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#926461").s().p("AgdBZQhCgWgugzQgLgMgDgJQgBgEACgDQADgDAHAEQAMAHAZATQAXARANAIQA9AlBWgDIAZAAQANABAKAGQAAAHgHAFQgFACgJACQgaAFgaAAQgpAAgngNgAAXA1QgfgCgfgNQg4gXgvg0QgQgSgDgPQgBgIAFgDQAFgCAHAIQAFAGAOAMQAgAcATANQAdAUAcAJQARAGAoAHQAlAGAUAIQgDADgHACQgZAIgbAAIgLAAgABQATQg5gKgwgYQg1gbgjgpQgIgKAEgFQADgEAGABIAIAFIAgAYQATAOAOAJQAeARAnANQAcAJAuAKIAcAGQAPAFALAHQgRAFgXAAQgTAAgXgEg");
	this.shape_6.setTransform(20.7589,31.5992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},6).to({state:[]},1).wait(11));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#815451").s().p("ABeJQQl3inhUhPQgOgDgPgGQgigMgbgVQgdgWgSgdQgWgjgJgxQgGgnADg0QAIiXBCiMIACgDQhGgtALhuQAMh2BuglQBSgbBXgJQAugkAygRQDDhDCGCJQAxANAqAXQBKAqAzBJQBbCFgiCdQAMB7gOBNQAeBFAcBgQAbBgghBTQgiBTgwAqQhPBJhiAAQhOAAhZgug");
	this.shape_7.setTransform(54.0363,63.8119);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(6).to({_off:false},0).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0,107.60000000000001,127.6);


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
	this.shape_1.setTransform(80.5634,118.8418,0.8406,0.8406);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5467B0").s().p("AgbAdQgMgNAAgQQAAgPAMgNQAMgLAPAAQARAAAMALQALANAAAPQAAAQgLANQgMALgRAAQgPAAgMgLg");
	this.shape_2.setTransform(63.2052,147.8632,0.8406,0.8406);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5467B0").s().p("AirCdQALgIAohkQAhhSA7htIABgBIAZgyQADgLAOgOQAbgbAmAAQAnAAAbAbQANANAHAQIACAGIABAFQAEAMAAAPQAAALgCAKIgJAXQgQAmgkBAQg7BoiQCTQhZgLALhOg");
	this.shape_3.setTransform(74.6367,131.976,0.8411,0.8411);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_4.setTransform(50.0686,149.2436,0.3767,0.3767);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgPAAgMgLg");
	this.shape_5.setTransform(58.0919,159.7341,0.3767,0.3767);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_6.setTransform(54.7583,159.3197,0.3767,0.3767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAAQgLAMQgMAMgRAAQgQAAgLgMg");
	this.shape_7.setTransform(51.8014,157.587,0.3767,0.3767);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_8.setTransform(49.466,155.2139,0.3767,0.3767);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_9.setTransform(58.4287,152.9086,0.3771,0.3771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_10.setTransform(49.5033,149.5652,0.3767,0.3767,0.3133);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgPAAgMgMg");
	this.shape_11.setTransform(57.4692,160.0996,0.3767,0.3767,0.3133);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_12.setTransform(54.1379,159.667,0.3767,0.3767,0.3133);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgQAAgLgLg");
	this.shape_13.setTransform(51.1904,157.9182,0.3767,0.3767,0.3133);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_14.setTransform(48.868,155.5323,0.3767,0.3767,0.3133);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_15.setTransform(49.3979,149.7155,0.3766,0.3766);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_16.setTransform(57.4201,160.2047,0.3766,0.3766);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_17.setTransform(54.0869,159.7904,0.3766,0.3766);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_18.setTransform(48.7953,155.6851,0.3766,0.3766);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_19.setTransform(54.4449,159.6099,0.3767,0.3767);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_20.setTransform(51.4881,157.8773,0.3767,0.3767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:58.4287,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:49.466,y:155.2139}},{t:this.shape_7,p:{x:51.8014,y:157.587}},{t:this.shape_6,p:{x:54.7583,y:159.3197}},{t:this.shape_5,p:{x:58.0919,y:159.7341}},{t:this.shape_4,p:{x:50.0686,y:149.2436,scaleX:0.3767,scaleY:0.3767}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{x:63.2052,y:147.8632,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.5634,y:118.8418,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]}).to({state:[{t:this.shape_9,p:{x:58.134,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:49.216,y:155.5139}},{t:this.shape_7,p:{x:51.5514,y:157.887}},{t:this.shape_6,p:{x:54.5083,y:159.6197}},{t:this.shape_5,p:{x:57.8419,y:160.0341}},{t:this.shape_4,p:{x:49.8186,y:149.5436,scaleX:0.3767,scaleY:0.3767}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{x:63.0252,y:148.1719,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.3837,y:119.15,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},6).to({state:[{t:this.shape_9,p:{x:62.25,y:149.5,regX:11.5,regY:-10.4,rotation:0}},{t:this.shape_8,p:{x:48.966,y:155.7139}},{t:this.shape_7,p:{x:51.3014,y:158.087}},{t:this.shape_6,p:{x:54.2583,y:159.8197}},{t:this.shape_5,p:{x:57.5919,y:160.2341}},{t:this.shape_4,p:{x:49.5686,y:149.7436,scaleX:0.3767,scaleY:0.3767}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{x:62.7052,y:148.3632,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.0634,y:119.3418,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},2).to({state:[{t:this.shape_9,p:{x:62.05,y:149.4,regX:11.4,regY:-10.3,rotation:0.3153}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{rotation:0.3133,x:54.1379,y:159.667}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:74.111,y:132.499,rotation:0.316}},{t:this.shape_2,p:{x:62.6192,y:148.3154,rotation:0.3151,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.137,y:119.3894,rotation:0.3151,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},3).to({state:[{t:this.shape_9,p:{x:62.2,y:149.5,regX:11.6,regY:-10.4,rotation:0}},{t:this.shape_18,p:{scaleX:0.3766,scaleY:0.3766,x:48.7953,y:155.6851}},{t:this.shape_4,p:{x:51.1304,y:158.0579,scaleX:0.3766,scaleY:0.3766}},{t:this.shape_17,p:{x:54.0869,y:159.7904}},{t:this.shape_16,p:{x:57.4201,y:160.2047}},{t:this.shape_15,p:{scaleX:0.3766,scaleY:0.3766,x:49.3979,y:149.7155}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{x:62.6253,y:148.3284,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape_1,p:{x:79.9823,y:119.3091,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},5).to({state:[{t:this.shape_9,p:{x:58.1152,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_15,p:{scaleX:0.3767,scaleY:0.3767,x:49.1528,y:155.5043}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_12,p:{rotation:0,x:57.7784,y:160.0243}},{t:this.shape_18,p:{scaleX:0.3767,scaleY:0.3767,x:49.7554,y:149.5342}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{x:63.0052,y:148.1632,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape_1,p:{x:80.3634,y:119.1418,rotation:0,scaleX:0.8406,scaleY:0.8406}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},11).to({state:[{t:this.shape_9,p:{x:58.391,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_18,p:{scaleX:0.3766,scaleY:0.3766,x:49.2953,y:155.1851}},{t:this.shape_4,p:{x:51.6304,y:157.5579,scaleX:0.3766,scaleY:0.3766}},{t:this.shape_17,p:{x:54.5869,y:159.2904}},{t:this.shape_16,p:{x:57.9201,y:159.7047}},{t:this.shape_15,p:{scaleX:0.3766,scaleY:0.3766,x:49.8979,y:149.2155}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{x:63.1253,y:147.8284,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape_1,p:{x:80.4823,y:118.8091,rotation:0,scaleX:0.8405,scaleY:0.8405}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]},2).wait(11));

	// Layer_5
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag1BoQgggcgIgxQgHgyAWgrQAWgrAngLQAmgLAgAbQAhAcAIAyQAIAxgXArQgWArgnAMQgLADgKAAQgbAAgXgUgAgNhNQgZAHgOAaQgNAbAEAfQAGAgAWASQAVASAYgGQAZgGAOgbQAOgbgFgeQgGgggVgSQgRgOgRAAIgMABgAgaA7IgHgFQAAgIgDgLQAKAEAJgCIAGgCQANARAFATIgFAAQgOAAgOgMgAgIAhQAIgHAIgOIAkAeQgMAWgVAGQgFgTgOgSgAgwAbIAEAEIAAAAIADACIAEAPQgHgKgEgLgAALAIQAHgOABgNQATALAOAAQADAYgKAVgAglAdQgCgFgBAAIAMgFIAMAMIgCABIgFAAQgHAAgHgDgAgXAQQAKgHAFgKIANALQgGAOgKAFIgMgNgAgFgGQAFgKABgOIAOAJQgBANgGANgAATgZIAAgDQgBgLgHgLQAMAAAJgEQAOAQAFAZQgNgCgTgKgAACgjQAAgJgCgHIAGABQAIALABAMIgNgIgAAIg4IgEgFIgBAAQgEgGgHgCIgBgCQASgCARAOIACABQgHADgIAAIgFgBg");
	this.shape_21.setTransform(36.3061,100.779,0.9078,0.8353,0,6.4665,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C7EC1").s().p("AApBeQgcgKgHgVQgghPg0AdQghAFgoggQgXgUgGgZQgEgdALgTQAGBKBaAWQA8ADAhAxQBAA5BmgnQgkAtgUABQgKADgMAAQgbAAgkgOg");
	this.shape_22.setTransform(36.3617,111.7788);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#334381").s().p("AAAAtQgUgDgVgGQgvgMgMgJQgLgIgDgIQgDgLAHgPQACARAMAKQAdAWA0AKQAyAKAbgbQAbgZAbglQgOAlgMASQgMAUgSAMQgMAIgVAAQgMAAgPgDg");
	this.shape_23.setTransform(46.705,119.8345);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAnQgQgLgSgOIgJgHIgFgbIgHghIAUAOIAjAYIAMAHIAIAlIAHAZIgbgPg");
	this.shape_24.setTransform(36,149.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C73A3F").s().p("AACBRQgYgHgQgIIgIgEIgHgZIgIglIAbAOQAUAKATAIQAUAIAWACQAVACAWgCQAVgCAUgFQAVgGAJgEIARgHIgGAoIglAPQgTAHgVADQgVAEgYAAIgDAAQgWAAgXgGgAiNgHIgYgZIgMg2QAQARAQAMIAQAMIAGAhIAGAbIgYgWg");
	this.shape_25.setTransform(44.825,148.5767);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#334381").s().p("AAOAcQgNgFgTgPQgUgOgRgXQAnAgApANQAQADAPgIQgIAOgLAEIgHABQgHAAgJgCg");
	this.shape_26.setTransform(24.075,112.2223);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8F9CCD").s().p("ABaCZIgHgBIAAgBIgCgEIggg7IgVgqQgagygxhpQAZAeAZAkQAcAkA0A3QA0A4AoAhIgIADQgiANggAAIgLAAgAAWCKQgKAAgMgJQgOgJgHgIQgHgIgkgQIgDgBIgBgNIgBgIIgHglIANAIIBLA0IAaAxIAAABQgFgCgLABgAhgBDIgigfIgTgSIAAgCIACgKIAIgZQAXATAeAWIAKAxIACAKIgBAAQgGAAgPgOgAg9AeIgQgMIgJgxQAWAPAVANIAKAEIAOAdIAXAtQgdgUgkgZgAiKgZIALglIAFADIAaAVIAIAxIgygkgAhXgrIgBgHQgHgqgCgjIALAVIAtBeIAAAAQgYgPgWgQgAh8hGIASg/QADAqAGApIgbgUgAinhHQgDgZgEgMIABgBQAHgHAKgLQAJgMAIgNQgPAxgJAxIgBADIgDgUg");
	this.shape_27.setTransform(42.3,138.3993);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5467B0").s().p("ABmC1QgNgDgKgGIgagyIhLgzIgNgJIAHAmIABAHIABANIADACIAFAQQAGAVgVgpIAAgDIgCgKIgKgyQgegWgXgTIgIAaIgCAKIAAACIgCgCIgNhEIABgCQAJgxAPgxIAFgPQARguALgFIAkA/QAPAeAIAQQAxBoAaAyIAVArIAgA6IACAFIgWgEgAgkA0IAQALQAjAaAeATIgYgtIgOgcIgJgGQgVgNgWgOIAJAygAhhAIIAyAkIgIgxIgagUIgFgDgAgvgQIABAHQAWAPAYAPIAAgBIgthdIgLgUQACAjAHAqgAhTgkIAbAUQgGgqgDgqg");
	this.shape_28.setTransform(38.2,135.0125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABLBAQg0g5gagiQgbglgYgeQgJgPgPgfQA1BABXBfQBZBiAlAVIgJAIIgLAHQgpgig0g3gAi2hkIgFgTIAegWIAPgKIgEAOQgIANgJAMQgKAMgHAGIgCgGg");
	this.shape_29.setTransform(43.05,136.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5B6FB9").s().p("AgxGaQg8ghg1hpIg0kcQgPgwgigoQgKgKgBggQgBg0AahCQAahDAtg5QASgYAXgUQDAgGCfBuQAXAPAQATQAJAKADANQAPA3gIA6QgIBDgcA/QgdBAgWBCQgHAUAEA5QAEA5gGAqIgHAxIgGAmQgZAdgkAQQglAPg8ABQgcgFgegPg");
	this.shape_30.setTransform(44.801,119.7368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(40));

	// Layer_4
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5467B0").s().p("AimC2QgigJgPgeQgFgMgCgLIAAgWQACgKAEgKQAFgNAHgKIADgDIAFgFQALgNAQgIQAigSAiAIQAjAJAPAfQAIARgBASIAAACQgBANgFAOQgKAZgUAQIgHAFIgKAHQgXAMgXAAQgLAAgMgDgABmgPQgjgJgOgfQgPgeANgiQAKgbAYgRIAKgGIAJgFQAfgPAfAIQAiAJAPAeQAPAfgNAjQgKAagXARIgDABIgBACIgBAAIgBABIgDACIgFACQgXANgXAAQgLAAgLgDg");
	this.shape_31.setTransform(31.15,80.75,0.8405,0.8405,0,0,0,14.6,-12.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5467B0").s().p("AikC3QgjgJgPgeQgGgMgCgLIAAgWQACgJAEgKQAFgNAHgLIADgDIAEgFQAcgjBDgzQBRhABog+IAKgFIAJgGQAegPAhAIQAiAIAQAfQAOAegNAiQgKAbgWARIgDABIgCACIgBABIkBDBIgHAFIgKAGQgXANgYAAQgKAAgLgDg");
	this.shape_32.setTransform(30.85,83.1,0.8408,0.8408,0,0,0,14.5,-10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgMIgHgWQgCgJgBgKQAAgOADgLIACgDIACgGQAFgOALgLQAYgXAhAEQAhAEAYAcQANAQAGASIABACQAEAOAAAOQAAAZgMAUIgEAFIgHAIQgUAUgcAAIgJgBg");
	this.shape_33.setTransform(6.6052,102.7497,0.8408,0.8408);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5467B0").s().p("AAAAmQgNgCgLgMQgKgMAAgPQAAgQAKgJQAKgKAOABQAOACAKAMQALAMAAAPQAAAQgKAKQgJAIgLAAIgFAAg");
	this.shape_34.setTransform(22.0331,131.6582,0.8408,0.8408);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5467B0").s().p("AhfgQQgfg/gPgmIgIgWIgCgVQAAgNADgMIABgDIACgGQAGgOALgLQAXgWAiAEQAhAEAZAcQALAOADAKIAXAxIABACQAzBrAeBRQAkBhAJAJQALBJhOACQh/iZg0hmg");
	this.shape_35.setTransform(12.8047,115.5553,0.8412,0.8412);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_36.setTransform(35.1291,133.1338,0.3312,0.3095,0,2.1645,-178.4478);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_37.setTransform(27.7511,141.5553,0.3312,0.3095,0,2.1645,-178.4478);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_38.setTransform(30.6942,141.2946,0.3312,0.3095,0,2.1645,-178.4478);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_39.setTransform(33.3471,139.9424,0.3312,0.3095,0,2.1645,-178.4478);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_40.setTransform(35.4736,138.0498,0.3312,0.3095,0,2.1645,-178.4478);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_41.setTransform(27.5074,136.1224,0.3317,0.31,0,2.1664,-178.4475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgLIgHgXQgCgJgBgKQAAgNADgMIACgEIACgGQAFgNALgLQAYgXAhAEQAhAEAYAcQANAQAGATIABABQAEAOAAANQAAAbgMASIgEAGIgHAIQgUAUgcAAIgJgBg");
	this.shape_42.setTransform(6.6777,102.8894,0.8408,0.8408,0.6832);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgLgGgLIgHgVQgCgKgBgKQAAgOADgLIACgEIACgFQAFgOALgLQAYgXAhAEQAhAEAYAcQANAQAGASIABACQAEAOAAAOQAAAZgMAUIgEAFIgHAIQgUAUgcAAIgJgBg");
	this.shape_43.setTransform(7.062,103.2255,0.8408,0.8408,0.7497);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_44.setTransform(27.7574,142.4654,0.3312,0.3094,0,2.9142,-177.7027);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_45.setTransform(30.7033,142.2429,0.3312,0.3094,0,2.9142,-177.7027);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_46.setTransform(33.3734,140.9256,0.3312,0.3094,0,2.9142,-177.7027);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_47.setTransform(35.5242,139.061,0.3312,0.3094,0,2.9142,-177.7027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41,p:{skewX:2.1664,skewY:-178.4475,x:27.5074,y:136.1224}},{t:this.shape_40,p:{skewX:2.1645,skewY:-178.4478,x:35.4736,y:138.0498,scaleY:0.3095}},{t:this.shape_39,p:{skewX:2.1645,skewY:-178.4478,x:33.3471,y:139.9424,scaleY:0.3095}},{t:this.shape_38,p:{skewX:2.1645,skewY:-178.4478,x:30.6942,y:141.2946,scaleY:0.3095}},{t:this.shape_37,p:{skewX:2.1645,skewY:-178.4478,x:27.7511,y:141.5553,scaleY:0.3095}},{t:this.shape_36,p:{skewX:2.1645,skewY:-178.4478,x:35.1291,y:133.1338,scaleY:0.3095}},{t:this.shape_35,p:{rotation:0,x:12.8047,y:115.5553}},{t:this.shape_34,p:{rotation:0,x:22.0331,y:131.6582,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_33},{t:this.shape_32,p:{regX:14.5,regY:-10.6,rotation:0,x:30.85,y:83.1,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_31,p:{regX:14.6,regY:-12.8,scaleX:0.8405,scaleY:0.8405,rotation:0,x:31.15,y:80.75}}]}).to({state:[{t:this.shape_41,p:{skewX:2.8469,skewY:-177.767,x:27.2608,y:136.588}},{t:this.shape_40,p:{skewX:2.8462,skewY:-177.769,x:35.1554,y:138.6381,scaleY:0.3095}},{t:this.shape_39,p:{skewX:2.8462,skewY:-177.769,x:33.0066,y:140.5053,scaleY:0.3095}},{t:this.shape_38,p:{skewX:2.8462,skewY:-177.769,x:30.3379,y:141.8258,scaleY:0.3095}},{t:this.shape_37,p:{skewX:2.8462,skewY:-177.769,x:27.392,y:142.0516,scaleY:0.3095}},{t:this.shape_36,p:{skewX:2.8462,skewY:-177.769,x:34.8694,y:133.7188,scaleY:0.3095}},{t:this.shape_35,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_34,p:{rotation:0.6832,x:21.7588,y:131.9777,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_42,p:{rotation:0.6832,x:6.6777,y:102.8894,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_32,p:{regX:14.9,regY:-11,rotation:-0.3151,x:31.15,y:82.85,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_31,p:{regX:14,regY:-13.3,scaleX:0.8404,scaleY:0.8404,rotation:-0.3142,x:30.5,y:80.35}}]},6).to({state:[{t:this.shape_41,p:{skewX:2.9148,skewY:-177.701,x:27.5717,y:137.0526}},{t:this.shape_40,p:{skewX:2.914,skewY:-177.703,x:35.419,y:139.0699,scaleY:0.3095}},{t:this.shape_39,p:{skewX:2.914,skewY:-177.703,x:33.268,y:140.9346,scaleY:0.3095}},{t:this.shape_38,p:{skewX:2.914,skewY:-177.703,x:30.5977,y:142.2521,scaleY:0.3095}},{t:this.shape_37,p:{skewX:2.914,skewY:-177.703,x:27.6515,y:142.4745,scaleY:0.3095}},{t:this.shape_36,p:{skewX:2.914,skewY:-177.703,x:35.1388,y:134.1502,scaleY:0.3095}},{t:this.shape_35,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_34,p:{rotation:0.7497,x:22.11,y:132.3326,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_43,p:{rotation:0.7497,x:7.062,y:103.2255}},{t:this.shape_32,p:{regX:14.3,regY:-10.8,rotation:-1.225,x:30.6,y:82.9,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_31,p:{regX:14.3,regY:-13,scaleX:0.8404,scaleY:0.8404,rotation:-1.2245,x:30.75,y:80.65}}]},2).to({state:[{t:this.shape_41,p:{skewX:2.5956,skewY:-178.0174,x:27.7683,y:136.968}},{t:this.shape_40,p:{skewX:2.5945,skewY:-178.0199,x:35.6281,y:138.9392,scaleY:0.3094}},{t:this.shape_39,p:{skewX:2.5945,skewY:-178.0199,x:33.4876,y:140.8158,scaleY:0.3094}},{t:this.shape_38,p:{skewX:2.5945,skewY:-178.0199,x:30.8248,y:142.1479,scaleY:0.3094}},{t:this.shape_37,p:{skewX:2.5945,skewY:-178.0199,x:27.8799,y:142.3867,scaleY:0.3094}},{t:this.shape_36,p:{skewX:2.5945,skewY:-178.0199,x:35.3205,y:134.0212,scaleY:0.3094}},{t:this.shape_35,p:{rotation:0.4334,x:13.2168,y:116.1728}},{t:this.shape_34,p:{rotation:0.4326,x:22.2723,y:132.262,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_42,p:{rotation:0.4326,x:7.0642,y:103.2402,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_32,p:{regX:14.3,regY:-10.8,rotation:-1.225,x:30.6,y:82.9,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_31,p:{regX:14.3,regY:-13,scaleX:0.8404,scaleY:0.8404,rotation:-1.2245,x:30.75,y:80.65}}]},3).to({state:[{t:this.shape_41,p:{skewX:2.9148,skewY:-177.701,x:27.5883,y:137.0533}},{t:this.shape_47,p:{skewX:2.9142,skewY:-177.7027,x:35.5242,y:139.061}},{t:this.shape_46,p:{skewX:2.9142,skewY:-177.7027,x:33.3734,y:140.9256}},{t:this.shape_45,p:{skewX:2.9142,skewY:-177.7027,x:30.7033,y:142.2429}},{t:this.shape_44,p:{skewX:2.9142,skewY:-177.7027,x:27.7574,y:142.4654}},{t:this.shape_36,p:{skewX:2.9142,skewY:-177.7027,x:35.2441,y:134.1415,scaleY:0.3094}},{t:this.shape_35,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_34,p:{rotation:0.7498,x:22.0715,y:132.3158,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_43,p:{rotation:0.7498,x:7.0241,y:103.2097}},{t:this.shape_32,p:{regX:14.2,regY:-10.8,rotation:-1.2251,x:30.5,y:82.9,scaleX:0.8408,scaleY:0.8408}},{t:this.shape_31,p:{regX:14.3,regY:-13.1,scaleX:0.8404,scaleY:0.8404,rotation:-1.2246,x:30.75,y:80.5}}]},5).to({state:[{t:this.shape_41,p:{skewX:2.8469,skewY:-177.767,x:27.2773,y:136.5886}},{t:this.shape_47,p:{skewX:2.8463,skewY:-177.7689,x:35.2163,y:138.6291}},{t:this.shape_46,p:{skewX:2.8463,skewY:-177.7689,x:33.0676,y:140.4962}},{t:this.shape_45,p:{skewX:2.8463,skewY:-177.7689,x:30.399,y:141.8166}},{t:this.shape_44,p:{skewX:2.8463,skewY:-177.7689,x:27.4532,y:142.0425}},{t:this.shape_36,p:{skewX:2.8463,skewY:-177.7689,x:34.9303,y:133.71,scaleY:0.3094}},{t:this.shape_35,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_34,p:{rotation:0.6832,x:21.7396,y:131.9693,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_42,p:{rotation:0.6832,x:6.6588,y:102.8816,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_32,p:{regX:14.9,regY:-11,rotation:-0.3151,x:31.1,y:82.8,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_31,p:{regX:13.9,regY:-13.3,scaleX:0.8403,scaleY:0.8403,rotation:-0.3142,x:30.4,y:80.35}}]},11).to({state:[{t:this.shape_41,p:{skewX:2.8469,skewY:-177.767,x:27.2773,y:136.5886}},{t:this.shape_47,p:{skewX:2.8463,skewY:-177.7689,x:35.2163,y:138.6291}},{t:this.shape_46,p:{skewX:2.8463,skewY:-177.7689,x:33.0676,y:140.4962}},{t:this.shape_45,p:{skewX:2.8463,skewY:-177.7689,x:30.399,y:141.8166}},{t:this.shape_44,p:{skewX:2.8463,skewY:-177.7689,x:27.4532,y:142.0425}},{t:this.shape_36,p:{skewX:2.8463,skewY:-177.7689,x:34.9303,y:133.71,scaleY:0.3094}},{t:this.shape_35,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_34,p:{rotation:0.6832,x:21.7396,y:131.9693,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_42,p:{rotation:0.6832,x:6.6588,y:102.8816,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_32,p:{regX:14.9,regY:-11,rotation:-0.3151,x:31.1,y:82.8,scaleX:0.8407,scaleY:0.8407}},{t:this.shape_31,p:{regX:13.9,regY:-13.3,scaleX:0.8403,scaleY:0.8403,rotation:-0.3142,x:30.4,y:80.35}}]},2).wait(11));

	// Layer_3
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5467B0").s().p("AhEDPQgSgTgEgaQgCgOAAgTQAIiSAMg+QALg1AJglIACgHIABgFIAAABQAGgOALgMQAWgVAdAAQALAAAKADQASAFANANQAWAWAAAeIAAACIgCASIgHAnQgQBZgLCWIAAALQAAAegWAWQgVAVgeAAQgeAAgWgVg");
	this.shape_48.setTransform(51.7326,169.6046,0.8413,0.8413,1.0393);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C73A3F").s().p("Ag1BlQAYhFAKg6IgihRIADgKIAKglQAEAKAUANQAZATAagBIAEAAIAJAzQAEAWAIAYQAGASgPAcQgNAXgWAfQgrA9gUAJIgEABQgSAAAQg2g");
	this.shape_49.setTransform(53.4922,216.3241,0.8412,0.8412,5.5229);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5467B0").s().p("AgmBSQgYg5gMgnQgNgogGgiQgBgFAAgOIAAgDQACgcAUgVQAWgWAeABQAXAAASANIAKAIQAQARAEATIADAGQAEAPAFArQAQCPAQBbIgEAAQgaABgbgTQgTgNgFgJIgKAkIgCAKIgohjg");
	this.shape_50.setTransform(51.1511,191.6495,0.8412,0.8412,5.5229);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgnQgNgpgGgjQgBgEAAgOIAAgDQACgcAUgVQAWgWAeAAQAXAAASAOIAKAIQAQAQAEAVIADAFQAEAPAFArQAQCPAQBcIgEAAQgaAAgbgSQgTgOgFgKIgKAlIgCALIgohkg");
	this.shape_51.setTransform(51.7555,191.8715,0.8413,0.8413,1.5258);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgnQgNgpgGgjQgBgEAAgOIAAgDQACgcAUgVQAWgWAeAAQAXAAASAOIAKAIQAQAQAEAVIADAFQAEAPAFArQAQCQAQBbIgEAAQgaAAgbgSQgTgOgFgKIgKAlIgCAKIgohjg");
	this.shape_52.setTransform(51.1633,191.5239,0.8412,0.8412,5.5229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.4922,y:216.3241}},{t:this.shape_48,p:{rotation:1.0393,x:51.7326,y:169.6046}}]}).to({state:[{t:this.shape_51,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_48,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},6).to({state:[{t:this.shape_51,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_48,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},2).to({state:[{t:this.shape_51,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_48,p:{rotation:0,x:51.8376,y:169.6533}}]},2).to({state:[{t:this.shape_51,p:{rotation:-0.7067,x:52.3017,y:191.7334}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:-0.7067,x:57.3067,y:216.0097}},{t:this.shape_48,p:{rotation:0,x:51.8376,y:169.6533}}]},3).to({state:[{t:this.shape_51,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_48,p:{rotation:0,x:51.8376,y:169.6533}}]},6).to({state:[{t:this.shape_51,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_48,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},4).to({state:[{t:this.shape_51,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_48,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},2).to({state:[{t:this.shape_51,p:{rotation:3.4762,x:51.4955,y:191.9394}},{t:this.shape_49,p:{scaleX:0.8413,scaleY:0.8413,rotation:3.4762,x:54.7164,y:216.5157}},{t:this.shape_48,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},3).to({state:[{t:this.shape_52},{t:this.shape_49,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.5043,y:216.1985}},{t:this.shape_48,p:{rotation:1.0393,x:51.7326,y:169.6046}}]},3).wait(9));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.5,regY:-14.3,rotation:-1.9957,x:33.8,y:150.45}}]}).to({state:[{t:this.shape_55,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},6).to({state:[{t:this.shape_55,p:{rotation:1.9967,x:33.5589,y:183.5245,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:1.9967,x:44.3207,y:205.82,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_55,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_55,p:{rotation:-0.7067,x:33.5479,y:183.1396,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:-0.7067,x:45.3492,y:204.9026,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},3).to({state:[{t:this.shape_55,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},6).to({state:[{t:this.shape_55,p:{rotation:1.9967,x:33.5589,y:183.5245,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:1.9967,x:44.3207,y:205.82,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},4).to({state:[{t:this.shape_55,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},2).to({state:[{t:this.shape_55,p:{rotation:7.2096,x:33.097,y:184.1445,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_54,p:{rotation:7.2096,x:41.7882,y:207.3245,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_53,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},3).to({state:[{t:this.shape_55,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_53,p:{regX:3.2,regY:-14.3,rotation:-1.9957,x:33.55,y:150.45}}]},3).wait(9));

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
	this.shape_2.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_2.setTransform(94.4734,150.3852,0.3577,0.3342,0,20.0352,-160.581);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_3.setTransform(84.1003,156.5959,0.3577,0.3342,0,20.0352,-160.581);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_4.setTransform(87.2114,157.3029,0.3577,0.3342,0,20.0352,-160.581);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_5.setTransform(90.3859,156.7922,0.3577,0.3342,0,20.0352,-160.581);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_6.setTransform(93.1985,155.5516,0.3577,0.3342,0,20.0352,-160.581);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_7.setTransform(81.45,145.6,0.3583,0.3348,0,20.0362,-160.5796,14.9,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAQAGgTAFgbQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggZAAQgIAAgJgEg");
	this.shape_8.setTransform(94.45,80.35,1.1194,1.1194,10.2322,0,0,6.9,-16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_9.setTransform(95.2567,150.0285,0.3577,0.3342,0,19.034,-161.5805);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_10.setTransform(84.9941,156.4189,0.3577,0.3342,0,19.034,-161.5805);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_11.setTransform(88.117,157.0716,0.3577,0.3342,0,19.034,-161.5805);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_12.setTransform(91.282,156.5056,0.3577,0.3342,0,19.034,-161.5805);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_13.setTransform(94.0723,155.2161,0.3577,0.3342,0,19.034,-161.5805);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DD4732").s().p("AhaClQgHgDgGgEQgHgGgEgHIgHgQIgCgQQAAgLACgLIABgDIACgFQAJgkAfhAQAFgTAFgbQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggZAAQgIAAgIgEg");
	this.shape_14.setTransform(94.5,80.5,1.1194,1.1194,10.2322,0,0,7,-16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_15.setTransform(94.8914,150.1965,0.3576,0.3341,0,19.5868,-161.0255);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_16.setTransform(90.8545,156.6345,0.3576,0.3341,0,19.5868,-161.0255);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_17.setTransform(93.6571,155.3722,0.3576,0.3341,0,19.5868,-161.0255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_6,p:{skewX:20.0352,skewY:-160.581,x:93.1985,y:155.5516}},{t:this.shape_5,p:{skewX:20.0352,skewY:-160.581,x:90.3859,y:156.7922}},{t:this.shape_4,p:{skewX:20.0352,skewY:-160.581,x:87.2114,y:157.3029}},{t:this.shape_3,p:{skewX:20.0352,skewY:-160.581,x:84.1003,y:156.5959}},{t:this.shape_2,p:{skewX:20.0352,skewY:-160.581,x:94.4734,y:150.3852}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{regX:14.6,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.9,y:145.55}},{t:this.shape_6,p:{skewX:19.585,skewY:-161.0263,x:93.5959,y:155.3856}},{t:this.shape_5,p:{skewX:19.585,skewY:-161.0263,x:90.7932,y:156.6481}},{t:this.shape_4,p:{skewX:19.585,skewY:-161.0263,x:87.6228,y:157.1834}},{t:this.shape_3,p:{skewX:19.585,skewY:-161.0263,x:84.5063,y:156.5006}},{t:this.shape_2,p:{skewX:19.585,skewY:-161.0263,x:94.8301,y:150.2094}},{t:this.shape_1,p:{regX:10.1,rotation:28.8661,x:81.25,y:144.7}},{t:this.shape_8}]},13).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.4,skewX:19.0336,skewY:-161.5797,x:82.2,y:145.55}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{scaleX:0.3577,scaleY:0.3342,skewX:19.034,skewY:-161.5805,x:84.9941,y:156.4189}},{t:this.shape_9,p:{scaleX:0.3577,scaleY:0.3342,skewX:19.034,skewY:-161.5805,x:95.2567,y:150.0285}},{t:this.shape_1,p:{regX:10.3,rotation:28.3123,x:81.55,y:145.35}},{t:this.shape_8}]},2).to({state:[{t:this.shape_7,p:{regX:14.6,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.9,y:145.55}},{t:this.shape_17,p:{scaleY:0.3341,skewX:19.5868,skewY:-161.0255,x:93.6571,y:155.3722}},{t:this.shape_16,p:{scaleY:0.3341,skewX:19.5868,skewY:-161.0255,x:90.8545,y:156.6345}},{t:this.shape_10,p:{scaleX:0.3576,scaleY:0.3341,skewX:19.5868,skewY:-161.0255,x:87.6843,y:157.1697}},{t:this.shape_9,p:{scaleX:0.3576,scaleY:0.3341,skewX:19.5868,skewY:-161.0255,x:84.5679,y:156.4868}},{t:this.shape_15,p:{scaleY:0.3341,skewX:19.5868,skewY:-161.0255,x:94.8914,y:150.1965}},{t:this.shape_1,p:{regX:10.1,rotation:28.8661,x:81.25,y:144.65}},{t:this.shape_14}]},16).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_17,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:93.2597,y:155.5479}},{t:this.shape_16,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:90.4472,y:156.7885}},{t:this.shape_10,p:{scaleX:0.3576,scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:87.2728,y:157.2991}},{t:this.shape_9,p:{scaleX:0.3576,scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:84.1618,y:156.5921}},{t:this.shape_15,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:94.5347,y:150.3818}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_14}]},2).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_17,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:93.2597,y:155.5479}},{t:this.shape_16,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:90.4472,y:156.7885}},{t:this.shape_10,p:{scaleX:0.3576,scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:87.2728,y:157.2991}},{t:this.shape_9,p:{scaleX:0.3576,scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:84.1618,y:156.5921}},{t:this.shape_15,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:94.5347,y:150.3818}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_14}]},2).to({state:[]},1).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_17,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:93.2597,y:155.5479}},{t:this.shape_16,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:90.4472,y:156.7885}},{t:this.shape_10,p:{scaleX:0.3576,scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:87.2728,y:157.2991}},{t:this.shape_9,p:{scaleX:0.3576,scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:84.1618,y:156.5921}},{t:this.shape_15,p:{scaleY:0.3342,skewX:20.0361,skewY:-160.5802,x:94.5347,y:150.3818}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_14}]},3).wait(1));

	// Layer_5
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAJBRQgngBgfgYQgfgYgEghQgDghAagXQAZgYAoABQAnAAAfAZQAfAYAEAgQADAigZAXQgZAXgoAAIgBAAgAgwgkQgSAPADAVQACAUAUAOQAUAQAaAAQAaAAARgOQARgOgCgVQgDgUgUgPQgUgPgZAAIgCAAQgZAAgQANgAAAAsQgDgEgHgFQAJgCAFgFIADgDQAVADANAIQgOAJgTAAIgIgBgAgZAkIAGABIAAgBIADAAIALAHQgKgCgKgFgAAKAVQAEgHgBgLIArABQACARgOAMQgOgIgUgEgAgUAfIAHgIIAQABIgCABQgFAGgLABIgFgBgAgKAUQAEgJAAgJIAPABQAAALgEAHQgHgBgIAAgAANAAQgBgLgGgIQAUgCAMgGQAOAMADAPgAgGAAQgCgIgFgJIAOgBQAHAHABALgAgZgcIAFgCQAMADAHAGIgOABIgKgIgAABgXQgFgGgLgDQAJgFAFgGQATACAQALQgLAGgUACIgCgBgAgagjIgBAAQgHAAgGABIgCAAQANgKAVAAIACAAQgFAGgKAEIgFgBg");
	this.shape_18.setTransform(117.9425,95.3284,1.2172,1.4803,0,-4.6603,-6.1455);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpAyIAHgWIAIghIAYgVQAOgNAMgGQALgGAHABQgCAMgEARIgGAYQgCANgNAMQgNAMgSAGQgOAFgIAAIgDgBg");
	this.shape_19.setTransform(117.05,129.7543);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7C12D").s().p("AhyBcQgWgCgSgDIgQgEIgEgiIALACQAqAAA7gNQA7gMAQgIQARgJAPgFIgJAiIgHAWIgIAEQgQAJgZAIQgZAIgXACIgfABIgPAAgABrgLQAFgRABgMIARgMQAQgMAdgbIgJAwQgaAVgOAOIgZAVIAGgYg");
	this.shape_20.setTransform(109.925,128.7917);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FC4C4C").s().p("AitFHIAAgWQAngdBHhJQBDhGA2hQQjMjEg+hkQAHgCAWgMQAMAsBxB4QAVAeB4BtQg9BRgXAdQgbAhg0A1Qg1A2gpAgIgDgBgAgEDzIBMg0IANgIIgHAgIgBAHIgBAMQgxAlg1APgAAbC8IAOgaIAKgFIAsgcIgJArIgQANIhDAtgABVDcIAKgtIA1gnIAFArIgiAcQgUARgQAEgABpB5IAcgUIAEgDIAJAgIgxAkIAIgtgAAxCUIAvhVIAKgSQgCAdgGAmIgBAGIgxAfIABgBgABzAnIATA1IgbATQAGglACgjgACWA6IgJgOIgCgCIgCgDIAAgCIAAAAQgBgCACABQgBgBACgEQAThCAVhTQAVhRgahYQgCgIgTgcIgCgEQAYAWARAjIADAGQAXA1gQBLIgtCtQAKAOARAWIgFAYQgNgPgQgYg");
	this.shape_21.setTransform(110.0575,103.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B43320").s().p("Ag6FtQg8gHghgXQgLgbgDhbQgDhagLgnQgLgngcg0Qgbg1gJg4QgBgRAAgQQAAghAKggQAEgLAIgIQARgSAWgOQCehlC5gEQAWAQARASQAEAEAkA5QAjA5gIBJIgjB3Ig0DyQhMBwgtAUQggAPgpAAQgPAAgRgCg");
	this.shape_22.setTransform(108.7912,106.4088);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},35).to({state:[]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},3).wait(1));

	// Layer_6
	this.instance_1 = new lib.SDevojkaplast("synched",0);
	this.instance_1.setTransform(103.4,82.6,1,1,-7.4946,0,0,103.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({startPosition:35},0).to({_off:true},1).wait(3).to({_off:false,startPosition:39},0).wait(1));

	// Layer_3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DD4732").s().p("AADDTQgXgCgJgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAFgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_23.setTransform(103.6,135.65,1.1202,1.1202,0,0,0,1.8,-10.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7C12D").s().p("AgXBOIgQgqQAFgNAAgSQgHADgGAHIgCgLQAOgjAXhIQARgBATgMQARgLAEgIIAEAjIABAJQgQAhgZAvQgGBRAGBCQgMgRgUgpg");
	this.shape_24.setTransform(91.7039,204.8529,1.1202,1.1202);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DD4732").s().p("AgRCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQAKgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgRAygQAlIgBgIg");
	this.shape_25.setTransform(99.223,175.9907,1.1202,1.1202);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DD4732").s().p("AACDTQgXgCgIgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAEgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_26.setTransform(103.6,135.65,1.1202,1.1202,0,0,0,1.8,-10.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DD4732").s().p("AgRCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDABgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgQAygQAlIgBgIg");
	this.shape_27.setTransform(99.052,175.9526,1.1201,1.1201,0.9491);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DD4732").s().p("AAFDTQgXgCgNgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAJgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_28.setTransform(102.85,135.3,1.1201,1.1201,-1.7041,0,0,1.5,-10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DD4732").s().p("AgQCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQAEgDAAgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgQAygPAlIgBgIg");
	this.shape_29.setTransform(99.6365,175.8537,1.1202,1.1202,2.7836);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7C12D").s().p("AgXBOIgQgpQAFgOAAgTQgHADgGAIIgCgLQAOgiAXhJQARgBATgMQARgLAEgJIAEAkIABAIQgQAigZAvQgGBSAGBCQgMgTgUgog");
	this.shape_30.setTransform(89.3321,203.093,1.1201,1.1201,6.4796);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD4732").s().p("AACDTQgXgCgIgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAEgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_31.setTransform(103.5,135.7,1.1202,1.1202,-3.4081,0,0,1.9,-10.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DD4732").s().p("AgQCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDAAgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgQAygPAlIgBgIg");
	this.shape_32.setTransform(99.7656,175.7423,1.1201,1.1201,4.2233);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DD4732").s().p("AgQCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQAEgDAAgDQAIgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgPAygPAlIgBgIg");
	this.shape_33.setTransform(99.5526,175.8496,1.1202,1.1202,2.7836);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DD4732").s().p("AACDTQgWgCgIgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQADgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_34.setTransform(103.65,135.65,1.1202,1.1202,0,0,0,1.9,-10.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DD4732").s().p("AACDTQgXgCgIgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAEgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgQAQgVAAIgEAAg");
	this.shape_35.setTransform(103.7,135.65,1.1202,1.1202,0,0,0,1.9,-10.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DD4732").s().p("AgQCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQAEgDAAgDQAJgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgQAygPAlIgBgIg");
	this.shape_36.setTransform(99.139,175.9907,1.1202,1.1202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_23}]}).to({state:[{t:this.shape_27,p:{rotation:0.9491,x:99.052,y:175.9526}},{t:this.shape_24,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_26,p:{rotation:0,x:103.6,y:135.65}}]},8).to({state:[{t:this.shape_29,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:99.6365,y:175.8537}},{t:this.shape_24,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_28,p:{regY:-10.8,rotation:-1.7041,x:102.85,y:135.3}}]},2).to({state:[{t:this.shape_29,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:99.8214,y:175.7465}},{t:this.shape_24,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_28,p:{regY:-10.5,rotation:-2.4781,x:102.9,y:135.7}}]},2).to({state:[{t:this.shape_27,p:{rotation:5.5306,x:100.08,y:175.8309}},{t:this.shape_24,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_26,p:{rotation:-3.4081,x:103.45,y:135.75}}]},3).to({state:[{t:this.shape_27,p:{rotation:6.4796,x:100.0319,y:175.2618}},{t:this.shape_30},{t:this.shape_26,p:{rotation:-3.4081,x:103.45,y:135.75}}]},3).to({state:[{t:this.shape_29,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:100.0522,y:175.8282}},{t:this.shape_24,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_31}]},9).to({state:[{t:this.shape_32,p:{rotation:4.2233,x:99.7656,y:175.7423}},{t:this.shape_24,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_28,p:{regY:-10.5,rotation:-2.4781,x:102.75,y:135.7}}]},2).to({state:[{t:this.shape_33},{t:this.shape_24,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_28,p:{regY:-10.8,rotation:-1.7041,x:102.7,y:135.3}}]},2).to({state:[{t:this.shape_32,p:{rotation:0.9491,x:98.968,y:175.9513}},{t:this.shape_24,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_34}]},2).to({state:[{t:this.shape_32,p:{rotation:0.9491,x:98.968,y:175.9513}},{t:this.shape_24,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_34}]},2).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_24,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_35}]},3).wait(1));

	// Layer_2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DD4732").s().p("AAeCsQgbgSAAgEQAAgEgeg7Qggg6gcglQgcgmAEgQQAFgRAAgKQABgKgDgPQgEgRAJgWQAFgOALgJQAGgEAIgDQAVgHAVAMQALAHAHALIAAgBIADAFIADAEQAQAdAWApQAZAwAvB2QAFAPADAMQAFAXgIAUQgJAWgVAIQgGACgHAAQgQAAgTgOg");
	this.shape_37.setTransform(120.6,131.1,1.1202,1.1202,0,0,0,-2.7,-9.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIIg6A+QgaBJgLA9QgIgTgHgrg");
	this.shape_38.setTransform(111.2508,190.9068,1.1202,1.1202);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DD4732").s().p("Ag2CIIAFghQgGAHgSAGQgVAGgPgFIAlhGQAkhDATgoQASgoADgGIAJgOQAFgJAQgIQAFgDAFgCQARgFARAHQAVAIAIAYQAIAWgJAXIgBADIgHAPQgPAagWAbQgWAdgiAnIg8BFIABgJg");
	this.shape_39.setTransform(123.8114,166.0015,1.1202,1.1202);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIQgYAagiAkQgaBJgLA9QgIgTgHgrg");
	this.shape_40.setTransform(110.5315,190.523,1.1202,1.1202,1.1833);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgdAng8QAPAFAVgHQASgFAGgHIgFAhIgBAJQgYAZgiAkQgaBJgLA9QgIgTgHgqg");
	this.shape_41.setTransform(109.4127,188.3343,1.1201,1.1201,5.0432);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgdAng8QAPAEAVgGQASgFAGgHIgFAhIgBAJQgYAZgiAkQgaBJgLA9QgIgTgHgqg");
	this.shape_42.setTransform(108.4234,187.6937,1.1201,1.1201,7.6935);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgKAFgRQgGABgJAFIACgKQAWgdAng8QAPAFAVgHQASgFAGgHIgFAhIgBAIQgYAbgiAjQgaBJgLA9QgIgTgHgrg");
	this.shape_43.setTransform(109.3109,188.2129,1.1201,1.1201,5.0432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39,p:{rotation:0,x:123.8114,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_38,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:111.2508,y:190.9068}},{t:this.shape_37,p:{x:120.6,regX:-2.7,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]}).to({state:[{t:this.shape_39,p:{rotation:1.1833,x:123.6038,y:165.8825,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_40,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.5315,y:190.523}},{t:this.shape_37,p:{x:120.55,regX:-2.7,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},8).to({state:[{t:this.shape_39,p:{rotation:3.0423,x:123.7521,y:165.5519,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_40,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:109.888,y:189.7544}},{t:this.shape_37,p:{x:119.9,regX:-3.2,regY:-9.5,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.85}}]},2).to({state:[{t:this.shape_39,p:{rotation:5.0432,x:124.1133,y:164.6308,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_41},{t:this.shape_37,p:{x:120.2,regX:-2.8,regY:-10.1,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:130.25}}]},2).to({state:[{t:this.shape_39,p:{rotation:6.6933,x:124.3174,y:164.8507,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_40,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:108.9403,y:188.1211}},{t:this.shape_37,p:{x:120.25,regX:-2.9,regY:-10.1,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.3}}]},3).to({state:[{t:this.shape_39,p:{rotation:7.6935,x:124.2038,y:164.696,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_42},{t:this.shape_37,p:{x:120.25,regX:-2.9,regY:-10.1,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.3}}]},3).to({state:[{t:this.shape_39,p:{rotation:6.6933,x:124.2618,y:164.8442,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_40,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:108.8846,y:188.1146}},{t:this.shape_37,p:{x:120.3,regX:-2.8,regY:-10.2,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.2}}]},9).to({state:[{t:this.shape_39,p:{rotation:5.0432,x:124.0116,y:164.5093,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_43},{t:this.shape_37,p:{x:120.25,regX:-2.7,regY:-10.3,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:130}}]},2).to({state:[{t:this.shape_39,p:{rotation:3.0423,x:123.5843,y:165.543,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_38,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:109.7202,y:189.7454}},{t:this.shape_37,p:{x:119.7,regX:-3.2,regY:-9.7,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.65}}]},2).to({state:[{t:this.shape_39,p:{rotation:1.1833,x:123.4358,y:165.879,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_40,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.3636,y:190.5195}},{t:this.shape_37,p:{x:120.6,regX:-2.5,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[{t:this.shape_39,p:{rotation:1.1833,x:123.4358,y:165.879,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_40,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.3636,y:190.5195}},{t:this.shape_37,p:{x:120.6,regX:-2.5,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[]},1).to({state:[{t:this.shape_39,p:{rotation:0,x:123.6434,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_40,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:111.0827,y:190.9068}},{t:this.shape_37,p:{x:120.55,regX:-2.6,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},3).wait(1));

	// Layer_4
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgHgQIgCgQQAAgLACgLIABgDIACgFQAJgkAfhAIAMguQATgkAYglQAMgSAOgHQAygWAwA0QAhAigLAqQgQAfgkAtQgnAzgzBBQgcAggaAAQgJAAgIgEg");
	this.shape_44.setTransform(121,64.85,1.021,1.021,0,-10.2188,169.7812,5.4,-16.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DD4732").s().p("AhAAEQggglgRgYIgJgOQgEgGgCgHQgCgJgBgHIAAgDIAAgEQACgKAFgIQADgHAFgFQAOgPAVgBQAUAAAOAKQAKAIAHALIgFgJQA+AmAsBaQArBaALAMQAVAugxALQhthYg0g+g");
	this.shape_45.setTransform(133.05,123.7,1.1722,1.1722,0,-29.3055,150.6945,9.7,12.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_46.setTransform(118.8609,128.9229,0.326,0.3047,0,-20.0042,-19.3822);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_47.setTransform(128.3143,134.5909,0.326,0.3047,0,-20.0042,-19.3822);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMAMQgLALgRAAQgQAAgLgLg");
	this.shape_48.setTransform(125.4778,135.2336,0.326,0.3047,0,-20.0042,-19.3822);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_49.setTransform(122.5841,134.7661,0.326,0.3047,0,-20.0042,-19.3822);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgQAAgLgLg");
	this.shape_50.setTransform(120.0207,133.6334,0.326,0.3047,0,-20.0042,-19.3822);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_51.setTransform(131.65,125.05,0.3265,0.3051,0,-20.0054,-19.3817,18.1,-7.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DD4732").s().p("AhbClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAIAMguQATgkAYglQAMgSAOgHQAygWAwA0QAhAigLAqQgQAfgkAtQgnAzgzBBQgdAggZAAQgJAAgIgEg");
	this.shape_52.setTransform(121.2,64.65,1.0212,1.0212,0,-10.2256,169.7744,6,-16.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_53.setTransform(119.0844,129.1199,0.3262,0.3049,0,-19.5823,-18.9494);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_54.setTransform(128.5013,134.8627,0.3262,0.3049,0,-19.5823,-18.9494);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLAMQgNALgQAAQgPAAgMgLg");
	this.shape_55.setTransform(125.6586,135.4842,0.3262,0.3049,0,-19.5823,-18.9494);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_56.setTransform(122.7667,134.9945,0.3262,0.3049,0,-19.5823,-18.9494);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_57.setTransform(120.2102,133.8418,0.3262,0.3049,0,-19.5823,-18.9494);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51,p:{regX:18.1,regY:-7.8,scaleX:0.3265,scaleY:0.3051,skewX:-20.0054,skewY:-19.3817,x:131.65,y:125.05}},{t:this.shape_50,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:120.0207,y:133.6334}},{t:this.shape_49,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:122.5841,y:134.7661}},{t:this.shape_48,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:125.4778,y:135.2336}},{t:this.shape_47,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:128.3143,y:134.5909}},{t:this.shape_46,p:{scaleX:0.326,scaleY:0.3047,skewX:-20.0042,skewY:-19.3822,x:118.8609,y:128.9229}},{t:this.shape_45,p:{regX:9.7,scaleX:1.1722,scaleY:1.1722,skewX:-29.3055,skewY:150.6945,x:133.05,y:123.7,regY:12.7}},{t:this.shape_44,p:{regX:5.4,regY:-16.4,scaleX:1.021,scaleY:1.021,skewX:-10.2188,skewY:169.7812,x:121,y:64.85}}]}).to({state:[{t:this.shape_51,p:{regX:17.7,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.9,y:125.05}},{t:this.shape_50,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5803,skewY:-18.9477,x:120.3143,y:133.8557}},{t:this.shape_49,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5803,skewY:-18.9477,x:122.871,y:135.0086}},{t:this.shape_48,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5803,skewY:-18.9477,x:125.7631,y:135.4984}},{t:this.shape_47,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5803,skewY:-18.9477,x:128.6061,y:134.877}},{t:this.shape_46,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5803,skewY:-18.9477,x:119.1886,y:129.1334}},{t:this.shape_45,p:{regX:10,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55,regY:12.7}},{t:this.shape_44,p:{regX:6,regY:-16.8,scaleX:1.0213,scaleY:1.0213,skewX:-10.226,skewY:169.774,x:121.1,y:64.8}}]},13).to({state:[{t:this.shape_51,p:{regX:17.6,regY:-8.4,scaleX:0.3268,scaleY:0.3054,skewX:-19.3203,skewY:-18.6956,x:131.75,y:125.15}},{t:this.shape_50,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.3182,skewY:-18.6943,x:120.1563,y:133.7002}},{t:this.shape_49,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.3182,skewY:-18.6943,x:122.7077,y:134.8645}},{t:this.shape_48,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.3182,skewY:-18.6943,x:125.5976,y:135.3672}},{t:this.shape_47,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.3182,skewY:-18.6943,x:128.4435,y:134.7582}},{t:this.shape_46,p:{scaleX:0.3263,scaleY:0.3049,skewX:-19.3182,skewY:-18.6943,x:119.0521,y:128.9725}},{t:this.shape_45,p:{regX:9.9,scaleX:1.1726,scaleY:1.1726,skewX:-28.6,skewY:151.4,x:132.85,y:124.7,regY:12.9}},{t:this.shape_44,p:{regX:6,regY:-16.8,scaleX:1.0213,scaleY:1.0213,skewX:-10.226,skewY:169.774,x:121.1,y:64.8}}]},2).to({state:[{t:this.shape_51,p:{regX:17.7,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.9,y:125.1}},{t:this.shape_57,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5823,skewY:-18.9494,x:120.2102,y:133.8418}},{t:this.shape_56,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5823,skewY:-18.9494,x:122.7667,y:134.9945}},{t:this.shape_55,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5823,skewY:-18.9494,x:125.6586,y:135.4842}},{t:this.shape_54,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5823,skewY:-18.9494,x:128.5013,y:134.8627}},{t:this.shape_53,p:{scaleX:0.3262,scaleY:0.3049,skewX:-19.5823,skewY:-18.9494,x:119.0844,y:129.1199}},{t:this.shape_45,p:{regX:10,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55,regY:12.7}},{t:this.shape_52,p:{regX:6,regY:-16.9,scaleX:1.0212,scaleY:1.0212,skewX:-10.2256,skewY:169.7744,x:121.2,y:64.65}}]},16).to({state:[{t:this.shape_51,p:{regX:18.3,regY:-7.6,scaleX:0.3265,scaleY:0.3051,skewX:-20.001,skewY:-19.3784,x:131.6,y:125.05}},{t:this.shape_57,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:119.8531,y:133.5487}},{t:this.shape_56,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:122.416,y:134.6812}},{t:this.shape_55,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:125.3092,y:135.1487}},{t:this.shape_54,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:128.1453,y:134.5063}},{t:this.shape_53,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:118.6937,y:128.839}},{t:this.shape_45,p:{regX:9.7,scaleX:1.1722,scaleY:1.1722,skewX:-29.3049,skewY:150.6951,x:133.05,y:123.6,regY:12.7}},{t:this.shape_52,p:{regX:5.3,regY:-16.5,scaleX:1.021,scaleY:1.021,skewX:-10.2186,skewY:169.7814,x:121,y:64.6}}]},2).to({state:[{t:this.shape_51,p:{regX:18.3,regY:-7.6,scaleX:0.3265,scaleY:0.3051,skewX:-20.001,skewY:-19.3784,x:131.6,y:125.05}},{t:this.shape_57,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:119.8531,y:133.5487}},{t:this.shape_56,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:122.416,y:134.6812}},{t:this.shape_55,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:125.3092,y:135.1487}},{t:this.shape_54,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:128.1453,y:134.5063}},{t:this.shape_53,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:118.6937,y:128.839}},{t:this.shape_45,p:{regX:9.7,scaleX:1.1722,scaleY:1.1722,skewX:-29.3049,skewY:150.6951,x:133.05,y:123.6,regY:12.7}},{t:this.shape_52,p:{regX:5.3,regY:-16.5,scaleX:1.021,scaleY:1.021,skewX:-10.2186,skewY:169.7814,x:121,y:64.6}}]},2).to({state:[]},1).to({state:[{t:this.shape_51,p:{regX:18.3,regY:-7.6,scaleX:0.3265,scaleY:0.3051,skewX:-20.001,skewY:-19.3784,x:131.6,y:125.05}},{t:this.shape_57,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:119.8531,y:133.5487}},{t:this.shape_56,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:122.416,y:134.6812}},{t:this.shape_55,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:125.3092,y:135.1487}},{t:this.shape_54,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:128.1453,y:134.5063}},{t:this.shape_53,p:{scaleX:0.326,scaleY:0.3046,skewX:-20.0017,skewY:-19.3798,x:118.6937,y:128.839}},{t:this.shape_45,p:{regX:9.7,scaleX:1.1722,scaleY:1.1722,skewX:-29.3049,skewY:150.6951,x:133.05,y:123.6,regY:12.7}},{t:this.shape_52,p:{regX:5.3,regY:-16.5,scaleX:1.021,scaleY:1.021,skewX:-10.2186,skewY:169.7814,x:121,y:64.6}}]},3).wait(1));

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


(lib.Devojkao1rukaD = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Devojkao1shaka("single",1);
	this.instance.setTransform(-56.35,133.8,0.9999,0.9999,48.9109,0,0,16,22.9);

	this.instance_1 = new lib.Devojkao1dolakta("single",0);
	this.instance_1.setTransform(22.05,39.9,1,1,6.216,0,0,17.2,40.6);

	this.instance_2 = new lib.Devojkao1odlakta("single",0);
	this.instance_2.setTransform(17.45,69.2,0.9999,0.9999,48.9109,0,0,14.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-1.7,112.4,158.6);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},6).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_1},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},20).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},70).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_1},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},2).wait(59));

	// Layer_5
	this.instance = new lib.MomakOb3dolakta("single",0);
	this.instance.setTransform(137.65,133.8,0.6696,0.6656,0,-9.239,-7.7521,18.2,18.9);

	this.instance_1 = new lib.MomakOb3odlakta("single",1);
	this.instance_1.setTransform(144.35,172.8,0.5702,0.6553,0,3.8963,3.0465,15.2,11.8);

	this.instance_2 = new lib.MomakOb3shaka("single",0);
	this.instance_2.setTransform(134.4,238.35,0.6643,0.6706,0,28.3249,26.897,16.6,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regX:16.6,regY:23,skewX:28.3249,skewY:26.897,x:134.4,y:238.35,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_1,p:{skewX:3.8963,skewY:3.0465,x:144.35,y:172.8,regX:15.2,regY:11.8,scaleY:0.6553}},{t:this.instance}]}).to({state:[{t:this.instance_2,p:{regX:15.2,regY:3.4,skewX:13.6195,skewY:12.1926,x:144.5,y:226.4,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_1,p:{skewX:-0.8299,skewY:-1.6807,x:144.7,y:172.75,regX:15.2,regY:11.8,scaleY:0.6553}},{t:this.instance}]},30).to({state:[{t:this.instance_2,p:{regX:16.8,regY:23.2,skewX:1.1422,skewY:-0.2847,x:150.1,y:238.8,scaleX:0.4054,scaleY:0.6706,startPosition:0}},{t:this.instance_1,p:{skewX:-6.8099,skewY:-7.6585,x:144.35,y:172.95,regX:15.2,regY:11.8,scaleY:0.6553}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{regX:12.8,regY:3.3,skewX:-26.1499,skewY:155.2842,x:155.85,y:226.75,scaleX:0.4487,scaleY:0.6705,startPosition:1}},{t:this.instance_1,p:{skewX:-12.1757,skewY:168.6714,x:142.95,y:175.7,regX:15,regY:12,scaleY:0.6552}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{regX:16.6,regY:22.9,skewX:-40.5722,skewY:140.8563,x:166.8,y:237.35,scaleX:0.6643,scaleY:0.6705,startPosition:1}},{t:this.instance_1,p:{skewX:-16.1415,skewY:164.7082,x:143.2,y:175.55,regX:15.1,regY:11.9,scaleY:0.6552}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{regX:16.6,regY:23,skewX:-42.809,skewY:138.6196,x:169.5,y:236.4,scaleX:0.6643,scaleY:0.6706,startPosition:1}},{t:this.instance_1,p:{skewX:-18.3793,skewY:162.4704,x:143.45,y:175.5,regX:15.1,regY:11.8,scaleY:0.6553}},{t:this.instance}]},3).to({state:[{t:this.instance_2,p:{regX:12.8,regY:3.3,skewX:-26.1499,skewY:155.2842,x:155.85,y:226.75,scaleX:0.4487,scaleY:0.6705,startPosition:1}},{t:this.instance_1,p:{skewX:-12.1757,skewY:168.6714,x:142.95,y:175.7,regX:15,regY:12,scaleY:0.6552}},{t:this.instance}]},33).to({state:[{t:this.instance_2,p:{regX:16.8,regY:23.2,skewX:1.1422,skewY:-0.2847,x:150.1,y:238.8,scaleX:0.4054,scaleY:0.6706,startPosition:0}},{t:this.instance_1,p:{skewX:-6.8099,skewY:-7.6585,x:144.35,y:172.95,regX:15.2,regY:11.8,scaleY:0.6553}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{regX:15.2,regY:3.4,skewX:13.6195,skewY:12.1926,x:144.5,y:226.4,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_1,p:{skewX:-0.8299,skewY:-1.6807,x:144.7,y:172.75,regX:15.2,regY:11.8,scaleY:0.6553}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{regX:14,regY:5,skewX:18.9371,skewY:17.5098,x:140.75,y:227.05,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_1,p:{skewX:1.7027,skewY:0.8541,x:144.45,y:172.85,regX:15.2,regY:11.8,scaleY:0.6553}},{t:this.instance}]},2).to({state:[{t:this.instance_2,p:{regX:16.6,regY:23,skewX:28.3249,skewY:26.897,x:134.4,y:238.35,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_1,p:{skewX:3.8963,skewY:3.0465,x:144.35,y:172.8,regX:15.2,regY:11.8,scaleY:0.6553}},{t:this.instance}]},3).wait(119));

	// Layer_4
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EB7965").s().p("AiCIqQgIgEgIgDIAGhJQADgugDiIIgJkYQgFicAJhiQAUjrB0iAQARACAVAFQBPAQAsAeQhDBGgpCYQgsCdADEIQACCNAUCdQAQB2ALBjQhrgQhLgkg");
	this.shape_28.setTransform(110.7107,166.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#647081").s().p("ABBJjIg4gHQhrgQhLgkQgIgEgIgDQgngWg4gnQgfgSgHgSQgFgKgBgXIABgMQACgxALhcQAMhjADgsQACgjAChDQAGjDADgtQAJiJAWhoQAOhIAWghQAZgjAqgEQAqgEAQAAQAQAAAaAFQASACAVAFQBOAQAsAeIAeAPQBaAyA2BKQAaAiAOB/QANB/gOBFQgOBFgSDUQgRDTAPCQQgvASgYAGQgaAHghACQgbACghAAIghgCg");
	this.shape_29.setTransform(115.0251,166.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).wait(200));

	// Layer_1
	this.instance_3 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_3.setTransform(122.6,264.15,0.4984,0.5129,0,-3.7626,0,36.2,139.6);

	this.instance_4 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_4.setTransform(93.75,246.2,0.4985,0.5131,0,2.2208,6.3489,36.5,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(200));

	// Layer_3
	this.instance_5 = new lib.MomakOb3dolakta("single",0);
	this.instance_5.setTransform(94.8,112.7,0.6171,0.6535,0,1.1239,2.6105,14.8,11.9);

	this.instance_6 = new lib.MomakOb3odlakta("single",1);
	this.instance_6.setTransform(95.2,158.35,0.5255,0.6039,0,14.6152,13.7618,15.3,12.1);

	this.instance_7 = new lib.MomakOb3shaka("single",1);
	this.instance_7.setTransform(77.2,215.45,0.6642,0.6705,0,34.2459,32.8172,17,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regX:17,scaleY:0.6705,skewX:34.2459,skewY:32.8172,x:77.2,y:215.45,regY:23.1}},{t:this.instance_6,p:{skewX:14.6152,skewY:13.7618,x:95.2,y:158.35,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_5,p:{regY:11.9,scaleY:0.6535,skewX:1.1239,skewY:2.6105,y:112.7,x:94.8,scaleX:0.6171,regX:14.8}}]}).to({state:[{t:this.instance_7,p:{regX:17.1,scaleY:0.6704,skewX:36.7186,skewY:35.2886,x:72.8,y:214.7,regY:23.1}},{t:this.instance_6,p:{skewX:17.0853,skewY:16.2325,x:93.2,y:158.45,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_5,p:{regY:12,scaleY:0.6534,skewX:3.5948,skewY:5.0816,y:112.9,x:94.8,scaleX:0.6171,regX:14.8}}]},30).to({state:[{t:this.instance_7,p:{regX:17.1,scaleY:0.6704,skewX:43.1537,skewY:41.7266,x:63.95,y:212.1,regY:23}},{t:this.instance_6,p:{skewX:23.5233,skewY:22.6697,x:90.55,y:158.55,regX:15.5,scaleX:0.5254,regY:12.1,scaleY:0.6039}},{t:this.instance_5,p:{regY:12,scaleY:0.6535,skewX:6.5797,skewY:8.067,y:112.95,x:94.75,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_7,p:{regX:13,scaleY:0.6705,skewX:40.5883,skewY:39.156,x:66.55,y:198.4,regY:5.4}},{t:this.instance_6,p:{skewX:25.939,skewY:25.0902,x:88.9,y:156,regX:15.2,scaleX:0.5255,regY:12,scaleY:0.6039}},{t:this.instance_5,p:{regY:11.9,scaleY:0.6535,skewX:10.4042,skewY:11.8931,y:111.6,x:95.25,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_7,p:{regX:12.9,scaleY:0.6705,skewX:45.3153,skewY:43.884,x:63.1,y:196.6,regY:5.4}},{t:this.instance_6,p:{skewX:30.6678,skewY:29.8167,x:88.9,y:156.2,regX:15.2,scaleX:0.5255,regY:11.9,scaleY:0.6039}},{t:this.instance_5,p:{regY:11.9,scaleY:0.6535,skewX:10.4042,skewY:11.8931,y:111.6,x:95.25,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_7,p:{regX:16.9,scaleY:0.6705,skewX:52.2513,skewY:50.8193,x:52.55,y:204.7,regY:22.9}},{t:this.instance_6,p:{skewX:32.6189,skewY:31.7684,x:87.3,y:155.95,regX:15.1,scaleX:0.5255,regY:11.8,scaleY:0.604}},{t:this.instance_5,p:{regY:11.8,scaleY:0.6535,skewX:12.3555,skewY:13.8442,y:111.6,x:95.2,scaleX:0.6172,regX:14.8}}]},3).to({state:[{t:this.instance_7,p:{regX:13,scaleY:0.6705,skewX:40.5883,skewY:39.156,x:66.55,y:198.4,regY:5.4}},{t:this.instance_6,p:{skewX:25.939,skewY:25.0902,x:88.9,y:156,regX:15.2,scaleX:0.5255,regY:12,scaleY:0.6039}},{t:this.instance_5,p:{regY:11.9,scaleY:0.6535,skewX:10.4042,skewY:11.8931,y:111.6,x:95.25,scaleX:0.6171,regX:14.8}}]},33).to({state:[{t:this.instance_7,p:{regX:17.1,scaleY:0.6704,skewX:43.1537,skewY:41.7266,x:63.95,y:212.1,regY:23}},{t:this.instance_6,p:{skewX:23.5233,skewY:22.6697,x:90.55,y:158.55,regX:15.5,scaleX:0.5254,regY:12.1,scaleY:0.6039}},{t:this.instance_5,p:{regY:12,scaleY:0.6535,skewX:6.5797,skewY:8.067,y:112.95,x:94.75,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_7,p:{regX:17.1,scaleY:0.6704,skewX:36.7186,skewY:35.2886,x:72.8,y:214.7,regY:23.1}},{t:this.instance_6,p:{skewX:17.0853,skewY:16.2325,x:93.2,y:158.45,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_5,p:{regY:12,scaleY:0.6534,skewX:3.5948,skewY:5.0816,y:112.9,x:94.8,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_7,p:{regX:17.1,scaleY:0.6705,skewX:35.4719,skewY:34.0435,x:75.05,y:215.1,regY:23.1}},{t:this.instance_6,p:{skewX:15.8412,skewY:14.9854,x:94.35,y:158.5,regX:15.5,scaleX:0.5254,regY:12.2,scaleY:0.6039}},{t:this.instance_5,p:{regY:11.9,scaleY:0.6535,skewX:2.3487,skewY:3.8352,y:112.75,x:94.9,scaleX:0.6171,regX:14.9}}]},2).to({state:[{t:this.instance_7,p:{regX:17,scaleY:0.6705,skewX:34.2459,skewY:32.8172,x:77.2,y:215.45,regY:23.1}},{t:this.instance_6,p:{skewX:14.6152,skewY:13.7618,x:95.2,y:158.35,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_5,p:{regY:11.9,scaleY:0.6535,skewX:1.1239,skewY:2.6105,y:112.7,x:94.8,scaleX:0.6171,regX:14.8}}]},3).wait(119));

	// Layer_8
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,51,51,0.298)").s().p("AggCmQg6hRhugSQhFgKgmgVQgmgVgShLQgShNB1g2QB0g3AMgDQCagdBKBYQBLBWAcAMQDpAphVCyQgWAvgtAdQhVA2hGAAQhaAAg/hbg");
	this.shape_30.setTransform(103.6097,316.4268);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.3,1.5,138.3,340.7);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAO8QmTgDkckZQkdkZAAmKQAAmMEdkXQEckXGTADQGTACEfEaQEbEZAAGLQAAGLkbEXQkcEUmPAAIgHAAgAnNmkQi8CsAAD1QAAD1C8CwQC8CtEKACQEJABC8irQC9itAAj2QAAj0i9ivQi8iukJgCIgEAAQkIAAi6Crg");
	this.shape.setTransform(-103.6479,197.7728,0.1305,0.1391,0,-9.6028,146.6556);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#238DE9").s().p("AhTIjQgiAAghgDQgkg1hIg2QBlgaBGg6IAugrQC4AlCBBfQiYBqjHAAIgEgBgAi3IcQiRgWh0hTQgfgagdgfQA2gJBmA3IBDAkQAGADgZgMIAGADQAfAQAUAQQAUAPAsAnIgEAAgAlOGGIBThqQBYACBRANQgJAKgJAIQhEA+h6AgQgOgLgegKgAgHEMQAzhbAHiKIHLAOIgBAPIgLA/QglCRh7BxIgUASQiChgjDgrgAjbDxQA2hnAHhqICmAEQgHCKg1BWQhPgOhYgFgAAzgEQgCiLgzhgQDVggCihOQCLCWABDJIAAAGgAidgMQgEhlguhqQBUgFBMgIQA2BaABCHgAlAlhQAjgTAbgNQByAjBEBMQhJAJhQAFQgig7g5gigAgqkqQg9hMhngnQBig7A4hKQDiAKCjCYQiqBMjCAdIgPgTgAn3l9IgJgDIAFgEQCniZDpgGQg9BBhfAxQhtA9hNAAQgeAAgYgJg");
	this.shape_1.setTransform(-104.6318,198.4844,0.1306,0.1393,0,-9.6047,146.6552);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABO8QmTgCkdkZQkdkcAAmKQAAmNEdkVQEdkXGTADQGTADEeEZQEbEZAAGLQAAGMkbEYQkbETmPAAIgHAAgAnMmlQi8CsAAD2QAAD0C8CxQC8CtELACQEIABC8irQC8iuAAj2QAAj0i8iuQi8ivkIgBIgFgBQkIAAi6Crg");
	this.shape_2.setTransform(-103.6914,197.8001,0.2715,0.2896,0,-9.6043,146.6627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAO8QmTgCkckZQkdkbAAmKQAAmNEdkWQEckXGTADQGUADEeEZQEbEZAAGLQAAGMkbEYQkcETmOAAIgIAAgAnMmlQi9CsABD2QgBD0C9CxQC7CtELACQEJABC7irQC9iuAAj2QAAj0i9iuQi7ivkJgBIgFgBQkHAAi6Crg");
	this.shape_3.setTransform(-103.6643,197.7809,0.5192,0.5536,0,-9.608,146.6569);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAO8QmTgCkckZQkdkcAAmKQAAmNEdkVQEckXGTADQGTADEfEZQEbEZAAGLQAAGMkbEYQkcETmPAAIgHAAgAnNmlQi8CsAAD2QAAD0C8CxQC8CtELACQEIABC8irQC9iuAAj2QAAj0i9iuQi8ivkIgBIgFgBQkIAAi6Crg");
	this.shape_4.setTransform(-103.562,197.8093,0.4642,0.4949,0,-9.6075,146.6563);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAO8QmTgCkckZQkdkaAAmKQAAmNEdkXQEckXGTADQGUADEeEZQEbEZAAGLQAAGMkbEYQkcETmOAAIgIAAgAnMmlQi9CsABD2QgBD0C9CxQC7CtELACQEJABC7irQC9iuAAj2QAAj0i9iuQi7ivkJgBIgFgBQkHAAi6Crg");
	this.shape_5.setTransform(-87.3117,208.4273,0.4642,0.4949,0,-9.6072,146.6573);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAO8QmTgCkckZQkdkcAAmKQAAmNEdkVQEckXGTADQGUADEeEZQEbEZAAGLQAAGMkbEYQkcETmOAAIgIAAgAnMmlQi9CsABD2QgBD0C9CxQC7CtELACQEJABC7irQC9iuAAj2QAAj0i9iuQi7ivkJgBIgFgBQkHAAi6Crg");
	this.shape_6.setTransform(-51.3466,220.0763,0.3326,0.3031,0,11.6443,152.1806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleX:0.1306,scaleY:0.1393,skewX:-9.6047,skewY:146.6552,x:-104.6318,y:198.4844}},{t:this.shape}]},109).to({state:[{t:this.shape_1,p:{scaleX:0.2718,scaleY:0.2897,skewX:-9.6042,skewY:146.6633,x:-105.669,y:199.1207}},{t:this.shape_2}]},2).to({state:[{t:this.shape_1,p:{scaleX:0.5196,scaleY:0.5539,skewX:-9.6084,skewY:146.6572,x:-107.3202,y:200.2858}},{t:this.shape_3,p:{scaleX:0.5192,scaleY:0.5536,skewX:-9.608,skewY:146.6569,x:-103.6643,y:197.7809}}]},2).to({state:[{t:this.shape_1,p:{scaleX:0.4645,scaleY:0.4952,skewX:-9.6083,skewY:146.6586,x:-106.8723,y:200.0079}},{t:this.shape_4}]},3).to({state:[{t:this.shape_1,p:{scaleX:0.4645,scaleY:0.4952,skewX:-9.6083,skewY:146.6586,x:-90.5724,y:210.7079}},{t:this.shape_5}]},64).to({state:[{t:this.shape_1,p:{scaleX:0.3996,scaleY:0.3914,skewX:-0.6947,skewY:149.1912,x:-59.2721,y:211.0535}},{t:this.shape_3,p:{scaleX:0.3993,scaleY:0.3911,skewX:-0.6929,skewY:149.1921,x:-56.3693,y:209.2455}}]},2).to({state:[{t:this.shape_1,p:{scaleX:0.3434,scaleY:0.3204,skewX:6.5788,skewY:151.0055,x:-57.9528,y:218.3903}},{t:this.shape_3,p:{scaleX:0.3432,scaleY:0.3203,skewX:6.5771,skewY:151.005,x:-55.4459,y:216.9573}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.3328,scaleY:0.3033,skewX:11.6502,skewY:152.1826,x:-53.8406,y:221.4}},{t:this.shape_6}]},1).to({state:[]},1).wait(15));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A25050").s().p("AAgAgQghgYgqgNQgGgCgDgFQgDgGACgGQACgGAGgDQAFgDAGADQAuAPAlAaQAFAEABAGQABAGgEAFQgDAFgGABIgCAAQgGAAgDgDg");
	this.shape_7.setTransform(14.5262,129.3693,1.7398,1.7398,-12.4763);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7D3BE").s().p("ABtBUQgFgDgEgFQgDgFAAgHQgBgGADgFQACgGAFgEQAFgFAHgCQAEgBAJABQANABAGACQAKADAEAIQAEAFgBAJQAAAKgGAFQgDADgHABIgLABIgQACIgDABQgHAAgFgDgAiagKQgEgCgEgEQgFgGAAgMQAAgHADgMIAEgTIABgFIACgFQADgEAJAAQAIABADADQAEAEAAAKQABAVgFAUQgDAOgIADIgEABIgFgBg");
	this.shape_8.setTransform(17.6887,100.9256,1.7398,1.7398,-12.4763);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABZBHQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgDgEQgCgFACgFQACgEACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAIACAAQAFABACADQADAEgCAHQgBAEgDADQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgBAAgAhggwQgDgCgBgEIAAgHQABgFAFgDQACgBADAAIABAAIAEABIADADIACAFIAAAFQgCAGgFACIgBABIgEAAIgFgBg");
	this.shape_9.setTransform(15.5304,77.992,1.7398,1.7398,-12.4763);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABTBuQgEgCgCgDQgEgFgCgKQgEgTADgSQADgTAKgQQAFgHAEgDQADgCADAAQAEAAACACQAFACABAIQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgDABgBAEQgCAGACAEIACAEQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAEAAQgBAXgEAZQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhgHQgDgCgDgDQgDgFgCgKQgEgTADgSQADgTAKgQQAEgHAFgCIAGgDQADAAADACQAFACABAHIgBAAQgDAAgCACQgEACgCAGIAAAHQACAEACABIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_10.setTransform(13.3474,83.7627,1.7398,1.7398,-12.4763);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#815451").s().p("AB9BYIgFgNQgEgPgQgMQgNgKgSgGIgMgEQgFgDgCgFQAAgDADgEQACgDAEgCQAFgBAJAAQAUAFAPALQARALAMARQAJAPABALQAAAIgDAEQgCAEgDABIgHACQgFgCgCgGgAhBgsIgJgEIgGgEIgFgHQgHgIgKgDQgLgDgKAEIgGABIgFACQgDABgDgBQgDgBgBgCQgDgEABgFQACgEADgEQAIgHAMgBQAJgCALACQAMADALAIQALAGAHAKQAEAGABAEQABAHgFAFIgEABIgCAAg");
	this.shape_11.setTransform(14.3456,67.1175,1.7398,1.7398,-12.4763);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F48B73").s().p("AgXByIgBAAIgCgBQgKgFgFgIQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgNAAgJgCg");
	this.shape_12.setTransform(10.7335,96.226,1.7398,1.7398,-12.4763);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3C5A9").s().p("ABdF3QgOhNgtgdQgxgBhMgaQhMgbgqgsQgpgsgThYQgShYAOhkQAPhkAZhxIAKgtQAVAIAZAFQBIAMBIgEQBcCBCXAWQgHBUAoBWQhADVAeBhQAZBSAuAzQgyAegtAAQgwAAgsghg");
	this.shape_13.setTransform(36.4342,101.8666,1.7398,1.7398,-12.4763);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#926461").s().p("AgdBZQhCgWgugzQgLgMgDgJQgBgEACgDQADgDAHAEQAMAHAZATQAXARANAIQA9AlBWgDIAZAAQANABAKAGQAAAHgHAFQgFACgJACQgaAFgaAAQgpAAgngNgAAXA1QgfgCgfgNQg4gXgvg0QgQgSgDgPQgBgIAFgDQAFgCAHAIQAFAGAOAMQAgAcATANQAdAUAcAJQARAGAoAHQAlAGAUAIQgDADgHACQgZAIgbAAIgLAAgABQATQg5gKgwgYQg1gbgjgpQgIgKAEgFQADgEAGABIAIAFIAgAYQATAOAOAJQAeARAnANQAcAJAuAKIAcAGQAPAFALAHQgRAFgXAAQgTAAgXgEg");
	this.shape_14.setTransform(-3.8601,16.7753,1.7398,1.7398,-12.4763);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#815451").s().p("ABeJQQl3inhUhPQgOgDgPgGQgigMgbgVQgdgWgSgdQgWgjgJgxQgGgnADg0QAIiXBCiMIACgDQhGgtALhuQAMh2BuglQBSgbBXgJQAugkAygRQDDhDCGCJQAxANAqAXQBKAqAzBJQBbCFgiCdQAMB7gOBNQAeBFAcBgQAbBgghBTQgiBTgvAqQhQBJhiAAQhOAAhZgug");
	this.shape_15.setTransform(64.7688,58.9831,1.7398,1.7398,-12.4763);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABgA/IgEgCIgGgDIgGgFQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAABgBQABgCAHACQABgBAFADIABAAIAFADIAFAEQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAACIgHABIgDgBgAhXgwIgFgCIgGgDIgFgFQgBgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQACgDAGADQACgBAEADIACAAIAFACIAEAEQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAIAAADIgIABIgCgBg");
	this.shape_16.setTransform(16.716,81.2934,1.7398,1.7398,-12.4763);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABlBTIgEgBIgDgBIgHgEIgIgHQgGgFgCgGQgEgHAAgEIgBgDIAAAAIAAgCQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQACgIAMgDQAFgBAGACIACAAIAGACQAAAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQADABAEACQAFAEADAFIgBAAQgFgDgBABQgHgDgBADQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAABIAGAFIAGADIAEACQABALgDALIgFAGIgCAAIgIgBgAhSgdIgEgBIgEgBIgGgEIgJgGQgFgFgDgGQgEgHAAgEIgBgDIABgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQADgIAMgDQAEgCAHACIACAAIAFACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAEAAAEADQAFADADAFIgCAAQgEgDgCABQgGgCgCACQAAABAAAAQAAAAABABQAAAAAAABQAAABABAAIAFAFIAGADIAFACQAAALgDAMIgEAFIgCAAIgIgBg");
	this.shape_17.setTransform(13.1947,83.4296,1.7398,1.7398,-12.4763);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#815451").s().p("AB8BVQgEgBgEgDIgFgHIgEgHQgGgJgKgEQgKgEgKABIgGABIgGABQgDAAgCgBIgFgDQgCgFACgEQACgFAFgDQAIgFAMAAQAJAAALAEQALAEAKAJQAKAIAGALQADAHAAAEQAAAHgFAEIgDABIgEgBgAg8gbQgEgBgEgDIgEgGIgFgHQgFgJgKgFQgLgEgKACIgFAAIgGABQgDABgDgBIgEgEQgCgEACgFQACgEAEgDQAJgGALABQAKgBAKAEQAMAFAKAJQAJAIAGALQADAGABAFQAAAHgFADIgEABIgEgBg");
	this.shape_18.setTransform(13.5342,71.1008,1.7398,1.7398,-12.4763);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghgSYAAAAACAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAGgBAAAAIAAAAYAAAAgDgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgFAAAAAAIAAAA");
	this.shape_19.setTransform(31.4799,87.9829,1.7398,1.7398,-12.4763);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgigSYAAAAADAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAFgBAAAAIAAAAYAAAAgCgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgGAAAAAAIAAAA");
	this.shape_20.setTransform(-4.1849,76.9863,1.7398,1.7398,-12.4763);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#815451").s().p("AB/BPQgEAAgEgDIgFgGIgFgHQgHgIgLgDQgKgDgKACIgGACIgFABIgGAAQgEgBgBgCQgDgEACgFQACgEAEgEQAIgGALgBQAJgBALADQANADAKAHQALAHAGALQAFAGAAAEQACAHgFAEQgCACgDAAIgDgBgAg7gaQgEAAgEgDIgFgGIgFgHQgHgIgKgDQgLgDgKACIgFACIgGABIgGAAQgDgBgBgCQgDgEACgFQABgEAFgEQAIgGAKgBQAKgBALADQAMADALAHQAKAHAHALQAEAGABAEQABAHgFAEQgCACgCAAIgEgBg");
	this.shape_21.setTransform(13.2997,75.0555,1.7398,1.7398,-12.4763);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A25050").s().p("AgMAlQgSgHgIgMQgDgFgBgFIgBgIIAAgBIAAgGIAIAJQAdAhAmgVIAMgIQgHgIgHgHQgggggoAhIgBABIAAgBQACgOAKgLQAGgHAJgBIAMACIAKABQAQACAMAPQAFAGACAGQAEAIgBAHIAAABIgBAJIgBACQgEAJgIAHIgLAGQgFACgFAAQgJAAgMgFg");
	this.shape_22.setTransform(15.4806,128.9972,1.7398,1.7398,-12.4763);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhgCpIBEAMQgPAJgOAAQgVAAgSgVgAgeCdIhJACQAogiAhAggABbgvQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgEQgCgEACgGQABgEADgBQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAheinQgCgBgCgEIAAgHQACgGAEgCQACgCADAAIABAAIAEABIAEAEIACAEIgBAFQgCAGgEADIgCAAIgEABIgFgCg");
	this.shape_23.setTransform(19.5368,98.2132,1.7398,1.7398,-12.4763);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhPCzIgIgKIABAAIBJgCQAHAHAGAJIgLAIgABTAfQgEgCgCgDQgEgFgCgLQgEgRADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhWQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_24.setTransform(16.3242,97.2164,1.7398,1.7398,-12.4763);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#815451").s().p("AB5BaQgCgCgFgKQgHgPgQgJQgPgIgTgCIgMgDQgGgCgCgFQgBgDADgEQABgDAEgDQAFgCAIgBQAVABARAJQASAJAOAPQALAMADALQACAJgDAEQgBAEgDACIgGACQgFgBgEgFgAhBgmQgEgBgEgDIgFgGIgEgHQgGgJgKgFQgKgEgKACIgGAAIgGABQgDABgCgBIgFgEQgCgEACgFQACgEAFgDQAIgGAMABQAJgBALAEQALAFAKAJQAKAIAGALQADAGAAAFQAAAHgFADIgDABIgEgBg");
	this.shape_25.setTransform(15.3204,63.4445,1.7398,1.7398,-12.4763);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgOAAgJgCg");
	this.shape_26.setTransform(10.7335,96.226,1.7398,1.7398,-12.4763);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A25050").s().p("AgkAPQgTgOAAgNIACgHIAIAKQAaAbAxABIAGAAIATgBIgBAFQgGAMgcACIgDAAQgaAAgbgWgAArAGQgUgRgbgIQgUgHgQADQgHABgGADQABgEADgEQAFgIAGAAQAGgBAGABIAPAFQAyANAKAOQAIALgCAKIgMgMg");
	this.shape_27.setTransform(15.1519,128.4483,1.7398,1.7398,-12.4763);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhpCdIBMAdQgygBgagcgAhkCPQAQgDAUAHQAcAJAUARgABdgsQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgDQgCgFACgFQABgEADgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAhcijQgCgCgCgEIAAgHQACgGAEgCQACgBADAAIABAAIAEABIAEADIACAFIgBAEQgCAGgEADIgCAAIgEABIgFgBg");
	this.shape_28.setTransform(19.0812,97.7646,1.7398,1.7398,-12.4763);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgODAIhMgeIgIgJQAGgEAHAAIBUAdIALANIgSABIgGAAgABTAeQgEgCgCgDQgEgFgCgLQgEgRADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhXQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_29.setTransform(16.3618,97.3862,1.7398,1.7398,-12.4763);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A25050").s().p("AAEBFQgSgFgRgLIgCgKQADgLAGgHQAFgHAGAAQAKAAAEASQAHgNAJAAQAHAAAEAIIACAEIgBAEQgEAXgHAIIgDAAIgLgBgAAegeQgFgNgDgGQgDgGgNgCQgLgCgFABQgGABgEAGIgGAIQgEAHgCAHIADgOIAFgRQAEgIAJAAQAWgDAMAJQAMAJgBAOIAAASIgEgJg");
	this.shape_30.setTransform(15.4624,130.1403,1.7398,1.7398,-12.4763);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgzCgQgTgHgOAAIgHAAIAGgIQAEgGAGgBQAFgBAMADQANACADAFQADAGAFAOQgHgFgKgCgABZgYQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDQgCgFACgFQACgEACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIACAAQAFAAACADQADAFgCAHQgBAEgDACQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCABIgBgBgAhgiPQgDgCgBgEIAAgHQABgGAFgCQACgBADAAIABAAIAEABIADADIACAFIAAAEQgCAGgFADIgBAAIgEABIgFgBg");
	this.shape_31.setTransform(19.1151,94.1933,1.7398,1.7398,-12.4763);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhQCaIAAgFIACgNQADgHAEgHIAGAAQAPgBATAHQAKADAHAEIADAJIAAADQAAAfgDAWIgCgDQgFgJgHABQgJgBgGANQgFgSgLAAQgFAAgGAIQgGAHgDALQgFgZAEgegABTANQgEgCgCgDQgEgFgCgKQgEgSADgTQADgTAKgQQAFgGAEgDQADgCADAAQAEgBACACQAFADABAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAEAAQgBAXgEAYQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhoQgDgCgDgDQgDgGgCgKQgEgSADgTQADgSAKgQQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAIQACADACACIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_32.setTransform(17.0007,100.274,1.7398,1.7398,-12.4763);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A25050").s().p("AgvAfIgFgHQAFgKAJgDQAJgDANACQAMACAGAMQALgHAOADQAKAAAIAHQABAAAAAAQAAABAAgBQAAAAABAAQAAAAAAAAQgBAEgEAGQgEAGgHAEIgMAFQgEABgRAAQgRAAgcgWgAAwgNIgNgOQgGgFgSgDQgTgFgIABQgJgBgFACQgJAEgBACQgGADgEAGQABgHAEgGQAFgHAEgDQAEgDAHgBIAPgCIARABQALAAASAKQARAKAAALIAAAOIgFgHg");
	this.shape_33.setTransform(15.3343,128.9595,1.7398,1.7398,-12.4763);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgoCkQgegIgWgCIgKgCQABgCAJgDQAEgDAKABQAIgBAUAFQASADAGAFIANAPIgbgIgABagdQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgCgDQgCgFACgFQABgEADgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIADAAQAEAAACADQAEAFgDAHQgBAEgDACQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgCgBgAhfiUQgCgCgCgEIAAgHQACgGAEgCQACgBADAAIABAAIAEABIAEADIACAFIgBAEQgCAGgEADIgCAAIgEABIgFgBg");
	this.shape_34.setTransform(19.027,95.1038,1.7398,1.7398,-12.4763);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AABDFQgHgHgLAAQgOgDgLAHQgHgMgMgCQgNgCgIADQgJADgGAKQgEgGABgLIAFgfQAEgGAHgDIAKABQAWACAeAJIAaAHIAEAHIAAACQgBAUgEAMIgCABIAAgBgABTAYQgEgCgCgDQgEgFgCgKQgEgSADgSQADgTAKgQQAFgHAEgDQADgCADAAQAEAAACACQAFACABAIQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgDABgBAEQgCAGACAEIACAEQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAQgBAXgEAYQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhhdQgDgCgDgDQgDgFgCgKQgEgTADgSQADgTAKgQQAEgHAFgCIAGgDQADAAADACQAFACABAHIgBAAQgDAAgCACQgEACgCAGIAAAHQACAEACABIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_35.setTransform(16.576,98.3545,1.7398,1.7398,-12.4763);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A25050").s().p("AA0AaIAAABIAAADQgLgRgGgGQghgggmAYIgBAAIgBABIgMAIIgBABIAAgBQACgQALgKQAKgLAHAAQAGgBAJADIANABQATACAOASQAFAGADAHQADAHABAQg");
	this.shape_36.setTransform(14.9994,129.2637,1.7398,1.7398,-12.4763);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhmCuQAogYAhAgQgpgHgggBgABagoQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDQgCgFACgFQACgEACgCQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAIACAAQAFAAACADQADAFgCAHQgBAEgDACQgBABAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIgCABIgBgBgAhfifQgDgCgBgEIAAgHQABgGAFgCQACgBADAAIABAAIAEABIADADIACAFIAAAEQgCAGgFADIgBAAIgEABIgFgBg");
	this.shape_37.setTransform(19.5254,96.9535,1.7398,1.7398,-12.4763);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgJDIIhKgMQgKgEgFgGIABgBIAMgIIABgCIABAAQAgABAoAIQAGAGAKARIAAAAIgJABIgFAAgABTAWQgEgCgCgEQgEgFgCgKQgEgRADgTQADgTAKgQQAFgHAEgCQADgCADAAQAEgBACACQAFADABAHQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQgDACgBAEQgCAFACAFIACAEQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAEAAQgBAXgEAXQgCAKgDAFQgEAIgIAAIgCAAQgDAAgCgBgAhhhfQgDgCgDgEQgDgFgCgKQgEgSADgTQADgTAKgPQAEgHAFgDIAGgCQADAAADABQAFACABAIIgBAAQgDAAgCABQgEADgCAFIAAAHQACAEACACIAFABIAEAAQAAAXgFAZQgBAKgDAFQgFAIgHAAIgCAAQgDAAgDgBg");
	this.shape_38.setTransform(16.6792,98.8207,1.7398,1.7398,-12.4763);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A25050").s().p("AgzgOQgDgEABgGQACgFAEgCQAFgDAFABQAFABADAFQAbAsAmgNQAFgCAFADQAFACACAFQACAFgDAFQgCAFgFACQgOAFgOAAQgmAAgegwg");
	this.shape_39.setTransform(13.6011,127.8516,1.7398,1.7398,-12.4763);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A25050").s().p("AADAgQgWAAgSgOQgJgHgIgLQgHgMACgJQACgJAEgBQAEgBAEACIAEAEIAHAPQAGAMASAEQASAEATgFQASgFAHACQAHACABAGQABAGgDAGQgEAGgOADQgMACgTAAIgGAAg");
	this.shape_40.setTransform(16.9859,126.2341,1.7366,1.7366,-12.726);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3C5A9").s().p("AA/GRQAAhtgtgcQgxgBhMgbQhNgbgpgrQgqgsgShZQgThYAPhkQAPhjAYhxIAKguQAVAJAaAEQBHANBJgEQBcCBCXAVQgHBVAnBWQg/DVAdBhQAdBhBMAoIgPAEQhJAhhCAAQgqAAgmgNg");
	this.shape_41.setTransform(39.7473,101.6646,1.7366,1.7366,-12.726);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7D3BE").s().p("ABsBUQgFgCgEgGQgDgFAAgGQgBgGADgGQACgFAFgEQAFgGAHgBQAEgBAJAAQANABAGACQAKAEAEAHQAEAGgBAIQAAALgGAFQgDADgHABIgLABIgQACIgDAAQgHAAgFgDgAiYgKQgFgCgDgEQgFgGAAgMQAAgHACgMIAEgTIABgFIADgFQADgEAJAAQAHABAEADQAEAEAAAKQABAVgFAUQgEAOgHADIgFAAIgEAAg");
	this.shape_42.setTransform(17.9315,99.2962,1.7366,1.7366,-12.726);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F48B73").s().p("AgYByQgMgFgFgJQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNADIgWAAQgOAAgJgCg");
	this.shape_43.setTransform(10.9332,96.6465,1.7366,1.7366,-12.726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_7}]}).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_18,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.5342,y:71.1008}},{t:this.shape_17,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.1947,y:83.4296}},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_16,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:16.716,y:81.2934}},{t:this.shape_7}]},17).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_21,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.2997,y:75.0555}},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_7},{t:this.shape_20,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-4.1849,y:76.9863}},{t:this.shape_19,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:31.4799,y:87.9829}}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_18,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.5342,y:71.1008}},{t:this.shape_17,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.1947,y:83.4296}},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_16,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:16.716,y:81.2934}},{t:this.shape_7}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_7}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_18,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.5342,y:71.1008}},{t:this.shape_17,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.1947,y:83.4296}},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_16,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:16.716,y:81.2934}},{t:this.shape_7}]},64).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_21,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.2997,y:75.0555}},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_7},{t:this.shape_20,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-4.1849,y:76.9863}},{t:this.shape_19,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:31.4799,y:87.9829}}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_18,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.5342,y:71.1008}},{t:this.shape_17,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:13.1947,y:83.4296}},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_16,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:16.716,y:81.2934}},{t:this.shape_7}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_7}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_26,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:10.7335,y:96.226}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_22}]},8).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_26,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:10.7335,y:96.226}},{t:this.shape_25},{t:this.shape_29},{t:this.shape_28},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_27}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_25},{t:this.shape_32},{t:this.shape_31},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_30}]},3).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_25},{t:this.shape_35},{t:this.shape_34},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_33}]},3).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_7}]},3).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_25},{t:this.shape_38},{t:this.shape_37},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_36}]},3).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_26,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:10.7335,y:96.226}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_22}]},3).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_26,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:10.7335,y:96.226}},{t:this.shape_25},{t:this.shape_29},{t:this.shape_28},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_27}]},3).to({state:[{t:this.shape_15,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:64.7688,y:58.9831}},{t:this.shape_14,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:-3.8601,y:16.7753}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.7398,scaleY:1.7398,rotation:-12.4763,x:17.6887,y:100.9256}},{t:this.shape_39}]},3).to({state:[{t:this.shape_15,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:64.789,y:58.4174}},{t:this.shape_14,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:-3.8972,y:16.5858}},{t:this.shape_41},{t:this.shape_26,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:11.0151,y:95.8269}},{t:this.shape_18,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:13.7014,y:70.7357}},{t:this.shape_17,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:13.4162,y:83.0433}},{t:this.shape_8,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:17.978,y:100.4875}},{t:this.shape_16,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:16.9216,y:80.8957}},{t:this.shape_40,p:{x:16.9859,y:126.2341}}]},69).to({state:[{t:this.shape_15,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:64.789,y:58.4174}},{t:this.shape_14,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:-3.8972,y:16.5858}},{t:this.shape_41},{t:this.shape_43},{t:this.shape_21,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:13.4845,y:74.6841}},{t:this.shape_42},{t:this.shape_40,p:{x:17.1798,y:125.1221}},{t:this.shape_20,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:-3.9596,y:76.6875}},{t:this.shape_19,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:31.6875,y:87.5086}}]},2).to({state:[{t:this.shape_15,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:64.789,y:58.4174}},{t:this.shape_14,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:-3.8972,y:16.5858}},{t:this.shape_41},{t:this.shape_26,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:11.0151,y:95.8269}},{t:this.shape_18,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:13.7014,y:70.7357}},{t:this.shape_17,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:13.4162,y:83.0433}},{t:this.shape_8,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:17.978,y:100.4875}},{t:this.shape_16,p:{scaleX:1.7366,scaleY:1.7366,rotation:-12.726,x:16.9216,y:80.8957}},{t:this.shape_40,p:{x:16.9859,y:126.2341}}]},3).wait(2));

	// ruka_L
	this.instance = new lib.Devojkao1shaka("single",0);
	this.instance.setTransform(138.2,343.45,1.1426,1.1426,28.0548,0,0,16.6,6.9);

	this.instance_1 = new lib.Devojkao1dolakta("single",0);
	this.instance_1.setTransform(126.25,213.45,1.1427,1.1427,-17.3844,0,0,17.2,40.7);

	this.instance_2 = new lib.Devojkao1odlakta("single",0);
	this.instance_2.setTransform(138.9,249.4,1.1426,1.1426,0.0949,0,0,14.4,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{rotation:0.0949,x:138.9,y:249.4,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:-17.3844,x:126.25,y:213.45,regX:17.2}},{t:this.instance,p:{regX:16.6,regY:6.9,rotation:28.0548,x:138.2,y:343.45,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]}).to({state:[{t:this.instance_2,p:{rotation:6.5385,x:138.95,y:249.45,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:-17.3844,x:126.25,y:213.45,regX:17.2}},{t:this.instance,p:{regX:16.5,regY:6.8,rotation:34.4982,x:127.65,y:342.75,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},77).to({state:[{t:this.instance_2,p:{rotation:12.02,x:136.95,y:250.15,regX:14.3,scaleX:1.1427,scaleY:1.1427,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:39.9782,x:116.75,y:341.9,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:20.5152,x:136.5,y:250.3,regX:14.3,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:48.4733,x:103.05,y:338.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:38.303,x:119.8,y:256.05,regX:14.6,scaleX:1.1425,scaleY:1.1425,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1426,scaleY:1.1426,rotation:-1.5626,x:119.75,y:216.35,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.6,rotation:66.2634,x:61.2,y:329.3,scaleX:1.1425,scaleY:1.1425,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:53.2513,x:101.4,y:254.2,regX:14.6,scaleX:1.1425,scaleY:1.1425,regY:11.4}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:13.3854,x:111.55,y:215.95,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.7,rotation:81.2117,x:25.7,y:309.9,scaleX:1.1425,scaleY:1.1425,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:71.4903,x:98.35,y:254.3,regX:14.6,scaleX:1.1426,scaleY:1.1426,regY:11.3}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:13.3854,x:111.55,y:215.95,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.7,rotation:99.4502,x:8.95,y:283.55,scaleX:1.1425,scaleY:1.1425,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:91.7005,x:98.3,y:254.1,regX:14.6,scaleX:1.1426,scaleY:1.1426,regY:11.4}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:13.3854,x:111.55,y:215.95,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.7,rotation:119.6604,x:4.35,y:250.7,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:103.9808,x:86.15,y:246.65,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.4}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:25.1418,x:106.8,y:213.05,regX:17.4}},{t:this.instance,p:{regX:16.5,regY:6.7,rotation:131.941,x:-4.9,y:223.35,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:117.2094,x:72.3,y:237.25,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:38.3697,x:100.25,y:209.3,regX:17.4}},{t:this.instance,p:{regX:16.5,regY:6.8,rotation:145.169,x:-10.9,y:193.65,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:117.9503,x:64.7,y:229.3,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:11.3,scaleX:1.1427,scaleY:1.1427,rotation:46.8046,x:119.35,y:181,regX:15.1}},{t:this.instance,p:{regX:16.5,regY:6.9,rotation:145.909,x:-17.95,y:184.5,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:117.9503,x:57.45,y:219.85,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:57.0493,x:92.65,y:201.45,regX:17.4}},{t:this.instance,p:{regX:16.5,regY:6.9,rotation:145.909,x:-25.2,y:175.05,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:114.9638,x:39.55,y:203.25,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:79.0403,x:77.05,y:194.95,regX:17.3}},{t:this.instance,p:{regX:16.5,regY:6.8,rotation:142.924,x:-45.4,y:163.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:92.7349,x:61.8,y:223.5,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:56.8099,x:93.45,y:201.6,regX:17.2}},{t:this.instance,p:{regX:16.5,regY:6.9,rotation:120.694,x:-32,y:218.35,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:57.9875,x:93.55,y:249,regX:14.3,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:22.063,x:107.05,y:213.1,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:85.9468,x:13.55,y:298.35,scaleX:1.1427,scaleY:1.1427,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:20.5152,x:136.5,y:250.3,regX:14.3,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:48.4733,x:103.05,y:338.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:32.4681,x:122.15,y:253.05,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-3.4563,x:118.75,y:214.6,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:60.4265,x:71.15,y:331.9,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},10).to({state:[{t:this.instance_2,p:{rotation:44.736,x:106.55,y:251.95,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:8.8106,x:111.3,y:213.7,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:72.6941,x:39.85,y:318.2,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:60.73,x:88,y:246.75,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:24.8027,x:103.15,y:211.3,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.7,rotation:88.6884,x:5.85,y:292.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:71.0006,x:79,y:239.45,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:35.0749,x:100.3,y:207.25,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:98.9581,x:-10,y:269.3,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:68.5079,x:81.5,y:241.1,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:32.5828,x:101.35,y:208.05,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:96.4653,x:-6.1,y:274.8,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:80.9898,x:85.6,y:244.65,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:26.8566,x:104.35,y:209.7,regX:17.2}},{t:this.instance,p:{regX:16.5,regY:6.7,rotation:118.6625,x:-7.25,y:258,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:83.5219,x:85.65,y:244.65,regX:14.6,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:26.8566,x:104.35,y:209.7,regX:17.2}},{t:this.instance,p:{regX:16.6,regY:6.5,rotation:112.6826,x:-7.75,y:254.7,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:68.7948,x:61.8,y:244.15,regX:14.6,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:45.8234,x:91.95,y:211,regX:17.3}},{t:this.instance,p:{regX:16.5,regY:6.8,rotation:85.9956,x:-27.05,y:277.85,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:66.0907,x:62.05,y:244.5,regX:14.6,scaleX:1.1425,scaleY:1.1425,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:45.8234,x:91.95,y:211,regX:17.3}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:69.099,x:-24.9,y:284.1,scaleX:1.1425,scaleY:1.1425,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:62.2953,x:82.45,y:256.85,regX:14.6,scaleX:1.1425,scaleY:1.1425,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:25.0861,x:101.05,y:216.65,regX:17.3}},{t:this.instance,p:{regX:16.6,regY:6.8,rotation:91.2497,x:-0.7,y:299.75,scaleX:1.1425,scaleY:1.1425,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:61.0703,x:82.65,y:257,regX:14.7,scaleX:1.1425,scaleY:1.1425,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:25.0861,x:101.05,y:216.65,regX:17.3}},{t:this.instance,p:{regX:16.7,regY:6.8,rotation:82.0359,x:-0.95,y:302.8,scaleX:1.1425,scaleY:1.1425,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:63.0448,x:109.1,y:263.8,regX:14.7,scaleX:1.1425,scaleY:1.1425,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:4.6216,x:113.35,y:219,regX:17.4}},{t:this.instance,p:{regX:16.7,regY:6.7,rotation:84.011,x:24.05,y:306.65,scaleX:1.1425,scaleY:1.1425,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:37.3695,x:127.7,y:262,regX:14.7,scaleX:1.1425,scaleY:1.1425,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:-8.3634,x:121.1,y:218.45,regX:17.4}},{t:this.instance,p:{regX:16.8,regY:6.6,rotation:58.3362,x:69.75,y:337.5,scaleX:1.1425,scaleY:1.1425,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{rotation:23.9678,x:136.75,y:250.5,regX:14.4,scaleX:1.1427,scaleY:1.1427,regY:11.6}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:57.1189,x:97.95,y:336,scaleX:1.1426,scaleY:1.1426,startPosition:0}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}}]},2).to({state:[{t:this.instance_2,p:{rotation:20.5152,x:136.5,y:250.3,regX:14.3,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:48.4733,x:103.05,y:338.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:20.5152,x:136.5,y:250.3,regX:14.3,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:48.4733,x:103.05,y:338.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},3).to({state:[{t:this.instance_2,p:{rotation:57.9875,x:93.55,y:249,regX:14.3,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:22.063,x:107.05,y:213.1,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:85.9468,x:13.55,y:298.35,scaleX:1.1427,scaleY:1.1427,startPosition:0}}]},46).to({state:[{t:this.instance_2,p:{rotation:92.7349,x:61.8,y:223.5,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:56.8099,x:93.45,y:201.6,regX:17.2}},{t:this.instance,p:{regX:16.5,regY:6.9,rotation:120.694,x:-32,y:218.35,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:114.9638,x:39.55,y:203.25,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:79.0403,x:77.05,y:194.95,regX:17.3}},{t:this.instance,p:{regX:16.5,regY:6.8,rotation:142.924,x:-45.4,y:163.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:117.9503,x:57.45,y:219.85,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:57.0493,x:92.65,y:201.45,regX:17.4}},{t:this.instance,p:{regX:16.5,regY:6.9,rotation:145.909,x:-25.2,y:175.05,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},2).to({state:[{t:this.instance_2,p:{rotation:117.9503,x:64.7,y:229.3,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:11.3,scaleX:1.1427,scaleY:1.1427,rotation:46.8046,x:119.35,y:181,regX:15.1}},{t:this.instance,p:{regX:16.5,regY:6.9,rotation:145.909,x:-17.95,y:184.5,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:117.2094,x:72.3,y:237.25,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:38.3697,x:100.25,y:209.3,regX:17.4}},{t:this.instance,p:{regX:16.5,regY:6.8,rotation:145.169,x:-10.9,y:193.65,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:103.9808,x:86.15,y:246.65,regX:14.5,scaleX:1.1426,scaleY:1.1426,regY:11.4}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:25.1418,x:106.8,y:213.05,regX:17.4}},{t:this.instance,p:{regX:16.5,regY:6.7,rotation:131.941,x:-4.9,y:223.35,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:91.7005,x:98.3,y:254.1,regX:14.6,scaleX:1.1426,scaleY:1.1426,regY:11.4}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:13.3854,x:111.55,y:215.95,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.7,rotation:119.6604,x:4.35,y:250.7,scaleX:1.1426,scaleY:1.1426,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:71.4903,x:98.35,y:254.3,regX:14.6,scaleX:1.1426,scaleY:1.1426,regY:11.3}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:13.3854,x:111.55,y:215.95,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.7,rotation:99.4502,x:8.95,y:283.55,scaleX:1.1425,scaleY:1.1425,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:53.2513,x:101.4,y:254.2,regX:14.6,scaleX:1.1425,scaleY:1.1425,regY:11.4}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1427,scaleY:1.1427,rotation:13.3854,x:111.55,y:215.95,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.7,rotation:81.2117,x:25.7,y:309.9,scaleX:1.1425,scaleY:1.1425,startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{rotation:38.303,x:119.8,y:256.05,regX:14.6,scaleX:1.1425,scaleY:1.1425,regY:11.5}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1426,scaleY:1.1426,rotation:-1.5626,x:119.75,y:216.35,regX:17.4}},{t:this.instance,p:{regX:16.6,regY:6.6,rotation:66.2634,x:61.2,y:329.3,scaleX:1.1425,scaleY:1.1425,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:20.5152,x:136.5,y:250.3,regX:14.3,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:48.4733,x:103.05,y:338.05,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:12.02,x:136.95,y:250.15,regX:14.3,scaleX:1.1427,scaleY:1.1427,regY:11.6}},{t:this.instance_1,p:{regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5,regX:17.2}},{t:this.instance,p:{regX:16.4,regY:6.8,rotation:39.9782,x:116.75,y:341.9,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{rotation:6.5385,x:138.95,y:249.45,regX:14.4,scaleX:1.1426,scaleY:1.1426,regY:11.6}},{t:this.instance_1,p:{regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:-17.3844,x:126.25,y:213.45,regX:17.2}},{t:this.instance,p:{regX:16.5,regY:6.8,rotation:34.4982,x:127.65,y:342.75,scaleX:1.1426,scaleY:1.1426,startPosition:0}}]},1).wait(8));

	// torzo
	this.instance_3 = new lib.Devojkao1torzo("synched",0);
	this.instance_3.setTransform(84.3,263.25,1.1428,1.1428,0,0,0,56.9,106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200));

	// ruka_D
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#97AAAF","#27505B"],[0,1],114.8,-1.7,-112.5,-1.7).s().p("AkqGXIspnZQgcgRgEgVIAAgCIAAgHIAAg/QACAPAOAOIAQALIMpHYQBPApBZgpITcrXQAHgFAFgFQAEgFACgEIAAgBQAIgHAAgIIAAA4QABAOgJAQIAAABQgGAJgMAKIzcLXQgsAUgqAAQgqAAgogUg");
	this.shape_44.setTransform(-16.1819,254.4652,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#97AAAF","#27505B"],[0,1],63.6,7.3,-221.7,7.3).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAAMQAAAIgIAHIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_45.setTransform(11.8299,270.075,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#504F4F").s().p("AGaI2IBQgwIBdA2IhQAvgAElHyIBQgwIBXAzIhQAvgAJwG3IBKgsIBcA1IhJAsgAGSGxIBMgtIBXAzIhLAsgACvGuIBQgwIBYAzIhQAvgALXF5IBPgvIBcA2IhOAvgAH7FzIBLgsIAdgSIAAAAIBOguIBXAyIhrA/IgBACIhJAsgABEFwQgSgJgWgOIhIgqQgZgNgdgTIhcg1IgegSIhfg3IgegRIhHgpQgWgLgggUIhhg4IBQgvIBhA3IAeASIBfA2IAeASIBfA3QA1AdATANIAxAdIAdARIAAAAIBiA4IAdASIABAAIBXAyIhQAvgANEE5IBHgqIBcA1IhHAqgAGFEuIBLgsIBYAzIhLAsgACnEpIBMgtIBXAzIhMAtgAOoD9IAigUIBbA2IghATgALPD1IBHgqIBXAyIhHAqgAHtDxIBPgvIBXA0IhOAugAERDrIBKgtIBXAzIhLAsgAAnDgIBMguIBiA5IhMAtgAMzC5IAigUIBXAzIghAUgAJZCxIBIgrIBXAzIhHArgAF4CtIBOgvIBYAzIhPAugACRChIBLgtIBhA5IhKAsgAhSCZIBMguIBcA2IhMAugAK+B1IAhgUIBYAzIghAUgAHkBtIBIgrIBXAzIhIAqgAD5BjIBOguIBiA4IhOAvgAAXBaIBLgtIBcA2IhLAsgAjOBQIBMgtIBeA3IhLAugAJJAxIAigUIBXAzIgiAUgAFlAjIBIgqIBhA4IhIAqgAB/AcIBOgtIBdA1IhOAugAhkASIBKgsIBeA2IhKAsgAlLAIIBMgsIBfA2IhMAtgAHKgYIAigUIBhA4IghATgADqgjIBIgrIBdA2IhIAqgAADgsIBNguIBfA4IhNAtgAjhg2IBMgtIBeA4IhLArgAnKhAIBNguIBhA5IhMAtgAFQhfIAhgUIBdA2IghAUgABthrIBJgrIBfA3IhIArgAh4h0IBNguIBdA3IhMAugAlgh/IBNguIBgA5IhMAtgApHiIIBNguIBfA3IhNAtgADTioIAigUIBfA4IgiAUgAgOi0IBIgrIBeA3IhIArgAj2i+IBNguIBgA5IhMAugAndjHIBNguIBfA3IhNAtgArEjRIBNgtIBfA3IhNAtgAurjWIBQgwIBcA2IhQAvgABYjwIAhgUIBeA3IghAUgAiMj9IBIgrIBgA4IhHArgAlykHIBNgtIBeA3IhNAtgApBkCIgKgGIglgVIhkg5IBOguIBwBCIACAAIBmA8IhMAtgAs+kXIBNgtIBcA0IhNAugAwkkdIBQguIBbA0IhQAvgAgrk9IAigSIALAHIBZAzIghATgAkIlFIBIgrIBfA3IhIAqgAnvlOIBNgtIBeA2IhMAtgAu3lcIBNguIBbA1IhNAtgAiimBIAhgUIBgA4IgiAUgAmFmNIBJgrIBfA3IhJArgAppmVIBMgtIBdA1IhNAtgAtMmcIBNguIBbA1IhNAugAkfnKIAigUIBfA4IgiAUgAn/nUIBJgrIBcA2IhJArgArhnbIBRgxIADgBIBfg4IBaA1IhJArIABAAIgEADIgGACIhgA5gAmZoRIAigUIBcA2IghAUgAoQpXIAhgTIBaA0IghAUg");
	this.shape_46.setTransform(10.0767,289.034,0.7167,0.7542,0,119.1013,117.0064);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#504F4F").s().p("AA/ElIo3lOIgFgEQgOgLAPgLIGMjlIAFgDQAVgIAaAQIADAAIIqE/QAeAPgQASIgHAGImHDmIgDABQgJAEgJAAQgPAAgOgJg");
	this.shape_47.setTransform(2.9817,234.2233,0.7172,0.7547,0,119.0992,117.0072);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AGbI2IBQgvIBcA1IhQAwgAElHyIBQgvIBXAzIhPAvgAJxG3IBJgsIBdA2IhKArgAGTGxIBLgsIBXAyIhLAtgACvGuIBQgvIBYAyIhQAwgALYF6IBOgvIBdA2IhPAugAH8FzIBKgsIAegRIgBAAIBOgvIBYAzIhrA/IgBABIhJAsgABEFwQgRgIgXgPIhIgqQgYgNgegSIhdg2IgegRIhfg3IgegSIhGgoQgXgLgfgVIhhg4IBPguIBiA3IAeARIBeA3IAeARIBfA3QA2AeAUANIAxAcIAcASIABAAIBhA4IAdASIABgBIBXAyIhQAwgANEE5IBIgqIBbA2IhHAqgAGGEvIBKgsIBYAzIhKAsgACoEqIBLgtIBXAyIhLAtgAOpD+IAhgUIBcA1IghAUgALPD2IBIgrIBXAzIhIAqgAHuDxIBOguIBYAzIhOAvgAERDrIBLgsIBWAyIhKAsgAAoDgIBMgtIBiA5IhMAsgAM0C6IAhgUIBYAzIgiAUgAJaCxIBHgqIBYAzIhIAqgAF5CtIBOguIBXAyIhOAvgACSChIBLgsIBhA4IhLAtgAhSCZIBMgtIBcA2IhLAtgAK+B1IAigUIBYA0IgiAUgAHlBtIBHgqIBXAyIhHArgAD6BjIBOguIBhA5IhOAugAAXBaIBMgsIBcA1IhLAtgAjPBRIBMgtIBgA3IhMAtgAJKAxIAhgUIBXAzIghAUgAFlAkIBIgqIBiA3IhIArgACAAcIBNgtIBdA1IhNAugAhlASIBMgsIBeA2IhLAtgAlLAJIBMgtIBfA3IhMAtgAHLgYIAhgUIBiA4IgiAUgADrgiIBIgrIBdA2IhIAqgAADgrIBNguIBgA3IhOAtgAjig1IBMgtIBfA3IhMAsgAnKhAIBMgtIBhA4IhMAugAFQhfIAigUIBdA2IgiAUgABuhrIBIgrIBfA4IhIArgAh4h0IBNguIBeA4IhMAugAlgh/IBMgtIBhA5IhMAsgApHiIIBNgtIBeA2IhMAugADUinIAhgUIBfA3IghAUgAgNizIBHgrIBfA3IhJArgAj2i+IBNgtIBhA4IhNAugAndjHIBMguIBfA3IhMAugArEjQIBMguIBgA3IhNAugAusjWIBQgvIBcA1IhPAvgABYjwIAhgTIBfA3IghAUgAiMj9IBIgrIBhA5IhIArgAlzkGIBNguIBfA3IhNAugApCkBIgKgGIglgWIhjg5IBNguIBxBBIABABIBnA8IhNAugAs/kXIBNguIBdA2IhNAtgAwlkcIBQgvIBbA0IhQAwgAgrk8IAjgTIAKAGIBZA0IghAUgAkJlFIBJgrIBfA3IhJArgAnvlPIBMgtIBfA3IhNAtgAu4ldIBNguIBcA1IhNAugAijmCIAigUIBhA5IgiATgAmGmNIBJgsIBfA4IhIAqgAppmWIBMgtIBcA2IhMAtgAtNmcIBOguIBbA1IhOAugAkfnKIAhgUIBfA3IghAUgAoAnUIBJgsIBdA2IhJAsgArincIBSgwIACgBIBgg5IBaA1IhJAsIAAAAIgEACIgFADIhhA5gAmZoRIAhgUIBdA2IgiAUgAoRpXIAhgUIBbA1IgiAUg");
	this.shape_48.setTransform(7.889,288.7633,0.7172,0.7547,0,119.0992,117.0072);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#97AAAF","#27505B"],[0,1],114.8,-1.6,-112.5,-1.6).s().p("AkqGXIspnYQgcgSgEgVIAAgCIAAgHIAAg/QACAPAOAOIAQALIMpHYQBPApBZgpITcrXQAHgFAFgFQAEgEACgFIAAgBQAIgHAAgIIAAA4QABAOgJAQIAAABQgGAKgMAJIzcLXQgsAUgqAAQgqAAgogUg");
	this.shape_49.setTransform(-23.0817,250.6098,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#97AAAF","#27505B"],[0,1],63.6,7.3,-221.7,7.3).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAAMQAAAIgIAHIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_50.setTransform(4.9076,266.2071,0.9751,1.0262,0,119.1049,-62.9931);

	this.instance_4 = new lib.Devojkao1rukaD("synched",0);
	this.instance_4.setTransform(37.15,158.1,1.1428,1.1428,-2.2606,0,0,17.3,14.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#97AAAF","#27505B"],[0,1],69.1,59.8,-69,-59.7).s().p("AuSh+IT8rQIIpPTIzvLKg");
	this.shape_51.setTransform(-19.2875,274.5125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2C545E").s().p("AujnPIAQguII2PNITurJIATAhI0XLWg");
	this.shape_52.setTransform(-19.1375,312.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#97AAAF","#27505B"],[0,1],69.1,59.8,-69,-59.7).s().p("AuSh+IT8rQIIpPTIzvLKg");
	this.shape_53.setTransform(-21.5375,280.0625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2C545E").s().p("AujnPIAQguII2PNITurJIATAhI0XLWg");
	this.shape_54.setTransform(-21.3875,318.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#97AAAF","#27505B"],[0,1],114.3,-0.4,-113.5,-0.4).s().p("AkqGbIspnYQgcgRgEgVIAAgDIAAgGIAAhAQACAPAOAOIAQAMIMpHXQBPAqBZgqITcrXQAHgEAFgGQAEgEACgEIAAgBQAIgNAAgMIAABCQABAOgJAQIAAAAQgGAKgMAJIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_55.setTransform(-36.1611,321.1625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#97AAAF","#27505B"],[0,1],63.1,8.1,-222.7,8.1).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAADQAAALgIANIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_56.setTransform(-36.175,290.4012);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#504F4F").s().p("AGbI2IBQgvIBcA1IhQAwgAElHyIBQgvIBXAzIhPAvgAJxG3IBJgsIBdA2IhKArgAGTGxIBLgsIBXAyIhLAtgACvGuIBQgvIBYAyIhQAwgALYF6IBOgvIBdA2IhPAugAH8FzIBKgsIAegRIgBAAIBOgvIBYAzIhrA/IgBABIhJAsgABEFwQgRgIgXgPIhIgqQgYgNgegSIhdg2IgegRIhfg3IgegSIhGgoQgXgLgfgVIhhg4IBPguIBiA3IAeARIBeA3IAeARIBfA3QA2AeAUANIAxAcIAcASIABAAIBhA4IAdASIABgBIBXAyIhQAwgANEE5IBIgqIBbA2IhHAqgAGGEvIBKgsIBYAzIhKAsgACoEqIBLgtIBXAyIhLAtgAOpD+IAhgUIBcA1IghAUgALPD2IBIgrIBXAzIhIAqgAHuDxIBOguIBYAzIhOAvgAERDrIBLgsIBWAyIhKAsgAAoDgIBMgtIBiA5IhMAsgAM0C6IAhgUIBYAzIgiAUgAJaCxIBHgqIBYAzIhIAqgAF5CtIBOguIBXAyIhOAvgACSChIBLgsIBhA4IhLAtgAhSCZIBMgtIBcA2IhLAtgAK+B1IAigUIBYA0IgiAUgAHlBtIBHgqIBXAyIhHArgAD6BjIBOguIBhA5IhOAugAAXBaIBMgsIBcA1IhLAtgAjPBRIBMgtIBgA3IhMAtgAJKAxIAhgUIBXAzIghAUgAFlAkIBIgqIBiA3IhIArgACAAcIBNgtIBdA1IhNAugAhlASIBMgsIBeA2IhLAtgAlLAJIBMgtIBfA3IhMAtgAHLgYIAhgUIBiA4IgiAUgADrgiIBIgrIBdA2IhIAqgAADgrIBNguIBgA3IhOAtgAjig1IBMgtIBfA3IhMAsgAnKhAIBMgtIBhA4IhMAugAFQhfIAigUIBdA2IgiAUgABuhrIBIgrIBfA4IhIArgAh4h0IBNguIBeA4IhMAugAlgh/IBMgtIBhA5IhMAsgApHiIIBNgtIBeA2IhMAugADUinIAhgUIBfA3IghAUgAgNizIBHgrIBfA3IhJArgAj2i+IBNgtIBhA4IhNAugAndjHIBMguIBfA3IhMAugArEjQIBMguIBgA3IhNAugAusjWIBQgvIBcA1IhPAvgABYjwIAhgTIBfA3IghAUgAiMj9IBIgrIBhA5IhIArgAlzkGIBNguIBfA3IhNAugApCkBIgKgGIglgWIhjg5IBNguIBxBBIABABIBnA8IhNAugAs/kXIBNguIBdA2IhNAtgAwlkcIBQgvIBbA0IhQAwgAgrk8IAjgTIAKAGIBZA0IghAUgAkJlFIBJgrIBfA3IhJArgAnvlPIBMgtIBfA3IhNAtgAu4ldIBNguIBcA1IhNAugAijmCIAigUIBhA5IgiATgAmGmNIBJgsIBfA4IhIAqgAppmWIBMgtIBcA2IhMAtgAtNmcIBOguIBbA1IhOAugAkfnKIAhgUIBfA3IghAUgAoAnUIBJgsIBdA2IhJAsgArincIBSgwIACgBIBgg5IBaA1IhJAsIAAAAIgEACIgFADIhhA5gAmZoRIAhgUIBdA2IgiAUgAoRpXIAhgUIBbA1IgiAUg");
	this.shape_57.setTransform(-53.5423,284.0177,0.7354,0.7354,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#97AAAF","#27505B"],[0,1],114.3,-0.4,-113.5,-0.4).s().p("AkqGcIspnYQgcgSgEgVIAAgCIAAgHIAAg/QACAPAOAOIAQALIMpHYQBPApBZgpITcrXQAHgFAFgFQAEgEACgFIAAgBQAIgNAAgMIAABCQABAOgJAQIAAABQgGAKgMAJIzcLXQgsAUgqAAQgqAAgogUg");
	this.shape_58.setTransform(-36.1611,328.8625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#97AAAF","#27505B"],[0,1],63.1,8.1,-222.7,8.1).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAACQAAAMgIANIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_59.setTransform(-36.175,298.1512);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#386774").s().p("AC6lIIPkh9Iz5MwIxCBbg");
	this.shape_60.setTransform(-33.025,260.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#27505B").s().p("AyxGoIRChbIT6svIAnBMI0NMvIxEBKg");
	this.shape_61.setTransform(-31.05,263.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#97AAAF","#27505B"],[0,1],-155.7,-1.3,153.1,-1.3).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_62.setTransform(-36.1515,328.8171,0.7361,0.7361,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#97AAAF","#27505B"],[0,1],-86.1,10.2,301.5,10.2).s().p("ACyNxI6avcQgKgHgGgHQgGgGgDgGIAAgBQgLgTAAgRIAAgBIAAgCQABgkAsgcIRLqCQBFgoBaAQQAoAJAqAWIaEPRQApAmADAgIgBAIQgCAVgTATQgKAIgMAHIxLKDQg2Acg5AAQg5AAg8gcg");
	this.shape_63.setTransform(-36.1607,298.154,0.7361,0.7361,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#386774").s().p("AviHyISQqhIO0mOIzbMDIvoF4g");
	this.shape_64.setTransform(-39.9,244.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#27505B").s().p("Ax0IaIPnl3ITbsDIAFgCIAiA3IzgMeIvoFwg");
	this.shape_65.setTransform(-37.9375,248.15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#27505B").s().p("AwQKgILWqPIURrwIA6BDI0fLuIrhKKIgHAEg");
	this.shape_66.setTransform(-45.2125,234.2625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#727272").s().p("AkfAyIUfruIABACIrSJ6I0vL9g");
	this.shape_67.setTransform(-43.5,237.4125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("AttL+IAAgBIgBAAIgCgCQABgGAEgKIAIgPIHErOIAKgOQAagjApgiIADgEQAYgTAbgQIBgg3IBfg3IAigUIOCoIIAMgFQAVgHAGAFIACACIABAAQgBAGgEAKQgCAGgGAIInDLNQgnA7g/AtIgWAOIxwKTIgMAFIgHABIgBAAIgFABQgGAAgDgCg");
	this.shape_68.setTransform(-52.725,221.0064);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#27505B").s().p("AuPNCIgCgCIAAAAIAAAAIAAgBIgBAAIAAgBIgigeIABgBIgBAAIgCgDQgDgKAPgbIHhr6QAYglAoglIAVgTQAVgQAWgOIAMgIISrq0QAagKALACIACAAIAjAgQgKgEgeAMIyqK0IgMAIQg9AugoA8InmL/QgcA3AdgFIgJAEIgHACIgCAAIgEABQgFAAgEgCgAtKMJIgBABIAAgBQgDgCAAgEIACACIAAAAIAAABQAFACAKgBIABAAIAGgBIANgFIRwqTIAVgOQBAgtAng7IHDrNQAFgIADgGQAEgKAAgGQADAGgGAOIgJAPInDLNQgnA5g+AuIgWAPIxxKSQgHAFgFABIgGABIgCAAIgEABQgGAAgDgEg");
	this.shape_69.setTransform(-56.0528,220.2051);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#97AAAF","#27505B"],[0,1],34.1,0.5,-125,19.9).s().p("AuPL+IHlr+QAog9A9guIAMgIISrq0QAdgMAKAEIACABIACACIABACQACAGgGAOIgJAPIngL7QgwBIhTA2Iy5K8IgEACIgEABQgWAAAagzgAtbL/IABAAIAHgBQAFgBAHgFIRwqSIAWgPQA/guAng5IHDrNIAIgPQAHgOgDgGIgBAAIgCgCQgHgFgUAHIgMAFIuCIIIgiAUIhfA3IhgA3QgbAQgYATIgDAEQgpAigaAkIgKANInELOIgIAPQgFAKAAAGQABAEACACIAAABIABgBQAEAFAKgCg");
	this.shape_70.setTransform(-53.0021,221.5144);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#97AAAF","#27505B"],[0,1],37.6,4.1,-136,11.2).s().p("AucNCIHFtvQAmhFA+gyIANgIITdrKQAigNALAIIACADQAFAIgGASIgIARInANqQguBUhWA5IzrLTIgEACIgCAAQgcAAAYg9gAtjNKIACAAIAHgCQAFgBAHgFIShqoIAWgPQBBgyAkhCIGls1QAGgKACgHQAGgQgEgIIgBAAIgCgDQgKgIggANIuoIZIgkAUIhjA5IhkA5QgcARgYAUIgEAEQgpAmgZAoQgGAJgDAIImmM2QgMAYABAMQABAFADADIAAABIABgBQAFAGAKAAg");
	this.shape_71.setTransform(-58.482,218.0867);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CCCCCC").s().p("At2NFIAAAAIgBgBIgCgCQgBgNAMgYIGms1QADgJAGgIQAZgoApgmIAEgEQAYgVAcgRIBkg5IBjg4IAkgUIOooaQAggNAKAJIACACIABABQAAAHgDALIgHAQImmM2QgkBEhCAwQgLAJgLAHIygKnQgHAFgGABIgHABIgBAAIgDAAQgJAAgEgEg");
	this.shape_72.setTransform(-58.2507,217.5348);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#27505B").s().p("AuaNhIAAAAIAAgBIgBAAQgIgNAQgjIHBtqQAWgrAogoIAWgVQAVgRAXgQQg/AzglBFInGNuQgZBAAfgCIgKADIgHACIgCAAIgCAAQgJAAgGgFgAtSMmIAAAAIgBAAQgDgDgBgFIADACIABABIAAAAQAFAEAKAAIABAAIAIgBQAFgBAIgFISfqnQAMgHALgJQBBgwAlhDIGls3IAHgQQAEgLgBgHQAEAIgFAQQgDAHgFAJImlM3QglBBhBAxIgWAQIygKnQgIAGgFABIgHABIgBAAIgCABQgJAAgFgGg");
	this.shape_73.setTransform(-61.7214,221.1023);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCCCCC").s().p("AsFNbQgLAAgHgEIAAgBIgBAAIgDgDQgEgOAHgYIEctaQACgJAEgJQATgqAlgmIADgEQAXgVAbgRIBhg4IBhg5IAigUIOQoVQAhgMANAJIADADIABABQACAHgCAMQgBAHgDAKIkbNaQgZBGg9AxIgVAQIyCKiQgHAFgGABIgIAAIgBAAg");
	this.shape_74.setTransform(-63.0624,212.2401);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#97AAAF","#27505B"],[0,1],42.4,6,-147.2,6.2).s().p("AtCNSIEyuVQAahIA6gzIAMgIIS9rFQAjgMANAJIAEADQAHAJgDATIgFASIksORQggBXhTA5IzLLNIgEACIgBAAQgfAAAMhBgAsBNcIACAAIAIgBQAFgBAHgFISCqiIAVgQQA9gxAZhGIEbtZIAFgSQACgRgGgIIgBgBIgDgCQgMgKghAMIuQIWIgjAUIhhA4IhgA5QgcAQgWAVIgDAEQgmAngSAqQgEAIgDAJIkbNaQgIAZAEANQACAGAEADIABABIAAgBQAHAGALAAg");
	this.shape_75.setTransform(-63.2408,212.7978);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#27505B").s().p("AsjN5QgMgBgIgGIAAAAIgBgBIgBAAQgMgOALgkIEtuQQAPguAjgpIAUgVQATgSAWgPQg6AzgaBIIkyOVQgNBDAhgCIgJAEIgJACIgBAAgArjM8QgLABgHgHIAAABIgBgBQgEgDgCgGIADAEIABAAIAAABQAHAEAMAAIABAAIAIgBQAFgBAIgEISBqiIAVgQQA9gxAahGIEatbQAEgJABgIQABgLgCgIQAGAJgCAQIgFASIkbNZQgZBGg9AyIgVAPIyCKiQgHAGgFABIgIAAg");
	this.shape_76.setTransform(-66.2082,215.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("ApPOSQgQAAgMgFIAAgBIgCgBIgFgDQgMgPgDgbIhBujIAAgTQADgtAegpIADgEQATgWAcgSIBkg6IBlg6IAkgVIO0ooQAmgMAWAKIAFADIABABQAHAIAEANQACAJABAKIBBOjQACBMg3A0QgKAJgLAHIyuK7QgIAEgHABIgKABIgBgBg");
	this.shape_77.setTransform(-90.234,210.43);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#27505B").s().p("ApkOxQgQAAgNgHIgBAAIgBgBIgCgBQgXgPgEgnIhFvfQgDgwAZgtQAHgMAJgKQAQgTAWgQQgzA2ACBOIBBPjQASBKArgBIgMADIgKABIgCAAgAosNyQgQAAgMgHIAAAAIgBgBQgHgDgFgGIAFADIABABIABAAQALAFAQABIABAAIAKgBQAIgBAHgEISvq6QALgIAJgIQA4g0gChNIhBujQgBgKgDgIQgEgNgGgIQAMAJAGASQACAJAAAKIBCOjQACBMg4A0QgJAIgLAIIyvK6QgIAFgHABIgKABg");
	this.shape_78.setTransform(-93.0623,214.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#97AAAF","#27505B"],[0,1],60.1,8.1,-194.1,1.5).s().p("AqlOGIhAvjQgDhOA0g2IALgIITtreQApgMAWALIAHADQAOAKAGAVIADAUIBFPeQACBehQA8Iz8LmIgEADIgBAAQgqAAgShJgAIzuRIu0IoIgkAVIhlA7IhkA6QgcARgTAXIgDADQgeApgDAuIAAATIBBOjQADAbAMAPQAFAGAHADIABABIABAAQAMAHAPAAIACAAIAKgBQAHgBAHgFISwq6QALgIAJgIQA3g0gChMIhBujQgBgKgCgJQgFgSgNgJIgBgBIgFgDQgKgFgOAAQgQAAgUAGg");
	this.shape_79.setTransform(-90.3284,210.9932);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#97AAAF","#27505B"],[0,1],-155.6,-1.2,153.3,-1.2).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_80.setTransform(-49.4015,316.9171,0.7361,0.7361,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#97AAAF","#27505B"],[0,1],-86.1,10.3,301.7,10.3).s().p("ACyNxI6avcQgKgHgGgHQgGgGgDgGIAAgBQgLgTAAgRIAAgBIAAgCQABgkAsgcIRLqCQBFgoBaAQQAoAJAqAWIaEPRQApAmADAgIgBAIQgCAVgTATQgKAIgMAHIxLKDQg2Acg5AAQg5AAg8gcg");
	this.shape_81.setTransform(-49.4107,286.254,0.7361,0.7361,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#97AAAF","#27505B"],[0,1],-155.8,-1.4,153,-1.4).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_82.setTransform(-49.4015,316.9171,0.7361,0.7361,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#97AAAF","#27505B"],[0,1],-86.2,10.1,301.4,10.1).s().p("ACyNxI6avcQgKgHgGgHQgGgGgDgGIAAgBQgLgTAAgRIAAgBIAAgCQABgkAsgcIRLqCQBFgoBaAQQAoAJAqAWIaEPRQApAmADAgIgBAIQgCAVgTATQgKAIgMAHIxLKDQg2Acg5AAQg5AAg8gcg");
	this.shape_83.setTransform(-49.4107,286.254,0.7361,0.7361,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#97AAAF","#27505B"],[0,1],114.9,-1.7,-112.4,-1.7).s().p("AkqGWIspnYQgcgRgEgVIAAgDIAAgGIAAhAQACAPAOAOIAQAMIMpHXQBPAqBZgqITcrXQAHgEAFgGQAEgEACgEIAAgBQAIgIAAgHIAAA4QABAOgJAQIAAAAQgGAKgMAJIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_84.setTransform(-16.2043,254.4528,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#97AAAF","#27505B"],[0,1],63.6,7.3,-221.6,7.3).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAANQAAAHgIAHIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_85.setTransform(11.8299,270.075,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#504F4F").s().p("AGaI2IBQgwIBdA2IhQAvgAElHyIBQgwIBXAzIhQAvgAJwG3IBKgsIBcA1IhJAsgAGSGxIBMgtIBXAzIhLAsgACvGuIBQgwIBYAzIhQAvgALXF5IBPgvIBcA2IhOAvgAH7FzIBLgsIAdgSIAAAAIBOguIBXAyIhrA/IgBACIhJAsgABEFwQgSgJgWgOIhIgqQgZgNgegTIhcg1IgegSIhfg3IgegRIhHgpQgWgLgggUIhhg4IBQgvIBhA3IAeASIBfA2IAeASIBfA3QA1AdAUANIAxAdIAdARIAAAAIBiA4IAdASIABAAIBXAyIhQAvgANEE5IBHgqIBcA1IhHAqgAGFEuIBLgsIBYAzIhLAsgACnEpIBMgtIBXAzIhMAtgAOoD9IAigUIBbA2IghATgALPD1IBHgqIBXAyIhHAqgAHtDxIBPgvIBXA0IhOAugAERDrIBKgtIBXAzIhLAsgAAnDgIBMguIBiA5IhMAtgAMzC5IAigUIBXAzIghAUgAJZCxIBIgrIBXAzIhHArgAF4CtIBOgvIBYAzIhPAugACRChIBLgtIBhA5IhKAsgAhSCZIBMguIBcA2IhMAugAK+B1IAhgUIBYAzIghAUgAHkBtIBIgrIBXAzIhIAqgAD5BjIBOguIBiA4IhOAvgAAXBaIBLgtIBcA2IhLAsgAjPBQIBMgtIBfA3IhMAugAJJAxIAigUIBXAzIgiAUgAFlAjIBIgqIBhA4IhIAqgAB/AcIBOgtIBdA1IhOAugAhlASIBLgsIBeA2IhKAsgAlMAIIBMgsIBfA2IhMAtgAHKgYIAigUIBhA4IghATgADqgjIBIgrIBdA2IhIAqgAADgsIBNguIBfA4IhNAtgAjig2IBMgtIBfA4IhMArgAnLhAIBNguIBhA5IhMAtgAFQhfIAhgUIBdA2IghAUgABthrIBJgrIBfA3IhIArgAh5h0IBOguIBdA3IhMAugAlhh/IBNguIBgA5IhMAtgApIiIIBNguIBfA3IhNAtgADTioIAigUIBfA4IgiAUgAgOi0IBIgrIBeA3IhIArgAj3i+IBNguIBhA5IhNAugAnejHIBNguIBfA3IhNAtgArFjRIBNgtIBfA3IhNAtgAurjWIBQgwIBbA2IhPAvgABYjwIAhgUIBeA3IghAUgAiNj9IBJgrIBgA4IhHArgAlzkHIBNgtIBeA3IhNAtgApCkCIgKgGIglgVIhkg5IBOguIBwBCIACAAIBmA8IhMAtgAs+kXIBMgtIBcA0IhNAugAwkkdIBQguIBbA0IhQAvgAgrk9IAigSIALAHIBZAzIghATgAkJlFIBIgrIBfA3IhIAqgAnwlOIBNgtIBeA2IhMAtgAu3lcIBNguIBbA1IhNAtgAijmBIAhgUIBhA4IgiAUgAmGmNIBJgrIBfA3IhJArgApqmVIBMgtIBdA1IhNAtgAtMmcIBMguIBbA1IhNAugAkgnKIAigUIBfA4IgiAUgAoAnUIBJgrIBcA2IhJArgArinbIBRgxIADgBIBfg4IBaA1IhJArIABAAIgEADIgGACIhgA5gAmaoRIAigUIBcA2IghAUgAoRpXIAhgTIBaA0IghAUg");
	this.shape_86.setTransform(10.0179,289.2599,0.7167,0.7542,0,119.1016,117.0064);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#97AAAF","#27505B"],[0,1],114.9,-1.7,-112.4,-1.7).s().p("AkqGXIspnZQgcgRgEgVIAAgCIAAgHIAAg/QACAPAOANIAQAMIMpHYQBPApBZgpITcrXQAHgFAFgFQAEgFACgEIAAgBQAIgHAAgIIAAA4QABAOgJAQIAAABQgGAJgMAKIzcLXQgsAUgqAAQgqAAgogUg");
	this.shape_87.setTransform(-23.1041,250.5973,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#97AAAF","#27505B"],[0,1],63.6,7.3,-221.6,7.3).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAAMQAAAIgIAHIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_88.setTransform(4.9076,266.2071,0.9751,1.0262,0,119.1049,-62.9931);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{scaleX:0.7172,scaleY:0.7547,skewX:119.0992,skewY:117.0072,x:7.889,y:288.7633}},{t:this.shape_47,p:{scaleX:0.7172,scaleY:0.7547,skewX:119.0992,skewY:117.0072,x:2.9817,y:234.2233}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},77).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_48,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_47,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_57,p:{scaleX:0.7354,scaleY:0.7354,x:-53.5423,y:284.0177}},{t:this.shape_56},{t:this.shape_55}]},2).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_48,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_47,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_57,p:{scaleX:0.7354,scaleY:0.7354,x:-53.5423,y:284.0177}},{t:this.shape_56},{t:this.shape_55}]},2).to({state:[{t:this.shape_63,p:{x:-36.1607,y:298.154}},{t:this.shape_62,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6228,y:285.6407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1673,y:314.0569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-53.0065,y:283.7089}},{t:this.shape_61},{t:this.shape_60}]},2).to({state:[{t:this.shape_63,p:{x:-36.1607,y:298.154}},{t:this.shape_62,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6228,y:285.6407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1673,y:314.0569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-53.0065,y:283.7089}},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63,p:{x:-36.1607,y:298.154}},{t:this.shape_62,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6228,y:285.6407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1673,y:314.0569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-53.0065,y:283.7089}},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_63,p:{x:-36.1607,y:298.154}},{t:this.shape_62,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6228,y:285.6407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1673,y:314.0569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-53.0065,y:283.7089}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_63,p:{x:-36.1607,y:298.154}},{t:this.shape_62,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6228,y:285.6407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1673,y:314.0569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-53.0065,y:283.7089}}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_63,p:{x:-36.1607,y:298.154}},{t:this.shape_62,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6228,y:285.6407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1673,y:314.0569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-53.0065,y:283.7089}}]},1).to({state:[{t:this.shape_79,p:{x:-90.3284,y:210.9932}},{t:this.shape_78,p:{x:-93.0623,y:214.375}},{t:this.shape_63,p:{x:-36.1607,y:298.154}},{t:this.shape_62,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6228,y:285.6407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1673,y:314.0569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-53.0065,y:283.7089}},{t:this.shape_77,p:{x:-90.234,y:210.43}}]},1).to({state:[{t:this.shape_79,p:{x:-103.5784,y:199.0932}},{t:this.shape_78,p:{x:-106.3123,y:202.475}},{t:this.shape_63,p:{x:-49.4107,y:286.254}},{t:this.shape_62,p:{x:-49.4015,y:316.9171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-66.8728,y:273.7407}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-20.4173,y:302.1569}},{t:this.shape_57,p:{scaleX:0.7351,scaleY:0.7351,x:-66.2565,y:271.8089}},{t:this.shape_77,p:{x:-103.484,y:198.53}}]},2).to({state:[{t:this.shape_79,p:{x:-103.5784,y:199.0932}},{t:this.shape_78,p:{x:-106.3123,y:202.475}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_48,p:{scaleX:0.7356,scaleY:0.7356,skewX:0,skewY:180,x:-67.0564,y:273.8705}},{t:this.shape_47,p:{scaleX:0.7356,scaleY:0.7356,skewX:0,skewY:180,x:-20.5961,y:302.2896}},{t:this.shape_57,p:{scaleX:0.7352,scaleY:0.7352,x:-66.4326,y:271.8985}},{t:this.shape_77,p:{x:-103.484,y:198.53}}]},2).to({state:[{t:this.shape_79,p:{x:-103.5784,y:199.0932}},{t:this.shape_78,p:{x:-106.3123,y:202.475}},{t:this.shape_83,p:{x:-49.4107,y:286.254}},{t:this.shape_82,p:{x:-49.4015,y:316.9171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-66.8803,y:273.7806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-20.4277,y:302.1949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-66.1245,y:271.7416}},{t:this.shape_77,p:{x:-103.484,y:198.53}}]},85).to({state:[{t:this.shape_79,p:{x:-90.3284,y:210.9932}},{t:this.shape_78,p:{x:-93.0623,y:214.375}},{t:this.shape_83,p:{x:-36.1607,y:298.154}},{t:this.shape_82,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6303,y:285.6806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1777,y:314.0949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-52.8745,y:283.6416}},{t:this.shape_77,p:{x:-90.234,y:210.43}}]},2).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_83,p:{x:-36.1607,y:298.154}},{t:this.shape_82,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6303,y:285.6806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1777,y:314.0949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-52.8745,y:283.6416}}]},2).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_83,p:{x:-36.1607,y:298.154}},{t:this.shape_82,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6303,y:285.6806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1777,y:314.0949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-52.8745,y:283.6416}}]},1).to({state:[{t:this.shape_83,p:{x:-36.1607,y:298.154}},{t:this.shape_82,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6303,y:285.6806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1777,y:314.0949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-52.8745,y:283.6416}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_83,p:{x:-36.1607,y:298.154}},{t:this.shape_82,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6303,y:285.6806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1777,y:314.0949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-52.8745,y:283.6416}},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_83,p:{x:-36.1607,y:298.154}},{t:this.shape_82,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6303,y:285.6806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1777,y:314.0949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-52.8745,y:283.6416}},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_83,p:{x:-36.1607,y:298.154}},{t:this.shape_82,p:{x:-36.1515,y:328.8171}},{t:this.shape_48,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-53.6303,y:285.6806}},{t:this.shape_47,p:{scaleX:0.7355,scaleY:0.7355,skewX:0,skewY:180,x:-7.1777,y:314.0949}},{t:this.shape_57,p:{scaleX:0.735,scaleY:0.735,x:-52.8745,y:283.6416}},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_48,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_47,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_57,p:{scaleX:0.7353,scaleY:0.7353,x:-53.3587,y:283.8882}},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_48,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_47,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_57,p:{scaleX:0.7353,scaleY:0.7353,x:-53.3587,y:283.8882}},{t:this.shape_56},{t:this.shape_55}]},2).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},2).to({state:[{t:this.instance_4},{t:this.shape_88},{t:this.shape_87},{t:this.shape_48,p:{scaleX:0.7172,scaleY:0.7547,skewX:119.0993,skewY:117.0072,x:7.7858,y:289.0222}},{t:this.shape_47,p:{scaleX:0.7172,scaleY:0.7547,skewX:119.0993,skewY:117.0072,x:2.8787,y:234.4847}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},2).wait(6));

	// Layer_15
	this.instance_5 = new lib.Devojkao1rukaD("synched",0);
	this.instance_5.setTransform(35.9,159.4,1.1428,1.1428,-2.2606,0,0,17.3,14.8);

	this.instance_6 = new lib.Devojkao1shaka("single",1);
	this.instance_6.setTransform(-42.85,298.7,1.1427,1.1427,46.6503,0,0,16,23);

	this.instance_7 = new lib.Devojkao1dolakta("single",0);
	this.instance_7.setTransform(28.35,179.9,1.1427,1.1427,32.9826,0,0,17.4,40.5);

	this.instance_8 = new lib.Devojkao1odlakta("single",0);
	this.instance_8.setTransform(38.5,221.5,1.1427,1.1427,46.6503,0,0,14.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},77).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},113).to({state:[{t:this.instance_5}]},2).wait(6));

	// noga_L
	this.instance_9 = new lib.Devojkao1nogaleva("synched",0);
	this.instance_9.setTransform(110.25,291.75,1,1,4.6957,0,0,48.1,24.4);

	this.instance_10 = new lib.Devojkao1nogadesna("synched",0);
	this.instance_10.setTransform(45,385.05,1,1,0,0,0,30.7,124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(200));

	// noga_D
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(51,51,51,0.298)").s().p("ABuGsQjTgWg6iLQg6iKjEAAQimAMhHhrQhliaBzieQByibDSADQE4APD4C6QAcAVAfASQDqgCB1CyQBnCdikBzQj2CtjEAAQgXAAgWgDg");
	this.shape_89.setTransform(77.7098,505.46);

	this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.6,-50.4,350.9,599);


// stage content:
(lib.PageCustomersEducation_HTML5Canvas = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.devojkaobicna1("synched",0);
	this.instance.setTransform(357.85,577.45,0.3755,0.3755,0,0,180,76.8,266.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Layer_12
	this.instance_1 = new lib.Tip("synched",0);
	this.instance_1.setTransform(636.05,730.7,0.7113,0.7113,0,0,0,98.5,167.8);

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
	this.shape.setTransform(698.05,508.3425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#70CAE3","#5E84C4"],[0,1],-108.1,160.8,70.5,-77.5).s().p("ArZUPIgZgTIgYgUIgOgOIgDgDIgZgbIgHgHIgVgaIACAAQCpAADHhlIACgBIAYgNIEaDgIgFACQihBJiNAAQiIAAh0hEgAlwP2QDViFC1jQIFPDMQg2A9g6A4IgLALQh+B2iMBYIg1AggAvLNtIACgBIAxgVIAFgCQAZgLATgLIApgVIAEgCIAegSIEKDUQi8BcifgJQgMAAgKAHIgCAAQgwhfgWh4gArLLiQBthKBkheIALgLQA6g4A2g9IABgBIAKgLIFBDDQitDBjHB8IAAAAIgVAMgABWJaIAaghQB9iiBtjIIAwheIFkCjIgmBOIgTAkIgNAYIgZAsIgDAHIgNAVIgDAGIjTE1IgEAFIgBABgAk5FnIDNkuIADgGIANgVIADgHIAZgrIANgYIATgkIABgBIFYCdQgXAugWAoQhtDIh8CfIgbAigAGyAeQBrjnA0jlIFeB8QgsDzhsD5IgDAHgAAIikIAAgBIAjhMIADgHQBJioArimIFaB6QgyDfhpDngAJkoIQANhJAJhIQAKhiAAhjQAAgxgDgtIE0BBQAJAuAGA2QAIBLAABUIAAAYQgBA3gEA4IgIBWIgCANgAC4qfIAOhGIACgMIAMhQIACgNIAIhWQAEg4ABg3IFDBDQAEA5AAA5QAABagJBhQgIBAgKA9gAJ5wcQgXiwhDh+IAAgBQAXAEAYAGIAwAQIAVAJQAdAMAdASIAIAFQCDBiA9CwIAGAUgADixxQgCgugFgrQgFgsgGgmIgBgDQB8gxBwgCIAAACQAAALAHAMQBBBuAYCcg");
	this.shape_1.setTransform(679.0922,519.5192,0.9375,0.9375,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],-67.7,-135.4,67.7,135.4).s().p("ACRTGQgagMgUgLIgmgUIg2gfQiDhTh2hvIgKgKQg3g0gzg6QgYgbgggnIgdgmIiskAIgDgGIgMgTIgDgHIgXgpQgEgJgJgOIgSgiIgmhPIgjhOQhojvgpjpIgNhXIgHhRQgEg0gBg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAFgEIADgCIAIgFIADgCIACgBIADgCQAagQAcgMQA1gXA4gKQAWgEAdgCIAJAAQAQgBASABQBGACBNAVIAKADQAdAJAgALIAMAFQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAIADIABABIAFACIACAAIADACQgMBEgCBKIgBBYQADCrAlCtIATBUQA0DABbDFIAlBOIAiA+QBeCtBsCOIAVAdIAEADIgBABIA3BDIABAAQCQCmClB2IBTA1QAtAbAkATQAfAQAhAOQgUB/gyBiQgIARgMAUIgFAIQgLATgOARQgWAegbAbQgkAkgsAdIgMAGQhwBEiDAAQiDAAiXhEg");
	this.shape_2.setTransform(677.125,520.7063);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DDEF1").s().p("AGpHJQkroYmPk1IKImEQGdE2ExIjQCvE2BdEvIABACIqUGLIgCABQhdk5i2lCgAqgwBQCHhCCaAAQAcAAAbACIp4F8IgUgDQgigDglAAQimgBiQBNg");
	this.shape_3.setTransform(725.625,418.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],33,-8.8,110.9,152.3).s().p("AETcNIASgPQAtgqAkgzQAcglAXgqQAJgRAFgLQAOgcALgbQBUjNgBknQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFbgBFQQABFwiDDlQgZAqgdAmQhHBdhkA/IgTAMIo1ErIAAABgArczbQg+gog9gcQhBgfg+gYIgKgEQhAgYhAgPQgwgLgvgFIJ5l8IADAAQAuAEAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AjAqAhIqIGEQhjhMhqg/g");
	this.shape_4.setTransform(751.0501,490.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44A6F4").s().p("AumlQIAxhiIAAgCIazP4IAAADIicAigAt1onIBohBIa0P5IhpBBg");
	this.shape_5.setTransform(669.3,660.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4861D4").s().p("AtykyIAAh9IZIO5IAAB+gAtBoUIAAhzIa0P5IgBAAIAABzg");
	this.shape_6.setTransform(664.075,669.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A3CC3").s().p("AKiKoI5Iu6IAAh9IAxhiIAAh1IBohCIa0P5IAADyIhpBCIgBABIiZAjg");
	this.shape_7.setTransform(669.3,666.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C0482").s().p("AimEGQgEgCgDgEQgCgEABgFQACgFAFgCIFEitQAEgDAFACQAFABACAFQACAFgBAEQgCAFgEACIlFCtIgFACIgEgBgAimC2QgFgCgCgEQgCgFABgEQACgFAFgDIFEisQAEgDAFADQAFABACAEQACAFgBADQgCAGgEACIlFCtQgCACgDAAIgEgBgAinBqQgEgCgDgFQgBgDABgGQACgEAEgDIFEisQAFgDAEACQAFACACAFQADAEgCAFQgCAFgEACIlECsQgDACgDAAIgEgBgAilATQgFgCgCgEQgCgFACgEQABgEAEgCIFFitQAEgDAFACQAFABACAFQACAEgBAFQgCAFgEACIlFCsQgCACgDAAIgEgBgAilhAQgFgCgCgFQgCgEABgFQACgFAEgCIFFiuQAEgCAFACQAEACACAFQACAEgBAFQgCAEgEADIlECtIgFABIgEAAg");
	this.shape_8.setTransform(812.2581,691.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7898D0").s().p("AkbFEQAQgIAZgSQANgHAYgRIA9guQAtgmAjgjQA7g2Atg4IBBhTQAXggAegwIAXgnQAdg0Aag3QANgbAHgVIA+giQgcBJgnBLQgnBLgtBBQgbAogcAhQgiAqgjAlQhTBbhsBLIipBXg");
	this.shape_9.setTransform(829.1732,628.0031,0.5266,0.5408);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5884B3").s().p("Ak7D8IHJkFQgjAhguAmIg9AuQgWARgOAIQgYARgQAJIgiAWIkUCPQAngkAggkgAh/gaIACgFIIAkkIgXAnQgeAxgWAfIgVAbInuEaQApg/AjhEg");
	this.shape_10.setTransform(818.3128,636.9676,0.5266,0.5408);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#536C99").s().p("AkVDbIHvkbIgtA6QguA3g7A2InIEGQA6hCA1hQgAiFhBIIKkrQgHAVgNAbQgaA3gdAzIoAEkQAkhIAdhLg");
	this.shape_11.setTransform(822.1699,630.829,0.5266,0.5408);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A4B3DD").s().p("ACtifQCHhDCZAAQAcAAAcADIp4F6IgUgCQgigDglAAQimAAiQBMg");
	this.shape_12.setTransform(641.075,332.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7A41C1").s().p("AjyijIHlkFIAAIvInlEig");
	this.shape_13.setTransform(810.8,691.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#602BA2").s().p("APSNvIiBhMIAAnlICCg7IABAAIAAAAIBPAqIAAJNgAvxkrIgxg/IAAnhIAFgEIABgCIArgoIBZCgIAAHjg");
	this.shape_14.setTransform(680.65,645.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DDF0F5").s().p("ACRTGQgagLgUgLIgmgUIg2ggQiDhSh2hvIgLgKQg2g1gzg6Ig4hCIgeglIiskBIgCgGIgMgTIgEgHIgWgpQgFgJgIgNIgSgiIgmhQIgkhOQhnjvgpjpIgNhXIgHhRQgFg0AAg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAGgEIACgCIAIgFIACgCIADgBIADgCQAbgQAbgMQA1gXA4gKQAWgEAdgCIAIAAQARgBARABQBHACBMAVIALADQAdAJAfALIANAFIAEACIAIADIABABIAGACIABAAIACACQgLBEgCBKIgBBYQADCsAlCsIATBUQAzDBBbDEIAmBOIAiA/QBfCsBrCPIAWAcIADADIgBABIA3BDIABAAQCRCnCkB1IBTA1QAuAbAjATQAfAQAhAPQgUB/gyBhQgIASgMATIgDAGIgHAMIgUAbQgVAegcAbQgkAjgsAdIgMAHQhwBDiDAAQiDAAiXhEg");
	this.shape_15.setTransform(677.1,520.9313);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C0482").s().p("AkZB6IIakdIAZBDInlEEg");
	this.shape_16.setTransform(806.875,658.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A4B6DD").s().p("Ah2EsQkroYmQk1IKJmFQGcE3ExIkQCvE1BdEvIABACIqUGLIgBABQhek5i1lCg");
	this.shape_17.setTransform(780.025,434.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8BACC3").s().p("At7NIIAAnjIhaihIAAgBIABAAQhXitg+irQiVmeAAmMQAAhHAFhCIBMAvQAKiiAqh/IAPgpQBQjQCwhmIABAAIASgLQB9hCCQAAQAWAAAUACIA+h8QAvAGAvALQBBAPBAAYIAKADQA+AYBBAgQA8AcA+AoQBqA/BiBMIAcC/QFHElD9HGQCMD3BYD1ICLAzQBUEXAOEQQACAyAAA8IgBBIQgXFyiXDeQgjAwgrAoIgSAQIABAAIAAgBIAEgCIgGAFIiBA6IAAHlgAm42lIgIABQgeACgWADQg4AKg1AYQgbALgbAQIgDACIgCABIgDADIgIAFIgCACIgGADQiJBeg9CxQgPAqgMAzQgLA0gHA9QgHBGAABPIAAAWQABA0AEA1IAHBQIANBYQApDpBoDuIAjBPIAmBPIhGA8IAJATQAIANAHANQABAEAEAEIAIAPIADAGQAGAJADAHQADADABAFIANAWQACACABAEIADAFIC9EZIAdAlIAEAEQAdAkAhAnQA6BBA9A6IALAKQCEB+CTBbIBlA6IAzAZQFRCWD7iWIAQgKIhRiLQArgdAlgkQAbgbAVgeIAUgbIAHgMIADgFQAMgUAJgRQAxhiAUh/QAPhdAAhxQAAhXgJhVQgomLjimfQkSn7mFjwQgrgcgvgXQgggQgggOIgDgBIgBgBIgFgBIgCgCIgIgDIgEgCIgMgEQgggMgdgIIgKgDQhNgWhGgCIgSAAIgQAAgAStQxIgBADIgOAhIgBABIAQglg");
	this.shape_18.setTransform(677.775,536.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#59ACBC").s().p("ADJXqIg0gYIhlg6QiThciEh9IgLgKQg8g7g6hBQgigmgdgkIgEgEIgcglIi+kZIgCgGQgBgEgDgCIgNgWQgBgEgDgDQgDgIgFgIIgDgGIgJgQQgDgEgCgEQgGgNgJgNIgJgSIBHg8IASAiQAIANAEAJIAXApIAEAHIALATIADAGQBwC5BWBpIAEAEIA3BCQA0A6A2A1IAKAKQB3BvCDBSIA2AgIAlAUQAVALAZALQEuCHDgiGIAMgHIBSCLIgRALQh9BKiTAAQiTAAiohLgAQ/CoQhXjziNj4Qj9nGlHkkIgbjAQGQE2ErIYQC2FDBeE4gAzKsXQANirAsiGIARguQBdjvDKh2IAWgMQCPhNCnAAQAlAAAhAEIAUACIg+B7QgUgCgVAAQiRAAh8BDIgSAKIgCABQivBmhRDQIgPApQgqB+gJCjg");
	this.shape_19.setTransform(673.025,506.0438);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAEAEA").s().p("AETcOIASgQQArgoAkgwQCWjeAXlyQACglAAgmQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFaAAFQQABFyiEDkQgYAqgeAnQhHBdhkA+IgTAMIoxEqIgEACIAAABgAHAYkIABgBIAOghIABgDIgQAlgArczbQg/gog8gcQhBggg+gYIgKgDQhAgYhAgPQgwgLgvgGIJ5l7IADAAQAuADAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AkAqAgIqIGFQhjhMhqg/g");
	this.shape_20.setTransform(751.0501,490.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(200));

	// Layer_3
	this.instance_4 = new lib.racunar2("synched",0);
	this.instance_4.setTransform(385.55,973.5,1.0853,1.0853,0,0,0,45,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjuAIICqjAIEyCDIjIDug");
	this.shape_21.setTransform(473.55,881.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjhiTIGbgKIAoElImaAWg");
	this.shape_22.setTransform(437.15,943.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3F2F2").s().p("Aj/BHIBJkAQDoAzDOAMIh+E0QjDgci+hXg");
	this.shape_23.setTransform(474.35,935.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.31)").s().p("AmqCxIF9gJIAih2QDoAyDOAMIh9E2QiVgWiPg1IAPBzImaAVgAhLkiICpjAIE0CCIjIDwg");
	this.shape_24.setTransform(457.725,914.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.459)").s().p("AnVJxQhXgQhAgrQgYgRgZgXIgvgqQhqhch+g4QgxgVglgGQgxgIgmAPQACgSATgKQAQgJAWAAQAtgBA2AVQAkAOA4AgIBNAuQArAcAdAZIAvArQAdAbAUAPQA1ApBFAVQBAATBJABQB7AACRg7QCihDBphpQA7g7AmhFQAphIAOhNQAFgcAEgpIADhEIAMlMQAAgKAEgDQACgCAEABQAEABAAADQABCvgIC2QgDBEgFAnQgIA7gQAuQgXA+g2BGQhiCAiQBQQiQBPihARQgjAEgiAAQgxAAgugIgAkFHLQh9gWhhhNQgrgihRhUQhKhGhAgWQghgLgqgDQgcgCgwAAQingBhLACQAygTBCgGQAmgDBSAAQAxAAAfADQAsADAiALQBGAXBTBOIBFBCQAnAmAgAYQBeBEB3ARQB3AQBtgoQBsgpBPhbQBPhaAahyQAJgqAEg2QACggABhBQABhgAFh6QAAgKAEgHQAEgIAIAAIgDDqQgBBIgCAlQgFA8gKAvQgdB4hWBfQhWBeh0AoQhKAahQAAQgrAAgugIgAjgFFQgWgLgWgSQgRgPgUgXQgegggwg8Qgvg4glgdQgzgphAgZQg+gWhFgHQgrgEggAIQgpAKgRAdQAAgUANgRQANgQAUgIQAegMA0AFQCMAOBfA/QAsAeAyA1IBRBgQAXAcAPAPQAVAWAXAMQA2AfBOgHQBZgIBNg0QBNg0AqhPQAphSANiaIAKh8QAHhFAPg0QABgEAGgDQAEgDABAFIgkE/QgIBFgKAkQgPA7gjA0QgjAzgwAlQgwAlg6AUQg5AUg+ACIgIAAQg2AAgngSgAOUEDQhIgJhGhIQg8g7glhLQgMgWgNghIgXg5QhAighShnQgngxgkgVQgmgWg3gGQglgEg+ADQAkgTAqgDQAqgCAoANQA0ASAwAxQAkAlAmA/QAzBTAmBWIAmBaQAWA0AUAiQA3BiBMAoQAtAXAxABQAzABAogZQAzggAThDQASg9gPhAQgNg3gdgnQgsg9hcgpQgfgNgygRQg8gVgVgIQiAgzhLhPQgrgugZg3Qgag8AAg6QAAgMAHgBQAEAAADAFQACAEAAAFQADBCAkA9QAhA5A3AtQAxAoBBAgQAzAYBKAbQBGAYARAIQAxAUAgAYQAoAfAdAsQAlA5AJBAQAKBEgYA7QgZA9g6AlQgwAegyAAQgMAAgNgCgAhHCmQgugSghgzQgLgTgMgcIgTgyIgxiIIgQgpQgJgXgKgRQgYgoglgdQgmgdgtgLQAogIAqAWQAmATAbAlQAWAdATAuQAFAMAYBFQASAyAlBbQALAcAHALQAKAVANANQAgAgAyACQAvABApgZQAkgWAfgoQAYggAXgvQARgiAHgYQAMgsgGg/QgKhOgDgeQgKhhAThfQADgKADgEQADgDAEAAQAFgBACADQAEAEgDAKQgWBLAFBQQABAJAPBsQAKBHgIAuQgGAogXAuQgPAhgfAvQgNATgJALQgNARgNAKQgSAPgdANQgrARgjAAQgaAAgWgIg");
	this.shape_25.setTransform(356.5597,955.6277);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.459)").s().p("AiOC6QgEgcAIgbIAGgQIAFgLQAIgXAGgJQAGgJATgSIAKgJIAbgbQAPgPAJgOQAGgIABgHIAAgKIgBgLQACgKgBgHIgBgGIgDgGIgBgKQgCgDgHgGQgGgFgBgFQAHgDAIACQAHACAEAHIAEAKIAEATQAHAmgKAbQgGANgNAOQgKAKgPANQgVATgIAJQgPARgHARIgFAPIgHAOIgEAHIgDAHQgCAFAAAIIgFAOQgGANABAOQgFgCgBgJgAgfCIQA2gYArgoQATgRAMgSIAPgaQAHgLADgIQAFgKABgQQAHg+gZgtQgPgbgUgJIgMgEQgIgDgEgCIACgKQAWgBAUARQAPAMAMAXQARAfADAZIABAcIABAbQAAAPgEAMQgEAJgIAPQgKASgIAKQgIALgPARQgSAUgQAMQghAZgmAJIgGABQgFAAgCgEgAhcCEQgCgWAQgSQAGgJASgLIBAguQAMgIAEgEQAHgKAGgEQAIgDADgEIAFgKIAHgMQACgFABgRIABgqQgCgZgMgOIgOgQQgJgKACgJQAMAFAOAOIAIAIQAFAHAEALQAEAOABATIABAiQABATgCAGIgHATQgFALgEAFQgFAHgNAJIhfBHQgQAMgFAJIgIAOQgFAFgFAAIgDAAg");
	this.shape_26.setTransform(403.2083,765.5971);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7EUQgHgGgFgGQgNgOACgLIAjAWQAUAOAPAEQALADAMABIAXgBQAZgBAQgEQAogIApgcQAdgTAoglQAMgLAJACQgPAUgSAUQglAmguAXQgxAYgwABIgEAAQg2AAgigagAgqDjQgWgBgYgKQgkgRgeggQAAgDADgBQADgCADAAQAEABAIAFQAZASAQAIQAYANAVACQAJABAVgDQAbgDAQgGQAZgIAcgWQARgNAdgcQAPgPAHgIIAJgOIAKgPQAEgGAFgCQAGgDAFAEQgQAegaAgQg5BDg+AUQgPAFgWAEQgQACgLAAIgDAAgAhkCLQgLgEgWgNQgUgMgIgJQgHgJgLgSIgGgLQgBgDACgDQACgDADgBQAGAEAGAHIAKAOQAMAOAXAOQATALAMACQAIACATgBIATAAIASgBQAlgEAyggQAZgRAPgPQAUgTAKgVQAFgLADgCQADgEAEgBQAEgCAEACQADABACADQACADgBADQAAAEgDACQgEADgDgBQgKAcgaAYQgSASghAWQgdATgRAHQgcALgvACIgGAAQgXAAgMgDgAh4gyQgTgEgXgRQgJgGgCgFQgCgEABgFQABgEADgCQAFgCAHAEIAIAJQAWAXAwgDQAngDAugRQAbgKA2gbIARgJQAIgGAFgHIAGAAQAEADgDAHQgBAEgGAFQgQAPgTAIIgNAGIgMAJQgJAFgVAJIgtAQQgkAKgmABIgFAAQgNAAgJgDgAiHhoQgQgHAAgKQAFgDAIACIANAEQAbAJAfgCQAegCAagOQAGgDAughQAggXAZgDQAEAAAEABQAFADgBADQgcAGgnAdQgtAjgSAIQgcAMgeAAQgdAAgcgMgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAdgBQAcgBAagLQAxgVAngxQAEgFAGgDQAGgDAEAEQgUAlgfAaQghAbgnAMQgVAGgXAAQgSAAgRgEg");
	this.shape_27.setTransform(298.1833,836.2875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgJBxgkQCBgrBbhPQAdgZA1g5IBDhKQAkgqAaglQBBhgAeh0QAdh1gNh0QAAgIADgGQAEgHAFAEQADABAAAHQAOB2gZBzQgaB2hABgQgVAggmAwQgrA2giAmQgsAxgpAkQhdBPhyAsQh1Ath5ADIgCAAQgiAAgGgTgAlSFgQBMgTAogMQCJgmB6haQB2hWBZh4QBFhdAhhYQASgyAOhAQAIgnAMhOQAGANAAATQABAOgCATQgMBggmBdQglBbg6BQQhvCaixBsQgoAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgMAigEQAmgDATgDQAhgFAmgOQAagKApgVQBTgqBBgrQBJgyA6g5QAlgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg2BehmBtQgmApgdAZQgpAkg4AkQglAXhFAmQggASgTAIQgcAOgYAJQgsAQgwAGQgWACgWAAQgaAAgagDg");
	this.shape_28.setTransform(307.8367,937.7394);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgTgHgYIgnh2QgOgogQgkQgXgyglhAQgYgnguhFIgzhJQgfgpgcgYQgJgJgCgGQgCgFADgFQACgFAFAAQAFAAAHAHQB7CPBaCmQAhA8ASAuQANAfAXBJQAPAyAGAeQAIAtgHAkIgJABQgBgIgBgWgACiDXQABgXgHgbQgEgPgMggIgVgzQhKish2iFQgMgNAGgHQAEgFAHAEQAGACAFAGQCbC9BAC7QAJAcADASQAEAZgGAUgACdAjQgFgWgJgaQgPgsgag1QgzhrhFhgQgKgNgGgGQgKgJgLgDQgEgFAFgGQAEgGAHABQAIAAAMANIAVAaQAmA0AiA6QAnBGAeBLQATAwAJAiQALAqgFAZIgKABQABgTgHgegAC6gXQgDgBgDgDQgCgDgBgKIAAgwQAAgdgCgSQgDgVgGgWQgSg8glhCQgYgngVgXQgdgegigLQgHgCgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgDQADgCAGABQAcAFAfAdQAeAdAXAoQAVAiATAtQAbBBAFArQABAOAAAnQgBAbACAOQADALgFADIgEACIgCgBg");
	this.shape_29.setTransform(356.9915,876.08);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgaAEgiIAIg8QAnkmgVkkIgDgnQALABAEATQAGAgADAlIACBGQACBqgBA6QAABagHBIQgFA7gQB/QgNBtAEBNIAFBEQADAnAAAeQgkh6AJh/gAgnGkQgCglABgYQAAgjADgbQADgfAQhFQAWhkALhCQAPhYADhOQAGiggoi1QgGgagBgOQgCgXAIgQQArCRAJCaQAJCagbCUIgeCQQgRBWgFA7QgCAggCA3QgDA0gJAigAhiGiQAAgcAIg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNABBjQACCBgOBtIgMBQQgbC0gLC2QgNgiAAgugAADFBQADgaALgpQA1iwAWhWQAoiZgGhzQgGiJhGieQgDgFACgHQABgGAFABQACABADAFQBXDGgDCmQgCBJgSBVQgMA2gcBlIhSEkQgDgdAEglg");
	this.shape_30.setTransform(395.3229,852.2609);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgSgPQgegagdgjQgWgbgdgqQgjgxgUghQgOgWgnhHQgXgngHgTQgJgVgHggIgPhBQgBgJACgDQADgEAGABQAFABADAEQACADABAGIABAJQADAwAWA1QAOAiAiA6QAkBBARAZQBRCDB3BjQgCADgEAAQgFAAgIgGgACuE3Qg2gcgyg9QgfgmguhNQhDhtghhEQgyhlgVhZQgDgJACgEQABgEACgCQADgCADAAQAHACACAMQAGAlAPApQAKAdAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHAAAIIgCAAQgFAAgIgEgADDDgQhDghg6hIQgXgcgZgmIgphGQg+hogbg6QgrhfgKhRQgBgHACgCQADgDAEAAQAEABADADQADADABALQAKBFAbBBQAQAlAlBEIA3BjQAuBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgIAAgKgFg");
	this.shape_31.setTransform(296.1719,851.5543);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.459)").s().p("Ah8EfQgPgEgFgGQgDgFABgEQABgDADgBQADgCACABIALADQAPAFASAAQANAAAVgDQAxgIAYgQQASgLAcgeIAWgaQAKgNAQgcIA4hhIADABIACAEQAAAIgHAMIgwBfQgKATgEAFQgGAJgIAIIgpArQgQAQgNAGQgKAFgXAGQglAJgRACQgOACgMAAQgPAAgMgCgAh5B7QgKgBgEgDQgDgBgBgEQgBgEACgDQACgDAKAAQBDAFA+gTQAdgJATgMQALgIASgRQASgTAIgLQAJgNALgWQAVgsARgoQANgeADgVQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAIACAEQABAMgDAMQgBAIgIAVQgVA5gOAdQgKAVgKAOQgMARgSASQgbAZgZALQgUAKghAHQg3AMgrAAIgHAAgAiwgNQgIgEAAgFQAAgCADgCQACgCADAAIALAEQAQAGAegBQAigBAVgDQAdgEAXgLQAjgRAdglQAWgbAXguQANgYAGgRQAIgYACgVIAAgSQABgMACgHIACAAIABACQAEApgDAVQgCAOgIATQgIAWgaAuQgTAigNAPQgMANgUAQQgWARgPAHQgUAJgnAFQgkAEgSAAQgdAAgWgKg");
	this.shape_32.setTransform(366.5143,784.0316);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg+gCg2gaQg6gagkguQgOgSgRgdIglg+QgYgSgQgaIgGgLIgUgUQgfgdg5guQg6gwgigVQg1ghgzgKIgkgFQgVgEgOgHQAhgJAlAFQAiAEAjAPQAcANAiAXQAUAOAlAdQA/AwAlAhIgEgTIgBgGQgNgMgLgOQgfgkgihBQgqhRgQgZQglg4gsgcQgTgNgcgLQgTgIgggJQg5gRgcgHQAYgLAiAGQAXADAlANQAiANASAIQAcANAUAPQAmAdAhA1QAMAWAnBNQAcA7AfAkIAJAKIgDgsQgEg2gGgeQgLgsgYgcQgLgOgUgPQgMgJgYgPIhMgvQBFAPAzAjQA6AoATA6QAKAeACAuIACBOIADAUQAaAVAcAKQAmANA1gFQAYgCBEgNQBmgSBPAFQAQABAzAHIAFgEQBdhLArgbQBRgzBJgMQA2gJB5AMQA8AFAtgBQAhgvAOhHQALg6gChYQgDimgXikQgIg3gCgXQgDgsAIghQArDnAHDuQACA4gCAiQgDAygIAoQgLAwgUAlIgHANQAYgCASgEQBMgTA6g7QAzg0AWhEIgsg9QgggtgQgeQgnhKgLhnQgIhHAFh0IAJBdQAJBeAKAwQAPBNAgA3QAMAVAcAmIAkAyQALgwgBhGQgDh0gchxQgEgPgzioQgjhwgGhLIAqCKQAxCfARBMQAfCEACBtQABBHgNAyQAPAYAQAiQAKAUAWA1QAPAmAHATQAKAhAAAbQABArgUApQgTAngiAfQg7A4heAaQhHAVhqAGIiyALQhkALhGAgQgeAMgrAbIhHAqQhuA8hoAAIgOAAgAl+JUQAYAnAaAUQAZASAkAJQAZAGArAEQAsAEAhgBQAogCAjgJQAxgOBGgsQBVg2AfgPQA1gYBFgLQAxgIBOgEQBVgCArgDQBJgFA1gNQBCgQA1gfQA6gkAhgzQAcgqAAgoQABgVgHgZQgEgOgMgeIgghMQgQgjgRgeQgbBPhDA5QhIA7hYANIgWACQgOASgRAQQgfAcgwAVQgeANg7ATQhfAfg2AMQhTAThFgEQgZgBg0gIIgBAAQgxAlgxAeQg2AggqARQg2AWgyACQg1AEgwgUQAVAmAMAUgAnmG4IAEAJQAYAaASAYIANAJQAtAcBBgEQBMgEBTgtQAsgZBAgxIgsgEQgpgDgzAGQgjAEg4AKQg/AMgdACQgzAEgmgOQgVgHgVgOQAFATAJAQgADyD4Qg4AOg+ArQgWAOhUBEIgJAHQAyAGAcAAQAwABA8gMQAmgIBFgTQBVgXAugVQA9gbAlgoIggAAQgZgCg+gGQgsgEgkAAQg2AAgkAJg");
	this.shape_33.setTransform(335.5273,951.5648);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ8QhEgfgyg3QgYgcgLgaQgNggAHgcQAjBVBIA5QBMA7BXADQA7ACBDgZQArgQBMgqQBVgvAhgPQBEgfA4gHQAugFBIAJIB0ARQBEAJAwABQA+AAA2gPQA9gSApgjQA5gxAXhSQAVhKgJhUQgIhCgdhWQghhdgTg4QhGjKgWjUQgBgPADgKQADgNALgEQgBBuAbB6QAWBkAtB9IA2CZQAcBWAHBGQAIBWgWBLQgaBTg5AzQgsAmg9ATQg2ARhCABQg0ABhFgJQgygHhGgLQg+gJgnADQg3ADhBAcQgmAQhMAsQhNArglAQQhBAcg4AEIgUABQg9AAg9gbgAnVIIQgfgNghgVQgZgQgjgaIgRgOQgJgIgEgIQgFgKABgLQABgMAIgHQA1BPBdAkQBcAkBcgVQA4gMBAglQAVgMBag6QBBgrAygVQBBgcA8AAQAkABA0AMQA5AQAdAGQBuAXA9gsQAegWASgmQAPgjADgpQABgigHgsQgGgfgMgtIg6jlIgRhGQgJgngEggQgJhEAEhWQACgzAMhoQAEAxgHBsQgGBlAHA3QAEAbAIAkIAQA/IA/DlQAPA2AGAeQAIAvgBAmQgBAtgRAnQgSAqggAZQhFAziFgcQgkgHhDgQQg8gLgsAHQgvAIg2AeQgWAMhFAwQgzAigqAXQgzAbgxAQQg3ARg1ABIgDAAQg4AAgwgSgAmHHbQgogKgkgmQgYgagggyQgNgTgEgNQgIgTAFgPQANANAwBHQAkA1AkARQAiARAugEQAggCAygPQArgMAegMQAogPAegRQAWgNAsghQAqggAYgOQA6giBEgKQBEgKBCAQQA2ANAOABQAmAEAWgUQARgPAGgbQAEgUgBgfQgDgugGg5IgNhmQgMhygBiSQgBhRAFi1QAIANADASQACALAAAWQABAogCCkQgBB8AJBPQABAPATB3QAMBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgEQgSgDgqgKQgogKgVgBQhKgFhaAzQgZAOguAhQgvAggZAOQhlA7hxAQQgYAEgTAAQgVAAgPgEg");
	this.shape_34.setTransform(376.9977,906.8097);

	this.instance_5 = new lib.Serverc("synched",0);
	this.instance_5.setTransform(240.35,894.05,1,1,0,0,0,53.5,128.2);

	this.instance_6 = new lib.Serverc("synched",0);
	this.instance_6.setTransform(309.3,853.75,1,1,0,0,0,53.5,128.2);

	this.instance_7 = new lib.Serverc("synched",0);
	this.instance_7.setTransform(378.2,813.15,1,1,0,0,0,53.5,128.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgIBxglQCCgrBahPQAdgZA1g5QAxg0ASgWQAkgqAaglQBChgAdh0QAdh0gMh1QgBgIADgGQAEgHAFAEQADACABAGQANB2gZBzQgaB2hABgQgVAgglAwQgsA2giAnQgrAwgqAkQhdBPhyAsQh1Ath4ADIgCAAQgjAAgGgTgAlSFgQBNgTAngMQCJgmB7haQB1hWBZh4QBFhdAhhYQASgxAOhBQAIgnAMhOQAGANABATQAAAPgCASQgMBhgmBdQglBag6BQQhvCaiwBsQgpAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgLAigFQAngDASgDQAhgEAmgPQAagKApgVQBTgqBBgrQBKgyA6g5QAkgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg1BehnBtQglApgeAZQgpAkg4AkQglAXhFAmIgyAbQgdAOgYAIQgsARgwAFQgWADgWAAQgaAAgagEg");
	this.shape_35.setTransform(163.8974,859.7894);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgSgHgYIgnh3QgPgogQgkQgWgyglhAQgZgnguhFQgjg0gPgUQgfgpgcgZQgKgJgBgGQgCgFADgFQACgEAFAAQAFgBAGAIQB8COBaCmQAgA8ATAuQAMAfAXBJQAQAzAGAdQAIAtgHAkIgJABIgCgegAChDXQABgXgGgaQgEgQgNggIgUgzQhKirh3iGQgMgNAHgHQAEgFAHAEQAFACAGAGQCbC9A/C7QAKAcACASQAEAZgFAVgACdAjQgGgWgJgaQgOgsgag1Qg0hrhEhgQgKgNgGgGQgLgJgKgDQgEgFAFgGQAEgGAHABQAIAAAMANIAUAaQAnA1AhA5QAoBGAeBLQASAwAKAjQALApgGAZIgKABQACgTgHgegAC6gWQgEgCgCgCQgDgEAAgKIAAgwQAAgdgDgSQgDgVgGgWQgRg8gmhCQgXgngVgXQgdgegigLQgIgCgBgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQADgCAGABQAcAFAfAdQAdAdAYAoQAUAiATAtQAcBBAEArQACAOgBAnQgBAbADAPQACAKgEADQgCACgDAAIgBAAg");
	this.shape_36.setTransform(213.0683,798.13);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgZAFgjIAIg8QAnkmgWkkIgDgnQALABAEAUQAHAgACAlQACAWAAAwQACBpAAA6QgBBagHBIQgFA7gQB/QgNBtAEBNIAGBEQACAnAAAeQgkh6AJh/gAgnGkQgBglAAgYQAAgiADgcQAEgfAPhFQAWhjALhDQAPhYADhOQAHiggpi1QgGgZgBgPQgCgXAIgQQArCSAJCZQAJCagaCUIgfCQQgRBWgEA8QgDAfgCA3QgDA0gJAigAhhGiQAAgcAHg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNACBjQABCBgOBtIgMBRQgaCzgMC2QgNgiABgugAADFBQADgaALgoQA1ixAWhWQAoiZgGhzQgGiIhGifQgDgFACgHQABgGAFACQADAAACAFQBXDHgDClQgCBJgSBWQgMA2gcBkIhSEkQgDgdAEglg");
	this.shape_37.setTransform(251.389,774.3265);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgRgPQgfgagdgjQgVgbgegqQgjgxgUghQgOgWgnhHQgXgngHgTQgIgVgIggIgPhBQgBgJADgDQACgEAGABQAFABADAEQADAEAAAFIACAKQACAvAWA1QAOAiAiA6QAkBBARAZQBSCDB2BjQgCACgEAAQgFAAgIgFgACuE3Qg2gcgyg8QgfgnguhNQhDhsghhFQgyhkgVhaQgDgJACgEQABgEACgCQADgCAEABQAGABACAMQAGAmAPApQAKAcAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHABAIIgCAAQgGAAgIgEgADDDgQhDghg6hIQgXgcgYgmQgRgagZgrQg+hpgbg6QgrhegKhSQgBgGACgDQADgDAEABQAFAAACADQADAEACAKQAJBFAbBBQAQAlAmBEQAhA+AWAlQAtBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgHAAgLgFg");
	this.shape_38.setTransform(152.225,773.6251);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.459)").s().p("Ah9EeQgOgDgFgHQgEgEACgFQABgCACgCIAGgBIAKADQAQAGARgBQAOAAAVgDQAxgIAYgPQASgMAbgeIAWgZQAKgNAQgdIA5hhIADACIABADQAAAIgGANIgwBfIgOAYIgOARIgpArQgQAPgOAHQgJAFgXAGQglAJgRACQgNACgMAAQgPAAgOgDgAh6B6QgJAAgEgDQgEgCAAgEQgCgDADgDQACgEAKABQBCAEA+gSQAegJATgNQALgHARgSQATgTAHgKQAJgNALgWQAWgsARgoQAMgeAEgVQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIACAEQAAAMgCAMQgBAIgIAVQgWA4gOAeQgKAUgKAPQgLAQgTATQgaAZgZALQgUAKghAHQg4AMgrAAIgHgBgAixgOQgHgDAAgFQAAgDACgBQADgCADAAQACAAAIADQARAHAegBQAigCAVgCQAdgFAXgLQAigQAeglQAWgbAXguQAMgZAGgRQAJgXABgVIABgTQAAgLACgHIADAAIABABQAEApgDAWQgDANgHAUQgJAVgZAvQgUAigNAOQgMANgUAQQgWASgOAGQgUAJgoAFQgjAFgSAAQgegBgWgKg");
	this.shape_39.setTransform(222.6042,706.1014);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg/gDg2gZQg5gagkguQgOgSgRgeIglg9QgYgSgQgbQgEgEgCgGIgVgUQgegdg5gvQg6gvgigVQg2gigygJIgkgGQgWgDgNgHQAhgKAlAFQAhAEAkAQQAcANAhAXQAVANAlAdQA/AxAlAhIgEgUIgBgFQgNgMgLgOQggglghhBQgqhQgQgZQglg4gsgdQgUgMgcgLQgTgIgfgJQg6gSgcgHQAZgKAiAFQAXAEAlANQAiANARAIQAcANAVAOQAmAdAhA2QAMAVAmBOQAdA6AeAlIAKAKIgEgtQgDg1gHgeQgKgtgYgcQgMgOgTgOIgkgYIhMgwQBFAPAzAjQA6ApATA6QAKAdABAvIADBOIACAUQAaAVAdAKQAlANA2gFQAYgCBEgNQBlgTBQAGQAQABAyAGIAGgEQBchLAsgbQBRgyBJgMQA2gJB5ALQA7AGAtgBQAigwAOhGQALg7gChYQgDilgYikQgIg4gBgWQgEgsAIgiQAsDoAHDuQABA4gBAiQgDAygJAoQgKAvgUAmIgHANQAYgCASgFQBMgSA6g7QAzg0AVhEIgrg+QgggsgQgfQgnhJgLhnQgIhIAFhzIAJBdQAJBeAJAvQAQBOAgA3QALAUAcAnIAlAyQALgxgChFQgCh1gchwIg4i4QgihvgHhLIArCJQAxCgARBLQAfCEACBtQAABIgMAxQAPAZAQAiIAfBIQAQAmAGAUQAKAgABAcQABArgVApQgSAngiAfQg7A3heAbQhIAVhpAGQilAJgNACQhlALhGAfQgdANgrAbIhIAqQhtA8hpAAIgNAAgAl/JTQAYAoAbATQAYATAlAJQAZAGArAEQAsAEAggCQApgBAigKQAxgNBGgtQBVg2AggOQA1gYBFgLQAwgIBPgEQBVgDArgDQBJgFA1gNQBCgPA0ggQA7gjAhgzQAcgrAAgnQAAgWgHgYQgEgOgMgeQgTgwgMgcQgQgkgRgeQgbBQhEA4QhHA8hYAMIgXADQgNASgSAPQgfAcgwAWQgeANg6ATQhfAfg2AMQhTAThGgEQgYgBg1gIIgBAAQgwAkgxAeQg2AhgqARQg2AVgyADQg1ADgxgUQAVAnAMATgAnnG4IAFAJQAYAaARAYIAOAJQAtAcBBgEQBMgEBSguQAtgYBAgxIgsgFQgpgCgzAFQgkAEg4ALQg/AMgcABQg0AEgmgNQgUgHgVgOQAFASAIARgADyD3Qg4AOg+ArQgWAPhVBDIgIAHQAxAHAcAAQAxABA8gMQAmgIBFgTQBVgYAugUQA8gbAmgoIghgBIhWgHQgtgEglAAQg1AAgjAIg");
	this.shape_40.setTransform(191.6006,873.6618);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ7QhEgegyg3QgYgcgLgaQgOggAIgdQAjBWBIA4QBMA8BXACQA6ACBEgZQAqgQBMgpQBVgwAigPQBDgfA5gGQAugFBIAJIBzARQBFAJAwAAQA+ABA1gQQA9gRAqgkQA5gxAXhSQAVhKgKhUQgIhCgchVIg1iWQhFjJgWjUQgBgPACgLQADgNALgEQAABuAbB7QAWBkAtB9IA2CYQAbBXAHBFQAJBWgXBLQgZBUg5AyQgsAng9ASQg3ARhCACQg0AAhEgJQgzgGhFgLQg/gJgmACQg4AEhAAcQgmAQhMArQhNAsglAQQhBAcg4AEIgSABQg/AAg9gcgAnVIHQgggMghgVQgYgQgjgbIgRgNQgKgJgDgIQgFgKABgLQAAgMAJgGQA1BOBcAkQBdAlBcgVQA3gNBBgkQAVgMBag7QBBgrAxgVQBCgbA8AAQAkAAAzANQA6AQAdAFQBuAYA9gsQAegWASgmQAPgkACgpQACghgIgsQgFgfgMguIg6jkQgMgrgGgcQgJgngEggQgJhEAFhWQACgyAMhoQAEAxgHBrQgGBlAHA3QADAcAJAkIAQA/IA/DlQAOA2AGAeQAJAvgBAmQgCAsgQAnQgSArghAYQhFA0iFgcIhngXQg7gLgsAHQgvAHg2AfQgWAMhFAwQgzAigqAXQg0AbgxAPQg3ARg1ABIgDAAQg3AAgwgSgAmHHaQgogKgkglQgZgagggyQgMgTgFgNQgHgTAFgQQAMANAxBIQAjA1AlARQAhARAugEQAhgDAxgOQArgMAfgMQAngPAegRQAXgOAsggQAqggAYgOQA5giBFgKQBDgKBDAQQA1ANAOABQAnADAWgTQARgPAGgbQAEgVgBgeQgDgugHg5QgKhKgCgcQgNhygBiTQAAhQAFi1QAHAMADATQACALABAWIgBDMQgCB8AJBOQACAQASB3QANBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgFQgSgCgrgLQgngKgVgBQhLgFhZA0QgZAOguAgQgvAhgaAOQhkA6hyARQgXADgTAAQgVAAgPgEg");
	this.shape_41.setTransform(233.0576,828.9035);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7ETIgMgLQgNgOACgLQAKAEAZARQAVAPAOAEQALADAMAAIAYAAQAYgBAQgEQAogIApgcQAdgTAogmQANgLAIADQgPAUgSATQglAnguAWQgxAZgwABIgGAAQg0AAgigbgAgqDjQgWgBgYgLQgkgQgeggQAAgDADgCQADgBADAAQAFABAHAFQAZASAQAIQAYAMAVACQAJABAVgCQAbgEAQgFQAZgJAcgVQARgNAdgcQAPgPAHgIIAJgPIAKgOQAEgGAFgCQAGgEAFAFQgQAegaAfQg5BEg+AUQgPAFgWADQgQADgLAAIgDAAgAhkCKQgLgDgWgNQgUgMgIgKQgHgIgLgSQgFgJgBgCQAAgDACgDQABgEADAAQAGAEAGAHIAKANQAMAPAXAOQATALANACQAHACATgBIATAAIASgBQAlgFAyggQAZgRAPgOQAUgTAKgVQAFgLADgDQADgDAEgBQAEgCAEABQADACADADQABADAAADQgBADgDADQgDACgEAAQgKAbgaAZQgSARghAXQgdASgRAIQgcALgvACIgGABQgXAAgMgFgAh4gyQgTgEgXgRQgJgGgCgGQgCgEABgEQABgEADgCQAFgCAHAEIAIAIQAWAXAwgDQAogCAtgRQAbgLA2gaIARgKQAJgFAEgIIAGAAQAEAEgCAHIgHAIQgRAPgTAJIgNAGIgMAIQgJAGgVAIQgbALgRAFQgkALgnAAIgGABQgMAAgJgDgAiHhoQgQgIAAgKQAFgCAIABIANAEQAcAKAegCQAegDAagNIA1glQAggWAYgDQAFgBADACQAFACgBAEQgcAGgnAdQgtAjgSAHQgcAMgeAAIgCAAQgdAAgagLgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAegBQAbgCAagLQAxgUAngxQAEgGAGgCQAGgDAEAEQgUAlgfAaQghAbgmALQgXAHgXAAQgRAAgRgEg");
	this.shape_42.setTransform(154.245,758.3517);

	this.instance_8 = new lib.Serverc("synched",0);
	this.instance_8.setTransform(101.75,812.25,1,1,0,0,0,53.5,128.2);

	this.instance_9 = new lib.Serverc("synched",0);
	this.instance_9.setTransform(170.7,771.95,1,1,0,0,0,53.5,128.2);

	this.instance_10 = new lib.Serverc("synched",0);
	this.instance_10.setTransform(239.6,731.35,1,1,0,0,0,53.5,128.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_43.setTransform(155.35,879);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_44.setTransform(287.55,964.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_4}]}).wait(200));

	// Layer_9
	this.instance_11 = new lib.racunar1("synched",0);
	this.instance_11.setTransform(1297.8,328.75,1,1,0,0,0,44.9,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(200));

	// Layer_2
	this.instance_12 = new lib.Serverp("synched",0);
	this.instance_12.setTransform(1187.1,349.2,1,1,0,0,0,53.5,128.2);

	this.instance_13 = new lib.Serverp("synched",0);
	this.instance_13.setTransform(1255.85,308.85,1,1,0,0,0,53.5,128.2);

	this.instance_14 = new lib.Serverp("synched",0);
	this.instance_14.setTransform(1324.65,268.1,1,1,0,0,0,53.5,128.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_45.setTransform(1278.35,392.25);

	this.instance_15 = new lib.Serverp("synched",0);
	this.instance_15.setTransform(1034.35,257.65,1,1,0,0,0,53.5,128.2);

	this.instance_16 = new lib.Serverp("synched",0);
	this.instance_16.setTransform(1103.1,217.3,1,1,0,0,0,53.5,128.2);

	this.instance_17 = new lib.Serverp("synched",0);
	this.instance_17.setTransform(1171.9,176.55,1,1,0,0,0,53.5,128.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_46.setTransform(1126.5,300.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_45},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(200));

	// Layer_1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBEICGBQAdZtBIhuBCIHxEnInyEpIHxEmIn4EtIHyEoIB4BIEAs9gDzIhxBDInxEnIHyEpIn4EsInmEiIB4BHEAlOgIbIhyBDIHwEoIHyEoInxEoICGBQAN92FIhnA9IHmEiInyEoIHwEnIn4EsInmEhIHxEnInwEnIHxEnIHyEqIB4BHAVmxmIhqBAIHvEnInxEoIHwEoIn3EqIHwEpInmEgInvEnInxEpIHzEpInxEoIB4BGAGB6vIhjA7IH4EsInxEoIHlEiIn3EsIHvEnIHxEmInmEiIHwEnIHyEqInvEnInwEoIB3BHAlK/kIB5BIInyEoIHxEoIn3EsIH3EtInmEhIHmEhInvEnIHvEnInwEnIHwEnInwEpIHwEoInzEpIC+ByAs/6+IB8BKIn3EsIHxEoInmEiIH3EsInvEnInxEnInwEoInzEpIhsBAA072UICBBMInnEiIHyEoInwEnIH4EsIHmEhInwEnIHvEnInxEnIn0EqIHxEpIhrA/EgxxgCwIjSB9Eg0BgEFICQBVIHxEoInzEpIH4EsIHlEhIhrBBEgsMgIrICMBTInxEoEgkYgNQICIBRInwEnIHxEpIH3ErIHnEhInxEnIHvEnIHxEpIn0EqIHxEnIhsBAEg0jAE5ICwBoIhkA7EgqAAB4IH4EsIHmEgIn0EqIHvEnIhrBBA8kx1ICDBPInvEnIHxEoInwEoInxEnAhz/UIheA4IHvEoInwEoIH3EsIn3EtIHlEhInlEhIHuEnInuEnIHvEnInvEnIHvEpInvEoIHxEpIjWCA");
	this.shape_47.setTransform(1100.275,412.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBFICGBQAVmxlIhqA/IHvEnInxEoIHwEoIn3ErIHwEoInmEhIHyEpIB4BHAdZtAIhuBBIHxEoIHwEoInxEnIHyEpIn4EsIB4BHAhz/UIheA5IHvEoInwEoIH3EsIn3EsIHlEhInlEiIHuEmInuEnIHvEnInvEoIHvEoInvEoIHxEpIB4BHAlK/jIB5BIInyEoIn3EsIHxEoInmEhIH3EsInvEnIHmEhInwEoIHvEmInxEoIHxEoIn0EqIHxEnIC+ByAGB6uIhjA7IH4EsInxEoIHlEhIn3EsIHvEnInmEhIHxEoInwEmIHxEoInxEoIHzEpIB3BHAN92EIhnA9IHmEhInyEoIHwEnIn4EsIHxEnInmEiIHwEnInvEnIHyEpIB4BHEAlOgIbIhyBEInyEoIHxEnIn4EsIHyEpInmEhInvEnInwEoInxEoIjWCAAs/69IB8BKIHxEoIn3EsIH3EsInmEhIHmEiInvEmIHvEnInwEnIHwEoInwEoIHwEoInzEpIhsBAA8kx0ICDBOInvEnIHxEoIH4EsInxEnIHnEiInxEnIHvEnIn0EqIhrBAA072UICBBNInnEhIHyEoInwEnInwEoInxEnIH4EsInzEpIhsBAEgkYgNQICIBRInwEoIHxEoIH3ErInwEoIHmEhIn0EpIHvEoIHxEoIhrBAEgsMgIqICMBTInxEoIHxEnInzEpIH4EsIHlEhIhrBBEg0BgEEICQBVIjSB8EgxzAGhIhkA8Eg0jAE5ICwBoEAs9gDzIhxBEIHyEoInxEoICGBQ");
	this.shape_48.setTransform(427.675,817.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(17,19,59,0.157)","rgba(99,28,183,0.788)"],[0,1],174,-217.8,-201.6,404.5).s().p("A9le2Qy6lYlVn0QpBsXfRxiQdOyQNkg9QOWh3I6DzUAkQAL5gZPASEQsqLi2CLaQu6IrukAAQleAAlchOg");
	this.shape_49.setTransform(1090.9213,436.3272);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(74,178,220,0.31)").s().p("AgaAHQgOgCBGgLQgkANgQAAIgEAAg");
	this.shape_50.setTransform(536.0847,742.9111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(200));

	// Layer_10
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BEEFF8").s().p("Ag3EMIAIgFIAADhIgIAGgAAwDOIAIgGIAADiIgIAFgAg3hUIAIgFIAADLIgIAEgAAwiSIAIgGIAADLIgIAFgAg3mpIAIgFIAAC+IgIAGgAAwnnIAIgGIAAC/IgIAFg");
	this.shape_51.setTransform(508.075,222.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#6C05AE","#1A0159"],[0,1],-7.1,-25.2,-6.8,41).s().p("AiCE6IBAgnIAADiIhAAmgAg6EOIBSgyIAAAAIANgHIAADhIhfA6gAAtDQIBWg1IAADiIhWA0gAiCgmIBAgnIAADLIhAAngAg6hSIBSgyIAAAAIANgHIAADKIhfA6gAAtiQIBWg1IAADLIhWA0gAiCl7IBAgnIAAC/IhAAngAg6mnIBSgzIAAABIANgHIAAC+IgNAIIAAgBIhSAzgAAtnlIBWg1IAADAIhWA0g");
	this.shape_52.setTransform(509.175,222.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#59ACBC").s().p("AiaIOIBAgnIAIgFIBfg6IAIgEIBVg1IAAjhIAxgeIAAEcIibBdIAAABIiaBdgAiaCXIBAgnIAIgFIBfg5IAIgGIBVgzIAAjLIAxgeIAAEFIk1C7gAiajKIBAgnIAIgFIBSgzIAAABIANgIIAIgEIBVg0IAAjAIAxgeIAAD6IibBeIAAABIiaBcg");
	this.shape_53.setTransform(511.6,223.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BEEFF8").s().p("Ag3EMIAIgFIAADhIgIAGgAAwDOIAIgGIAADiIgIAFgAg3hUIAIgFIAADLIgIAEgAAwiSIAIgGIAADLIgIAFgAg3mpIAIgFIAAC+IgIAGgAAwnnIAIgGIAAC/IgIAFg");
	this.shape_54.setTransform(454.775,254.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#6C05AE","#1A0159"],[0,1],-7.1,-25.2,-6.8,41).s().p("AiCE6IBAgnIAADiIhAAmgAg6EOIBSgyIAAAAIANgHIAADhIhfA6gAAtDQIBWg1IAADiIhWA0gAiCgmIBAgnIAADLIhAAngAg6hSIBSgyIAAAAIANgHIAADKIhfA6gAAtiQIBWg1IAADLIhWA0gAiCl7IBAgnIAAC/IhAAngAg6mnIBSgzIAAABIANgHIAAC+IgNAIIAAgBIhSAzgAAtnlIBWg1IAADAIhWA0g");
	this.shape_55.setTransform(455.875,253.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#59ACBC").s().p("AiaIOIBAgnIAIgFIBfg6IAIgEIBVg1IAAjhIAxgeIAAEcIibBdIAAABIiaBdgAiaCXIBAgnIAIgFIBfg5IAIgGIBVgzIAAjLIAxgeIAAEFIk1C7gAiajKIBAgnIAIgFIBSgzIAAABIANgIIAIgEIBVg0IAAjAIAxgeIAAD6IibBeIAAABIiaBcg");
	this.shape_56.setTransform(458.3,255.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BEEFF8").s().p("Ag3EMIAIgFIAADhIgIAGgAAwDOIAIgGIAADiIgIAFgAg3hUIAIgFIAADLIgIAEgAAwiSIAIgGIAADLIgIAFgAg3mpIAIgFIAAC+IgIAGgAAwnnIAIgGIAAC/IgIAFg");
	this.shape_57.setTransform(328.225,329.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#6C05AE","#1A0159"],[0,1],-7.1,-25.2,-6.8,41).s().p("AiCE6IBAgnIAADiIhAAmgAg6EOIBSgyIAAAAIANgHIAADhIhfA6gAAtDQIBWg1IAADiIhWA0gAiCgmIBAgnIAADLIhAAngAg6hSIBSgyIAAAAIANgHIAADKIhfA6gAAtiQIBWg1IAADLIhWA0gAiCl7IBAgnIAAC/IhAAngAg6mnIBSgzIAAABIANgHIAAC+IgNAIIAAgBIhSAzgAAtnlIBWg1IAADAIhWA0g");
	this.shape_58.setTransform(329.325,328.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#59ACBC").s().p("AiaIOIBAgnIAIgFIBfg6IAIgEIBVg1IAAjhIAxgeIAAEcIibBdIAAABIiaBdgAiaCXIBAgnIAIgFIBfg5IAIgGIBVgzIAAjLIAxgeIAAEFIk1C7gAiajKIBAgnIAIgFIBSgzIAAABIANgIIAIgEIBVg0IAAjAIAxgeIAAD6IibBeIAAABIiaBcg");
	this.shape_59.setTransform(331.75,330.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BEEFF8").s().p("Ag3EMIAIgFIAADhIgIAGgAAwDOIAIgGIAADiIgIAFgAg3hUIAIgFIAADLIgIAEgAAwiSIAIgGIAADLIgIAFgAg3mpIAIgFIAAC+IgIAGgAAwnnIAIgGIAAC/IgIAFg");
	this.shape_60.setTransform(272.675,362.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#6C05AE","#1A0159"],[0,1],-7.1,-25.2,-6.8,41).s().p("AiCE6IBAgnIAADiIhAAmgAg6EOIBSgyIAAAAIANgHIAADhIhfA6gAAtDQIBWg1IAADiIhWA0gAiCgmIBAgnIAADLIhAAngAg6hSIBSgyIAAAAIANgHIAADKIhfA6gAAtiQIBWg1IAADLIhWA0gAiCl7IBAgnIAAC/IhAAngAg6mnIBSgzIAAABIANgHIAAC+IgNAIIAAgBIhSAzgAAtnlIBWg1IAADAIhWA0g");
	this.shape_61.setTransform(273.775,361.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#59ACBC").s().p("AiaIOIBAgnIAIgFIBfg6IAIgEIBVg1IAAjhIAxgeIAAEcIibBdIAAABIiaBdgAiaCXIBAgnIAIgFIBfg5IAIgGIBVgzIAAjLIAxgeIAAEFIk1C7gAiajKIBAgnIAIgFIBSgzIAAABIANgIIAIgEIBVg0IAAjAIAxgeIAAD6IibBeIAAABIiaBcg");
	this.shape_62.setTransform(276.2,362.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_63.setTransform(703.9,141.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_64.setTransform(703.25,165.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_65.setTransform(703.45,179.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_66.setTransform(660.2,163.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_67.setTransform(659.55,187.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_68.setTransform(659.75,201.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_69.setTransform(605.95,196.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_70.setTransform(605.3,220.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_71.setTransform(605.5,234.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_72.setTransform(562,224.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_73.setTransform(561.35,248.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_74.setTransform(561.55,262.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_75.setTransform(208.15,429.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_76.setTransform(207.5,453.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_77.setTransform(207.7,467);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_78.setTransform(164.45,451.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_79.setTransform(163.8,475.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_80.setTransform(164,489.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_81.setTransform(91.65,496.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_82.setTransform(91,520.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_83.setTransform(91.2,534.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0,-19,-0.1,14.2).s().p("AgFC+QhLgDg2g1QgpgpgKg2QgEgTAAgUQAAhNA3g5QA4g3BOAAQBPAAA3A3QA4A5AABNQAAA5geAtQgLAQgPAQQg3A4hPAAIgFAAg");
	this.shape_84.setTransform(47.95,518.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3F0790").s().p("AgJCJQgFgEAAgGIAAj9QAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAAD9QAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_85.setTransform(47.3,542.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(177,120,223,0.698)").s().p("AhZA0QgkgWgBgeQABgdAkgWQAmgVAzAAQA0AAAlAVQAlAWAAAdQAAAeglAWQglAVg0AAQgzAAgmgVg");
	this.shape_86.setTransform(47.5,556.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3F0790").s().p("AjXlrIBBglIAAPSIhBAmgAghnWIBAglIAAPSIhAAmgACYpBIBAgnIAAPRIhAAmg");
	this.shape_87.setTransform(405.425,270.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8BACC3").s().p("AjpJgIBAgmIAAvSIAmgWIAAP4IhmA8gAgzH1IA/gmIAAvSIAlgWIAAP5IhkA7gACFGHIBAgmIAAvRIAlgVIAAP4IhlA7g");
	this.shape_88.setTransform(407.275,270.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_89.setTransform(284.1,207.15);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_90.setTransform(286.975,202.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_91.setTransform(286.425,199.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAAlgeIAjgUIAYAtIgjAUgAgDgGIgXgtIAogXIAXAsIgoAYgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_92.setTransform(295.325,194.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_93.setTransform(295.3,194.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIAZAwIgpAXgAgQA9IAngXIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgABAAOIgpAYIgXgtIAogYIgXgsIgoAYIAXAsIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIAYAtIAjgTIAYAtIgkAUgAAAgHgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_94.setTransform(295.025,194.775);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_95.setTransform(308.65,192.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_96.setTransform(311.525,188.05);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_97.setTransform(310.975,185.575);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIgYgtIAjgUIAYAtIgjAUIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAgDgGIgXgtIAogXIAXAsIgoAYgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_98.setTransform(319.875,180.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_99.setTransform(319.85,180.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIgXguIAjgTIAYAtIgkAUIAZAwIgpAXgAgQA9IAngXIgXgtIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIgXgsIgoAYIAXAsIAogYIAYAtIgpAYIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_100.setTransform(319.575,180.375);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_101.setTransform(333.25,178.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_102.setTransform(336.125,173.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_103.setTransform(335.575,171.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIgYgtIAjgUIAYAtIgjAUIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAgDgGIgXgtIAogXIAXAsIgoAYgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_104.setTransform(344.475,165.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_105.setTransform(344.45,165.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIgXguIAjgTIAYAtIgkAUIAZAwIgpAXgAgQA9IAngXIgXgtIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIgXgsIgoAYIAXAsIAogYIAYAtIgpAYIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_106.setTransform(344.175,165.875);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_107.setTransform(357.3,164.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_108.setTransform(360.175,159.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_109.setTransform(359.625,156.925);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIgYgtIAjgUIAYAtIgjAUIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIgXgtIAogXIAXAsIgoAYIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_110.setTransform(368.525,151.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_111.setTransform(368.5,151.725);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIAZAwIgpAXgAgQA9IAngXIgXgtIAogYIgXgsIgoAYIAXAsIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIAYAtIAjgTIAYAtIgkAUIgXguIgpAYIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_112.setTransform(368.225,151.725);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_113.setTransform(234.15,180.35);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_114.setTransform(237.025,175.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_115.setTransform(236.475,173.175);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIgXgtIAogXIAXAsIgoAYIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAAlgeIAjgUIAYAtIgjAUgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_116.setTransform(245.375,167.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_117.setTransform(245.35,167.975);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIAZAwIgpAXgAgQA9IAngXIgXgtIAogYIgXgsIgoAYIAXAsIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIAYAtIAjgTIAYAtIgkAUIgXguIgpAYIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_118.setTransform(245.075,167.975);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_119.setTransform(258.7,165.95);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_120.setTransform(261.575,161.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_121.setTransform(261.025,158.775);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAAlgeIAjgUIAYAtIgjAUgAgDgGIgXgtIAogXIAXAsIgoAYgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_122.setTransform(269.925,153.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_123.setTransform(269.9,153.575);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIAZAwIgpAXgAgQA9IAngXIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgABAAOIgpAYIgXgtIAogYIgXgsIgoAYIAXAsIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIAYAtIAjgTIAYAtIgkAUgAAAgHgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_124.setTransform(269.625,153.575);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_125.setTransform(283.3,151.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_126.setTransform(286.175,146.75);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_127.setTransform(285.625,144.275);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAAlgeIAjgUIAYAtIgjAUgAgDgGIgXgtIAogXIAXAsIgoAYgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_128.setTransform(294.525,139);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_129.setTransform(294.5,139.075);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIAZAwIgpAXgAgQA9IAngXIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgABAAOIgpAYIgXgtIAogYIgXgsIgoAYIAXAsIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIAYAtIAjgTIAYAtIgkAUgAAAgHgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_130.setTransform(294.225,139.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(51,51,51,0.518)").s().p("AhZgcIBCgrIAABDIBoA8IAJAQg");
	this.shape_131.setTransform(307.35,137.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2C0147").s().p("Ag0AqIAAhCIAAhNIAAAAIBpDMg");
	this.shape_132.setTransform(310.225,132.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9475A8").s().p("ABDCQIgJgRIhojMIAAABIgdg3IAFgNICSEcIgJAFg");
	this.shape_133.setTransform(309.675,130.125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6C05AE").s().p("AADBsIAogYIgXgtIApgYIgYgtIAjgUIAYAtIgjAUIAXAuIgpAXIAZAwIgoAXgAg3BTIAkgVIgYguIAogWIAXAtIgnAXIAWAuIgjAVgABUA9IAkgUIAYAvIgjAUgAhmgHIAkgUIgXgsIApgXIAWArIgoAYIAXArIgkAVgAgDgGIgXgtIAogXIAXAsIgoAYgAiPhWIAkgVIASAkIgkAVgAhZhHgAgHh1IgpAXIgTgkIApgYIATAlIAigVIAWArIgjAVg");
	this.shape_134.setTransform(318.575,124.85);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C7AED7").s().p("AiehcIgBAAICshjICTEbIisBkgAgZibIgqAYIgoAYIgkAVIATAkIAWArIAXArIAYAuIAXAuIAZAwIAjgWIAogXIApgXIAkgVIgZgvIgYgtIgXguIgYgsIgWgsIgSgkg");
	this.shape_135.setTransform(318.55,124.925);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#5B0394").s().p("AgdCAIAjgVIAZAvIgjAWgAAuBUIApgYIgXguIAjgTIAYAtIgkAUIAZAwIgpAXgAgQA9IAngXIgXgtIgoAWIgXgrIAogXIgWgsIgpAYIAXArIgkAVIgXgrIAkgVIgSgkIAogYIATAkIApgXIAVArIAjgUIAXAsIgjAUIgXgsIgoAYIAXAsIAogYIAYAtIgpAYIAXAuIgoAXgAhMAkIAkgVIAYAuIgkAVgAgEh2IgTglIAigUIATAkIgiAVg");
	this.shape_136.setTransform(318.275,124.925);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#990000").ss(0.1,1,1).p("AkjAAIJHAA");
	this.shape_137.setTransform(95.1,867.35);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#5115A8").s().p("AlljFIA9gjIAAMoIg9AkgAgml5IA7glIAAMnIg7AkgAEqpAIA8gjIAAMlIg8Akg");
	this.shape_138.setTransform(173.075,393.925);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3F61CE").s().p("Al2JdIA8gkIAAsoIAkgVIAANMIhgA5gAg4GmIA8gkIAAsnIAjgUIAANLIhfA4gAEZDeIA7gjIAAslIAjgWIAANMIheA4g");
	this.shape_139.setTransform(174.825,394.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#459AEB").s().p("AAqGwIAAjgIBoA+IAADigAiRE/IAAjiIBqBBIAADhgAAqBvIAAjLIBoA+IAADMgAiRgDIAAjLIBqBBIAADKgAAqi+IAAi/IBoA/IAAC/gAiRkvIAAjAIBqBBIAAC/g");
	this.shape_140.setTransform(95.475,407.4625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6627C1").s().p("AASG/IAAkaIAxAdIAADgIBnBAIAAA6gAiqFOIAAkcIAxAdIAADiIBrBAIAAA6gAASB9IAAkEIAxAdIAADLIBnA/IAAA6gAiqALIAAkFIAxAeIAADLIBrBAIAAA6gAASiwIAAj5IAxAeIAAC/IBnA/IAAA6gAiqkhIAAj6IAxAeIAADAIBrBAIAAA5g");
	this.shape_141.setTransform(93.05,408.875);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-9.2,0,9.3).s().p("AihACIClhdICeBZIAAABIilBdg");
	this.shape_142.setTransform(178,299.825);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-19.9,0,20).s().p("AiyDHIAAhKIC+htIAEAFIgDgEIAAgBIAAh4ICmhfIAADFIlkDKg");
	this.shape_143.setTransform(176.325,319.575);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-20.1,0,20.2).s().p("Ai1gEIAAhMIACgBIgCAAIABh3IABgBICcBZIAAABIAAAAIDNDtIAAABIAAAAIAABLg");
	this.shape_144.setTransform(140.225,319.325);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-17.3,0,17.4).s().p("AAHCuIAAgCIjMjtIC+hsIAXAcIC2DSIAAAAIi+Btg");
	this.shape_145.setTransform(157.675,314.675);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-10.5,0,10.6).s().p("ABaBpIi0jRIAZAAICcBaIAAB3g");
	this.shape_146.setTransform(168.45,310.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-9.8,0,9.9).s().p("AgQBiIichZIC8hqIAAgBIBqA8IAzAeIi9BrgAAQAWIAAgBIAAAAg");
	this.shape_147.setTransform(139.525,298.225);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#49C0FF","#3F61CE"],[0,1],0,-4.7,0,4.8).s().p("AhRATIgzgcIA+gkIDLgBIikBdIgZAAg");
	this.shape_148.setTransform(165.05,295.35);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0.3,-73.5,-0.3,73.6).s().p("AkjGMIAAxsIJHFWIAARrIAAAAg");
	this.shape_149.setTransform(95.1,408.525);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3F61CE").s().p("AimKVIAAxTIgYgfIAAAAIA2AOIAARrIgBABgAC/HeIgdgHIAAxTIgBAAIgXggIA1APIAAAAIAARrIAAAAg");
	this.shape_150.setTransform(172.825,395.35);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-32.2,-35,-32.2,72.1).s().p("AngkfIE+i4IAARTIAAAYIk+C4gAiEnoIEpitIABAAIAARTIAAAUIACACIksCvgADDqmIEeilIAARsIkeCkg");
	this.shape_151.setTransform(172.425,397.8375);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6627C1").s().p("AjPACIDRh4IDOByIjSB7g");
	this.shape_152.setTransform(117.3,341.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#5115A8").s().p("AiGA8IEJiYIAEBBIjSB4g");
	this.shape_153.setTransform(104.05,332.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2F0D5F").s().p("AiAgXIgDhCIEHCTIg3Afg");
	this.shape_154.setTransform(130.4,332.45);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3F0790").s().p("AqVBrINSnqIHZEVItRHqgAoNCHIA7AiIDOB0IDTh7IA2ggIkHiSg");
	this.shape_155.setTransform(143.125,325.225);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#9960CE").s().p("AsEBrIPBorIJIFWIkeCkIAAAAIg1gOIAXAfIkqCtIg2gOIAAAAIAYAfIk9C4gAquBoIAYAOIHaEVINRnqIAXgNInykjg");
	this.shape_156.setTransform(143.225,324.125);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#531B9E").s().p("Aj2h8IgCgBIAAgaIHxEiIgXANg");
	this.shape_157.setTransform(186.725,299.35);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BA81E5").s().p("Am0D1INon3IAAAaIABABItSHqg");
	this.shape_158.setTransform(118.275,310.05);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(51,51,51,0.518)").s().p("AlwhLIBhg4IAAAUIEJCWIACABIECiTIAAgaIBzA6IlmDRg");
	this.shape_159.setTransform(362.4,113.05);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13,0,13.1,0).s().p("AiCCRIAAg2ICLhPIAAAAIAAgBIAAhXIB5hFIAAB2IAAAaIkCCTg");
	this.shape_160.setTransform(374.8,102.475);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-11.8,0,11.8,0).s().p("Ah1ABIB4hDIBzBBIAAAAIh4BEg");
	this.shape_161.setTransform(376.025,88.075);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-14.4,0,14.5,0).s().p("AAFB+IiUitICKhPIARAVICFCZIiMBPg");
	this.shape_162.setTransform(361.2,98.875);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-6.6,0,6.7,0).s().p("AhBhMIASAAIBxBCIAABXIAAAAg");
	this.shape_163.setTransform(369.05,95.925);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-9.7,0,9.8,0).s().p("Ag7AOIglgUIAtgaICUgBIh4BDIgSABg");
	this.shape_164.setTransform(366.575,84.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-12.6,0,12.7,0).s().p("AgMBHIhug+IgDgCICIhOIABAAIBNAsIAlAVIiJBOgAALAQIABAAIgBAAg");
	this.shape_165.setTransform(347.975,86.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13.2,0,13.3,0).s().p("AiEgDIAAgUIAAgjIABAAIgBgBIABhXIAAAAIAEACIBuA/IAAAAIABAAICVCtIAAABIAAA2g");
	this.shape_166.setTransform(348.475,102.275);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(51,51,51,0.518)").s().p("AlmhKIBZgtIAAAjIEECTIABAAIEJiWIAAglIBmA1IlnDEg");
	this.shape_167.setTransform(448.025,161.025);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13,0,13.1,0).s().p("AiCgBIAAgjIAAhtIB6BFIAABXIAAABIABAAICJBPIAAA2IgBABg");
	this.shape_168.setTransform(434.1,152.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-11.8,0,11.8,0).s().p("Ah1gBIAAAAIBzhBIB4BDIhzBCg");
	this.shape_169.setTransform(432.875,138.375);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-6.6,0,6.7,0).s().p("AhCBNIAAhXIByhCIASAAIiDCZg");
	this.shape_170.setTransform(439.85,146.225);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13.2,0,13.3,0).s().p("AiEBdIAAgBICVitIABAAIAAAAIBug/IAEgCIAAAAIABBXIgBABIABAAIAAATIAAAkIkJCWg");
	this.shape_171.setTransform(460.425,152.575);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-14.4,0,14.5,0).s().p("AiPAwICEiZIARgVICKBPIiVCtIAAABg");
	this.shape_172.setTransform(447.7,149.175);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-9.7,0,9.8,0).s().p("AAYAiIh4hDICUABIAtAaIglAUIgSAUg");
	this.shape_173.setTransform(442.325,135.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-12.6,0,12.7,0).s().p("Ah9gGIAlgVIBNgsIABAAICIBOIgDACIhuA/IgBAAgAgKAQIAAAAIgBAAg");
	this.shape_174.setTransform(460.925,137.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(51,51,51,0.518)").s().p("AlwhKIBhg5IAAAVIEKCWIABAAIEDiTIAAgaIByA6IlmDRg");
	this.shape_175.setTransform(188.1375,215.3375);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13,0,13.1,0).s().p("AiCCRIAAg2ICLhPIAAAAIAAgBIAAhXIB5hFIAAB1IAAAbIkDCTg");
	this.shape_176.setTransform(200.55,204.775);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-14.4,0,14.5,0).s().p("AAFB+IiUitICKhPIARAVICFCZIiMBPg");
	this.shape_177.setTransform(186.95,201.175);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-9.7,0,9.8,0).s().p("Ag7AOIglgUIAtgaICUgBIh4BDIgSAAg");
	this.shape_178.setTransform(192.325,187.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-6.6,0,6.7,0).s().p("AhBhMIASAAIBxBCIAABXIAAAAg");
	this.shape_179.setTransform(194.8,198.225);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-11.8,0,11.8,0).s().p("Ah1ABIB4hDIBzBBIAAAAIh4BEg");
	this.shape_180.setTransform(201.775,190.375);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13.2,0,13.3,0).s().p("AiEgDIAAgVIAAgiIABAAIgBgBIABhXIAAAAIAEACIBuA/IAAAAIABAAICVCtIAAABIAAA2g");
	this.shape_181.setTransform(174.225,204.575);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-12.6,0,12.7,0).s().p("AgMBIIhug/IgDgDICIhNIABAAIBNAsIAlAVIiJBOgAALAQIABgBIgBAAg");
	this.shape_182.setTransform(173.725,189.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(51,51,51,0.518)").s().p("AlmhKIBZgtIAAAkIEECSIABAAIEJiWIAAglIBmA1IlnDEg");
	this.shape_183.setTransform(273.775,263.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-6.6,0,6.7,0).s().p("AhCBNIAAhXIByhCIASAAIiDCZg");
	this.shape_184.setTransform(265.6,248.525);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-14.4,0,14.5,0).s().p("AiPAwICEiZIARgVICLBPIiWCtIAAABg");
	this.shape_185.setTransform(273.45,251.475);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-9.7,0,9.8,0).s().p("AAYAiIh4hEICUACIAtAaIglAUIgSAUg");
	this.shape_186.setTransform(268.075,237.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-11.8,0,11.8,0).s().p("Ah1gBIAAAAIBzhBIB4BDIhzBCg");
	this.shape_187.setTransform(258.625,240.675);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13,0,13.1,0).s().p("AiCgBIAAgkIAAhsIB6BFIAABXIAAABIABAAICJBPIAAA2IgBABg");
	this.shape_188.setTransform(259.85,255.075);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13.2,0,13.3,0).s().p("AiEBdIAAgBICVitIABAAIAAAAIBug/IAEgCIAAAAIABBXIgBABIABAAIAAASIAAAlIkJCWg");
	this.shape_189.setTransform(286.175,254.875);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-12.6,0,12.7,0).s().p("Ah9gGIAlgVIBNgsIABAAICIBNIgDADIhuA/IgBAAgAgKAQIAAgBIgBAAg");
	this.shape_190.setTransform(286.675,239.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#482005").s().p("AAAAAIABAAIAAAAIAAAAg");
	this.shape_191.setTransform(506.3875,291.4125);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7F9192").s().p("AiChLIAIgFIAAEwIgIAEgAABiYIAIgFIAAEzIgIAEgAB7jfIAIgEIAAE0IgIAFg");
	this.shape_192.setTransform(406.4,351.85);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A7C5DA").s().p("Ak+p+IABgBIABAAIJ7l4IAACJIAAAxIAAUBIAADOIhRAuIAAgDIAAlSIgbAQIhVAxIgIAFIhxBCIgHAEIh9BJIgIAFIhiA4IAAEvIAAAcIhVAwg");
	this.shape_193.setTransform(406.875,286.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#B6D1E4").s().p("AiGEqIlvjdIJ8l3IFvDdIp7F3IgBABg");
	this.shape_194.setTransform(388.55,192.375);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#59ACBC").s().p("AteSWIgdgHIAAAAIAAzoIAAAAIgYgfIAAAAIA1AOIABAAIAAUAgAOTB5IgcgHIgBgBIAAznIAAgBIgYgeIABAAIA0AOIAAAAIABAAIAAUAg");
	this.shape_195.setTransform(393.075,292.225);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#3F0790").s().p("ALqUZIBig5IAAEwIhiA3gANUTbIB8hIIAAEzIh8BGgAPYSOIByhCIAAE2IhyBAgARSRIIBUgyIAAE4IAAABIhUAvgApUOOI3+uKMAqogZLIABABIX7OIItAHrIAAiJIlvjcIp9F3IAAAAIAAAAIAAG6IBxBEIvrJSg");
	this.shape_196.setTransform(308.9,219.45);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#8BACC3").s().p("EgjCAPKIAAz/IaXPjIAAUBgAIjUlIAAgBIAAuiIABgBIgBgBIAAleIgrgZIg4AhIhxhDIAAm7IAAAAIFvDeIAAABIAAZ2gATPQ8IAAgBIAAk4IAcgQIAAFTIgBABgAKA9ZIAAhUIZCOxIhHArg");
	this.shape_197.setTransform(304.8,246.95);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#C3D7E8","#6FD5EC"],[0,1],-228.4,0,228.5,0).s().p("EgjsAFiMAtFganIaUPiIk4C4IABAAIAIgEIjiCFIAAAAIg1gOIAAAAIAYAeIAAABIh1BEIACAAIk7C4IAAgxINAnrIBHgqI5CuyIAAgBIgBABMgrvAZ1IBHAqIX+OJIAAABIPrpRIA4ghIAqAZIkvCzIABAAIiBBMIAAAAIhfA4Ig0gNIgBAAIAYAeIAAAAIhtBBIABABIm2EBg");
	this.shape_198.setTransform(309.025,180.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#7DDEF1").s().p("Ap+euIAA0BIG2kBIgBAAIBthBIAAToIABABIAAAYIhsBAIAAABIAAAAIgCAAIm0ECgAg+FaIgBAAIBgg5IAAAAICAhMIAAAAIEvizIAAFeIAAACIAAOiIkuCyIABAAIjhCFgATom0IE7i5IgCAAIB1hFIAAToIABAAIAAAZIhNAsIAAAAIgkAVIAAAAIgCACIAAACIgBAAIgBgBIk6C5gAa0rDIgBAAIDiiEIgIAEIgBgBIE4i4IAAUBIk3C3IAAAAIgBABIh5BIIAAAAIhfA4gEgjDgE4MArvgZ2IABAAIAABVIgBgBMgqoAZMg");
	this.shape_199.setTransform(313.1,246.975);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#5115A8").s().p("AlljFIA9gjIAAMoIg9AkgAgml5IA7glIAAMnIg7AkgAEqpAIA8gjIAAMlIg8Akg");
	this.shape_200.setTransform(560.825,173.075);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#3F61CE").s().p("Al2JdIA8gkIAAsoIAkgVIAANMIhgA5gAg4GmIA8gkIAAsnIAjgUIAANLIhfA4gAEZDeIA7gjIAAslIAjgWIAANMIheA4g");
	this.shape_201.setTransform(562.575,173.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#5115A8").s().p("AlljFIA9gjIAAMoIg9AkgAgml5IA7glIAAMnIg7AkgAEqpAIA8gjIAAMlIg8Akg");
	this.shape_202.setTransform(560.875,173.025);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#955214").s().p("Al2JdIA8gkIAAspIAkgUIAANMIhgA4gAg4GmIA8gkIAAsnIAjgUIAANMIhfA3gAEZDfIA7gkIAAsmIAjgUIAANMIheA4g");
	this.shape_203.setTransform(562.625,173.75);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-18.2,0,18.2,0).s().p("Ai1gEIAAhMIACgBIgCAAIABh3IABgBICcBZIAAABIAAAAIDNDtIAAABIAAAAIAABLg");
	this.shape_204.setTransform(497.125,113.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-17.8,0,17.9,0).s().p("AiyDHIAAhKIC+htIAEAFIgDgEIAAgBIAAh4ICmhfIAADFIlkDKg");
	this.shape_205.setTransform(533.225,114.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-16.2,0,16.2,0).s().p("AihACICkhdICfBZIAAABIilBdg");
	this.shape_206.setTransform(534.9,94.475);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-9.1,0,9.2,0).s().p("ABbBqIi1jSIAYgBICeBaIAAB5g");
	this.shape_207.setTransform(525.35,105.25);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-19.8,0,19.9,0).s().p("AAHCuIAAgCIjMjtIC+hsIAXAcIC2DSIAAAAIi+Btg");
	this.shape_208.setTransform(514.575,109.325);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-13.3,0,13.3,0).s().p("AhRAUIgzgdIA+gkIDLgCIilBeIgYABg");
	this.shape_209.setTransform(521.95,90);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-17.3,0,17.3,0).s().p("AgQBiIichZIC8hqIAAgBIBqA8IAzAeIi9BrgAAQAWIAAgBIAAAAg");
	this.shape_210.setTransform(496.425,92.875);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#990000").ss(0.1,1,1).p("AEkCrIpHlV");
	this.shape_211.setTransform(483.75,241.375);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#C48BEC","#3F0790","#2C0466","#2C0466"],[0,1,1,1],0.1,-73.7,0,73.7).s().p("AkjGMIAAxsIJHFWIAARrg");
	this.shape_212.setTransform(483.75,184.725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#49C0FF","#3F61CE"],[0,1],-32.2,-47.2,-32.2,84.4).s().p("AngkgIE+i3IAARTIAAAYIk+C4gAiEnoIEpitIABAAIAARTIAAAUIACACIksCwgADDqmIEeilIAARrIkeCmg");
	this.shape_213.setTransform(561.075,174.05);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#3F61CE").s().p("AiJKdIgdgIIAAxTIgYgfIAAAAIA2AOIAARsgAC/HfIAAgBIgdgHIAAxTIgBAAIgXggIA1APIAAAAIAARsg");
	this.shape_214.setTransform(561.475,171.55);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#6627C1").s().p("AjQACIDTh3IDOBxIjTB7g");
	this.shape_215.setTransform(552.6,92.45);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#5115A8").s().p("AiGA7IEKiXIADBCIjSB3g");
	this.shape_216.setTransform(539.35,83.35);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#BA81E5").s().p("Am0D1INon3IAAAaIABAAItSHrg");
	this.shape_217.setTransform(506.925,86.25);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#2F0D5F").s().p("Ah/gXIgEhBIEHCRIg2Ahg");
	this.shape_218.setTransform(565.7,83);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#3F0790").s().p("AqVBrINSnqIHZEVItRHqgAg6h4IA6AhIDNB0IDUh7IA2ggIkIiTg");
	this.shape_219.setTransform(531.775,101.425);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#9960CE").s().p("AsEBrIPBorIJIFWIkeCkIAAAAIg1gOIAXAfIkqCtIg2gOIAAAAIAYAfIk9C4gAquBoIAYAOIHaEVINRnqIAXgNInykjg");
	this.shape_220.setTransform(531.875,100.325);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#531B9E").s().p("Aj2h8IgCgBIAAgaIHxEiIgXANg");
	this.shape_221.setTransform(575.375,75.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(200));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(729.6,585.5,718.6999999999999,468.20000000000005);
// library properties:
lib.properties = {
	id: '202F0F9C1FB3FE42B6C68B94124572F4',
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
an.compositions['202F0F9C1FB3FE42B6C68B94124572F4'] = {
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