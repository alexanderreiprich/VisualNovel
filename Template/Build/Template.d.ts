declare namespace Template {
    function BeachScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function ExampleScene(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        beach: string;
        click: string;
        seagull: string;
        swimming: string;
        music: string;
        people: string;
    };
    let locations: {
        nightcity: {
            name: string;
            background: string;
        };
        beach: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    function showCredits(): void;
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
