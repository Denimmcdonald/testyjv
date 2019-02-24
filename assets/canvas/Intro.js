
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * Intro.
 */
function Intro() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Intro_proto = Object.create(Phaser.State.prototype);
Intro.prototype = Intro_proto;
Intro.prototype.constructor = Intro;

Intro.prototype.init = function () {
	
};

Intro.prototype.preload = function () {
	
};

Intro.prototype.create = function () {
	var _background = this.add.sprite(0.0, 0.0, 'intro1', 'background');
	
	var _start_button = this.add.button(406.0, 354.5000305175781, 'intro1', this._onStartButtonPressed, this, 'game_button_start_over', 'game_button_start_norm', 'game_button_start_down', 'game_button_start_norm');
	
	this.add.sprite(103.0, 123.0, 'intro1', 'thunderjack_label');
	
	this.add.sprite(640.0, 673.0, 'intro1', 'intro-dev-name');
	
	var _btnWebsite = this.add.button(640.0, 723.0, 'intro1', this._onWebLinkPressed, this, 'intro-gameplaycoder-over', 'intro-gameplaycoder-norm', 'intro-gameplaycoder-over', 'intro-gameplaycoder-norm');
	
	
	
	// fields
	
	this.fBackground = _background;
	this.fStart_button = _start_button;
	this.fBtnWebsite = _btnWebsite;
	this._init();
	
};

/* --- end generated code --- */
// -- user code here --

//-------------------------------------------------------------------------------------------
//shutdown
//-------------------------------------------------------------------------------------------
Intro.prototype.shutdown = function() {
  this._animatedBackground.dispose();
  this._animatedBackground = null;
};

//-------------------------------------------------------------------------------------------
//_init
//-------------------------------------------------------------------------------------------
Intro.prototype._init = function() {
  var clickSound = this.game.add.sound("snd_button_click");
  this.fStart_button.setDownSound(clickSound);
  this.fBtnWebsite.setDownSound(clickSound);
  this._initAnimatedBackground();
};

//-------------------------------------------------------------------------------------------
//_initAnimatedBackground
//-------------------------------------------------------------------------------------------
Intro.prototype._initAnimatedBackground = function() {
  this._animatedBackground = new Thunderjack.AnimatedBackground(this.game, this.fBackground);
  this._animatedBackground.start();
};

//-------------------------------------------------------------------------------------------
//_onStartButtonPressed
//-------------------------------------------------------------------------------------------
Intro.prototype._onStartButtonPressed = function() {
  this.game.state.start("GamePlay");
};

//-------------------------------------------------------------------------------------------
//_onWebLinkPressed
//-------------------------------------------------------------------------------------------
Intro.prototype._onWebLinkPressed = function() {
  window.open("https://gameplaycoder.com/", "_blank");
};