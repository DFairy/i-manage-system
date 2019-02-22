<template>
   <div class="animate" >
       <div class="any" @click="init">
           <div class="myAnimation"></div>
       </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            ball:'',
            targetTop:0,//目的地
            targetLeft:0,
            nowX:0,//开始位置
            nowY:0,
            Xspeed:0,//水平方向上的速度
            Yspeed:-5,//垂直方向上的速度
            A:0,//加速度
            loop:0
        }
    },
    methods:{

        init(event){
        /** 
         * 时间t与x轴初速度
         * 水平方向:x=vt,x是水平距离。可以得出水平速度v=x/t
         * 垂直方向:y=0.5at*t,y是垂直距离。可以得出加速度a=2y/(t*t)
         * 当动画的起始点和结束点一定时,若我们设定X轴的初速度为固定值，
         * 则动画的执行时长被固定，此时为了让小球达到既定位置。加速度A需要计算生成。
         */
        // 无残影
        this.addAnimation({x: event.clientX, y:event.clientY});
        // 有残影
        console.log(event.clientX)
        // this.ghost({ x: event.clientX, y: event.clientY }, '', '', 5);
        },
        // 生成普通的小球 传入 1.初始坐标 2.结束点坐标 3.动画执行时长
        addAnimation(startPosition = { x: 0, y: 0 }, endPosition, time, num, ghost = false){
            this.ball= document.createElement('div');
            !ghost ? this.ball.className = 'myAnimation' : this.ball.className = 'ghost';
            this.ball.style.top = startPosition.y + 'px';
            this.ball.style.left = startPosition.x + 'px';
            const any=document.getElementsByClassName('any')[0]
            console.log(any)
            any.appendChild(this.ball);

            // 目的地
            this.targetTop = document.body.offsetHeight||endPosition.y  ;
            this.targetLeft = document.body.offsetWidth || endPosition.x;

            // 采用固定动画时长方式
            // 前者为动画预计执行时间 (非真正看到的动画时间正相关)
            // 后者为每次动画执行间隔 (以普通60Hz的显示器为示范，每次刷新的间隔为 1/60 s)
            let Time = time / 0.016 || (0.8 / 0.016);

            this.Xspeed = (this.targetLeft - (startPosition.x)) / Time;
        
            // 设置一个加速度A  已知 L = 0.5 * A * T * T + Y * T
            this.A = (2 * (this.targetTop - (startPosition.y) - this.Yspeed * Time)) / (Time * Time);

            // 时间单位 用以配合加速度计算当前速度 speed = Yspeed + A * T
            this.nowX = startPosition.x;
            this.nowY = startPosition.y;

            this.move(num,ghost);
        },
        // 执行动画
        move(num,ghost){
            // 解决少数浏览器兼容性问题
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = (fn, t = 16.6) => {
                    setTimeout(fn, t);
                };
            }
            
            // 判断是否要停止
            if (this.nowY >= this.targetTop) {
                // 停止 隐藏 销毁 退出
                this.ball.remove();
                return;
            }
            // 根据当前速度 计算最新位置
            this.nowX += this.Xspeed;
            this.nowY += (this.A * this.loop + this.Yspeed);
            
            let Timer = requestAnimationFrame(() => {
                this.ball.style.top = Math.min(this.nowY, this.targetTop) + 'px';
                this.ball.style.left = Math.min(this.nowX, this.targetLeft) + 'px';
                this.loop++;
                if (ghost) {
                    this.ball.style.transform = `translate(${-(num * this.Xspeed)}px ,${-(num * (this.A * this.loop + this.Yspeed))}px)`;
                    this.ball.style.opacity = (1 - num) * 0.5;
                }
                this.move(num,ghost)
            });
        },
        // 生成有动态模糊的小球 需要传入 1.初始坐标 2.结束点坐标 3.动画执行时长 4.残影小球个数
        ghost(startPosition, endPosition, time, num){
            for (let i = 0; i < num; i++) {
                this.addAnimation(startPosition, endPosition, time, i / (num + 1), true);
            }
        }


    }
}
</script>

<style lang='less' scoped>
.animate{
     width: 100%;
     height: 100%;
}
.any{
    width: 100%;
    height: 100%;
}
.myAnimation {
    // position: fixed;
    width: 20px;
    height: 20px;
    background-color: #f5a631;
    border-radius: 100%;
    z-index: 99;
}
.ghost {
    // position: fixed;
    width: 20px;
    height: 20px;
    background-color: #f5a631;
    border-radius: 100%;
    z-index: 98;
}
</style>