import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { processingGroups, barrowsGroups, randomGroups } from '../importantItemsList';



export type ItemState = {
	increaseAmount: number,
	processingGroups: any,
	randomGroups: any,
	barrowsGroups: any,
	allPrices: any,
}

const initialState: ItemState = {
	increaseAmount: 4,
	processingGroups: [],
	randomGroups: [],
	barrowsGroups: [],
	allPrices: [],
}




export const merchantSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		setGroups: (state, action: PayloadAction<any>) => {
			state.allPrices = action.payload;
			state.processingGroups = mergeProcessingGroupList(action.payload);
			state.randomGroups = mergeRandomGroupsGroupList(action.payload);
			state.barrowsGroups = mergeBarrowsGroupList(action.payload);
		},
		setIncreaseAmount: (state, action: PayloadAction<any>) => {
			state.increaseAmount = action.payload;
		},
	},
	extraReducers: (builder) => {

	},
})


export const {
	setGroups,
	setIncreaseAmount,
} = merchantSlice.actions;

export const selectProcessingGroups = (state: RootState) => state.items.processingGroups;
export const selectBarrowsGroups = (state: RootState) => state.items.barrowsGroups;
export const selectRandomGroups = (state: RootState) => state.items.randomGroups;
export const selectIncreaseAmount = (state: RootState) => state.items.increaseAmount;


export default merchantSlice.reducer;

const mergeProcessingGroupList = (pricesList: any) => {
	return processingGroups.map((group: any, index: number) => {
		let processedGroup =
		{
			items: group.map((item: any) => {
				return {
					...item,
					...pricesList[item.id],
				}
			}),
			profit: 0,
			product: null,
			id: 0,
		};
		processedGroup.id = index;
		processedGroup.product = processedGroup.items.filter((item: any) => item.processingPhase === 'product')[0]['name'];
		let cost = 0;
		processedGroup.items.filter((item: any) => item.processingPhase === 'component').forEach((component: any) => {
			cost += component.low;
		});
		processedGroup.profit = Math.round(processedGroup.items.filter((item: any) => item.processingPhase === 'product')[0].high * 0.99) - cost;
		return processedGroup;
	}).sort((groupA: any, groupB: any) => groupB.profit - groupA.profit);
};

const mergeRandomGroupsGroupList = (pricesList: any) => {
	return randomGroups.map((group: any, index: number) => {
		let randomGroup =
		{
			items: group.map((item: any) => {
				return {
					...item,
					...pricesList[item.id],
				}
			}),
			profit: 0,
			product: null,
			id: 0,
		};
		randomGroup.id = index;
		randomGroup.product = randomGroup.items.filter((item: any) => item.processingPhase === 'product')[0]['name'];
		let cost = 0;
		randomGroup.items.filter((item: any) => item.processingPhase === 'component').forEach((component: any) => {
			cost += component.low;
		});
		randomGroup.profit = Math.round(randomGroup.items.filter((item: any) => item.processingPhase === 'product')[0].high * 0.99) - cost;
		return randomGroup;
	}).sort((groupA: any, groupB: any) => groupB.profit - groupA.profit);
};

const mergeBarrowsGroupList = ((pricesList: any) => {
	return barrowsGroups.map((group: any, index: number) => {
		let mappedBarrowsGroup = group.map((item: any) => {
			let fixBrokenPrice = 0;
			switch (item.type) {
				case 'weapon': {
					fixBrokenPrice = pricesList[item.brokenId].low + 60000;
					break;
				}
				case 'helm': {
					fixBrokenPrice = pricesList[item.brokenId].low + 36000;
					break;
				}
				case 'legs': {
					fixBrokenPrice = pricesList[item.brokenId].low + 48000;
					break;
				}
				case 'body': {
					fixBrokenPrice = pricesList[item.brokenId].low + 54000;
					break;
				}
            }
			return {
				...item,
				id: 0,
				priceFixed: !item.setId ? pricesList[item.fixedId]?.low : undefined,
				priceBroken: !item.setId ? fixBrokenPrice : undefined,
				priceSet: item.setId ? pricesList[item.setId]?.high : undefined,
			}
		});
		let minimumCost = 0;
		let maximumCost = 0;
		let revenue = 0;
		mappedBarrowsGroup.forEach((item: any) => {
			if (item.priceFixed >= item.priceBroken) {
				maximumCost += item.priceFixed;
				minimumCost += item.priceBroken;
			} else if (!item.priceSet) {
				maximumCost += item.priceBroken;
				minimumCost += item.priceFixed;
			} else {
				revenue = item.priceSet;
            }
		});
		return {
			id: index,
			items: mappedBarrowsGroup,
			maxProfit: Math.round(revenue*0.99 - minimumCost),
			minProfit: Math.round(revenue*0.99 - maximumCost),
		}
	}).sort((groupA: any, groupB: any) => groupB.maxProfit - groupA.maxProfit);;
});