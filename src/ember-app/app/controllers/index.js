import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dfdf.caption'),
          title: i18n.t('forms.application.sitemap.dfdf.title'),
          children: [{
            link: 'i-i-s-dfdf-дир-персонала-l',
            caption: i18n.t('forms.application.sitemap.dfdf.i-i-s-dfdf-дир-персонала-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdf.i-i-s-dfdf-дир-персонала-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-dfdf-согласие-l',
            caption: i18n.t('forms.application.sitemap.dfdf.i-i-s-dfdf-согласие-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdf.i-i-s-dfdf-согласие-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-dfdf-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.dfdf.i-i-s-dfdf-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdf.i-i-s-dfdf-сотрудники-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})