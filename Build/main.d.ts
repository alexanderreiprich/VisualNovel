declare namespace Endabgabe {
    function Empty(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        blink: {
            duration: number;
            alpha: string;
            edge: number;
        };
        reverse_blink: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swoosh: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        beach: string;
        click: string;
        cassette_in: string;
        cassette_out: string;
        cassette_scroll: string;
        ophelia: string;
        freaks: string;
        twentymins: string;
        fiveofive: string;
        emotion: string;
        righthere: string;
        spacesong: string;
    };
    let locations: {
        home_bedroom: {
            name: string;
            background: string;
        };
        home_table: {
            name: string;
            background: string;
        };
        home_door: {
            name: string;
            background: string;
        };
        home_path: {
            name: string;
            background: string;
        };
        home_path_close: {
            name: string;
            background: string;
        };
        forest_path_before: {
            name: string;
            background: string;
        };
        forest_path_into: {
            name: string;
            background: string;
        };
        cat_search_forest: {
            name: string;
            background: string;
        };
        cat_search_field: {
            name: string;
            background: string;
        };
        cat_search_bush: {
            name: string;
            background: string;
        };
        split_castle_forest: {
            name: string;
            background: string;
        };
        split_forest: {
            name: string;
            background: string;
        };
        split_lake: {
            name: string;
            background: string;
        };
        lake_entrance: {
            name: string;
            background: string;
        };
        lake: {
            name: string;
            background: string;
        };
        lake_castle: {
            name: string;
            background: string;
        };
        lake_polluted_water: {
            name: string;
            background: string;
        };
        lake_rocks: {
            name: string;
            background: string;
        };
        lake_bridge: {
            name: string;
            background: string;
        };
        lake_evening: {
            name: string;
            background: string;
        };
        deep_forest_entrance: {
            name: string;
            background: string;
        };
        deep_forest_split: {
            name: string;
            background: string;
        };
        deep_forest_split_bridge: {
            name: string;
            background: string;
        };
        deep_forest_split_path: {
            name: string;
            background: string;
        };
        clearing_ground: {
            name: string;
            background: string;
        };
        clearing_center: {
            name: string;
            background: string;
        };
        clearing_trees: {
            name: string;
            background: string;
        };
        evening_walk: {
            name: string;
            background: string;
        };
        home_bedroom_night: {
            name: string;
            background: string;
        };
        ending_all: {
            name: string;
            background: string;
        };
        ending_bag: {
            name: string;
            background: string;
        };
        ending_rock: {
            name: string;
            background: string;
        };
        ending_none: {
            name: string;
            background: string;
        };
        blank: {
            name: string;
            background: string;
        };
    };
    let animations: {
        leftToMid: string;
        rightToMid: string;
        midToLeft: string;
        midToRight: string;
        rightOut: string;
        leftOut: string;
    };
    let newPositions: {
        bottomleft: ƒ.Vector2;
        bottomright: ƒ.Vector2;
        bottomcenter: ƒ.Vector2;
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        questionmark: {
            name: string;
        };
        cat: {
            name: string;
        };
        fox: {
            name: string;
        };
        turtle: {
            name: string;
        };
        deer: {
            name: string;
        };
        girl: {
            name: string;
        };
        tommy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                neutral: string;
                sad: string;
                curious: string;
                surprised: string;
            };
        };
        june: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                neutral: string;
                surprised: string;
                uncomfortable: string;
                concerned: string;
            };
        };
        richard: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                neutral: string;
                sad: string;
            };
        };
        deername: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                neutral: string;
                sad: string;
                curious: string;
                crying: string;
                surprised: string;
            };
        };
    };
    let items: {
        rock: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        bag: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let ingameMenuButtons: {
        inventory: string;
        save: string;
        load: string;
        credits: string;
    };
    function buttonFunctionalities(_option: string): Promise<void>;
    function toggleCredits(): void;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
    function animate(_animation: string): ƒS.AnimationDefinition;
    let dataForSave: {
        nameProtagonist: string;
        studiesProtagonist: string;
        encounteredAnyAnimal: boolean;
        encounteredCat: boolean;
        encounteredFox: boolean;
        encounteredTurtle: boolean;
        encounteredDeer: boolean;
        freedCat: boolean;
        freedFox: boolean;
        freedTurtle: boolean;
        freedDeer: boolean;
        freedAnimals: number;
        travelWithCat: boolean;
    };
}
declare namespace Endabgabe {
    function IgnoreTheCat(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function MeetingAgain(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function PetTheCat(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ScareTheCat(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function TravelWithCat(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function TravelWithoutCat(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function WakingUp(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function BefriendFox(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function BefriendFoxFirstEncounter(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function DontBefriendFox(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ForestAlone(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ForestWithCat(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function IntoDeepForest(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function MeetFox(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function EnterLake(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ExamineCastle(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ExamineWater(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Interrupted(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function MeetTurtle(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function TurtleStory(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function BridgeAlone(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function CatBackstory(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function CatBridge(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function DeepForestAlone(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function EncounterFoxAgain(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function EncounterFoxAgainNoCat(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function FreeFox(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function RevisitLake(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ArrivalClearing(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function EncounterDeer(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function FreeDeer(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Reunion(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function BadEnding(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function GoodEnding(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function NeutralEndings(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function WalkHome(): ƒS.SceneReturn;
}
