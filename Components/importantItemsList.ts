import { fullItemList } from "./fullItemsList";

const processingItemGroupsBasic = [
    [
        {
            name: 'Enhanced crystal teleport seed',
            processingPhase: 'component',
        },
        {
            name: 'Enhanced crystal weapon seed',
            processingPhase: 'component',
        },
        {
            name: 'Bow of faerdhinen (inactive)',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Venator shard',
            processingPhase: 'component',
        },
        {
            name: 'Venator shard',
            processingPhase: 'component',
        },
        {
            name: 'Venator shard',
            processingPhase: 'component',
        },
        {
            name: 'Imbued heart',
            processingPhase: 'component',
        },
        {
            name: 'Saturated heart',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Godsword shard 1',
            processingPhase: 'component',
        },
        {
            name: 'Godsword shard 2',
            processingPhase: 'component',
        },
        {
            name: 'Godsword shard 3',
            processingPhase: 'component',
        },
        {
            name: 'Godsword blade',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Odium shard 1',
            processingPhase: 'component',
        },
        {
            name: 'Odium shard 2',
            processingPhase: 'component',
        },
        {
            name: 'Odium shard 3',
            processingPhase: 'component',
        },
        {
            name: 'Odium ward',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Malediction shard 1',
            processingPhase: 'component',
        },
        {
            name: 'Malediction shard 2',
            processingPhase: 'component',
        },
        {
            name: 'Malediction shard 3',
            processingPhase: 'component',
        },
        {
            name: 'Malediction ward',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: "Hydra's claw",
            processingPhase: 'component',
        },
        {
            name: 'Zamorakian hasta',
            processingPhase: 'component',
        },
        {
            name: 'Dragon hunter lance',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Primordial crystal',
            processingPhase: 'component',
        },
        {
            name: 'Dragon boots',
            processingPhase: 'component',
        },
        {
            name: 'Primordial boots',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Ranger boots',
            processingPhase: 'component',
        },
        {
            name: 'Pegasian crystal',
            processingPhase: 'component',
        },
        {
            name: 'Pegasian boots',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Bandos hilt',
            processingPhase: 'component',
        },
        {
            name: 'Godsword blade',
            processingPhase: 'component',
        },
        {
            name: 'Bandos godsword',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Saradomin hilt',
            processingPhase: 'component',
        },
        {
            name: 'Godsword blade',
            processingPhase: 'component',
        },
        {
            name: 'Saradomin godsword',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Zamorak hilt',
            processingPhase: 'component',
        },
        {
            name: 'Godsword blade',
            processingPhase: 'component',
        },
        {
            name: 'Zamorak godsword',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Ancient hilt',
            processingPhase: 'component',
        },
        {
            name: 'Godsword blade',
            processingPhase: 'component',
        },
        {
            name: 'Ancient godsword',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Heavy frame',
            processingPhase: 'component',
        },
        {
            name: 'Ballista limbs',
            processingPhase: 'component',
        },
        {
            name: 'Ballista spring',
            processingPhase: 'component',
        },
        {
            name: 'Monkey tail',
            processingPhase: 'component',
        },
        {
            name: 'Heavy ballista',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Blessed spirit shield',
            processingPhase: 'component',
        },
        {
            name: 'Arcane sigil',
            processingPhase: 'component',
        },
        {
            name: 'Arcane spirit shield',
            processingPhase: 'product',
        },
    ],
    [
        {
            name: 'Blessed spirit shield',
            processingPhase: 'component',
        },
        {
            name: 'Spectral sigil',
            processingPhase: 'component',
        },
        {
            name: 'Spectral spirit shield',
            processingPhase: 'product',
        },
    ],
]

const randomGroupsBasic = [
    [
        {
            name: 'Magic fang',
            processingPhase: 'component',
        },
        {
            name: 'Uncharged trident',
            processingPhase: 'component',
        },
        {
            name: 'Uncharged toxic trident',
            processingPhase: 'product',
        },
    ],
]

