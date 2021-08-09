import Icon from '@ant-design/icons';

const CircleSvg = () => (
    <svg viewBox="64 64 896 896" focusable="false" data-icon="up-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
    </svg>
);

const CircleOutlined = props => <Icon component={CircleSvg} {...props} />;

export default CircleOutlined;
