class MyNewSynth_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlug;
    super(options);
  }
}

registerProcessor("MyNewSynth", MyNewSynth_AWP);