const barrowsItemGroupsBasic = [
    [
        {
            fixedName: "Dharok's greataxe",
            brokenName: "Dharok's greataxe 0",
            type: 'weapon',
            processingPhase: 'component',
        },
        {
            fixedName: "Dharok's helm",
            brokenName: "Dharok's helm 0",
            type: 'helm',
            processingPhase: 'component',
        },
        {
            fixedName: "Dharok's platebody",
            brokenName: "Dharok's platebody 0",
            type: 'body',
            processingPhase: 'component',
        },
        {
            fixedName: "Dharok's platelegs",
            brokenName: "Dharok's platelegs 0",
            type: 'legs',
            processingPhase: 'component',
        },
        {
            name: "Dharok's armour set",
            processingPhase: 'product',
        }
    ],
    [
        {
            fixedName: "Ahrim's staff",
            brokenName: "Ahrim's staff 0",
            type: 'weapon',
            processingPhase: 'component',
        },
        {
            fixedName: "Ahrim's hood",
            brokenName: "Ahrim's hood 0",
            type: 'helm',
            processingPhase: 'component',
        },
        {
            fixedName: "Ahrim's robetop",
            brokenName: "Ahrim's robetop 0",
            type: 'body',
            processingPhase: 'component',
        },
        {
            fixedName: "Ahrim's robeskirt",
            brokenName: "Ahrim's robeskirt 0",
            type: 'legs',
            processingPhase: 'component',
        },
        {
            name: "Ahrim's armour set",
            processingPhase: 'product',
        }
    ],
    [
        {
            fixedName: "Verac's flail",
            brokenName: "Verac's flail 0",
            type: 'weapon',
            processingPhase: 'component',
        },
        {
            fixedName: "Verac's helm",
            brokenName: "Verac's helm 0",
            type: 'helm',
            processingPhase: 'component',
        },
        {
            fixedName: "Verac's brassard",
            brokenName: "Verac's brassard 0",
            type: 'body',
            processingPhase: 'component',
        },
        {
            fixedName: "Verac's plateskirt",
            brokenName: "Verac's plateskirt 0",
            type: 'legs',
            processingPhase: 'component',
        },
        {
            name: "Verac's armour set",
            processingPhase: 'product',
        }
    ],
    [
        {
            fixedName: "Guthan's warspear",
            brokenName: "Guthan's warspear 0",
            type: 'weapon',
            processingPhase: 'component',
        },
        {
            fixedName: "Guthan's helm",
            brokenName: "Guthan's helm",
            type: 'helm',
            processingPhase: 'component',
        },
        {
            fixedName: "Guthan's platebody",
            brokenName: "Guthan's platebody 0",
            type: 'body',
            processingPhase: 'component',
        },
        {
            fixedName: "Guthan's chainskirt",
            brokenName: "Guthan's chainskirt 0",
            type: 'legs',
            processingPhase: 'component',
        },
        {
            name: "Guthan's armour set",
            processingPhase: 'product',
        }
    ],
    [
        {
            fixedName: "Karil's crossbow",
            brokenName: "Karil's crossbow 0",
            type: 'weapon',
            processingPhase: 'component',
        },
        {
            fixedName: "Karil's coif",
            brokenName: "Karil's coif 0",
            type: 'helm',
            processingPhase: 'component',
        },
        {
            fixedName: "Karil's leathertop",
            brokenName: "Karil's leathertop 0",
            type: 'body',
            processingPhase: 'component',
        },
        {
            fixedName: "Karil's leatherskirt",
            brokenName: "Karil's leatherskirt 0",
            type: 'legs',
            processingPhase: 'component',
        },
        {
            name: "Karil's armour set",
            processingPhase: 'product',
        }
    ],
]


//creates a flat objects of all names in the processingItemGroups object and gets all IDs, imgs, etc from the mapping object
const processingMappingListUnclean = fullItemList.filter((item: any) => processingItemGroupsBasic.map((group) => group.map((item) => item.name)).flat().includes(item.name));
const randomMappingListUnclean = fullItemList.filter((item: any) => randomGroupsBasic.map((group) => group.map((item) => item.name)).flat().includes(item.name));

const processingMappingList = processingMappingListUnclean.map(({ examine, highalch, limit, lowalch, members, value, ...keep }) => keep);
const randomMappingList = randomMappingListUnclean.map(({ examine, highalch, limit, lowalch, members, value, ...keep }) => keep);


export const processingGroups = processingItemGroupsBasic.map((group) => {
    return (
        group.map((item) => {
            return {
                ...item,
                ...processingMappingList.filter((mapItem) => mapItem.name === item.name)[0],
            }
        })
    )
})

export const randomGroups = randomGroupsBasic.map((group) => {
    return (
        group.map((item) => {
            return {
                ...item,
                ...randomMappingList.filter((mapItem) => mapItem.name === item.name)[0],
            }
        })
    )
})

const barrowsMappingListUnclean = fullItemList.filter((item) => barrowsItemGroupsBasic.map((group) => group.map((item) => [item.fixedName, item.brokenName, item.name])).flat().flat().filter((item) => item !== undefined).includes(item.name));
const barrowsMappingList = barrowsMappingListUnclean.map(({ examine, highalch, limit, lowalch, members, value, ...keep }) => keep);

export const barrowsGroups = barrowsItemGroupsBasic.map((group) => {
    return (
        group.map((item) => {
            let fixedItem = barrowsMappingList.filter((mapItem) => mapItem.name === item.fixedName)[0];
            let brokenItem = barrowsMappingList.filter((mapItem) => mapItem.name === item.brokenName)[0];
            let setItem = barrowsMappingList.filter((mapItem) => mapItem.name === item.name)[0];

            return {
                ...item,
                fixedId: fixedItem?.id,
                fixedIcon: fixedItem?.icon,
                brokenId: brokenItem?.id,
                brokenIcon: brokenItem?.icon,
                setId: setItem?.id,
                setIcon: setItem?.icon,
            };
        })
    );
})
