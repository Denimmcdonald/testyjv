
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * Preload.
 */
function Preload() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Preload_proto = Object.create(Phaser.State.prototype);
Preload.prototype = Preload_proto;
Preload.prototype.constructor = Preload;

Preload.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Preload.prototype.preload = function () {
	
	this.load.pack('intro', 'assets/pack.json');
	this.load.pack('preload', 'assets/pack.json');
	
	
	var _preloader_bar = this.add.sprite(385.0, 352.0, 'preloader_bar');
	
	
	
	this.load.setPreloadSprite(_preloader_bar, 0);
	
};

Preload.prototype.create = function () {
	this._init();
	
};

/* --- end generated code --- */
// -- user code here --

//-------------------------------------------------------------------------------------------
//_addBitmapFontFromAtlas
//-------------------------------------------------------------------------------------------
Preload.prototype._addBitmapFontFromAtlas = function(s_key, s_atlasKey, s_atlasFrame, s_dataKey,
s_dataType) {
  var ATLAS_KEY = s_atlasKey || Thunderjack.DesignData.ALTAS_MAIN;
  var ATLAS_FRAME = s_atlasFrame || s_key;
  var DATA_KEY = s_dataKey || s_key;
  var DATA_TYPE = s_dataType || "xml";
  this.game.cache.addBitmapFontFromAtlas(s_key, ATLAS_KEY, ATLAS_FRAME, DATA_KEY, DATA_TYPE);
};

//-------------------------------------------------------------------------------------------
//_addBitmapFontsFromAtlas
//-------------------------------------------------------------------------------------------
Preload.prototype._addBitmapFontsFromAtlas = function() {
  this._addBitmapFontFromAtlas(Thunderjack.DesignData.FONT_THE_BOLD_FONT);
  this._addBitmapFontFromAtlas(Thunderjack.DesignData.FONT_THE_BOLD_FONT_WIN);
};

//-------------------------------------------------------------------------------------------
//_init
//-------------------------------------------------------------------------------------------
Preload.prototype._init = function() {
  this._addBitmapFontsFromAtlas();
  this.game.state.start("Intro");
};