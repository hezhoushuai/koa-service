import svgCaptcha from 'svg-captcha'

class PublicContorller {
    constructor() {
        
    }

    async getCaptcha(ctx) {
        const newCaptcha = svgCaptcha.create({})
        ctx.body = {
            code: 200,
            data: newCaptcha.data
        }
    }

    demo(ctx) {
        ctx.body = {
            msg: 'new class demo api???'
        }
    }
}

export default new PublicContorller() 