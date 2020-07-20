class demoContraller {
    constructor() {
        
    }

    demo(ctx) {
        ctx.body = {
            msg: 'new class demo api???'
        }
    }
}

export default new demoContraller() 