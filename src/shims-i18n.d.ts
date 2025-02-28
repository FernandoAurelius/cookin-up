import { t, i18n } from 'i18n';
import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $t: t,
        $i18n: i18n
    }
}