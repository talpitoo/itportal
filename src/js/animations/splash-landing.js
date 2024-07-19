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
	this.shape.setTransform(18.6279,73.1332,1.1335,0.9637);

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
	this.shape_1.setTransform(80.2794,118.7274,0.8404,0.8404);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5467B0").s().p("AgbAdQgMgNAAgQQAAgPAMgNQAMgLAPAAQARAAAMALQALANAAAPQAAAQgLANQgMALgRAAQgPAAgMgLg");
	this.shape_2.setTransform(62.9256,147.7414,0.8404,0.8404);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5467B0").s().p("AirCdQALgIAohkQAhhSA7htIABgBIAZgyQADgLAOgOQAbgbAmAAQAnAAAbAbQANANAHAQIACAGIABAFQAEAMAAAPQAAALgCAKIgJAXQgQAmgkBAQg7BoiQCTQhZgLALhOg");
	this.shape_3.setTransform(74.6367,131.976,0.8411,0.8411);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_4.setTransform(49.5375,149.1592,0.3765,0.3765);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_5.setTransform(57.5578,159.6459,0.3765,0.3765);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_6.setTransform(54.2254,159.2317,0.3765,0.3765);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_7.setTransform(51.2696,157.4996,0.3765,0.3765);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_8.setTransform(48.935,155.1274,0.3765,0.3765);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_9.setTransform(58.2967,152.9086,0.3771,0.3771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5467B0").s().p("AgbAdQgMgMAAgRQAAgPAMgNQAMgLAPAAQARAAAMALQALANAAAPQAAARgLAMQgMALgRAAQgPAAgMgLg");
	this.shape_10.setTransform(62.3799,148.1269,0.8404,0.8404,0.3152);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_11.setTransform(48.9724,149.4425,0.3766,0.3766,0.3134);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgPAAgMgMg");
	this.shape_12.setTransform(56.9353,159.9731,0.3766,0.3766,0.3134);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_13.setTransform(53.6052,159.5406,0.3766,0.3766,0.3134);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_14.setTransform(50.6588,157.7924,0.3766,0.3766,0.3134);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_15.setTransform(48.3373,155.4074,0.3766,0.3766,0.3134);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_16.setTransform(48.8667,149.6311,0.3765,0.3765);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_17.setTransform(56.8861,160.1165,0.3765,0.3765);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_18.setTransform(48.2643,155.5986,0.3765,0.3765);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_19.setTransform(53.8675,159.5121,0.3765,0.3765);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_20.setTransform(50.9119,157.7802,0.3765,0.3765);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_21.setTransform(48.5775,155.4082,0.3765,0.3765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:58.2967,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:48.935,y:155.1274}},{t:this.shape_7,p:{x:51.2696,y:157.4996}},{t:this.shape_6,p:{x:54.2254,y:159.2317}},{t:this.shape_5,p:{x:57.5578,y:159.6459}},{t:this.shape_4,p:{x:49.5375,y:149.1592}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{scaleX:0.8404,scaleY:0.8404,x:62.9256,y:147.7414}},{t:this.shape_1,p:{scaleX:0.8404,scaleY:0.8404,x:80.2794,y:118.7274,rotation:0}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]}).to({state:[{t:this.shape_9,p:{x:58.002,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_8,p:{x:48.685,y:155.4274}},{t:this.shape_7,p:{x:51.0196,y:157.7996}},{t:this.shape_6,p:{x:53.9754,y:159.5317}},{t:this.shape_5,p:{x:57.3078,y:159.9459}},{t:this.shape_4,p:{x:49.2875,y:149.4592}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{scaleX:0.8405,scaleY:0.8405,x:62.8454,y:148.0936}},{t:this.shape_1,p:{scaleX:0.8405,scaleY:0.8405,x:80.2011,y:119.0764,rotation:0}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},6).to({state:[{t:this.shape_9,p:{x:62.2,y:149.5,regX:11.8,regY:-10.4,rotation:0}},{t:this.shape_8,p:{x:48.435,y:155.6274}},{t:this.shape_7,p:{x:50.7696,y:157.9996}},{t:this.shape_6,p:{x:53.7254,y:159.7317}},{t:this.shape_5,p:{x:57.0578,y:160.1459}},{t:this.shape_4,p:{x:49.0375,y:149.6592}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{scaleX:0.8404,scaleY:0.8404,x:62.4256,y:148.2414}},{t:this.shape_1,p:{scaleX:0.8404,scaleY:0.8404,x:79.7794,y:119.2274,rotation:0}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},2).to({state:[{t:this.shape_9,p:{x:62.05,y:149.4,regX:11.7,regY:-10.3,rotation:0.3153}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{scaleX:0.3766,scaleY:0.3766,rotation:0.3134,x:48.9724,y:149.4425}},{t:this.shape_3,p:{x:74.111,y:132.499,rotation:0.316}},{t:this.shape_10},{t:this.shape_1,p:{scaleX:0.8404,scaleY:0.8404,x:79.894,y:119.2073,rotation:0.3152}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},3).to({state:[{t:this.shape_9,p:{x:62.25,y:149.5,regX:11.9,regY:-10.4,rotation:0}},{t:this.shape_18,p:{x:48.2643,y:155.5986}},{t:this.shape_4,p:{x:50.5986,y:157.9705}},{t:this.shape_6,p:{x:53.5541,y:159.7024}},{t:this.shape_17,p:{x:56.8861,y:160.1165}},{t:this.shape_16,p:{x:48.8667,y:149.6311}},{t:this.shape_3,p:{x:74.1367,y:132.476,rotation:0}},{t:this.shape_2,p:{scaleX:0.8403,scaleY:0.8403,x:62.3856,y:148.224}},{t:this.shape_1,p:{scaleX:0.8403,scaleY:0.8403,x:79.7388,y:119.211,rotation:0}},{t:this.shape,p:{rotation:1.4834,x:65.6,y:96.2,regX:-9.1,regY:-13.7}}]},5).to({state:[{t:this.shape_9,p:{x:57.9832,y:153.1991,regX:0,regY:0,rotation:0}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_11,p:{scaleX:0.3765,scaleY:0.3765,rotation:0,x:57.1996,y:159.9263}},{t:this.shape_16,p:{x:49.1799,y:149.4405}},{t:this.shape_3,p:{x:74.4165,y:132.2676,rotation:0}},{t:this.shape_2,p:{scaleX:0.8404,scaleY:0.8404,x:62.8055,y:148.0762}},{t:this.shape_1,p:{scaleX:0.8404,scaleY:0.8404,x:80.1605,y:119.0601,rotation:0}},{t:this.shape,p:{rotation:0.7068,x:73.1233,y:107.8173,regX:0,regY:0}}]},11).to({state:[{t:this.shape_9,p:{x:58.259,y:152.9086,regX:0,regY:0,rotation:0}},{t:this.shape_18,p:{x:48.7643,y:155.0986}},{t:this.shape_4,p:{x:51.0986,y:157.4705}},{t:this.shape_6,p:{x:54.0541,y:159.2024}},{t:this.shape_17,p:{x:57.3861,y:159.6165}},{t:this.shape_16,p:{x:49.3667,y:149.1311}},{t:this.shape_3,p:{x:74.6367,y:131.976,rotation:0}},{t:this.shape_2,p:{scaleX:0.8403,scaleY:0.8403,x:62.8856,y:147.724}},{t:this.shape_1,p:{scaleX:0.8403,scaleY:0.8403,x:80.2388,y:118.711,rotation:0}},{t:this.shape,p:{rotation:0,x:73.2408,y:107.7096,regX:0,regY:0}}]},2).wait(11));

	// Layer_5
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1BoQgggcgIgxQgHgyAWgrQAWgrAngLQAmgLAgAbQAhAcAIAyQAIAxgXArQgWArgnAMQgLADgKAAQgbAAgXgUgAgNhNQgZAHgOAaQgNAbAEAfQAGAgAWASQAVASAYgGQAZgGAOgbQAOgbgFgeQgGgggVgSQgRgOgRAAIgMABgAgaA7IgHgFQAAgIgDgLQAKAEAJgCIAGgCQANARAFATIgFAAQgOAAgOgMgAgIAhQAIgHAIgOIAkAeQgMAWgVAGQgFgTgOgSgAgwAbIAEAEIAAAAIADACIAEAPQgHgKgEgLgAALAIQAHgOABgNQATALAOAAQADAYgKAVgAglAdQgCgFgBAAIAMgFIAMAMIgCABIgFAAQgHAAgHgDgAgXAQQAKgHAFgKIANALQgGAOgKAFIgMgNgAgFgGQAFgKABgOIAOAJQgBANgGANgAATgZIAAgDQgBgLgHgLQAMAAAJgEQAOAQAFAZQgNgCgTgKgAACgjQAAgJgCgHIAGABQAIALABAMIgNgIgAAIg4IgEgFIgBAAQgEgGgHgCIgBgCQASgCARAOIACABQgHADgIAAIgFgBg");
	this.shape_22.setTransform(36.3061,100.779,0.9078,0.8353,0,6.4665,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C7EC1").s().p("AApBeQgcgKgHgVQgghPg0AdQghAFgoggQgXgUgGgZQgEgdALgTQAGBKBaAWQA8ADAhAxQBAA5BmgnQgkAtgUABQgKADgMAAQgbAAgkgOg");
	this.shape_23.setTransform(36.3617,111.7788);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#334381").s().p("AAAAtQgUgDgVgGQgvgMgMgJQgLgIgDgIQgDgLAHgPQACARAMAKQAdAWA0AKQAyAKAbgbQAbgZAbglQgOAlgMASQgMAUgSAMQgMAIgVAAQgMAAgPgDg");
	this.shape_24.setTransform(46.705,119.8345);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAOAnQgQgLgSgOIgJgHIgFgbIgHghIAUAOIAjAYIAMAHIAIAlIAHAZIgbgPg");
	this.shape_25.setTransform(36,149.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C73A3F").s().p("AACBRQgYgHgQgIIgIgEIgHgZIgIglIAbAOQAUAKATAIQAUAIAWACQAVACAWgCQAVgCAUgFQAVgGAJgEIARgHIgGAoIglAPQgTAHgVADQgVAEgYAAIgDAAQgWAAgXgGgAiNgHIgYgZIgMg2QAQARAQAMIAQAMIAGAhIAGAbIgYgWg");
	this.shape_26.setTransform(44.825,148.5767);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#334381").s().p("AAOAcQgNgFgTgPQgUgOgRgXQAnAgApANQAQADAPgIQgIAOgLAEIgHABQgHAAgJgCg");
	this.shape_27.setTransform(24.075,112.2223);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8F9CCD").s().p("ABaCZIgHgBIAAgBIgCgEIggg7IgVgqQgagygxhpQAZAeAZAkQAcAkA0A3QA0A4AoAhIgIADQgiANggAAIgLAAgAAWCKQgKAAgMgJQgOgJgHgIQgHgIgkgQIgDgBIgBgNIgBgIIgHglIANAIIBLA0IAaAxIAAABQgFgCgLABgAhgBDIgigfIgTgSIAAgCIACgKIAIgZQAXATAeAWIAKAxIACAKIgBAAQgGAAgPgOgAg9AeIgQgMIgJgxQAWAPAVANIAKAEIAOAdIAXAtQgdgUgkgZgAiKgZIALglIAFADIAaAVIAIAxIgygkgAhXgrIgBgHQgHgqgCgjIALAVIAtBeIAAAAQgYgPgWgQgAh8hGIASg/QADAqAGApIgbgUgAinhHQgDgZgEgMIABgBQAHgHAKgLQAJgMAIgNQgPAxgJAxIgBADIgDgUg");
	this.shape_28.setTransform(42.3,138.3993);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5467B0").s().p("ABmC1QgNgDgKgGIgagyIhLgzIgNgJIAHAmIABAHIABANIADACIAFAQQAGAVgVgpIAAgDIgCgKIgKgyQgegWgXgTIgIAaIgCAKIAAACIgCgCIgNhEIABgCQAJgxAPgxIAFgPQARguALgFIAkA/QAPAeAIAQQAxBoAaAyIAVArIAgA6IACAFIgWgEgAgkA0IAQALQAjAaAeATIgYgtIgOgcIgJgGQgVgNgWgOIAJAygAhhAIIAyAkIgIgxIgagUIgFgDgAgvgQIABAHQAWAPAYAPIAAgBIgthdIgLgUQACAjAHAqgAhTgkIAbAUQgGgqgDgqg");
	this.shape_29.setTransform(38.2,135.0125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABLBAQg0g5gagiQgbglgYgeQgJgPgPgfQA1BABXBfQBZBiAlAVIgJAIIgLAHQgpgig0g3gAi2hkIgFgTIAegWIAPgKIgEAOQgIANgJAMQgKAMgHAGIgCgGg");
	this.shape_30.setTransform(43.05,136.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5B6FB9").s().p("AgxGaQg8ghg1hpIg0kcQgPgwgigoQgKgKgBggQgBg0AahCQAahDAtg5QASgYAXgUQDAgGCfBuQAXAPAQATQAJAKADANQAPA3gIA6QgIBDgcA/QgdBAgWBCQgHAUAEA5QAEA5gGAqIgHAxIgGAmQgZAdgkAQQglAPg8ABQgcgFgegPg");
	this.shape_31.setTransform(44.801,119.7368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(40));

	// Layer_4
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5467B0").s().p("AimC2QgigJgPgeQgFgMgCgLIAAgWQACgKAEgKQAFgNAHgKIADgDIAFgFQALgNAQgIQAigSAiAIQAjAJAPAfQAIARgBASIAAACQgBANgFAOQgKAZgUAQIgHAFIgKAHQgXAMgXAAQgLAAgMgDgABmgPQgjgJgOgfQgPgeANgiQAKgbAYgRIAKgGIAJgFQAfgPAfAIQAiAJAPAeQAPAfgNAjQgKAagXARIgDABIgBACIgBAAIgBABIgDACIgFACQgXANgXAAQgLAAgLgDg");
	this.shape_32.setTransform(30.75,80.3,0.8402,0.8402,0,0,0,14.5,-13.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5467B0").s().p("AikC3QgjgJgPgeQgGgMgCgLIAAgWQACgJAEgKQAFgNAHgLIADgDIAEgFQAcgjBDgzQBRhABog+IAKgFIAJgGQAegPAhAIQAiAIAQAfQAOAegNAiQgKAbgWARIgDABIgCACIgBABIkBDBIgHAFIgKAGQgXANgYAAQgKAAgLgDg");
	this.shape_33.setTransform(30.7,82.95,0.8407,0.8407,0,0,0,14.6,-10.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgMIgHgWQgCgJgBgKQAAgOADgLIACgDIACgGQAFgOALgLQAYgXAhAEQAhAEAYAcQANAQAGASIABACQAEAOAAAOQAAAZgMAUIgEAFIgHAIQgUAUgcAAIgJgBg");
	this.shape_34.setTransform(6.4347,102.6788,0.8407,0.8407);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5467B0").s().p("AAAAmQgNgCgLgMQgKgMAAgPQAAgQAKgJQAKgKAOABQAOACAKAMQALAMAAAPQAAAQgKAKQgJAIgLAAIgFAAg");
	this.shape_35.setTransform(21.8601,131.5825,0.8407,0.8407);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5467B0").s().p("AhfgQQgfg/gPgmIgIgWIgCgVQAAgNADgMIABgDIACgGQAGgOALgLQAXgWAiAEQAhAEAZAcQALAOADAKIAXAxIABACQAzBrAeBRQAkBhAJAJQALBJhOACQh/iZg0hmg");
	this.shape_36.setTransform(12.8047,115.5553,0.8412,0.8412);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_37.setTransform(35.6442,133.097,0.3311,0.3093,0,2.1654,-178.4498);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_38.setTransform(28.2692,141.515,0.3311,0.3093,0,2.1654,-178.4498);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_39.setTransform(31.2111,141.2542,0.3311,0.3093,0,2.1654,-178.4498);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_40.setTransform(33.8629,139.9026,0.3311,0.3093,0,2.1654,-178.4498);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_41.setTransform(35.9885,138.0107,0.3311,0.3093,0,2.1654,-178.4498);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_42.setTransform(27.6234,136.1256,0.3317,0.31,0,2.1664,-178.4475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgKgGgLIgHgXQgCgJgBgKQAAgNADgMIACgEIACgGQAFgNALgLQAYgXAhAEQAhAEAYAcQANAQAGATIABABQAEAOAAANQAAAbgMASIgEAGIgHAIQgUAUgcAAIgJgBg");
	this.shape_43.setTransform(6.4883,102.8107,0.8406,0.8406,0.6833);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5467B0").s().p("AABBXQgggEgYgcQgJgLgGgLIgHgVQgCgKgBgKQAAgOADgLIACgEIACgFQAFgOALgLQAYgXAhAEQAhAEAYAcQANAQAGASIABACQAEAOAAAOQAAAZgMAUIgEAFIgHAIQgUAUgcAAIgJgBg");
	this.shape_44.setTransform(6.8536,103.1388,0.8406,0.8406,0.7499);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_45.setTransform(28.2852,142.3721,0.3311,0.3093,0,2.9128,-177.7018);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_46.setTransform(31.2299,142.1498,0.3311,0.3093,0,2.9128,-177.7018);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_47.setTransform(33.8988,140.8331,0.3311,0.3093,0,2.9128,-177.7018);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_48.setTransform(36.0487,138.9694,0.3311,0.3093,0,2.9128,-177.7018);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42,p:{skewX:2.1664,skewY:-178.4475,x:27.6234,y:136.1256}},{t:this.shape_41,p:{skewX:2.1654,skewY:-178.4498,x:35.9885,y:138.0107}},{t:this.shape_40,p:{skewX:2.1654,skewY:-178.4498,x:33.8629,y:139.9026}},{t:this.shape_39,p:{skewX:2.1654,skewY:-178.4498,x:31.2111,y:141.2542}},{t:this.shape_38,p:{skewX:2.1654,skewY:-178.4498,x:28.2692,y:141.515}},{t:this.shape_37,p:{skewX:2.1654,skewY:-178.4498,x:35.6442,y:133.097}},{t:this.shape_36,p:{rotation:0,x:12.8047,y:115.5553}},{t:this.shape_35,p:{scaleX:0.8407,scaleY:0.8407,rotation:0,x:21.8601,y:131.5825}},{t:this.shape_34},{t:this.shape_33,p:{regX:14.6,regY:-10.7,scaleX:0.8407,scaleY:0.8407,rotation:0,x:30.7,y:82.95}},{t:this.shape_32,p:{regX:14.5,regY:-13.2,scaleX:0.8402,scaleY:0.8402,rotation:0,x:30.75,y:80.3}}]}).to({state:[{t:this.shape_42,p:{skewX:2.8469,skewY:-177.767,x:27.3768,y:136.5925}},{t:this.shape_41,p:{skewX:2.8446,skewY:-177.7681,x:35.6799,y:138.5561}},{t:this.shape_40,p:{skewX:2.8446,skewY:-177.7681,x:33.5321,y:140.4224}},{t:this.shape_39,p:{skewX:2.8446,skewY:-177.7681,x:30.8645,y:141.7423}},{t:this.shape_38,p:{skewX:2.8446,skewY:-177.7681,x:27.9198,y:141.968}},{t:this.shape_37,p:{skewX:2.8446,skewY:-177.7681,x:35.3939,y:133.6389}},{t:this.shape_36,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_35,p:{scaleX:0.8406,scaleY:0.8406,rotation:0.6833,x:21.5666,y:131.8936}},{t:this.shape_43},{t:this.shape_33,p:{regX:15.1,regY:-11.4,scaleX:0.8406,scaleY:0.8406,rotation:-0.3152,x:31.05,y:82.4}},{t:this.shape_32,p:{regX:14.2,regY:-13.5,scaleX:0.84,scaleY:0.84,rotation:-0.3143,x:30.25,y:80.05}}]},6).to({state:[{t:this.shape_42,p:{skewX:2.9148,skewY:-177.701,x:27.6877,y:137.0573}},{t:this.shape_41,p:{skewX:2.9125,skewY:-177.7019,x:35.9878,y:138.988}},{t:this.shape_40,p:{skewX:2.9125,skewY:-177.7019,x:33.8379,y:140.8519}},{t:this.shape_39,p:{skewX:2.9125,skewY:-177.7019,x:31.1688,y:142.1687}},{t:this.shape_38,p:{skewX:2.9125,skewY:-177.7019,x:28.224,y:142.391}},{t:this.shape_37,p:{skewX:2.9125,skewY:-177.7019,x:35.7076,y:134.0705}},{t:this.shape_36,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_35,p:{scaleX:0.8406,scaleY:0.8406,rotation:0.7499,x:21.8985,y:132.2402}},{t:this.shape_44,p:{rotation:0.7499,x:6.8536,y:103.1388}},{t:this.shape_33,p:{regX:13.9,regY:-11.2,scaleX:0.8406,scaleY:0.8406,rotation:-1.2253,x:30.1,y:82.55}},{t:this.shape_32,p:{regX:13.8,regY:-13.5,scaleX:0.8402,scaleY:0.8402,rotation:-1.2249,x:30.05,y:80.05}}]},2).to({state:[{t:this.shape_42,p:{skewX:2.5956,skewY:-178.0174,x:27.8843,y:136.972}},{t:this.shape_41,p:{skewX:2.5956,skewY:-178.019,x:36.1874,y:138.8567}},{t:this.shape_40,p:{skewX:2.5956,skewY:-178.019,x:34.0478,y:140.7324}},{t:this.shape_39,p:{skewX:2.5956,skewY:-178.019,x:31.3862,y:142.0639}},{t:this.shape_38,p:{skewX:2.5956,skewY:-178.019,x:28.4427,y:142.3025}},{t:this.shape_37,p:{skewX:2.5956,skewY:-178.019,x:35.88,y:133.9409}},{t:this.shape_36,p:{rotation:0.4334,x:13.2168,y:116.1728}},{t:this.shape_35,p:{scaleX:0.8406,scaleY:0.8406,rotation:0.4327,x:22.0419,y:132.1191}},{t:this.shape_44,p:{rotation:0.4327,x:6.8373,y:103.1036}},{t:this.shape_33,p:{regX:13.9,regY:-11.2,scaleX:0.8406,scaleY:0.8406,rotation:-1.2253,x:30.1,y:82.55}},{t:this.shape_32,p:{regX:13.8,regY:-13.5,scaleX:0.8402,scaleY:0.8402,rotation:-1.2249,x:30.05,y:80.05}}]},3).to({state:[{t:this.shape_42,p:{skewX:2.9148,skewY:-177.701,x:27.7043,y:137.0579}},{t:this.shape_48,p:{skewX:2.9128,skewY:-177.7018,x:36.0487,y:138.9694}},{t:this.shape_47,p:{skewX:2.9128,skewY:-177.7018,x:33.8988,y:140.8331}},{t:this.shape_46,p:{skewX:2.9128,skewY:-177.7018,x:31.2299,y:142.1498}},{t:this.shape_45,p:{skewX:2.9128,skewY:-177.7018,x:28.2852,y:142.3721}},{t:this.shape_37,p:{skewX:2.9128,skewY:-177.7018,x:35.7685,y:134.0524}},{t:this.shape_36,p:{rotation:0.7504,x:13.0869,y:116.2072}},{t:this.shape_35,p:{scaleX:0.8406,scaleY:0.8406,rotation:0.7499,x:21.8793,y:132.2318}},{t:this.shape_44,p:{rotation:0.7499,x:6.8347,y:103.1309}},{t:this.shape_33,p:{regX:13.8,regY:-11.3,scaleX:0.8406,scaleY:0.8406,rotation:-1.2253,x:29.95,y:82.45}},{t:this.shape_32,p:{regX:13.7,regY:-13.5,scaleX:0.8401,scaleY:0.8401,rotation:-1.2249,x:29.9,y:80.05}}]},5).to({state:[{t:this.shape_42,p:{skewX:2.8469,skewY:-177.767,x:27.3934,y:136.5931}},{t:this.shape_48,p:{skewX:2.8448,skewY:-177.7679,x:35.7851,y:138.5471}},{t:this.shape_47,p:{skewX:2.8448,skewY:-177.7679,x:33.6375,y:140.4133}},{t:this.shape_46,p:{skewX:2.8448,skewY:-177.7679,x:30.9701,y:141.7331}},{t:this.shape_45,p:{skewX:2.8448,skewY:-177.7679,x:28.0257,y:141.9588}},{t:this.shape_37,p:{skewX:2.8448,skewY:-177.7679,x:35.4991,y:133.6302}},{t:this.shape_36,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_35,p:{scaleX:0.8406,scaleY:0.8406,rotation:0.6834,x:21.5094,y:131.8264}},{t:this.shape_44,p:{rotation:0.6834,x:6.432,y:102.745}},{t:this.shape_33,p:{regX:15.1,regY:-11.5,scaleX:0.8406,scaleY:0.8406,rotation:-0.3152,x:31,y:82.3}},{t:this.shape_32,p:{regX:14.2,regY:-13.5,scaleX:0.84,scaleY:0.84,rotation:-0.3143,x:30.2,y:80}}]},11).to({state:[{t:this.shape_42,p:{skewX:2.8469,skewY:-177.767,x:27.3934,y:136.5931}},{t:this.shape_48,p:{skewX:2.8448,skewY:-177.7679,x:35.7851,y:138.5471}},{t:this.shape_47,p:{skewX:2.8448,skewY:-177.7679,x:33.6375,y:140.4133}},{t:this.shape_46,p:{skewX:2.8448,skewY:-177.7679,x:30.9701,y:141.7331}},{t:this.shape_45,p:{skewX:2.8448,skewY:-177.7679,x:28.0257,y:141.9588}},{t:this.shape_37,p:{skewX:2.8448,skewY:-177.7679,x:35.4991,y:133.6302}},{t:this.shape_36,p:{rotation:0.6839,x:12.7558,y:115.8383}},{t:this.shape_35,p:{scaleX:0.8406,scaleY:0.8406,rotation:0.6834,x:21.5094,y:131.8264}},{t:this.shape_44,p:{rotation:0.6834,x:6.432,y:102.745}},{t:this.shape_33,p:{regX:15.1,regY:-11.5,scaleX:0.8406,scaleY:0.8406,rotation:-0.3152,x:31,y:82.3}},{t:this.shape_32,p:{regX:14.2,regY:-13.5,scaleX:0.84,scaleY:0.84,rotation:-0.3143,x:30.2,y:80}}]},2).wait(11));

	// Layer_3
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5467B0").s().p("AhEDPQgSgTgEgaQgCgOAAgTQAIiSAMg+QALg1AJglIACgHIABgFIAAABQAGgOALgMQAWgVAdAAQALAAAKADQASAFANANQAWAWAAAeIAAACIgCASIgHAnQgQBZgLCWIAAALQAAAegWAWQgVAVgeAAQgeAAgWgVg");
	this.shape_49.setTransform(51.7326,169.6046,0.8413,0.8413,1.0393);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C73A3F").s().p("Ag1BlQAYhFAKg6IgihRIADgKIAKglQAEAKAUANQAZATAagBIAEAAIAJAzQAEAWAIAYQAGASgPAcQgNAXgWAfQgrA9gUAJIgEABQgSAAAQg2g");
	this.shape_50.setTransform(53.5205,216.031,0.8412,0.8412,5.5229);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5467B0").s().p("AgmBSQgYg5gMgnQgNgogGgjQgBgEAAgOIAAgDQACgcAUgVQAWgWAeABQAXAAASANIAKAIQAQARAEATIADAGQAEAPAFArQAQCQAQBbIgEAAQgaABgbgTQgTgOgFgJIgKAkIgCAKIgohjg");
	this.shape_51.setTransform(51.1795,191.3565,0.8412,0.8412,5.5229);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgnQgNgpgGgjQgBgEAAgOIAAgDQACgcAUgVQAWgWAeAAQAXAAASAOIAKAIQAQAQAEAVIADAFQAEAPAFArQAQCPAQBcIgEAAQgaAAgbgSQgTgOgFgKIgKAlIgCALIgohkg");
	this.shape_52.setTransform(51.7555,191.8715,0.8413,0.8413,1.5258);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5467B0").s().p("AgmBSQgYg4gMgnQgNgpgGgjQgBgEAAgOIAAgDQACgcAUgVQAWgVAegBQAXAAASAOIAKAIQAQAQAEAVIADAFQAEAPAFArQAQCPAQBcIgEAAQgaAAgbgSQgTgOgFgKIgKAlIgCALIgohkg");
	this.shape_53.setTransform(51.1916,191.2309,0.8412,0.8412,5.5229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.5205,y:216.031}},{t:this.shape_49,p:{rotation:1.0393,x:51.7326,y:169.6046}}]}).to({state:[{t:this.shape_52,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_49,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},6).to({state:[{t:this.shape_52,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_49,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},2).to({state:[{t:this.shape_52,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_49,p:{rotation:0,x:51.8376,y:169.6533}}]},2).to({state:[{t:this.shape_52,p:{rotation:-0.7067,x:52.3017,y:191.7334}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:-0.7067,x:57.3067,y:216.0097}},{t:this.shape_49,p:{rotation:0,x:51.8376,y:169.6533}}]},3).to({state:[{t:this.shape_52,p:{rotation:0,x:52.1987,y:191.7162}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:0,x:56.904,y:216.0527}},{t:this.shape_49,p:{rotation:0,x:51.8376,y:169.6533}}]},6).to({state:[{t:this.shape_52,p:{rotation:0.7732,x:51.9014,y:191.7496}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:0.7732,x:56.2777,y:216.1465}},{t:this.shape_49,p:{rotation:0.7732,x:51.8381,y:169.6846}}]},4).to({state:[{t:this.shape_52,p:{rotation:1.5258,x:51.7555,y:191.8715}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:1.5258,x:55.811,y:216.324}},{t:this.shape_49,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},2).to({state:[{t:this.shape_52,p:{rotation:3.4762,x:51.4955,y:191.9394}},{t:this.shape_50,p:{scaleX:0.8413,scaleY:0.8413,rotation:3.4762,x:54.7164,y:216.5157}},{t:this.shape_49,p:{rotation:0.8189,x:51.7382,y:169.7537}}]},3).to({state:[{t:this.shape_53},{t:this.shape_50,p:{scaleX:0.8412,scaleY:0.8412,rotation:5.5229,x:53.5327,y:215.9054}},{t:this.shape_49,p:{rotation:1.0393,x:51.7326,y:169.6046}}]},3).wait(9));

	// Layer_2
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5467B0").s().p("Ag2DeQgfgFgRgZQgQgVACgbQAAgOADgTQAgiOAWg7QATgzAQgjIACgGIACgFIAAABQAIgNANgKQAYgRAeAFQALACAKAEQAQAIALAPQASAZgFAeIAAACIgGARIgMAmQgfBUgjCTIgDALQgFAegYASQgTANgWAAIgNgBg");
	this.shape_54.setTransform(33.35,150.45,0.8413,0.8413,-1.9957,0,0,3,-14.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C73A3F").s().p("AAMBeQgGhIgOg5Ig/g8IgCgKIgGgmQAIAHAXAEQAhAHAVgLIAEgCIAdArQAMASASATQANAOgDAhQgDAYgHAmQgPBJgPARQgEADgDAAQgNAAgHgyg");
	this.shape_55.setTransform(40.2445,208.1956,0.8413,0.8413,10.4123);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5467B0").s().p("AgMBaQgsgqgcggQgcgfgTgcQgDgEgGgNIgBgDQgLgaALgbQALgcAcgNQAVgJAXAEIAMAEQAVAIAMAQIAEAFQAJALAWAmQBKB8AzBNIgEACQgWALghgGQgXgFgIgHIAGAmIACAKIhNhKg");
	this.shape_56.setTransform(32.862,184.5663,0.8413,0.8413,10.4123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3,regY:-14.3,rotation:-1.9957,x:33.35,y:150.45}}]}).to({state:[{t:this.shape_56,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},6).to({state:[{t:this.shape_56,p:{rotation:1.9967,x:33.5395,y:183.5152,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:1.9967,x:44.3011,y:205.8103,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_56,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},2).to({state:[{t:this.shape_56,p:{rotation:-0.7067,x:33.5479,y:183.1396,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:-0.7067,x:45.3492,y:204.9026,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},3).to({state:[{t:this.shape_56,p:{rotation:0,x:33.4483,y:183.1903,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:0,x:44.9805,y:205.0975,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3.8,regY:-13.9,rotation:0,x:34.05,y:150.6}}]},6).to({state:[{t:this.shape_56,p:{rotation:1.9967,x:33.5395,y:183.5152,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:1.9967,x:44.3011,y:205.8103,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3.8,regY:-13.9,rotation:-0.7067,x:34.05,y:150.6}}]},4).to({state:[{t:this.shape_56,p:{rotation:4.4878,x:33.4641,y:183.9125,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:4.4878,x:43.2464,y:206.6541,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},2).to({state:[{t:this.shape_56,p:{rotation:7.2096,x:33.097,y:184.1445,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_55,p:{rotation:7.2096,x:41.7882,y:207.3245,scaleX:0.8412,scaleY:0.8412}},{t:this.shape_54,p:{regX:3.3,regY:-14,rotation:-1.4831,x:33.65,y:150.65}}]},3).to({state:[{t:this.shape_56,p:{rotation:10.4123,x:32.862,y:184.5663,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_55,p:{rotation:10.4123,x:40.2445,y:208.1956,scaleX:0.8413,scaleY:0.8413}},{t:this.shape_54,p:{regX:2.7,regY:-14.3,rotation:-1.9957,x:33.1,y:150.45}}]},3).wait(9));

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
	this.shape_2.setTransform(95.0282,150.4756,0.3575,0.334,0,20.0334,-160.5806);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_3.setTransform(84.6597,156.6834,0.3575,0.334,0,20.0334,-160.5806);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgQAAgLgMg");
	this.shape_4.setTransform(87.7695,157.3902,0.3575,0.334,0,20.0334,-160.5806);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_5.setTransform(90.9427,156.8797,0.3575,0.334,0,20.0334,-160.5806);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_6.setTransform(93.754,155.6397,0.3575,0.334,0,20.0334,-160.5806);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_7.setTransform(81.45,145.6,0.3583,0.3348,0,20.0362,-160.5796,15.2,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DD4732").s().p("AhZClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAQAGgTACgbQATgkAYglQAMgSAOgHQAygWAwA0QAhAigLAqQgQAfgkAtQgnAzgzBBQgdAggXAAQgIAAgHgEg");
	this.shape_8.setTransform(94.45,80.4,1.1194,1.1194,10.2322,0,0,7.1,-16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_9.setTransform(95.8122,150.1168,0.3575,0.334,0,19.0317,-161.5805);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9C7A8").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgPAAgMgMg");
	this.shape_10.setTransform(85.5542,156.5043,0.3575,0.334,0,19.0317,-161.5805);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgQAAgLgLg");
	this.shape_11.setTransform(88.6758,157.1567,0.3575,0.334,0,19.0317,-161.5805);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_12.setTransform(91.8394,156.591,0.3575,0.334,0,19.0317,-161.5805);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DD4732").s().p("AhZClQgHgDgGgEQgHgGgEgHIgGgQIgCgQQgBgLADgLIABgDIABgFQAJgkAfhAQAGgTABgbQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggXAAQgHAAgIgEg");
	this.shape_13.setTransform(94.4,80.35,1.1194,1.1194,10.2322,0,0,7.1,-16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_14.setTransform(95.4815,150.3302,0.3575,0.334,0,19.5873,-161.0268);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAAQgLAMQgNAMgQAAQgPAAgMgMg");
	this.shape_15.setTransform(91.4463,156.7655,0.3575,0.334,0,19.5873,-161.0268);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{regX:15.2,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.45,y:145.6}},{t:this.shape_6,p:{skewX:20.0334,skewY:-160.5806,x:93.754,y:155.6397}},{t:this.shape_5,p:{skewX:20.0334,skewY:-160.5806,x:90.9427,y:156.8797}},{t:this.shape_4,p:{skewX:20.0334,skewY:-160.5806,x:87.7695,y:157.3902}},{t:this.shape_3,p:{skewX:20.0334,skewY:-160.5806,x:84.6597,y:156.6834}},{t:this.shape_2,p:{skewX:20.0334,skewY:-160.5806,x:95.0282,y:150.4756}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{regX:14.9,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.95,y:145.5}},{t:this.shape_6,p:{skewX:19.5864,skewY:-161.0261,x:94.1421,y:155.4631}},{t:this.shape_5,p:{skewX:19.5864,skewY:-161.0261,x:91.3405,y:156.7249}},{t:this.shape_4,p:{skewX:19.5864,skewY:-161.0261,x:88.1715,y:157.26}},{t:this.shape_3,p:{skewX:19.5864,skewY:-161.0261,x:85.0562,y:156.5774}},{t:this.shape_2,p:{skewX:19.5864,skewY:-161.0261,x:95.3759,y:150.2894}},{t:this.shape_1,p:{regX:10,rotation:28.8661,x:81.35,y:144.3}},{t:this.shape_8}]},13).to({state:[{t:this.shape_7,p:{regX:15.2,regY:-10.4,skewX:19.0336,skewY:-161.5797,x:82.2,y:145.6}},{t:this.shape_3,p:{skewX:19.0317,skewY:-161.5805,x:94.6286,y:155.3022}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{skewX:19.0317,skewY:-161.5805,x:95.8122,y:150.1168}},{t:this.shape_1,p:{regX:10.3,rotation:28.3123,x:81.55,y:145.35}},{t:this.shape_8}]},2).to({state:[{t:this.shape_7,p:{regX:15,regY:-10.7,skewX:19.5878,skewY:-161.0264,x:81.9,y:145.55}},{t:this.shape_6,p:{skewX:19.5873,skewY:-161.0268,x:94.2477,y:155.5037}},{t:this.shape_15,p:{skewX:19.5873,skewY:-161.0268,x:91.4463,y:156.7655}},{t:this.shape_4,p:{skewX:19.5873,skewY:-161.0268,x:88.2775,y:157.3006}},{t:this.shape_9,p:{skewX:19.5873,skewY:-161.0268,x:85.1625,y:156.6181}},{t:this.shape_14,p:{skewX:19.5873,skewY:-161.0268,x:95.4815,y:150.3302}},{t:this.shape_1,p:{regX:9.9,rotation:28.8661,x:81.3,y:144.15}},{t:this.shape_13}]},16).to({state:[{t:this.shape_7,p:{regX:15.3,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0343,skewY:-160.5813,x:93.8596,y:155.6803}},{t:this.shape_15,p:{skewX:20.0343,skewY:-160.5813,x:91.0484,y:156.9204}},{t:this.shape_4,p:{skewX:20.0343,skewY:-160.5813,x:87.8755,y:157.4309}},{t:this.shape_9,p:{skewX:20.0343,skewY:-160.5813,x:84.7659,y:156.7242}},{t:this.shape_14,p:{skewX:20.0343,skewY:-160.5813,x:95.1338,y:150.5165}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_13}]},2).to({state:[{t:this.shape_7,p:{regX:15.3,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0343,skewY:-160.5813,x:93.8596,y:155.6803}},{t:this.shape_15,p:{skewX:20.0343,skewY:-160.5813,x:91.0484,y:156.9204}},{t:this.shape_4,p:{skewX:20.0343,skewY:-160.5813,x:87.8755,y:157.4309}},{t:this.shape_9,p:{skewX:20.0343,skewY:-160.5813,x:84.7659,y:156.7242}},{t:this.shape_14,p:{skewX:20.0343,skewY:-160.5813,x:95.1338,y:150.5165}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_13}]},2).to({state:[]},1).to({state:[{t:this.shape_7,p:{regX:15.3,regY:-10.6,skewX:20.0362,skewY:-160.5796,x:81.5,y:145.6}},{t:this.shape_6,p:{skewX:20.0343,skewY:-160.5813,x:93.8596,y:155.6803}},{t:this.shape_15,p:{skewX:20.0343,skewY:-160.5813,x:91.0484,y:156.9204}},{t:this.shape_4,p:{skewX:20.0343,skewY:-160.5813,x:87.8755,y:157.4309}},{t:this.shape_9,p:{skewX:20.0343,skewY:-160.5813,x:84.7659,y:156.7242}},{t:this.shape_14,p:{skewX:20.0343,skewY:-160.5813,x:95.1338,y:150.5165}},{t:this.shape_1,p:{regX:10.3,rotation:29.3128,x:80.85,y:145.4}},{t:this.shape_13}]},3).wait(1));

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
	this.shape_21.graphics.f("#DD4732").s().p("AABDTQgVgCgIgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQACgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgQAQgVAAIgEAAg");
	this.shape_21.setTransform(103.65,135.65,1.1202,1.1202,0,0,0,2,-10.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7C12D").s().p("AgXBOIgQgqQAFgNAAgSQgHADgGAHIgCgLQAOgjAXhIQARgBATgMQARgLAEgIIAEAjIABAJQgQAhgZAvQgGBRAGBCQgMgRgUgpg");
	this.shape_22.setTransform(91.7039,204.8529,1.1202,1.1202);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DD4732").s().p("AgPCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQADgDABgDQAHgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgOAygPAlIgBgIg");
	this.shape_23.setTransform(99.027,175.9907,1.1202,1.1202);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DD4732").s().p("AABDTQgUgCgIgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQABgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_24.setTransform(103.65,135.65,1.1202,1.1202,0,0,0,2,-10.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DD4732").s().p("AgPCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQADgDABgDQAHgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgOAygPAlIgBgIg");
	this.shape_25.setTransform(98.856,175.9494,1.1201,1.1201,0.9491);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DD4732").s().p("AAFDTQgXgCgNgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAJgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgRAQgUAAIgEAAg");
	this.shape_26.setTransform(102.35,134.95,1.1201,1.1201,-1.7041,0,0,1.4,-11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DD4732").s().p("AgPCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQADgDABgDQAGgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgNAygPAlIgBgIg");
	this.shape_27.setTransform(99.4407,175.8441,1.1202,1.1202,2.7836);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7C12D").s().p("AgXBOIgQgpQAFgNAAgUQgHADgGAIIgCgLQAOgjAXhIQARgBATgMQARgLAEgJIAEAkIABAIQgQAigZAvQgGBSAGBCQgMgTgUgog");
	this.shape_28.setTransform(89.3763,202.7035,1.1201,1.1201,6.4796);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DD4732").s().p("AAADTQgTgCgIgeQgSgeABgDQACgEgFhGQgGhGgLgxQgLgxAMgNQALgPAFgJQAFgJAEgQQADgSAQgSQAAgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_29.setTransform(103.45,135.7,1.1202,1.1202,-3.4081,0,0,2,-10.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DD4732").s().p("AgOCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQADgDABgDQAFgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgMAygPAlIgBgIg");
	this.shape_30.setTransform(99.5701,175.7279,1.1201,1.1201,4.2233);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD4732").s().p("AgOCdIgEgkQgEAJgRALQgTAMgSABIAThUQARhOAHguQAIguACgHIAEgSQADgKAOgOQADgDABgDQAFgLATACQAYADAPAVQAOAVgCAaIAAADQgCANgBAEQgIAfgOAkQgOAigYAyQgMAygPAlIgBgIg");
	this.shape_31.setTransform(99.3568,175.8401,1.1202,1.1202,2.7836);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DD4732").s().p("AAADTQgTgCgIgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAAgMANgDQAHgBAJABQAXABAPAVQAIAMADANIAAAAIAAAFIACAGQAEAjADAxQAEA5gGCHQgBARgDANQgFAXgQARQgQAQgVAAIgEAAg");
	this.shape_32.setTransform(103.65,135.65,1.1202,1.1202,0,0,0,2.1,-10.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DD4732").s().p("AAADTQgTgCgIgeQgSgeACgDQACgEgGhGQgGhGgKgxQgLgxALgNQAMgPAFgJQAFgJADgQQAEgSAPgSQAAgMAOgDQAHgBAJABQAXABAPAVQAIAMACANIABAAIAAAFIABAGQAEAjAEAxQADA5gFCHQgCARgDANQgFAXgPARQgRAQgUAAIgFAAg");
	this.shape_33.setTransform(103.7,135.65,1.1202,1.1202,0,0,0,2.1,-10.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DD4732").s().p("AgOCdIgEgkQgFAJgRALQgTAMgRABIAShUQARhOAIguQAHguADgHIAEgSQADgKAOgOQADgDABgDQAFgLATACQAYADAPAVQAOAVgCAaIAAADQgBANgCAEQgIAfgOAkQgOAigYAyQgMAygPAlIgBgIg");
	this.shape_34.setTransform(98.943,175.9907,1.1202,1.1202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_21}]}).to({state:[{t:this.shape_25,p:{rotation:0.9491,x:98.856,y:175.9494}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_24,p:{rotation:0,x:103.65,y:135.65}}]},8).to({state:[{t:this.shape_27,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:99.4407,y:175.8441}},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_26,p:{regX:1.4,regY:-11.1,rotation:-1.7041,x:102.35,y:134.95}}]},2).to({state:[{t:this.shape_27,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:99.6259,y:175.732}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_26,p:{regX:1.5,regY:-10.5,rotation:-2.4781,x:102.5,y:135.75}}]},2).to({state:[{t:this.shape_25,p:{rotation:5.5306,x:99.8849,y:175.812}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_24,p:{rotation:-3.4081,x:103.5,y:135.7}}]},3).to({state:[{t:this.shape_25,p:{rotation:6.4796,x:99.8814,y:174.8502}},{t:this.shape_28},{t:this.shape_24,p:{rotation:-3.4081,x:103.5,y:135.7}}]},3).to({state:[{t:this.shape_27,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:99.8571,y:175.8093}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:5.5306,x:89.8425,y:203.8358}},{t:this.shape_29}]},9).to({state:[{t:this.shape_30,p:{rotation:4.2233,x:99.5701,y:175.7279}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:4.2233,x:90.2536,y:203.9792}},{t:this.shape_26,p:{regX:1.6,regY:-10.5,rotation:-2.4781,x:102.5,y:135.7}}]},2).to({state:[{t:this.shape_31},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:2.7836,x:90.7807,y:204.3188}},{t:this.shape_26,p:{regX:1.4,regY:-11.2,rotation:-1.7041,x:102.15,y:134.85}}]},2).to({state:[{t:this.shape_30,p:{rotation:0.9491,x:98.772,y:175.948}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_32}]},2).to({state:[{t:this.shape_30,p:{rotation:0.9491,x:98.772,y:175.948}},{t:this.shape_22,p:{scaleX:1.1201,scaleY:1.1201,rotation:0.9491,x:91.0839,y:204.6864}},{t:this.shape_32}]},2).to({state:[]},1).to({state:[{t:this.shape_34},{t:this.shape_22,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:91.7039,y:204.8529}},{t:this.shape_33}]},3).wait(1));

	// Layer_2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DD4732").s().p("AAeCsQgbgSAAgEQAAgEgeg7Qggg6gcglQgcgmAEgQQAFgRAAgKQABgKgDgPQgEgRAJgWQAFgOALgJQAGgEAIgDQAVgHAVAMQALAHAHALIAAgBIADAFIADAEQAQAdAWApQAZAwAvB2QAFAPADAMQAFAXgIAUQgJAWgVAIQgGACgHAAQgQAAgTgOg");
	this.shape_35.setTransform(120.55,131.1,1.1202,1.1202,0,0,0,-2.4,-9.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIIg6A+QgaBJgLA9QgIgTgHgrg");
	this.shape_36.setTransform(110.8587,190.9068,1.1202,1.1202);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DD4732").s().p("Ag2CIIAFghQgGAHgSAGQgVAGgPgFIAlhGQAkhDATgoQASgoADgGIAJgOQAFgJAQgIQAFgDAFgCQARgFARAHQAVAIAIAYQAIAWgJAXIgBADIgHAPQgPAagWAbQgWAdgiAnIg8BFIABgJg");
	this.shape_37.setTransform(123.4194,166.0015,1.1202,1.1202);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7C12D").s().p("Ag2A5IgFgpQAIgLAFgQQgGABgJAFIACgKQAWgdAng8QAPAEAVgFQASgGAGgHIgFAhIgBAIQgYAagiAkQgaBJgLA9QgIgTgHgrg");
	this.shape_38.setTransform(110.1396,190.5149,1.1202,1.1202,1.1833);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgcAng9QAPAEAVgGQASgFAGgHIgFAhIgBAJIg6A+QgaBJgLA8QgIgTgHgqg");
	this.shape_39.setTransform(109.0566,187.9093,1.1201,1.1201,5.0432);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgdAng8QAPAEAVgGQASgFAGgHIgFAhIgBAJQgYAZgiAkQgaBJgLA9QgIgTgHgqg");
	this.shape_40.setTransform(108.0349,187.6412,1.1201,1.1201,7.6935);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7C12D").s().p("Ag2A6IgFgqQAIgKAFgRQgGABgJAGIACgLQAWgdAng8QAPAEAVgGQASgFAGgHIgFAhIgBAJIg6A9QgaBJgLA9QgIgTgHgqg");
	this.shape_41.setTransform(108.9549,187.7879,1.1201,1.1201,5.0432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37,p:{rotation:0,x:123.4194,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_36,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:110.8587,y:190.9068}},{t:this.shape_35,p:{regX:-2.4,x:120.55,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]}).to({state:[{t:this.shape_37,p:{rotation:1.1833,x:123.2118,y:165.8744,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_38,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:110.1396,y:190.5149}},{t:this.shape_35,p:{regX:-2.3,x:120.6,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},8).to({state:[{t:this.shape_37,p:{rotation:3.0423,x:123.3606,y:165.5311,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_36,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:109.4965,y:189.7336}},{t:this.shape_35,p:{regX:-3.2,x:119.5,regY:-10,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.3}}]},2).to({state:[{t:this.shape_37,p:{rotation:5.0432,x:123.7572,y:164.2058,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_39},{t:this.shape_35,p:{regX:-2.5,x:120.15,regY:-10.7,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:129.6}}]},2).to({state:[{t:this.shape_37,p:{rotation:6.6933,x:123.928,y:164.805,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_38,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:108.5509,y:188.0754}},{t:this.shape_35,p:{regX:-2.5,x:120.3,regY:-10.2,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.2}}]},3).to({state:[{t:this.shape_37,p:{rotation:7.6935,x:123.8153,y:164.6436,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_40},{t:this.shape_35,p:{regX:-2.5,x:120.3,regY:-10.2,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.2}}]},3).to({state:[{t:this.shape_37,p:{rotation:6.6933,x:123.8724,y:164.7985,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_36,p:{scaleX:1.1201,scaleY:1.1201,rotation:6.6933,x:108.4953,y:188.0689}},{t:this.shape_35,p:{regX:-2.5,x:120.25,regY:-10.2,scaleX:1.1202,scaleY:1.1202,rotation:-2.9664,y:130.2}}]},9).to({state:[{t:this.shape_37,p:{rotation:5.0432,x:123.6555,y:164.0844,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_41},{t:this.shape_35,p:{regX:-2.4,x:120.15,regY:-10.9,scaleX:1.1202,scaleY:1.1202,rotation:-2.1742,y:129.4}}]},2).to({state:[{t:this.shape_37,p:{rotation:3.0423,x:123.1929,y:165.5222,scaleX:1.1201,scaleY:1.1201}},{t:this.shape_38,p:{scaleX:1.1201,scaleY:1.1201,rotation:3.0423,x:109.3288,y:189.7246}},{t:this.shape_35,p:{regX:-3.2,x:119.3,regY:-10.2,scaleX:1.1201,scaleY:1.1201,rotation:-0.9491,y:130.1}}]},2).to({state:[{t:this.shape_37,p:{rotation:1.1833,x:123.0438,y:165.8709,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_36,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:109.9716,y:190.5114}},{t:this.shape_35,p:{regX:-2.2,x:120.55,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[{t:this.shape_37,p:{rotation:1.1833,x:123.0438,y:165.8709,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_36,p:{scaleX:1.1202,scaleY:1.1202,rotation:1.1833,x:109.9716,y:190.5114}},{t:this.shape_35,p:{regX:-2.2,x:120.55,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},2).to({state:[]},1).to({state:[{t:this.shape_37,p:{rotation:0,x:123.2513,y:166.0015,scaleX:1.1202,scaleY:1.1202}},{t:this.shape_38,p:{scaleX:1.1202,scaleY:1.1202,rotation:0,x:110.6907,y:190.9068}},{t:this.shape_35,p:{regX:-2.2,x:120.6,regY:-9.3,scaleX:1.1202,scaleY:1.1202,rotation:0,y:131.1}}]},3).wait(1));

	// Layer_4
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DD4732").s().p("AhZClQgHgDgGgEQgHgGgEgHIgHgQIgCgQQAAgLACgLIABgDIACgFQAJgkAfhAQAFgTADgbQAUgkAYglQAMgSAOgHQAxgWAxA0QAgAigLAqQgPAfgkAtQgnAzg0BBQgcAggYAAQgIAAgHgEg");
	this.shape_42.setTransform(120.95,64.25,1.0206,1.0206,0,-10.2121,169.7879,5.3,-16.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DD4732").s().p("AhAAEQggglgRgYIgJgOQgEgGgCgHQgCgJgBgHIAAgDIAAgEQACgKAFgIQADgHAFgFQAOgPAVgBQAUAAAOAKQAKAIAHALIgFgJQA+AmAsBaQArBaALAMQAVAugxALQhthYg0g+g");
	this.shape_43.setTransform(133,123.15,1.1719,1.1719,0,-29.3039,150.6961,9.4,12.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLg");
	this.shape_44.setTransform(117.8329,128.8537,0.3257,0.3043,0,-19.9878,-19.3628);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9C7A8").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAAQgLAMQgMAMgRAAQgQAAgLgMg");
	this.shape_45.setTransform(127.275,134.5182,0.3257,0.3043,0,-19.9878,-19.3628);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMAMQgLALgRAAQgQAAgLgLg");
	this.shape_46.setTransform(124.4411,135.1593,0.3257,0.3043,0,-19.9878,-19.3628);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgPAAgMgLg");
	this.shape_47.setTransform(121.5505,134.6915,0.3257,0.3043,0,-19.9878,-19.3628);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgLALgRAAQgQAAgLgLg");
	this.shape_48.setTransform(118.99,133.5593,0.3257,0.3043,0,-19.9878,-19.3628);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9C7A8").s().p("AgIDgQgbgEgWgKIgogTQgTgJgSgNIghgXQgRgMgTgSQgTgSgKgVQgLgVAIgXQAIgWANgTQANgTgEgQQgEgPgLgRQgLgQAIgUQAIgUASgLIAWgPIABgBQAjgPAQAAIACAAQAEgBAFAAQAkgEAZgCQAYgCAWAAQAVAAAPgFQAOgFAJgHQAIgHAVgJQAZgKAdACQAdABAYASQAYASALAUQAMAVACAiQACAjgRAaQgQAXgUAUIgDAJQgHAVgLAVQgbAxgWAkIgQAYQgRAYgRAWQgJAIgLAGQgUAMgcAAIgIgBg");
	this.shape_49.setTransform(131.2,125.05,0.3263,0.3049,0,-19.9892,-19.3645,18.8,-7.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DD4732").s().p("AhZClQgHgDgGgEQgHgGgEgHIgHgQIgCgQQAAgLACgLIABgDIACgFQAJgkAfhAQAFgTADgbQATgkAYglQAMgSAOgHQAygWAwA0QAhAigLAqQgQAfgkAtQgnAzgzBBQgcAggYAAQgIAAgHgEg");
	this.shape_50.setTransform(121.4,63.85,1.021,1.021,0,-10.2258,169.7742,6.3,-17.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_51.setTransform(118.5491,129.3831,0.326,0.3047,0,-19.5828,-18.9395);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9C7A8").s().p("AgbAdQgMgMAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLAMQgNALgQAAQgPAAgMgLg");
	this.shape_52.setTransform(125.1203,135.7451,0.326,0.3047,0,-19.5828,-18.9395);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9C7A8").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLg");
	this.shape_53.setTransform(119.6744,134.1027,0.326,0.3047,0,-19.5828,-18.9395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49,p:{regX:18.8,regY:-7.1,scaleX:0.3263,scaleY:0.3049,skewX:-19.9892,skewY:-19.3645,x:131.2,y:125.05}},{t:this.shape_48,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9878,skewY:-19.3628,x:118.99,y:133.5593}},{t:this.shape_47,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9878,skewY:-19.3628,x:121.5505,y:134.6915}},{t:this.shape_46,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9878,skewY:-19.3628,x:124.4411,y:135.1593}},{t:this.shape_45,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9878,skewY:-19.3628,x:127.275,y:134.5182}},{t:this.shape_44,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9878,skewY:-19.3628,x:117.8329,y:128.8537}},{t:this.shape_43,p:{regX:9.4,regY:12.8,scaleX:1.1719,scaleY:1.1719,skewX:-29.3039,skewY:150.6961,x:133,y:123.15}},{t:this.shape_42,p:{regX:5.3,regY:-16.4,scaleX:1.0206,scaleY:1.0206,skewX:-10.2121,skewY:169.7879,x:120.95,y:64.25}}]}).to({state:[{t:this.shape_49,p:{regX:18,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.9,y:125.1}},{t:this.shape_48,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5818,skewY:-18.9386,x:119.7341,y:134.107}},{t:this.shape_47,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5818,skewY:-18.9386,x:122.2896,y:135.2596}},{t:this.shape_46,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5818,skewY:-18.9386,x:125.1803,y:135.7495}},{t:this.shape_45,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5818,skewY:-18.9386,x:128.0219,y:135.1288}},{t:this.shape_44,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5818,skewY:-18.9386,x:118.6088,y:129.3872}},{t:this.shape_43,p:{regX:10,regY:12.7,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55}},{t:this.shape_42,p:{regX:6.3,regY:-17.3,scaleX:1.021,scaleY:1.021,skewX:-10.2255,skewY:169.7745,x:121.3,y:64}}]},13).to({state:[{t:this.shape_49,p:{regX:18,regY:-8.4,scaleX:0.3268,scaleY:0.3054,skewX:-19.3203,skewY:-18.6956,x:131.75,y:125.1}},{t:this.shape_48,p:{scaleX:0.3261,scaleY:0.3047,skewX:-19.3186,skewY:-18.6952,x:119.5759,y:133.7833}},{t:this.shape_47,p:{scaleX:0.3261,scaleY:0.3047,skewX:-19.3186,skewY:-18.6952,x:122.1261,y:134.947}},{t:this.shape_46,p:{scaleX:0.3261,scaleY:0.3047,skewX:-19.3186,skewY:-18.6952,x:125.0146,y:135.4494}},{t:this.shape_45,p:{scaleX:0.3261,scaleY:0.3047,skewX:-19.3186,skewY:-18.6952,x:127.8591,y:134.8407}},{t:this.shape_44,p:{scaleX:0.3261,scaleY:0.3047,skewX:-19.3186,skewY:-18.6952,x:118.4722,y:129.0578}},{t:this.shape_43,p:{regX:9.9,regY:12.9,scaleX:1.1726,scaleY:1.1726,skewX:-28.6,skewY:151.4,x:132.85,y:124.7}},{t:this.shape_42,p:{regX:6.3,regY:-17.3,scaleX:1.021,scaleY:1.021,skewX:-10.2255,skewY:169.7745,x:121.3,y:64}}]},2).to({state:[{t:this.shape_49,p:{regX:18.1,regY:-8.3,scaleX:0.3267,scaleY:0.3054,skewX:-19.583,skewY:-18.9562,x:131.95,y:125.1}},{t:this.shape_53,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5828,skewY:-18.9395,x:119.6744,y:134.1027}},{t:this.shape_48,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5828,skewY:-18.9395,x:122.2297,y:135.2552}},{t:this.shape_52,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5828,skewY:-18.9395,x:125.1203,y:135.7451}},{t:this.shape_45,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5828,skewY:-18.9395,x:127.9618,y:135.1243}},{t:this.shape_51,p:{scaleX:0.326,scaleY:0.3047,skewX:-19.5828,skewY:-18.9395,x:118.5491,y:129.3831}},{t:this.shape_43,p:{regX:10,regY:12.7,scaleX:1.1726,scaleY:1.1726,skewX:-28.861,skewY:151.139,x:132.85,y:124.55}},{t:this.shape_50,p:{regX:6.3,regY:-17.4,scaleX:1.021,scaleY:1.021,skewX:-10.2258,skewY:169.7742,x:121.4,y:63.85}}]},16).to({state:[{t:this.shape_49,p:{regX:18.7,regY:-6.9,scaleX:0.3262,scaleY:0.3049,skewX:-19.9875,skewY:-19.3647,x:131.05,y:125.05}},{t:this.shape_53,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:118.8667,y:133.5785}},{t:this.shape_48,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:121.4268,y:134.7107}},{t:this.shape_52,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:124.3171,y:135.1788}},{t:this.shape_45,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:127.1506,y:134.538}},{t:this.shape_51,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:117.7101,y:128.8735}},{t:this.shape_43,p:{regX:9.5,regY:12.9,scaleX:1.1719,scaleY:1.1719,skewX:-29.3039,skewY:150.6961,x:132.9,y:123.2}},{t:this.shape_50,p:{regX:5.2,regY:-16.4,scaleX:1.0205,scaleY:1.0205,skewX:-10.2109,skewY:169.7891,x:120.95,y:64.15}}]},2).to({state:[{t:this.shape_49,p:{regX:18.7,regY:-6.9,scaleX:0.3262,scaleY:0.3049,skewX:-19.9875,skewY:-19.3647,x:131.05,y:125.05}},{t:this.shape_53,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:118.8667,y:133.5785}},{t:this.shape_48,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:121.4268,y:134.7107}},{t:this.shape_52,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:124.3171,y:135.1788}},{t:this.shape_45,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:127.1506,y:134.538}},{t:this.shape_51,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:117.7101,y:128.8735}},{t:this.shape_43,p:{regX:9.5,regY:12.9,scaleX:1.1719,scaleY:1.1719,skewX:-29.3039,skewY:150.6961,x:132.9,y:123.2}},{t:this.shape_50,p:{regX:5.2,regY:-16.4,scaleX:1.0205,scaleY:1.0205,skewX:-10.2109,skewY:169.7891,x:120.95,y:64.15}}]},2).to({state:[]},1).to({state:[{t:this.shape_49,p:{regX:18.7,regY:-6.9,scaleX:0.3262,scaleY:0.3049,skewX:-19.9875,skewY:-19.3647,x:131.05,y:125.05}},{t:this.shape_53,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:118.8667,y:133.5785}},{t:this.shape_48,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:121.4268,y:134.7107}},{t:this.shape_52,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:124.3171,y:135.1788}},{t:this.shape_45,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:127.1506,y:134.538}},{t:this.shape_51,p:{scaleX:0.3257,scaleY:0.3043,skewX:-19.9843,skewY:-19.3569,x:117.7101,y:128.8735}},{t:this.shape_43,p:{regX:9.5,regY:12.9,scaleX:1.1719,scaleY:1.1719,skewX:-29.3039,skewY:150.6961,x:132.9,y:123.2}},{t:this.shape_50,p:{regX:5.2,regY:-16.4,scaleX:1.0205,scaleY:1.0205,skewX:-10.2109,skewY:169.7891,x:120.95,y:64.15}}]},3).wait(1));

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

	// Layer_6
	this.instance = new lib.MomakOb3odlakta("single",1);
	this.instance.setTransform(173.55,133.5,0.5701,0.6552,0,137.2641,136.413,15.5,11.7);

	this.instance_1 = new lib.MomakOb3shaka("single",0);
	this.instance_1.setTransform(132.9,81.25,0.6643,0.6705,0,161.692,160.2647,16.6,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},229).to({state:[]},3).to({state:[{t:this.instance_1},{t:this.instance}]},64).to({state:[]},3).wait(101));

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
	this.shape_15.graphics.f("#A25050").s().p("AArATQgugignAbQgEACgEAAQgEgBgCgDQgDgEABgEQABgDADgCQAyglA7ArQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgCg");
	this.shape_15.setTransform(80.0649,87.8591);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABjBjQgFgIgDgSQgGgeAEgUQAFgOADgFQAJgIALAEIABAAIgBAEIgBAEQgBAGABAHQABADACACQAEADAFgBIAHgEQAKAegIAgQgDASgMAEIgFABQgJAAgJgKgAh4BGQgFgIgDgRQgGgeAEgVQAEgMAEgGQAJgIAKACQAAABABAAQAAABAAAAQABAAAAABQABAAABAAIgCACQgFAKACALQABAFAEABQADACAFgCIAGgFIAAAAQAJAcgHAgQgDASgLADIgHACQgIAAgIgKgABKgsQgGgHAEgJQADgFAJgIQAIgGAHgCQAJgCARACIAOAFQAHAEABAHQAAAIgIABQgHACgPgIQgMgBgJANQgFAIgIAAQgEAAgFgCgAhghMQgIgNgMABQgPAIgHgCQgIgBAAgIQABgHAHgEIAOgFQARgCAJACQAHACAIAGQAJAIADAFQAEAJgGAHQgFACgEAAQgIAAgGgIg");
	this.shape_16.setTransform(79.475,60.9561);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},6).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_1},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},102).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_1},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},86).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_1},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_16},{t:this.shape_2},{t:this.shape_1},{t:this.shape_15}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},102).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_1},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},2).wait(80));

	// Layer_5
	this.instance_2 = new lib.MomakOb3dolakta("single",0);
	this.instance_2.setTransform(137.65,133.8,0.6696,0.6656,0,-9.239,-7.7521,18.2,18.9);

	this.instance_3 = new lib.MomakOb3odlakta("single",1);
	this.instance_3.setTransform(144.35,172.8,0.5702,0.6553,0,3.8963,3.0465,15.2,11.8);

	this.instance_4 = new lib.MomakOb3shaka("single",0);
	this.instance_4.setTransform(134.4,238.35,0.6643,0.6706,0,28.3249,26.897,16.6,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23,skewX:28.3249,skewY:26.897,x:134.4,y:238.35,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:3.8963,skewY:3.0465,x:144.35,y:172.8,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]}).to({state:[{t:this.instance_4,p:{regX:15.2,regY:3.4,skewX:13.6195,skewY:12.1926,x:144.5,y:226.4,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:-0.8299,skewY:-1.6807,x:144.7,y:172.75,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},30).to({state:[{t:this.instance_4,p:{regX:16.8,regY:23.2,skewX:1.1422,skewY:-0.2847,x:150.1,y:238.8,scaleX:0.4054,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:-6.8099,skewY:-7.6585,x:144.35,y:172.95,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:12.8,regY:3.3,skewX:-26.1499,skewY:155.2842,x:155.85,y:226.75,scaleX:0.4487,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:-12.1757,skewY:168.6714,x:142.95,y:175.7,regX:15,regY:12,scaleY:0.6552,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:-40.5722,skewY:140.8563,x:166.8,y:237.35,scaleX:0.6643,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:-16.1415,skewY:164.7082,x:143.2,y:175.55,regX:15.1,regY:11.9,scaleY:0.6552,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23,skewX:-42.809,skewY:138.6196,x:169.5,y:236.4,scaleX:0.6643,scaleY:0.6706,startPosition:1}},{t:this.instance_3,p:{skewX:-18.3793,skewY:162.4704,x:143.45,y:175.5,regX:15.1,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regX:12.8,regY:3.3,skewX:-26.1499,skewY:155.2842,x:155.85,y:226.75,scaleX:0.4487,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:-12.1757,skewY:168.6714,x:142.95,y:175.7,regX:15,regY:12,scaleY:0.6552,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},33).to({state:[{t:this.instance_4,p:{regX:16.8,regY:23.2,skewX:1.1422,skewY:-0.2847,x:150.1,y:238.8,scaleX:0.4054,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:-6.8099,skewY:-7.6585,x:144.35,y:172.95,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:15.2,regY:3.4,skewX:13.6195,skewY:12.1926,x:144.5,y:226.4,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:-0.8299,skewY:-1.6807,x:144.7,y:172.75,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:14,regY:5,skewX:18.9371,skewY:17.5098,x:140.75,y:227.05,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:1.7027,skewY:0.8541,x:144.45,y:172.85,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23,skewX:28.3249,skewY:26.897,x:134.4,y:238.35,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:3.8963,skewY:3.0465,x:144.35,y:172.8,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23.1,skewX:45.8795,skewY:44.45,x:120.75,y:230.55,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:21.4511,skewY:20.6009,x:150.1,y:171.1,regX:15.2,regY:11.8,scaleY:0.6552,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.3,scaleY:0.6655,skewX:-18.4325,skewY:-16.9438,x:138.5,y:133.55,scaleX:0.6696,regY:18.9}}]},141).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23,skewX:65.8449,skewY:64.4173,x:108.15,y:212.7,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:41.4163,skewY:40.5674,x:156,y:166.85,regX:15.3,regY:11.8,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-28.7157,skewY:-27.2273,x:138.75,y:133.1,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-47.9589,skewY:-46.4719,x:140.4,y:131.4,scaleX:0.6695,regY:18.9}},{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:96.4031,skewY:94.9757,x:100.95,y:171.85,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:71.9743,skewY:71.1248,x:165.35,y:156.7,regX:15.3,regY:11.8,scaleY:0.6552,scaleX:0.5702}}]},2).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6243,skewX:-78.9488,skewY:-77.4613,x:141.7,y:126.2,scaleX:0.6695,regY:19.1}}]},3).to({state:[{t:this.instance_4,p:{regX:16.7,regY:22.9,skewX:126.6467,skewY:-51.9239,x:138.7,y:59.2,scaleX:0.6643,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:151.0772,skewY:-28.0726,x:175.35,y:114.35,regX:15.2,regY:11.8,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-97.7243,skewY:-96.2395,x:141.5,y:125.05,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:117.4357,skewY:-61.1341,x:129.1,y:65.9,scaleX:0.6643,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:141.8664,skewY:-37.2821,x:174.3,y:114.35,regX:15.3,regY:11.7,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-97.7243,skewY:-96.2395,x:141.5,y:125.05,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.7,skewX:117.9415,skewY:-60.6267,x:130.05,y:68.65,scaleX:0.6642,scaleY:0.6704,startPosition:1}},{t:this.instance_3,p:{skewX:142.3756,skewY:-36.7748,x:174.7,y:117.6,regX:15.3,regY:11.7,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-93.2242,skewY:-91.7396,x:141.75,y:125.55,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:116.901,skewY:-61.67,x:130.3,y:72.45,scaleX:0.6642,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:141.331,skewY:-37.8177,x:175.9,y:120.55,regX:15.2,regY:11.7,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-88.2569,skewY:-86.7716,x:142.4,y:126.05,scaleX:0.6695,regY:19}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.8,skewX:116.3883,skewY:-62.1811,x:129.9,y:64.8,scaleX:0.6642,scaleY:0.6704,startPosition:1}},{t:this.instance_3,p:{skewX:140.8208,skewY:-38.3298,x:175.95,y:112.55,regX:15.2,regY:11.6,scaleY:0.6551,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7273,skewX:-98.9588,skewY:-97.4736,x:142.1,y:125,scaleX:0.6695,regY:18.9}}]},8).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:124.166,skewY:-54.4037,x:134.7,y:54.7,scaleX:0.6643,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:148.5978,skewY:-30.5522,x:173.85,y:108.1,regX:15.3,regY:11.7,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.8,skewX:125.8997,skewY:-52.6723,x:136.65,y:53.5,scaleX:0.6642,scaleY:0.6704,startPosition:1}},{t:this.instance_3,p:{skewX:150.3319,skewY:-28.8193,x:174.15,y:108.1,regX:15.3,regY:11.6,scaleY:0.6551,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.8,skewX:116.3883,skewY:-62.1811,x:129.9,y:64.8,scaleX:0.6642,scaleY:0.6704,startPosition:1}},{t:this.instance_3,p:{skewX:140.8208,skewY:-38.3298,x:175.95,y:112.55,regX:15.2,regY:11.6,scaleY:0.6551,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7273,skewX:-98.9588,skewY:-97.4736,x:142.1,y:125,scaleX:0.6695,regY:18.9}}]},9).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:116.901,skewY:-61.67,x:130.3,y:72.45,scaleX:0.6642,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:141.331,skewY:-37.8177,x:175.9,y:120.55,regX:15.2,regY:11.7,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-88.2569,skewY:-86.7716,x:142.4,y:126.05,scaleX:0.6695,regY:19}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.8,skewX:115.9002,skewY:-62.6721,x:129.45,y:73.25,scaleX:0.6642,scaleY:0.6704,startPosition:1}},{t:this.instance_3,p:{skewX:140.3315,skewY:-38.8186,x:175.85,y:120.6,regX:15.1,regY:11.6,scaleY:0.6551,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-88.2569,skewY:-86.7716,x:142.4,y:126.05,scaleX:0.6695,regY:19}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.8,skewX:116.3883,skewY:-62.1811,x:129.9,y:64.8,scaleX:0.6642,scaleY:0.6704,startPosition:1}},{t:this.instance_3,p:{skewX:140.8208,skewY:-38.3298,x:175.95,y:112.55,regX:15.2,regY:11.6,scaleY:0.6551,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7273,skewX:-98.9588,skewY:-97.4736,x:142.1,y:125,scaleX:0.6695,regY:18.9}}]},9).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:124.166,skewY:-54.4037,x:134.7,y:54.7,scaleX:0.6643,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:148.5978,skewY:-30.5522,x:173.85,y:108.1,regX:15.3,regY:11.7,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:124.166,skewY:-54.4037,x:134.7,y:54.7,scaleX:0.6643,scaleY:0.6705,startPosition:1}},{t:this.instance_3,p:{skewX:148.5978,skewY:-30.5522,x:173.85,y:108.1,regX:15.3,regY:11.7,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.1,scaleY:0.7274,skewX:-106.4405,skewY:-104.956,x:141.15,y:124.25,scaleX:0.6695,regY:18.9}}]},3).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6243,skewX:-78.9488,skewY:-77.4613,x:141.7,y:126.2,scaleX:0.6695,regY:19.1}}]},14).to({state:[{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-47.9589,skewY:-46.4719,x:140.4,y:131.4,scaleX:0.6695,regY:18.9}},{t:this.instance_4,p:{regX:16.6,regY:22.9,skewX:96.4031,skewY:94.9757,x:100.95,y:171.85,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:71.9743,skewY:71.1248,x:165.35,y:156.7,regX:15.3,regY:11.8,scaleY:0.6552,scaleX:0.5702}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23,skewX:65.8449,skewY:64.4173,x:108.15,y:212.7,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:41.4163,skewY:40.5674,x:156,y:166.85,regX:15.3,regY:11.8,scaleY:0.6552,scaleX:0.5701}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6655,skewX:-28.7157,skewY:-27.2273,x:138.75,y:133.1,scaleX:0.6696,regY:18.9}}]},3).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23.1,skewX:45.8795,skewY:44.45,x:120.75,y:230.55,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:21.4511,skewY:20.6009,x:150.1,y:171.1,regX:15.2,regY:11.8,scaleY:0.6552,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.3,scaleY:0.6655,skewX:-18.4325,skewY:-16.9438,x:138.5,y:133.55,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23.1,skewX:29.066,skewY:27.6386,x:134,y:238.15,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:4.6364,skewY:3.7885,x:145,y:172.8,regX:15.3,regY:11.8,scaleY:0.6552,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.9439,skewY:-8.4592,x:137.75,y:133.8,scaleX:0.6696,regY:18.9}}]},2).to({state:[{t:this.instance_4,p:{regX:16.6,regY:23,skewX:28.3249,skewY:26.897,x:134.4,y:238.35,scaleX:0.6643,scaleY:0.6706,startPosition:0}},{t:this.instance_3,p:{skewX:3.8963,skewY:3.0465,x:144.35,y:172.8,regX:15.2,regY:11.8,scaleY:0.6553,scaleX:0.5702}},{t:this.instance_2,p:{regX:18.2,scaleY:0.6656,skewX:-9.239,skewY:-7.7521,x:137.65,y:133.8,scaleX:0.6696,regY:18.9}}]},4).wait(90));

	// Layer_4
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EB7965").s().p("AiCIqQgIgEgIgDIAGhJQADgugDiIIgJkYQgFicAJhiQAUjrB0iAQARACAVAFQBPAQAsAeQhDBGgpCYQgsCdADEIQACCNAUCdQAQB2ALBjQhrgQhLgkg");
	this.shape_17.setTransform(110.7107,166.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#647081").s().p("ABJJjIg4gHQhrgQhLgkQgIgEgIgDQgngWg4gnQgfgSgHgSQgFgKgBgXIABgMQACgxALhcQAMhjADgsQACgjAChDQAGjDADgtQAJiJAWhoQAOhIAWghQAZgjAqgEQAqgEAQAAQAQAAAaAFQASACAVAFQBOAQAsAeIBGAeQA3AXAvA5QAwA6gYB5QgZB6gFBIQgGBHACDZQACDZAPCQQguASgZAGQgaAHghACQgbACghAAIghgCg");
	this.shape_18.setTransform(114.2108,166.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(400));

	// Layer_1
	this.instance_5 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_5.setTransform(122.6,264.15,0.4984,0.5129,0,-3.7626,0,36.2,139.6);

	this.instance_6 = new lib.MomakOb3nogaleva("synched",0);
	this.instance_6.setTransform(93.75,246.2,0.4985,0.5131,0,2.2208,6.3489,36.5,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(400));

	// Layer_3
	this.instance_7 = new lib.MomakOb3dolakta("single",0);
	this.instance_7.setTransform(94.8,112.7,0.6171,0.6535,0,1.1239,2.6105,14.8,11.9);

	this.instance_8 = new lib.MomakOb3odlakta("single",1);
	this.instance_8.setTransform(95.2,158.35,0.5255,0.6039,0,14.6152,13.7618,15.3,12.1);

	this.instance_9 = new lib.MomakOb3shaka("single",1);
	this.instance_9.setTransform(77.2,215.45,0.6642,0.6705,0,34.2459,32.8172,17,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{regX:17,scaleY:0.6705,skewX:34.2459,skewY:32.8172,x:77.2,y:215.45,regY:23.1}},{t:this.instance_8,p:{skewX:14.6152,skewY:13.7618,x:95.2,y:158.35,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_7,p:{regY:11.9,scaleY:0.6535,skewX:1.1239,skewY:2.6105,y:112.7,x:94.8,scaleX:0.6171,regX:14.8}}]}).to({state:[{t:this.instance_9,p:{regX:17.1,scaleY:0.6704,skewX:36.7186,skewY:35.2886,x:72.8,y:214.7,regY:23.1}},{t:this.instance_8,p:{skewX:17.0853,skewY:16.2325,x:93.2,y:158.45,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_7,p:{regY:12,scaleY:0.6534,skewX:3.5948,skewY:5.0816,y:112.9,x:94.8,scaleX:0.6171,regX:14.8}}]},30).to({state:[{t:this.instance_9,p:{regX:17.1,scaleY:0.6704,skewX:43.1537,skewY:41.7266,x:63.95,y:212.1,regY:23}},{t:this.instance_8,p:{skewX:23.5233,skewY:22.6697,x:90.55,y:158.55,regX:15.5,scaleX:0.5254,regY:12.1,scaleY:0.6039}},{t:this.instance_7,p:{regY:12,scaleY:0.6535,skewX:6.5797,skewY:8.067,y:112.95,x:94.75,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_9,p:{regX:13,scaleY:0.6705,skewX:40.5883,skewY:39.156,x:66.55,y:198.4,regY:5.4}},{t:this.instance_8,p:{skewX:25.939,skewY:25.0902,x:88.9,y:156,regX:15.2,scaleX:0.5255,regY:12,scaleY:0.6039}},{t:this.instance_7,p:{regY:11.9,scaleY:0.6535,skewX:10.4042,skewY:11.8931,y:111.6,x:95.25,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_9,p:{regX:12.9,scaleY:0.6705,skewX:45.3153,skewY:43.884,x:63.1,y:196.6,regY:5.4}},{t:this.instance_8,p:{skewX:30.6678,skewY:29.8167,x:88.9,y:156.2,regX:15.2,scaleX:0.5255,regY:11.9,scaleY:0.6039}},{t:this.instance_7,p:{regY:11.9,scaleY:0.6535,skewX:10.4042,skewY:11.8931,y:111.6,x:95.25,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_9,p:{regX:16.9,scaleY:0.6705,skewX:52.2513,skewY:50.8193,x:52.55,y:204.7,regY:22.9}},{t:this.instance_8,p:{skewX:32.6189,skewY:31.7684,x:87.3,y:155.95,regX:15.1,scaleX:0.5255,regY:11.8,scaleY:0.604}},{t:this.instance_7,p:{regY:11.8,scaleY:0.6535,skewX:12.3555,skewY:13.8442,y:111.6,x:95.2,scaleX:0.6172,regX:14.8}}]},3).to({state:[{t:this.instance_9,p:{regX:13,scaleY:0.6705,skewX:40.5883,skewY:39.156,x:66.55,y:198.4,regY:5.4}},{t:this.instance_8,p:{skewX:25.939,skewY:25.0902,x:88.9,y:156,regX:15.2,scaleX:0.5255,regY:12,scaleY:0.6039}},{t:this.instance_7,p:{regY:11.9,scaleY:0.6535,skewX:10.4042,skewY:11.8931,y:111.6,x:95.25,scaleX:0.6171,regX:14.8}}]},33).to({state:[{t:this.instance_9,p:{regX:17.1,scaleY:0.6704,skewX:43.1537,skewY:41.7266,x:63.95,y:212.1,regY:23}},{t:this.instance_8,p:{skewX:23.5233,skewY:22.6697,x:90.55,y:158.55,regX:15.5,scaleX:0.5254,regY:12.1,scaleY:0.6039}},{t:this.instance_7,p:{regY:12,scaleY:0.6535,skewX:6.5797,skewY:8.067,y:112.95,x:94.75,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_9,p:{regX:17.1,scaleY:0.6704,skewX:36.7186,skewY:35.2886,x:72.8,y:214.7,regY:23.1}},{t:this.instance_8,p:{skewX:17.0853,skewY:16.2325,x:93.2,y:158.45,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_7,p:{regY:12,scaleY:0.6534,skewX:3.5948,skewY:5.0816,y:112.9,x:94.8,scaleX:0.6171,regX:14.8}}]},2).to({state:[{t:this.instance_9,p:{regX:17.1,scaleY:0.6705,skewX:35.4719,skewY:34.0435,x:75.05,y:215.1,regY:23.1}},{t:this.instance_8,p:{skewX:15.8412,skewY:14.9854,x:94.35,y:158.5,regX:15.5,scaleX:0.5254,regY:12.2,scaleY:0.6039}},{t:this.instance_7,p:{regY:11.9,scaleY:0.6535,skewX:2.3487,skewY:3.8352,y:112.75,x:94.9,scaleX:0.6171,regX:14.9}}]},2).to({state:[{t:this.instance_9,p:{regX:17,scaleY:0.6705,skewX:34.2459,skewY:32.8172,x:77.2,y:215.45,regY:23.1}},{t:this.instance_8,p:{skewX:14.6152,skewY:13.7618,x:95.2,y:158.35,regX:15.3,scaleX:0.5255,regY:12.1,scaleY:0.6039}},{t:this.instance_7,p:{regY:11.9,scaleY:0.6535,skewX:1.1239,skewY:2.6105,y:112.7,x:94.8,scaleX:0.6171,regX:14.8}}]},3).wait(319));

	// Layer_8
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,51,51,0.298)").s().p("AggCmQg6hRhugSQhFgKgmgVQgmgVgShLQgShNB1g2QB0g3AMgDQCagdBKBYQBLBWAcAMQDpAphVCyQgWAvgtAdQhVA2hGAAQhaAAg/hbg");
	this.shape_19.setTransform(103.6097,316.4268);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(400));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.3,1.5,146.3,340.7);


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

	// ruka_L
	this.instance = new lib.Devojkao1shaka("single",0);
	this.instance.setTransform(112.35,120.2,1.1423,1.1423,148.2156,0,0,16.2,23.1);

	this.instance_1 = new lib.Devojkao1odlakta("single",0);
	this.instance_1.setTransform(178,195.95,1.1424,1.0297,136.7558,0,0,14.8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleY:1.0297,rotation:136.7558,x:178,y:195.95,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:148.2156,x:112.35,y:120.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},51).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:146.2082,x:176.55,y:167.6,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:157.6693,x:124.25,y:82.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},3).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:180.1,y:143.45,regY:11.3,skewX:158.4001,skewY:-21.6016}},{t:this.instance,p:{rotation:169.6105,x:150.5,y:65.1,regX:13.5,regY:4.2,scaleX:1.1423,scaleY:1.1423}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:180.1,y:143.35,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:148.1,y:65.95,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:182.1,y:164.05,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:150.1,y:86.65,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:183.4,y:175.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:181.9,y:167.95,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},7).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:176.3,y:144.75,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:144.3,y:67.35,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:169.6,y:121,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:137.6,y:43.6,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:169.1,y:117.55,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:137.1,y:40.15,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:175.7,y:133.8,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:143.7,y:56.4,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.2,y:148.55,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.2,y:71.15,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:183.4,y:175.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:185.4,y:180.25,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:153.4,y:102.85,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:181.35,y:163,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:149.35,y:85.6,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:177.3,y:148.15,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:145.3,y:70.75,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:169.6,y:121,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:137.6,y:43.6,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:167.55,y:119.05,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:135.55,y:41.65,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:174.1,y:138.75,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:142.1,y:61.35,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.2,y:151.55,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.2,y:74.15,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:183.4,y:175.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:151.4,y:97.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:184.4,y:177.3,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:152.4,y:99.9,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:182.35,y:168.4,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:150.35,y:91,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},4).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.85,y:160.05,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.85,y:82.65,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:180.1,y:143.35,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:148.1,y:65.95,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:0,x:179.6,y:140.9,regY:11.3,skewX:156.6964,skewY:-23.3056}},{t:this.instance,p:{rotation:167.9066,x:147.6,y:63.5,regX:13.5,regY:4.2,scaleX:1.1422,scaleY:1.1422}}]},3).to({state:[{t:this.instance_1,p:{scaleY:1.0296,rotation:146.2082,x:176.55,y:167.6,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:157.6693,x:124.25,y:82.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},7).to({state:[{t:this.instance_1,p:{scaleY:1.0297,rotation:136.7558,x:178,y:195.95,regY:11.2,skewX:0,skewY:0}},{t:this.instance,p:{rotation:148.2156,x:112.35,y:120.2,regX:16.2,regY:23.1,scaleX:1.1423,scaleY:1.1423}}]},4).to({state:[]},3).wait(264));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A25050").s().p("AAgAgQghgYgqgNQgGgCgDgFQgDgGACgGQACgGAGgDQAFgDAGADQAuAPAlAaQAFAEABAGQABAGgEAFQgDAFgGABIgCAAQgGAAgDgDg");
	this.shape.setTransform(14.5251,129.3634,1.7397,1.7397,-12.4767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D3BE").s().p("ABtBUQgFgDgEgFQgDgFAAgHQgBgGADgFQACgGAFgEQAFgFAHgCQAEgBAJABQANABAGACQAKADAEAIQAEAFgBAJQAAAKgGAFQgDADgHABIgLABIgQACIgDABQgHAAgFgDgAiagKQgEgCgEgEQgFgGAAgMQAAgHADgMIAEgTIABgFIACgFQADgEAJAAQAIABADADQAEAEAAAKQABAVgFAUQgDAOgIADIgEABIgFgBg");
	this.shape_1.setTransform(17.6887,100.9256,1.7398,1.7398,-12.4763);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABZBHQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgDgEQgCgFACgFQACgEACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAIACAAQAFABACADQADAEgCAHQgBAEgDADQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgBAAgAhggwQgDgCgBgEIAAgHQABgFAFgDQACgBADAAIABAAIAEABIADADIACAFIAAAFQgCAGgFACIgBABIgEAAIgFgBg");
	this.shape_2.setTransform(15.5304,77.992,1.7398,1.7398,-12.4763);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABTBuQgEgCgCgDQgEgFgCgKQgEgTADgSQADgTAKgQQAFgHAEgDQADgCADAAQAEAAACACQAFACABAIQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgDABgBAEQgCAGACAEIACAEQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAEAAQgBAXgEAZQgCAJgDAFQgEAIgIABIgCAAQgDAAgCgCgAhhgHQgDgCgDgDQgDgFgCgKQgEgTADgSQADgTAKgQQAEgHAFgCIAGgDQADAAADACQAFACABAHIgBAAQgDAAgCACQgEACgCAGIAAAHQACAEACABIAFACIAEgBQAAAYgFAZQgBAKgDAEQgFAIgHABIgCAAQgDAAgDgCg");
	this.shape_3.setTransform(13.3474,83.7627,1.7398,1.7398,-12.4763);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#815451").s().p("AB9BYIgFgNQgEgPgQgMQgNgKgSgGIgMgEQgFgDgCgFQAAgDADgEQACgDAEgCQAFgBAJAAQAUAFAPALQARALAMARQAJAPABALQAAAIgDAEQgCAEgDABIgHACQgFgCgCgGgAhBgsIgJgEIgGgEIgFgHQgHgIgKgDQgLgDgKAEIgGABIgFACQgDABgDgBQgDgBgBgCQgDgEABgFQACgEADgEQAIgHAMgBQAJgCALACQAMADALAIQALAGAHAKQAEAGABAEQABAHgFAFIgEABIgCAAg");
	this.shape_4.setTransform(14.3456,67.1175,1.7398,1.7398,-12.4763);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F48B73").s().p("AgXByIgBAAIgCgBQgKgFgFgIQgEgGgBgLQAAgJAEgTQARhOAdhMQAEgJACgCIAGgFQADgBADABQAGACACAIQAAAEgBAJIgGAcIgSBAIgQBDQgCAJABAGQAQAAAJAAQAOACAKAEQAIACABAFQABACAAADIgDAGQgEAFgGACIgNACIgWABQgNAAgJgCg");
	this.shape_5.setTransform(10.7335,96.226,1.7398,1.7398,-12.4763);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3C5A9").s().p("ABdF3QgOhNgtgdQgxgBhMgaQhMgbgqgsQgpgsgThYQgShYAOhkQAPhkAZhxIAKgtQAVAIAZAFQBIAMBIgEQBcCBCXAWQgHBUAoBWQhADVAeBhQAZBSAuAzQgyAegtAAQgwAAgsghg");
	this.shape_6.setTransform(36.4342,101.8666,1.7398,1.7398,-12.4763);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#926461").s().p("AgdBZQhCgWgugzQgLgMgDgJQgBgEACgDQADgDAHAEQAMAHAZATQAXARANAIQA9AlBWgDIAZAAQANABAKAGQAAAHgHAFQgFACgJACQgaAFgaAAQgpAAgngNgAAXA1QgfgCgfgNQg4gXgvg0QgQgSgDgPQgBgIAFgDQAFgCAHAIQAFAGAOAMQAgAcATANQAdAUAcAJQARAGAoAHQAlAGAUAIQgDADgHACQgZAIgbAAIgLAAgABQATQg5gKgwgYQg1gbgjgpQgIgKAEgFQADgEAGABIAIAFIAgAYQATAOAOAJQAeARAnANQAcAJAuAKIAcAGQAPAFALAHQgRAFgXAAQgTAAgXgEg");
	this.shape_7.setTransform(-3.8601,16.7753,1.7398,1.7398,-12.4763);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#815451").s().p("ABeJQQl3inhUhPQgOgDgPgGQgigMgbgVQgdgWgSgdQgWgjgJgxQgGgnADg0QAIiXBCiMIACgDQhGgtALhuQAMh2BuglQBSgbBXgJQAugkAygRQDDhDCGCJQAxANAqAXQBKAqAzBJQBbCFgiCdQAMB7gOBNQAeBFAcBgQAbBgghBTQgiBTgvAqQhQBJhiAAQhOAAhZgug");
	this.shape_8.setTransform(64.7688,58.9831,1.7398,1.7398,-12.4763);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABgA/IgEgCIgGgDIgGgFQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAABgBQABgCAHACQABgBAFADIABAAIAFADIAFAEQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAACIgHABIgDgBgAhXgwIgFgCIgGgDIgFgFQgBgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQACgDAGADQACgBAEADIACAAIAFACIAEAEQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAIAAADIgIABIgCgBg");
	this.shape_9.setTransform(16.716,81.2934,1.7398,1.7398,-12.4763);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABlBTIgEgBIgDgBIgHgEIgIgHQgGgFgCgGQgEgHAAgEIgBgDIAAAAIAAgCQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQACgIAMgDQAFgBAGACIACAAIAGACQAAAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAQADABAEACQAFAEADAFIgBAAQgFgDgBABQgHgDgBADQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAABIAGAFIAGADIAEACQABALgDALIgFAGIgCAAIgIgBgAhSgdIgEgBIgEgBIgGgEIgJgGQgFgFgDgGQgEgHAAgEIgBgDIABgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQADgIAMgDQAEgCAHACIACAAIAFACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAEAAAEADQAFADADAFIgCAAQgEgDgCABQgGgCgCACQAAABAAAAQAAAAABABQAAAAAAABQAAABABAAIAFAFIAGADIAFACQAAALgDAMIgEAFIgCAAIgIgBg");
	this.shape_10.setTransform(13.1947,83.4296,1.7398,1.7398,-12.4763);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#815451").s().p("AB8BVQgEgBgEgDIgFgHIgEgHQgGgJgKgEQgKgEgKABIgGABIgGABQgDAAgCgBIgFgDQgCgFACgEQACgFAFgDQAIgFAMAAQAJAAALAEQALAEAKAJQAKAIAGALQADAHAAAEQAAAHgFAEIgDABIgEgBgAg8gbQgEgBgEgDIgEgGIgFgHQgFgJgKgFQgLgEgKACIgFAAIgGABQgDABgDgBIgEgEQgCgEACgFQACgEAEgDQAJgGALABQAKgBAKAEQAMAFAKAJQAJAIAGALQADAGABAFQAAAHgFADIgEABIgEgBg");
	this.shape_11.setTransform(13.5342,71.1008,1.7398,1.7398,-12.4763);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghgSYAAAAACAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAGgBAAAAIAAAAYAAAAgDgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgFAAAAAAIAAAA");
	this.shape_12.setTransform(31.4779,87.9782,1.7397,1.7397,-12.4767);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgigSYAAAAADAGAGAFYAFAGAIAFAIAFYAIAEAJAEAIABYAIABAFgBAAAAIAAAAYAAAAgCgFgGgFYgFgGgIgFgIgFYgIgEgJgEgIgBYgIgBgGAAAAAAIAAAA");
	this.shape_13.setTransform(-4.1857,76.9824,1.7397,1.7397,-12.4767);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#815451").s().p("AB/BPQgEAAgEgDIgFgGIgFgHQgHgIgLgDQgKgDgKACIgGACIgFABIgGAAQgEgBgBgCQgDgEACgFQACgEAEgEQAIgGALgBQAJgBALADQANADAKAHQALAHAGALQAFAGAAAEQACAHgFAEQgCACgDAAIgDgBgAg7gaQgEAAgEgDIgFgGIgFgHQgHgIgKgDQgLgDgKACIgFACIgGABIgGAAQgDgBgBgCQgDgEACgFQABgEAFgEQAIgGAKgBQAKgBALADQAMADALAHQAKAHAHALQAEAGABAEQABAHgFAEQgCACgCAAIgEgBg");
	this.shape_14.setTransform(13.2982,75.0514,1.7397,1.7397,-12.4767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},12).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},64).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},112).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},17).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},64).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(107));

	// ruka_L
	this.instance_2 = new lib.Devojkao1shaka("single",0);
	this.instance_2.setTransform(127.65,342.75,1.1426,1.1426,34.4982,0,0,16.5,6.8);

	this.instance_3 = new lib.Devojkao1dolakta("single",0);
	this.instance_3.setTransform(126.25,213.45,1.1427,1.1427,-17.3844,0,0,17.2,40.7);

	this.instance_4 = new lib.Devojkao1odlakta("single",0);
	this.instance_4.setTransform(138.95,249.45,1.1426,1.1426,6.5385,0,0,14.4,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:6.5385,x:138.95,y:249.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:34.4982,x:127.65,y:342.75,startPosition:0}}]}).to({state:[{t:this.instance_4,p:{regX:14.8,regY:11.3,scaleX:1.1424,scaleY:1.0297,rotation:33.0439,x:153.35,y:249.2}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.2,regY:23.2,scaleX:1.1423,scaleY:1.1423,rotation:44.5043,x:95.35,y:330.85,startPosition:0}}]},43).to({state:[{t:this.instance_4,p:{regX:14.8,regY:11.4,scaleX:1.1424,scaleY:1.0297,rotation:47.5429,x:159.8,y:243.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.2,regY:23.2,scaleX:1.1423,scaleY:1.1423,rotation:59.0022,x:83.35,y:308,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.8,regY:11.3,scaleX:1.1424,scaleY:1.0297,rotation:80.7526,x:168.05,y:235.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.2,regY:23.1,scaleX:1.1424,scaleY:1.1424,rotation:92.2124,x:68.75,y:247.45,startPosition:0}}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4,p:{regX:14.8,regY:11.3,scaleX:1.1424,scaleY:1.0297,rotation:80.7526,x:168.05,y:235.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.2,regY:23.1,scaleX:1.1424,scaleY:1.1424,rotation:92.2124,x:68.75,y:247.45,startPosition:0}}]},3).to({state:[{t:this.instance_4,p:{regX:14.8,regY:11.4,scaleX:1.1424,scaleY:1.0297,rotation:47.5429,x:159.8,y:243.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.2,regY:23.2,scaleX:1.1423,scaleY:1.1423,rotation:59.0022,x:83.35,y:308,startPosition:0}}]},3).to({state:[{t:this.instance_4,p:{regX:14.8,regY:11.3,scaleX:1.1424,scaleY:1.0297,rotation:33.0439,x:153.35,y:249.2}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.2,regY:23.2,scaleX:1.1423,scaleY:1.1423,rotation:44.5043,x:95.35,y:330.85,startPosition:0}}]},3).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:6.5385,x:138.95,y:249.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:34.4982,x:127.65,y:342.75,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:6.5385,x:138.95,y:249.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:34.4982,x:127.65,y:342.75,startPosition:0}}]},133).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.6,scaleX:1.1427,scaleY:1.1427,rotation:12.02,x:136.95,y:250.15}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:39.9782,x:116.75,y:341.9,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:20.5152,x:136.5,y:250.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:48.4733,x:103.05,y:338.05,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.5,scaleX:1.1425,scaleY:1.1425,rotation:38.303,x:119.8,y:256.05}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.6,scaleX:1.1425,scaleY:1.1425,rotation:66.2634,x:61.2,y:329.3,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.4,scaleX:1.1425,scaleY:1.1425,rotation:53.2513,x:101.4,y:254.2}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.7,scaleX:1.1425,scaleY:1.1425,rotation:81.2117,x:25.7,y:309.9,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.3,scaleX:1.1426,scaleY:1.1426,rotation:71.4903,x:98.35,y:254.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.7,scaleX:1.1425,scaleY:1.1425,rotation:99.4502,x:8.95,y:283.55,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.4,scaleX:1.1426,scaleY:1.1426,rotation:91.7005,x:98.3,y:254.1}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.7,scaleX:1.1426,scaleY:1.1426,rotation:119.6604,x:4.35,y:250.7,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.4,scaleX:1.1426,scaleY:1.1426,rotation:103.9808,x:86.15,y:246.65}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.7,scaleX:1.1426,scaleY:1.1426,rotation:131.941,x:-4.9,y:223.35,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:117.2094,x:72.3,y:237.25}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:145.169,x:-10.9,y:193.65,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:117.9503,x:64.7,y:229.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.9,scaleX:1.1426,scaleY:1.1426,rotation:145.909,x:-17.95,y:184.5,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:117.9503,x:57.45,y:219.85}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.9,scaleX:1.1426,scaleY:1.1426,rotation:145.909,x:-25.2,y:175.05,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:114.9638,x:39.55,y:203.25}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:142.924,x:-45.4,y:163.05,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:92.7349,x:61.8,y:223.5}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.9,scaleX:1.1426,scaleY:1.1426,rotation:120.694,x:-32,y:218.35,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:57.9875,x:93.55,y:249}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1427,scaleY:1.1427,rotation:85.9468,x:13.55,y:298.35,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:20.5152,x:136.5,y:250.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:48.4733,x:103.05,y:338.05,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:32.4681,x:122.15,y:253.05}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:60.4265,x:71.15,y:331.9,startPosition:0}}]},10).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:44.736,x:106.55,y:251.95}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:72.6941,x:39.85,y:318.2,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:60.73,x:88,y:246.75}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.7,scaleX:1.1426,scaleY:1.1426,rotation:88.6884,x:5.85,y:292.05,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:71.0006,x:79,y:239.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:98.9581,x:-10,y:269.3,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:68.5079,x:81.5,y:241.1}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:96.4653,x:-6.1,y:274.8,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:80.9898,x:85.6,y:244.65}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.7,scaleX:1.1426,scaleY:1.1426,rotation:118.6625,x:-7.25,y:258,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:83.5219,x:85.65,y:244.65}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.5,scaleX:1.1426,scaleY:1.1426,rotation:112.6826,x:-7.75,y:254.7,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:68.7948,x:61.8,y:244.15}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:85.9956,x:-27.05,y:277.85,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.6,scaleX:1.1425,scaleY:1.1425,rotation:66.0907,x:62.05,y:244.5}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1425,scaleY:1.1425,rotation:69.099,x:-24.9,y:284.1,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.5,scaleX:1.1425,scaleY:1.1425,rotation:62.2953,x:82.45,y:256.85}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.8,scaleX:1.1425,scaleY:1.1425,rotation:91.2497,x:-0.7,y:299.75,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.7,regY:11.5,scaleX:1.1425,scaleY:1.1425,rotation:61.0703,x:82.65,y:257}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.7,regY:6.8,scaleX:1.1425,scaleY:1.1425,rotation:82.0359,x:-0.95,y:302.8,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.7,regY:11.5,scaleX:1.1425,scaleY:1.1425,rotation:63.0448,x:109.1,y:263.8}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.7,regY:6.7,scaleX:1.1425,scaleY:1.1425,rotation:84.011,x:24.05,y:306.65,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.7,regY:11.5,scaleX:1.1425,scaleY:1.1425,rotation:37.3695,x:127.7,y:262}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.8,regY:6.6,scaleX:1.1425,scaleY:1.1425,rotation:58.3362,x:69.75,y:337.5,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1427,scaleY:1.1427,rotation:23.9678,x:136.75,y:250.5}},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:57.1189,x:97.95,y:336,startPosition:0}},{t:this.instance_3}]},2).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:20.5152,x:136.5,y:250.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:48.4733,x:103.05,y:338.05,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:20.5152,x:136.5,y:250.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:48.4733,x:103.05,y:338.05,startPosition:0}}]},3).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:57.9875,x:93.55,y:249}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1427,scaleY:1.1427,rotation:85.9468,x:13.55,y:298.35,startPosition:0}}]},46).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:92.7349,x:61.8,y:223.5}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.9,scaleX:1.1426,scaleY:1.1426,rotation:120.694,x:-32,y:218.35,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:114.9638,x:39.55,y:203.25}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:142.924,x:-45.4,y:163.05,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:117.9503,x:57.45,y:219.85}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.9,scaleX:1.1426,scaleY:1.1426,rotation:145.909,x:-25.2,y:175.05,startPosition:2}}]},2).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:117.9503,x:64.7,y:229.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.9,scaleX:1.1426,scaleY:1.1426,rotation:145.909,x:-17.95,y:184.5,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.5,scaleX:1.1426,scaleY:1.1426,rotation:117.2094,x:72.3,y:237.25}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:145.169,x:-10.9,y:193.65,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.5,regY:11.4,scaleX:1.1426,scaleY:1.1426,rotation:103.9808,x:86.15,y:246.65}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.7,scaleX:1.1426,scaleY:1.1426,rotation:131.941,x:-4.9,y:223.35,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.4,scaleX:1.1426,scaleY:1.1426,rotation:91.7005,x:98.3,y:254.1}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.7,scaleX:1.1426,scaleY:1.1426,rotation:119.6604,x:4.35,y:250.7,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.3,scaleX:1.1426,scaleY:1.1426,rotation:71.4903,x:98.35,y:254.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.7,scaleX:1.1425,scaleY:1.1425,rotation:99.4502,x:8.95,y:283.55,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.4,scaleX:1.1425,scaleY:1.1425,rotation:53.2513,x:101.4,y:254.2}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.7,scaleX:1.1425,scaleY:1.1425,rotation:81.2117,x:25.7,y:309.9,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:14.6,regY:11.5,scaleX:1.1425,scaleY:1.1425,rotation:38.303,x:119.8,y:256.05}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.6,regY:6.6,scaleX:1.1425,scaleY:1.1425,rotation:66.2634,x:61.2,y:329.3,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:20.5152,x:136.5,y:250.3}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:48.4733,x:103.05,y:338.05,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.3,regY:11.6,scaleX:1.1427,scaleY:1.1427,rotation:12.02,x:136.95,y:250.15}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.4,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:39.9782,x:116.75,y:341.9,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{regX:14.4,regY:11.6,scaleX:1.1426,scaleY:1.1426,rotation:6.5385,x:138.95,y:249.45}},{t:this.instance_3},{t:this.instance_2,p:{regX:16.5,regY:6.8,scaleX:1.1426,scaleY:1.1426,rotation:34.4982,x:127.65,y:342.75,startPosition:0}}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({regX:15.2,regY:16.3,scaleX:1.1426,scaleY:1.2381,rotation:-13.6183,x:123.4,y:178.4},0).wait(2).to({regY:16.2,rotation:-24.3751,x:122,y:178.2},0).wait(3).to({rotation:-39.1327,x:122.45,y:178.5},0).wait(3).to({regY:16.4,scaleY:1.1501,rotation:-64.391,x:121.95,y:177.15},0).wait(3).to({scaleY:1.0939,rotation:-87.3657,x:121.9,y:177.05},0).wait(4).to({regX:15.3,regY:16.3,scaleX:1.1425,scaleY:1.0956,rotation:0,skewX:-112.8855,skewY:67.1141,x:119.5,y:164.15},0).wait(4).to({skewX:-115.5708,skewY:64.4284},0).wait(4).to({scaleX:1.1426,skewX:-90.3527,skewY:89.6465,y:164.2},0).wait(2).to({scaleX:1.1425,skewX:-80.3744,skewY:99.6249,y:164.15},0).wait(7).to({regY:16.4,skewX:-87.3706,skewY:92.6287,x:119.55,y:164.1},0).wait(2).to({skewX:-109.1176,skewY:70.8814,y:164.05},0).wait(2).to({regX:15.4,regY:16.3,skewX:-134.0746,skewY:45.9248,y:164.25},0).wait(2).to({skewX:-136.526,skewY:43.4734,x:119.5},0).wait(4).to({regX:15.5,skewX:-114.2876,skewY:65.713,x:119.6,y:164.4},0).wait(2).to({regX:15.4,skewX:-102.0865,skewY:77.9133,x:119.55,y:164.2},0).wait(2).to({regX:15.3,regY:16.4,skewX:-79.5941,skewY:100.4064,x:119.6},0).wait(2).to({skewX:-77.1433,skewY:102.8565},0).wait(4).to({regX:15.4,scaleY:1.0955,skewX:-88.3415,skewY:91.6578,y:164.25},0).wait(2).to({scaleY:1.0956,skewX:-105.0838,skewY:74.9147},0).wait(2).to({regX:15.3,scaleY:1.0955,skewX:-131.0384,skewY:48.9608,x:119.55,y:164.2},0).wait(2).to({regX:15.4,scaleX:1.1424,skewX:-133.2538,skewY:46.7465,x:119.6,y:164.25},0).wait(4).to({regX:15.5,skewX:-112.2555,skewY:67.743,x:119.7,y:164.4},0).wait(2).to({regX:15.4,skewX:-104.8221,skewY:75.1775,x:119.6,y:164.25},0).wait(2).to({regX:15.3,scaleX:1.1425,skewX:-75.3421,skewY:104.6576,y:164.2},0).wait(2).to({scaleX:1.1424,skewX:-73.391,skewY:106.6081,x:119.55},0).wait(4).to({scaleX:1.1425,skewX:-81.3742,skewY:98.6249,x:119.6},0).wait(2).to({skewX:-93.779,skewY:86.2207,x:119.55},0).wait(2).to({regX:15.4,scaleX:1.1424,skewX:-107.7939,skewY:72.2059,x:119.6,y:164.35},0).wait(3).to({regX:15.5,scaleX:1.1425,skewX:-110.9902,skewY:69.0095,y:164.45},0).wait(7).to({regX:15.2,scaleX:1.1426,scaleY:1.0939,rotation:-87.3657,skewX:0,skewY:0,x:121.9,y:177.05},0).wait(4).to({scaleY:1.1501,rotation:-64.391,x:121.95,y:177.15},0).wait(3).to({regY:16.2,scaleY:1.2381,rotation:-39.1327,x:122.45,y:178.5},0).wait(3).to({rotation:-24.3751,x:122,y:178.2},0).wait(3).to({regY:16.3,rotation:-13.6183,x:123.4,y:178.4},0).wait(2).to({regX:17.2,regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:-17.3844,x:126.25,y:213.45},0).wait(133).to({startPosition:0},0).wait(2).to({regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:17.4,scaleX:1.1426,scaleY:1.1426,rotation:-1.5626,x:119.75,y:216.35},0).wait(1).to({scaleX:1.1427,scaleY:1.1427,rotation:13.3854,x:111.55,y:215.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:25.1418,x:106.8,y:213.05},0).wait(1).to({rotation:38.3697,x:100.25,y:209.3},0).wait(1).to({regX:15.1,regY:11.3,rotation:46.8046,x:119.35,y:181},0).wait(1).to({regX:17.4,regY:40.6,rotation:57.0493,x:92.65,y:201.45},0).wait(1).to({regX:17.3,scaleX:1.1428,scaleY:1.1428,rotation:79.0403,x:77.05,y:194.95},0).wait(2).to({regX:17.2,regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:56.8099,x:93.45,y:201.6},0).wait(1).to({regY:40.6,rotation:22.063,x:107.05,y:213.1},0).wait(1).to({scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5},0).wait(10).to({rotation:-3.4563,x:118.75,y:214.6},0).wait(2).to({scaleX:1.1427,scaleY:1.1427,rotation:8.8106,x:111.3,y:213.7},0).wait(1).to({regY:40.7,rotation:24.8027,x:103.15,y:211.3},0).wait(2).to({regY:40.6,rotation:35.0749,x:100.3,y:207.25},0).wait(2).to({rotation:32.5828,x:101.35,y:208.05},0).wait(2).to({rotation:26.8566,x:104.35,y:209.7},0).wait(2).to({startPosition:0},0).wait(2).to({regX:17.3,rotation:45.8234,x:91.95,y:211},0).wait(2).to({startPosition:0},0).wait(2).to({rotation:25.0861,x:101.05,y:216.65},0).wait(2).to({startPosition:0},0).wait(2).to({regX:17.4,rotation:4.6216,x:113.35,y:219},0).wait(2).to({rotation:-8.3634,x:121.1,y:218.45},0).wait(2).to({regX:17.2,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(46).to({scaleX:1.1427,scaleY:1.1427,rotation:22.063,x:107.05,y:213.1},0).wait(1).to({regY:40.7,rotation:56.8099,x:93.45,y:201.6},0).wait(1).to({regX:17.3,regY:40.6,scaleX:1.1428,scaleY:1.1428,rotation:79.0403,x:77.05,y:194.95},0).wait(2).to({regX:17.4,scaleX:1.1427,scaleY:1.1427,rotation:57.0493,x:92.65,y:201.45},0).wait(1).to({regX:15.1,regY:11.3,rotation:46.8046,x:119.35,y:181},0).wait(1).to({regX:17.4,regY:40.6,rotation:38.3697,x:100.25,y:209.3},0).wait(1).to({rotation:25.1418,x:106.8,y:213.05},0).wait(1).to({rotation:13.3854,x:111.55,y:215.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1.1426,scaleY:1.1426,rotation:-1.5626,x:119.75,y:216.35},0).wait(1).to({regX:17.2,scaleX:1.1428,scaleY:1.1428,rotation:-15.4094,x:125.4,y:213.5},0).wait(1).to({startPosition:0},0).wait(1).to({regY:40.7,scaleX:1.1427,scaleY:1.1427,rotation:-17.3844,x:126.25,y:213.45},0).wait(8));

	// torzo
	this.instance_5 = new lib.Devojkao1torzo("synched",0);
	this.instance_5.setTransform(84.3,263.25,1.1428,1.1428,0,0,0,56.9,106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(400));

	// ruka_D
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#97AAAF","#27505B"],[0,1],115,-2.1,-112.1,-2.1).s().p("AkqGVIspnYQgcgRgEgVIAAgDIAAgGIAAhAQACAPAOAOIAQAMIMpHXQBPAqBZgqITcrXQAHgEAFgGQAEgEACgEIAAgBQAIgIAAgFIAAA2QABAOgJAQIAAAAQgGAKgMAJIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_15.setTransform(-16.3051,254.3966,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#97AAAF","#27505B"],[0,1],63.8,7,-221.3,7).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAAPQAAAFgIAHIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_16.setTransform(11.8299,270.075,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#504F4F").s().p("AGbI2IBQgvIBcA1IhQAwgAElHyIBQgvIBXAzIhPAvgAJxG3IBJgsIBdA2IhKArgAGTGxIBLgsIBXAyIhLAtgACvGuIBQgvIBYAyIhQAwgALYF6IBOgvIBdA2IhPAugAH8FzIBKgsIAegRIgBAAIBOgvIBYAzIhrA/IgBABIhJAsgABEFwQgRgIgXgPIhIgqQgYgNgegSIhdg2IgegRIhfg3IgegSIhGgoQgXgLgfgVIhhg4IBPguIBiA3IAeARIBeA3IAeARIBfA3QA2AeAUANIAxAcIAcASIABAAIBhA4IAdASIABgBIBXAyIhQAwgANEE5IBIgqIBbA2IhHAqgAGGEvIBKgsIBYAzIhKAsgACoEqIBLgtIBXAyIhLAtgAOpD+IAhgUIBcA1IghAUgALPD2IBIgrIBXAzIhIAqgAHuDxIBOguIBYAzIhOAvgAERDrIBLgsIBWAyIhKAsgAAoDgIBMgtIBiA5IhMAsgAM0C6IAhgUIBYAzIgiAUgAJaCxIBHgqIBYAzIhIAqgAF5CtIBOguIBXAyIhOAvgACSChIBLgsIBhA4IhLAtgAhSCZIBMgtIBcA2IhLAtgAK+B1IAigUIBYA0IgiAUgAHlBtIBHgqIBXAyIhHArgAD6BjIBOguIBhA5IhOAugAAXBaIBMgsIBcA1IhLAtgAjPBRIBMgtIBgA3IhMAtgAJKAxIAhgUIBXAzIghAUgAFlAkIBIgqIBiA3IhIArgACAAcIBNgtIBdA1IhNAugAhlASIBMgsIBeA2IhLAtgAlLAJIBMgtIBfA3IhMAtgAHLgYIAhgUIBiA4IgiAUgADrgiIBIgrIBdA2IhIAqgAADgrIBNguIBgA3IhOAtgAjig1IBMgtIBfA3IhMAsgAnKhAIBMgtIBhA4IhMAugAFQhfIAigUIBdA2IgiAUgABuhrIBIgrIBfA4IhIArgAh4h0IBNguIBeA4IhMAugAlgh/IBMgtIBhA5IhMAsgApHiIIBNgtIBeA2IhMAugADUinIAhgUIBfA3IghAUgAgNizIBHgrIBfA3IhJArgAj2i+IBNgtIBhA4IhNAugAndjHIBMguIBfA3IhMAugArEjQIBMguIBgA3IhNAugAusjWIBQgvIBcA1IhPAvgABYjwIAhgTIBfA3IghAUgAiMj9IBIgrIBhA5IhIArgAlzkGIBNguIBfA3IhNAugApCkBIgKgGIglgWIhjg5IBNguIBxBBIABABIBnA8IhNAugAs/kXIBNguIBdA2IhNAtgAwlkcIBQgvIBbA0IhQAwgAgrk8IAjgTIAKAGIBZA0IghAUgAkJlFIBJgrIBfA3IhJArgAnvlPIBMgtIBfA3IhNAtgAu4ldIBNguIBcA1IhNAugAijmCIAigUIBhA5IgiATgAmGmNIBJgsIBfA4IhIAqgAppmWIBMgtIBcA2IhMAtgAtNmcIBOguIBbA1IhOAugAkfnKIAhgUIBfA3IghAUgAoAnUIBJgsIBdA2IhJAsgArincIBSgwIACgBIBgg5IBaA1IhJAsIAAAAIgEACIgFADIhhA5gAmZoRIAhgUIBdA2IgiAUgAoRpXIAhgUIBbA1IgiAUg");
	this.shape_17.setTransform(10.2633,289.3404,0.7162,0.7537,0,119.1042,117.0067);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#504F4F").s().p("AA/ElIo3lOIgFgEQgOgLAPgLIGMjlIAFgDQAVgIAaAQIADAAIIqE/QAeAPgQASIgHAGImHDmIgDABQgJAEgJAAQgPAAgOgJg");
	this.shape_18.setTransform(2.9409,234.7149,0.717,0.7544,0,119.097,117.0068);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AGbI2IBQgvIBcA1IhQAwgAElHyIBQgvIBXAzIhPAvgAJxG3IBJgsIBdA2IhKArgAGTGxIBLgsIBXAyIhLAtgACvGuIBQgvIBYAyIhQAwgALYF6IBOgvIBdA2IhPAugAH8FzIBKgsIAegRIgBAAIBOgvIBYAzIhrA/IgBABIhJAsgABEFwQgRgIgXgPIhIgqQgYgNgegSIhdg2IgegRIhfg3IgegSIhGgoQgXgLgfgVIhhg4IBPguIBiA3IAeARIBeA3IAeARIBfA3QA2AeAUANIAxAcIAcASIABAAIBhA4IAdASIABgBIBXAyIhQAwgANEE5IBIgqIBbA2IhHAqgAGGEvIBKgsIBYAzIhKAsgACoEqIBLgtIBXAyIhLAtgAOpD+IAhgUIBcA1IghAUgALPD2IBIgrIBXAzIhIAqgAHuDxIBOguIBYAzIhOAvgAERDrIBLgsIBWAyIhKAsgAAoDgIBMgtIBiA5IhMAsgAM0C6IAhgUIBYAzIgiAUgAJaCxIBHgqIBYAzIhIAqgAF5CtIBOguIBXAyIhOAvgACSChIBLgsIBhA4IhLAtgAhSCZIBMgtIBcA2IhLAtgAK+B1IAigUIBYA0IgiAUgAHlBtIBHgqIBXAyIhHArgAD6BjIBOguIBhA5IhOAugAAXBaIBMgsIBcA1IhLAtgAjPBRIBMgtIBgA3IhMAtgAJKAxIAhgUIBXAzIghAUgAFlAkIBIgqIBiA3IhIArgACAAcIBNgtIBdA1IhNAugAhlASIBMgsIBeA2IhLAtgAlLAJIBMgtIBfA3IhMAtgAHLgYIAhgUIBiA4IgiAUgADrgiIBIgrIBdA2IhIAqgAADgrIBNguIBgA3IhOAtgAjig1IBMgtIBfA3IhMAsgAnKhAIBMgtIBhA4IhMAugAFQhfIAigUIBdA2IgiAUgABuhrIBIgrIBfA4IhIArgAh4h0IBNguIBeA4IhMAugAlgh/IBMgtIBhA5IhMAsgApHiIIBNgtIBeA2IhMAugADUinIAhgUIBfA3IghAUgAgNizIBHgrIBfA3IhJArgAj2i+IBNgtIBhA4IhNAugAndjHIBMguIBfA3IhMAugArEjQIBMguIBgA3IhNAugAusjWIBQgvIBcA1IhPAvgABYjwIAhgTIBfA3IghAUgAiMj9IBIgrIBhA5IhIArgAlzkGIBNguIBfA3IhNAugApCkBIgKgGIglgWIhjg5IBNguIBxBBIABABIBnA8IhNAugAs/kXIBNguIBdA2IhNAtgAwlkcIBQgvIBbA0IhQAwgAgrk8IAjgTIAKAGIBZA0IghAUgAkJlFIBJgrIBfA3IhJArgAnvlPIBMgtIBfA3IhNAtgAu4ldIBNguIBcA1IhNAugAijmCIAigUIBhA5IgiATgAmGmNIBJgsIBfA4IhIAqgAppmWIBMgtIBcA2IhMAtgAtNmcIBOguIBbA1IhOAugAkfnKIAhgUIBfA3IghAUgAoAnUIBJgsIBdA2IhJAsgArincIBSgwIACgBIBgg5IBaA1IhJAsIAAAAIgEACIgFADIhhA5gAmZoRIAhgUIBdA2IgiAUgAoRpXIAhgUIBbA1IgiAUg");
	this.shape_19.setTransform(7.8464,289.234,0.717,0.7544,0,119.097,117.0068);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#97AAAF","#27505B"],[0,1],115,-2.1,-112.1,-2.1).s().p("AkqGVIspnYQgcgRgEgVIAAgDIAAgGIAAhAQACAPAOAOIAQAMIMpHXQBPAqBZgqITcrXQAHgEAFgGQAEgEACgEIAAgBQAIgIAAgFIAAA2QABAOgJAQIAAAAQgGAKgMAJIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_20.setTransform(-23.205,250.5412,0.9751,1.0262,0,119.1049,-62.9931);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#97AAAF","#27505B"],[0,1],63.8,7,-221.3,7).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAAPQAAAFgIAHIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_21.setTransform(4.9076,266.2071,0.9751,1.0262,0,119.1049,-62.9931);

	this.instance_6 = new lib.Devojkao1rukaD("synched",0);
	this.instance_6.setTransform(37.15,158.1,1.1428,1.1428,-2.2606,0,0,17.3,14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#97AAAF","#27505B"],[0,1],69.1,59.8,-69,-59.7).s().p("AuSh+IT8rQIIpPTIzvLKg");
	this.shape_22.setTransform(-19.2875,274.5125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C545E").s().p("AujnPIAQguII2PNITurJIATAhI0XLWg");
	this.shape_23.setTransform(-19.1375,312.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#97AAAF","#27505B"],[0,1],69.1,59.8,-69,-59.7).s().p("AuSh+IT8rQIIpPTIzvLKg");
	this.shape_24.setTransform(-21.5375,280.0625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C545E").s().p("AujnPIAQguII2PNITurJIATAhI0XLWg");
	this.shape_25.setTransform(-21.3875,318.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#97AAAF","#27505B"],[0,1],114.3,-0.4,-113.5,-0.4).s().p("AkqGbIspnYQgcgRgEgVIAAgDIAAgGIAAhAQACAPAOAOIAQAMIMpHXQBPAqBZgqITcrXQAHgEAFgGQAEgEACgEIAAgBQAIgNAAgMIAABCQABAOgJAQIAAAAQgGAKgMAJIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_26.setTransform(-36.1611,321.1625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#97AAAF","#27505B"],[0,1],63.1,8.1,-222.7,8.1).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAADQAAALgIANIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_27.setTransform(-36.175,290.4012);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#97AAAF","#27505B"],[0,1],114.3,-0.4,-113.5,-0.4).s().p("AkqGcIspnYQgcgSgEgVIAAgCIAAgHIAAg/QACAPAOAOIAQALIMpHYQBPApBZgpITcrXQAHgFAFgFQAEgEACgFIAAgBQAIgNAAgMIAABCQABAOgJAQIAAABQgGAKgMAJIzcLXQgsAUgqAAQgqAAgogUg");
	this.shape_28.setTransform(-36.1611,328.8625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#97AAAF","#27505B"],[0,1],63.1,8.1,-222.7,8.1).s().p("AkqKIIspnZIgQgLQgOgOgCgPIAAgHQACgXAegcITMrPQAegQAegHQBCgLAzAdIMqHYQAgAVAAAaIAAACIAAACQAAAMgIANIAAABQgCAFgEAEQgFAFgHAFIzcLXQgsAVgqAAQgqAAgogVg");
	this.shape_29.setTransform(-36.175,298.1512);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#386774").s().p("AC6lIIPkh9Iz5MwIxCBbg");
	this.shape_30.setTransform(-33.025,260.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#27505B").s().p("AyxGoIRChbIT6svIAnBMI0NMvIxEBKg");
	this.shape_31.setTransform(-31.05,263.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#97AAAF","#27505B"],[0,1],-155.9,-1.6,152.8,-1.6).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_32.setTransform(-36.1515,328.8171,0.7361,0.7361,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#97AAAF","#27505B"],[0,1],-86.3,9.9,301.2,9.9).s().p("ACyNxI6avcQgKgHgGgHQgGgGgDgGIAAgBQgLgTAAgRIAAgBIAAgCQABgkAsgcIRLqCQBFgoBaAQQAoAJAqAWIaEPRQApAmADAgIgBAIQgCAVgTATQgKAIgMAHIxLKDQg2Acg5AAQg5AAg8gcg");
	this.shape_33.setTransform(-36.1607,298.154,0.7361,0.7361,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#386774").s().p("AviHyISQqhIO0mOIzbMDIvoF4g");
	this.shape_34.setTransform(-39.9,244.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#27505B").s().p("Ax0IaIPnl3ITbsDIAFgCIAiA3IzgMeIvoFwg");
	this.shape_35.setTransform(-37.9375,248.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#27505B").s().p("AwQKgILWqPIURrwIA6BDI0fLuIrhKKIgHAEg");
	this.shape_36.setTransform(-45.2125,234.2625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#324079").s().p("AkfAyIUfruIABACIrSJ6I0vL9g");
	this.shape_37.setTransform(-43.5,237.4125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#324079").s().p("AttL+IAAgBIgBAAIgCgCQABgGAEgKIAIgPIHErOIAKgOQAagjApgiIADgEQAYgTAbgQIBgg3IBfg3IAigUIOCoIIAMgFQAVgHAGAFIACACIABAAQgBAGgEAKQgCAGgGAIInDLNQgnA7g/AtIgWAOIxwKTIgMAFIgHABIgBAAIgFABQgGAAgDgCg");
	this.shape_38.setTransform(-52.725,221.0064);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#27505B").s().p("AuPNCIgCgCIAAAAIAAAAIAAgBIgBAAIAAgBIgigeIABgBIgBAAIgCgDQgDgKAPgbIHhr6QAYglAoglIAVgTQAVgQAWgOIAMgIISrq0QAagKALACIACAAIAjAgQgKgEgeAMIyqK0IgMAIQg9AugoA8InmL/QgcA3AdgFIgJAEIgHACIgCAAIgEABQgFAAgEgCgAtKMJIgBABIAAgBQgDgCAAgEIACACIAAAAIAAABQAFACAKgBIABAAIAGgBIANgFIRwqTIAVgOQBAgtAng7IHDrNQAFgIADgGQAEgKAAgGQADAGgGAOIgJAPInDLNQgnA5g+AuIgWAPIxxKSQgHAFgFABIgGABIgCAAIgEABQgGAAgDgEg");
	this.shape_39.setTransform(-56.0528,220.2051);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#97AAAF","#27505B"],[0,1],34.1,0.5,-125,19.9).s().p("AuPL+IHlr+QAog9A9guIAMgIISrq0QAdgMAKAEIACABIACACIABACQACAGgGAOIgJAPIngL7QgwBIhTA2Iy5K8IgEACIgEABQgWAAAagzgAtbL/IABAAIAHgBQAFgBAHgFIRwqSIAWgPQA/guAng5IHDrNIAIgPQAHgOgDgGIgBAAIgCgCQgHgFgUAHIgMAFIuCIIIgiAUIhfA3IhgA3QgbAQgYATIgDAEQgpAigaAkIgKANInELOIgIAPQgFAKAAAGQABAEACACIAAABIABgBQAEAFAKgCg");
	this.shape_40.setTransform(-53.0021,221.5144);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#324079").s().p("At2NFIAAAAIgBgBIgCgCQgBgNAMgYIGms1QADgJAGgIQAZgoApgmIAEgEQAYgVAcgRIBkg5IBjg4IAkgUIOooaQAggNAKAJIACACIABABQAAAHgDALIgHAQImmM2QgkBEhCAwQgLAJgLAHIygKnQgHAFgGABIgHABIgBAAIgDAAQgJAAgEgEg");
	this.shape_41.setTransform(-58.2507,217.5348);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#97AAAF","#27505B"],[0,1],37.6,4.1,-136,11.2).s().p("AucNCIHFtvQAmhFA+gyIANgIITdrKQAigNALAIIACADQAFAIgGASIgIARInANqQguBUhWA5IzrLTIgEACIgCAAQgcAAAYg9gAtjNKIACAAIAHgCQAFgBAHgFIShqoIAWgPQBBgyAkhCIGls1QAGgKACgHQAGgQgEgIIgBAAIgCgDQgKgIggANIuoIZIgkAUIhjA5IhkA5QgcARgYAUIgEAEQgpAmgZAoQgGAJgDAIImmM2QgMAYABAMQABAFADADIAAABIABgBQAFAGAKAAg");
	this.shape_42.setTransform(-58.482,218.0867);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#27505B").s().p("AuaNhIAAAAIAAgBIgBAAQgIgNAQgjIHBtqQAWgrAogoIAWgVQAVgRAXgQQg/AzglBFInGNuQgZBAAfgCIgKADIgHACIgCAAIgCAAQgJAAgGgFgAtSMmIAAAAIgBAAQgDgDgBgFIADACIABABIAAAAQAFAEAKAAIABAAIAIgBQAFgBAIgFISfqnQAMgHALgJQBBgwAlhDIGls3IAHgQQAEgLgBgHQAEAIgFAQQgDAHgFAJImlM3QglBBhBAxIgWAQIygKnQgIAGgFABIgHABIgBAAIgCABQgJAAgFgGg");
	this.shape_43.setTransform(-61.7214,221.1023);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#324079").s().p("AsFNbQgLAAgHgEIAAgBIgBAAIgDgDQgEgOAHgYIEctaQACgJAEgJQATgqAlgmIADgEQAXgVAbgRIBhg4IBhg5IAigUIOQoVQAhgMANAJIADADIABABQACAHgCAMQgBAHgDAKIkbNaQgZBGg9AxIgVAQIyCKiQgHAFgGABIgIAAIgBAAg");
	this.shape_44.setTransform(-63.0624,212.2401);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#97AAAF","#27505B"],[0,1],42.4,6,-147.2,6.2).s().p("AtCNSIEyuVQAahIA6gzIAMgIIS9rFQAjgMANAJIAEADQAHAJgDATIgFASIksORQggBXhTA5IzLLNIgEACIgBAAQgfAAAMhBgAsBNcIACAAIAIgBQAFgBAHgFISCqiIAVgQQA9gxAZhGIEbtZIAFgSQACgRgGgIIgBgBIgDgCQgMgKghAMIuQIWIgjAUIhhA4IhgA5QgcAQgWAVIgDAEQgmAngSAqQgEAIgDAJIkbNaQgIAZAEANQACAGAEADIABABIAAgBQAHAGALAAg");
	this.shape_45.setTransform(-63.2408,212.7978);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#27505B").s().p("AsjN5QgMgBgIgGIAAAAIgBgBIgBAAQgMgOALgkIEtuQQAPguAjgpIAUgVQATgSAWgPQg6AzgaBIIkyOVQgNBDAhgCIgJAEIgJACIgBAAgArjM8QgLABgHgHIAAABIgBgBQgEgDgCgGIADAEIABAAIAAABQAHAEAMAAIABAAIAIgBQAFgBAIgEISBqiIAVgQQA9gxAahGIEatbQAEgJABgIQABgLgCgIQAGAJgCAQIgFASIkbNZQgZBGg9AyIgVAPIyCKiQgHAGgFABIgIAAg");
	this.shape_46.setTransform(-66.2082,215.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2174DB").s().p("AoLLaIhGsiQgFhRA1gjIQFpJQAggPAJAzIBFNDQADA3gaAVIwWJZQgIACgGAAQgdAAgFgvgAIDBBImODQQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAPAZIABAEQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAEAAIGOjPIACgEQABgEgBgBIgPgaIgEgEIgDgBQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAgAlVgVQgvAagjAqQggAsgOAyQgKAlADAqIACAEIAEADIAEAAIAHgEQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIABgEQADgeAJgXQAHgWAOgTQAOgRAYgXQAigfAugYIAAgBQAogaAsgLQApgQAjADQAjABAZARQAAAAAAAAQABABAAAAQAAAAABAAQABAAAAAAIADAAIAKgFIADgCIACgCIgBgEIgBgDQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQg3gohPgBIgFAAQhGAAhBAogAH8gUImODOQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAOAZIACADQACACADAAIAEAAIGNjQIADgDQABgEgCgCIgOgYIgFgFIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABgAHzh6ImODPQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIAOAaIABADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAEAAIGOjOIACgEQABgEgBgBIgPgZIgEgFIgCgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAgAHsjQImODPQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAOAZQAAABAAAAQABAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAABAAIAEAAIGOjPIACgDQABgEgCgCIgOgZIgFgEIgCgBQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABgAnaghQAGAOAPAGQAOAEAMgDQANgHADgOIAAABQADgOgFgNQgHgNgPgFQgOgGgNAHQgMAGgDAMIABgBQgFANAHANgAkniuQgNAFgFANIgBABQgDALAJAOQAFANAOAGQAPAHANgGIABAAQALgHAEgNIAAgBQABgOgEgLQgJgOgMgFIgCgBIgKgBQgIAAgGADg");
	this.shape_47.setTransform(-89.363,209.8141,1.1107,1.1107);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.788)").s().p("ABpEFQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgDIgOgZQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQgBgBAAgBQABAAAAgBQAAAAAAgBQABAAABAAIGOjPQABgDAEABIAEAFIAPAZQACABgCAFIgCADImODQIgEAAgAn0CxIgFgCIgBgEQgEgrALgkQANgzAhgqQAigqAvgbQBEgqBJABQBOABA3AoQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACADIAAAEIgBABIgDADIgLAFIgCAAQgBAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQgagQgigBQgjgDgpAQQgsALgpAaIABACQgvAXgiAfQgYAWgNARQgOATgIAXQgJAXgDAdIgBAEQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgHAEIgEgBgABiCuQgDAAgCgBIgBgDIgOgaQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIGOjPQACgCAEABIAEAEIAPAaQABABgBAEIgCAEImODOIgEAAgABZBJQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgDIgOgZQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQgBgBAAgBQABAAAAgBQAAAAAAAAQABgBABAAIGOjOQABgDAEABIAFAFIAOAZQACACgBAEIgDADImODPIgEAAgABSgNQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIgOgaQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIGOjQQACgCAEABIAEAFIAPAZQABABgBAEIgCAEImODPIgEAAgAnkg/QgOgGgHgNQgGgNAEgOIgBACQADgMAMgHQANgGAOAGQAQAFAGAMQAGAOgDAOIAAgCQgDAOgOAIIgKABQgHAAgJgDgAk/ihQgOgGgGgNQgJgNADgLIACgCQAEgNANgFQALgFAOADIABACQANAEAIAPQAFAKgBAOIAAACQgFANgKAGIgCAAQgGADgGAAQgIAAgHgEg");
	this.shape_48.setTransform(-85.9463,215.3384,1.1107,1.1107);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#495BA8").s().p("ApPOSQgQAAgMgFIAAgBIgCgBIgFgDQgMgPgDgbIhBujIAAgTQADgtAegpIADgEIANgOIAAABQAUgSAOgJIBkg6IBlg6IAkgVIO0ooQAmgMAWAKIAFADIABABQAHAIAEANQACAJABAKIBBOjQACBCgpAvIAAgBIgBACIgNAOQgKAJgLAHIyuK7QgIAEgHABIgKABIgBgBg");
	this.shape_49.setTransform(-90.434,210.53);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#97AAAF","#27505B"],[0,1],-155.9,-1.5,152.8,-1.5).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_50.setTransform(-36.3515,328.9171,0.7361,0.7361,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#97AAAF","#27505B"],[0,1],-86.3,10,301.3,10).s().p("ACyNxI6avcQgKgHgGgHQgGgGgDgGIAAgBQgLgTAAgRIAAgBIAAgCQABgkAsgcIRLqCQBFgoBaAQQAoAJAqAWIaEPRQApAmADAgIgBAIQgCAVgTATQgKAIgMAHIxLKDQg2Acg5AAQg5AAg8gcg");
	this.shape_51.setTransform(-36.3607,298.254,0.7361,0.7361,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#27505B").s().p("ApkOxQgQAAgNgHIgBAAIgBgBIgCgBQgXgPgEgnIhFvfQgDgwAZgtQAHgMAJgKQAQgTAWgQQgzA2ACBOIBBPjQASBKArgBIgMADIgKABIgCAAgAosNyQgQAAgMgHIAAAAIgBgBQgHgDgFgGIAFADIABABIABAAQALAFAQABIABAAIAKgBQAIgBAHgEISvq6QALgIAJgIQA4g0gChNIhBujQgBgKgDgIQgEgNgGgIQAMAJAGASQACAJAAAKIBCOjQACBMg4A0QgJAIgLAIIyvK6QgIAFgHABIgKABg");
	this.shape_52.setTransform(-93.2623,214.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#97AAAF","#27505B"],[0,1],60.1,8.1,-194.1,1.5).s().p("AqlOGIhAvjQgDhOA0g2IALgIITtreQApgMAWALIAHADQAOAKAGAVIADAUIBFPeQACBehQA8Iz8LmIgEADIgBAAQgqAAgShJgAIzuRIu0IoIgkAVIhlA7IhkA6QgcARgTAXIgDADQgeApgDAuIAAATIBBOjQADAbAMAPQAFAGAHADIABABIABAAQAMAHAPAAIACAAIAKgBQAHgBAHgFISwq6QALgIAJgIQA3g0gChMIhBujQgBgKgCgJQgFgSgNgJIgBgBIgFgDQgKgFgOAAQgQAAgUAGg");
	this.shape_53.setTransform(-90.5284,211.0932);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#97AAAF","#27505B"],[0,1],-155.8,-1.5,152.9,-1.5).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_54.setTransform(-49.4015,316.9171,0.7361,0.7361,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#97AAAF","#27505B"],[0,1],-155.8,-1.4,153,-1.4).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_55.setTransform(-49.4015,316.9171,0.7361,0.7361,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#97AAAF","#27505B"],[0,1],-86.2,10.1,301.4,10.1).s().p("ACyNxI6avcQgKgHgGgHQgGgGgDgGIAAgBQgLgTAAgRIAAgBIAAgCQABgkAsgcIRLqCQBFgoBaAQQAoAJAqAWIaEPRQApAmADAgIgBAIQgCAVgTATQgKAIgMAHIxLKDQg2Acg5AAQg5AAg8gcg");
	this.shape_56.setTransform(-49.4107,286.254,0.7361,0.7361,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#97AAAF","#27505B"],[0,1],-156,-1.7,152.6,-1.7).s().p("ACyIwI6ZvcQgSgMgHgNIgBgBQgLgWABgTIgBhcQABARAKAUIABAAQADAGAFAGQAHAHAKAHIaZPcQB5A4Brg4IRMqCQAMgHAJgIQAUgSACgWIAABXIAAAJIAAADQgFAdgmAXIxMKCQg2Acg5AAQg5AAg8gcg");
	this.shape_57.setTransform(-36.1515,328.8171,0.7361,0.7361,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#97AAAF","#27505B"],[0,1],-86.4,9.8,301,9.8).s().p("ACyNxI6avcQgKgHgGgHQgGgGgDgGIAAgBQgLgTAAgRIAAgBIAAgCQABgkAsgcIRLqCQBFgoBaAQQAoAJAqAWIaEPRQApAmADAgIgBAIQgCAVgTATQgKAIgMAHIxLKDQg2Acg5AAQg5AAg8gcg");
	this.shape_58.setTransform(-36.1607,298.154,0.7361,0.7361,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{scaleX:0.717,scaleY:0.7544,skewX:119.097,skewY:117.0068,x:7.8464,y:289.234}},{t:this.shape_18,p:{scaleX:0.717,scaleY:0.7544,skewX:119.097,skewY:117.0068,x:2.9409,y:234.7149}},{t:this.shape_17,p:{scaleX:0.7162,scaleY:0.7537,skewX:119.1042,skewY:117.0067,x:10.2633,y:289.3404}},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},277).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_19,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_18,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_17,p:{scaleX:0.7352,scaleY:0.7352,skewX:0,skewY:180,x:-53.3076,y:283.8608}},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_19,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_18,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_17,p:{scaleX:0.7352,scaleY:0.7352,skewX:0,skewY:180,x:-53.3076,y:283.8608}},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_33,p:{x:-36.1607,y:298.154}},{t:this.shape_32,p:{x:-36.1515,y:328.8171}},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.5058,y:285.5794}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-7.0618,y:313.9885}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-52.7133,y:283.5582}},{t:this.shape_31},{t:this.shape_30}]},2).to({state:[{t:this.shape_33,p:{x:-36.1607,y:298.154}},{t:this.shape_32,p:{x:-36.1515,y:328.8171}},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.5058,y:285.5794}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-7.0618,y:313.9885}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-52.7133,y:283.5582}},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_33,p:{x:-36.1607,y:298.154}},{t:this.shape_32,p:{x:-36.1515,y:328.8171}},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.5058,y:285.5794}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-7.0618,y:313.9885}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-52.7133,y:283.5582}},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_33,p:{x:-36.1607,y:298.154}},{t:this.shape_32,p:{x:-36.1515,y:328.8171}},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.5058,y:285.5794}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-7.0618,y:313.9885}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-52.7133,y:283.5582}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_33,p:{x:-36.1607,y:298.154}},{t:this.shape_32,p:{x:-36.1515,y:328.8171}},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.5058,y:285.5794}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-7.0618,y:313.9885}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-52.7133,y:283.5582}}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_33,p:{x:-36.1607,y:298.154}},{t:this.shape_32,p:{x:-36.1515,y:328.8171}},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.5058,y:285.5794}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-7.0618,y:313.9885}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-52.7133,y:283.5582}}]},1).to({state:[{t:this.shape_53,p:{x:-90.5284,y:211.0932}},{t:this.shape_52,p:{x:-93.2623,y:214.475}},{t:this.shape_51,p:{x:-36.3607,y:298.254}},{t:this.shape_50,p:{x:-36.3515,y:328.9171}},{t:this.shape_19,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-54.3718,y:285.7131}},{t:this.shape_18,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-7.925,y:314.124}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-53.5794,y:283.6918}},{t:this.shape_49,p:{x:-90.434,y:210.53}},{t:this.shape_48,p:{x:-85.9463,y:215.3384}},{t:this.shape_47,p:{x:-89.363,y:209.8141}}]},1).to({state:[{t:this.shape_53,p:{x:-103.5784,y:199.0932}},{t:this.shape_52,p:{x:-106.3123,y:202.475}},{t:this.shape_51,p:{x:-49.4107,y:286.254}},{t:this.shape_54},{t:this.shape_19,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-66.8658,y:273.7356}},{t:this.shape_18,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-20.4171,y:302.1476}},{t:this.shape_17,p:{scaleX:0.7349,scaleY:0.7349,skewX:0,skewY:180,x:-66.0954,y:271.7255}},{t:this.shape_49,p:{x:-103.484,y:198.53}},{t:this.shape_48,p:{x:-98.9963,y:203.3384}},{t:this.shape_47,p:{x:-102.413,y:197.8141}}]},2).to({state:[{t:this.shape_53,p:{x:-103.5784,y:199.0932}},{t:this.shape_52,p:{x:-106.3123,y:202.475}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_19,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-66.8878,y:273.7468}},{t:this.shape_18,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-20.4381,y:302.1594}},{t:this.shape_17,p:{scaleX:0.7349,scaleY:0.7349,skewX:0,skewY:180,x:-66.1394,y:271.7479}},{t:this.shape_49,p:{x:-103.484,y:198.53}},{t:this.shape_48,p:{x:-98.9963,y:203.3384}},{t:this.shape_47,p:{x:-102.413,y:197.8141}}]},2).to({state:[{t:this.shape_53,p:{x:-103.5784,y:199.0932}},{t:this.shape_52,p:{x:-106.3123,y:202.475}},{t:this.shape_51,p:{x:-49.4107,y:286.254}},{t:this.shape_50,p:{x:-49.4015,y:316.9171}},{t:this.shape_19,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-66.8218,y:273.7131}},{t:this.shape_18,p:{scaleX:0.7354,scaleY:0.7354,skewX:0,skewY:180,x:-20.375,y:302.124}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-66.0294,y:271.6918}},{t:this.shape_49,p:{x:-103.484,y:198.53}},{t:this.shape_48,p:{x:-98.9963,y:203.3384}},{t:this.shape_47,p:{x:-102.413,y:197.8141}}]},85).to({state:[{t:this.shape_53,p:{x:-91.1284,y:209.8432}},{t:this.shape_52,p:{x:-93.8623,y:213.225}},{t:this.shape_33,p:{x:-36.9607,y:297.004}},{t:this.shape_32,p:{x:-36.9515,y:327.6671}},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-54.3058,y:284.4294}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-7.8618,y:312.8385}},{t:this.shape_17,p:{scaleX:0.7348,scaleY:0.7348,skewX:0,skewY:180,x:-53.5133,y:282.4082}},{t:this.shape_49,p:{x:-91.034,y:209.28}},{t:this.shape_48,p:{x:-86.5463,y:214.0884}},{t:this.shape_47,p:{x:-89.963,y:208.5641}}]},2).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_58},{t:this.shape_57},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.4397,y:285.5457}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-6.9987,y:313.953}},{t:this.shape_17,p:{scaleX:0.7347,scaleY:0.7347,skewX:0,skewY:180,x:-52.6033,y:283.5022}}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_58},{t:this.shape_57},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.4397,y:285.5457}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-6.9987,y:313.953}},{t:this.shape_17,p:{scaleX:0.7347,scaleY:0.7347,skewX:0,skewY:180,x:-52.6033,y:283.5022}}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.4397,y:285.5457}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-6.9987,y:313.953}},{t:this.shape_17,p:{scaleX:0.7347,scaleY:0.7347,skewX:0,skewY:180,x:-52.6033,y:283.5022}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.4397,y:285.5457}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-6.9987,y:313.953}},{t:this.shape_17,p:{scaleX:0.7347,scaleY:0.7347,skewX:0,skewY:180,x:-52.6033,y:283.5022}},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.4397,y:285.5457}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-6.9987,y:313.953}},{t:this.shape_17,p:{scaleX:0.7347,scaleY:0.7347,skewX:0,skewY:180,x:-52.6033,y:283.5022}},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_19,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-53.4397,y:285.5457}},{t:this.shape_18,p:{scaleX:0.7353,scaleY:0.7353,skewX:0,skewY:180,x:-6.9987,y:313.953}},{t:this.shape_17,p:{scaleX:0.7347,scaleY:0.7347,skewX:0,skewY:180,x:-52.6033,y:283.5022}},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_19,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_18,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_17,p:{scaleX:0.7351,scaleY:0.7351,skewX:0,skewY:180,x:-53.2416,y:283.8272}},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_19,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-54.3862,y:286.0291}},{t:this.shape_18,p:{scaleX:0.7359,scaleY:0.7359,skewX:0,skewY:180,x:-7.9038,y:314.4617}},{t:this.shape_17,p:{scaleX:0.7351,scaleY:0.7351,skewX:0,skewY:180,x:-53.2416,y:283.8272}},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},2).to({state:[{t:this.instance_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{scaleX:0.717,scaleY:0.7544,skewX:119.097,skewY:117.0068,x:7.8464,y:289.234}},{t:this.shape_18,p:{scaleX:0.717,scaleY:0.7544,skewX:119.097,skewY:117.0068,x:2.9409,y:234.7149}},{t:this.shape_17,p:{scaleX:0.7162,scaleY:0.7537,skewX:119.1042,skewY:117.0067,x:10.2633,y:289.3404}},{t:this.shape_16},{t:this.shape_15}]},2).wait(6));

	// Layer_15
	this.instance_7 = new lib.Devojkao1rukaD("synched",0);
	this.instance_7.setTransform(35.9,159.4,1.1428,1.1428,-2.2606,0,0,17.3,14.8);

	this.instance_8 = new lib.Devojkao1shaka("single",1);
	this.instance_8.setTransform(-42.85,298.7,1.1427,1.1427,46.6503,0,0,16,23);

	this.instance_9 = new lib.Devojkao1dolakta("single",0);
	this.instance_9.setTransform(28.35,179.9,1.1427,1.1427,32.9826,0,0,17.4,40.5);

	this.instance_10 = new lib.Devojkao1odlakta("single",0);
	this.instance_10.setTransform(38.5,221.5,1.1427,1.1427,46.6503,0,0,14.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},277).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},113).to({state:[{t:this.instance_7}]},2).wait(6));

	// noga_L
	this.instance_11 = new lib.Devojkao1nogaleva("synched",0);
	this.instance_11.setTransform(110.25,291.75,1,1,4.6957,0,0,48.1,24.4);

	this.instance_12 = new lib.Devojkao1nogadesna("synched",0);
	this.instance_12.setTransform(45,385.05,1,1,0,0,0,30.7,124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(400));

	// noga_D
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(51,51,51,0.298)").s().p("ABuGsQjTgWg6iLQg6iKjEAAQimAMhHhrQhliaBzieQByibDSADQE4APD4C6QAcAVAfASQDqgCB1CyQBnCdikBzQj2CtjEAAQgXAAgWgDg");
	this.shape_59.setTransform(77.7098,505.46);

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(400));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.6,-50.1,378.6,598.7);


