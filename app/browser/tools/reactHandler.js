class ReactHandler {
    getOutlook2IdleTracker() {
        const outlook2CoreServices = this._getOutlook2CoreServices();
        return outlook2CoreServices?.clientState?._idleTracker;
    }

    getOutlook2ClientPreferences() {
        const outlook2CoreServices = this._getOutlook2CoreServices();
        return outlook2CoreServices?.clientPreferences?.clientPreferences;
    }

    _getOutlook2ReactElement() {
        return document.getElementById('app');
    }

    _getOutlook2CoreServices() {
        const reactElement = this._getOutlook2ReactElement();
        const internalRoot = reactElement?._reactRootContainer?._internalRoot || reactElement?._reactRootContainer;
        return internalRoot?.current?.updateQueue?.baseState?.element?.props?.coreServices;
    }
}
//document.getElementById('app')._reactRootContainer.current.updateQueue.baseState.element.props.coreServices

module.exports = new ReactHandler();