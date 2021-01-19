new Vue({
    el: "#app",
    data: {
        loading: false,
        nextItem: 1,
        items: []
    },
    mounted(){
        const listElm = document.querySelector('#infinitive-list');
        listElm.addEventListener('scroll', (ev) => {
            if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight){
                this.loadMore();
            }
        });
        this.loadMore();
    },
    methods: {
        loadMore(){
            this.loading = true;
            setTimeout((e) => {
                for(let i=0; i < 20; i++){
                    this.items.push('Item ' +this.nextItem++)
                }
                this.loading = false;
            },1000)
        }
    }
})