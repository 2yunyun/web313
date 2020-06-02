import user from '@/mock/user';
import menu from '@/mock/menu';
import oauth from '@/mock/oauth';
import param from '@/mock/param';

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 */

const options = {mock: false};

user(options);

menu(options);

oauth(options);

param(options);
