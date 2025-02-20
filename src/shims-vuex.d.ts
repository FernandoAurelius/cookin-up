import { Store } from 'vuex';
import { ComponentCustomProperties } from 'vue';
import { State } from '@/interfaces/State';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}