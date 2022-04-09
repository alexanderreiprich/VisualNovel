"use strict";
var Template;
(function (Template) {
    async function ExampleScene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Aisaka: {
                T0001: "toller text",
                T0002: "noch tollerer text",
                T0003: "yay"
            },
            Protagonist: {
                T0001: "wheeee"
            }
        };
        await Template.ƒS.Location.show(Template.locations.nightcity);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.angry, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0001);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0002);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Aisaka.T0003);
    }
    Template.ExampleScene = ExampleScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // define transitions
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "Transitions/puzzle.png",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        nightclub: "Audio/nightclub.ogg",
        // sfx
        click: "Pfad"
    };
    Template.locations = {
        nightcity: {
            name: "Nightcity",
            background: "Images/Backgrounds/Nightcity.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.ExampleScene, name: "ExampleScene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map