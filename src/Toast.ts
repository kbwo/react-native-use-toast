import { Popup, PopupProps } from './Popup';

export class Toast {
  id?: number;
  props: PopupProps;
  constructor(id: number, props: PopupProps) {
    this.id = id;
    this.props = props;
  }
  render() {
    return Popup(this.props);
  }
}
