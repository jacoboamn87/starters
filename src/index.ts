import { CommandMap, Namespace, execute } from '@ionic/cli-framework';

import { BuildCommand } from './commands/build';
import { DeployCommand } from './commands/deploy';

class StartersNamespace extends Namespace {
  async getMetadata() {
    return {
      name: 'ionic-starters',
      description: '',
    };
  }

  async getCommands(): Promise<CommandMap> {
    return new CommandMap([
      ['build', async () => new BuildCommand(this)],
      ['deploy', async () => new DeployCommand(this)],
    ]);
  }
}

const ns = new StartersNamespace();

export async function run(pargv: string[], env: { [k: string]: string; }) {
  await execute(ns, pargv, env);
}
