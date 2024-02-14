import {configureStore} from '@reduxjs/toolkit'
import SideBarSlice from './SideBarSlice'
import YtDataSlice from './YtDataSlice'
import CacheSearchSlice from './CacheSearchSlice'
import LiveChatSlice from './LiveChatSlice'
import ChannelIdSlice from './ChannelIdSlice'
import SubscriberSlice from './SubscriberSlice'


export const Store = configureStore({
    reducer:{
        sideBar:SideBarSlice,
        ytData: YtDataSlice,
        cacheSearch: CacheSearchSlice,
        LiveChat: LiveChatSlice,
        ChannelId: ChannelIdSlice,
        Subscriber:SubscriberSlice,
    }

})