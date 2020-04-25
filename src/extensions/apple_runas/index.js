const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

// eslint-disable-next-line max-len
const menuIconURI = 'data:image/png;base64,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';

const blockIconURI = menuIconURI;

class AppleRunAsBlock {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'runas',
            name: 'Run As',
            blockIconURI,
            menuIconURI,
            blocks: [
                {
                    opcode: 'runAs',
                    text: 'run as [TARGET]',
                    blockType: BlockType.LOOP,
                    arguments: {
                        TARGET: {
                            type: ArgumentType.STRING,
                            menu: 'targetMenu',
                            defaultValue: '_stage_'
                        }
                    }
                }
            ],
            menus: {
                targetMenu: {
                    acceptReporters: true,
                    items: 'getTargetMenu'
                }
            }
        };
    }

    getTargetMenu () {
        const targets = this.runtime.targets.filter(t => t.isOriginal && !t.isStage).map(t => ({
            text: t.getName(),
            value: t.getName()
        }));
        return [{text: 'Stage', value: '_stage_'}, ...targets];
    }

    runAs (args, util) {
        const target = args.TARGET === '_stage_' ?
            util.runtime.getTargetForStage() :
            util.runtime.targets.find(t => t.isOriginal && !t.isStage && t.getName() === args.TARGET);
        if (typeof util.stackFrame.runAsExecuted === 'undefined') {
            util.stackFrame.runAsExecuted = false;
        }
        if (util.stackFrame.runAsExecuted) {
            console.log("runAs escaped");
            util.thread.escapeFakeTarget();
            util.stackFrame.runAsExecuted = false;
        } else if (target) {
            console.log("runAs executed, in the scope", target);
            util.stackFrame.runAsExecuted = true;
            util.thread.setFakeTarget(target);
            util.startBranch(1, true);
        }
    }
}

module.exports = AppleRunAsBlock;
