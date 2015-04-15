
var ZenvaRunner = function() {};

ZenvaRunner.Boot= function() {};

ZenvaRunner.Boot.prototype = {

  preload: function(){
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('preloaderBar', 'assets/images/preloader-bar.png');
  },

  create: function(){
    this.game.stage.backgroundColor='#fff';

    //A nao ser que o jogo necessite de multitouch
    this.input.maxPointers = 1;

    if(this.game.device.desktop){
      //Se estivermos a usar um desktop, o jogo pode ser apenas orientado para o meio
      this.scale.pageAlignHorizontally = true;

    } else{
      //Caso seja num mobile device
      //teremos de definir uma escala minima e maxima
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.minWidth = 568;
      this.scale.minHeight = 600;
      this.scale.maxWidth = 2048;
      this.scale.maxHeight = 1536;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.setScreenSize(true);

    }
    this.state.start('Preloader');
  }

};
