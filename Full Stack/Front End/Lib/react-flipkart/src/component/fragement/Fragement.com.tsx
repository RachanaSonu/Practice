export const Fragement: React.FC<{}> = () => {
    return <>
        <h3>What is React Fragement?</h3>
        <p>React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.<br />To return multiple elements from a React component, you'll need to wrap the element in a root element.(empty of any elements)
            <h3>Why do we use fragments in React?</h3>
            React fragments serve as a cleaner alternative to using unnecessary divs in our code. These fragments do not produce any extra elements in the DOM, which means that a fragment’s child components will render without any wrapping DOM node.</p></>
}