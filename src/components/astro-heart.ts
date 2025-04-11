export class AstroHeart extends HTMLElement {
    static get observedAttributes() {
        return [
            'data-type',
            'data-count',
        ];
    }
    
    customEvent: CustomEvent | null = null;
    type: string = '';
    count: number = 0;

    constructor() {
        super();
        this.type = '';
        this.count = 0;
    }

    connectedCallback() {
        this.type = this?.getAttribute('data-type') || '';
        this.count =  Number(this?.getAttribute('data-count')) || 0;
        this.render();
        this._clickHandler()
    }

    disconnectedCallback() {
        this.querySelector('button')?.removeEventListener('click', this._clickHandler);
    }

    _clickHandler() {
        const button = this.querySelector('button') as HTMLButtonElement;
        if (button) {
            button.addEventListener('click', () => {
                if (typeof this.count !== 'number') {
                    this.count = 0; // count가 정의되지 않았을 경우 초기화
                }
                this.count += 1;

                // 사용자 정의 이벤트 발생
                window.dispatchEvent(new CustomEvent('heart-click', {
                    detail: { count: this.count },
                    bubbles: true,
                    composed: true,
                }));
                this.setAttribute('data-count', `${this.count}`);
            });
        }
    }

    attributeChangedCallback(attrName: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) {
            console.log(newVal);
            switch (attrName) {
                case 'data-type':
                    this.type = newVal || '';
                    break;
                case 'data-count':
                    this.count = Number(newVal) || 0;
                    break;
                default:
                    break;
            }
            this.render();
            this._clickHandler();
        }
    }

    render() {
        this.innerHTML = /* HTML */ `<button aria-label="Heart">💜</button> × <span>${this.count}</span>`;
    }
}

if (!customElements.get('astro-heart')) {
    customElements.define('astro-heart', AstroHeart);
}
