import {createAnimation} from "@ionic/react";

const animationBuilder = (baseEl: any, opts?: any) => {
    const enterTransition = createAnimation().addElement(opts.enteringEl);
    const exitTransition = createAnimation().addElement(opts.leavingEl);
    enterTransition.fromTo('transform', 'translateX(-1.5%)', 'translateX(0%)');
    exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(1.5%)');
    return createAnimation()
        .addAnimation(enterTransition.duration(550))
        .addAnimation(exitTransition.duration(550));
        // .addAnimation(createAnimation()
        //     .addElement(opts.enteringEl)
        //     .fromTo('translateY', '0%','100%')
        //     .duration(250));
        // .addAnimation(createAnimation()
        //     .addElement(opts.enteringEl)
        //     .fromTo('opacity', 0, 1)
        //     .duration(250))
        // .addAnimation(createAnimation()
        //     .addElement(opts.leavingEl)
        //     .fromTo('opacity', 1, 0)
        //     .duration(250));
};
export default animationBuilder;
