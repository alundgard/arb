(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 188,
	fps: 30,
	color: "#CC6600",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.upperBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2A").s().p("Am9JQICkgWQEegiEOgJQCFgFBLgHQgaAWgOAgQhEAEhjAEQkLAJkcAhIiLAUIgYADQAAgYgHgagAnsHMIDGgbIAAAAQEigjEKgJQCKgEBLgJIADAyQhMAJiKAEQkIAJkfAiIjRAcIAEgygAqjHfQgdgDgKgLIgBgBQgPgNADgRQgBgMANgOIAAABQASgWApgNQAZgIAhgEQAbgEBXgOIDJgiIABAAQEzgvFQgLIBogFQB0gHA0gLIgEgxQAbgDAcALIAAABIABAAQAWAIAFALQAQAVgVAVIABgBQgNARg6ALQg8AMhsAIIhqAEQlNANkxAtIABAAIjVAkIhoAQQgsAGgYAMIACAAIAAAyIgSAAgAqNFOQgqgDgNgNQgQgNADgTQAAgLAMgOIAAgBIABAAQASgXAugMQAWgHAcgEIB5gPIDDgbIAAAAQExgmFJgTIBjgFQBvgHA5gIIgDgwQAZgBAiAIQAVAFAKAGQAeATgRAXQgIAThYAPQhAALhpAHIhkAGQlHASkvAmIABAAIjNAcIhvAPQgnAFgWAKIgJAEIAIABIAAAEIgDAugAq8C4IAAAAQgVgZAggeQAUgWAjgNQAcgKAmgFIBpgOIDGgZIABAAQEggiFMgNIBagFQBugGA6gIIgDgmIABAAQAhgCAfAHQAWAEAIAGQAPAKgBANQACAMgNAMIAAAAQgOAMhNALQg/AIhqAHIhbAEQlJAQkfAhIjRAbIheANQgyAGgcASIgHAEIAGABIgDAyQgvgDgKgVgAqqAcQgTgJgBgPQgGgMAPgPIABgBQAOgSA2gKIAkgFIAAAAQAdgCBqgOICwgWIABAAQEwghE9gHIBcgBICogEIgDgtIABAAQAUgBAlAGQBEAOgLAdQgBAZhrANQhBAIhnAEIhfADQk7AFktAhIi6AYQhjANgcADQgbACgRAEIgBAAIgDAmQglgDgOgHgAqjhGQgTgKAAgOQgGgOAOgQIABAAQAOgVA2gJIAkgEIABAAICGgQICtgUIABAAQErgfE+gKIBVgCICpgEIgFgxIACAAQARgCAnAIQBAAMgCAYIAAABQACAchyARQhBAJhnAGIhYADQk7AJkqAeIi2AXIh/ANQgbADgRAEIgDAqQgmgDgOgHgAKYjwIAAAAIAAgBIAAABgApni3QgjgCgQgGQgPgGgFgHQgNgPAHgRQAEgcBQgKIAOgBIAAAAQAfgDB9gQICegVIABAAQEzgjE9gKIBNgDQBngEA/gGIgBgrIABAAQATgBAoAIQA/ALACASIAAABQAUAfg3AOQgVAFguAFIgQACQhAAFhpAFIhPACQk6AKkxAjIioAVIiUASIgWADIgDAoIgBAAgApfkqQgmgCgOgJQgSgJgBgPQgFgNANgQQAOgXA3gKIAkgFIABAAICGgOICmgTIAAAAQEigcE+gMIBHgCQBngFBAgGIAAgnQAYAAAoAGQA/AIADATIAAAAQAQAVgeARQgGADgPAEQgVAFgtAFIgYABQhBAGhoAEIhIADQk8AMkhAcIiuATIh/AOQgbACgRAFIgCAtIgBAAgApYmaQgkgBgMgIQgVgMADgQQgCgNAOgOQAQgSAsgIQATgFAYgCICAgSICjgXIABAAQEdgjEqgCIBVgBICpgBIAagBQgPgCgLAAIgEAAIAAgzIABAAQAYAAAnAJQBCAPgFAbIAAABQACAdh5AOQhCAHhmADIhYABQknACkaAiIABAAIiuAaQheANgaADQggADgTAGIgBAmIgCAAg");
	this.shape.setTransform(76.4,106.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6CB9A").s().p("AhXLMIgDgBQg4ghgSg+QgKgkAFgiQgCglAUgjQAbgxA0gQIAJh3IAGhOIABAAIA7uWIAAAAIABgiIABACIABABICmAXIgDA/IgCAAIgCAxIABAAIgDA9IgBAAIgDAyIABAAIgCAbIgCAhIgEA1IABAAIgFBLIgBAAIgDAyIAAAAIgDAzIgBAAIgDAxIAAAAIgEBBIgBAKIgBAAIgDAyIABAAIgGBIIAAAAIgEAyIABAAIgCAOIgFBGIAAADIgSEMIAAAAQAaAWAOAgQAFALAEAMQAHAYAAAXQAAAngVAlQgUAlghAVQgTAMgYAHQgYAHgUAAQgoAAglgVg");
	this.shape_1.setTransform(17.7,111.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6CB9A").s().p("AghLaQgYgHgTgNQghgUgUglQgVglAAgnQAAgXAHgYQAEgMAFgLQAOggAagWIAAAAIgSkMIAAgDIgFhHIgCgNIABAAIgEgyIAAAAIgGhIIABAAIgDgyIgBAAIgBgKIgEhBIAAAAIgDgxIgBAAIgDgzIAAAAIgDgyIgBAAIgFhLIABAAIgEg1IgCghIgCgbIABAAIgDgyIgBAAIgDg9IABAAIgCgxIgCAAIgDg/ICmgXIABgBIABgCIABAiIAAAAIA7OWIABAAIAGBOIAJB3QA0AQAbAxQAUAjgCAlQAFAigKAkQgSA+g4AhIgDABQglAVgoAAQgUAAgYgHg");
	this.shape_2.setTransform(134.3,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FF00").ss(1.6,0,0,10,true).p("AoeAKIAAgCAIfgHIAAgC");
	this.shape_3.setTransform(77.7,169.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C308A").s().p("AozAKIAVgCIAAACIgVAAgAIfgJIAVABIgVABg");
	this.shape_4.setTransform(77.7,169.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6584C").s().p("AjjNSQglgGkDABIAAgCIg00eIgDAAIAAgCQgahEgFhPQgMifBig1QBig1B4AsQA2ATEVBOIDQg/QAigVAmgNQB4gsBiA1QBiA1gLCfQgHBOgYBEIgBADIgDABIgOUKIAAACQjgAShlAGQiPAIiTAAQh9AAgxgIg");
	this.shape_5.setTransform(75.7,85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2C2A").s().p("AAAAEIAAgIIABAJg");
	this.shape_6.setTransform(124.8,156.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2C2A").s().p("AgBAHIABgPIACAQg");
	this.shape_7.setTransform(123.6,142.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,151,186.2);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAC3AB").s().p("AlelbIK8AAIAAKxQgygjg5gYQhygwh9AAQh7AAhyAwQg+Aag3Ang");
	this.shape.setTransform(0,-65.3,1,0.693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#434546").s().p("AgPgvQA4ApBOABIAFAAQhyAziFACQBBgkArg7g");
	this.shape_1.setTransform(13.8,101);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDB09C").s().p("Ag+DhIAAlGIBsAAIAAFGgABOimQgQgQAAgYQAAgIADgKIBqAAQADAJAAAJQAAAXgQARQgRAQgXAAQgXAAgRgQgAidimQgQgQAAgYQAAgIADgKIBrAAQADAJAAAJQAAAYgRAQQgQAQgYAAQgXAAgRgQg");
	this.shape_2.setTransform(0.7,35.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AF9686").s().p("ApnDJQAAgVACgWQAPjRCkikQAmgmAqgeQA2gmA+gbQBygwB8AAQB9AAByAwQA5AZAyAiQAvAgAqAqQClClAODRQACAVAAAVIAACYQgSgYgEgdIAAgbIgLANQgNATgKAgIgGAeQgMg8gtguQg9g8hVAAIq9AAQhVAAg9A8QgkAkgOAtIgIgMQgOgWgXgGIgTgDIAIAsQABAggOAWg");
	this.shape_3.setTransform(0.5,-12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAC3AB").s().p("AgXBmQgqgpAAg7QAAg5AqgpQAkgmA1gDQgCAWAAAVIAADCQgHAMgLAIQgIAGgFAMQgggKgYgag");
	this.shape_4.setTransform(-67.6,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444546").s().p("AmvFrQhZhjg6inQgyiNgKiIQgIhkASgmQAFgMAHgGQALgJAHgLQAOgWgBghIgHgrIATACQAWAHAPAVIAHAMQAoBJghCxQgVBwBEBbQBBBXB3ArQB5ArCCgVQCNgYBuheIAAANIAGgKQCNBpB3i2QAlg2AfhPIAUg5QgJh3APhOIAHgeQAJggANgUIAMgMIAAAbQAEAdARAYIAEAEIACBRIACCMQgBDhgaA1QgfB1hjBOQhiBPhvgBIgFAAQhOgCg6gpQgrA+hAAkQhYAyiDABIgBAAQiEAAhqh3g");
	this.shape_5.setTransform(-1.3,62.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4CFB7").s().p("AmUFxQh3grhAhXQhEhdAUhwQAhivgnhJQAOgsAkgkQA8g8BVAAIK+AAQBVAAA9A8QAtAuALA8QgPBOAJB1IgUA5QgfBOglA5Qh3C2iMhpIgHAKIABgOQhtBfiOAYQgrAHgqAAQhVAAhSgdgAibCXIBuAAIAAlGIhuAAgAgdkYQAAAXAQARQAPAQAXAAQAXAAARgQQAQgRAAgXQAAgKgDgJIhoAAQgDALAAAIgAkKkYQAAAXAQARQARAQAXAAQAYAAAQgQQARgRAAgXQAAgKgDgJIhrAAQgDALAAAIgAIMjGIgDgFIAAiXQAAgWgCgVQAvAGAjAjQApApAAA7QAAA6gpAqQggAggrAHg");
	this.shape_6.setTransform(10,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-110.9,148.5,221.9);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444546").s().p("AjABYQhZgahTgqIhBgjIA/AJQBPAIBRAAQEBgBC1hfQBDgkA2AHQAwAHAUAlQATAkgTAoQgVArg7AZQiLA8iXAAQh0AAh/glg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-12.5,86.2,25.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444546").s().p("AiNCcQgikrCcjcQAegsApgEQAmgEAcAeQAdAdABArQABAxgkAsQiBCegsD8QgVB/AEBfQgwhqgQiWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-41.3,29.7,82.6);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444546").s().p("AgSCGQhqiJApirQAJgiAagSQAYgQAZAEQAbAEANAWQAOAYgLAkQgqCCAqCOQAWBJAdAuQg9gjg0hGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-24,19.2,48);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222C30").s().p("AhSAoQgngSgdgeQgIgJAAgMQABgMAJgIQAJgIAMABQAMAAAIAJQAVAYAcAMQAcALAeAAQAfAAAcgLQAcgMAVgYQAIgJAMAAQAMgBAJAIQAJAIAAAMQABAMgIAJQgdAegoASQgnASgrAAQgqAAgogSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-5.8,31.8,11.6);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape.setTransform(-0.1,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1812").s().p("AoiFJIAAqRIRFAAIAAKRgAgOE5IAbAAIAAgIIgbAAgAn4EfIPxAAIAAo+IvxAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("An4EfIAAo9IPxAAIAAI9gAHyC0IAAiEIkYlHIhvAAgAHygHIAAgpIjEjnIgjAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E4E4").s().p("AjCjlIBvAAIEWFIIAACDgAgijlIAiAAIDDDlIAAApg");
	this.shape_3.setTransform(30.3,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-32.9,109.5,65.9);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyrBqIAAjTMAlXAAAIAADTg");
	mask.setTransform(119.7,10.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F1F").s().p("AsIAsQlCgSAAgaQAAgYFCgUQFCgSHGAAQHHAAFCASQFCAUAAAYQAAAalCASQlCATnHAAQnGAAlCgTg");
	this.shape.setTransform(119.7,7.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,1.1,220,12.7);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egj3ACmIAAlLMBHvAAAIAAFLg");
	mask.setTransform(229.7,16.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F1F").s().p("A4SBXQqFgkAAgzQAAgyKFgkQKEgkOOAAQOPAAKEAkQKEAkAAAyQAAAzqEAkQqDAkuQAAQuPAAqDgkg");
	this.shape.setTransform(226.7,20.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.7,8.1,440,24.7);


(lib.lowerBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2C2A").s().p("AISI6IACglIAAgIIAAgFQgKgMgXgFQhvgVhJgFQhhgGkwAAQiyAAhRgMQgygIgOgMIAAAAIAAAAQgXgTAMgUQADgMAVgKQAWgLAWAAIACAAIAAAqIABAAQBCAMDFAAQEyAABiAGQBMAFBzAWQAOADANAFQAjAOAMAgQAOAigVAPQgKANgeAAIgGAAgAIZG6IgBAAIABgOIABgEIABggIAEABIgEgCIgHgBIgDgBQhhgahDgIQiMgRkXAAQjcAAhSgRQgWgFgMgHIAAAAQgVgLgBgNQgJgTAWgRIgBABQAQgOAWgBIACAAIAAAgIABABQA8AUD1AAQEbAACOASQBGAIBkAbIABAAQAwAIAKAmIAAAAQAMAigcAOQgMAIgYAAIgLgBgAIfFNIgEgBIAEgyIACAAIADABIgDgCQgNgHgYgCIiogWIABAAQibgQkFgMQjSgKhQgRQgbgGgMgHIAAABQgXgNACgOQgHgSAYgOQAQgKAVgCIACAfIAAAAQA+ASDrALQEGAMCcAQIAAAAICoAWQATADAPAEQAwANAKAgQAPAkgeAPQgMAIgZAAIgLAAgAIlDBIAAgsIgOgCQgwgEixgWQjPgUkFgBQiSgBhFgMQgqgHgNgMIAAAAQgUgRAHgRQAAgNATgMIABAAQARgJAXgDIAFAoQA2AMCkABQEIABDSAUIAAABIAAAAQCwAVAvAEIAQACQBGAKgBAjQAHAdghANQgQAHggAAIgBAAgAIsBUIACgwIgPgCIjmgdQjZgVkNgLQiHgFhKgMQhZgOgDgWQgQgeA7gQIgBAAQAZgIASAAIABAAIABAuIABAAQA9AFCaAGQEPALDbAXQAkAEDDAZIALACQBLAMgDAlIAAAAQAFAdggANQgOAFgZAAIgLAAgAIygnIgDAAIAFgqIgJgBQgpgGjTghQjzgfkJAAIgBAAQh9gFg9gLQgrgIgLgLIABAAQgVgSAOgUQADgJASgIQARgHAQAAIACAAIAAAeIABAAQAsALCSAGQENAAD2AfIABAAQDSAiAoAFIAGABQBTAMgJAqQABAbgiAJQgKADgQAAIgUgBgAI6imIABgtIgWgDIkBgjQj4gckKAAQh1AAg9gJQg3gIgJgPIgBAAQgOgTAOgTQAFgIAQgIQAUgJARAAIACAAIAAAmIABAAQAuAHCIAAQEOAAD6AcIABAAIEAAjIATADQA/AMAGAfQANAggkAOQgOAGgcAAIgIAAgAI/kMIACgtIgOgDIgBAAIkggyIAAAAQkUgqkfgKQhEgCg2gDQhagGg0gKQgugIgTgMQgqgYAYggQALgVA6gUIABAAIAtgNIAPAvIgtAOIAAAAQgSAGgLAFQAOAFAWAEQAwAJBSAFQA3AEBHACQEhAKEZArIABAAIEfAyIAKACQAwAJANAeIAAAAQAIAQgFAMQgDAOgRAIQgLAGgYAAIgOAAg");
	this.shape.setTransform(64.6,57.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F5F8E").s().p("An0t7IAEAVIgCgYIgBgCIgLhPIA0iBQHMkTGRDvIBsCUIgEBgIAAABIg6Q/IABgYIgBAUIg3QJIADASImFAFIgGgJIlXASg");
	this.shape_1.setTransform(72.7,95.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BABCBE").s().p("AkcAhIAAhBIAAAAIHYAAIBhAAIAAAnIAAAag");
	this.shape_2.setTransform(46.6,256.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjrBOQAGg/A+gqQApgdAxgMQAlgJAoAAQBiAABFAyQA/ArAGA+g");
	this.shape_3.setTransform(41.8,245);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6F70").s().p("ADNDEIAAgpIhhAAQgGg+g/gtQhEgwhiAAQgqAAgkAHQAZgiAMhGQAHgtABg1IFWABIAAAAIAYAAIAAGGg");
	this.shape_4.setTransform(54.6,237.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BABCBE").s().p("AkcAhIAAgaIAAgnIBhAAIHYAAIAAAAIAABBg");
	this.shape_5.setTransform(103.9,256.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D6F70").s().p("AjMDEIAAmGIFugBQAAA1AHAtQAMBGAYAiQgjgHgpAAQhjAAhEAwQg/AtgFA+IhiAAIAAApg");
	this.shape_6.setTransform(95.9,237.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjrBOQAFg+BAgrQBFgyBhAAQApAAAkAJQAyAMAoAdQBAAqAFA/g");
	this.shape_7.setTransform(108.8,245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-29.9,132.5,289.5);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AijAwQhEhCAAhhIHPAAQAABhhEBCQhEBEhgAAQhfAAhEhEg");
	mask.setTransform(24,11.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjuArQAAgkAYgXQAXgaAhAAIE9AAQAhAAAXAaQAYAXAAAkg");
	this.shape.setTransform(23.9,19.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,14.9,46.5,8.4);


(lib.Tween5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#222C30").s().p("AhSAoQgngSgdgeQgIgJABgMQAAgMAJgIQAJgIAMABQAMAAAIAJQAVAYAcAMQAcALAeAAQAfAAAcgLQAcgMAVgYQAIgJAMAAQAMgBAJAIQAJAIAAAMQABAMgIAJQgdAegoASQgnASgrAAQgqAAgogSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-5.8,31.8,11.6);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F3817").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape.setTransform(-29.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F3817").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_1.setTransform(29.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-5.9,70.2,11.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD4037").ss(10.2,0,1).p("Ah3jdIDvB7Ig0FBIhTgUg");
	this.shape.setTransform(-42.4,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD4037").s().p("AgPDKIhomnIDvB7Ig0FAg");
	this.shape_1.setTransform(-42.4,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AD4037").ss(10.2,0,1).p("AB9jdIj5B7IA+FBIBUgUg");
	this.shape_2.setTransform(36.4,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD4037").s().p("Ah8hiID5h7IhnGnIhUAUg");
	this.shape_3.setTransform(36.4,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6584C").s().p("ADuBmQhmhmiOAAQiRAAhnBmQhlBmAACRIl1kjQg6gdgWgaQglgpABhNIAAjpIaaAAIAADpQAABNglApQgWAag6AdImEEjQgBiRhmhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.6,-34.9,169.2,72.2);


(lib.cordCurve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2C2A").ss(1.6,0,0,10,true).p("AHOiyQjVEwrMAy");
	this.shape.setTransform(46.8,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,95.1,37.7);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,0.2,1,1,0,0,0,23.9,11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222C30").s().p("AijAvQhEhCAAhgIHPAAQAABghEBCQhEBFhgAAQhfAAhEhFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-11.6,47.8,23.6);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(229.7,16.6,1,1,0,0,0,229.7,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,459.4,33.3);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(119.7,10.7,1,1,0,0,0,119.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.4,21.3);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgiWAWkMAAAgtHMBEuAAAMAAAAtHg");
	mask_1.setTransform(229.7,144.5);

	// Layer 3
	this.instance = new lib.Group();
	this.instance.setTransform(229.7,278.8,1,1,0,0,0,119.7,10.7);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(229.7,273.4,1,1,0,0,0,229.7,16.6);
	this.instance_1.alpha = 0.199;

	this.instance.mask = this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,256.8,440,32.1);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Victim's Eyes
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(54.4,70.8,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Victim's Right Eyebrow
	this.instance_1 = new lib.Tween5_1("synched",0);
	this.instance_1.setTransform(32.9,51.7,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Victim's Left Eyebrow
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(76.2,56.1,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Victim's Mouth
	this.instance_3 = new lib.Tween7("synched",0);
	this.instance_3.setTransform(54,103.2,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// collar
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(55.8,152.6,0.706,0.701,0,169.5,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Victim's Head
	this.instance_5 = new lib.Tween11("synched",0);
	this.instance_5.setTransform(54.3,94.8,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Right Hair Strand
	this.instance_6 = new lib.Tween8("synched",0);
	this.instance_6.setTransform(39.7,22,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Middle Hair Strand
	this.instance_7 = new lib.Tween9("synched",0);
	this.instance_7.setTransform(49.2,7.5,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Left Hair Strand
	this.instance_8 = new lib.Tween10("synched",0);
	this.instance_8.setTransform(67.9,25,0.744,0.744,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-23.2,122.7,202.2);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_107 = function() {
		contGSAP();
	}
	this.frame_186 = function() {
		contGSAP();
	}
	this.frame_241 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(107).call(this.frame_107).wait(79).call(this.frame_186).wait(55).call(this.frame_241).wait(1));

	// Head
	this.instance = new lib.head("synched",0);
	this.instance.setTransform(225.6,63.9,0.282,0.282,0,0,0,56.1,139.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:57.9},4).to({regY:140.1,rotation:12.7,x:231.5,y:65.6},5).to({regX:56,regY:140.2,rotation:4.3,x:227.1,y:58.5},5).to({regY:140.1,rotation:-5.9,x:220.3,y:67},5).to({regY:140.3,rotation:10.9,x:237.8,y:52.5},5).to({x:247.4,y:66.1},5).to({regY:140.4,rotation:4.5,x:209.6,y:66.2},5).to({regX:55.9,regY:140,rotation:5.2,x:229.9,y:51.4},5).to({regX:55.7,regY:140.1,rotation:12.4,x:226.2,y:63.9},5).to({regX:55.5,regY:140,rotation:18.6,x:244.4,y:59.1},5).to({regX:55.3,rotation:13.2,x:236.9,y:64.8},5).to({regX:55.2,regY:140.2,rotation:18.9,x:227.3,y:65.5},5).to({regX:55.6,regY:140.1,rotation:12.1,x:237.9,y:58.7},5).to({x:239.3,y:63.9},5).to({x:244.8,y:55.8},5).to({regY:140,rotation:15.2,x:236.9,y:65.8},5).to({x:218.9},5).to({regX:55.5,rotation:22.9,x:239.9,y:61.7},5).to({x:240.5,y:66.9},5).to({regX:55.3,regY:139.9,rotation:25.1,x:251.3,y:64.9},5).to({regX:55.1,regY:139.8,rotation:17.9,x:241.2,y:64.6},5).to({regY:139.7,rotation:3.4,x:231.5,y:59.2},5).to({rotation:3.4,x:229.8,y:64.7},5).to({regX:55,regY:139.8,rotation:27.2,x:224.9,y:69.6},5).to({rotation:24.2,x:243.6,y:60.6},5).to({regX:54.8,rotation:18,x:243.3,y:55.2},5).to({regX:54.7,rotation:85.6,x:307.1,y:118.8},6).to({x:319.2,y:153.1},5).to({regX:54.6,regY:140,rotation:83.6,x:309.2,y:159.5},4).to({regY:140.2,rotation:94.1,x:314.9,y:152.6},4).to({rotation:88.1,x:325.1,y:156.7},5).to({regX:54.8,regY:140.3,rotation:93.8,x:327.7,y:152.8},5).to({x:335.7,y:165.9},5).to({regX:54.6,regY:140.2,rotation:100.6,x:338.7,y:161.3},5).to({regX:54.5,rotation:90.7,x:350.8,y:161.5},5).to({regY:140.1,rotation:96.9,x:353.5,y:157.3},5).to({regY:140.2,rotation:90.7,x:363,y:162.3},5).to({regX:54.6,regY:140.1,rotation:98.6,x:365.9,y:155.5},5).to({rotation:85.4,x:374.3,y:157.7},5).to({startPosition:0},1).to({regX:54.8,rotation:95.1,x:257.8,y:165.1},16).wait(32));

	// upperBody
	this.instance_1 = new lib.upperBody("synched",0);
	this.instance_1.setTransform(226,108.8,0.282,0.282,0,0,0,73.8,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:102.8},4).to({rotation:12.7,x:222,y:109.5},5).to({regX:73.6,regY:170.9,rotation:4.3,x:224.2,y:103.2},5).to({regX:73.7,regY:170.8,rotation:-5.9,x:225.4,y:111.5},5).to({regY:170.9,rotation:10.9,x:229.7,y:96.6},5).to({x:239.3,y:110.2},5).to({regY:170.7,rotation:4.5,x:206.6,y:110.9},5).to({regX:73.5,regY:171,rotation:5.2,x:226.2,y:96.2},5).to({regX:73.4,regY:170.8,rotation:12.4,x:217,y:107.8},5).to({regY:171,rotation:18.6,x:230.3,y:101.7},5).to({regX:73.5,regY:170.9,rotation:13.2,x:227.2,y:108.6},5).to({rotation:18.9,x:213.2,y:108.1},5).to({regY:170.8,rotation:12.1,x:228.7,y:102.6},5).to({x:230.1,y:107.8},5).to({x:235.6,y:99.7},5).to({regX:73.6,rotation:15.2,x:225.5,y:109.2},5).to({x:207.5},5).to({regX:73.5,regY:170.7,rotation:22.9,x:222.8,y:103.2},5).to({x:223.4,y:108.4},5).to({regX:73.2,rotation:25.1,x:232.7,y:105.7},5).to({regX:73.3,rotation:17.9,x:227.9,y:107.5},5).to({regX:73.2,regY:170.8,rotation:3.4,x:229.3,y:104.1},5).to({rotation:3.4,x:227.6,y:109.6},5).to({regX:73.3,rotation:27.2,x:204.9,y:109.7},5).to({regX:73.5,regY:170.9,rotation:24.2,x:225.7,y:101.8},5).to({regY:171,rotation:18,x:229.9,y:98},5).to({regX:74,regY:170.8,rotation:85.6,x:262.5,y:122.8},6).to({x:274.6,y:157.2},5).to({regX:73.7,rotation:83.6,x:264.8,y:165.1},4).to({regY:171,rotation:94.1,x:270.3,y:150},4).to({rotation:88.1,x:280.4,y:158.7},5).to({rotation:93.8,x:283.1,y:150.4},5).to({x:291.1,y:163.5},5).to({regX:73.8,rotation:100.6,x:294.7,y:153.7},5).to({rotation:90.7,x:306.1,y:161.5},5).to({regX:73.9,regY:170.8,rotation:96.9,x:309,y:152.5},5).to({regX:73.8,rotation:90.7,x:318.2,y:162.3},5).to({regX:73.7,rotation:98.6,x:321.7,y:149.3},5).to({regY:171,rotation:85.4,x:329.7,y:161.7},5).to({startPosition:0},1).to({regY:170.9,rotation:95.1,x:213.2,y:161.5},16).wait(32));

	// lowerBody
	this.instance_2 = new lib.lowerBody("synched",0);
	this.instance_2.setTransform(225.7,108.2,0.282,0.282,0,0,0,73,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:102.2},4).to({regX:73.2,regY:5.8,rotation:-0.9,x:225.8,y:108.2},5).to({regX:73,regY:5.7,rotation:7,x:225.7,y:102.2},5).to({regX:72.9,rotation:-3.2,x:226.6,y:109.4},5).to({rotation:5.5,x:229.9,y:97.3},5).to({x:239.8,y:108.2},5).to({regX:72.8,regY:5.5,rotation:-1,x:206.8,y:108.9},5).to({regX:72.7,rotation:11.2,x:228.3,y:96.4},5).to({regX:73,rotation:1.2,x:219.6,y:107.9},5).to({rotation:7,x:231.3,y:101.7},5).to({rotation:1.5,x:228.1,y:108.5},5).to({x:213.1},5).to({regX:73.2,regY:5.7,rotation:8.7,x:228.1,y:102.5},5).to({x:229.5,y:107.7},5).to({x:235,y:99.6},5).to({regY:5.8,rotation:-1,x:227.3,y:109.2},5).to({x:209.3},5).to({regX:73,regY:5.9,rotation:6.7,x:224.6,y:103.4},5).to({x:225.1,y:108.6},5).to({regY:5.8,rotation:8.9,x:234.4,y:106},5).to({regX:73.1,rotation:1.7,x:229.6,y:107.6},5).to({rotation:1.7,x:229.3,y:103.3},5).to({x:227.6,y:108.7},5).to({x:208.6,y:108.1},5).to({regX:73,regY:5.9,rotation:17.4,x:225.3,y:103.2},5).to({regY:6,rotation:11.2,x:229.7,y:99.5},5).to({regY:6.4,rotation:58.1,x:263.1,y:122.5},6).to({regX:78.9,regY:-0.8,rotation:104.5,x:275.8,y:160.9},5).to({regX:78.5,regY:-1.2,rotation:91.9,x:265.2,y:168.6},4).to({rotation:82.2,x:271.3,y:154.9},4).to({regX:78.8,regY:-1.1,rotation:89.4,x:283,y:164.2},5).to({regX:78.7,regY:-1.2,rotation:80.9,x:284.9,y:152.3},5).to({regX:78.8,regY:-1.1,rotation:92.6,x:291.8,y:167.1},5).to({rotation:85.9,x:295.8,y:157.2},5).to({regX:78.9,rotation:93.8,x:305.8,y:167.3},5).to({regY:-1,rotation:84.1,x:309.6,y:153.7},5).to({regX:79,regY:-0.8,rotation:93.8,x:318.3,y:166.1},5).to({regY:-0.6,rotation:84.4,x:322.1,y:153.4},5).to({regY:-0.7,rotation:94.1,x:329.3,y:165.5},5).to({startPosition:0},1).to({regX:79.1,regY:-0.6,rotation:90.7,x:214,y:165.3},16).wait(32));

	// TV screen
	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.setTransform(109.9,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},29).to({scaleX:0.91,rotation:-6.7,x:108.4,y:131.7},2).to({startPosition:0},4).to({scaleX:1,rotation:0,x:109.9,y:131.1},5).to({startPosition:0},12).to({rotation:-4.5,x:104.2,y:132.4},5).to({startPosition:0},4).to({rotation:0,x:109.9,y:131.1},8).to({startPosition:0},10).to({rotation:-9,x:104.2,y:132.4},5).to({rotation:-4.5},4).to({rotation:0,x:109.9,y:131.1},8).to({startPosition:0},18).to({rotation:-4.5,x:104.2,y:132.4},5).to({startPosition:0},4).to({rotation:0,x:109.9,y:131.1},8).to({startPosition:0},63).to({scaleX:0.92,rotation:-4.5,x:109,y:132.4},6).to({scaleX:1,rotation:-8.2,x:99.2,y:134.5},10).to({rotation:0,x:109.9,y:131.1},8).wait(24));

	// TV
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjUA9IAOgXICOgLIAAhXIBxAAIAABXICOALIAOAXg");
	this.shape.setTransform(109.8,170.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(242));

	// cord
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2C2A").s().p("ABhBbQg/gIg0gMQgLAKgNAGQggAPgvgJQgugJgWgMQgMgIgDgGQgGgKAJgIQALgKAmABQApACA6APIAfAHQAJgJAIgNQAKgRAVguQAXgvAQgaIAMAIQgQAYgWAvQgWAvgMASQgFAKgGAIQAwALA5AIQA2AHA2AFIgBANQg2gDg3gJgAi/AzIgBABQACADAIAFQAVALArAJIAAAAQAqAHAcgNIAMgHIgUgFQg5gPgngCIgIAAQgYAAgHAGg");
	this.shape_1.setTransform(99.5,164.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(242));

	// curveCord
	this.instance_4 = new lib.cordCurve("synched",0);
	this.instance_4.setTransform(172,157.3,1,1,0,0,0,46.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.27,y:152.4},4).to({scaleY:1,y:157.3},5).to({regY:17.9,scaleY:1.22,y:153.4},5).to({regY:17.8,scaleY:1,y:157.3},5).to({scaleY:1.33,y:151.4},5).to({scaleX:1.1,scaleY:1,x:178.2,y:157.3},3).to({regY:18.1,scaleX:1.15,scaleY:0.11,rotation:-16,x:180,y:159.2},2).to({regY:17.8,scaleX:0.95,rotation:-21.5,x:170.5,y:157.7},5).to({regY:17.9,scaleX:1,scaleY:1.52,rotation:0,x:172,y:148.1},5).to({scaleY:1.14,y:154.9},5).to({scaleY:1.17,y:154.4},5).to({scaleY:1.04,y:156.6},3).to({scaleY:0.14,rotation:-16.3,x:173.1,y:161.6},2).to({regY:18,rotation:-21,x:171.6,y:158},5).to({regY:17.9,scaleY:0.96,rotation:0,x:172,y:158.1},5).to({scaleY:0.84,y:160.2},5).to({regY:18,scaleY:1.02,y:157.1},5).to({regY:17.9,scaleY:0.81,y:160.8},4).to({regY:18,scaleX:1.14,scaleY:0.08,rotation:-16,x:176.1,y:159.1},1).to({regY:18.3,scaleX:1.04,rotation:-19.4,x:170.6,y:157.6},5).to({regX:46.4,regY:18.1,scaleY:1.13,rotation:-0.5,x:173.6,y:154.7},5).to({scaleY:0.99,y:157.1},5).to({regY:18,scaleY:0.9,x:173.7,y:158.7},5).to({regX:46.5,scaleY:0.77,x:173.8,y:161},5).to({regX:46.4,regY:18.1,scaleY:1.02,x:173.7,y:156.7},5).to({scaleY:0.86,y:159.5},5).to({regY:18.5,scaleY:0.04,rotation:-17.7,x:171.3},1).to({regY:17.7,rotation:-19.7,x:170.8,y:157.9},4).to({regY:18.1,rotation:-20.7,x:170.5,y:157.1},5).to({regY:17.4,rotation:-18.2,x:171.2,y:159.1},5).to({regX:46.3,regY:16.3,rotation:-13.8,x:171.9,y:162.8},4).to({regY:18.3,scaleX:1.26,rotation:-6.1,x:183.1,y:168.2},6).to({regX:46.2,regY:17.9,scaleX:0.85,scaleY:0.51,rotation:0.2,x:164.1,y:166.1},5).to({regX:46.1,scaleX:0.96,rotation:0.2,x:169.3},9).to({startPosition:0},5).to({scaleX:1.06,x:173.8},5).to({scaleY:0.55,y:165.3},5).to({scaleX:1.21,x:180.7},5).to({startPosition:0},5).to({regY:17.8,scaleX:1.33,x:186.3},5).to({startPosition:0},5).to({regX:46.2,scaleX:1.44,scaleY:0.67,x:191.6,y:163.2},5).to({regY:17.9,scaleY:0.06,rotation:-5.8,x:191.3,y:167.1},1).wait(48));

	// TV Shadow
	this.instance_5 = new lib.ClipGroup_2();
	this.instance_5.setTransform(110.4,139.4,0.282,0.282,0,0,180,229.6,145.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(242));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,94,300,188);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;