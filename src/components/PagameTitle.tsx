import { Component } from "react";

interface PagameTitleProps {
  className?: string;
}

export class PagameTitle extends Component<PagameTitleProps>{
  render() {
    const {className} = this.props;
    return (
      <p className={`text-white ${className} font-semibold`}>
        <span className="inline">PAGA</span>
        <span className="text-[#3DA2FD] inline">ME</span>
      </p>
    );
  }
}


export default PagameTitle;