// stage content:
(lib.sceneSplashLanding = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.devojkaobicna1("synched",0);
	this.instance.setTransform(474.1,577.9,0.3755,0.3755,0,0,0,76.8,266.7);

	this.instance_1 = new lib.Tip("synched",0);
	this.instance_1.setTransform(638.35,725.15,0.7113,0.7113,0,0,0,98.5,167.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(400));

	// Layer_2
	this.instance_2 = new lib.Superdevojkalebdi("synched",0);
	this.instance_2.setTransform(860.45,306.55,1,1,0,0,0,-502.9,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(400));

	// Layer_3
	this.instance_3 = new lib.Supermomaklebdi("synched",0);
	this.instance_3.setTransform(1050.3,377.7,1,1,0,0,0,65.5,146.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(400));

	// portal
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(176,161,235,0.51)","rgba(73,192,255,0.71)"],[0,1],-74.1,0,74.2,0).s().p("AF+RfIgvgUIgFgCIgqgVIgmgUIgDgCIgcgQIgWgOQgbgRgcgSQhmhGhdhYIgKgKQg2g0gyg6IgBgBIgKgKIgug2IgBgCIgDgEIjGkiIgCgGIgNgTIgDgGIgXgqIgNgWIgRgiIgBgBIgjhIIgCgGIAAgBIghhHIgCgHQhFicgpicQgLgpgJgqIgNhCIgCgLIgMhLIgBgMQgFgsgCglQgFg0gBg0IAAgXIABhBQACgsAFgoQAEgqAHglIACgPIAFgSQAKgoAKgjIAGgTQAUg5AcgxQARgBAUABIAEAAQBEACBLAVIAKADQAdAJAgALIANAFIADACIAIADIACABIAFACIABABIADABQAgAOAgAQQAvAWAsAdQGEDwESH6QDiGeApGNQAIBVABBWQAABygPBdIgDATQgVBygsBZIgCADQgHAOgJAPIgXABQhvAAh9gwg");
	this.shape.setTransform(697.15,494.6925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#70CAE3","#5E84C4"],[0,1],-108,160.9,70.7,-77.4).s().p("ArZUPIgZgTIgYgUIgOgOIgDgDIgZgbIgHgHIgVgaIACAAQCpAADHhlIACgBIAYgNIEaDgIgFACQihBJiNAAQiIAAh0hEgAlwP2QDViFC1jQIFPDMQg2A9g6A4IgLALQh+B2iMBYIg1AggAvLNtIACgBIAxgVIAFgCQAZgLATgLIApgVIAEgCIAegSIEKDUQi8BcifgJQgMAAgKAHIgCAAQgwhfgWh4gArLLiQBthKBkheIALgLQA6g4A2g9IABgBIAKgLIFBDDQitDBjHB8IAAAAIgVAMgABWJaIAaghQB9iiBtjIIAwheIFkCjIgmBOIgTAkIgNAYIgZAsIgDAHIgNAVIgDAGIjTE1IgEAFIgBABgAk5FnIDNkuIADgGIANgVIADgHIAZgrIANgYIATgkIABgBIFYCdQgXAugWAoQhtDIh8CfIgbAigAGyAeQBrjnA0jlIFeB8QgsDzhsD5IgDAHgAAIikIAAgBIAjhMIADgHQBJioArimIFaB6QgyDfhpDngAJkoIQANhJAJhIQAKhiAAhjQAAgxgDgtIE0BBQAJAuAGA2QAIBLAABUIAAAYQgBA3gEA4IgIBWIgCANgAC4qfIAOhGIACgMIAMhQIACgNIAIhWQAEg4ABg3IFDBDQAEA5AAA5QAABagJBhQgIBAgKA9gAJ5wcQgXiwhDh+IAAgBQAXAEAYAGIAwAQIAVAJQAdAMAdASIAIAFQCDBiA9CwIAGAUgADixxQgCgugFgrQgFgsgGgmIgBgDQB8gxBwgCIAAACQAAALAHAMQBBBuAYCcg");
	this.shape_1.setTransform(678.1922,505.8692,0.9375,0.9375,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],-67.7,-135.4,67.7,135.4).s().p("ACRTGQgagMgUgLIgmgUIg2gfQiDhTh2hvIgKgKQg3g0gzg6QgYgbgggnIgdgmIiskAIgDgGIgMgTIgDgHIgXgpQgEgJgJgOIgSgiIgmhPIgjhOQhojvgpjpIgNhXIgHhRQgEg0gBg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAFgEIADgCIAIgFIADgCIACgBIADgCQAagQAcgMQA1gXA4gKQAWgEAdgCIAJAAQAQgBASABQBGACBNAVIAKADQAdAJAgALIAMAFQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAIADIABABIAFACIACAAIADACQgMBEgCBKIgBBYQADCrAlCtIATBUQA0DABbDFIAlBOIAiA+QBeCtBsCOIAVAdIAEADIgBABIA3BDIABAAQCQCmClB2IBTA1QAtAbAkATQAfAQAhAOQgUB/gyBiQgIARgMAUIgFAIQgLATgOARQgWAegbAbQgkAkgsAdIgMAGQhwBEiDAAQiDAAiXhEg");
	this.shape_2.setTransform(676.225,507.0563);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DDEF1").s().p("AGpHJQkroYmPk1IKImEQGdE2ExIjQCvE2BdEvIABACIqUGLIgCABQhdk5i2lCgAqgwBQCHhCCaAAQAcAAAbACIp4F8IgUgDQgigDglAAQimgBiQBNg");
	this.shape_3.setTransform(724.725,404.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DCEDF6","#70DCF1"],[0,1],33,-8.8,110.9,152.3).s().p("AETcNIASgPQAtgqAkgzQAcglAXgqQAJgRAFgLQAOgcALgbQBUjNgBknQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFbgBFQQABFwiDDlQgZAqgdAmQhHBdhkA/IgTAMIo1ErIAAABgArczbQg+gog9gcQhBgfg+gYIgKgEQhAgYhAgPQgwgLgvgFIJ5l8IADAAQAuAEAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AjAqAhIqIGEQhjhMhqg/g");
	this.shape_4.setTransform(750.1501,476.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44A6F4").s().p("AumlQIAxhiIAAgCIazP4IAAADIicAigAt1onIBohBIa0P5IhpBBg");
	this.shape_5.setTransform(668.4,646.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4861D4").s().p("AtykyIAAh9IZIO5IAAB+gAtBoUIAAhzIa0P5IgBAAIAABzg");
	this.shape_6.setTransform(663.175,656.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A3CC3").s().p("AKiKoI5Iu6IAAh9IAxhiIAAh1IBohCIa0P5IAADyIhpBCIgBABIiZAjg");
	this.shape_7.setTransform(668.4,653.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C0482").s().p("AimEGQgEgCgDgEQgCgEABgFQACgFAFgCIFEitQAEgDAFACQAFABACAFQACAFgBAEQgCAFgEACIlFCtIgFACIgEgBgAimC2QgFgCgCgEQgCgFABgEQACgFAFgDIFEisQAEgDAFADQAFABACAEQACAFgBADQgCAGgEACIlFCtQgCACgDAAIgEgBgAinBqQgEgCgDgFQgBgDABgGQACgEAEgDIFEisQAFgDAEACQAFACACAFQADAEgCAFQgCAFgEACIlECsQgDACgDAAIgEgBgAilATQgFgCgCgEQgCgFACgEQABgEAEgCIFFitQAEgDAFACQAFABACAFQACAEgBAFQgCAFgEACIlFCsQgCACgDAAIgEgBgAilhAQgFgCgCgFQgCgEABgFQACgFAEgCIFFiuQAEgCAFACQAEACACAFQACAEgBAFQgCAEgEADIlECtIgFABIgEAAg");
	this.shape_8.setTransform(811.3581,677.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7898D0").s().p("AkbFEQAQgIAZgSQANgHAYgRIA9guQAtgmAjgjQA7g2Atg4IBBhTQAXggAegwIAXgnQAdg0Aag3QANgbAHgVIA+giQgcBJgnBLQgnBLgtBBQgbAogcAhQgiAqgjAlQhTBbhsBLIipBXg");
	this.shape_9.setTransform(828.4826,614.5492,0.5267,0.541);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5884B3").s().p("Ak7D8IHJkFQgjAhguAmIg9AuQgWARgOAIQgYARgQAJIgiAWIkUCPQAngkAggkgAh/gaIACgFIIAkkIgXAnQgeAxgWAfIgVAbInuEaQApg/AjhEg");
	this.shape_10.setTransform(817.6197,623.5158,0.5267,0.541);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#536C99").s().p("AkVDbIHvkbIgtA6QguA3g7A2InIEGQA6hCA1hQgAiFhBIIKkrQgHAVgNAbQgaA3gdAzIoAEkQAkhIAdhLg");
	this.shape_11.setTransform(821.4777,617.3758,0.5267,0.541);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A4B3DD").s().p("ACtifQCHhDCZAAQAcAAAcADIp4F6IgUgCQgigDglAAQimAAiQBMg");
	this.shape_12.setTransform(640.175,318.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7A41C1").s().p("AjyijIHlkFIAAIvInlEig");
	this.shape_13.setTransform(809.9,678.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#602BA2").s().p("APSNvIiBhMIAAnlICCg7IABAAIAAAAIBPAqIAAJNgAvxkrIgxg/IAAnhIAFgEIABgCIArgoIBZCgIAAHjg");
	this.shape_14.setTransform(679.75,631.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DDF0F5").s().p("ACRTGQgagLgUgLIgmgUIg2ggQiDhSh2hvIgLgKQg2g1gzg6Ig4hCIgeglIiskBIgCgGIgMgTIgEgHIgWgpQgFgJgIgNIgSgiIgmhQIgkhOQhnjvgpjpIgNhXIgHhRQgFg0AAg0IAAgXQAAhPAHhGQAHg9ALgzQAMgzAPgrQA9ixCJhdIAGgEIACgCIAIgFIACgCIADgBIADgCQAbgQAbgMQA1gXA4gKQAWgEAdgCIAIAAQARgBARABQBHACBMAVIALADQAdAJAfALIANAFIAEACIAIADIABABIAGACIABAAIACACQgLBEgCBKIgBBYQADCsAlCsIATBUQAzDBBbDEIAmBOIAiA/QBfCsBrCPIAWAcIADADIgBABIA3BDIABAAQCRCnCkB1IBTA1QAuAbAjATQAfAQAhAPQgUB/gyBhQgIASgMATIgDAGIgHAMIgUAbQgVAegcAbQgkAjgsAdIgMAHQhwBDiDAAQiDAAiXhEg");
	this.shape_15.setTransform(676.2,507.2813);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C0482").s().p("AkZB6IIakdIAZBDInlEEg");
	this.shape_16.setTransform(805.975,645.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A4B6DD").s().p("Ah2EsQkroYmQk1IKJmFQGcE3ExIkQCvE1BdEvIABACIqUGLIgBABQhek5i1lCg");
	this.shape_17.setTransform(779.125,420.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8BACC3").s().p("At7NIIAAnjIhaihIAAgBIABAAQhXitg+irQiVmeAAmMQAAhHAFhCIBMAvQAKiiAqh/IAPgpQBQjQCwhmIABAAIASgLQB9hCCQAAQAWAAAUACIA+h8QAvAGAvALQBBAPBAAYIAKADQA+AYBBAgQA8AcA+AoQBqA/BiBMIAcC/QFHElD9HGQCMD3BYD1ICLAzQBUEXAOEQQACAyAAA8IgBBIQgXFyiXDeQgjAwgrAoIgSAQIABAAIAAgBIAEgCIgGAFIiBA6IAAHlgAm42lIgIABQgeACgWADQg4AKg1AYQgbALgbAQIgDACIgCABIgDADIgIAFIgCACIgGADQiJBeg9CxQgPAqgMAzQgLA0gHA9QgHBGAABPIAAAWQABA0AEA1IAHBQIANBYQApDpBoDuIAjBPIAmBPIhGA8IAJATQAIANAHANQABAEAEAEIAIAPIADAGQAGAJADAHQADADABAFIANAWQACACABAEIADAFIC9EZIAdAlIAEAEQAdAkAhAnQA6BBA9A6IALAKQCEB+CTBbIBlA6IAzAZQFRCWD7iWIAQgKIhRiLQArgdAlgkQAbgbAVgeIAUgbIAHgMIADgFQAMgUAJgRQAxhiAUh/QAPhdAAhxQAAhXgJhVQgomLjimfQkSn7mFjwQgrgcgvgXQgggQgggOIgDgBIgBgBIgFgBIgCgCIgIgDIgEgCIgMgEQgggMgdgIIgKgDQhNgWhGgCIgSAAIgQAAgAStQxIgBADIgOAhIgBABIAQglg");
	this.shape_18.setTransform(676.875,522.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#59ACBC").s().p("ADJXqIg0gYIhlg6QiThciEh9IgLgKQg8g7g6hBQgigmgdgkIgEgEIgcglIi+kZIgCgGQgBgEgDgCIgNgWQgBgEgDgDQgDgIgFgIIgDgGIgJgQQgDgEgCgEQgGgNgJgNIgJgSIBHg8IASAiQAIANAEAJIAXApIAEAHIALATIADAGQBwC5BWBpIAEAEIA3BCQA0A6A2A1IAKAKQB3BvCDBSIA2AgIAlAUQAVALAZALQEuCHDgiGIAMgHIBSCLIgRALQh9BKiTAAQiTAAiohLgAQ/CoQhXjziNj4Qj9nGlHkkIgbjAQGQE2ErIYQC2FDBeE4gAzKsXQANirAsiGIARguQBdjvDKh2IAWgMQCPhNCnAAQAlAAAhAEIAUACIg+B7QgUgCgVAAQiRAAh8BDIgSAKIgCABQivBmhRDQIgPApQgqB+gJCjg");
	this.shape_19.setTransform(672.125,492.3938);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAEAEA").s().p("AETcOIASgQQArgoAkgwQCWjeAXlyQACglAAgmQAAg8gCgyQgOkPhUkXIKVmKIgBgCIADgCQBqFaAAFQQABFyiEDkQgYAqgeAnQhHBdhkA+IgTAMIoxEqIgEACIAAABgAHAYkIABgBIAOghIABgDIgQAlgArczbQg/gog8gcQhBggg+gYIgKgDQhAgYhAgPQgwgLgvgGIJ5l7IADAAQAuADAzALQCOAbCZBNQA+AdA9AnQAuAbAtAfQA0AkAqAgIqIGFQhjhMhqg/g");
	this.shape_20.setTransform(750.1501,476.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(400));

	// Layer_5
	this.instance_4 = new lib.racunar2("synched",0);
	this.instance_4.setTransform(384.65,959.85,1.0853,1.0853,0,0,0,45,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjuAIICqjAIEyCDIjIDug");
	this.shape_21.setTransform(472.65,868.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjhiTIGbgKIAoElImaAWg");
	this.shape_22.setTransform(436.25,930.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3F2F2").s().p("Aj/BHIBJkAQDoAzDOAMIh+E0QjDgci+hXg");
	this.shape_23.setTransform(473.45,921.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.31)").s().p("AmqCxIF9gJIAih2QDoAyDOAMIh9E2QiVgWiPg1IAPBzImaAVgAhLkiICpjAIE0CCIjIDwg");
	this.shape_24.setTransform(456.825,901);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.459)").s().p("AnVJxQhXgQhAgrQgYgRgZgXIgvgqQhqhch+g4QgxgVglgGQgxgIgmAPQACgSATgKQAQgJAWAAQAtgBA2AVQAkAOA4AgIBNAuQArAcAdAZIAvArQAdAbAUAPQA1ApBFAVQBAATBJABQB7AACRg7QCihDBphpQA7g7AmhFQAphIAOhNQAFgcAEgpIADhEIAMlMQAAgKAEgDQACgCAEABQAEABAAADQABCvgIC2QgDBEgFAnQgIA7gQAuQgXA+g2BGQhiCAiQBQQiQBPihARQgjAEgiAAQgxAAgugIgAkFHLQh9gWhhhNQgrgihRhUQhKhGhAgWQghgLgqgDQgcgCgwAAQingBhLACQAygTBCgGQAmgDBSAAQAxAAAfADQAsADAiALQBGAXBTBOIBFBCQAnAmAgAYQBeBEB3ARQB3AQBtgoQBsgpBPhbQBPhaAahyQAJgqAEg2QACggABhBQABhgAFh6QAAgKAEgHQAEgIAIAAIgDDqQgBBIgCAlQgFA8gKAvQgdB4hWBfQhWBeh0AoQhKAahQAAQgrAAgugIgAjgFFQgWgLgWgSQgRgPgUgXQgegggwg8Qgvg4glgdQgzgphAgZQg+gWhFgHQgrgEggAIQgpAKgRAdQAAgUANgRQANgQAUgIQAegMA0AFQCMAOBfA/QAsAeAyA1IBRBgQAXAcAPAPQAVAWAXAMQA2AfBOgHQBZgIBNg0QBNg0AqhPQAphSANiaIAKh8QAHhFAPg0QABgEAGgDQAEgDABAFIgkE/QgIBFgKAkQgPA7gjA0QgjAzgwAlQgwAlg6AUQg5AUg+ACIgIAAQg2AAgngSgAOUEDQhIgJhGhIQg8g7glhLQgMgWgNghIgXg5QhAighShnQgngxgkgVQgmgWg3gGQglgEg+ADQAkgTAqgDQAqgCAoANQA0ASAwAxQAkAlAmA/QAzBTAmBWIAmBaQAWA0AUAiQA3BiBMAoQAtAXAxABQAzABAogZQAzggAThDQASg9gPhAQgNg3gdgnQgsg9hcgpQgfgNgygRQg8gVgVgIQiAgzhLhPQgrgugZg3Qgag8AAg6QAAgMAHgBQAEAAADAFQACAEAAAFQADBCAkA9QAhA5A3AtQAxAoBBAgQAzAYBKAbQBGAYARAIQAxAUAgAYQAoAfAdAsQAlA5AJBAQAKBEgYA7QgZA9g6AlQgwAegyAAQgMAAgNgCgAhHCmQgugSghgzQgLgTgMgcIgTgyIgxiIIgQgpQgJgXgKgRQgYgoglgdQgmgdgtgLQAogIAqAWQAmATAbAlQAWAdATAuQAFAMAYBFQASAyAlBbQALAcAHALQAKAVANANQAgAgAyACQAvABApgZQAkgWAfgoQAYggAXgvQARgiAHgYQAMgsgGg/QgKhOgDgeQgKhhAThfQADgKADgEQADgDAEAAQAFgBACADQAEAEgDAKQgWBLAFBQQABAJAPBsQAKBHgIAuQgGAogXAuQgPAhgfAvQgNATgJALQgNARgNAKQgSAPgdANQgrARgjAAQgaAAgWgIg");
	this.shape_25.setTransform(355.6597,941.9777);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.459)").s().p("AiOC6QgEgcAIgbIAGgQIAFgLQAIgXAGgJQAGgJATgSIAKgJIAbgbQAPgPAJgOQAGgIABgHIAAgKIgBgLQACgKgBgHIgBgGIgDgGIgBgKQgCgDgHgGQgGgFgBgFQAHgDAIACQAHACAEAHIAEAKIAEATQAHAmgKAbQgGANgNAOQgKAKgPANQgVATgIAJQgPARgHARIgFAPIgHAOIgEAHIgDAHQgCAFAAAIIgFAOQgGANABAOQgFgCgBgJgAgfCIQA2gYArgoQATgRAMgSIAPgaQAHgLADgIQAFgKABgQQAHg+gZgtQgPgbgUgJIgMgEQgIgDgEgCIACgKQAWgBAUARQAPAMAMAXQARAfADAZIABAcIABAbQAAAPgEAMQgEAJgIAPQgKASgIAKQgIALgPARQgSAUgQAMQghAZgmAJIgGABQgFAAgCgEgAhcCEQgCgWAQgSQAGgJASgLIBAguQAMgIAEgEQAHgKAGgEQAIgDADgEIAFgKIAHgMQACgFABgRIABgqQgCgZgMgOIgOgQQgJgKACgJQAMAFAOAOIAIAIQAFAHAEALQAEAOABATIABAiQABATgCAGIgHATQgFALgEAFQgFAHgNAJIhfBHQgQAMgFAJIgIAOQgFAFgFAAIgDAAg");
	this.shape_26.setTransform(402.3083,751.9471);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7EUQgHgGgFgGQgNgOACgLIAjAWQAUAOAPAEQALADAMABIAXgBQAZgBAQgEQAogIApgcQAdgTAoglQAMgLAJACQgPAUgSAUQglAmguAXQgxAYgwABIgEAAQg2AAgigagAgqDjQgWgBgYgKQgkgRgeggQAAgDADgBQADgCADAAQAEABAIAFQAZASAQAIQAYANAVACQAJABAVgDQAbgDAQgGQAZgIAcgWQARgNAdgcQAPgPAHgIIAJgOIAKgPQAEgGAFgCQAGgDAFAEQgQAegaAgQg5BDg+AUQgPAFgWAEQgQACgLAAIgDAAgAhkCLQgLgEgWgNQgUgMgIgJQgHgJgLgSIgGgLQgBgDACgDQACgDADgBQAGAEAGAHIAKAOQAMAOAXAOQATALAMACQAIACATgBIATAAIASgBQAlgEAyggQAZgRAPgPQAUgTAKgVQAFgLADgCQADgEAEgBQAEgCAEACQADABACADQACADgBADQAAAEgDACQgEADgDgBQgKAcgaAYQgSASghAWQgdATgRAHQgcALgvACIgGAAQgXAAgMgDgAh4gyQgTgEgXgRQgJgGgCgFQgCgEABgFQABgEADgCQAFgCAHAEIAIAJQAWAXAwgDQAngDAugRQAbgKA2gbIARgJQAIgGAFgHIAGAAQAEADgDAHQgBAEgGAFQgQAPgTAIIgNAGIgMAJQgJAFgVAJIgtAQQgkAKgmABIgFAAQgNAAgJgDgAiHhoQgQgHAAgKQAFgDAIACIANAEQAbAJAfgCQAegCAagOQAGgDAughQAggXAZgDQAEAAAEABQAFADgBADQgcAGgnAdQgtAjgSAIQgcAMgeAAQgdAAgcgMgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAdgBQAcgBAagLQAxgVAngxQAEgFAGgDQAGgDAEAEQgUAlgfAaQghAbgnAMQgVAGgXAAQgSAAgRgEg");
	this.shape_27.setTransform(297.2833,822.6375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgJBxgkQCBgrBbhPQAdgZA1g5IBDhKQAkgqAaglQBBhgAeh0QAdh1gNh0QAAgIADgGQAEgHAFAEQADABAAAHQAOB2gZBzQgaB2hABgQgVAggmAwQgrA2giAmQgsAxgpAkQhdBPhyAsQh1Ath5ADIgCAAQgiAAgGgTgAlSFgQBMgTAogMQCJgmB6haQB2hWBZh4QBFhdAhhYQASgyAOhAQAIgnAMhOQAGANAAATQABAOgCATQgMBggmBdQglBbg6BQQhvCaixBsQgoAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgMAigEQAmgDATgDQAhgFAmgOQAagKApgVQBTgqBBgrQBJgyA6g5QAlgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg2BehmBtQgmApgdAZQgpAkg4AkQglAXhFAmQggASgTAIQgcAOgYAJQgsAQgwAGQgWACgWAAQgaAAgagDg");
	this.shape_28.setTransform(306.9367,924.0894);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgTgHgYIgnh2QgOgogQgkQgXgyglhAQgYgnguhFIgzhJQgfgpgcgYQgJgJgCgGQgCgFADgFQACgFAFAAQAFAAAHAHQB7CPBaCmQAhA8ASAuQANAfAXBJQAPAyAGAeQAIAtgHAkIgJABQgBgIgBgWgACiDXQABgXgHgbQgEgPgMggIgVgzQhKish2iFQgMgNAGgHQAEgFAHAEQAGACAFAGQCbC9BAC7QAJAcADASQAEAZgGAUgACdAjQgFgWgJgaQgPgsgag1QgzhrhFhgQgKgNgGgGQgKgJgLgDQgEgFAFgGQAEgGAHABQAIAAAMANIAVAaQAmA0AiA6QAnBGAeBLQATAwAJAiQALAqgFAZIgKABQABgTgHgegAC6gXQgDgBgDgDQgCgDgBgKIAAgwQAAgdgCgSQgDgVgGgWQgSg8glhCQgYgngVgXQgdgegigLQgHgCgBgFQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgDQADgCAGABQAcAFAfAdQAeAdAXAoQAVAiATAtQAbBBAFArQABAOAAAnQgBAbACAOQADALgFADIgEACIgCgBg");
	this.shape_29.setTransform(356.0915,862.43);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgaAEgiIAIg8QAnkmgVkkIgDgnQALABAEATQAGAgADAlIACBGQACBqgBA6QAABagHBIQgFA7gQB/QgNBtAEBNIAFBEQADAnAAAeQgkh6AJh/gAgnGkQgCglABgYQAAgjADgbQADgfAQhFQAWhkALhCQAPhYADhOQAGiggoi1QgGgagBgOQgCgXAIgQQArCRAJCaQAJCagbCUIgeCQQgRBWgFA7QgCAggCA3QgDA0gJAigAhiGiQAAgcAIg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNABBjQACCBgOBtIgMBQQgbC0gLC2QgNgiAAgugAADFBQADgaALgpQA1iwAWhWQAoiZgGhzQgGiJhGieQgDgFACgHQABgGAFABQACABADAFQBXDGgDCmQgCBJgSBVQgMA2gcBlIhSEkQgDgdAEglg");
	this.shape_30.setTransform(394.4229,838.6109);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgSgPQgegagdgjQgWgbgdgqQgjgxgUghQgOgWgnhHQgXgngHgTQgJgVgHggIgPhBQgBgJACgDQADgEAGABQAFABADAEQACADABAGIABAJQADAwAWA1QAOAiAiA6QAkBBARAZQBRCDB3BjQgCADgEAAQgFAAgIgGgACuE3Qg2gcgyg9QgfgmguhNQhDhtghhEQgyhlgVhZQgDgJACgEQABgEACgCQADgCADAAQAHACACAMQAGAlAPApQAKAdAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHAAAIIgCAAQgFAAgIgEgADDDgQhDghg6hIQgXgcgZgmIgphGQg+hogbg6QgrhfgKhRQgBgHACgCQADgDAEAAQAEABADADQADADABALQAKBFAbBBQAQAlAlBEIA3BjQAuBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgIAAgKgFg");
	this.shape_31.setTransform(295.2719,837.9043);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.459)").s().p("Ah8EfQgPgEgFgGQgDgFABgEQABgDADgBQADgCACABIALADQAPAFASAAQANAAAVgDQAxgIAYgQQASgLAcgeIAWgaQAKgNAQgcIA4hhIADABIACAEQAAAIgHAMIgwBfQgKATgEAFQgGAJgIAIIgpArQgQAQgNAGQgKAFgXAGQglAJgRACQgOACgMAAQgPAAgMgCgAh5B7QgKgBgEgDQgDgBgBgEQgBgEACgDQACgDAKAAQBDAFA+gTQAdgJATgMQALgIASgRQASgTAIgLQAJgNALgWQAVgsARgoQANgeADgVQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAIACAEQABAMgDAMQgBAIgIAVQgVA5gOAdQgKAVgKAOQgMARgSASQgbAZgZALQgUAKghAHQg3AMgrAAIgHAAgAiwgNQgIgEAAgFQAAgCADgCQACgCADAAIALAEQAQAGAegBQAigBAVgDQAdgEAXgLQAjgRAdglQAWgbAXguQANgYAGgRQAIgYACgVIAAgSQABgMACgHIACAAIABACQAEApgDAVQgCAOgIATQgIAWgaAuQgTAigNAPQgMANgUAQQgWARgPAHQgUAJgnAFQgkAEgSAAQgdAAgWgKg");
	this.shape_32.setTransform(365.6143,770.3816);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg+gCg2gaQg6gagkguQgOgSgRgdIglg+QgYgSgQgaIgGgLIgUgUQgfgdg5guQg6gwgigVQg1ghgzgKIgkgFQgVgEgOgHQAhgJAlAFQAiAEAjAPQAcANAiAXQAUAOAlAdQA/AwAlAhIgEgTIgBgGQgNgMgLgOQgfgkgihBQgqhRgQgZQglg4gsgcQgTgNgcgLQgTgIgggJQg5gRgcgHQAYgLAiAGQAXADAlANQAiANASAIQAcANAUAPQAmAdAhA1QAMAWAnBNQAcA7AfAkIAJAKIgDgsQgEg2gGgeQgLgsgYgcQgLgOgUgPQgMgJgYgPIhMgvQBFAPAzAjQA6AoATA6QAKAeACAuIACBOIADAUQAaAVAcAKQAmANA1gFQAYgCBEgNQBmgSBPAFQAQABAzAHIAFgEQBdhLArgbQBRgzBJgMQA2gJB5AMQA8AFAtgBQAhgvAOhHQALg6gChYQgDimgXikQgIg3gCgXQgDgsAIghQArDnAHDuQACA4gCAiQgDAygIAoQgLAwgUAlIgHANQAYgCASgEQBMgTA6g7QAzg0AWhEIgsg9QgggtgQgeQgnhKgLhnQgIhHAFh0IAJBdQAJBeAKAwQAPBNAgA3QAMAVAcAmIAkAyQALgwgBhGQgDh0gchxQgEgPgzioQgjhwgGhLIAqCKQAxCfARBMQAfCEACBtQABBHgNAyQAPAYAQAiQAKAUAWA1QAPAmAHATQAKAhAAAbQABArgUApQgTAngiAfQg7A4heAaQhHAVhqAGIiyALQhkALhGAgQgeAMgrAbIhHAqQhuA8hoAAIgOAAgAl+JUQAYAnAaAUQAZASAkAJQAZAGArAEQAsAEAhgBQAogCAjgJQAxgOBGgsQBVg2AfgPQA1gYBFgLQAxgIBOgEQBVgCArgDQBJgFA1gNQBCgQA1gfQA6gkAhgzQAcgqAAgoQABgVgHgZQgEgOgMgeIgghMQgQgjgRgeQgbBPhDA5QhIA7hYANIgWACQgOASgRAQQgfAcgwAVQgeANg7ATQhfAfg2AMQhTAThFgEQgZgBg0gIIgBAAQgxAlgxAeQg2AggqARQg2AWgyACQg1AEgwgUQAVAmAMAUgAnmG4IAEAJQAYAaASAYIANAJQAtAcBBgEQBMgEBTgtQAsgZBAgxIgsgEQgpgDgzAGQgjAEg4AKQg/AMgdACQgzAEgmgOQgVgHgVgOQAFATAJAQgADyD4Qg4AOg+ArQgWAOhUBEIgJAHQAyAGAcAAQAwABA8gMQAmgIBFgTQBVgXAugVQA9gbAlgoIggAAQgZgCg+gGQgsgEgkAAQg2AAgkAJg");
	this.shape_33.setTransform(334.6273,937.9148);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ8QhEgfgyg3QgYgcgLgaQgNggAHgcQAjBVBIA5QBMA7BXADQA7ACBDgZQArgQBMgqQBVgvAhgPQBEgfA4gHQAugFBIAJIB0ARQBEAJAwABQA+AAA2gPQA9gSApgjQA5gxAXhSQAVhKgJhUQgIhCgdhWQghhdgTg4QhGjKgWjUQgBgPADgKQADgNALgEQgBBuAbB6QAWBkAtB9IA2CZQAcBWAHBGQAIBWgWBLQgaBTg5AzQgsAmg9ATQg2ARhCABQg0ABhFgJQgygHhGgLQg+gJgnADQg3ADhBAcQgmAQhMAsQhNArglAQQhBAcg4AEIgUABQg9AAg9gbgAnVIIQgfgNghgVQgZgQgjgaIgRgOQgJgIgEgIQgFgKABgLQABgMAIgHQA1BPBdAkQBcAkBcgVQA4gMBAglQAVgMBag6QBBgrAygVQBBgcA8AAQAkABA0AMQA5AQAdAGQBuAXA9gsQAegWASgmQAPgjADgpQABgigHgsQgGgfgMgtIg6jlIgRhGQgJgngEggQgJhEAEhWQACgzAMhoQAEAxgHBsQgGBlAHA3QAEAbAIAkIAQA/IA/DlQAPA2AGAeQAIAvgBAmQgBAtgRAnQgSAqggAZQhFAziFgcQgkgHhDgQQg8gLgsAHQgvAIg2AeQgWAMhFAwQgzAigqAXQgzAbgxAQQg3ARg1ABIgDAAQg4AAgwgSgAmHHbQgogKgkgmQgYgagggyQgNgTgEgNQgIgTAFgPQANANAwBHQAkA1AkARQAiARAugEQAggCAygPQArgMAegMQAogPAegRQAWgNAsghQAqggAYgOQA6giBEgKQBEgKBCAQQA2ANAOABQAmAEAWgUQARgPAGgbQAEgUgBgfQgDgugGg5IgNhmQgMhygBiSQgBhRAFi1QAIANADASQACALAAAWQABAogCCkQgBB8AJBPQABAPATB3QAMBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgEQgSgDgqgKQgogKgVgBQhKgFhaAzQgZAOguAhQgvAggZAOQhlA7hxAQQgYAEgTAAQgVAAgPgEg");
	this.shape_34.setTransform(376.0977,893.1597);

	this.instance_5 = new lib.Serverc("synched",0);
	this.instance_5.setTransform(239.45,880.4,1,1,0,0,0,53.5,128.2);

	this.instance_6 = new lib.Serverc("synched",0);
	this.instance_6.setTransform(308.4,840.1,1,1,0,0,0,53.5,128.2);

	this.instance_7 = new lib.Serverc("synched",0);
	this.instance_7.setTransform(377.3,799.5,1,1,0,0,0,53.5,128.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.459)").s().p("AlxGoQCLgIBxglQCCgrBahPQAdgZA1g5QAxg0ASgWQAkgqAaglQBChgAdh0QAdh0gMh1QgBgIADgGQAEgHAFAEQADACABAGQANB2gZBzQgaB2hABgQgVAgglAwQgsA2giAnQgrAwgqAkQhdBPhyAsQh1Ath4ADIgCAAQgjAAgGgTgAlSFgQBNgTAngMQCJgmB7haQB1hWBZh4QBFhdAhhYQASgxAOhBQAIgnAMhOQAGANABATQAAAPgCASQgMBhgmBdQglBag6BQQhvCaiwBsQgpAZggAOQgjAQhHAUIjpBEQAlggBCgVgAm8EzQAUgLAigFQAngDASgDQAhgEAmgPQAagKApgVQBTgqBBgrQBKgyA6g5QAkgkA+hLQAigpARgYQAjg0AbhJQASgyAWhWQAEgQAJABQgGB4hGB8Qg1BehnBtQglApgeAZQgpAkg4AkQglAXhFAmIgyAbQgdAOgYAIQgsARgwAFQgWADgWAAQgaAAgagEg");
	this.shape_35.setTransform(162.9974,846.1394);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.459)").s().p("ACKGJIgCgfQgCgSgHgYIgnh3QgPgogQgkQgWgyglhAQgZgnguhFQgjg0gPgUQgfgpgcgZQgKgJgBgGQgCgFADgFQACgEAFAAQAFgBAGAIQB8COBaCmQAgA8ATAuQAMAfAXBJQAQAzAGAdQAIAtgHAkIgJABIgCgegAChDXQABgXgGgaQgEgQgNggIgUgzQhKirh3iGQgMgNAHgHQAEgFAHAEQAFACAGAGQCbC9A/C7QAKAcACASQAEAZgFAVgACdAjQgGgWgJgaQgOgsgag1Qg0hrhEhgQgKgNgGgGQgLgJgKgDQgEgFAFgGQAEgGAHABQAIAAAMANIAUAaQAnA1AhA5QAoBGAeBLQASAwAKAjQALApgGAZIgKABQACgTgHgegAC6gWQgEgCgCgCQgDgEAAgKIAAgwQAAgdgDgSQgDgVgGgWQgRg8gmhCQgXgngVgXQgdgegigLQgIgCgBgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQADgCAGABQAcAFAfAdQAdAdAYAoQAUAiATAtQAcBBAEArQACAOgBAnQgBAbADAPQACAKgEADQgCACgDAAIgBAAg");
	this.shape_36.setTransform(212.1683,784.48);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.459)").s().p("AiNFUQACgZAFgjIAIg8QAnkmgWkkIgDgnQALABAEAUQAHAgACAlQACAWAAAwQACBpAAA6QgBBagHBIQgFA7gQB/QgNBtAEBNIAGBEQACAnAAAeQgkh6AJh/gAgnGkQgBglAAgYQAAgiADgcQAEgfAPhFQAWhjALhDQAPhYADhOQAHiggpi1QgGgZgBgPQgCgXAIgQQArCSAJCZQAJCagaCUIgfCQQgRBWgEA8QgDAfgCA3QgDA0gJAigAhhGiQAAgcAHg2IAmkUQAekEgkkFQALACAGAMQAFAKABAPQALCNACBjQABCBgOBtIgMBRQgaCzgMC2QgNgiABgugAADFBQADgaALgoQA1ixAWhWQAoiZgGhzQgGiIhGifQgDgFACgHQABgGAFACQADAAACAFQBXDHgDClQgCBJgSBWQgMA2gcBkIhSEkQgDgdAEglg");
	this.shape_37.setTransform(250.489,760.6765);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.459)").s().p("ABvFqQgggWgRgPQgfgagdgjQgVgbgegqQgjgxgUghQgOgWgnhHQgXgngHgTQgIgVgIggIgPhBQgBgJADgDQACgEAGABQAFABADAEQADAEAAAFIACAKQACAvAWA1QAOAiAiA6QAkBBARAZQBSCDB2BjQgCACgEAAQgFAAgIgFgACuE3Qg2gcgyg8QgfgnguhNQhDhsghhFQgyhkgVhaQgDgJACgEQABgEACgCQADgCAEABQAGABACAMQAGAmAPApQAKAcAWAuQBHCYBfCLQAbAnAVAXQAcAgAfASQALAGAFAFQAIAHABAIIgCAAQgGAAgIgEgADDDgQhDghg6hIQgXgcgYgmQgRgagZgrQg+hpgbg6QgrhegKhSQgBgGACgDQADgDAEABQAFAAACADQADAEACAKQAJBFAbBBQAQAlAmBEQAhA+AWAlQAtBNAoAwQA1A/A8AiIAKAHQAFAEACAGIgGABQgHAAgLgFg");
	this.shape_38.setTransform(151.325,759.9751);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.459)").s().p("Ah9EeQgOgDgFgHQgEgEACgFQABgCACgCIAGgBIAKADQAQAGARgBQAOAAAVgDQAxgIAYgPQASgMAbgeIAWgZQAKgNAQgdIA5hhIADACIABADQAAAIgGANIgwBfIgOAYIgOARIgpArQgQAPgOAHQgJAFgXAGQglAJgRACQgNACgMAAQgPAAgOgDgAh6B6QgJAAgEgDQgEgCAAgEQgCgDADgDQACgEAKABQBCAEA+gSQAegJATgNQALgHARgSQATgTAHgKQAJgNALgWQAWgsARgoQAMgeAEgVQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIACAEQAAAMgCAMQgBAIgIAVQgWA4gOAeQgKAUgKAPQgLAQgTATQgaAZgZALQgUAKghAHQg4AMgrAAIgHgBgAixgOQgHgDAAgFQAAgDACgBQADgCADAAQACAAAIADQARAHAegBQAigCAVgCQAdgFAXgLQAigQAeglQAWgbAXguQAMgZAGgRQAJgXABgVIABgTQAAgLACgHIADAAIABABQAEApgDAWQgDANgHAUQgJAVgZAvQgUAigNAOQgMANgUAQQgWASgOAGQgUAJgoAFQgjAFgSAAQgegBgWgKg");
	this.shape_39.setTransform(221.7042,692.4514);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.459)").s().p("Ai2LRQg/gDg2gZQg5gagkguQgOgSgRgeIglg9QgYgSgQgbQgEgEgCgGIgVgUQgegdg5gvQg6gvgigVQg2gigygJIgkgGQgWgDgNgHQAhgKAlAFQAhAEAkAQQAcANAhAXQAVANAlAdQA/AxAlAhIgEgUIgBgFQgNgMgLgOQggglghhBQgqhQgQgZQglg4gsgdQgUgMgcgLQgTgIgfgJQg6gSgcgHQAZgKAiAFQAXAEAlANQAiANARAIQAcANAVAOQAmAdAhA2QAMAVAmBOQAdA6AeAlIAKAKIgEgtQgDg1gHgeQgKgtgYgcQgMgOgTgOIgkgYIhMgwQBFAPAzAjQA6ApATA6QAKAdABAvIADBOIACAUQAaAVAdAKQAlANA2gFQAYgCBEgNQBlgTBQAGQAQABAyAGIAGgEQBchLAsgbQBRgyBJgMQA2gJB5ALQA7AGAtgBQAigwAOhGQALg7gChYQgDilgYikQgIg4gBgWQgEgsAIgiQAsDoAHDuQABA4gBAiQgDAygJAoQgKAvgUAmIgHANQAYgCASgFQBMgSA6g7QAzg0AVhEIgrg+QgggsgQgfQgnhJgLhnQgIhIAFhzIAJBdQAJBeAJAvQAQBOAgA3QALAUAcAnIAlAyQALgxgChFQgCh1gchwIg4i4QgihvgHhLIArCJQAxCgARBLQAfCEACBtQAABIgMAxQAPAZAQAiIAfBIQAQAmAGAUQAKAgABAcQABArgVApQgSAngiAfQg7A3heAbQhIAVhpAGQilAJgNACQhlALhGAfQgdANgrAbIhIAqQhtA8hpAAIgNAAgAl/JTQAYAoAbATQAYATAlAJQAZAGArAEQAsAEAggCQApgBAigKQAxgNBGgtQBVg2AggOQA1gYBFgLQAwgIBPgEQBVgDArgDQBJgFA1gNQBCgPA0ggQA7gjAhgzQAcgrAAgnQAAgWgHgYQgEgOgMgeQgTgwgMgcQgQgkgRgeQgbBQhEA4QhHA8hYAMIgXADQgNASgSAPQgfAcgwAWQgeANg6ATQhfAfg2AMQhTAThGgEQgYgBg1gIIgBAAQgwAkgxAeQg2AhgqARQg2AVgyADQg1ADgxgUQAVAnAMATgAnnG4IAFAJQAYAaARAYIAOAJQAtAcBBgEQBMgEBSguQAtgYBAgxIgsgFQgpgCgzAFQgkAEg4ALQg/AMgcABQg0AEgmgNQgUgHgVgOQAFASAIARgADyD3Qg4AOg+ArQgWAPhVBDIgIAHQAxAHAcAAQAxABA8gMQAmgIBFgTQBVgYAugUQA8gbAmgoIghgBIhWgHQgtgEglAAQg1AAgjAIg");
	this.shape_40.setTransform(190.7006,860.0118);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.459)").s().p("AotJ7QhEgegyg3QgYgcgLgaQgOggAIgdQAjBWBIA4QBMA8BXACQA6ACBEgZQAqgQBMgpQBVgwAigPQBDgfA5gGQAugFBIAJIBzARQBFAJAwAAQA+ABA1gQQA9gRAqgkQA5gxAXhSQAVhKgKhUQgIhCgchVIg1iWQhFjJgWjUQgBgPACgLQADgNALgEQAABuAbB7QAWBkAtB9IA2CYQAbBXAHBFQAJBWgXBLQgZBUg5AyQgsAng9ASQg3ARhCACQg0AAhEgJQgzgGhFgLQg/gJgmACQg4AEhAAcQgmAQhMArQhNAsglAQQhBAcg4AEIgSABQg/AAg9gcgAnVIHQgggMghgVQgYgQgjgbIgRgNQgKgJgDgIQgFgKABgLQAAgMAJgGQA1BOBcAkQBdAlBcgVQA3gNBBgkQAVgMBag7QBBgrAxgVQBCgbA8AAQAkAAAzANQA6AQAdAFQBuAYA9gsQAegWASgmQAPgkACgpQACghgIgsQgFgfgMguIg6jkQgMgrgGgcQgJgngEggQgJhEAFhWQACgyAMhoQAEAxgHBrQgGBlAHA3QADAcAJAkIAQA/IA/DlQAOA2AGAeQAJAvgBAmQgCAsgQAnQgSArghAYQhFA0iFgcIhngXQg7gLgsAHQgvAHg2AfQgWAMhFAwQgzAigqAXQg0AbgxAPQg3ARg1ABIgDAAQg3AAgwgSgAmHHaQgogKgkglQgZgagggyQgMgTgFgNQgHgTAFgQQAMANAxBIQAjA1AlARQAhARAugEQAhgDAxgOQArgMAfgMQAngPAegRQAXgOAsggQAqggAYgOQA5giBFgKQBDgKBDAQQA1ANAOABQAnADAWgTQARgPAGgbQAEgVgBgeQgDgugHg5QgKhKgCgcQgNhygBiTQAAhQAFi1QAHAMADATQACALABAWIgBDMQgCB8AJBOQACAQASB3QANBTAAA2QAAAXgDATQgFAXgLAPQgRAYghAJQgcAHgjgFQgSgCgrgLQgngKgVgBQhLgFhZA0QgZAOguAgQgvAhgaAOQhkA6hyARQgXADgTAAQgVAAgPgEg");
	this.shape_41.setTransform(232.1576,815.2535);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.459)").s().p("Ah7ETIgMgLQgNgOACgLQAKAEAZARQAVAPAOAEQALADAMAAIAYAAQAYgBAQgEQAogIApgcQAdgTAogmQANgLAIADQgPAUgSATQglAnguAWQgxAZgwABIgGAAQg0AAgigbgAgqDjQgWgBgYgLQgkgQgeggQAAgDADgCQADgBADAAQAFABAHAFQAZASAQAIQAYAMAVACQAJABAVgCQAbgEAQgFQAZgJAcgVQARgNAdgcQAPgPAHgIIAJgPIAKgOQAEgGAFgCQAGgEAFAFQgQAegaAfQg5BEg+AUQgPAFgWADQgQADgLAAIgDAAgAhkCKQgLgDgWgNQgUgMgIgKQgHgIgLgSQgFgJgBgCQAAgDACgDQABgEADAAQAGAEAGAHIAKANQAMAPAXAOQATALANACQAHACATgBIATAAIASgBQAlgFAyggQAZgRAPgOQAUgTAKgVQAFgLADgDQADgDAEgBQAEgCAEABQADACADADQABADAAADQgBADgDADQgDACgEAAQgKAbgaAZQgSARghAXQgdASgRAIQgcALgvACIgGABQgXAAgMgFgAh4gyQgTgEgXgRQgJgGgCgGQgCgEABgEQABgEADgCQAFgCAHAEIAIAIQAWAXAwgDQAogCAtgRQAbgLA2gaIARgKQAJgFAEgIIAGAAQAEAEgCAHIgHAIQgRAPgTAJIgNAGIgMAIQgJAGgVAIQgbALgRAFQgkALgnAAIgGABQgMAAgJgDgAiHhoQgQgIAAgKQAFgCAIABIANAEQAcAKAegCQAegDAagNIA1glQAggWAYgDQAFgBADACQAFACgBAEQgcAGgnAdQgtAjgSAHQgcAMgeAAIgCAAQgdAAgagLgAhKjDQgrgIgegbQAMgFARAFIAdALQAaAKAegBQAbgCAagLQAxgUAngxQAEgGAGgCQAGgDAEAEQgUAlgfAaQghAbgmALQgXAHgXAAQgRAAgRgEg");
	this.shape_42.setTransform(153.345,744.7017);

	this.instance_8 = new lib.Serverc("synched",0);
	this.instance_8.setTransform(100.85,798.6,1,1,0,0,0,53.5,128.2);

	this.instance_9 = new lib.Serverc("synched",0);
	this.instance_9.setTransform(169.8,758.3,1,1,0,0,0,53.5,128.2);

	this.instance_10 = new lib.Serverc("synched",0);
	this.instance_10.setTransform(238.7,717.7,1,1,0,0,0,53.5,128.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_43.setTransform(154.45,865.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_44.setTransform(286.65,950.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_4}]}).wait(400));

	// Layer_6
	this.instance_11 = new lib.racunar1("synched",0);
	this.instance_11.setTransform(1296.9,315.1,1,1,0,0,0,44.9,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(400));

	// Layer_7
	this.instance_12 = new lib.Serverp("synched",0);
	this.instance_12.setTransform(1186.2,335.55,1,1,0,0,0,53.5,128.2);

	this.instance_13 = new lib.Serverp("synched",0);
	this.instance_13.setTransform(1254.95,295.2,1,1,0,0,0,53.5,128.2);

	this.instance_14 = new lib.Serverp("synched",0);
	this.instance_14.setTransform(1323.75,254.45,1,1,0,0,0,53.5,128.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_45.setTransform(1277.45,378.6);

	this.instance_15 = new lib.Serverp("synched",0);
	this.instance_15.setTransform(1033.45,244,1,1,0,0,0,53.5,128.2);

	this.instance_16 = new lib.Serverp("synched",0);
	this.instance_16.setTransform(1102.2,203.65,1,1,0,0,0,53.5,128.2);

	this.instance_17 = new lib.Serverp("synched",0);
	this.instance_17.setTransform(1171,162.9,1,1,0,0,0,53.5,128.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.31)").s().p("A3jJSILEmlIgBgBILCmkIABAAII4lTIAAAAIICkyIIGEtIl5DhIAAAAMghIATtg");
	this.shape_46.setTransform(1125.6,287.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_45},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(400));

	// Layer_8
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBEICGBQAdZtBIhuBCIHxEnInyEpIHxEmIn4EtIHyEoIB4BIEAs9gDzIhxBDInxEnIHyEpIn4EsInmEiIB4BHEAlOgIbIhyBDIHwEoIHyEoInxEoICGBQAN92FIhnA9IHmEiInyEoIHwEnIn4EsInmEhIHxEnInwEnIHxEnIHyEqIB4BHAVmxmIhqBAIHvEnInxEoIHwEoIn3EqIHwEpInmEgInvEnInxEpIHzEpInxEoIB4BGAGB6vIhjA7IH4EsInxEoIHlEiIn3EsIHvEnIHxEmInmEiIHwEnIHyEqInvEnInwEoIB3BHAlK/kIB5BIInyEoIHxEoIn3EsIH3EtInmEhIHmEhInvEnIHvEnInwEnIHwEnInwEpIHwEoInzEpIC+ByAs/6+IB8BKIn3EsIHxEoInmEiIH3EsInvEnInxEnInwEoInzEpIhsBAA072UICBBMInnEiIHyEoInwEnIH4EsIHmEhInwEnIHvEnInxEnIn0EqIHxEpIhrA/EgxxgCwIjSB9Eg0BgEFICQBVIHxEoInzEpIH4EsIHlEhIhrBBEgsMgIrICMBTInxEoEgkYgNQICIBRInwEnIHxEpIH3ErIHnEhInxEnIHvEnIHxEpIn0EqIHxEnIhsBAEg0jAE5ICwBoIhkA7EgqAAB4IH4EsIHmEgIn0EqIHvEnIhrBBA8kx1ICDBPInvEnIHxEoInwEoInxEnAhz/UIheA4IHvEoInwEoIH3EsIn3EtIHlEhInlEhIHuEnInuEnIHvEnInvEnIHvEpInvEoIHxEpIjWCA");
	this.shape_47.setTransform(1099.825,405.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1).p("EA0xAA0IhzBFICGBQAVmxlIhqA/IHvEnInxEoIHwEoIn3ErIHwEoInmEhIHyEpIB4BHAdZtAIhuBBIHxEoIHwEoInxEnIHyEpIn4EsIB4BHAhz/UIheA5IHvEoInwEoIH3EsIn3EsIHlEhInlEiIHuEmInuEnIHvEnInvEoIHvEoInvEoIHxEpIB4BHAlK/jIB5BIInyEoIn3EsIHxEoInmEhIH3EsInvEnIHmEhInwEoIHvEmInxEoIHxEoIn0EqIHxEnIC+ByAGB6uIhjA7IH4EsInxEoIHlEhIn3EsIHvEnInmEhIHxEoInwEmIHxEoInxEoIHzEpIB3BHAN92EIhnA9IHmEhInyEoIHwEnIn4EsIHxEnInmEiIHwEnInvEnIHyEpIB4BHEAlOgIbIhyBEInyEoIHxEnIn4EsIHyEpInmEhInvEnInwEoInxEoIjWCAAs/69IB8BKIHxEoIn3EsIH3EsInmEhIHmEiInvEmIHvEnInwEnIHwEoInwEoIHwEoInzEpIhsBAA8kx0ICDBOInvEnIHxEoIH4EsInxEnIHnEiInxEnIHvEnIn0EqIhrBAA072UICBBNInnEhIHyEoInwEnInwEoInxEnIH4EsInzEpIhsBAEgkYgNQICIBRInwEoIHxEoIH3ErInwEoIHmEhIn0EpIHvEoIHxEoIhrBAEgsMgIqICMBTInxEoIHxEnInzEpIH4EsIHlEhIhrBBEg0BgEEICQBVIjSB8EgxzAGhIhkA8Eg0jAE5ICwBoEAs9gDzIhxBEIHyEoInxEoICGBQ");
	this.shape_48.setTransform(426.775,803.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(17,19,59,0.157)","rgba(99,28,183,0.788)"],[0,1],174,-217.8,-201.6,404.5).s().p("A9le2Qy6lYlVn0QpBsXfRxiQdOyQNkg9QOWh3I6DzUAkQAL5gZPASEQsqLi2CLaQu6IrukAAQleAAlchOg");
	this.shape_49.setTransform(1090.0213,422.6772);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(74,178,220,0.31)").s().p("AgaAHQgOgCBGgLQgkANgQAAIgEAAg");
	this.shape_50.setTransform(535.1847,729.2611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(400));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(728.7,574.7,718.7,465.29999999999995);
// library properties:
lib.properties = {
	id: 'compositionSplashLanding',
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
an.compositions['compositionSplashLanding'] = {
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