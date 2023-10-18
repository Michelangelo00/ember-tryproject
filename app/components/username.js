import Component from '@glimmer/component';

export default class UsernameComponent extends Component {
  get currentTime() {
    return new Date();
  }
}
