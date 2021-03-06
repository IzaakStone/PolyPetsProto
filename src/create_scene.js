class CreateScene extends Phaser.Scene {
    constructor() {
        super({key: 'create'});
    }

    preload() {
        this.load.image('create_background', 'assets/create_background.png');
        this.load.image('create_scene_arrow', 'assets/create_scene_arrow.png')
        this.load.image('fight_button', 'assets/fight_button.png');
        this.load.image('archer_head', 'assets/archer_head.svg');
        this.load.image('archer_body', 'assets/archer_body.svg');
        this.load.image('archer_legs', 'assets/archer_legs.svg');
        this.load.image('barbarian_head', 'assets/barbarian_head.svg');
        this.load.image('barbarian_bdy', 'assets/barbarian_legs.svg');
        this.load.image('barbarian_legs', 'assets/barbarian_legs.svg');
    }

    create() {
        var top = 1, middle = 1, bottom = 1;

        this.cameras.main.setBackgroundColor(0xA3817A)
        var createSceneBackground;
        createSceneBackground = this.add.image(511.5, 383, 'create_background');

        var createSceneText;
        createSceneText = this.add.text(319, 97.5, 'CREATE', { fontFamily: 'GlueGun-GW8Z', fontSize: '100px', fill: '#000'});

        let createSceneArrowLeft1 = this.add.image(this.cameras.main.width / 4, 300, 'create_scene_arrow');
        createSceneArrowLeft1
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                top--;
        });

        var createSceneArrowLeft2 = this.add.image(this.cameras.main.width / 4, 440, 'create_scene_arrow');
        createSceneArrowLeft2
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                middle--;
        });

        var createSceneArrowLeft3 = this.add.image(this.cameras.main.width / 4, 580, 'create_scene_arrow');
        createSceneArrowLeft3
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                bottom--;
        });

        var createSceneArrowRight1 = this.add.image((this.cameras.main.width / 4) * 3, 300, 'create_scene_arrow');
        createSceneArrowRight1.flipX = true;
        createSceneArrowRight1
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                top++;
        });

        var createSceneArrowRight2 = this.add.image((this.cameras.main.width / 4) * 3, 440, 'create_scene_arrow');
        createSceneArrowRight2.flipX = true;
        createSceneArrowRight2
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                middle++;
        });

        var createSceneArrowRight3 = this.add.image((this.cameras.main.width / 4) * 3, 580, 'create_scene_arrow');
        createSceneArrowRight3.flipX = true;
        createSceneArrowRight3
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                middle++;
        });


        var archerHead = this.add.image(this.cameras.main.width / 2, 300, 'archer_head');
        var barbarianHead = this.add.image(this.cameras.main.width / 2, 300, 'barbarian_head')
        var archerBody = this.add.image(this.cameras.main.width / 2, 440, 'archer_body');
        var archerLegs = this.add.image(this.cameras.main.width / 2, 580, 'archer_legs');

        let fightButton = this.add.image(this.cameras.main.width / 2, 675, 'fight_button');
        fightButton
            .setScale(0.25)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                this.scene.start('fight', {top: 'archer_head', middle: 'archer_body', bottom: 'archer_legs'})
        });
    }
}

export default new CreateScene();