/**
 * @description 常用方法
 * @author spoony-z
 * @returns {Boolean}
 */
/**
 * @description 判断是否为图片路径
 * @param {String} url 路径
 * @returns {Boolean}
 */
export declare function getPromises(url: string): Promise<boolean>;
interface Node<T> {
    [key: string]: any;
    children?: Node<T>[];
}
/**
 * @description 递归数组返回想要的值，返回所有匹配到的节点组成的数组
 * @param {Array}           list        要递归的数组
 * @param {String}          childKey    子集字段
 * @param {String}          key         要匹配的字段（===判断）
 * @param {String/Number}   val         要匹配字段所对应的值（===判断）
 * @returns {Array} 返回所有匹配到的数据
 */
export declare function getNode<T>(list: Node<T>[], childKey: string, key: string, val: T, result?: Node<T>[]): Node<T>[];
interface Nodes {
    [key: string]: any;
    children?: Nodes[];
}
/**
 * @description 递归数组，返回所有匹配到的父级数据
 * @param {Array} list 要递归的数组
 * @param {String} id 子集字段值
 * @param {String} fieldName 子集字段名
 * @param {String} children 子集
 * @returns {Array} 返回所有匹配到的数据
 */
export declare function getParentIdAll(list: Nodes[], fieldName: string, id: any, children: string): Nodes[] | undefined;
export {};
